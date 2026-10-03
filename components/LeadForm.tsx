"use client";
import { useState } from "react";
import { submitLead } from "@/lib/leads";
type S = "idle" | "loading" | "success" | "error";
const field = "w-full rounded-xl border border-line bg-surface2 px-4 py-3 text-ink placeholder:text-muted";
export default function LeadForm() {
  const [state, setState] = useState<S>("idle");
  const [msg, setMsg] = useState("");
  const [errs, setErrs] = useState<Record<string, string>>({});
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const d: Record<string, string> = {};
    for (const k of ["name", "phone", "business", "message"]) d[k] = String(fd.get(k) ?? "");
    const er: Record<string, string> = {};
    if (!d.name?.trim()) er.name = "Enter your name.";
    if (!/^\+?[0-9\s-]{10,15}$/.test(d.phone ?? "")) er.phone = "Enter a valid phone number.";
    setErrs(er);
    if (Object.keys(er).length) return;
    setState("loading");
    const r = await submitLead({ name: d.name, phone: d.phone, business: d.business ?? "", message: d.message ?? "" });
    if (r.ok) { setState("success"); form.reset(); } else { setState("error"); setMsg(r.error); }
  }
  return (
    <form onSubmit={onSubmit} noValidate id="free-audit" className="glass grid gap-4 p-6 md:p-8">
      {(["name","phone","business"] as const).map(k => (
        <div key={k}>
          <label htmlFor={k} className="mb-1 block text-sm font-semibold capitalize">{k === "business" ? "Business name (optional)" : k}</label>
          <input id={k} name={k} className={field} aria-invalid={!!errs[k]} aria-describedby={errs[k] ? `${k}-e` : undefined} autoComplete={k === "phone" ? "tel" : k === "name" ? "name" : "organization"} />
          {errs[k] && <p id={`${k}-e`} className="mt-1 text-sm text-red-400">{errs[k]}</p>}
        </div>
      ))}
      <div><label htmlFor="message" className="mb-1 block text-sm font-semibold">What do you need next?</label><textarea id="message" name="message" rows={4} className={field} /></div>
      <button className="btn btn-primary" disabled={state === "loading"}>{state === "loading" ? "Sending…" : "Request free audit"}</button>
      <p role="status" aria-live="polite" className={state === "success" ? "text-emerald-400" : "text-red-400"}>{state === "success" ? "Request received. We will contact you shortly." : state === "error" ? msg : ""}</p>
    </form>
  );
}
