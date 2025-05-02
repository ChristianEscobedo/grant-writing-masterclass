import type { Metadata } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Non-Profit Post-Event Content - Grant Builder AI",
  description: "Post-event email sequence for non-profit organizations and NGOs that attended the masterclass.",
};

export default function NonprofitAttendeesLayout({
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
