"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconBrandFacebook, IconCopy } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Day4FacebookPostPage() {
  const [copied, setCopied] = useState(false);

  const postContent = `𝗧𝗵𝗲 𝗚𝗿𝗮𝗻𝘁 𝗪𝗿𝗶𝘁𝗶𝗻𝗴 𝗔𝘂𝘁𝗼-𝗣𝗿𝗼𝘀𝗽𝗲𝗰𝘁𝗶𝗻𝗴 𝗦𝗢𝗣
𝗕𝗼𝗼𝗸 𝟮-𝟰 𝗛𝗶𝗴𝗵-𝗧𝗶𝗰𝗸𝗲𝘁 𝗖𝗹𝗶𝗲𝗻𝘁𝘀 𝗣𝗲𝗿 𝗪𝗲𝗲𝗸 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗮𝗹𝗹𝘆...

Simple
Effective
Straight to the point

One of our students, Michael, has been using this system and is now closing $12K per month in grant writing services...

In fact, he did $10K in sales within the first 3 weeks...

It's so powerful…We built a full program and now have our Grant Builder AI running this system for clients.

The biggest challenge for most freelancers and consultants isn't delivering the service — it's finding clients who are ready to pay premium rates.

This is especially true in grant writing, where the traditional client acquisition methods are painfully slow and ineffective:

❌ Cold emailing (2-3% response rate)
❌ Networking events (time-consuming and unpredictable)
❌ Content marketing (takes months to gain traction)
❌ Referrals (inconsistent and unreliable)

The result? Feast-or-famine cycles that make it impossible to build a stable business.

But what if you had a system that consistently delivered 2-4 qualified prospects per week who ALREADY need grant funding?

That's exactly what our Grant Writing Auto-Prospecting SOP does.

Here's how it works:

1️⃣ 𝗧𝗮𝗿𝗴𝗲𝘁 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻: We use specialized search parameters to find organizations that are actively seeking funding (they're literally raising their hands for help)

2️⃣ 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗲𝗱 𝗢𝘂𝘁𝗿𝗲𝗮𝗰𝗵: Our system sends personalized outreach that speaks directly to their funding needs (not generic cold messages)

3️⃣ 𝗩𝗮𝗹𝘂𝗲-𝗙𝗶𝗿𝘀𝘁 𝗙𝗼𝗹𝗹𝗼𝘄-𝗨𝗽: We deliver immediate value by identifying specific grants they qualify for (creating instant credibility)

4️⃣ 𝗔𝘂𝘁𝗼𝗺𝗮𝘁𝗲𝗱 𝗕𝗼𝗼𝗸𝗶𝗻𝗴: Our calendar system qualifies prospects before they even get on a call (so you only talk to serious buyers)

5️⃣ 𝗛𝗶𝗴𝗵-𝗧𝗶𝗰𝗸𝗲𝘁 𝗖𝗹𝗼𝘀𝗶𝗻𝗴: Our proven sales framework positions your service as an investment, not an expense (making $3K-$5K fees a no-brainer)

The best part? Once you set it up, it runs on autopilot. You focus on serving clients while the system continuously fills your pipeline with qualified prospects.

This is how our students are consistently booking 2-4 sales calls per week and closing $10K-$15K per month in grant writing services.

And when you combine this client acquisition system with our Grant Builder AI (which writes grants 90% faster), you have a truly scalable business model.

I'm hosting a FREE masterclass this Saturday (May 3rd at 2:00 PM EST) where I'll break down this entire system step-by-step.

You'll learn:

• The exact search parameters to find organizations actively seeking funding
• The automated outreach templates that get 30%+ response rates
• The value-first follow-up sequence that builds instant credibility
• The qualification process that ensures you only talk to serious buyers
• The high-ticket closing framework that makes $3K-$5K fees a no-brainer

If you want to end the feast-or-famine cycle and build a predictable $10K+/month grant writing business, comment "SOP" below and I'll send you the registration link.

P.S. When you attend live, you'll get FREE access to our Grant Builder AI for 7 days AND our "Funded Fast" Prospecting Script Pack!`;

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
                Day 4
              </span>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
              <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">𝗧𝗵𝗲 𝗚𝗿𝗮𝗻𝘁 𝗪𝗿𝗶𝘁𝗶𝗻𝗴 𝗔𝘂𝘁𝗼-𝗣𝗿𝗼𝘀𝗽𝗲𝗰𝘁𝗶𝗻𝗴 𝗦𝗢𝗣: 𝗕𝗼𝗼𝗸 𝟮-𝟰 𝗛𝗶𝗴𝗵-𝗧𝗶𝗰𝗸𝗲𝘁 𝗖𝗹𝗶𝗲𝗻𝘁𝘀 𝗣𝗲𝗿 𝗪𝗲𝗲𝗸</h1>
              <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-3 py-2 rounded-md mb-4">
                <strong>Target Audience:</strong> Freelancers & Agency Owners
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
