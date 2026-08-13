interface CardProps {
  children: React.ReactNode;
  className?: string;
}

// 섹션 내부에서 콘텐츠를 감싸는 카드 컨테이너
export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-black/[.08] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md dark:border-white/[.1] dark:bg-zinc-900 ${className}`}
    >
      {children}
    </div>
  );
}
