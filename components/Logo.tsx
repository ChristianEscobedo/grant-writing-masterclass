"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Logo = () => {
  const { theme } = useTheme();

  return (
    <Link
      href="/"
      className="font-normal flex items-center text-sm mr-4 relative z-20"
    >
      <Image
        src={theme === "dark" ? "/GrantBuilder-AI-Dark.png" : "/GrantBuilder-AI-Light.png"}
        alt="Grant Writer AI Logo"
        width={180}
        height={48}
        className="h-9 w-auto"
        priority
        quality={100}
        style={{ objectFit: 'contain' }}
        unoptimized
      />
    </Link>
  );
};
