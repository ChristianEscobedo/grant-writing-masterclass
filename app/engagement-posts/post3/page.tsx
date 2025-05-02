"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Post3Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `Which funding source has been most responsive to your grant applications?

I've been analyzing approval patterns across different funding sources, and the variations are fascinating:

𝗙𝗲𝗱𝗲𝗿𝗮𝗹 𝗚𝗿𝗮𝗻𝘁𝘀:
• Highly competitive (often 3-5% acceptance rates)
• Extremely structured requirements
• Long review cycles (4-6 months)
• Substantial awards ($250K-$1M+)

𝗦𝘁𝗮𝘁𝗲 𝗚𝗿𝗮𝗻𝘁𝘀:
• Moderately competitive (8-12% acceptance)
• More regional focus requirements
• Medium review cycles (2-3 months)
• Mid-sized awards ($50K-$250K)

𝗣𝗿𝗶𝘃𝗮𝘁𝗲 𝗙𝗼𝘂𝗻𝗱𝗮𝘁𝗶𝗼𝗻𝘀:
• Variable competitiveness (10-20% acceptance)
• Often require established relationships
• Shorter review cycles (1-2 months)
• Wide range of award sizes ($10K-$500K)

𝗖𝗼𝗿𝗽𝗼𝗿𝗮𝘁𝗲 𝗚𝗿𝗮𝗻𝘁𝘀:
• Less competitive (15-25% acceptance)
• Strong alignment with corporate priorities required
• Quick review cycles (2-6 weeks)
• Typically smaller awards ($5K-$100K)

What I've found most interesting is that sophisticated grant writers tend to develop expertise with specific funding sources rather than trying to master all types.

Our AI Grant Builder system can now generate tailored applications for each funding source type, incorporating the specific language patterns and priorities that each responds to most favorably.

Which funding source have you had the most success with, and what do you think makes them more responsive to your applications?`;

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
            <div className="bg-green-600 h-3"></div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 3
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded">
                  Engagement Post
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Which funding source has been most responsive to your grant applications?</h1>
                <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Sophisticated audience (Already Writing Grants or Aware Of Grant writing)
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This engagement post is designed to:</p>
                
                <ul>
                  <li><strong>Demonstrate deep industry knowledge</strong> about different funding sources</li>
                  <li><strong>Provide valuable insights</strong> that sophisticated grant writers will appreciate</li>
                  <li><strong>Position your AI system</strong> as capable of adapting to different funding source requirements</li>
                  <li><strong>Generate discussion</strong> about funding source preferences and strategies</li>
                  <li><strong>Identify potential specialization areas</strong> for your masterclass content</li>
                </ul>
                
                <p>The post uses detailed breakdowns of different funding sources with specific acceptance rates, review cycles, and award sizes. This level of detail signals to sophisticated grant writers that you understand the nuances of their profession and have valuable insights to share.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 3 to continue building engagement with your target audience. The responses will help you understand which funding sources your audience is most interested in, allowing you to emphasize those areas in your masterclass promotion.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <Button
              onClick={copyToClipboard}
              className="bg-green-600 hover:bg-green-700 text-white"
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
