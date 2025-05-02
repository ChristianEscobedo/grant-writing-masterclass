"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Post1Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `What's one grant writing challenge you're currently facing?

I'll go first...

After analyzing over 500 grant applications across various sectors, I've noticed that the most challenging section for sophisticated grant writers is often the "Evaluation Plan."

Creating truly measurable outcomes that align with both the organization's capabilities AND the funder's priorities requires a delicate balance.

Too specific, and you risk boxing yourself in.
Too vague, and you appear unprofessional.

This is especially true when dealing with complex, multi-year federal grants where the evaluation methodology needs to withstand rigorous scrutiny.

What about you? What's your biggest grant writing challenge right now?

(I'm asking because we're putting the finishing touches on our advanced AI Grant Builder system, and I want to make sure we're addressing the real pain points that experienced grant professionals face.)`;

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
            <div className="bg-blue-600 h-3"></div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 1
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded">
                  Engagement Post
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">What's one grant writing challenge you're currently facing?</h1>
                <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Sophisticated audience (Already Writing Grants or Aware Of Grant writing)
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This engagement post is designed to:</p>
                
                <ul>
                  <li><strong>Identify pain points</strong> among sophisticated grant writers</li>
                  <li><strong>Position you as an expert</strong> by demonstrating deep knowledge of grant writing challenges</li>
                  <li><strong>Generate comments</strong> from your target audience</li>
                  <li><strong>Gather market intelligence</strong> for your AI Grant Builder system</li>
                  <li><strong>Build a relationship</strong> with potential masterclass attendees</li>
                </ul>
                
                <p>The post uses technical language that only experienced grant writers would understand, such as "Evaluation Plan" and references to multi-year federal grants. This helps filter out beginners and attracts sophisticated professionals who will recognize these challenges.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 1 to start building engagement with your target audience. Actively respond to comments to build relationships and potentially direct interested individuals to your masterclass.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <Button
              onClick={copyToClipboard}
              className="bg-blue-600 hover:bg-blue-700 text-white"
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
