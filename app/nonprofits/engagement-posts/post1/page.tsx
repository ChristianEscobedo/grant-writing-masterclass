"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function NonprofitEngagementPost1Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `Non-profit leaders: What's been your biggest challenge with grant applications? (I'll share specific strategies for the most common challenges)

I've been working with non-profit organizations for over a decade, and I've noticed that most face similar challenges when it comes to securing grant funding.

Is your biggest challenge:

• Finding relevant grant opportunities?
• Understanding what funders are really looking for?
• Creating compelling narratives that stand out?
• Developing strong outcome metrics?
• Building convincing sustainability plans?
• Managing the application process with limited staff?
• Something else entirely?

Comment below with your specific challenge, and I'll share some targeted strategies that might help.

Based on my experience working with hundreds of non-profits across various sectors, here are some quick insights on the most common challenges:

𝗙𝗶𝗻𝗱𝗶𝗻𝗴 𝗿𝗲𝗹𝗲𝘃𝗮𝗻𝘁 𝗴𝗿𝗮𝗻𝘁 𝗼𝗽𝗽𝗼𝗿𝘁𝘂𝗻𝗶𝘁𝗶𝗲𝘀:
Many organizations waste time on opportunities that aren't a good fit. The key is to develop a systematic approach to opportunity research that goes beyond the basic search engines. There are specialized databases and strategies that can help you identify opportunities with a much higher likelihood of success.

𝗨𝗻𝗱𝗲𝗿𝘀𝘁𝗮𝗻𝗱𝗶𝗻𝗴 𝘄𝗵𝗮𝘁 𝗳𝘂𝗻𝗱𝗲𝗿𝘀 𝗮𝗿𝗲 𝗿𝗲𝗮𝗹𝗹𝘆 𝗹𝗼𝗼𝗸𝗶𝗻𝗴 𝗳𝗼𝗿:
The published guidelines rarely tell the full story. Successful organizations develop strategies for uncovering funders' unstated priorities, which often have a significant influence on funding decisions.

𝗖𝗿𝗲𝗮𝘁𝗶𝗻𝗴 𝗰𝗼𝗺𝗽𝗲𝗹𝗹𝗶𝗻𝗴 𝗻𝗮𝗿𝗿𝗮𝘁𝗶𝘃𝗲𝘀:
Many applications fail not because of the program itself, but because the narrative doesn't effectively communicate its value. There's a specific structure that successful applications follow that makes them stand out from the competition.

𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗶𝗻𝗴 𝘀𝘁𝗿𝗼𝗻𝗴 𝗼𝘂𝘁𝗰𝗼𝗺𝗲 𝗺𝗲𝘁𝗿𝗶𝗰𝘀:
Funders are increasingly focused on measurable impact. Organizations that can articulate clear, compelling outcome metrics have a significant advantage in the application process.

𝗕𝘂𝗶𝗹𝗱𝗶𝗻𝗴 𝗰𝗼𝗻𝘃𝗶𝗻𝗰𝗶𝗻𝗴 𝘀𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗶𝗹𝗶𝘁𝘆 𝗽𝗹𝗮𝗻𝘀:
Many funders are concerned about what happens after their funding ends. A strong sustainability plan addresses these concerns and demonstrates that your organization has thought beyond the grant period.

𝗠𝗮𝗻𝗮𝗴𝗶𝗻𝗴 𝘁𝗵𝗲 𝗮𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻 𝗽𝗿𝗼𝗰𝗲𝘀𝘀 𝘄𝗶𝘁𝗵 𝗹𝗶𝗺𝗶𝘁𝗲𝗱 𝘀𝘁𝗮𝗳𝗳:
Small organizations often struggle with the time-intensive nature of grant applications. There are strategies and tools that can significantly reduce the time required while improving quality.

I'm genuinely curious about the specific challenges your organization is facing. Comment below, and I'll share some targeted strategies that might help you overcome them.

Also, if you're interested in a more comprehensive approach to improving your grant success rate, I'm hosting a free masterclass this Saturday (May 3rd at 2:00 PM EST) specifically for non-profit organizations.

During this session, I'll share:
• A systematic approach to finding the right grant opportunities
• Strategies for uncovering funders' unstated priorities
• A framework for creating compelling narratives
• Templates for developing strong outcome metrics
• A sustainability plan structure that addresses funders' concerns
• Tools and strategies for managing the application process efficiently

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
            <div className="bg-emerald-600 h-3"></div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 1
                </span>
                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-1 rounded">
                  Engagement Post
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Non-profit leaders: What's been your biggest challenge with grant applications? (I'll share specific strategies for the most common challenges)</h1>
                <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Non-Profit Organizations & NGOs Seeking Grant Funding
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-emerald dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This engagement post is designed to:</p>
                
                <ul>
                  <li><strong>Generate comments</strong> with a question relevant to non-profit organizations</li>
                  <li><strong>Identify specific pain points</strong> that can be addressed in follow-up content</li>
                  <li><strong>Provide immediate value</strong> with brief insights on common challenges</li>
                  <li><strong>Position you as an expert</strong> who understands their specific challenges</li>
                  <li><strong>Create a natural transition</strong> to the masterclass invitation</li>
                </ul>
                
                <p>The post uses a question-based approach that's easy for any non-profit leader to answer. By listing common challenges, it makes it simple for them to identify their specific issue and comment. The brief insights provide immediate value while demonstrating that there's much more to learn. The masterclass invitation is positioned as a natural next step for those who want more comprehensive guidance.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 1 to start building engagement with your target audience. When people comment with their specific challenges, respond with personalized advice that addresses their unique situation. This creates a one-on-one connection and demonstrates your expertise. In your responses, mention that you'll be covering their specific challenge in more depth during the masterclass, creating a natural reason for them to register.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <Button
              onClick={copyToClipboard}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
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
