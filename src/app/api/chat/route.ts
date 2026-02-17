import { spawn } from 'child_process';
import { NextRequest } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

const MAX_MESSAGE_LENGTH = 2000;
const PROCESS_TIMEOUT_MS = 30000;
const RATE_LIMIT_WINDOW_MS = 60000;
const RATE_LIMIT_MAX_REQUESTS = 10;

// Simple in-memory rate limiter (per IP)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

// Allowed environment variables for spawned process
const ALLOWED_ENV_KEYS = ['PATH', 'LANG', 'NODE_ENV'];

// Claude CLI path and user configuration (can be overridden via env vars)
const CLAUDE_PATH = process.env.CLAUDE_PATH || '/home/ubuntu/.local/bin/claude';
const CLAUDE_HOME = process.env.CLAUDE_HOME || '/home/ubuntu';
const CLAUDE_USER = process.env.CLAUDE_USER || 'ubuntu';

function getSafeEnv(): NodeJS.ProcessEnv {
  const safeEnv: Record<string, string | undefined> = {};
  for (const key of ALLOWED_ENV_KEYS) {
    if (process.env[key]) {
      safeEnv[key] = process.env[key];
    }
  }
  // Set HOME and USER explicitly for claude CLI
  safeEnv['HOME'] = CLAUDE_HOME;
  safeEnv['USER'] = CLAUDE_USER;
  return safeEnv as NodeJS.ProcessEnv;
}

// Load chatbot context at startup
let chatbotContext = '';
try {
  const contextPath = join(process.cwd(), 'src/lib/chatbot-context.md');
  chatbotContext = readFileSync(contextPath, 'utf-8');
} catch {
  chatbotContext = 'PopcornSAR is a company specializing in AUTOSAR solutions.';
}

const LANGUAGE_CONFIG: Record<string, { name: string; answerRule: string; unknownMsg: string; timeoutMsg: string; errorMsg: string; systemErrorMsg: string; promptLabel: string; answerLabel: string }> = {
  kr: {
    name: 'Korean',
    answerRule: '한국어로 답변하세요.',
    unknownMsg: '해당 정보는 확인이 어렵습니다. sales@popcornsar.com으로 문의해 주세요.',
    timeoutMsg: '요청 시간이 초과되었습니다. 다시 시도해 주세요.',
    errorMsg: '죄송합니다. 응답 생성 중 오류가 발생했습니다.',
    systemErrorMsg: '죄송합니다. 시스템 오류가 발생했습니다.',
    promptLabel: '사용자 질문',
    answerLabel: '답변',
  },
  en: {
    name: 'English',
    answerRule: 'Answer in English.',
    unknownMsg: 'I don\'t have that information. Please contact sales@popcornsar.com for details.',
    timeoutMsg: 'Request timed out. Please try again.',
    errorMsg: 'Sorry, an error occurred while generating a response.',
    systemErrorMsg: 'Sorry, a system error occurred.',
    promptLabel: 'User question',
    answerLabel: 'Answer',
  },
  cn: {
    name: 'Chinese',
    answerRule: '用中文回答。',
    unknownMsg: '暂无相关信息。请联系 sales@popcornsar.com 了解详情。',
    timeoutMsg: '请求超时，请重试。',
    errorMsg: '抱歉，生成回复时出现错误。',
    systemErrorMsg: '抱歉，系统出现错误。',
    promptLabel: '用户问题',
    answerLabel: '回答',
  },
  jp: {
    name: 'Japanese',
    answerRule: '日本語で回答してください。',
    unknownMsg: '該当情報の確認が難しいです。sales@popcornsar.com までお問い合わせください。',
    timeoutMsg: 'リクエストがタイムアウトしました。もう一度お試しください。',
    errorMsg: '申し訳ございません。応答の生成中にエラーが発生しました。',
    systemErrorMsg: '申し訳ございません。システムエラーが発生しました。',
    promptLabel: 'ユーザーの質問',
    answerLabel: '回答',
  },
};

function buildSystemPrompt(lang: string): string {
  const config = LANGUAGE_CONFIG[lang] || LANGUAGE_CONFIG.kr;
  return `You are the AI assistant for the PopcornSAR website.
Answer user questions accurately and kindly based on the product and service information below.

Rules:
1. ${config.answerRule}
2. Only answer based on the provided information.
3. If you don't know, say: "${config.unknownMsg}"
4. Keep answers concise and clear (3-5 sentences).
5. Provide specific details for technical questions.

===== Product/Service Information =====
${chatbotContext}
=======================================`;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get('x-forwarded-for') ?? request.headers.get('x-real-ip') ?? 'unknown';
    if (isRateLimited(ip)) {
      return new Response('Too many requests', { status: 429 });
    }

    const { message, language = 'kr' } = await request.json();

    if (!message || typeof message !== 'string') {
      return new Response('Invalid message', { status: 400 });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return new Response(`Message exceeds maximum length of ${MAX_MESSAGE_LENGTH} characters`, { status: 400 });
    }

    const lang = typeof language === 'string' && LANGUAGE_CONFIG[language] ? language : 'kr';
    const config = LANGUAGE_CONFIG[lang];
    const systemPrompt = buildSystemPrompt(lang);

    const fullPrompt = `${systemPrompt}

${config.promptLabel}: ${message}

${config.answerLabel}:`;

    // Create a readable stream for the response
    const stream = new ReadableStream({
      start(controller) {
        const claudeProcess = spawn(CLAUDE_PATH, ['-p'], {
          stdio: ['pipe', 'pipe', 'pipe'],
          env: getSafeEnv(),
        });

        // Process timeout
        const timeout = setTimeout(() => {
          claudeProcess.kill('SIGTERM');
          controller.enqueue(
            new TextEncoder().encode(config.timeoutMsg)
          );
          controller.close();
        }, PROCESS_TIMEOUT_MS);

        // Write prompt to stdin
        claudeProcess.stdin.write(fullPrompt);
        claudeProcess.stdin.end();

        let hasData = false;

        claudeProcess.stdout.on('data', (data: Buffer) => {
          hasData = true;
          const text = data.toString();
          controller.enqueue(new TextEncoder().encode(text));
        });

        claudeProcess.stderr.on('data', () => {
          // stderr captured but not logged to prevent information leakage
        });

        claudeProcess.on('close', (code) => {
          clearTimeout(timeout);
          if (code !== 0 && !hasData) {
            controller.enqueue(
              new TextEncoder().encode(config.errorMsg)
            );
          }
          controller.close();
        });

        claudeProcess.on('error', () => {
          clearTimeout(timeout);
          controller.enqueue(
            new TextEncoder().encode(config.systemErrorMsg)
          );
          controller.close();
        });
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
      },
    });
  } catch {
    return new Response('Internal server error', { status: 500 });
  }
}
