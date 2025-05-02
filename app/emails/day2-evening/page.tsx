"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Day2EveningEmailPage() {
  const alternativeSubjects = [
    "⏰ [REMINDER] Your Grant Writing Masterclass is tomorrow!",
    "Don't forget: Your AI Grant Writing Masterclass is tomorrow at 2PM EST",
    "Last chance to prepare for tomorrow's $10K/month grant writing masterclass"
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
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Day 2 - Evening</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">⏰ [REMINDER] Your Grant Writing Masterclass is tomorrow!</h1>
            </div>

            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p>Hey [First Name],</p>
              
              <p>Just a quick reminder that our free masterclass on building a $10K/month grant writing business is happening <strong>tomorrow at 2:00 PM EST</strong>.</p>
              
              <p>Here's your link to join: <a href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3" className="text-blue-600 dark:text-blue-400 font-medium">https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3</a></p>
              
              <p>I recommend adding this to your calendar so you don't miss it. We'll be covering:</p>
              
              <ul>
                <li>The massive opportunity in grant writing right now (and why AI makes it even bigger)</li>
                <li>How to find and land high-paying clients (even if you have zero experience)</li>
                <li>The exact system for writing winning grants in a fraction of the time</li>
                <li>How to structure your services for maximum profit ($3-5K per project or monthly retainers)</li>
              </ul>
              
              <p>Plus, I'll be doing a live demonstration of our AI Grant Builder so you can see exactly how it works.</p>
              
              <p><strong>→ <a href="http://localhost:3001/masterclass" className="text-blue-600 dark:text-blue-400 font-medium">Click here to make sure you're registered</a></strong></p>
              
              <p>To help you get the most out of tomorrow's masterclass, here are a few things you might want to think about:</p>
              
              <ol>
                <li><strong>What industries are you most interested in?</strong> (Education, healthcare, clean energy, tech, non-profits, etc.)</li>
                <li><strong>Do you prefer project-based work or ongoing retainers?</strong></li>
                <li><strong>What's your income goal for the next 6 months?</strong></li>
              </ol>
              
              <p>Having clarity on these questions will help you apply what you learn tomorrow to your specific situation.</p>
              
              <p>I'm really excited to share this system with you. It's helped so many people create a high-income skill that's both profitable and impactful.</p>
              
              <p><strong>→ <a href="http://localhost:3001/masterclass" className="text-blue-600 dark:text-blue-400 font-medium">Make sure you're registered for tomorrow</a></strong></p>
              
              <p>See you tomorrow!</p>
              
              <p>[Your Name]<br />
              Grant Writer AI</p>
              
              <p>P.S. Remember, when you attend live, you'll get free access to the AI Grant Builder for 7 days so you can try it yourself. <a href="http://localhost:3001/masterclass" className="text-blue-600 dark:text-blue-400 font-medium">Make sure you're registered here</a>.</p>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/emails/html/day2-evening.html"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              target="_blank"
            >
              View HTML Version
            </Button>
            
            <Button
              as="a"
              href="/emails/html/day2-evening.html"
              download="day2-evening.html"
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
