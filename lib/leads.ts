// Isolated API layer. Set NEXT_PUBLIC_LEAD_ENDPOINT (e.g. Apps Script URL) — nothing is faked without it.
export type Lead = { name: string; phone: string; business: string; message: string };
export type LeadResult = { ok: true } | { ok: false; error: string };
export async function submitLead(lead: Lead): Promise<LeadResult> {
  const url = process.env.NEXT_PUBLIC_LEAD_ENDPOINT;
  if (!url) return { ok: false, error: "Lead endpoint is not configured yet. Please call or message us on WhatsApp." };
  try {
    const r = await fetch(url, { method: "POST", headers: { "Content-Type": "text/plain" }, body: JSON.stringify(lead) });
    return r.ok ? { ok: true } : { ok: false, error: `Server responded ${r.status}. Please try again.` };
  } catch { return { ok: false, error: "Network error. Please check your connection and try again." }; }
}
