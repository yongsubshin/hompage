# PopcornSAR 챗봇 컨텍스트

## 회사 소개

PopcornSAR(팝콘사)는 AUTOSAR 전문 기업으로, AI 기반 개발 도구와 엔지니어링 서비스를 제공합니다.

**핵심 역량:**
- AUTOSAR Classic 및 Adaptive Platform 개발 기술
- 10년 이상의 AUTOSAR 개발 경험
- 기획 → 분석 → 개발 → 배포의 End-to-End 자동화 실현
- V-model / ASPICE 프로세스 전 과정 자동화

**회사 비전:**
자동차도 스마트폰처럼 새로운 모빌리티 서비스를 제공하는 시대가 곧 펼쳐질 것입니다. 팝콘사는 다양한 분야의 개발자들이 새로운 모빌리티 서비스를 쉽고 빠르게 개발할 수 있는 환경을 제공합니다.

**연락처:**
- 한국 본사: 서울시 강남구 테헤란로78길 16, 노벨빌딩 2층
- 일본 법인: GSsakae Bld.3F, 5-26-39, Sakae, Nagoya Shi Naka Ku, Aichi Ken, Japan
- 이메일: sales@popcornsar.com

**주요 고객:** 글로벌 자동차 OEM 및 Tier1 공급사

---

## 제품 (Products) - 7개

### 1. AUTOSAR Tool kit
**Classic 및 Adaptive Application 개발을 위한 통합 솔루션**

3가지 도구의 연계 솔루션:
- 모델링 Tool: AutoSAR.io
- Functional Cluster: PARA
- 통합개발환경: PACON IDE

설계, 코드 및 설정 파일 생성, 통합, 빌드, 테스트를 종합적으로 수행할 수 있습니다.

---

### 2. AutoSAR.io
**The Complete Solution for AUTOSAR ARXML Design**

AUTOSAR 기반 시스템 및 소프트웨어 모델링을 위한 설계 도구입니다. Classic 및 Adaptive Platform 모두 지원하며, OEM, Tier1, Automotive Application Vendor 등 다양한 관점에서 ARXML 설계가 가능합니다.

**설계 범위:**
- Adaptive Application
- Service Oriented Communications
- Deployments in Adaptive Platform
- Software Components
- Signal-Based Communications
- Diagnostic Extract
- ECU Configuration

**지원 버전:**
- Classic Platform R4.4.0, R4.3.1 등
- Adaptive Platform R20-11 (2021.06)
- Adaptive Platform R19-11 (2020.06)
- Adaptive Platform R19-03 (2019.05)

**제공 형태:** 설치형 및 Web 기반 버전 모두 제공

---

### 3. PARA
**AUTOSAR Classic & Adaptive Functional Clusters**
슬로건: "Realize your idea for future car"

AUTOSAR 표준을 기반으로 팝콘사에서 독자적으로 개발한 플랫폼 소프트웨어입니다. Classic 및 Adaptive Platform 모두 지원합니다.

**구성요소:**
- AUTOSAR Standard Functional Cluster API
- C++ Generator
- Manifest Generator
- Platform Level Application (라이브러리 형태)

**PARA 버전:**
- PARA-Standard: A Sample 구현에 필요한 FC 모듈과 Platform Level Application 제공
- PARA-Extension: 고객 특정 요구사항 반영 (특정 OS, Compiler, OEM 진단 요구사항)

**Key Features:**
- Adaptive AUTOSAR Standard APIs
- Various Extended APIs
- C++ Code Generators for Adaptive AUTOSAR
- Manifest Generators for Adaptive AUTOSAR
- Adaptive Platform Applications
- Safety mechanism(Libpara): ISO 26262에 따른 실행 레벨 오류 감지

**지원 버전:** Classic Platform R4.x 및 Adaptive Platform R20-11

---

### 4. PACON IDE
**PopcornSAR Automotive CONtainer**
**One-stop IDE for AUTOSAR Application development and test**

Docker Container 기반 VSCode 통합 개발 환경입니다. 코딩, 디버그, 컴파일, 배포 등 AUTOSAR Classic 및 Adaptive Application 개발 전 과정을 하나의 프로그램에서 처리합니다.

