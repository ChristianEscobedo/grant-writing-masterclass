import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login - Grant Writer AI",
  description: "Log in to your Grant Writer AI account to access your grant writing tools and resources.",
};

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
