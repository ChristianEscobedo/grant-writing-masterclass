"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function UnawareEngagementPost2Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `POLL: What's your current average project value? (I'll share how to 3X it with a service most freelancers overlook)

Freelancers & agency owners: I'm curious about your current pricing structure. What's your average project value right now?

• Under $1,000
• $1,000 - $2,500
• $2,500 - $5,000
• $5,000 - $10,000
• $10,000+

Comment with your range, and I'll share some insights on how you might be able to increase it.

Based on my work with hundreds of freelancers and agency owners, I've noticed something interesting...

Many are significantly undercharging for their services, not because they lack skills, but because they're in overcrowded markets where price competition is fierce.

The average freelance project across web design, copywriting, social media management, and similar services hovers around $1,500-$2,500.

But what if you could offer a service where:

• The average project value is $3,000-$5,000
• Clients don't blink at these rates
• There's minimal competition
• The work can be systematized and scaled

This isn't hypothetical. It's exactly what's happening in the grant writing space right now.

Let me explain why grant writing commands such high rates:

1. The ROI is obvious - clients pay $3K-$5K for a chance at $50K-$1M+ in funding
2. The stakes are high - organizations need quality work to secure funding
3. The perceived complexity creates a barrier to entry
4. The supply of qualified providers is extremely low compared to demand

What's fascinating is that with the right tools and systems, grant writing doesn't have to be as complex or time-consuming as most people think.

In fact, with AI-powered tools, you can deliver exceptional grant applications in a fraction of the time it would traditionally take.

I'm hosting a free masterclass this Saturday (May 3rd at 2:00 PM EST) where I'll show you exactly how to build a $10K+/month grant writing business from scratch - even if you have zero experience with grants.

Comment with your current average project value, and I'll share some specific insights on how grant writing might fit into your business model.`;

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
            <div className="bg-purple-600 h-3"></div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 2
                </span>
                <span className="bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs px-2 py-1 rounded">
                  Unaware Audience
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">POLL: What's your current average project value? (I'll share how to 3X it with a service most freelancers overlook)</h1>
                <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Low Sophistication (Unaware of Grant Writing)
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This engagement post is designed to:</p>
                
                <ul>
                  <li><strong>Generate comments</strong> with an easy poll question about project values</li>
                  <li><strong>Highlight the pricing advantage</strong> of grant writing compared to traditional freelance services</li>
                  <li><strong>Create desire</strong> by showing how much more they could be earning</li>
                  <li><strong>Address the complexity concern</strong> by mentioning AI-powered tools</li>
                  <li><strong>Position the masterclass</strong> as the solution to increasing their income</li>
                </ul>
                
                <p>The post uses a poll format that's easy to respond to and creates immediate engagement. By asking about current project values, it establishes a baseline that makes the higher rates of grant writing more impactful. The post directly addresses the pricing advantage of grant writing, which is a key selling point for freelancers looking to increase their income. The purple color block creates visual distinction, and the poll format encourages comments while providing valuable market research.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 2 to build on the engagement from Day 1. When people comment with their current project values, respond with personalized insights about how grant writing could help them increase their rates. For those already charging premium rates, focus on the predictability and scalability of grant writing. For those charging lower rates, emphasize the immediate pricing advantage.</p>
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