**Key Features:**
- ARA API 및 Open Source API 자동완성
- 실시간 AUTOSAR Coding Rule 체크 (MISRA 포함)
- Debug 지원
- C++ 외 다양한 개발언어 지원 (Python 등)
- 네트워크 분석 프로그램 연동 (Wireshark)
- 가상 ECU 연동을 통한 Adaptive Application 네트워크 테스트

**Benefits:**
- 실제 개발 ECU와 동일한 구성 환경 제공으로 테스트 리스크 감소
- 외부 Registry 연동으로 이력관리 및 다수 개발자 공동 작업 용이

**옵션 기능 (별도 엔지니어링 서비스):**
- 가상 ECU 생성: 고객이 사용하는 POSIX OS와 Target ECU를 Virtual ECU Docker Container로 제공
- Jenkins CI/CD 연동: 다수의 가상 ECU 자동 생성 및 Adaptive Application 테스트 자동화

---

### 5. PARVIS
**AI-Powered V-Model Automation**

V-Model 전 과정 자동화 플랫폼입니다.
- 요구사항 분석 자동화
- 설계 자동화
- 코드 생성 자동화
- 테스트 검증 자동화

---

### 6. PARVIS ADK
**AI-Powered Adaptive Development Kit for Software Defined Vehicle**

차량 데이터(CAN DBC, ARXML)를 기반으로 AI가 자동으로 UX 시나리오를 생성하고, 경쟁사 분석 및 수익성 예측을 통해 최적의 제품 개발 방향을 제시하는 End-to-End 자동화 플랫폼입니다.

**주요 대상:**
- 자동차 OEM 및 Tier1 공급사
- Software Defined Vehicle (SDV) 개발 기업
- AUTOSAR 기반 제품 개발 기업

**5대 핵심 기능:**
1. 차량 데이터 통합 분석: CAN DBC, ARXML, SDV API 데이터 자동 수집/분석, 외부 시장 데이터 통합
2. AI 기반 UX 시나리오 자동 생성: 차량 데이터 기반 실현 가능한 서비스 시나리오 AI 자동 생성, UX 플로우/API 명세/데이터 흐름도 제안
3. 경쟁사 현황 자동 분석: 생성된 UX 시나리오 기준 경쟁사 출시여부 자동 검색, 시장 트렌드 및 경쟁 상황 실시간 분석
4. AI 기반 수익성 예측: ROI(투자수익률) 자동 예측, 우선순위 기반 개발 로드맵 제시
5. AI DevOps 자동화 개발: TDD 기반 테스트 케이스 자동 생성, V-model/ASPICE 프로세스 자동 준수, CI/CD 자동 구성

**업무 효율성 비교:**
- UX 시나리오 기획: 기존 수주~수개월 → AI 자동 생성 수시간
- 경쟁사 현황 조사: 기존 수주~수개월 → AI 자동 조사 수분~수시간
- 수익성 분석: 기존 수주 → AI 기반 ROI 자동 예측 수분
- 테스트 케이스 작성: 기존 수개월 → TDD 기반 자동 생성 수시간
- 개발 및 배포: 기존 수개월 → AI DevOps 자동화 수일~수주

**비즈니스 가치:**
- 시장 출시 시간 70-80% 단축
- 인력 비용 50-60% 절감
- AI 기반 의사결정으로 실패 리스크 최소화
- 기존에 없던 신규 서비스 자동 발굴
- TDD 및 ASPICE 프로세스 자동 준수로 품질 향상

**기술적 가치:**
- 실제 차량 데이터 기반 현실적 시나리오
- AUTOSAR, ASPICE 표준 자동 준수
- 클라우드/온프레미스 모두 지원
- 기존 개발 프로세스와 원활한 통합

**차별화 포인트:**
- 업계 최초 AI 기반 UX 시나리오 자동 생성 플랫폼
- 기획 → 분석 → 개발 → 배포의 End-to-End 자동화 실현

**After Hours Mode:**
개발자 부재 시에도 작업을 자동으로 진행하고, 모든 세션의 실행 내역을 상세히 기록하는 지능형 세션 추적 시스템

