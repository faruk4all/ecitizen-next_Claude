import Link from "next/link";
import { PHONE } from "@/lib/data";
export default function Footer() {
  return (
    <footer className="border-t border-line py-12 text-sm text-muted">
      <div className="container-site flex flex-col justify-between gap-6 md:flex-row">
        <p>© {new Date().getFullYear()} eCitizen Digital · Kishoreganj, Bangladesh</p>
        <div className="flex flex-wrap gap-5">
          {[["Privacy","/privacy"],["Terms","/terms"],["Cookies","/cookie"],["FAQ","/faq"]].map(([l,h]) => <Link key={h} href={h} className="hover:text-ink">{l}</Link>)}
          <a href={PHONE.wa} className="font-semibold text-ink">Let&apos;s Talk on WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
