import type { Metadata } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Register for AI Grant Writing Masterclass - Grant Writer AI",
  description:
    "Register for our free masterclass to learn how to build a $10K+/month grant writing business using AI. Discover how to write high-ticket grants, find clients who want to pay you $3-5K per month, and help businesses access hundreds of thousands in funding.",
  openGraph: {
    images: ["https://ai-saas-template-aceternity.vercel.app/banner.png"],
  },
};

export default function RegisterLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}
