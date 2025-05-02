"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Day2MorningEmailPage() {
  const alternativeSubjects = [
    "Meet Gwen: The expert who secured $50 million in grants (and how you can too)",
    "Case Study: How Gwen maintains a 25% grant success rate with AI",
    "Learn from Gwen: $11 million in grants secured last year alone"
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
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Day 2 - Morning</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Meet Gwen: The expert who secured $50 million in grants (and how you can too)</h1>
            </div>

            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p>Hey [First Name],</p>

              <p>I want to introduce you to someone who demonstrates just how powerful grant writing can be when combined with the right tools and approach.</p>

              <p>Meet Gwen, our grant writing expert who has helped secure over <strong>$50 million</strong> in funding for small businesses and non-profits.</p>

              <p>What makes Gwen's work so impressive isn't just the total amount — it's her consistency and success rate.</p>

              <p>Here are some of her recent achievements:</p>

              <ul>
                <li><strong>$2 million</strong> secured for a community park development project that transformed an unused lot into a vibrant public space</li>
                <li><strong>$300,000</strong> for a local non-profit organization that provides educational resources to underserved communities</li>
                <li><strong>$11 million</strong> in grants secured just last year alone across various industries and organizations</li>
                <li><strong>25% success rate</strong> on grant applications — far above the industry average that typically hovers around 10-15%</li>
              </ul>

              <p>The most exciting part? With our AI Grant Builder, you can now leverage the same strategies and approaches that Gwen uses, even if you have zero grant writing experience.</p>

              <p><strong>→ <a href="http://localhost:3001/masterclass" className="text-blue-600 dark:text-blue-400 font-medium">Join our free masterclass tomorrow to see exactly how it works</a></strong></p>

              <p>In tomorrow's masterclass (Saturday, May 3rd at 2:00 PM EST), I'll show you:</p>

              <ol>
                <li>How to end the feast-or-famine cycle by offering a service clients can't say no to</li>
                <li>The exact pricing structure that gets you $3-5K per project (with real examples)</li>
                <li>How to use our AI Grant Builder to write winning proposals in a fraction of the time</li>
                <li>The monthly retainer model that creates predictable $10K+ months without constant hustling</li>
              </ol>

              <p>Plus, I'll be doing a live demonstration of our AI Grant Builder so you can see exactly how it works.</p>

              <p><strong>→ <a href="http://localhost:3001/masterclass" className="text-blue-600 dark:text-blue-400 font-medium">Save your seat for tomorrow's masterclass here</a></strong></p>

              <p>Looking forward to seeing you there!</p>

              <p>[Your Name]<br />
              Grant Writer AI</p>

              <p>P.S. Remember, this is a completely free training, and you'll get access to the AI Grant Builder for 7 days when you attend live. <a href="http://localhost:3001/masterclass" className="text-blue-600 dark:text-blue-400 font-medium">Click here to register</a>.</p>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/emails/html/day2-morning.html"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              target="_blank"
            >
              View HTML Version
            </Button>

            <Button
              as="a"
              href="/emails/html/day2-morning.html"
              download="day2-morning.html"
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
