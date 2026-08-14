// INI-ICAM 관리자 콘솔 "재구성 예시 UI"용 더미 데이터.
// 실제 제품 데이터가 아니며, 화면 재현을 위한 임의 값입니다.

export interface Kpi {
  label: string;
  value: string;
  delta?: string;
  hint?: string;
  tone?: "up" | "down" | "warn";
}

// 상단 KPI — 위협 대응 현황 중심 (전부 더미)
export const dashboardKpis: Kpi[] = [
  { label: "위협 이벤트", value: "342", hint: "전체 24,860건 중", delta: "▲ 4.2%", tone: "warn" },
  { label: "대응 완료", value: "289", hint: "대응률 84.5%", delta: "▲ 12", tone: "up" },
  { label: "미처리", value: "18", hint: "SLA 초과 3건", delta: "▲ 5", tone: "down" },
  { label: "고위협 사용자", value: "7", hint: "격리 2 · 관찰 5", tone: "warn" },
];

// 위협 유형 분포 (막대 차트)
export const threatByType = [
  { label: "비정상 위치 접근", value: 108, tone: "negative" as const },
  { label: "반복 인증 실패", value: 79, tone: "negative" as const },
  { label: "권한 상승 시도", value: 63, tone: "negative" as const },
  { label: "비정상 API 호출량", value: 47, tone: "negative" as const },
  { label: "정책 위반 접근", value: 25, tone: "negative" as const },
  { label: "기타", value: 20, tone: "negative" as const },
];

// 위협 탐지 추이 (24시간, 12구간) — 에어리어 차트
export const threatTrend: number[] = [
  8, 14, 11, 19, 26, 22, 17, 34, 41, 28, 24, 31,
];

// 대응 상태 요약 (세그먼트 바 + 범례)
export const responseSummary: {
  label: string;
  value: number;
  color: "emerald" | "amber" | "rose";
}[] = [
  { label: "대응 완료", value: 289, color: "emerald" },
  { label: "대응 중", value: 35, color: "amber" },
  { label: "미처리", value: 18, color: "rose" },
];

// 시스템 상태 — 구성요소 헬스체크 (명칭은 일반화한 더미)
export interface SystemComponent {
  name: string;
  latency: string;
  status: "정상" | "지연" | "점검";
}

export const systemStatus: SystemComponent[] = [
  { name: "인증 서비스", latency: "38ms", status: "정상" },
  { name: "정책 엔진", latency: "51ms", status: "정상" },
  { name: "API 게이트웨이", latency: "182ms", status: "지연" },
  { name: "세션 스토어", latency: "12ms", status: "정상" },
  { name: "위협 탐지 엔진", latency: "44ms", status: "정상" },
  { name: "로그·감사 수집", latency: "27ms", status: "정상" },
];

// ── Monitoring(접근제어 실시간 모니터링) 더미 데이터 ──

export const monitorKpis: Kpi[] = [
  { label: "접근 요청", value: "42/s", hint: "실시간 RPS" },
  { label: "허용률", value: "96.8%", delta: "▲ 0.4%", tone: "up" },
  { label: "거부", value: "312", delta: "▲ 22", tone: "down", hint: "최근 1시간" },
  { label: "활성 세션", value: "1,204", hint: "동시 접속" },
];

// 정책 판정(Decision) 분포 — 세그먼트 바
export const decisionBreakdown: {
  label: string;
  value: number;
  color: "emerald" | "amber" | "rose";
}[] = [
  { label: "허용 (Permit)", value: 9240, color: "emerald" },
  { label: "추가 인증 (Step-up)", value: 486, color: "amber" },
  { label: "거부 (Deny)", value: 312, color: "rose" },
];

// 리소스별 접근 Top
export const topResources: { name: string; allow: number; deny: number }[] = [
  { name: "demo-crm.example.com", allow: 3120, deny: 24 },
  { name: "demo-gw.example.com", allow: 2480, deny: 12 },
  { name: "admin-console", allow: 1860, deny: 48 },
  { name: "finance-api", allow: 1240, deny: 86 },
  { name: "iap-api", allow: 980, deny: 9 },
];

// 거부 사유 Top — 막대 차트
export const denyReasons = [
  { label: "정책 미충족", value: 118, tone: "negative" as const },
  { label: "비정상 위치", value: 74, tone: "negative" as const },
  { label: "MFA 실패", value: 63, tone: "negative" as const },
  { label: "권한 없음", value: 34, tone: "negative" as const },
  { label: "세션 만료", value: 23, tone: "negative" as const },
];

// 실시간 접근 로그 스트림
export interface AccessLog {
  time: string;
  user: string;
  resource: string;
  decision: "허용" | "거부" | "추가 인증";
  reason: string;
}

