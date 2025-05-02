"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EmailsPage() {
  const emails = [
    {
      day: "Day 1",
      emails: [
        {
          id: "day1-morning",
          subject: "🔥 [MASTERCLASS] Turn AI Into a $10K/Month Grant Writing Business",
          time: "Morning",
          filename: "day1-morning.html"
        },
        {
          id: "day1-evening",
          subject: "Did you see this? The service non-profits and small businesses can't say NO to",
          time: "Evening",
          filename: "day1-evening.html"
        }
      ]
    },
    {
      day: "Day 2",
      emails: [
        {
          id: "day2-morning",
          subject: "Meet Gwen: The expert who secured $50 million in grants (and how you can too)",
          time: "Morning",
          filename: "day2-morning.html"
        },
        {
          id: "day2-evening",
          subject: "⏰ [REMINDER] Your Grant Writing Masterclass is tomorrow!",
          time: "Evening",
          filename: "day2-evening.html"
        }
      ]
    },
    {
      day: "Day 3",
      emails: [
        {
          id: "day3-morning",
          subject: "TODAY: Your Grant Writing Masterclass (+ special bonus)",
          time: "Morning",
          filename: "day3-morning.html"
        },
        {
          id: "day3-evening",
          subject: "⚠️ Starting in 2 hours: Grant Writing Masterclass",
          time: "Evening",
          filename: "day3-evening.html"
        }
      ]
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
            Masterclass Email Sequence
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-12 text-center"
          >
            3-Day Build-Up Sequence for the Grant Writing Masterclass
          </motion.p>

          <div className="space-y-12">
            {emails.map((day, dayIndex) => (
              <motion.div
                key={day.day}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + (dayIndex * 0.1) }}
                className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800"
              >
                <h2 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">{day.day}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {day.emails.map((email) => (
                    <div
                      key={email.id}
                      className="bg-neutral-50 dark:bg-neutral-800 rounded-lg p-5 border border-neutral-200 dark:border-neutral-700"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400">{email.time}</span>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">Email</span>
                      </div>
                      <h3 className="font-medium text-lg mb-3 text-neutral-800 dark:text-neutral-200">{email.subject}</h3>
                      <div className="flex space-x-3 mt-4">
                        <Link
                          href={`/emails/${email.id}`}
                          className="text-sm px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                          View Email
                        </Link>
                        <Link
                          href={`/emails/html/${email.filename}`}
                          className="text-sm px-3 py-1.5 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-200 rounded-md hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
                          target="_blank"
                        >
                          HTML Version
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
