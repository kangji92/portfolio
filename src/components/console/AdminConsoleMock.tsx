"use client";

import { useState } from "react";
import DashboardView from "./views/DashboardView";
import RolesView from "./views/RolesView";
import WorkflowView from "./views/WorkflowView";
import MonitoringView from "./views/MonitoringView";
import ThreatView from "./views/ThreatView";
import PoliciesView from "./views/PoliciesView";
import AuditLogsView from "./views/AuditLogsView";

type ViewKey =
  | "dashboard"
  | "roles"
  | "workflow"
  | "monitoring"
  | "threat"
  | "policies"
  | "audit";

const NAV: { key: ViewKey; label: string; icon: React.ReactNode }[] = [
  {
    key: "dashboard",
    label: "대시보드",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    key: "roles",
    label: "역할 관리",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <circle cx="9" cy="7" r="3" />
        <path d="M3 21v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" />
        <path d="M16 3.5a3 3 0 0 1 0 6M21 21v-1a5 5 0 0 0-3.5-4.8" />
      </svg>
    ),
  },
  {
    key: "workflow",
    label: "워크플로우 에디터",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <circle cx="6" cy="6" r="2.5" />
        <circle cx="18" cy="18" r="2.5" />
        <circle cx="6" cy="18" r="2.5" />
        <path d="M6 8.5v7M8.5 6H15a3 3 0 0 1 3 3v6.5" />
      </svg>
    ),
  },
  {
    key: "monitoring",
    label: "모니터링",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <path d="M3 3v18h18" />
        <path d="M7 14l3-4 3 3 4-6" />
      </svg>
    ),
  },
  {
    key: "threat",
    label: "위협 탐지",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <path d="M12 3l9 16H3z" />
        <path d="M12 10v4M12 17h.01" />
      </svg>
    ),
  },
  {
    key: "policies",
    label: "정책 관리",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    key: "audit",
    label: "감사 로그",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M9 8h6M9 12h6M9 16h4" />
      </svg>
    ),
  },
];

export default function AdminConsoleMock() {
  const [active, setActive] = useState<ViewKey>("dashboard");
  const current = NAV.find((n) => n.key === active)!;

  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950 text-slate-100 shadow-xl">
      <div className="flex flex-col sm:flex-row">
        {/* 사이드바 */}
        <aside className="border-b border-white/10 bg-slate-900/60 sm:w-52 sm:shrink-0 sm:border-b-0 sm:border-r">
          <div className="flex items-center gap-2 px-4 py-3">
            <span className="flex h-6 w-6 items-center justify-center rounded bg-emerald-400/20 text-xs font-bold text-emerald-400">
              IC
            </span>
            <span className="text-sm font-semibold">INI-ICAM Console</span>
          </div>
          <nav className="flex gap-1 overflow-x-auto p-2 sm:flex-col">
            {NAV.map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setActive(item.key)}
                className={`flex shrink-0 items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
                  active === item.key
                    ? "bg-white/10 text-white"
                    : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
                }`}
              >
                {item.icon}
                <span className="whitespace-nowrap">{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* 메인 */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <h3 className="text-sm font-semibold">{current.label}</h3>
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-400/20 text-xs font-semibold text-indigo-300">
                A
              </span>
              <span className="hidden text-xs text-slate-400 sm:inline">Admin</span>
            </div>
          </div>

          <div className="h-[540px] overflow-y-auto p-4">
            {active === "dashboard" && <DashboardView />}
            {active === "roles" && <RolesView />}
            {active === "workflow" && <WorkflowView />}
            {active === "monitoring" && <MonitoringView />}
            {active === "threat" && <ThreatView />}
            {active === "policies" && <PoliciesView />}
            {active === "audit" && <AuditLogsView />}
          </div>
        </div>
      </div>
    </div>
  );
}
