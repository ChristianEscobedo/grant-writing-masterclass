"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconBrandFacebook, IconCopy } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Day3FacebookPostPage() {
  const [copied, setCopied] = useState(false);

  const postContent = `I've been using the 'Grant Builder AI' to secure $50M in funding for clients... Want to see how?

Simple
Effective
Straight to the point

I've helped secure over $50 million in grant funding for small businesses and non-profits, including:

• $2 million for a community park development project
• $300,000 for a local non-profit organization
• $11 million in grants just last year alone

And I maintain a 25% success rate on grant applications — far above the industry average.

The secret? Our Grant Builder AI system that writes 90% of the grant FOR you.

Let me share a quick story...

Last month, I worked with a small education startup that needed funding for their innovative learning program. They had been rejected for 3 grants in a row using traditional grant writing methods.

Using our AI system, we:

1. Analyzed successful grants in their specific sector
2. Identified the exact language and frameworks that funding committees respond to
3. Generated a compelling narrative that highlighted their unique value proposition
4. Created measurable outcomes that aligned perfectly with the funder's priorities
5. Produced a polished, professional application in just 6 hours (instead of 40+)

The result? They secured $425,000 in funding with a grant that took less than a day to create.

This isn't a one-off success story. We're seeing these results consistently across different industries:

• Education: $175K-$500K grants
• Healthcare: $250K-$1M+ grants
• Clean energy: $300K-$750K grants
• Community development: $150K-$2M grants
• Technology: $100K-$500K grants

The grant writing landscape has completely changed. What used to require specialized knowledge, weeks of work, and endless revisions can now be done in hours with the right AI tools.

And here's the opportunity for you:

Most organizations desperately need funding but don't have the expertise to secure it. They'll gladly pay $3K-$5K for a service that helps them access hundreds of thousands (or millions) in grant money.

With our AI system, you can provide this high-value service even if you have zero grant writing experience.

I'm hosting a FREE masterclass this Saturday (May 3rd at 2:00 PM EST) where I'll show you exactly how our Grant Builder AI works and how you can use it to build a $10K+/month grant writing business.

You'll learn:

• How to use AI to write winning grants in hours, not weeks
• The exact client acquisition system that works even if you're brand new
• How to price your services at $3K-$5K per grant (with real examples)
• The monthly retainer model that creates predictable income
• How to scale your business with systems and automation

If you want to see the Grant Builder AI in action and learn how to build a thriving grant writing business in 2025, comment "AI" below and I'll send you the registration link.

P.S. When you attend live, you'll get FREE access to the Grant Builder AI for 7 days so you can try it yourself!`;

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
                Day 3
              </span>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
              <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">I've been using the 'Grant Builder AI' to secure $50M in funding for clients... Want to see how?</h1>
              <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-3 py-2 rounded-md mb-4">
                <strong>Target Audience:</strong> Mixed Audience (Beginners & Experienced)
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
