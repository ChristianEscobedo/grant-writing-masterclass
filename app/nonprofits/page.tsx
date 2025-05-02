"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NonprofitsPage() {
  const emails = [
    {
      id: "email1",
      title: "Struggling to Secure Grant Funding? Here's Why 75% of Non-Profits Are Missing Out...",
      description: "Introduction to common grant application mistakes and the funding opportunity",
      day: "Day 1 - Morning"
    },
    {
      id: "email2",
      title: "How This Small Non-Profit Secured $375K in Grants (Using a Method Anyone Can Replicate)",
      description: "Success story highlighting a relatable organization's funding journey",
      day: "Day 1 - Evening"
    },
    {
      id: "email3",
      title: "The 3 Critical Elements Missing From Most Grant Applications (According to Funders)",
      description: "Educational content about what funders are actually looking for",
      day: "Day 2 - Morning"
    },
    {
      id: "email4",
      title: "\"We Were Rejected 12 Times Before Discovering This Approach...\"",
      description: "Testimonial-focused email addressing common application failures",
      day: "Day 2 - Evening"
    },
    {
      id: "email5",
      title: "5 Upcoming Grant Opportunities Your Organization Should Consider (Deadlines Approaching)",
      description: "Actionable information about specific funding opportunities",
      day: "Day 3 - Morning"
    },
    {
      id: "email6",
      title: "How AI Is Revolutionizing Grant Applications (And Why Most Non-Profits Are Missing Out)",
      description: "Introduction to AI tools that can improve grant success rates",
      day: "Day 3 - Evening"
    },
    {
      id: "email7",
      title: "LAST CHANCE: Join Us Tomorrow to Learn How to Dramatically Increase Your Grant Success Rate",
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
            Email Sequence for Non-Profit Organizations
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-4 text-center"
          >
            7-Email Sequence to Drive Masterclass Registrations from Organizations Seeking Funding
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-center p-3 rounded-md mb-12 max-w-2xl mx-auto"
          >
            <strong>Target Audience:</strong> Non-Profit Organizations & NGOs Seeking Grant Funding
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
                  <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-1 rounded">
                    Non-Profit Organizations
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">{email.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{email.description}</p>
                <Link 
                  href={`/nonprofits/${email.id}`}
                  className="inline-flex items-center text-sm px-3 py-1.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
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
