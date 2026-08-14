"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { skills } from "@/data/skills";
import { guides } from "@/data/guides";

interface Command {
  group: string;
  label: string;
  href: string;
  keywords?: string;
}

// 기본 표시 항목 (이동 · 데모). 확장 시 여기에 추가.
const NAV: Command[] = [
  { group: "이동", label: "Profile", href: "/#profile" },
  { group: "이동", label: "Career", href: "/#career" },
  { group: "이동", label: "Projects", href: "/#projects" },
  { group: "이동", label: "Skills", href: "/#skills" },
  { group: "이동", label: "Notes", href: "/guides" },
  { group: "데모", label: "INI-ICAM 관리자 콘솔", href: "/projects/ini-icam" },
  { group: "데모", label: "INIHUB 인증 모달", href: "/projects/inihub" },
];

// 가이드 — 검색 시에만 노출. 선택하면 해당 가이드로 이동.
const GUIDE_COMMANDS: Command[] = guides.map((g) => ({
  group: "노트",
  label: g.title,
  href: `/guides/${g.slug}`,
  keywords: g.tags.join(" "),
}));

// 스킬(스택) — 검색 시에만 노출. 선택하면 Skills 섹션으로 이동.
const SKILL_COMMANDS: Command[] = skills.flatMap((g) =>
  g.items.map((it) => ({
    group: "스킬",
    label: it.name,
    href: "/#skills",
    keywords: g.category,
  })),
);

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const openRef = useRef(false);

  const q = query.trim().toLowerCase();
  // 검색어가 없으면 기본 항목만, 있으면 스킬까지 포함해 검색
  const pool = q ? [...NAV, ...SKILL_COMMANDS, ...GUIDE_COMMANDS] : NAV;
  const filtered = pool.filter((c) =>
    (c.label + " " + c.group + " " + (c.keywords ?? "")).toLowerCase().includes(q),
  );

  const openPalette = useCallback(() => {
    setOpen(true);
    setQuery("");
    setActive(0);
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  useEffect(() => {
    openRef.current = open;
  }, [open]);

  // 전역 단축키(⌘K / Ctrl+K) + 헤더 버튼의 커스텀 이벤트로 열기
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (openRef.current) close();
        else openPalette();
      }
    };
    const onOpen = () => openPalette();
    window.addEventListener("keydown", onKey);
    window.addEventListener("command-palette:open", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("command-palette:open", onOpen);
    };
  }, [openPalette, close]);

  // 열릴 때 입력창에 포커스 (외부 시스템: DOM)
  useEffect(() => {
    if (open) requestAnimationFrame(() => inputRef.current?.focus());
  }, [open]);

  if (!open) return null;

  const run = (cmd: Command | undefined) => {
    if (!cmd) return;
    close();
    window.location.assign(cmd.href);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      close();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      run(filtered[active]);
    }
  };

  return (
    <div
      className="no-print fixed inset-0 z-[100] flex items-start justify-center bg-black/40 p-4 pt-[15vh]"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="명령 팔레트"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl dark:border-white/10 dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={onKeyDown}
      >
        <input
          ref={inputRef}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          placeholder="이동 · 스킬 검색…"
          className="w-full border-b border-black/[.06] bg-transparent px-4 py-3.5 text-sm text-zinc-900 outline-none placeholder:text-zinc-400 dark:border-white/[.08] dark:text-zinc-100"
        />
        <ul className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 && (
            <li className="px-3 py-6 text-center text-sm text-zinc-400">
              결과 없음
            </li>
          )}
          {filtered.map((cmd, i) => (
            <li key={`${cmd.group}-${cmd.label}`}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onClick={() => run(cmd)}
                className={`flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                  i === active
                    ? "bg-zinc-100 dark:bg-zinc-800"
                    : "hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                }`}
              >
                <span className="truncate text-zinc-800 dark:text-zinc-100">
                  {cmd.label}
                </span>
                <span className="shrink-0 text-xs text-zinc-400">
                  {cmd.keywords ?? cmd.group}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3 border-t border-black/[.06] px-4 py-2 text-[11px] text-zinc-400 dark:border-white/[.08]">
          <span>↑↓ 이동</span>
          <span>↵ 선택</span>
          <span>esc 닫기</span>
        </div>
      </div>
    </div>
  );
}
