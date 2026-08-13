// INI-ICAM 관리자 콘솔 "재구성 예시 UI"용 더미 데이터.
// 실제 제품 데이터가 아니며, 화면 재현을 위한 임의 값입니다.

export interface Kpi {
  label: string;
  value: string;
  delta?: string;
}

export const dashboardKpis: Kpi[] = [
  { label: "등록 사용자", value: "12,480", delta: "+128" },
  { label: "활성 세션", value: "1,204", delta: "+43" },
  { label: "오늘 인증 요청", value: "8,932", delta: "+6.2%" },
  { label: "차단된 접근", value: "37", delta: "-9" },
];

// 인증 시도 추이 (24시간, 12개 구간) — 라인/에어리어 차트용
export const authTrend: number[] = [
  320, 410, 380, 520, 610, 540, 700, 860, 780, 900, 830, 940,
];

export interface Activity {
  time: string;
  user: string;
  action: string;
  status: "허용" | "거부";
}

export const recentActivity: Activity[] = [
  { time: "10:24", user: "user_1042", action: "정책 평가 통과", status: "허용" },
  { time: "10:21", user: "user_0087", action: "MFA 인증 실패", status: "거부" },
  { time: "10:19", user: "user_2231", action: "신원 확인 완료", status: "허용" },
  { time: "10:15", user: "user_0510", action: "비정상 위치 접근 차단", status: "거부" },
  { time: "10:11", user: "user_1789", action: "전자서명 검증 통과", status: "허용" },
];

// 성공/실패 집계 — 막대 차트용
export const authOutcome = [
  { label: "성공", value: 862, tone: "positive" as const },
  { label: "실패", value: 58, tone: "negative" as const },
  { label: "차단", value: 37, tone: "negative" as const },
];

export interface Policy {
  id: string;
  name: string;
  resource: string;
  condition: string;
  status: "활성" | "비활성";
}

export const policies: Policy[] = [
  { id: "POL-001", name: "관리자 콘솔 접근", resource: "admin-console", condition: "MFA + 사내 IP", status: "활성" },
  { id: "POL-002", name: "재무 데이터 열람", resource: "finance-api", condition: "전자서명 필수", status: "활성" },
  { id: "POL-003", name: "외부 협력사 접근", resource: "partner-portal", condition: "2차 인증 + 시간 제한", status: "활성" },
  { id: "POL-004", name: "레거시 시스템", resource: "legacy-erp", condition: "사설인증", status: "비활성" },
  { id: "POL-005", name: "개발 환경 배포", resource: "ci-pipeline", condition: "지속 평가", status: "활성" },
];

// Workflow Editor(React Flow)용 인증/인가 플로우 노드·엣지
export interface TaskField {
  label: string;
  value: string;
}

// 워크플로우 노드 세팅 패널 — Input / Task / Output 3구획
export interface NodeSettings {
  input: TaskField[];
  task: TaskField[];
  output: TaskField[];
}

export interface FlowNodeSeed {
  id: string;
  label: string;
  kind: "start" | "step" | "decision" | "allow" | "deny";
  position: { x: number; y: number };
  nodeType?: string;
  settings?: NodeSettings;
}

