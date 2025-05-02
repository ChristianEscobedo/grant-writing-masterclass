"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function UnawareEngagementPost1Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `Freelancers & agency owners: What's your biggest struggle with client acquisition right now?

I'm curious about what's working (and not working) for everyone in the current market.

Is it:

• Finding qualified leads?
• Standing out from the competition?
• Pricing your services appropriately?
• Converting discovery calls to paying clients?
• Getting consistent referrals?
• Something else entirely?

Comment below with your biggest challenge, and I'll share some specific strategies that might help.

I've been working with freelancers and agency owners for years, and I've noticed an interesting trend recently...

Many are struggling with the same fundamental issues:

1. Too much competition in traditional service areas (web design, copywriting, social media, etc.)
2. Downward price pressure as more people enter the market
3. Difficulty demonstrating clear ROI for their services
4. The feast-or-famine cycle that makes income unpredictable

What's fascinating is that there's a high-ticket service opportunity that addresses ALL of these issues, but most freelancers completely overlook it.

I'm talking about grant writing.

Before you say "Wait, what? Grant writing?!" hear me out...

Grant writing is one of the most overlooked high-ticket service opportunities available right now. Here's why:

• Organizations are DESPERATE for this service (there's over $700 billion in grant funding available annually)

• They're happy to pay $3,000-$5,000 per grant application (because they're trying to secure much larger amounts)

• There's virtually NO competition compared to marketing, copywriting, web design, etc.

• You can learn the basics quickly (especially with the right tools)

• It creates PREDICTABLE income through retainer relationships

I'm hosting a free masterclass this Saturday (May 3rd at 2:00 PM EST) where I'll show you exactly how to build a $10K+/month grant writing business from scratch.

But first, I'd love to hear your specific client acquisition challenges so I can address them during the session.

Comment below, and let's solve this together!`;

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
              href="/unaware/engagement-posts"
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
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Freelancers & agency owners: What's your biggest struggle with client acquisition right now?</h1>
                <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Low Sophistication (Unaware of Grant Writing)
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This engagement post is designed to:</p>
                
                <ul>
                  <li><strong>Generate comments</strong> with a question relevant to freelancers and agency owners</li>
                  <li><strong>Identify pain points</strong> that grant writing can solve</li>
                  <li><strong>Position grant writing</strong> as a solution to common freelancing challenges</li>
                  <li><strong>Create curiosity</strong> about the masterclass</li>
                  <li><strong>Build a relationship</strong> by offering to help with their specific challenges</li>
                </ul>
                
                <p>The post starts with a question that's easy for any freelancer or agency owner to answer, regardless of their knowledge of grant writing. This creates engagement and helps you identify their specific pain points. The middle section acknowledges common challenges, creating rapport and showing understanding. Then it introduces grant writing as a solution to these challenges, positioning it as a high-ticket opportunity with less competition. The blue color block creates visual distinction, and the question-based format encourages comments.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 1 to start building engagement with your target audience. When people comment with their challenges, respond with personalized advice that relates their specific issue to how grant writing could help solve it. This creates a natural opportunity to invite them to the masterclass for more information.</p>
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
