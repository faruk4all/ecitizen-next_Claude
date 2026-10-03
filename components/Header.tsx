"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, PHONE } from "@/lib/data";
export default function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur">
      <div className="container-site flex h-[72px] items-center justify-between gap-4">
        <Link href="/" aria-label="eCitizen Digital home"><Image src="/assets/ecitizen-lockup-horizontal-reversed.png" alt="eCitizen Digital" width={168} height={40} priority className="h-9 w-auto" /></Link>
        <nav aria-label="Primary" className="hidden gap-6 text-sm lg:flex">
          {nav.map(([l, h]) => <Link key={h} href={h} aria-current={path === h ? "page" : undefined} className={path === h ? "text-brand2" : "text-muted hover:text-ink"}>{l}</Link>)}
        </nav>
        <div className="flex items-center gap-3">
          <a href={PHONE.tel} className="hidden text-sm text-muted hover:text-ink xl:block" aria-label={`Call ${PHONE.label}`}>{PHONE.label}</a>
          <Link href="/contact?intent=audit#free-audit" className="btn btn-primary !min-h-[44px] !px-5 text-sm">Free Audit</Link>
          <button className="h-11 w-11 rounded-full border border-line lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="container-site grid gap-1 pb-4 lg:hidden">
          {nav.map(([l, h]) => <Link key={h} href={h} onClick={() => setOpen(false)} className="rounded-xl px-3 py-3 text-lg hover:bg-white/5">{l}</Link>)}
        </nav>
      )}
    </header>
  );
}