// 가로형(좌 → 우) 배치 + 노드별 설정(세팅 패널용)
export const workflowNodes: FlowNodeSeed[] = [
  {
    id: "req",
    label: "접근 요청",
    kind: "start",
    position: { x: 0, y: 80 },
    nodeType: "트리거",
    settings: {
      input: [],
      task: [
        { label: "진입점", value: "접근 요청" },
        { label: "프로토콜", value: "OIDC / SAML" },
      ],
      output: [
        { label: "requestId", value: "string" },
        { label: "userId", value: "string" },
      ],
    },
  },
  {
    id: "identity",
    label: "신원 확인",
    kind: "step",
    position: { x: 220, y: 80 },
    nodeType: "인증 단계",
    settings: {
      input: [{ label: "userId", value: "${req.userId}" }],
      task: [
        { label: "인증 방식", value: "사설인증" },
        { label: "필수 여부", value: "필수" },
      ],
      output: [
        { label: "subject", value: "string" },
        { label: "identityVerified", value: "boolean" },
      ],
    },
  },
  {
    id: "policy",
    label: "정책 평가",
    kind: "step",
    position: { x: 440, y: 80 },
    nodeType: "정책 평가",
    settings: {
      input: [
        { label: "subject", value: "${identity.subject}" },
        { label: "resource", value: "${req.resource}" },
      ],
      task: [
        { label: "정책 세트", value: "기본 접근 정책" },
        { label: "평가 모드", value: "전체 일치" },
      ],
      output: [
        { label: "decision", value: "permit | deny" },
        { label: "matchedRules", value: "string[]" },
      ],
    },
  },
  {
    id: "mfa",
    label: "MFA 인증",
    kind: "step",
    position: { x: 660, y: 80 },
    nodeType: "인증 단계",
    settings: {
      input: [{ label: "subject", value: "${identity.subject}" }],
      task: [
        { label: "인증 수단", value: "OTP / FIDO2" },
        { label: "재시도", value: "3회" },
      ],
      output: [{ label: "mfaPassed", value: "boolean" }],
    },
  },
  {
    id: "risk",
    label: "지속 평가",
    kind: "decision",
    position: { x: 880, y: 80 },
    nodeType: "조건 분기",
    settings: {
      input: [
        { label: "subject", value: "${identity.subject}" },
        { label: "context", value: "${req.context}" },
      ],
      task: [
        { label: "기준", value: "위험 점수 ≥ 70" },
        { label: "평가 주기", value: "지속" },
      ],
      output: [
        { label: "riskScore", value: "number" },
        { label: "branch", value: "normal | risky" },
      ],
    },
  },
  {
    id: "allow",
    label: "접근 허용",
    kind: "allow",
    position: { x: 1120, y: 0 },
    nodeType: "종료",
    settings: {
      input: [{ label: "decision", value: "${policy.decision}" }],
      task: [
        { label: "결과", value: "접근 허용" },
        { label: "세션", value: "토큰 발급" },
      ],
      output: [{ label: "sessionToken", value: "string" }],
    },
  },
  {
    id: "deny",
    label: "접근 거부",
    kind: "deny",
    position: { x: 1120, y: 160 },
    nodeType: "종료",
    settings: {
      input: [{ label: "reason", value: "${risk.branch}" }],
      task: [
        { label: "결과", value: "접근 거부" },
        { label: "로깅", value: "감사 기록" },
      ],
      output: [{ label: "auditId", value: "string" }],
    },
  },
];

export interface FlowEdgeSeed {
  id: string;
  source: string;
  target: string;
  label?: string;
}

export const workflowEdges: FlowEdgeSeed[] = [
  { id: "e1", source: "req", target: "identity" },
  { id: "e2", source: "identity", target: "policy" },
  { id: "e3", source: "policy", target: "mfa" },
  { id: "e4", source: "mfa", target: "risk" },
  { id: "e5", source: "risk", target: "allow", label: "정상" },
  { id: "e6", source: "risk", target: "deny", label: "위험" },
];

// 역할 관리(Role Management) — 가로형 계층 트리 + 노드 클릭 시 상세 패널.
// 재구성한 예시이며 도메인·값은 모두 더미입니다.
export interface RoleDetail {
  description: string;
  fields: { label: string; value: string }[];
}

export interface RoleNodeSeed {
  id: string;
  variant: "group" | "role" | "service";
  title: string;
  subtitle?: string;
  meta?: string;
  badge?: string;
  position: { x: number; y: number };
  detail: RoleDetail;
}

