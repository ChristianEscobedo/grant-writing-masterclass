"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function UnawareAttendeeEngagementPost2Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `What's holding you back from starting your grant writing business? Comment below and I'll give you a personalized solution.

After the masterclass, I've received dozens of messages from people excited about the grant writing opportunity but still hesitant to take the first step.

I get it. Starting something new can be intimidating, especially when it involves a skill you haven't mastered yet.

Based on my experience helping hundreds of people start their grant writing businesses, here are the most common obstacles I hear:

𝟭. "𝗜 𝗱𝗼𝗻'𝘁 𝗵𝗮𝘃𝗲 𝗲𝗻𝗼𝘂𝗴𝗵 𝗲𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲 𝘄𝗶𝘁𝗵 𝗴𝗿𝗮𝗻𝘁 𝘄𝗿𝗶𝘁𝗶𝗻𝗴."

This is by far the most common concern. The truth is, you don't need years of experience to get started. With the right tools (like our AI Grant Builder) and a clear process, you can deliver professional results even as a beginner.

𝟮. "𝗜'𝗺 𝗻𝗼𝘁 𝘀𝘂𝗿𝗲 𝗵𝗼𝘄 𝘁𝗼 𝗳𝗶𝗻𝗱 𝗰𝗹𝗶𝗲𝗻𝘁𝘀."

Client acquisition is a legitimate concern. However, there are specific organizations actively looking for grant writing help right now. The key is knowing where to find them and how to approach them effectively.

𝟯. "𝗜 𝗱𝗼𝗻'𝘁 𝗸𝗻𝗼𝘄 𝗵𝗼𝘄 𝘁𝗼 𝗽𝗿𝗶𝗰𝗲 𝗺𝘆 𝘀𝗲𝗿𝘃𝗶𝗰𝗲𝘀."

Pricing can be tricky when you're just starting out. The good news is that there are standard rates in the grant writing industry that make this easier than in other freelance fields.

𝟰. "𝗜'𝗺 𝘄𝗼𝗿𝗿𝗶𝗲𝗱 𝗮𝗯𝗼𝘂𝘁 𝘁𝗵𝗲 𝗹𝗲𝗴𝗮𝗹 𝗮𝘀𝗽𝗲𝗰𝘁𝘀 𝗼𝗳 𝘀𝘁𝗮𝗿𝘁𝗶𝗻𝗴 𝗮 𝗯𝘂𝘀𝗶𝗻𝗲𝘀𝘀."

The business setup for grant writing is actually quite straightforward. You don't need a complex legal structure to get started.

𝟱. "𝗜'𝗺 𝗮𝗳𝗿𝗮𝗶𝗱 𝗼𝗳 𝗳𝗮𝗶𝗹𝗶𝗻𝗴 𝗼𝗿 𝗻𝗼𝘁 𝗱𝗲𝗹𝗶𝘃𝗲𝗿𝗶𝗻𝗴 𝗿𝗲𝘀𝘂𝗹𝘁𝘀."

This is a valid concern, but remember that grant writing success isn't measured solely by whether the grant is awarded. Many factors outside your control influence funding decisions.

But here's the thing - I can give you much more specific advice if I know exactly what's holding YOU back.

Comment below with your biggest obstacle, and I'll reply with a personalized solution tailored to your specific situation.

Whether it's about experience, finding clients, pricing, business setup, or anything else, I'm here to help you overcome that obstacle and take the first step toward building your grant writing business.

Let's solve this together!`;

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
              href="/unaware/attendees/engagement-posts"
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
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded">
                  Engagement Post
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">What's holding you back from starting your grant writing business? Comment below and I'll give you a personalized solution.</h1>
                <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Low Sophistication Attendees (New to Grant Writing)
                </div>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This engagement post is designed to:</p>
                
                <ul>
                  <li><strong>Identify specific objections</strong> that are preventing action</li>
                  <li><strong>Address common concerns</strong> to show you understand their hesitations</li>
                  <li><strong>Offer personalized solutions</strong> based on their specific situation</li>
                  <li><strong>Create a public conversation</strong> that others with similar concerns can learn from</li>
                  <li><strong>Position you as a problem-solver</strong> who can help them overcome obstacles</li>
                </ul>
                
                <p>The post uses a problem-solution format that acknowledges the legitimate concerns beginners have while offering a path forward. By listing the most common objections first, it normalizes these concerns and makes people more comfortable sharing their own. The promise of personalized solutions creates a compelling reason to comment, and the public nature of the responses allows others to benefit from your advice.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 2 after the masterclass to address the hesitations that often arise after the initial excitement. When people comment with their specific obstacle, provide a thoughtful, personalized response that addresses their concern and, when appropriate, mentions how the Strategy Session could help them overcome this specific challenge. This creates a natural opportunity to suggest booking a call without being pushy.</p>
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
