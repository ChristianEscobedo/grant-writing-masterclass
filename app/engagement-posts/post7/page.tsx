"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Post7Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `Grant writers: What's one AI tool you're currently using in your workflow?

The grant writing landscape is evolving rapidly with AI integration, and I'm curious which tools sophisticated professionals are finding most valuable.

Here's what I'm seeing among top-performing grant writers:

𝗗𝗮𝘁𝗮 𝗔𝗻𝗮𝗹𝘆𝘀𝗶𝘀 & 𝗩𝗶𝘀𝘂𝗮𝗹𝗶𝘇𝗮𝘁𝗶𝗼𝗻:
• Tableau with AI-powered insights
• Power BI with predictive analytics
• DataRobot for outcome projections

𝗡𝗮𝗿𝗿𝗮𝘁𝗶𝘃𝗲 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁:
• Specialized LLMs fine-tuned for grant language
• Sector-specific content generators
• Narrative structure analyzers

𝗙𝘂𝗻𝗱𝗲𝗿 𝗥𝗲𝘀𝗲𝗮𝗿𝗰𝗵:
• AI-powered funding opportunity databases
• Funder alignment scoring systems
• Competitive analysis tools

𝗕𝘂𝗱𝗴𝗲𝘁 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗺𝗲𝗻𝘁:
• Predictive budget modeling
• Cost justification generators
• Financial sustainability projectors

What's fascinating is how the integration of these tools is creating a new class of "augmented grant writers" who can produce higher quality applications in a fraction of the time.

Our comprehensive Grant Builder AI system integrates all these capabilities into a single platform, allowing sophisticated grant professionals to:

• Generate complete grant narratives tailored to specific funders
• Develop compelling data visualizations that support key arguments
• Create detailed budgets with robust justifications
• Produce comprehensive evaluation plans with measurable outcomes

I'm hosting a free masterclass tomorrow (May 3rd at 2:00 PM EST) where I'll demonstrate how this system works and how it can be integrated into your existing workflow.

But first, I'd love to know: What AI tools are you currently using in your grant writing process? And what capabilities would you most want to see in an integrated system?`;

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
            <div className="bg-teal-600 h-3"></div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 7
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded">
                  Engagement Post
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Grant writers: What's one AI tool you're currently using in your workflow?</h1>
                <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Sophisticated audience (Already Writing Grants or Aware Of Grant writing)
                </div>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This engagement post is designed to:</p>
                
                <ul>
                  <li><strong>Identify the AI tools</strong> your audience is already using</li>
                  <li><strong>Position your Grant Builder AI</strong> as a comprehensive solution</li>
                  <li><strong>Create urgency</strong> for the upcoming masterclass (tomorrow)</li>
                  <li><strong>Generate discussion</strong> about AI in grant writing</li>
                  <li><strong>Identify early adopters</strong> who are already using AI tools</li>
                </ul>
                
                <p>The post uses specific technical references to AI tools and capabilities that sophisticated grant writers would recognize. By categorizing different types of AI tools, you demonstrate understanding of the various aspects of grant writing that can be enhanced with technology.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 7 (the day before your masterclass) to create final engagement and urgency. The responses will help you understand your audience's current AI usage and tailor your masterclass presentation accordingly. This post also serves as a final reminder about the masterclass date and time.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <Button
              onClick={copyToClipboard}
              className="bg-teal-600 hover:bg-teal-700 text-white"
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
