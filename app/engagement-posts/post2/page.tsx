"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Post2Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `Grant writers: What's your current success rate?

After analyzing data from over 200 professional grant writers, I've found some interesting patterns:

• The average success rate across all sectors is 7-10%
• Healthcare grants tend to have the lowest success rates (5-8%)
• Education grants have slightly better odds (9-12%)
• Community development grants fall somewhere in the middle (8-10%)

But here's what's fascinating...

The top 10% of grant writers consistently achieve 20-25% success rates regardless of sector.

What separates them from the rest?

Three key factors:

1. Strategic selection (they're highly selective about which grants to pursue)
2. Deep funder research (they understand the unwritten priorities)
3. Data-driven narratives (they use compelling metrics to support every claim)

Our AI Grant Builder system has been trained on these high-performing applications to help replicate their success patterns.

So I'm curious: What's your current success rate, and what strategies have you found most effective for improving it?

(Your insights will help us refine our system to better serve sophisticated grant professionals like you.)`;

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
              href="/engagement-posts"
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
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded">
                  Engagement Post
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Grant writers: What's your current success rate?</h1>
                <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Sophisticated audience (Already Writing Grants or Aware Of Grant writing)
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This engagement post is designed to:</p>
                
                <ul>
                  <li><strong>Benchmark performance</strong> for sophisticated grant writers</li>
                  <li><strong>Establish credibility</strong> by sharing data-driven insights</li>
                  <li><strong>Position your AI system</strong> as being trained on high-performing applications</li>
                  <li><strong>Generate discussion</strong> around success rates and strategies</li>
                  <li><strong>Identify potential high-value prospects</strong> (those with lower success rates who want to improve)</li>
                </ul>
                
                <p>The post uses specific success rate percentages across different sectors, which only experienced grant writers would understand and relate to. This helps attract sophisticated professionals who are concerned about their performance metrics.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 2 to continue building engagement with your target audience. When people comment with their success rates, you can identify those who might benefit most from your masterclass and AI system.</p>
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
