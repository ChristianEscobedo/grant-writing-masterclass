"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Post5Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `Just compiled a list of 25 grant opportunities with deadlines in the next 90 days. Comment 'GRANTS' if you'd like access.

This isn't your typical grant list. Each opportunity has been:

✓ Vetted for legitimacy and funding history
✓ Analyzed for competitiveness (with estimated applicant pools)
✓ Categorized by sector and eligibility requirements
✓ Annotated with key evaluation criteria
✓ Matched with successful application examples

The opportunities span multiple sectors:

• Education & Research (6 grants, $50K-$500K)
• Healthcare & Medical (5 grants, $75K-$1.2M)
• Environmental & Sustainability (4 grants, $100K-$750K)
• Community Development (5 grants, $25K-$300K)
• Arts & Culture (3 grants, $15K-$150K)
• Technology & Innovation (2 grants, $50K-$250K)

What makes this list particularly valuable for sophisticated grant writers is the inclusion of "Grant Match Scores" — our proprietary rating system that helps you quickly identify which opportunities align with specific organizational profiles.

I've also included notes on the linguistic patterns and framing devices that each funder responds to most favorably, based on our analysis of previously funded applications.

This is the same type of analysis that our AI Grant Builder performs automatically when generating tailored applications.

Comment 'GRANTS' below and I'll send you the complete list. And if you're interested in seeing how our AI system can help you write winning applications for these opportunities, I'm hosting a free masterclass this Saturday (May 3rd at 2:00 PM EST).`;

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
            <div className="bg-red-600 h-3"></div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 5
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded">
                  Engagement Post
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Just compiled a list of 25 grant opportunities with deadlines in the next 90 days. Comment 'GRANTS' if you'd like access.</h1>
                <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Sophisticated audience (Already Writing Grants or Aware Of Grant writing)
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This engagement post is designed to:</p>
                
                <ul>
                  <li><strong>Offer immediate value</strong> to sophisticated grant writers</li>
                  <li><strong>Generate comments and engagement</strong> with a clear call to action</li>
                  <li><strong>Build your email list</strong> of qualified prospects</li>
                  <li><strong>Introduce your proprietary "Grant Match Scores"</strong> concept</li>
                  <li><strong>Create a natural transition</strong> to promoting your masterclass</li>
                </ul>
                
                <p>The post uses technical details about grant opportunities that sophisticated grant writers would find valuable, such as competitiveness analysis, evaluation criteria, and linguistic patterns. The mention of your proprietary "Grant Match Scores" adds unique value that they can't get elsewhere.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 5 when you've built some credibility with your audience through previous engagement posts. When people comment "GRANTS," you can either:</p>
                <ol>
                  <li>Send them the list directly via DM (and include information about your masterclass)</li>
                  <li>Ask for their email to send the list (building your email list)</li>
                </ol>
                <p>This creates a natural opportunity to invite them to your masterclass for more in-depth information.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <Button
              onClick={copyToClipboard}
              className="bg-red-600 hover:bg-red-700 text-white"
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
