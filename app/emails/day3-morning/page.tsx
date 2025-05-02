"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Day3MorningEmailPage() {
  const alternativeSubjects = [
    "TODAY: Your Grant Writing Masterclass (+ special bonus)",
    "It's today! Your AI Grant Writing Masterclass at 2PM EST",
    "Don't miss today's masterclass (+ $500K grant template bonus)"
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
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Day 3 - Morning</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">TODAY: Your Grant Writing Masterclass (+ special bonus)</h1>
            </div>

            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p>Hey [First Name],</p>
              
              <p>Today's the day! Our free masterclass on building a $10K/month grant writing business is happening <strong>today at 2:00 PM EST</strong>.</p>
              
              <p>Here's your link to join: <a href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3" className="text-blue-600 dark:text-blue-400 font-medium">https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3</a></p>
              
              <p>I'm really excited to share this system with you. It's helped so many people create a high-income skill that's both profitable and impactful.</p>
              
              <p>Here's what we'll be covering today:</p>
              
              <ol>
                <li><strong>The Big Opportunity</strong> - Why grants are the fastest growing client niche in 2025</li>
                <li><strong>AI-Powered Grant Writing</strong> - How our AI Grant Builder writes 90% of the grant FOR you</li>
                <li><strong>The $10K/Month Business Model</strong> - How to land clients on monthly retainers or $3–5K per grant</li>
                <li><strong>Client Acquisition</strong> - How to find perfect-fit leads who are already looking for grants</li>
                <li><strong>Software Automation</strong> - How to save hours using our templates and auto-fill tools</li>
              </ol>
              
              <p><strong>SPECIAL BONUS:</strong> Everyone who attends live will receive our "$500K Grant Proposal Template" that you can use to quickly create high-quality grant applications for your clients.</p>
              
              <p>This template alone has helped our students secure over $10 million in funding for their clients.</p>
              
              <p><strong>→ <a href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3" className="text-blue-600 dark:text-blue-400 font-medium">Click here to join the masterclass at 2:00 PM EST today</a></strong></p>
              
              <p>A few quick tips to get the most out of today's masterclass:</p>
              
              <ul>
                <li>Join a few minutes early to make sure your audio and video are working properly</li>
                <li>Have a notepad ready - you'll want to take notes</li>
                <li>Prepare any questions you have about grant writing, client acquisition, or using AI</li>
                <li>Stay until the end for the special Q&A session</li>
              </ul>
              
              <p>I can't wait to see you there!</p>
              
              <p>[Your Name]<br />
              Grant Writer AI</p>
              
              <p>P.S. Remember, this masterclass is completely free, and you'll get access to the AI Grant Builder for 7 days when you attend live, plus the $500K Grant Proposal Template. <a href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3" className="text-blue-600 dark:text-blue-400 font-medium">Join us at 2:00 PM EST today</a>.</p>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/emails/html/day3-morning.html"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              target="_blank"
            >
              View HTML Version
            </Button>
            
            <Button
              as="a"
              href="/emails/html/day3-morning.html"
              download="day3-morning.html"
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
