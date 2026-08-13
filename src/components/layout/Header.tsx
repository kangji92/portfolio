"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Career", href: "#career" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="no-print sticky top-0 z-50 border-b border-black/[.06] bg-white/80 backdrop-blur dark:border-white/[.08] dark:bg-black/70">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <Link
          href="#profile"
          className="text-base font-semibold tracking-tight"
          onClick={() => setOpen(false)}
        >
          Kang JiYeon
        </Link>

        <div className="flex items-center gap-3">
          {/* 데스크톱 네비게이션 */}
          <nav className="hidden gap-6 sm:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 검색(커맨드 팔레트) 트리거 — 데스크톱: 검색창 형태 */}
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new Event("command-palette:open"))
            }
            className="hidden items-center gap-2 rounded-md border border-black/[.08] bg-black/[.02] px-3 py-1.5 text-sm text-zinc-400 transition-colors hover:bg-black/[.04] sm:flex dark:border-white/[.12] dark:bg-white/[.03] dark:hover:bg-white/[.06]"
            aria-label="검색 (Cmd+K)"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span className="w-20 text-left">검색</span>
            <kbd className="rounded border border-black/[.08] px-1.5 py-0.5 text-[11px] font-medium dark:border-white/[.15]">
              ⌘K
            </kbd>
          </button>

          {/* 검색 트리거 — 모바일: 아이콘 */}
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new Event("command-palette:open"))
            }
            className="flex h-9 w-9 items-center justify-center rounded-md border border-black/[.08] transition-colors hover:bg-black/[.04] sm:hidden dark:border-white/[.12] dark:hover:bg-white/[.06]"
            aria-label="검색"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m21 21-4.3-4.3" />
            </svg>
          </button>

          {/* 모바일 토글 버튼 */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-black/[.08] transition-colors hover:bg-black/[.04] sm:hidden dark:border-white/[.12] dark:hover:bg-white/[.06]"
            aria-label="메뉴 열기/닫기"
            aria-expanded={open}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 메뉴 */}
      {open && (
        <nav className="border-t border-black/[.06] bg-white sm:hidden dark:border-white/[.08] dark:bg-black">
          <div className="mx-auto flex w-full max-w-5xl flex-col px-6 py-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
