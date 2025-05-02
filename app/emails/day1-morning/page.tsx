"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Day1MorningEmailPage() {
  const alternativeSubjects = [
    "🔥 [MASTERCLASS] Turn AI Into a $10K/Month Grant Writing Business",
    "The YES offer for non-profits & small businesses (free masterclass)",
    "How to build a $10K/month business with AI grant writing"
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col py-20">
        <div className="w-full max-w-3xl mx-auto">
          <div className="mb-8">
            <Button
              as={Link}
              href="/emails"
              className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Back to All Emails
            </Button>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 mb-8"
          >
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-200">Alternative Subject Lines</h2>
              <ul className="space-y-2">
                {alternativeSubjects.map((subject, index) => (
                  <li key={index} className="bg-neutral-50 dark:bg-neutral-800 p-3 rounded-md text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                    {subject}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">From: Grant Writer AI</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">To: [Subscriber]</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Day 1 - Morning</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">🔥 [MASTERCLASS] Turn AI Into a $10K/Month Grant Writing Business</h1>
            </div>

            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p>Hey [First Name],</p>

              <p>Quick question: Are you tired of the feast-or-famine cycle as a freelancer or agency owner?</p>

              <p>Imagine having a service that's an immediate <strong>YES</strong> for non-profits and small businesses because it directly brings them the funding they desperately need.</p>

              <p>That's exactly what grant writing offers — and with AI, it's now easier than ever to deliver exceptional results while building a consistent $10K/month business.</p>

              <p>That's why I'm inviting you to a <strong>free masterclass</strong> this Saturday (May 3rd at 2:00 PM EST) where I'll show you how to:</p>

              <ul>
                <li>Use our AI Grant Builder to write high-ticket grants in a fraction of the time</li>
                <li>Find clients who will gladly pay you $3-5K per grant (or monthly retainer)</li>
                <li>Help businesses access hundreds of thousands in funding</li>
                <li>Turn this into a predictable $10K/month online business</li>
              </ul>

              <p><strong>→ <a href="http://localhost:3001/masterclass" className="text-blue-600 dark:text-blue-400 font-medium">Click here to save your seat for the free masterclass</a></strong></p>

              <p>In this in-depth training, I'll walk you through:</p>

              <p>✅ <strong>The Perfect Client Solution</strong><br />
              Why grant writing is an immediate "YES" for non-profits and small businesses, how to position yourself as their funding hero, and why this service is more valuable than ever in today's economy.</p>

              <p>✅ <strong>AI-Powered Grant Writing Made Simple</strong><br />
              See how our A.I. Grant Builder writes 90% of the grant FOR you, making it easier than ever to deliver professional results even if you have zero grant writing experience.</p>

              <p>✅ <strong>The End of Feast-or-Famine</strong><br />
              How to build a consistent pipeline of high-paying clients, create predictable monthly income with retainers, and finally escape the constant hustle for new projects.</p>

              <p>And that's just the beginning...</p>

              <p>The best part? You don't need any previous grant writing experience to make this work.</p>

              <p><strong>→ <a href="http://localhost:3001/masterclass" className="text-blue-600 dark:text-blue-400 font-medium">Register for the free masterclass here</a></strong></p>

              <p>See you there,</p>

              <p>[Your Name]<br />
              Grant Writer AI</p>

              <p>P.S. When you attend live, you'll also get <strong>free access to the AI Grant Builder for 7 days</strong> and our "Funded Fast" Prospecting Script Pack. <a href="http://localhost:3001/masterclass" className="text-blue-600 dark:text-blue-400 font-medium">Save your seat now</a>.</p>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/emails/html/day1-morning.html"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              target="_blank"
            >
              View HTML Version
            </Button>

            <Button
              as="a"
              href="/emails/html/day1-morning.html"
              download="day1-morning.html"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <IconDownload className="h-4 w-4 mr-2" />
              Download HTML
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
