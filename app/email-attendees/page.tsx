"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EmailAttendeesPage() {
  const emails = [
    {
      day: "Day 1",
      emails: [
        {
          id: "day1-morning",
          subject: "🎁 [MASTERCLASS ATTENDEE] Your Grant Builder AI access + next steps",
          time: "Morning",
          filename: "day1-morning.html"
        },
        {
          id: "day1-evening",
          subject: "The $250K opportunity most grant writers are missing in 2025",
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
          subject: "How to land your first $3K-$5K grant writing client this month",
          time: "Morning",
          filename: "day2-morning.html"
        },
        {
          id: "day2-evening",
          subject: "Case Study: How Gwen built a $50M grant writing empire with AI",
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
          subject: "The 3 biggest mistakes new grant writers make (and how to avoid them)",
          time: "Morning",
          filename: "day3-morning.html"
        },
        {
          id: "day3-evening",
          subject: "Why most freelancers struggle to scale beyond $5K/month (and how to break through)",
          time: "Evening",
          filename: "day3-evening.html"
        }
      ]
    },
    {
      day: "Day 4",
      emails: [
        {
          id: "day4-morning",
          subject: "The exact client acquisition system that generates $10K/month in grant writing",
          time: "Morning",
          filename: "day4-morning.html"
        },
        {
          id: "day4-evening",
          subject: "\"I was skeptical about AI grant writing until...\" (Success stories inside)",
          time: "Evening",
          filename: "day4-evening.html"
        }
      ]
    },
    {
      day: "Day 5",
      emails: [
        {
          id: "day5-morning",
          subject: "The Monthly Retainer Blueprint: How to create predictable $10K+ months",
          time: "Morning",
          filename: "day5-morning.html"
        },
        {
          id: "day5-evening",
          subject: "5 ways our Grant Builder AI gives you an unfair advantage over competitors",
          time: "Evening",
          filename: "day5-evening.html"
        }
      ]
    },
    {
      day: "Day 6",
      emails: [
        {
          id: "day6-morning",
          subject: "The 2025 Grant Writing Gold Rush (and why you need to act now)",
          time: "Morning",
          filename: "day6-morning.html"
        },
        {
          id: "day6-evening",
          subject: "Limited spots available: Book your 1:1 Grant Business Strategy Call",
          time: "Evening",
          filename: "day6-evening.html"
        }
      ]
    },
    {
      day: "Day 7",
      emails: [
        {
          id: "day7-morning",
          subject: "FINAL DAY: Your Grant Builder AI access expires tomorrow",
          time: "Morning",
          filename: "day7-morning.html"
        },
        {
          id: "day7-evening",
          subject: "⏰ Last chance to book your Grant Business Strategy Call (spots filling fast)",
          time: "Evening",
          filename: "day7-evening.html"
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
            Post-Masterclass Email Sequence
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-12 text-center"
          >
            7-Day Follow-Up Sequence for Masterclass Attendees
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
                          href={`/email-attendees/${email.id}`}
                          className="text-sm px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        >
                          View Email
                        </Link>
                        <Link 
                          href={`/emails/html-attendees/${email.filename}`}
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
