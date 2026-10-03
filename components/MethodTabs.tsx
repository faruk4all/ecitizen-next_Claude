"use client";
import { useState } from "react";
import { steps } from "@/lib/data";
export default function MethodTabs() {
  const [i, setI] = useState(0);
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") setI((i + 1) % steps.length);
    if (e.key === "ArrowLeft") setI((i + steps.length - 1) % steps.length);
  };
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[320px_1fr]">
      <div role="tablist" aria-label="Strategy system" onKeyDown={onKey} className="flex gap-2 overflow-x-auto lg:flex-col">
        {steps.map(([n], k) => (
          <button key={n} role="tab" id={`t-${k}`} aria-selected={i === k} aria-controls="m-panel" tabIndex={i === k ? 0 : -1} onClick={() => setI(k)}
            className={`min-h-[48px] shrink-0 rounded-full border px-5 text-left font-semibold transition-colors ${i === k ? "border-brand bg-brand/20" : "border-line text-muted hover:text-ink"}`}>
            {String(k + 1).padStart(2, "0")}  {n}
          </button>
        ))}
      </div>
      <div id="m-panel" role="tabpanel" aria-labelledby={`t-${i}`} className="glass p-8">
        <h3 className="text-2xl font-bold">{steps[i][0]}</h3>
        <p className="mt-3 max-w-prose text-muted">{steps[i][1]}</p>
        <p className="mt-6 text-brand2">Outcome: {steps[i][2]}</p>
      </div>
    </div>
  );
}
