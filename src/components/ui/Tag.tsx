interface TagProps {
  children: React.ReactNode;
}

// 기술 스택 등을 표시하는 작은 라벨
export default function Tag({ children }: TagProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-black/[.08] bg-black/[.03] px-2.5 py-0.5 text-xs font-medium text-zinc-700 dark:border-white/[.12] dark:bg-white/[.06] dark:text-zinc-300">
      {children}
    </span>
  );
}
