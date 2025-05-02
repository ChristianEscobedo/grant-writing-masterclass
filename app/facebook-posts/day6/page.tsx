"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconBrandFacebook, IconCopy } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Day6FacebookPostPage() {
  const [copied, setCopied] = useState(false);

  const postContent = `Just created a spreadsheet with 50+ grant opportunities worth $250K-$1M each. Want access?

For experienced grant writers and organizations who understand the grant landscape...

I've spent the last 3 months compiling a comprehensive database of high-value grant opportunities across multiple sectors:

• Education & Research: 12 grants ($250K-$750K)
• Healthcare & Medical: 9 grants ($300K-$1.2M)
• Environmental & Sustainability: 8 grants ($275K-$900K)
• Community Development: 11 grants ($200K-$2M)
• Technology & Innovation: 10 grants ($150K-$500K)
• Arts & Culture: 7 grants ($100K-$350K)

What makes this database different from what you might already be using:

1. Each opportunity includes detailed analytics on previous winners (what made their applications successful)

2. I've included proprietary "Grant Match Scores" that help you quickly identify which opportunities align with specific client profiles

3. Every grant includes a breakdown of the evaluation criteria with weighted importance (so you know exactly what to emphasize)

4. The database features AI-generated application templates specifically optimized for each funding source

5. Each opportunity includes a "Competitive Analysis" showing how many applications they typically receive and average success rates

As fellow grant professionals know, finding the right opportunities is only half the battle. The real challenge is crafting applications that stand out from hundreds of competitors.

That's why I've also included my "Funded Fast" framework for each grant type—specific strategies that have helped me maintain a 25% success rate (well above the industry average of 7-10%).

For context, I've helped secure over $50 million in grant funding, including $11 million just last year alone. My success comes from a combination of strategic opportunity selection and AI-powered application development.

I'm hosting a FREE masterclass this Saturday (May 3rd at 2:00 PM EST) specifically for experienced grant writers and organizations who want to:

• Leverage AI to write compelling applications in 1/10th the time
• Implement advanced strategies for increasing success rates
• Scale their grant writing services to $10K+/month
• Build predictable monthly retainers instead of one-off projects
• Access this exclusive grant opportunity database

This isn't basic "Grant Writing 101" content. We'll be diving deep into advanced strategies that are working right now in 2025's competitive funding landscape.

Topics include:

• Advanced narrative structures that funding committees respond to in 2025
• How to leverage AI to write technically complex sections (methodology, evaluation, sustainability)
• The "Funding Logic Model" that connects project activities to outcomes in a compelling way
• How to position yourself as a strategic funding partner (not just a writer)
• Pricing strategies for experienced grant professionals ($5K-$10K per project)

If you're already writing grants or working with organizations that need funding, this masterclass will show you how to 10x your efficiency and dramatically increase your success rates.

To save your spot and get access to the grant opportunity database, comment "DATABASE" below and I'll send you the registration link.

P.S. When you attend live, you'll get FREE access to our Grant Builder AI for 7 days so you can see how it transforms your workflow!`;

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
                Day 6
              </span>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
              <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Just created a spreadsheet with 50+ grant opportunities worth $250K-$1M each. Want access?</h1>
              <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-3 py-2 rounded-md mb-4">
                <strong>Target Audience:</strong> Sophisticated audience (Already Writing Grants or Aware Of Grant writing)
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
