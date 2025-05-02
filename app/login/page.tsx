"use client";

import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { Background } from "@/components/background";
import { motion } from "framer-motion";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function LoginPage() {
  const { theme } = useTheme();

  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col items-center justify-center py-20">
        <div className="w-full max-w-md mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800"
          >
            <div className="flex justify-center mb-8">
              <Image
                src={theme === "dark" ? "/GrantBuilder-AI-Dark.png" : "/GrantBuilder-AI-Light.png"}
                alt="Grant Writer AI Logo"
                width={200}
                height={53}
                className="h-12 w-auto"
                priority
                quality={100}
                style={{ objectFit: 'contain' }}
                unoptimized
              />
            </div>

            <h1 className="text-2xl font-bold text-center mb-2">Coming Soon</h1>
            <p className="text-neutral-600 dark:text-neutral-400 text-center mb-8">
              We're currently working on our login functionality. Please check back soon!
            </p>

            <div className="space-y-4">
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                as={Link}
                href="/masterclass"
              >
                Join Free Masterclass
              </Button>

              <Button
                className="w-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                as={Link}
                href="/"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
