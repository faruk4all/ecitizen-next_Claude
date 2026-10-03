import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
export const metadata: Metadata = { title: "Contact", description: "Request a free digital audit from eCitizen Digital.", alternates: { canonical: "/contact" } };
export default function Contact() {
  return (<section className="section container-site max-w-3xl"><h1 className="text-4xl font-bold md:text-6xl">Request your free audit</h1><p className="mb-8 mt-4 text-muted">Tell us about the business and what you need next.</p><LeadForm /></section>);
}
