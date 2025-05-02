"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconBrandFacebook, IconCopy } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Day2FacebookPostPage() {
  const [copied, setCopied] = useState(false);

  const postContent = `𝗔𝗿𝗲 𝘆𝗼𝘂 𝗵𝗲𝗹𝗽𝗶𝗻𝗴 𝗰𝗹𝗶𝗲𝗻𝘁𝘀 𝗴𝗲𝘁 𝗳𝘂𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝘁 𝘀𝘁𝗿𝘂𝗴𝗴𝗹𝗶𝗻𝗴 𝘁𝗼 𝗴𝗲𝘁 𝗽𝗮𝗶𝗱 𝘄𝗵𝗮𝘁 𝘆𝗼𝘂'𝗿𝗲 𝘄𝗼𝗿𝘁𝗵?

We know how painful it is. OUCH.

You spend 40+ hours crafting the perfect grant application...

You help a client secure $250K, $500K, or even $1M+ in funding...

And then they balk at your $3K invoice. 😤

The truth is, if there's no clear ROI for your services, clients will always question your fees.

Here's the fix...

Become the "Funding Hero" by showing clients the MASSIVE return they get from working with you.

I recently helped a small education non-profit secure a $175,000 grant. My fee? $5,000.

That's a 35X return on their investment.

When you position it that way, your fee becomes a no-brainer.

But here's where most grant writers go wrong:

❌ They position themselves as "writers" instead of funding experts
❌ They charge hourly instead of value-based pricing
❌ They don't clearly communicate their success rate
❌ They don't leverage technology to scale their services
❌ They don't create recurring revenue through retainers

The result? They work themselves to death for pennies on the dollar.

I've developed a simple framework that solves all these problems:

✅ The Grant Hero Positioning System
✅ Value-Based Pricing Calculator
✅ AI-Powered Grant Writing (90% faster)
✅ Monthly Retainer Framework
✅ Client Acquisition Blueprint

This system has helped me build a thriving grant writing business that generates $10K+ per month with just a handful of clients.

And the best part? I only work about 15-20 hours per week thanks to our AI Grant Builder.

I'm hosting a FREE masterclass this Saturday (May 3rd at 2:00 PM EST) where I'll break down this entire system step-by-step.

You'll learn:

• How to position yourself as a funding expert (not just a writer)
• The exact pricing structure that gets you $3K-$5K per grant
• How to use our AI Grant Builder to write grants 90% faster
• The monthly retainer model that creates predictable income
• How to find and close high-ticket clients who value your services

Whether you're already writing grants or looking to add this high-ticket service to your business, this masterclass will show you how to get paid what you're worth.

To save your spot, comment "VALUE" below and I'll send you the registration link.

P.S. When you attend live, you'll get FREE access to our AI Grant Builder for 7 days so you can see how it transforms your workflow!`;

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
              href="/facebook-posts"
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
            className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <IconBrandFacebook className="h-5 w-5 text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">Facebook Post</h2>
              </div>
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                Day 2
              </span>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
              <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">𝗔𝗿𝗲 𝘆𝗼𝘂 𝗵𝗲𝗹𝗽𝗶𝗻𝗴 𝗰𝗹𝗶𝗲𝗻𝘁𝘀 𝗴𝗲𝘁 𝗳𝘂𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝘁 𝘀𝘁𝗿𝘂𝗴𝗴𝗹𝗶𝗻𝗴 𝘁𝗼 𝗴𝗲𝘁 𝗽𝗮𝗶𝗱 𝘄𝗵𝗮𝘁 𝘆𝗼𝘂'𝗿𝗲 𝘄𝗼𝗿𝘁𝗵?</h1>
              <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-3 py-2 rounded-md mb-4">
                <strong>Target Audience:</strong> Current Grant Writers & Freelancers
              </div>
            </div>

            <div className="prose prose-blue dark:prose-invert max-w-none whitespace-pre-line">
              {postContent}
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as="button"
              onClick={copyToClipboard}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <IconCopy className="h-4 w-4 mr-2" />
              {copied ? "Copied!" : "Copy Post"}
            </Button>

            <Button
              as={Link}
              href="/masterclass"
              className="bg-green-600 hover:bg-green-700 text-white"
              target="_blank"
            >
              View Masterclass Page
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