export const roleNodes: RoleNodeSeed[] = [
  {
    id: "group",
    variant: "group",
    title: "기본 역할 그룹",
    subtitle: "꾸러미 · 하위 2",
    badge: "G",
    position: { x: 0, y: 360 },
    detail: {
      description: "업무시스템 접근 역할을 묶은 기본 역할 꾸러미.",
      fields: [
        { label: "유형", value: "역할 꾸러미" },
        { label: "하위 역할", value: "2" },
      ],
    },
  },
  {
    id: "admin",
    variant: "role",
    title: "관리자",
    subtitle: "업무시스템 관리 권한",
    meta: "서비스 4",
    badge: "관",
    position: { x: 340, y: 180 },
    detail: {
      description: "업무시스템 전반의 관리 권한을 가진 역할.",
      fields: [
        { label: "권한 레벨", value: "관리자" },
        { label: "연결 서비스", value: "4" },
        { label: "상태", value: "활성" },
      ],
    },
  },
  {
    id: "user",
    variant: "role",
    title: "일반 사용자",
    subtitle: "업무시스템 일반 접근 권한",
    meta: "서비스 2",
    badge: "일",
    position: { x: 340, y: 640 },
    detail: {
      description: "업무시스템 일반 접근 권한을 가진 역할.",
      fields: [
        { label: "권한 레벨", value: "일반" },
        { label: "연결 서비스", value: "2" },
        { label: "상태", value: "활성" },
      ],
    },
  },
  {
    id: "svc-crm",
    variant: "service",
    title: "demo-crm.example.com",
    meta: "crm demo",
    badge: "SP",
    position: { x: 720, y: 0 },
    detail: {
      description: "CRM 서비스 (Service Provider).",
      fields: [
        { label: "유형", value: "SP" },
        { label: "URL", value: "http://demo-crm.example.com" },
        { label: "설명", value: "crm demo" },
      ],
    },
  },
  {
    id: "svc-gw",
    variant: "service",
    title: "demo-gw.example.com",
    meta: "groupware demo",
    badge: "SP",
    position: { x: 720, y: 130 },
    detail: {
      description: "그룹웨어 서비스 (Service Provider).",
      fields: [
        { label: "유형", value: "SP" },
        { label: "URL", value: "http://demo-gw.example.com" },
        { label: "설명", value: "groupware demo" },
      ],
    },
  },
  {
    id: "svc-iap-a",
    variant: "service",
    title: "demo-iap.example.com",
    meta: "iap demo",
    badge: "SP",
    position: { x: 720, y: 260 },
    detail: {
      description: "IAP 서비스 (Service Provider).",
      fields: [
        { label: "유형", value: "SP" },
        { label: "URL", value: "http://demo-iap.example.com" },
        { label: "설명", value: "iap demo" },
      ],
    },
  },
  {
    id: "svc-sp-a",
    variant: "service",
    title: "demo-sp-1.example.com",
    meta: "sp demo",
    badge: "SP",
    position: { x: 720, y: 390 },
    detail: {
      description: "SP 서비스 (Service Provider).",
      fields: [
        { label: "유형", value: "SP" },
        { label: "URL", value: "https://demo-sp-1.example.com" },
        { label: "설명", value: "sp demo" },
      ],
    },
  },
  {
    id: "svc-iap-b",
    variant: "service",
    title: "demo-iap.example.com",
    meta: "iap demo",
    badge: "SP",
    position: { x: 720, y: 560 },
    detail: {
      description: "IAP 서비스 (Service Provider).",
      fields: [
        { label: "유형", value: "SP" },
        { label: "URL", value: "http://demo-iap.example.com" },
        { label: "설명", value: "iap demo" },
      ],
    },
  },
  {
    id: "svc-sp-b",
    variant: "service",
    title: "demo-sp-1.example.com",
    meta: "sp demo",
    badge: "SP",
    position: { x: 720, y: 690 },
    detail: {
      description: "SP 서비스 (Service Provider).",
      fields: [
        { label: "유형", value: "SP" },
        { label: "URL", value: "https://demo-sp-1.example.com" },
        { label: "설명", value: "sp demo" },
      ],
    },
  },
];

export const roleEdges: FlowEdgeSeed[] = [
  { id: "r1", source: "group", target: "admin" },
  { id: "r2", source: "group", target: "user" },
  { id: "r3", source: "admin", target: "svc-crm" },
  { id: "r4", source: "admin", target: "svc-gw" },
  { id: "r5", source: "admin", target: "svc-iap-a" },
  { id: "r6", source: "admin", target: "svc-sp-a" },
  { id: "r7", source: "user", target: "svc-iap-b" },
  { id: "r8", source: "user", target: "svc-sp-b" },
];