export const accessLogs: AccessLog[] = [
  { time: "10:24:31", user: "user_1042", resource: "demo-crm", decision: "허용", reason: "정책 평가 통과" },
  { time: "10:24:29", user: "user_0087", resource: "admin-console", decision: "추가 인증", reason: "고위험 · MFA 요구" },
  { time: "10:24:27", user: "user_2231", resource: "iap-api", decision: "허용", reason: "지속 평가 정상" },
  { time: "10:24:24", user: "user_0510", resource: "finance-api", decision: "거부", reason: "비정상 위치" },
  { time: "10:24:22", user: "user_1789", resource: "admin-console", decision: "거부", reason: "권한 없음" },
  { time: "10:24:19", user: "user_3320", resource: "demo-gw", decision: "허용", reason: "정책 평가 통과" },
  { time: "10:24:17", user: "user_0087", resource: "legacy-erp", decision: "거부", reason: "정책 미충족" },
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

// 위협 대응 프로세스 — 노드별 설정(세팅 패널용). 전부 더미.
export const workflowNodes: FlowNodeSeed[] = [
  {
    id: "trigger",
    label: "Event Triggered",
    kind: "start",
    position: { x: 0, y: 160 },
    nodeType: "트리거",
    settings: {
      input: [],
      task: [
        { label: "진입점", value: "위협 이벤트" },
        { label: "소스", value: "위협 탐지 엔진" },
      ],
      output: [
        { label: "eventId", value: "string" },
        { label: "riskType", value: "string" },
        { label: "riskScore", value: "number" },
      ],
    },
  },
  {
    id: "type-branch",
    label: "위협 유형 분기",
    kind: "decision",
    position: { x: 260, y: 280 },
    nodeType: "조건 분기",
    settings: {
      input: [
        { label: "riskType", value: "${trigger.riskType}" },
        { label: "riskScore", value: "${trigger.riskScore}" },
      ],
      task: [
        { label: "분기 기준", value: "위협 유형" },
        { label: "규칙", value: "고위험 / 급등 / 등급 상승" },
      ],
      output: [{ label: "branch", value: "high | surge | escalation" }],
    },
  },
  {
    id: "step-up",
    label: "인증 레벨 강화",
    kind: "step",
    position: { x: 540, y: 120 },
    nodeType: "대응 액션",
    settings: {
      input: [{ label: "userId", value: "${trigger.userId}" }],
      task: [
        { label: "액션", value: "인증 레벨 상향" },
        { label: "요구 수단", value: "MFA / FIDO2" },
      ],
      output: [{ label: "enforced", value: "boolean" }],
    },
  },
  {
    id: "blocklist",
    label: "블랙리스트 등록",
    kind: "step",
    position: { x: 540, y: 280 },
    nodeType: "대응 액션",
    settings: {
      input: [
        { label: "userId", value: "${trigger.userId}" },
        { label: "sourceIp", value: "${trigger.sourceIp}" },
      ],
      task: [
        { label: "액션", value: "블랙리스트 등록" },
        { label: "대상", value: "사용자 · IP" },
        { label: "유효기간", value: "24시간" },
      ],
      output: [{ label: "blocked", value: "boolean" }],
    },
  },
  {
    id: "level-branch",
    label: "위험 등급 분기",
    kind: "decision",
    position: { x: 540, y: 440 },
    nodeType: "조건 분기",
    settings: {
      input: [{ label: "riskScore", value: "${trigger.riskScore}" }],
      task: [
        { label: "분기 기준", value: "위험 점수" },
        { label: "임계값", value: "심각≥90 · 높음≥70 · 중간≥40" },
      ],
      output: [{ label: "level", value: "심각 | 높음 | 중간 | 낮음" }],
    },
  },
  {
    id: "force-logout",
    label: "SSO 강제 로그아웃",
    kind: "step",
    position: { x: 820, y: 260 },
    nodeType: "대응 액션",
    settings: {
      input: [{ label: "sessionId", value: "${trigger.sessionId}" }],
      task: [
        { label: "액션", value: "SSO 세션 강제 종료" },
        { label: "범위", value: "전체 서비스" },
      ],
      output: [{ label: "loggedOut", value: "boolean" }],
    },
  },
  {
    id: "notify",
    label: "이메일 알림",
    kind: "step",
    position: { x: 1100, y: 380 },
    nodeType: "알림",
    settings: {
      input: [
        { label: "to", value: "보안 담당자" },
        { label: "eventId", value: "${trigger.eventId}" },
      ],
      task: [
        { label: "채널", value: "이메일" },
        { label: "템플릿", value: "위협 대응 리포트" },
      ],
      output: [{ label: "notified", value: "boolean" }],
    },
  },
];

export interface FlowEdgeSeed {
  id: string;
  source: string;
  target: string;
  label?: string;
  tone?: "high" | "mid" | "low";
}

export const workflowEdges: FlowEdgeSeed[] = [
  { id: "e1", source: "trigger", target: "type-branch" },
  { id: "e2", source: "type-branch", target: "step-up", label: "고위험 이벤트", tone: "high" },
  { id: "e3", source: "type-branch", target: "blocklist", label: "위험도 급등", tone: "high" },
  { id: "e4", source: "type-branch", target: "level-branch", label: "위험 등급 상승", tone: "mid" },
  { id: "e5", source: "step-up", target: "force-logout" },
  { id: "e6", source: "blocklist", target: "force-logout" },
  { id: "e7", source: "level-branch", target: "force-logout", label: "심각", tone: "high" },
  { id: "e8", source: "level-branch", target: "force-logout", label: "높음", tone: "high" },
  { id: "e9", source: "level-branch", target: "notify", label: "중간", tone: "mid" },
  { id: "e10", source: "force-logout", target: "notify" },
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
    sourceIp: string;
    location: string;
    resource: string;
    rule: string;
    recommended: string[];
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
      sourceIp: "203.0.113.42",
      location: "해외 (RU)",
      resource: "admin-console",
      rule: "비정상 위치 로그인 탐지",
      recommended: ["SSO 강제 로그아웃", "인증 레벨 강화", "IP 차단"],
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
      sourceIp: "198.51.100.7",
      location: "국내",
      resource: "finance-api",
      rule: "브루트포스 탐지 (5회/1분)",
      recommended: ["계정 일시 잠금", "MFA 재요구"],
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
      sourceIp: "10.0.4.19",
      location: "사내",
      resource: "admin-console",
      rule: "권한 경계 위반 탐지",
      recommended: ["접근 차단", "권한 재검토", "감사 로그 확인"],
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
      sourceIp: "10.0.4.12",
      location: "사내",
      resource: "iap-api",
      rule: "API 레이트 임계치 초과",
      recommended: ["레이트 리밋 적용"],
      timeline: [
        { time: "09:12", label: "호출량 임계치 초과" },
        { time: "09:15", label: "레이트 리밋 적용" },
      ],
    },
  },
];

