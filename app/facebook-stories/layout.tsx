import type { Metadata } from "next";
import { NavBar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Facebook Story Sequence - Grant Writer AI",
  description: "7-Day Facebook story sequence to drive registrations for the Grant Writing Masterclass.",
};

export default function FacebookStoriesLayout({
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
