import Link from "next/link";
import { Plan, taka } from "@/lib/data";
export default function PriceCard({ p }: { p: Plan }) {
  const sale = Math.round(p.price * 0.75);
  return (
    <article className={`glass flex flex-col p-6 ${p.featured ? "border-brand" : ""}`}>
      <h3 className="text-xl font-bold">{p.name}</h3>
      <p className="mt-1 text-sm text-muted">{p.offer ? "25% offer" : "One-time"}</p>
      <p className="mt-4 text-muted line-through">{taka(p.price)} {p.cadence}</p>
      <p className="text-2xl font-bold">{taka(sale)} {p.cadence}</p>
      <p className="text-sm text-brand2">Save {taka(p.price - sale)}</p>
      <ul className="my-5 flex-1 space-y-2 text-sm text-muted">{p.items.map(x => <li key={x}>{x}</li>)}</ul>
      <Link href="/packages" className={`btn ${p.featured ? "btn-primary" : "btn-ghost"}`}>See deliverables →</Link>
    </article>
  );
}
