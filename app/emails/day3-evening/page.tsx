"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Day3EveningEmailPage() {
  const alternativeSubjects = [
    "⚠️ Starting in 2 hours: Grant Writing Masterclass",
    "FINAL REMINDER: Your masterclass starts in 2 hours",
    "Last chance: Join us in 2 hours for the Grant Writing Masterclass"
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
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Day 3 - Evening</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">⚠️ Starting in 2 hours: Grant Writing Masterclass</h1>
            </div>

            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p>Hey [First Name],</p>
              
              <p>This is your final reminder! Our free masterclass on building a $10K/month grant writing business is starting in just <strong>2 hours</strong> (at 2:00 PM EST today).</p>
              
              <p>Here's your link to join: <a href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3" className="text-blue-600 dark:text-blue-400 font-medium">https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3</a></p>
              
              <p>I wanted to send one last reminder because I don't want you to miss out on:</p>
              
              <ul>
                <li>The complete system for building a $10K/month grant writing business</li>
                <li>Live demonstration of our AI Grant Builder (see how it writes 90% of the grant for you)</li>
                <li>The exact client acquisition strategy that works even if you have zero experience</li>
                <li>The "$500K Grant Proposal Template" (free bonus for live attendees)</li>
                <li>7-day free access to the AI Grant Builder (for live attendees only)</li>
              </ul>
              
              <p>This is truly a no-fluff, actionable training that will give you everything you need to start offering high-ticket grant writing services.</p>
              
              <p><strong>→ <a href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3" className="text-blue-600 dark:text-blue-400 font-medium">Click here to join the masterclass in 2 hours</a></strong></p>
              
              <p>Here's what some of our previous attendees have said:</p>
              
              <blockquote>
                <p>"I was skeptical about using AI for grant writing, but after seeing the demonstration, I was blown away. I landed my first client within a week and charged $3,500 for a grant that took me just 10 hours to complete." - Sarah K.</p>
              </blockquote>
              
              <blockquote>
                <p>"The client acquisition strategy alone was worth 10x the price of admission (which was free!). I've been struggling to find high-ticket clients, and this solved that problem instantly." - Michael T.</p>
              </blockquote>
              
              <p>I can't wait to see you there in just 2 hours!</p>
              
              <p>[Your Name]<br />
              Grant Writer AI</p>
              
              <p>P.S. If you can't make it live, we will send a replay, but you won't get the free 7-day access to the AI Grant Builder or the $500K Grant Proposal Template. Those are only for live attendees. <a href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3" className="text-blue-600 dark:text-blue-400 font-medium">Join us live if you can</a>!</p>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/emails/html/day3-evening.html"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              target="_blank"
            >
              View HTML Version
            </Button>
            
            <Button
              as="a"
              href="/emails/html/day3-evening.html"
              download="day3-evening.html"
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
