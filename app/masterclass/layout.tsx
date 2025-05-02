import type { Metadata } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Grant Writing Masterclass - Grant Builder AI",
  description: "Comprehensive masterclass on building a $10K+/month grant writing business with zero experience.",
};

export default function MasterclassLayout({
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