export const threatRiskLevels = ["전체", "높음", "중간", "낮음"];

// 위협 탐지 화면 상단 요약 (더미)
export const threatSummary: {
  label: string;
  value: string;
  tone?: "up" | "down" | "warn";
}[] = [
  { label: "오늘 위협", value: "342" },
  { label: "대응 완료", value: "289", tone: "up" },
  { label: "대응 중", value: "35", tone: "warn" },
  { label: "미대응", value: "18", tone: "down" },
];

// 계정 관리 — master-detail용 더미 계정 (위협·모니터링과 사용자ID 정합)
export interface Account {
  id: string;
  name: string;
  email: string;
  role: string;
  dept: string;
  status: "활성" | "잠금" | "비활성";
  mfa: boolean;
  lastLogin: string;
  detail: {
    createdAt: string;
    lastIp: string;
    mfaMethods: string[];
    activeSessions: number;
    roles: string[];
    recent: { time: string; label: string }[];
    stats: {
      totalLogins: number;
      last30dAccess: number;
      authSuccess: number;
      authFail: number;
      topResources: { name: string; count: number }[];
      loginTrend: number[];
    };
  };
}

export const accounts: Account[] = [
  {
    id: "user_0087",
    name: "이서연",
    email: "seoyeon.lee@example.com",
    role: "관리자",
    dept: "보안팀",
    status: "활성",
    mfa: true,
    lastLogin: "2026-08-14 10:21",
    detail: {
      createdAt: "2024-03-11",
      lastIp: "203.0.113.42",
      mfaMethods: ["OTP", "FIDO2"],
      activeSessions: 2,
      roles: ["관리자", "보안 운영"],
      recent: [
        { time: "10:22", label: "MFA 재인증 요구됨" },
        { time: "10:21", label: "비정상 위치 접근 탐지" },
        { time: "09:40", label: "관리자 콘솔 로그인" },
      ],
      stats: {
        totalLogins: 1284,
        last30dAccess: 412,
        authSuccess: 1270,
        authFail: 14,
        topResources: [
          { name: "admin-console", count: 210 },
          { name: "demo-gw", count: 98 },
          { name: "iap-api", count: 60 },
        ],
        loginTrend: [18, 22, 19, 25, 30, 12, 15],
      },
    },
  },
  {
    id: "user_1042",
    name: "김민준",
    email: "minjun.kim@example.com",
    role: "일반 사용자",
    dept: "영업팀",
    status: "활성",
    mfa: true,
    lastLogin: "2026-08-14 10:24",
    detail: {
      createdAt: "2025-01-08",
      lastIp: "10.0.4.88",
      mfaMethods: ["OTP"],
      activeSessions: 1,
      roles: ["일반 사용자"],
      recent: [
        { time: "10:24", label: "demo-crm SSO 로그인" },
        { time: "09:02", label: "비밀번호 변경" },
      ],
      stats: {
        totalLogins: 642,
        last30dAccess: 180,
        authSuccess: 638,
        authFail: 4,
        topResources: [
          { name: "demo-crm", count: 140 },
          { name: "demo-gw", count: 30 },
        ],
        loginTrend: [8, 10, 9, 12, 11, 6, 7],
      },
    },
  },
  {
    id: "user_0510",
    name: "박도윤",
    email: "doyoon.park@example.com",
    role: "일반 사용자",
    dept: "재무팀",
    status: "잠금",
    mfa: true,
    lastLogin: "2026-08-14 09:55",
    detail: {
      createdAt: "2024-07-22",
      lastIp: "198.51.100.7",
      mfaMethods: ["OTP"],
      activeSessions: 0,
      roles: ["일반 사용자", "재무 열람"],
      recent: [
        { time: "09:58", label: "반복 인증 실패로 계정 잠금" },
        { time: "09:55", label: "인증 실패 5회 누적" },
      ],
      stats: {
        totalLogins: 388,
        last30dAccess: 96,
        authSuccess: 372,
        authFail: 16,
        topResources: [
          { name: "finance-api", count: 78 },
          { name: "demo-gw", count: 12 },
        ],
        loginTrend: [6, 7, 5, 4, 9, 0, 0],
      },
    },
  },
  {
    id: "user_1789",
    name: "최지우",
    email: "jiwoo.choi@example.com",
    role: "일반 사용자",
    dept: "개발팀",
    status: "활성",
    mfa: false,
    lastLogin: "2026-08-14 09:40",
    detail: {
      createdAt: "2025-05-30",
      lastIp: "10.0.4.19",
      mfaMethods: [],
      activeSessions: 1,
      roles: ["일반 사용자"],
      recent: [
        { time: "09:40", label: "관리자 리소스 접근 시도 — 거부" },
        { time: "08:55", label: "iap-api 호출" },
      ],
      stats: {
        totalLogins: 510,
        last30dAccess: 150,
        authSuccess: 498,
        authFail: 12,
        topResources: [
          { name: "iap-api", count: 90 },
          { name: "demo-sp-1", count: 40 },
        ],
        loginTrend: [10, 12, 8, 14, 9, 7, 11],
      },
    },
  },
  {
    id: "user_2231",
    name: "정하준",
    email: "hajun.jung@example.com",
    role: "관리자",
    dept: "인프라팀",
    status: "활성",
    mfa: true,
    lastLogin: "2026-08-14 10:24",
    detail: {
      createdAt: "2023-11-02",
      lastIp: "10.0.4.12",
      mfaMethods: ["OTP", "FIDO2"],
      activeSessions: 3,
      roles: ["관리자", "인프라 운영"],
      recent: [
        { time: "10:24", label: "iap-api 접근 허용" },
        { time: "10:10", label: "정책 번들 배포 확인" },
      ],
      stats: {
        totalLogins: 1560,
        last30dAccess: 520,
        authSuccess: 1548,
        authFail: 12,
        topResources: [
          { name: "iap-api", count: 240 },
          { name: "admin-console", count: 160 },
          { name: "demo-gw", count: 80 },
        ],
        loginTrend: [22, 24, 20, 26, 28, 18, 21],
      },
    },
  },
  {
    id: "user_3320",
    name: "강수아",
    email: "sua.kang@example.com",
    role: "일반 사용자",
    dept: "인사팀",
    status: "비활성",
    mfa: false,
    lastLogin: "2026-06-30 17:20",
    detail: {
      createdAt: "2024-02-14",
      lastIp: "10.0.4.51",
      mfaMethods: [],
      activeSessions: 0,
      roles: ["일반 사용자"],
      recent: [{ time: "06-30", label: "장기 미접속으로 비활성 전환" }],
      stats: {
        totalLogins: 210,
        last30dAccess: 0,
        authSuccess: 206,
        authFail: 4,
        topResources: [{ name: "demo-gw", count: 40 }],
        loginTrend: [0, 0, 0, 0, 0, 0, 0],
      },
    },
  },
];

export const accountStatuses = ["전체", "활성", "잠금", "비활성"];