// Audit Logs — 필터 + 테이블용 더미 로그
export interface AuditLog {
  time: string;
  actor: string;
  action: string;
  target: string;
  result: "성공" | "실패";
  ip: string;
}

export const auditLogs: AuditLog[] = [
  { time: "2026-08-12 10:24:11", actor: "admin", action: "정책 수정", target: "POL-002", result: "성공", ip: "10.0.3.21" },
  { time: "2026-08-12 10:19:47", actor: "user_1042", action: "SSO 로그인", target: "demo-crm", result: "성공", ip: "10.0.4.88" },
  { time: "2026-08-12 10:15:02", actor: "user_0087", action: "MFA 인증", target: "admin-console", result: "실패", ip: "203.0.113.9" },
  { time: "2026-08-12 10:08:33", actor: "admin", action: "역할 생성", target: "role/외부협력사", result: "성공", ip: "10.0.3.21" },
  { time: "2026-08-12 09:57:19", actor: "system", action: "정책 번들 배포", target: "bundle/v128", result: "성공", ip: "-" },
  { time: "2026-08-12 09:42:05", actor: "user_2231", action: "API 호출", target: "iap-api", result: "성공", ip: "10.0.4.12" },
  { time: "2026-08-12 09:30:58", actor: "user_0510", action: "접근 차단", target: "finance-api", result: "실패", ip: "198.51.100.7" },
  { time: "2026-08-12 09:12:44", actor: "admin", action: "관리자 로그인", target: "admin-console", result: "성공", ip: "10.0.3.21" },
];

export const auditActions = ["전체", "로그인", "정책", "역할", "API", "시스템"];

// Threat 대응 — master-detail용 더미 이벤트
export interface ThreatEvent {
  id: string;
  time: string;
  user: string;
  type: string;
  risk: "높음" | "중간" | "낮음";
  status: "대응 완료" | "대응 중" | "미대응";
  detail: {
    description: string;
    score: number;
    timeline: { time: string; label: string }[];
  };
}

export const threatEvents: ThreatEvent[] = [
  {
    id: "THR-2041",
    time: "10:21",
    user: "user_0087",
    type: "비정상 위치 접근",
    risk: "높음",
    status: "대응 중",
    detail: {
      description: "평소와 다른 국가 IP에서 관리자 콘솔 접근 시도가 감지되었습니다.",
      score: 87,
      timeline: [
        { time: "10:21", label: "이상 탐지 — 비정상 위치" },
        { time: "10:21", label: "위험 점수 87 산정" },
        { time: "10:22", label: "MFA 재인증 요구" },
      ],
    },
  },
  {
    id: "THR-2038",
    time: "09:58",
    user: "user_0510",
    type: "반복 인증 실패",
    risk: "중간",
    status: "대응 완료",
    detail: {
      description: "짧은 시간 내 다수의 인증 실패가 발생해 계정을 일시 잠금했습니다.",
      score: 64,
      timeline: [
        { time: "09:55", label: "인증 실패 5회 누적" },
        { time: "09:58", label: "계정 일시 잠금" },
        { time: "10:05", label: "관리자 확인 후 해제" },
      ],
    },
  },
  {
    id: "THR-2035",
    time: "09:40",
    user: "user_1789",
    type: "권한 상승 시도",
    risk: "높음",
    status: "미대응",
    detail: {
      description: "일반 사용자가 관리자 전용 리소스에 접근을 시도했습니다.",
      score: 79,
      timeline: [
        { time: "09:40", label: "관리자 리소스 접근 시도" },
        { time: "09:40", label: "정책 평가 — 거부" },
      ],
    },
  },
  {
    id: "THR-2030",
    time: "09:12",
    user: "user_2231",
    type: "비정상 API 호출량",
    risk: "낮음",
    status: "대응 완료",
    detail: {
      description: "단시간 내 API 호출량이 임계치를 초과했습니다.",
      score: 41,
      timeline: [
        { time: "09:12", label: "호출량 임계치 초과" },
        { time: "09:15", label: "레이트 리밋 적용" },
      ],
    },
  },
];

export const threatRiskLevels = ["전체", "높음", "중간", "낮음"];