**기술 스택:**
- AI/ML 엔진: 대규모 언어 모델(LLM) 기반 시나리오 생성
- 데이터 처리: CAN DBC/ARXML Parser, SDV API 통합
- 개발 자동화: TDD Framework, V-model/ASPICE 자동화
- 통합 플랫폼: 웹 기반 대시보드, RESTful API

**지원:** PARVIS ADK 1.0, Web-based Dashboard, Cloud/On-premise, 한국어/영어

---

### 7. AUTOSAR AI Agent
**AI 기반 AUTOSAR 개발 지원 도구**

PopcornSAR의 독자적인 AI 자연어 처리 엔진을 기반으로 AUTOSAR 표준 문서 검색 및 ARXML 작성을 지원하는 혁신적인 개발 도구입니다.

**문제 해결:**
AUTOSAR는 수천 페이지에 달하는 방대한 PDF 문서와 복잡한 구조로 인해 개발자들이 필요한 정보를 찾는데 많은 시간을 소비합니다. AUTOSAR AI Agent가 이 문제를 해결합니다.

**대상 사용자:**
AUTOSAR 입문자부터 시스템 아키텍트, SW 개발자, Technical Writer까지 모든 AUTOSAR 사용자

**5가지 핵심 기능:**
1. ARXML 작성: AI 기반 스마트 템플릿 자동 생성으로 ARXML 작성 시간 대폭 단축
2. ARXML 분석: 기존 ARXML 파일 구조 시각화 및 분석으로 디버깅 시간 절감
3. AUTOSAR API 검색: 자연어로 AUTOSAR API 검색 및 사용법 즉시 제공
4. SWS Number 검색: SWS 번호만으로 관련 specification 즉시 확인
5. ARXML Tag 검색: ARXML 태그 용도, 필수 속성, 사용 예제 한눈에 파악

**업무 효율성 비교:**
- SWS 문서 찾기: 기존 5-10분 → 30초~2분
- ARXML 작성: 기존 6시간 → 30분
- API 사용법 확인: 기존 3-5분 → 30초~2분

**기술적 우위성:**
- PopcornSAR 독자 AI 자연어 처리 엔진
- 10년 이상의 AUTOSAR 개발 경험과 AI 기술 결합
- 개발 업무 시간 평균 70% 이상 단축

**지원 버전:** AUTOSAR R20-11, R24-11
**지원 언어:** 한국어, 영어, 일본어, 중국어

---

## 솔루션 (Solutions) - 5개

### 1. Cloud Native
**Cloud Native 기반의 AA 개발 솔루션**

클라우드 환경에서 확장성과 유연성을 고려한 Adaptive Application 개발 솔루션입니다.

**특징:**
- Cloud Native Automotive Software: 개발자가 어떤 환경에서든 동일한 개발 경험 제공
- DevOps 전 범위 대응으로 효율적인 AA 개발 지원
- AWS(Amazon Web Services) 기반으로 안정적인 서비스 제공
- 물리적 인프라 구축 불필요, 운영 비용 장기적 절감
- ARM 64 기반 Virtual ECU로 실제 Target ECU와 동일한 환경에서 AA 테스트

---

### 2. Digital Twin
**Digital Twin 연동 AA 개발 솔루션**

SDV(Software-defined Vehicle) 시대에 맞는 가상 시뮬레이션 환경에서 AA 기능 검증 솔루션입니다.

**특징:**
- 실제 차량 테스트와 동일한 조건의 가상 환경 제공
- 기능 안전에 영향 없이 사전 구현 및 점검
- AA(Adaptive Application) 기능 검증 용이
- 개발, 디버깅, 오류 수정에 효율적
- 문제 조기 감지로 SW 개발 유지보수 효율화
- 파트너사 MORAI의 Digital Twin과 연동하여 차량 제어부터 자율주행 기술 구현

---

### 3. AI for Adaptive Platforms
**AI 모델을 접목한 AA 개발 솔루션**

TensorFlow, PyTorch 등 AI 프레임워크와 연계하여 AI 모델을 Adaptive Application으로 Migration할 수 있도록 지원합니다.

