import type { Metadata } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Facebook Post Sequence - Grant Writer AI",
  description: "7-Day Facebook post sequence to drive registrations for the Grant Writing Masterclass.",
};

export default function FacebookPostsLayout({
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
