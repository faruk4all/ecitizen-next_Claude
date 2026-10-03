import Link from "next/link";
import { outcomes, plans, steps } from "@/lib/data";
import PriceCard from "@/components/PriceCard";
import MethodTabs from "@/components/MethodTabs";
const H2 = "mt-3 max-w-3xl text-3xl font-bold leading-tight md:text-5xl";
export default function Home() {
  return (<>
    <section className="section container-site pt-20 md:pt-32">
      <p className="text-brand2">Digital Growth Partner</p>
      <h1 className="mt-4 max-w-4xl text-5xl font-extrabold uppercase leading-[1.02] md:text-8xl">Don&apos;t just boost. Have a strategy.</h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">Marketing works harder when strategy, creative, technology and measurement move in the same direction.</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className="btn btn-primary">Build Your Battle Plan →</Link><Link href="/packages" className="btn btn-ghost">View Packages</Link></div>
    </section>
    <section className="section container-site">
      <p className="text-brand2">The problem</p><h2 className={H2}>Digital activity is not the same as digital progress.</h2>
      <p className="mt-4 max-w-2xl text-muted">When social, advertising, website, content and brand work separately, effort gets fragmented. The first step is to connect the pieces to a clear business objective.</p>
      <ol className="mt-8 grid gap-4 md:grid-cols-3">{["Attention without a clear commercial objective.","Inconsistent experiences across customer touchpoints.","Channels that generate activity but little usable intelligence."].map((t,i)=><li key={t} className="glass p-6"><span className="text-brand2">{String(i+1).padStart(2,"0")}</span><p className="mt-2">{t}</p></li>)}</ol>
    </section>
    <section className="section container-site">
      <p className="text-brand2">Choose an outcome</p><h2 className={H2}>Start with what the business needs next.</h2>
      <p className="mt-4 max-w-2xl text-muted">No forced bundle. Start with the outcome, then connect the capabilities required to reach it.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{outcomes.map(([t,d,h],i)=><article key={t} className="glass flex flex-col p-6"><span className="text-brand2">{String(i+1).padStart(2,"0")}</span><h3 className="mt-2 text-xl font-bold">{t}</h3><p className="my-3 flex-1 text-muted">{d}</p><Link href={h} className="font-semibold text-brand2">Explore →</Link></article>)}</div>
    </section>
    <section className="section container-site">
      <p className="text-brand2">Strategy system</p><h2 className={H2}>Understand. Build. Reach. Convert. Optimize. Grow.</h2>
      <p className="mt-4 max-w-2xl text-muted">A disciplined loop that turns business context into action, evidence and the next better move.</p>
      <MethodTabs />
    </section>
    <section className="section container-site">
      <p className="text-brand2">Launch offers</p><h2 className={H2}>Choose the level of support that fits your stage.</h2>
      <p className="mt-4 max-w-2xl text-muted">Transparent reference pricing with a visible 25% launch offer on monthly packages. Starter is a one-time digital setup; Grow through Enterprise are ongoing monthly packages.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">{plans.map(p=><PriceCard key={p.name} p={p} />)}</div>
    </section>
    <section className="section container-site">
      <p className="text-brand2">How it moves</p><h2 className={H2}>From business problem to measured next move.</h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{steps.map(([t,d,o],i)=><article key={t} className="glass p-6"><span className="text-brand2">{String(i+1).padStart(2,"0")}</span><h3 className="mt-2 text-xl font-bold">{t}</h3><p className="mt-2 text-muted">{d}</p><p className="mt-3 text-sm text-brand2">{o}</p></article>)}</div>
    </section>
  </>);
}
