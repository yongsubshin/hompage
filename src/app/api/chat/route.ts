import { spawn } from 'child_process';
import { NextRequest } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

// Load chatbot context at startup
let chatbotContext = '';
try {
  const contextPath = join(process.cwd(), 'src/lib/chatbot-context.md');
  chatbotContext = readFileSync(contextPath, 'utf-8');
} catch (error) {
  console.error('Failed to load chatbot context:', error);
  chatbotContext = 'PopcornSAR는 AUTOSAR 전문 기업입니다.';
}

const SYSTEM_PROMPT = `당신은 PopcornSAR 웹사이트의 AI 어시스턴트입니다.
아래 제품 및 서비스 정보를 기반으로 사용자 질문에 친절하고 정확하게 답변하세요.

규칙:
1. 한국어로 답변하세요.
2. 제공된 정보 내에서만 답변하세요.
3. 모르는 내용은 "해당 정보는 확인이 어렵습니다. sales@popcornsar.com으로 문의해 주세요."라고 안내하세요.
4. 답변은 간결하고 명확하게 작성하세요 (3-5문장).
5. 기술적 질문에는 구체적인 정보를 제공하세요.

===== 제품/서비스 정보 =====
${chatbotContext}
===========================`;

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== 'string') {
      return new Response('Invalid message', { status: 400 });
    }

    const fullPrompt = `${SYSTEM_PROMPT}

사용자 질문: ${message}

답변:`;

    // Create a readable stream for the response
    const stream = new ReadableStream({
      start(controller) {
        // Use stdin to pass the prompt (avoids command line length limits)
        const claudeProcess = spawn('claude', ['-p'], {
          stdio: ['pipe', 'pipe', 'pipe'],
          env: { ...process.env },
        });

        // Write prompt to stdin
        claudeProcess.stdin.write(fullPrompt);
        claudeProcess.stdin.end();

        let hasData = false;

        claudeProcess.stdout.on('data', (data: Buffer) => {
          hasData = true;
          const text = data.toString();
          controller.enqueue(new TextEncoder().encode(text));
        });

        claudeProcess.stderr.on('data', (data: Buffer) => {
          console.error('Claude stderr:', data.toString());
        });

        claudeProcess.on('close', (code) => {
          if (code !== 0) {
            console.error('Claude process exited with code:', code);
            if (!hasData) {
              controller.enqueue(
                new TextEncoder().encode('죄송합니다. 응답 생성 중 오류가 발생했습니다.')
              );
            }
          }
          controller.close();
        });

        claudeProcess.on('error', (error) => {
          console.error('Claude process error:', error);
          controller.enqueue(
            new TextEncoder().encode('죄송합니다. 시스템 오류가 발생했습니다.')
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
  } catch (error) {
    console.error('Chat API error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
