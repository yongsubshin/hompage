import type { Language } from "./translations";

interface PageMeta {
  title: string;
  description: string;
}

type PageMetadataMap = Record<string, PageMeta>;

export const pageMetadata: Record<Language, PageMetadataMap> = {
  kr: {
    "/": {
      title: "PopcornSAR | ASPICE V-Model 자동화 & AI 테스트케이스 생성",
      description: "ASPICE V-Model 자동화 전문 기업 PopcornSAR. AI 테스트케이스 자동 생성, ISO 26262 검증, AUTOSAR 개발 도구 제공.",
    },
    "/products": {
      title: "제품",
      description: "ASPICE 자동화 AI 도구 PARVIS와 AUTOSAR 개발 플랫폼. AutoSAR.io, PARA, PACON IDE 제공.",
    },
    "/products/adaptive": {
      title: "AUTOSAR Tool Kit - Adaptive AUTOSAR 통합 개발 도구",
      description: "AutoSAR.io, PARA, PACON IDE 통합 Adaptive AUTOSAR 개발 도구. ARXML 설계부터 빌드/테스트까지.",
    },
    "/products/autosario": {
      title: "AutoSAR.io - AUTOSAR ARXML 설계 도구",
      description: "AUTOSAR Classic/Adaptive ARXML 설계 도구. Manifest 편집, 소스코드 생성, 웹 기반 플랫폼.",
    },
    "/products/para": {
      title: "PARA - AUTOSAR Adaptive Functional Clusters",
      description: "AUTOSAR Adaptive Functional Cluster API/C++ Generator. ISO 26262 안전 메커니즘 포함, R20-11 지원.",
    },
    "/products/pacon": {
      title: "PACON IDE - VSCode 기반 AUTOSAR 통합 개발 환경",
      description: "Docker 가상 ECU 환경 Adaptive Application 개발. ARA API 자동완성, Jenkins CI/CD 통합.",
    },
    "/products/ai": {
      title: "PARVIS - AI 테스트케이스 자동 생성 & ASPICE V-Model 자동화",
      description: "ASPICE 테스트케이스 AI 자동 생성(86.4% 커버리지). ISO 26262 검증, MISRA-C 94% 준수, V-Model 전과정 자동화.",
    },
    "/products/parvisadk": {
      title: "PARVIS ADK - SDV 개발 자동화 & TDD 테스트케이스 자동 생성",
      description: "CAN DBC/ARXML 기반 SDV End-to-End 자동화. TDD 테스트케이스 AI 생성, ASPICE/V-Model 자동 준수.",
    },
    "/products/aiagent": {
      title: "AUTOSAR AI Agent - AI 기반 AUTOSAR 개발 지원 도구",
      description: "AI 자연어로 AUTOSAR 개발. ARXML 자동 생성, API/SWS 검색, 개발 시간 70%+ 절감.",
    },
    "/solution": {
      title: "솔루션",
      description: "Cloud Native, Digital Twin, AI 기반 AUTOSAR 솔루션. MATLAB 연동, PARVIS Agent 제공.",
    },
    "/solution/cloudnative": {
      title: "Cloud Native AUTOSAR - 클라우드 기반 AA 개발 솔루션",
      description: "AWS 기반 AUTOSAR Adaptive Application 개발. ARM64 Docker 가상 ECU, CI/CD 파이프라인.",
    },
    "/solution/digital": {
      title: "Digital Twin - 가상 시뮬레이션 AA 검증 솔루션",
      description: "가상 시뮬레이션 AUTOSAR AA 기능 검증. 실제 ECU 없이 개발 초기부터 테스트 가능.",
    },
    "/solution/ai": {
      title: "AI for Adaptive Platforms - AI 연동 AA 개발 솔루션",
      description: "AI/ML 워크로드를 AUTOSAR Adaptive Platform에 통합. 지능형 차량 기능 구현 솔루션.",
    },
    "/solution/aiagent": {
      title: "PARVIS Agent - AI 기반 AUTOSAR 자동 마이그레이션",
      description: "AI 에이전트로 AUTOSAR 자동 마이그레이션. Classic에서 Adaptive 전환, 버전 업그레이드 자동 수행.",
    },
    "/solution/matlab": {
      title: "MATLAB & Simulink 연동 - AUTOSAR 호환 개발 솔루션",
      description: "MATLAB/Simulink와 AUTOSAR 호환 개발 솔루션. 기존 모델을 Adaptive 환경에 통합.",
    },
    "/service": {
      title: "서비스",
      description: "ASPICE 컨설팅, AUTOSAR 구현 지원, 교육, AI Agent Core 교육 등 전문 엔지니어링 서비스.",
    },
    "/service/consulting": {
      title: "컨설팅 서비스 - ASPICE/AUTOSAR 프로젝트 전문 컨설팅",
      description: "ASPICE 인증 컨설팅, AUTOSAR 아키텍처 설계, 프로세스 수립. 맞춤형 프로젝트 컨설팅.",
    },
    "/service/autosar": {
      title: "AUTOSAR 구현 서비스 - ECU 프로젝트 AUTOSAR 적용 지원",
      description: "ECU 프로젝트 AUTOSAR Classic/Adaptive 구현 지원. 양산 프로젝트 경험 기반 실전 서비스.",
    },
    "/service/education": {
      title: "AUTOSAR 교육 - ECU 양산 프로젝트를 위한 전문 교육",
      description: "ASPICE/AUTOSAR Classic & Adaptive 전문 교육. ECU 양산 실무 중심, 입문~고급 커리큘럼.",
    },
    "/service/tool": {
      title: "맞춤 개발 서비스 - AUTOSAR 프로젝트 맞춤형 도구 개발",
      description: "프로젝트 맞춤형 AUTOSAR 개발 도구 제작. 자동화 스크립트, 플러그인, 전용 도구.",
    },
    "/service/ai": {
      title: "AI Agent Core 교육 - SDV AI 에이전트 설계 교육",
      description: "SDV 특화 AI Agent 설계 교육. AI 에이전트 아키텍처, LLM 활용 실무 중심 과정.",
    },
    "/company": {
      title: "회사소개",
      description: "ASPICE/AUTOSAR Adaptive Platform 선두 기업. 50+ 글로벌 고객사, 100+ 프로젝트 경험.",
    },
    "/company/contact": {
      title: "문의하기",
      description: "PopcornSAR 문의. 한국 본사(서울), 일본 법인(도쿄). AUTOSAR 제품/솔루션 상담.",
    },
    "/company/notice": {
      title: "공지사항",
      description: "PopcornSAR 최신 소식, 제품 업데이트, 이벤트, 파트너십 공지사항.",
    },
    "/about": {
      title: "회사 소개",
      description: "ASPICE/AUTOSAR 전문 기업 PopcornSAR. 서울 본사, 도쿄 법인.",
    },
    "/contact": {
      title: "문의",
      description: "PopcornSAR AUTOSAR 솔루션 및 ASPICE 컨설팅 문의.",
    },
    "/support": {
      title: "고객지원",
      description: "PopcornSAR 제품 다운로드 및 기술 지원. AutoSAR.io 평가판, 개발 플랫폼 소개 자료.",
    },
    "/support/qna": {
      title: "Q&A",
      description: "AUTOSAR 개발 및 PopcornSAR 제품 관련 자주 묻는 질문과 답변.",
    },
  },

  en: {
    "/": {
      title: "PopcornSAR | ASPICE V-Model Automation & AI Test Case Generation",
      description: "PopcornSAR, a specialist in ASPICE V-Model automation. AI-powered test case generation, ISO 26262 verification, and AUTOSAR development tools.",
    },
    "/products": {
      title: "Products",
      description: "ASPICE automation AI tool PARVIS and AUTOSAR development platforms. AutoSAR.io, PARA, PACON IDE.",
    },
    "/products/adaptive": {
      title: "AUTOSAR Tool Kit - Integrated Adaptive AUTOSAR Development Tools",
      description: "Integrated Adaptive AUTOSAR development tools with AutoSAR.io, PARA, and PACON IDE. From ARXML design to build and testing.",
    },
    "/products/autosario": {
      title: "AutoSAR.io - AUTOSAR ARXML Design Tool",
      description: "AUTOSAR Classic/Adaptive ARXML design tool. Manifest editing, source code generation, web-based platform.",
    },
    "/products/para": {
      title: "PARA - AUTOSAR Adaptive Functional Clusters",
      description: "AUTOSAR Adaptive Functional Cluster API/C++ Generator. ISO 26262 safety mechanisms included, R20-11 support.",
    },
    "/products/pacon": {
      title: "PACON IDE - VSCode-Based AUTOSAR Integrated Development Environment",
      description: "Adaptive Application development with Docker virtual ECU environment. ARA API autocompletion, Jenkins CI/CD integration.",
    },
    "/products/ai": {
      title: "PARVIS - AI Test Case Auto-Generation & ASPICE V-Model Automation",
      description: "AI-powered ASPICE test case generation (86.4% coverage). ISO 26262 verification, 94% MISRA-C compliance, full V-Model automation.",
    },
    "/products/parvisadk": {
      title: "PARVIS ADK - SDV Development Automation & TDD Test Case Auto-Generation",
      description: "CAN DBC/ARXML-based SDV end-to-end automation. AI-powered TDD test case generation, ASPICE/V-Model automatic compliance.",
    },
    "/products/aiagent": {
      title: "AUTOSAR AI Agent - AI-Powered AUTOSAR Development Tool",
      description: "AUTOSAR development with AI natural language. Automatic ARXML generation, API/SWS search, 70%+ reduction in development time.",
    },
    "/solution": {
      title: "Solutions",
      description: "Cloud Native, Digital Twin, and AI-based AUTOSAR solutions. MATLAB integration and PARVIS Agent.",
    },
    "/solution/cloudnative": {
      title: "Cloud Native AUTOSAR - Cloud-Based AA Development Solution",
      description: "AWS-based AUTOSAR Adaptive Application development. ARM64 Docker virtual ECU, CI/CD pipeline.",
    },
    "/solution/digital": {
      title: "Digital Twin - Virtual Simulation AA Verification Solution",
      description: "Virtual simulation for AUTOSAR AA functional verification. Testing from early development without physical ECU.",
    },
    "/solution/ai": {
      title: "AI for Adaptive Platforms - AI-Integrated AA Development Solution",
      description: "Integrating AI/ML workloads into AUTOSAR Adaptive Platform. Intelligent vehicle function implementation solution.",
    },
    "/solution/aiagent": {
      title: "PARVIS Agent - AI-Powered AUTOSAR Auto-Migration",
      description: "Automatic AUTOSAR migration with AI agent. Classic to Adaptive conversion, automatic version upgrades.",
    },
    "/solution/matlab": {
      title: "MATLAB & Simulink Integration - AUTOSAR-Compatible Development Solution",
      description: "MATLAB/Simulink and AUTOSAR compatible development solution. Integrating existing models into Adaptive environment.",
    },
    "/service": {
      title: "Services",
      description: "ASPICE consulting, AUTOSAR implementation support, training, AI Agent Core education and professional engineering services.",
    },
    "/service/consulting": {
      title: "Consulting Services - ASPICE/AUTOSAR Project Consulting",
      description: "ASPICE certification consulting, AUTOSAR architecture design, process establishment. Customized project consulting.",
    },
    "/service/autosar": {
      title: "AUTOSAR Implementation - ECU Project AUTOSAR Integration Support",
      description: "AUTOSAR Classic/Adaptive implementation support for ECU projects. Production project experience-based practical services.",
    },
    "/service/education": {
      title: "AUTOSAR Training - Professional Training for ECU Production Projects",
      description: "ASPICE/AUTOSAR Classic & Adaptive professional training. ECU production-focused, beginner to advanced curriculum.",
    },
    "/service/tool": {
      title: "Custom Development - AUTOSAR Project Custom Tool Development",
      description: "Custom AUTOSAR development tools. Automation scripts, plugins, and dedicated tools.",
    },
    "/service/ai": {
      title: "AI Agent Core Training - SDV AI Agent Design Training",
      description: "SDV-specialized AI Agent design training. AI agent architecture, LLM-based practical courses.",
    },
    "/company": {
      title: "About Us",
      description: "Leading ASPICE/AUTOSAR Adaptive Platform company. 50+ global clients, 100+ project experience.",
    },
    "/company/contact": {
      title: "Contact Us",
      description: "Contact PopcornSAR. Korea headquarters (Seoul), Japan office (Tokyo). AUTOSAR product/solution consultation.",
    },
    "/company/notice": {
      title: "Notice",
      description: "PopcornSAR latest news, product updates, events, and partnership announcements.",
    },
    "/about": {
      title: "About",
      description: "PopcornSAR company overview. ASPICE, AUTOSAR specialists in Seoul and Tokyo.",
    },
    "/contact": {
      title: "Contact",
      description: "Contact PopcornSAR for AUTOSAR solutions and ASPICE consulting inquiries.",
    },
    "/support": {
      title: "Support",
      description: "PopcornSAR product downloads and technical support. AutoSAR.io trial, development platform materials.",
    },
    "/support/qna": {
      title: "Q&A",
      description: "AUTOSAR development and PopcornSAR product frequently asked questions and answers.",
    },
  },

  jp: {
    "/": {
      title: "PopcornSAR | ASPICE V-Model自動化 & AIテストケース生成",
      description: "ASPICE V-Model自動化専門企業PopcornSAR。AIテストケース自動生成、ISO 26262検証、AUTOSAR開発ツール提供。",
    },
    "/products": {
      title: "製品",
      description: "ASPICE自動化AIツールPARVISとAUTOSAR開発プラットフォーム。AutoSAR.io、PARA、PACON IDE提供。",
    },
    "/products/adaptive": {
      title: "AUTOSAR Tool Kit - Adaptive AUTOSAR統合開発ツール",
      description: "AutoSAR.io、PARA、PACON IDE統合Adaptive AUTOSAR開発ツール。ARXML設計からビルド・テストまで。",
    },
    "/products/autosario": {
      title: "AutoSAR.io - AUTOSAR ARXML設計ツール",
      description: "AUTOSAR Classic/Adaptive ARXML設計ツール。Manifest編集、ソースコード生成、Webベースプラットフォーム。",
    },
    "/products/para": {
      title: "PARA - AUTOSAR Adaptive Functional Clusters",
      description: "AUTOSAR Adaptive Functional Cluster API/C++ジェネレーター。ISO 26262安全メカニズム搭載、R20-11対応。",
    },
    "/products/pacon": {
      title: "PACON IDE - VSCodeベースAUTOSAR統合開発環境",
      description: "Docker仮想ECU環境でAdaptive Application開発。ARA API自動補完、Jenkins CI/CD統合。",
    },
    "/products/ai": {
      title: "PARVIS - AIテストケース自動生成 & ASPICE V-Model自動化",
      description: "ASPICEテストケースAI自動生成（86.4%カバレッジ）。ISO 26262検証、MISRA-C 94%準拠、V-Model全工程自動化。",
    },
    "/products/parvisadk": {
      title: "PARVIS ADK - SDV開発自動化 & TDDテストケース自動生成",
      description: "CAN DBC/ARXMLベースSDVエンドツーエンド自動化。TDDテストケースAI生成、ASPICE/V-Model自動準拠。",
    },
    "/products/aiagent": {
      title: "AUTOSAR AI Agent - AIベースAUTOSAR開発支援ツール",
      description: "AI自然言語でAUTOSAR開発。ARXML自動生成、API/SWS検索、開発時間70%以上短縮。",
    },
    "/solution": {
      title: "ソリューション",
      description: "Cloud Native、Digital Twin、AIベースAUTOSARソリューション。MATLAB連携、PARVIS Agent提供。",
    },
    "/solution/cloudnative": {
      title: "Cloud Native AUTOSAR - クラウドベースAA開発ソリューション",
      description: "AWSベースAUTOSAR Adaptive Application開発。ARM64 Docker仮想ECU、CI/CDパイプライン。",
    },
    "/solution/digital": {
      title: "Digital Twin - 仮想シミュレーションAA検証ソリューション",
      description: "仮想シミュレーションによるAUTOSAR AA機能検証。実ECUなしで開発初期からテスト可能。",
    },
    "/solution/ai": {
      title: "AI for Adaptive Platforms - AI連携AA開発ソリューション",
      description: "AI/MLワークロードをAUTOSAR Adaptive Platformに統合。インテリジェント車両機能実装ソリューション。",
    },
    "/solution/aiagent": {
      title: "PARVIS Agent - AIベースAUTOSAR自動マイグレーション",
      description: "AIエージェントによるAUTOSAR自動マイグレーション。ClassicからAdaptiveへの移行、バージョンアップグレード自動実行。",
    },
    "/solution/matlab": {
      title: "MATLAB & Simulink連携 - AUTOSAR互換開発ソリューション",
      description: "MATLAB/SimulinkとAUTOSAR互換開発ソリューション。既存モデルをAdaptive環境に統合。",
    },
    "/service": {
      title: "サービス",
      description: "ASPICEコンサルティング、AUTOSAR実装支援、教育、AI Agent Coreトレーニング等、専門エンジニアリングサービス。",
    },
    "/service/consulting": {
      title: "コンサルティングサービス - ASPICE/AUTOSARプロジェクト専門コンサルティング",
      description: "ASPICE認証コンサルティング、AUTOSARアーキテクチャ設計、プロセス策定。カスタマイズプロジェクトコンサルティング。",
    },
    "/service/autosar": {
      title: "AUTOSAR実装サービス - ECUプロジェクトAUTOSAR適用支援",
      description: "ECUプロジェクトAUTOSAR Classic/Adaptive実装支援。量産プロジェクト経験に基づく実践サービス。",
    },
    "/service/education": {
      title: "AUTOSARトレーニング - ECU量産プロジェクト向け専門教育",
      description: "ASPICE/AUTOSAR Classic & Adaptive専門教育。ECU量産実務中心、入門〜上級カリキュラム。",
    },
    "/service/tool": {
      title: "カスタム開発サービス - AUTOSARプロジェクト向けカスタムツール開発",
      description: "プロジェクト向けカスタムAUTOSAR開発ツール制作。自動化スクリプト、プラグイン、専用ツール。",
    },
    "/service/ai": {
      title: "AI Agent Coreトレーニング - SDV AIエージェント設計教育",
      description: "SDV特化AI Agent設計トレーニング。AIエージェントアーキテクチャ、LLM活用実務中心コース。",
    },
    "/company": {
      title: "会社紹介",
      description: "ASPICE/AUTOSAR Adaptive Platformリーディングカンパニー。グローバル顧客50社以上、プロジェクト実績100件以上。",
    },
    "/company/contact": {
      title: "お問い合わせ",
      description: "PopcornSARお問い合わせ。韓国本社（ソウル）、日本法人（東京）。AUTOSAR製品/ソリューション相談。",
    },
    "/company/notice": {
      title: "お知らせ",
      description: "PopcornSAR最新ニュース、製品アップデート、イベント、パートナーシップお知らせ。",
    },
    "/about": {
      title: "会社概要",
      description: "PopcornSAR会社概要。ASPICE/AUTOSAR専門、ソウル本社・東京法人。",
    },
    "/contact": {
      title: "お問い合わせ",
      description: "PopcornSAR AUTOSARソリューション・ASPICEコンサルティングお問い合わせ。",
    },
    "/support": {
      title: "カスタマーサポート",
      description: "PopcornSAR製品ダウンロード・技術サポート。AutoSAR.io評価版、開発プラットフォーム紹介資料。",
    },
    "/support/qna": {
      title: "Q&A",
      description: "AUTOSAR開発およびPopcornSAR製品に関するよくある質問と回答。",
    },
  },

  cn: {
    "/": {
      title: "PopcornSAR | ASPICE V-Model自动化 & AI测试用例生成",
      description: "ASPICE V-Model自动化专业企业PopcornSAR。AI测试用例自动生成、ISO 26262验证、AUTOSAR开发工具。",
    },
    "/products": {
      title: "产品",
      description: "ASPICE自动化AI工具PARVIS与AUTOSAR开发平台。提供AutoSAR.io、PARA、PACON IDE。",
    },
    "/products/adaptive": {
      title: "AUTOSAR Tool Kit - Adaptive AUTOSAR集成开发工具",
      description: "AutoSAR.io、PARA、PACON IDE集成Adaptive AUTOSAR开发工具。从ARXML设计到构建和测试。",
    },
    "/products/autosario": {
      title: "AutoSAR.io - AUTOSAR ARXML设计工具",
      description: "AUTOSAR Classic/Adaptive ARXML设计工具。Manifest编辑、源代码生成、Web平台。",
    },
    "/products/para": {
      title: "PARA - AUTOSAR Adaptive Functional Clusters",
      description: "AUTOSAR Adaptive Functional Cluster API/C++生成器。包含ISO 26262安全机制，支持R20-11。",
    },
    "/products/pacon": {
      title: "PACON IDE - 基于VSCode的AUTOSAR集成开发环境",
      description: "Docker虚拟ECU环境Adaptive Application开发。ARA API自动补全、Jenkins CI/CD集成。",
    },
    "/products/ai": {
      title: "PARVIS - AI测试用例自动生成 & ASPICE V-Model自动化",
      description: "ASPICE测试用例AI自动生成（86.4%覆盖率）。ISO 26262验证、MISRA-C 94%合规、V-Model全流程自动化。",
    },
    "/products/parvisadk": {
      title: "PARVIS ADK - SDV开发自动化 & TDD测试用例自动生成",
      description: "基于CAN DBC/ARXML的SDV端到端自动化。TDD测试用例AI生成、ASPICE/V-Model自动合规。",
    },
    "/products/aiagent": {
      title: "AUTOSAR AI Agent - AI驱动AUTOSAR开发工具",
      description: "AI自然语言AUTOSAR开发。ARXML自动生成、API/SWS检索、开发时间缩短70%以上。",
    },
    "/solution": {
      title: "解决方案",
      description: "Cloud Native、Digital Twin、AI驱动AUTOSAR解决方案。MATLAB集成、PARVIS Agent。",
    },
    "/solution/cloudnative": {
      title: "Cloud Native AUTOSAR - 云端AA开发解决方案",
      description: "基于AWS的AUTOSAR Adaptive Application开发。ARM64 Docker虚拟ECU、CI/CD流水线。",
    },
    "/solution/digital": {
      title: "Digital Twin - 虚拟仿真AA验证解决方案",
      description: "虚拟仿真AUTOSAR AA功能验证。无需实际ECU，从开发初期即可测试。",
    },
    "/solution/ai": {
      title: "AI for Adaptive Platforms - AI集成AA开发解决方案",
      description: "将AI/ML工作负载集成到AUTOSAR Adaptive Platform。智能车辆功能实现解决方案。",
    },
    "/solution/aiagent": {
      title: "PARVIS Agent - AI驱动AUTOSAR自动迁移",
      description: "AI代理自动AUTOSAR迁移。Classic到Adaptive转换、版本升级自动执行。",
    },
    "/solution/matlab": {
      title: "MATLAB & Simulink集成 - AUTOSAR兼容开发解决方案",
      description: "MATLAB/Simulink与AUTOSAR兼容开发解决方案。将现有模型集成到Adaptive环境。",
    },
    "/service": {
      title: "服务",
      description: "ASPICE咨询、AUTOSAR实施支持、培训、AI Agent Core教育等专业工程服务。",
    },
    "/service/consulting": {
      title: "咨询服务 - ASPICE/AUTOSAR项目专业咨询",
      description: "ASPICE认证咨询、AUTOSAR架构设计、流程建立。定制化项目咨询。",
    },
    "/service/autosar": {
      title: "AUTOSAR实施服务 - ECU项目AUTOSAR应用支持",
      description: "ECU项目AUTOSAR Classic/Adaptive实施支持。基于量产项目经验的实战服务。",
    },
    "/service/education": {
      title: "AUTOSAR培训 - ECU量产项目专业培训",
      description: "ASPICE/AUTOSAR Classic & Adaptive专业培训。ECU量产实务为核心，入门到高级课程。",
    },
    "/service/tool": {
      title: "定制开发服务 - AUTOSAR项目定制工具开发",
      description: "项目定制AUTOSAR开发工具制作。自动化脚本、插件、专用工具。",
    },
    "/service/ai": {
      title: "AI Agent Core培训 - SDV AI代理设计培训",
      description: "SDV专项AI Agent设计培训。AI代理架构、LLM应用实务课程。",
    },
    "/company": {
      title: "公司介绍",
      description: "ASPICE/AUTOSAR Adaptive Platform领先企业。50+全球客户、100+项目经验。",
    },
    "/company/contact": {
      title: "联系我们",
      description: "联系PopcornSAR。韩国总部（首尔）、日本法人（东京）。AUTOSAR产品/解决方案咨询。",
    },
    "/company/notice": {
      title: "公告",
      description: "PopcornSAR最新消息、产品更新、活动、合作公告。",
    },
    "/about": {
      title: "关于我们",
      description: "PopcornSAR公司概况。ASPICE/AUTOSAR专业企业，首尔总部、东京法人。",
    },
    "/contact": {
      title: "联系",
      description: "联系PopcornSAR，咨询AUTOSAR解决方案和ASPICE咨询服务。",
    },
    "/support": {
      title: "客户支持",
      description: "PopcornSAR产品下载及技术支持。AutoSAR.io试用版、开发平台介绍资料。",
    },
    "/support/qna": {
      title: "Q&A",
      description: "AUTOSAR开发及PopcornSAR产品常见问题与解答。",
    },
  },
};
