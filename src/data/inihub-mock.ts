// INIHUB "재구성 예시 UI"용 더미 데이터.
// 실제 로고/자산이 아닌 컬러 배지로 표현하며, 값은 임의입니다.

export interface AuthMethod {
  id: string;
  name: string;
  badge: string;
  color: string;
  textDark?: boolean;
  /** "pin"이면 2차 인증(PIN 키패드)로, 아니면 정보 입력 폼으로 라우팅 */
  kind?: "form" | "pin";
}

export interface AuthCategory {
  key: string;
  label: string;
  methods: AuthMethod[];
}

export const authCategories: AuthCategory[] = [
  {
    key: "simple",
    label: "간편인증",
    methods: [
      { id: "kakao", name: "카카오", badge: "K", color: "#FEE500", textDark: true },
      { id: "pass", name: "PASS", badge: "P", color: "#e60012" },
      { id: "toss", name: "토스", badge: "T", color: "#3182f6" },
      { id: "naver", name: "네이버", badge: "N", color: "#03c75a" },
      { id: "payco", name: "PAYCO", badge: "P", color: "#ff1e27" },
      { id: "kb", name: "KB국민", badge: "KB", color: "#ffbc00", textDark: true },
      { id: "shinhan", name: "신한", badge: "신", color: "#1428a0" },
      { id: "kakaobank", name: "카카오뱅크", badge: "뱅", color: "#ffde00", textDark: true },
    ],
  },
  {
    key: "identity",
    label: "본인인증",
    methods: [
      { id: "phone", name: "휴대폰", badge: "휴", color: "#64748b" },
      { id: "fin-cert", name: "금융인증서", badge: "금", color: "#0ea5e9" },
      { id: "joint-cert", name: "공동인증서", badge: "공", color: "#6366f1" },
      { id: "mokg", name: "모바일ID", badge: "ID", color: "#8b5cf6" },
    ],
  },
  {
    key: "2fa",
    label: "2차 인증",
    methods: [
      { id: "pin", name: "PIN", badge: "P", color: "#334155", kind: "pin" },
      { id: "pattern", name: "패턴", badge: "패", color: "#334155" },
      { id: "bio", name: "생체", badge: "생", color: "#334155" },
      { id: "otp", name: "OTP", badge: "O", color: "#334155" },
    ],
  },
];

export const carriers = ["SKT", "KT", "LG U+", "알뜰폰"];
