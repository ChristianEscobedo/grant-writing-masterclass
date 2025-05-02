"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Post4Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `What's your go-to strategy for the 'Sustainability' section of grant applications?

This section consistently trips up even experienced grant writers, yet it's often weighted heavily in the evaluation process.

After analyzing hundreds of successful applications, I've identified three distinct approaches that consistently score well:

𝟭. 𝗧𝗵𝗲 𝗗𝗶𝘃𝗲𝗿𝘀𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗠𝗼𝗱𝗲𝗹
• Presents a multi-stream funding approach
• Emphasizes decreasing reliance on any single source
• Includes specific percentage targets for each revenue stream
• Works best for: Established organizations with some funding history

𝟮. 𝗧𝗵𝗲 𝗦𝗰𝗮𝗹𝗮𝗯𝗶𝗹𝗶𝘁𝘆 𝗙𝗿𝗮𝗺𝗲𝘄𝗼𝗿𝗸
• Focuses on how initial grant funding creates infrastructure for ongoing revenue
• Demonstrates clear path to operational self-sufficiency
• Includes detailed unit economics and breakeven analysis
• Works best for: Social enterprises and revenue-generating programs

𝟯. 𝗧𝗵𝗲 𝗖𝗮𝗽𝗮𝗰𝗶𝘁𝘆-𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗔𝗽𝗽𝗿𝗼𝗮𝗰𝗵
• Demonstrates how grant builds internal fundraising capabilities
• Shows investment in systems that reduce long-term operational costs
• Includes specific metrics for organizational efficiency improvements
• Works best for: Newer organizations or those with limited fundraising infrastructure

What's fascinating is that many funders have unstated preferences for specific sustainability models, but rarely articulate them in their guidelines.

Our AI Grant Builder can now detect these preferences based on historical award patterns and tailor the sustainability section accordingly.

What's your go-to approach for the sustainability section? And have you noticed certain funders responding better to specific frameworks?`;

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
            <div className="bg-amber-600 h-3"></div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 4
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded">
                  Engagement Post
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">What's your go-to strategy for the 'Sustainability' section of grant applications?</h1>
                <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Sophisticated audience (Already Writing Grants or Aware Of Grant writing)
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This engagement post is designed to:</p>
                
                <ul>
                  <li><strong>Address a specific technical challenge</strong> that sophisticated grant writers face</li>
                  <li><strong>Provide actionable frameworks</strong> that demonstrate your expertise</li>
                  <li><strong>Position your AI system</strong> as capable of detecting funder preferences</li>
                  <li><strong>Generate discussion</strong> about sustainability strategies and funder preferences</li>
                  <li><strong>Identify potential masterclass attendees</strong> who struggle with this section</li>
                </ul>
                
                <p>The post uses highly technical language about the "Sustainability" section of grant applications, which is a specific pain point that only experienced grant writers would understand. By offering three distinct frameworks, you demonstrate deep expertise while providing immediate value.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 4 to continue building engagement with your target audience. The responses will help you understand which sustainability frameworks your audience uses, allowing you to emphasize those approaches in your masterclass content.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <Button
              onClick={copyToClipboard}
              className="bg-amber-600 hover:bg-amber-700 text-white"
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
