"use client";

import { useState } from "react";
import { authCategories, carriers, type AuthMethod } from "@/data/inihub-mock";

type Step = "select" | "form" | "waiting" | "pin" | "done";

function MethodBadge({ method, size = 48 }: { method: AuthMethod; size?: number }) {
  return (
    <span
      className="flex items-center justify-center rounded-xl text-sm font-bold"
      style={{
        width: size,
        height: size,
        background: method.color,
        color: method.textDark ? "#1f2937" : "#ffffff",
      }}
    >
      {method.badge}
    </span>
  );
}

export default function AuthModalMock() {
  const [step, setStep] = useState<Step>("select");
  const [activeCat, setActiveCat] = useState(authCategories[0].key);
  const [method, setMethod] = useState<AuthMethod | null>(null);
  const [carrier, setCarrier] = useState(carriers[0]);
  const [pin, setPin] = useState("");

  const methods =
    authCategories.find((c) => c.key === activeCat)?.methods ?? [];

  const reset = () => {
    setStep("select");
    setMethod(null);
    setPin("");
  };

  const selectMethod = (m: AuthMethod) => {
    setMethod(m);
    setStep(m.kind === "pin" ? "pin" : "form");
  };

  const back = () => {
    if (step === "waiting") setStep("form");
    else setStep("select");
    setPin("");
  };

  const pressKey = (k: string) => {
    if (k === "del") {
      setPin((p) => p.slice(0, -1));
      return;
    }
    setPin((p) => {
      if (p.length >= 6) return p;
      const next = p + k;
      if (next.length === 6) setTimeout(() => setStep("done"), 150);
      return next;
    });
  };

  return (
    <div className="relative flex min-h-[560px] items-center justify-center rounded-xl border border-black/10 bg-slate-200/60 p-4 dark:border-white/10 dark:bg-slate-800/40">
      <div className="flex h-[520px] w-full max-w-[400px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        {/* 헤더 */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          {step !== "select" ? (
            <button
              type="button"
              onClick={back}
              className="text-slate-400 hover:text-slate-700"
              aria-label="뒤로"
            >
              ←
            </button>
          ) : (
            <span className="w-4" />
          )}
          <div className="text-center">
            <p className="text-sm font-bold tracking-tight text-slate-900">INIHuB</p>
            <p className="text-[11px] text-slate-400">빠르고 편리한 간편인증</p>
          </div>
          <button
            type="button"
            onClick={reset}
            className="text-slate-400 hover:text-slate-700"
            aria-label="닫기"
          >
            ✕
          </button>
        </div>

        {/* 본문 — 높이 고정 + 스크롤로 단계 전환 시 덜컹임 방지 */}
        <div className="flex-1 overflow-y-auto">
        {step === "select" && (
          <div>
            <div className="flex border-b border-slate-100">
              {authCategories.map((c) => (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setActiveCat(c.key)}
                  className={`flex-1 py-3 text-sm font-medium transition-colors ${
                    activeCat === c.key
                      ? "border-b-2 border-indigo-600 text-indigo-600"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-x-2 gap-y-4 p-5">
              {methods.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => selectMethod(m)}
                  className="flex flex-col items-center gap-1.5"
                >
                  <MethodBadge method={m} />
                  <span className="text-xs text-slate-600">{m.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "form" && method && (
          <div className="space-y-4 p-5">
            <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
              <MethodBadge method={method} size={36} />
              <p className="text-sm font-medium text-slate-800">
                {method.name} 인증
              </p>
            </div>

            <div>
              <label className="text-xs text-slate-500">이름</label>
              <input
                type="text"
                placeholder="홍길동"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500">생년월일</label>
              <input
                type="text"
                placeholder="YYMMDD"
                inputMode="numeric"
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500">휴대폰번호</label>
              <div className="mt-1 flex gap-2">
                <select
                  value={carrier}
                  onChange={(e) => setCarrier(e.target.value)}
                  className="rounded-lg border border-slate-200 px-2 py-2 text-sm text-slate-700 focus:border-indigo-500 focus:outline-none"
                >
                  {carriers.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
                <input
                  type="text"
                  placeholder="01012345678"
                  inputMode="numeric"
                  className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none"
                />
              </div>
            </div>

            <label className="flex items-center gap-2 text-xs text-slate-500">
              <input type="checkbox" className="accent-indigo-600" />
              전체 약관에 동의합니다
            </label>

            <button
              type="button"
              onClick={() => setStep("waiting")}
              className="w-full rounded-lg bg-indigo-600 py-2.5 text-sm font-medium text-white transition-colors hover:bg-indigo-700"
            >
              인증 요청
            </button>
          </div>
        )}

        {step === "waiting" && (
          <div className="flex flex-col items-center gap-4 px-5 py-12 text-center">
            <span className="h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-indigo-600" />
            <div>
              <p className="text-sm font-medium text-slate-800">인증 요청을 보냈습니다</p>
              <p className="mt-1 text-xs text-slate-400">
                휴대폰에서 인증을 완료해주세요
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStep("done")}
              className="mt-2 rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
            >
              인증 확인
            </button>
          </div>
        )}

        {step === "pin" && (
          <div className="px-5 py-6">
            <p className="text-center text-sm font-medium text-slate-800">
              PIN 6자리를 입력하세요
            </p>
            <div className="mt-5 flex justify-center gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <span
                  key={i}
                  className={`h-3 w-3 rounded-full ${
                    i < pin.length ? "bg-indigo-600" : "bg-slate-200"
                  }`}
                />
              ))}
            </div>
            <div className="mx-auto mt-8 grid max-w-[240px] grid-cols-3 gap-2">
              {["1", "2", "3", "4", "5", "6", "7", "8", "9", "", "0", "del"].map(
                (k, i) =>
                  k === "" ? (
                    <span key={i} />
                  ) : (
                    <button
                      key={i}
                      type="button"
                      onClick={() => pressKey(k)}
                      className="rounded-lg py-3 text-lg font-medium text-slate-700 transition-colors hover:bg-slate-100"
                    >
                      {k === "del" ? "⌫" : k}
                    </button>
                  ),
              )}
            </div>
          </div>
        )}

        {step === "done" && (
          <div className="flex flex-col items-center gap-3 px-5 py-12 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-2xl text-emerald-600">
              ✓
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-800">인증 완료</p>
              <p className="mt-1 text-xs text-slate-400">
                {method ? `${method.name}(으)로 ` : ""}인증되었습니다
              </p>
            </div>
            <button
              type="button"
              onClick={reset}
              className="mt-2 rounded-lg bg-indigo-600 px-5 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              처음으로
            </button>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
