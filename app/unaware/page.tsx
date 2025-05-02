"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UnawareAudiencePage() {
  const emails = [
    {
      id: "email1",
      title: "Tired of Chasing Clients? This $10K/Month Opportunity Is Flying Under the Radar...",
      description: "Introduction to grant writing as a high-ticket service opportunity",
      day: "Day 1 - Morning"
    },
    {
      id: "email2",
      title: "How Sarah Went From Struggling Freelancer to $15K/Month Grant Writing Business",
      description: "Success story highlighting the transition from freelancing to grant writing",
      day: "Day 1 - Evening"
    },
    {
      id: "email3",
      title: "The 3 Reasons Why Grant Writing Is the Perfect High-Ticket Service (Even If You're Starting From Zero)",
      description: "Educational content about the advantages of grant writing as a service",
      day: "Day 2 - Morning"
    },
    {
      id: "email4",
      title: "\"I Was Skeptical About Grant Writing Until I Saw These Results...\"",
      description: "Testimonial-focused email addressing common objections",
      day: "Day 2 - Evening"
    },
    {
      id: "email5",
      title: "The Simple 5-Step Process to Land Your First $3K Grant Writing Client",
      description: "Actionable steps to get started with grant writing services",
      day: "Day 3 - Morning"
    },
    {
      id: "email6",
      title: "How AI Is Making Grant Writing Easier Than Ever Before (No Experience Required)",
      description: "Introduction to AI tools that make grant writing accessible to beginners",
      day: "Day 3 - Evening"
    },
    {
      id: "email7",
      title: "LAST CHANCE: Join Us Tomorrow to Learn How to Build a $10K/Month Grant Writing Business",
      description: "Final reminder with urgency and FOMO",
      day: "Day 4 - Morning"
    }
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col py-20">
        <div className="w-full max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-8 text-center"
          >
            Email Sequence for Unaware Audience
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-4 text-center"
          >
            7-Email Sequence to Educate and Convert Unaware Prospects
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 text-center p-3 rounded-md mb-12 max-w-2xl mx-auto"
          >
            <strong>Target Audience:</strong> Low Sophistication (Unaware of Grant Writing)
          </motion.div>

          <div className="space-y-6">
            {emails.map((email, index) => (
              <motion.div
                key={email.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                    {email.day}
                  </span>
                  <span className="bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs px-2 py-1 rounded">
                    Unaware Audience
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">{email.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{email.description}</p>
                <Link 
                  href={`/unaware/${email.id}`}
                  className="inline-flex items-center text-sm px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Full Email
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
