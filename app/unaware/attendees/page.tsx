"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UnawareAttendeesPage() {
  const emails = [
    {
      id: "email1",
      title: "Your Grant Writing Masterclass Replay + Next Steps",
      description: "Initial follow-up with replay access and key takeaways",
      day: "Day 1 - Morning"
    },
    {
      id: "email2",
      title: "The #1 Mistake New Grant Writers Make (And How to Avoid It)",
      description: "Educational content addressing common concerns of beginners",
      day: "Day 1 - Evening"
    },
    {
      id: "email3",
      title: "\"I Was Terrified to Start Grant Writing Until I Discovered This...\"",
      description: "Testimonial-focused email addressing fear of getting started",
      day: "Day 2 - Morning"
    },
    {
      id: "email4",
      title: "How to Land Your First Grant Writing Client in the Next 14 Days",
      description: "Actionable steps to get started quickly with grant writing",
      day: "Day 2 - Evening"
    },
    {
      id: "email5",
      title: "Case Study: From Zero to $8,500 in 30 Days with Grant Writing",
      description: "Success story highlighting quick results for a beginner",
      day: "Day 3 - Morning"
    },
    {
      id: "email6",
      title: "The Grant Builder AI System: Your Secret Weapon for Success",
      description: "Detailed explanation of how the AI system works for beginners",
      day: "Day 3 - Evening"
    },
    {
      id: "email7",
      title: "LAST CHANCE: Book Your Strategy Call (Special Bonus Expires Today)",
      description: "Final call to action with urgency and special offer",
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
            Post-Event Email Sequence for Unaware Attendees
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-4 text-center"
          >
            7-Email Sequence to Convert Masterclass Attendees into Consultation Calls
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 text-center p-3 rounded-md mb-12 max-w-2xl mx-auto"
          >
            <strong>Target Audience:</strong> Low Sophistication Attendees (New to Grant Writing)
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
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded">
                    Post-Event
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">{email.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{email.description}</p>
                <Link 
                  href={`/unaware/attendees/${email.id}`}
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