**제공 기능:**
- AI 컴파일러 버전에 맞춘 Adaptive AUTOSAR Stack 수정
- Python으로 구현된 독자 SOME/IP 모듈 제공
- Python AI → C++ Adaptive AUTOSAR AI 개발 지원
- AI SDK에 Adaptive AUTOSAR Stack 통합 제공
- ARM 기반 Docker Container 가상제어기 제공

**적용 사례:** NXP社의 S32G2와 eIQ-AUTO(AI SDK)

---

### 4. MATLAB & Simulink
**MATLAB & Simulink 호환성 보장 AA 개발 솔루션**

MATLAB & Simulink의 AUTOSAR Blockset과 호환성을 보장합니다.

**지원 내용:**
- MATLAB & Simulink 알고리즘을 Adaptive Platform으로 Migration
- MATLAB & Simulink 제약사항 추가 설계 지원
- Tool-chain 지원으로 정상 동작 보장

**MATLAB & Simulink 제약사항 보완:**
- SOME/IP 미지원 → 팝콘사 솔루션에서 지원
- DataType Vector형 미지원 → Array 대응
- ARXML 제한된 정보 인식 → 추가 설계 지원

**권장:** MATLAB & Simulink 2022b 사용 (R20-11 지원)

---

### 5. PARVIS Agent
**AI Agent 기반 자동화 마이그레이션 솔루션**

AI 에이전트를 활용한 자동 마이그레이션 솔루션입니다.

---

## 서비스 (Services) - 5개

### 1. Consulting Service
**AUTOSAR 프로젝트 컨설팅**

팝콘사의 개발 노하우를 바탕으로 고객 요구사항에 최적화된 컨설팅을 제공합니다.

**For OEM:**
- Adaptive Platform 요구사항 정립
- Functional Requirement / Functional Architecture
- Data type Design / Port Interface Design / SW Component Design
- Network Design (CAN, Ethernet) for E/E Architecture
- Diagnostic Design for Safety & Maintenance

**For Tier1:**
- Adaptive Platform 기반 ECU 프로젝트 수행 컨설팅
- OEM requirement 분석
- AUTOSAR 프로젝트 구현 체크리스트

---

### 2. AUTOSAR Implementation
**ECU 프로젝트 AUTOSAR 구현 서비스**

고객이 프로젝트 전체에 집중할 수 있도록 ECU 프로젝트의 AUTOSAR 파트 구현을 대행합니다.

---

### 3. AUTOSAR Training
**개발자 교육 서비스**

AUTOSAR 기반 ECU 양산 프로젝트 수행을 위한 개발자 교육을 제공합니다.

**특징:**
- 개발 과정 전체 흐름 이해
- 팝콘사 도구를 사용한 실습 진행
- 고객사 방문 출장 교육 제공

---

### 4. Custom Development
**맞춤형 도구 개발**

고객의 효율적인 AUTOSAR 프로젝트 수행을 위한 맞춤형 도구를 개발합니다.

**개발 예시:**
- ODX 개발도구: ODX 표준에 맞는 진단 데이터 관리
- TEST 결과 ARXML Reporting 도구: 테스트 결과를 ARXML 형식으로 자동 변환
- Network Test 자동화 도구: 네트워크 통신 테스트 자동화
- 진단 테스트 자동화: 진단 기능 테스트 자동화
- 진단 포맷변환 도구: OEM별 진단 포맷 변환 지원

---

### 5. AI Agent Core Training
**SDV 환경 AI Agent 설계 교육**

자동차 SW 정의 차량(SDV) 환경에 특화된 AI Agent 설계 교육을 제공합니다.

**교육 범위:**
- 자동차 소프트웨어 개발 생명주기에 최적화된 AI Agent 설계 및 개발 실습
- AUTOSAR, MISRA 등 차량용 표준 기반의 AI 모델 적용
- V-Model 기반 요구사항 분석, 코드 생성, 검증 프로세스 자동화

**교육 방식:** 고객사 방문 출장 교육

---

## 자동차 산업 표준 지원

### ASPICE (Automotive SPICE)
**자동차 소프트웨어 개발 프로세스 평가 모델**
- PARVIS ADK: V-model/ASPICE 프로세스 전 과정 자동 준수
- AI Agent Core Training: ASPICE 기반 개발 프로세스 교육
- 팝콘사의 핵심 차별점: 기획→분석→개발→배포 End-to-End 자동화로 ASPICE 준수

