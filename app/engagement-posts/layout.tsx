import type { Metadata } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Engagement Post Sequence - Grant Writer AI",
  description: "7-Day engagement post sequence to drive interaction and registrations for the Grant Writing Masterclass.",
};

export default function EngagementPostsLayout({
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
