"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function UnawarePost2Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `How I went from struggling freelancer to $15K/month with this overlooked service

Let me tell you about Sarah...

Sarah was a freelance copywriter who was struggling to make ends meet. She was:

• Working 50+ hours per week
• Constantly hustling for new clients
• Competing with thousands of other copywriters
• Barely making $3K-$4K per month despite her skills

She was burned out and considering giving up on freelancing altogether to get a "real job."

Then she discovered grant writing.

At first, she was skeptical. She had no experience with grants and wasn't sure if she could learn a new skill while still trying to keep her business afloat.

But she decided to give it a shot.

Within 30 days of learning the basics of grant writing, she landed her first client - a local non-profit that paid her $3,500 to write a single grant application.

The best part? It only took her about 15 hours to complete (that's $233/hour).

Within 90 days, she had:

• 4 regular clients on monthly retainers
• A consistent income of $15K/month
• A waitlist of organizations wanting to work with her
• Cut her working hours almost in half

How did she do it?

1. She positioned herself as a grant writing specialist (instead of a generalist)
2. She focused on a specific niche (education non-profits)
3. She used AI tools to streamline the writing process
4. She created a monthly retainer model instead of one-off projects

The key was that she didn't try to become a grant writing "expert" overnight. She learned just enough to get started, then leveraged technology to fill in the gaps in her knowledge.

In our free masterclass this Saturday (May 3rd at 2:00 PM EST), I'll show you exactly how Sarah and others like her have built successful grant writing businesses from scratch - even with no prior experience.

If Sarah could do it, so can you.

Comment "SUCCESS" below and I'll send you the registration link.`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(postContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
              href="/unaware/facebook-posts"
              className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Back to All Posts
            </Button>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 mb-8"
          >
            <div className="bg-purple-600 h-3"></div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 2
                </span>
                <span className="bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs px-2 py-1 rounded">
                  Unaware Audience
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">How I went from struggling freelancer to $15K/month with this overlooked service</h1>
                <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Low Sophistication (Unaware of Grant Writing)
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This Facebook post is designed to:</p>
                
                <ul>
                  <li><strong>Tell a relatable story</strong> of transformation from struggling freelancer to success</li>
                  <li><strong>Provide social proof</strong> that someone without prior experience can succeed</li>
                  <li><strong>Highlight specific results</strong> with concrete numbers ($15K/month)</li>
                  <li><strong>Outline a simple process</strong> that feels achievable</li>
                  <li><strong>Generate comments</strong> with a clear call to action</li>
                </ul>
                
                <p>The post uses a story-based approach to help the reader see themselves in Sarah's journey. It addresses the common objection "Can I really do this?" by showing how someone with a similar background (freelance copywriter) was able to transition successfully. The specific income figures and timeframe (90 days) create both desire and believability.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 2 to build on the introduction from Day 1. This post focuses on the transformation story to help the audience visualize their own potential success. When people comment "SUCCESS," you can send them the registration link via DM, creating a personal connection and increasing the likelihood of attendance.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <Button
              onClick={copyToClipboard}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              {copied ? (
                <>
                  <IconCheck className="h-4 w-4 mr-2" />
                  Copied to Clipboard
                </>
              ) : (
                <>
                  <IconCopy className="h-4 w-4 mr-2" />
                  Copy Post Text
                </>
              )}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