### MISRA (Motor Industry Software Reliability Association)
**자동차용 C/C++ 코딩 표준**
- PACON IDE: 실시간 AUTOSAR Coding Rule 체크 (MISRA 규칙 포함)
- AI Agent Core Training: MISRA 등 차량용 표준 기반 AI 모델 적용

### ISO 26262
**자동차 기능 안전 국제 표준**
- PARA: Safety mechanism(Libpara)으로 ISO 26262에 따른 실행 레벨 오류 감지
- Safety Analyzer 도구: ISO 26262 준수 검사 및 안전 분석

### V-Model
**자동차 소프트웨어 개발 생명주기 모델**
- PARVIS: V-Model 전 과정 자동화 (요구사항 분석 → 설계 → 구현 → 테스트)
- PARVIS ADK: V-model 기반 요구사항 분석, 코드 생성, 검증 프로세스 자동화
- AI Agent Core Training: V-Model 기반 프로세스 자동화 교육

### TDD (Test-Driven Development)
**테스트 주도 개발**
- PARVIS ADK: TDD 사이클 완전 자동화, TDD 기반 테스트 케이스 자동 생성
- 테스트를 먼저 작성하고 그 테스트를 통과하는 코드를 작성하는 방법론

### AUTOSAR
**자동차 개방형 시스템 아키텍처 표준**
- Classic Platform: 전통적인 ECU 개발용 (실시간성, 안전성 강조, 직접 제어)
- Adaptive Platform: 고성능 컴퓨팅용 (자율주행 AI, 많은 컴퓨팅 자원 사용)
- 팝콘사 지원 버전: R24-11, R20-11, R19-11, R19-03

---

## 자주 묻는 질문

**Q: 제품 데모를 받을 수 있나요?**
A: 네, AUTOSAR 프로젝트를 준비하는 고객사(OEM, Tier1)를 위해 일부 제품 Demo 버전을 제공합니다. Q&A 페이지 또는 sales@popcornsar.com으로 문의해 주세요.

**Q: 교육은 어떻게 진행되나요?**
A: 고객사를 방문하여 진행하는 출장 교육을 주로 제공합니다. sales@popcornsar.com으로 문의해 주세요.

**Q: 지원하는 AUTOSAR 버전은?**
A: Classic Platform R4.x와 Adaptive Platform R20-11을 주로 지원하며, 일부 제품은 AP R19-11, R19-03도 지원합니다. AUTOSAR AI Agent는 R24-11까지 지원합니다.

**Q: ASPICE 인증 준비를 도와주나요?**
A: 네, PARVIS ADK는 V-model/ASPICE 프로세스 전 과정을 자동화하여 ASPICE 인증 준비를 지원합니다. 기획→분석→개발→배포의 End-to-End 자동화로 ASPICE 표준을 자동 준수합니다.

**Q: ISO 26262 기능 안전을 지원하나요?**
A: 네, PARA의 Safety mechanism(Libpara)은 ISO 26262에 따른 실행 레벨 오류를 감지합니다. Safety Analyzer 도구로 ISO 26262 준수 검사도 가능합니다.

**Q: MISRA 코딩 규칙 체크가 가능한가요?**
A: 네, PACON IDE에서 실시간 AUTOSAR Coding Rule 체크 기능을 제공하며 MISRA 규칙도 포함됩니다.

**Q: V-Model 전 과정 자동화가 가능한가요?**
A: 네, PARVIS와 PARVIS ADK는 V-Model 전 과정(요구사항 분석 → 설계 → 코드 생성 → 테스트 검증)을 자동화합니다.

**Q: 일본 지사가 있나요?**
A: 네, 일본 법인이 있습니다. 주소: GSsakae Bld.3F, 5-26-39, Sakae, Nagoya Shi Naka Ku, Aichi Ken, 460-0008, Japan

---

## 문의
- 이메일: sales@popcornsar.com
- Q&A 페이지: /support/qna
- 데모 신청: Q&A 페이지에서 "데모 신청" 선택
