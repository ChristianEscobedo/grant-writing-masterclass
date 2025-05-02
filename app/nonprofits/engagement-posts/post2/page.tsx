"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function NonprofitEngagementPost2Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `POLL: What's your organization's current grant success rate? (I'll share insights based on your response)

Non-profit leaders: I'm curious about your current grant success rate (the percentage of applications that get funded). This will help me provide more targeted insights.

What's your organization's current success rate?

• Less than 10%
• 10-20%
• 20-30%
• 30-40%
• More than 40%
• We don't track this metric

Comment with your range, and I'll share some specific insights based on your response.

Yesterday, many of you shared your biggest challenges with grant applications. Today, I want to focus on success rates and what they tell us about your grant strategy.

Based on our research of over 1,000 non-profit organizations across various sectors, here's what different success rates typically indicate:

𝗟𝗲𝘀𝘀 𝘁𝗵𝗮𝗻 𝟭𝟬%:
This is actually the most common range, with about 60% of organizations falling here. If you're in this category, you're not alone. This typically indicates one or more of the following:

• Applying for highly competitive grants without sufficient differentiation
• Misalignment between your programs and funders' priorities
• Weak outcome metrics or sustainability plans
• Applying for too many opportunities without sufficient targeting

The good news is that organizations in this category often see the most dramatic improvements with the right strategies. Small changes in approach can double or triple your success rate.

𝟭𝟬-𝟮𝟬%:
About 25% of organizations fall in this range. This is better than average and suggests you're doing some things right, but there's still significant room for improvement. Organizations in this range typically:

• Have a decent understanding of what funders want
• Create reasonably compelling narratives
• Have some process for targeting appropriate opportunities
• But may still struggle with specific elements like outcome metrics or sustainability plans

With targeted improvements in your weak areas, you could potentially increase your success rate to 30% or higher.

𝟮𝟬-𝟯𝟬%:
Only about 10% of organizations achieve this level of success. If you're here, you're doing very well compared to your peers. Organizations in this range typically:

• Have a systematic approach to identifying the right opportunities
• Understand funders' stated and unstated priorities
• Create compelling narratives with strong outcome metrics
• Have convincing sustainability plans

The main opportunity for improvement at this level is usually efficiency - maintaining or improving your success rate while reducing the time spent on each application.

𝟯𝟬-𝟰𝟬%:
Just 3-4% of organizations achieve this level of success. If you're here, you have a truly exceptional grant strategy. Organizations in this range typically:

• Have deep insights into funder priorities
• Create outstanding applications that stand out from the competition
• Have strong relationships with funders
• Have refined their approach over many years

At this level, the focus is usually on scaling your success to more opportunities while maintaining quality.

𝗠𝗼𝗿𝗲 𝘁𝗵𝗮𝗻 𝟰𝟬%:
Less than 1% of organizations achieve this level of success. If you're here, you're among the elite in grant acquisition. This typically indicates:

• Exceptional alignment with funder priorities
• Outstanding program design and implementation
• Strong relationships with funders
• A highly refined, systematic approach to grant writing

At this level, the focus is usually on maintaining your success while expanding to new funding sources.

𝗪𝗲 𝗱𝗼𝗻'𝘁 𝘁𝗿𝗮𝗰𝗸 𝘁𝗵𝗶𝘀 𝗺𝗲𝘁𝗿𝗶𝗰:
About 15% of organizations don't track their success rate. This itself is often an indicator of opportunity. Organizations that track and analyze their success rates typically see improvement over time, as they can identify patterns in what works and what doesn't.

Starting to track this metric - along with more detailed data about each application - can provide valuable insights that lead to improved outcomes.

I'm genuinely curious about where your organization falls on this spectrum. Comment with your current success rate, and I'll share some specific strategies that might help you improve.

If you're interested in a more comprehensive approach to improving your grant success rate, I'm hosting a free masterclass this Saturday (May 3rd at 2:00 PM EST) specifically for non-profit organizations.

During this session, I'll share:
• The exact strategies that organizations use to achieve 30%+ success rates
• A systematic approach to identifying the right opportunities
• Techniques for uncovering funders' unstated priorities
• Templates for creating compelling narratives and outcome metrics
• Tools for tracking and improving your success over time

Click here to register: [REGISTRATION LINK]

Even if you can't make it live, register anyway and I'll send you the replay. But live attendees will get access to our Grant Opportunity Database with 50+ active funding opportunities, so try to make it if you can!`;

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
              href="/nonprofits/engagement-posts"
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
                  Day 2
                </span>
                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-1 rounded">
                  Engagement Post
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">POLL: What's your organization's current grant success rate? (I'll share insights based on your response)</h1>
                <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Non-Profit Organizations & NGOs Seeking Grant Funding
                </div>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-emerald dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This engagement post is designed to:</p>
                
                <ul>
                  <li><strong>Generate comments</strong> with an easy poll question about success rates</li>
                  <li><strong>Segment the audience</strong> based on their current performance</li>
                  <li><strong>Provide benchmarking data</strong> that helps organizations understand where they stand</li>
                  <li><strong>Create desire for improvement</strong> by showing what's possible</li>
                  <li><strong>Position the masterclass</strong> as the solution for achieving higher success rates</li>
                </ul>
                
                <p>The post uses a poll format that's easy to respond to and creates immediate engagement. By providing detailed insights for each success rate range, it delivers value regardless of where an organization falls on the spectrum. The statistics about how few organizations achieve high success rates creates both desire (to be among the elite) and believability (by acknowledging that it's rare but possible). The masterclass is positioned as the pathway to achieving these higher success rates.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 2 to build on the engagement from Day 1. When people comment with their success rate, respond with personalized insights and suggestions specific to their situation. For those with low success rates, emphasize how quickly they could see improvement with the right strategies. For those with higher rates, focus on efficiency and scaling their success. In all responses, mention specific aspects of the masterclass that would be particularly valuable for their situation.</p>
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
