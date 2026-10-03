import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const url = "https://ecitizendigital.com";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: { default: "eCitizen Digital — Digital Growth Partner", template: "%s | eCitizen Digital" },
  description: "Strategy, creative, technology and measurement working together for Bangladeshi businesses.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url, siteName: "eCitizen Digital", images: ["/assets/ecitizen-social-share-1200x630.png"] },
  icons: { icon: "/assets/favicon-32.png" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}><body>
      <a href="#main" className="fixed -top-24 left-4 z-[999] rounded bg-white px-4 py-2 text-black focus:top-4">Skip to content</a>
      <Header /><main id="main">{children}</main><Footer />
    </body></html>
  );
}
