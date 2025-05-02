"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NonprofitAttendeesPage() {
  const emails = [
    {
      id: "email1",
      title: "Your Grant Writing Masterclass Replay + Implementation Guide",
      description: "Provides replay access and a step-by-step implementation plan",
      day: "Day 1 - Morning"
    },
    {
      id: "email2",
      title: "The #1 Mistake Non-Profits Make After Learning Grant Strategies",
      description: "Addresses the common pitfall of information without implementation",
      day: "Day 1 - Evening"
    },
    {
      id: "email3",
      title: "3 Options for Implementing What You Learned (With Pros and Cons of Each)",
      description: "Presents different approaches to grant writing implementation",
      day: "Day 2 - Morning"
    },
    {
      id: "email4",
      title: "\"We Secured $127K After Implementing Just One Strategy from the Masterclass\"",
      description: "Success story highlighting quick wins from the masterclass",
      day: "Day 3 - Morning"
    },
    {
      id: "email5",
      title: "5 Upcoming Grant Opportunities Perfect for First-Time Applicants",
      description: "Actionable information about specific funding opportunities",
      day: "Day 4 - Morning"
    },
    {
      id: "email6",
      title: "How to Choose the Right Grant Writer for Your Organization (If You Decide Not to DIY)",
      description: "Guidance for organizations considering hiring a grant writer",
      day: "Day 5 - Morning"
    },
    {
      id: "email7",
      title: "LAST CHANCE: Book Your Grant Strategy Session (Special Rate Expires Tomorrow)",
      description: "Final call to action with urgency",
      day: "Day 6 - Morning"
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
            Post-Event Email Sequence for Non-Profit Organizations
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-4 text-center"
          >
            7-Email Sequence to Drive Implementation and Consultation Bookings from Organizations That Attended the Masterclass
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-center p-3 rounded-md mb-12 max-w-2xl mx-auto"
          >
            <strong>Target Audience:</strong> Non-Profit Organizations & NGOs That Attended the Masterclass
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
                    Post-Event
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">{email.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{email.description}</p>
                <Link 
                  href={`/nonprofits/attendees/${email.id}`}
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
