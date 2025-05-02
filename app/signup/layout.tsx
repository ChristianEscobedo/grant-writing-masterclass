import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Grant Writer AI",
  description: "Create your Grant Writer AI account to start writing winning grant proposals with AI assistance.",
};

export default function SignupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
