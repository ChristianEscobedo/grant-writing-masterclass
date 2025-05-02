"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function UnawarePost1Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `Tired of competing with thousands of other freelancers for the same clients?

I get it. I've been there too.

For years, I ran a digital marketing agency. We did good work, but it was HARD:

• Constantly chasing new clients
• Dealing with scope creep
• Competing on price
• Feast-or-famine income cycles

Then I discovered something that completely changed my business (and my life)...

Grant writing.

Now, before you say "Wait, what? Grant writing?!" hear me out...

Grant writing is one of the most overlooked high-ticket service opportunities available right now. Here's why:

1. Organizations are DESPERATE for this service (there's over $700 billion in grant funding available annually)

2. They're happy to pay $3,000-$5,000 per grant application (because they're trying to secure much larger amounts)

3. There's virtually NO competition compared to marketing, copywriting, web design, etc.

4. You can learn the basics quickly (especially with the right tools)

5. It creates PREDICTABLE income through retainer relationships

The best part? With new AI tools, you can deliver exceptional results even if you have zero experience with grant writing.

I'm hosting a free masterclass this Saturday (May 3rd at 2:00 PM EST) where I'll show you exactly how to build a $10K+/month grant writing business from scratch.

You'll discover:

• How to position yourself as a grant writing expert (even if you're starting from zero)
• The exact client acquisition system that consistently brings in high-paying clients
• How to use AI to write winning grant applications in a fraction of the time
• The monthly retainer model that creates predictable $3K-$5K/month income streams
• Real case studies of people who've built successful grant writing businesses in 90 days or less

If you're looking for a high-ticket service that's in high demand, has low competition, and can create predictable income, this is for you.

Comment "GRANTS" below and I'll send you the registration link.`;

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
            <div className="bg-blue-600 h-3"></div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 1
                </span>
                <span className="bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs px-2 py-1 rounded">
                  Unaware Audience
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Tired of competing with thousands of other freelancers for the same clients?</h1>
                <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Low Sophistication (Unaware of Grant Writing)
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This Facebook post is designed to:</p>
                
                <ul>
                  <li><strong>Address pain points</strong> that freelancers and agency owners experience</li>
                  <li><strong>Position grant writing</strong> as a solution to these common problems</li>
                  <li><strong>Introduce the concept</strong> of grant writing as a high-ticket service</li>
                  <li><strong>Highlight the benefits</strong> compared to traditional freelance services</li>
                  <li><strong>Generate comments</strong> with a clear call to action</li>
                </ul>
                
                <p>The post uses language and references that resonate with freelancers and agency owners who are struggling with common issues like client acquisition, scope creep, and unpredictable income. It positions grant writing as a solution to these problems without requiring deep technical knowledge of grant writing itself.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 1 to introduce the concept of grant writing to an audience that's unaware of this opportunity. When people comment "GRANTS," you can send them the registration link via DM, creating a personal connection and increasing the likelihood of attendance.</p>
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
