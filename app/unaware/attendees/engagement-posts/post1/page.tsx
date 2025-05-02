"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function UnawareAttendeeEngagementPost1Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `Masterclass attendees: What was your biggest takeaway from the session? (Plus a free resource for you...)

First, I want to thank everyone who attended the Grant Writing Masterclass yesterday! The engagement and questions were amazing, and I'm excited to see so many of you interested in this opportunity.

I'd love to hear what resonated with you the most. Was it:

• The size of the opportunity ($700 billion in grant funding available annually)?
• The lack of competition compared to other freelance services?
• The potential for high-ticket clients ($3K-$5K per application)?
• The monthly retainer model for predictable income?
• The AI tools that make it accessible even for beginners?
• Something else entirely?

Comment below with your biggest takeaway, and I'll send you a free resource based on your response!

For those who were most excited about finding grant opportunities, I'll send you my "Top 20 Grant Databases" guide (including 5 completely free options).

For those interested in the client acquisition process, I'll send you my "Grant Writing Client Outreach Templates" with 5 proven email templates.

For those curious about the AI tools, I'll send you a video walkthrough of how our AI Grant Builder creates compelling narratives.

For those focused on the monthly retainer model, I'll send you my "Grant Writing Retainer Agreement Template" that you can customize for your clients.

I'm genuinely curious about what excited you the most, and I want to provide resources that will help you take the next step in your grant writing journey.

Also, for those who missed it or want to review specific sections, the replay is available for the next 7 days. Just check your email for the link I sent this morning.

Remember, you don't need years of experience to start landing high-paying grant writing clients. With the right approach and tools, you can get started much faster than you might think.

Looking forward to reading your comments and sending you some helpful resources!`;

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
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Masterclass attendees: What was your biggest takeaway from the session? (Plus a free resource for you...)</h1>
                <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Low Sophistication Attendees (New to Grant Writing)
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This engagement post is designed to:</p>
                
                <ul>
                  <li><strong>Generate comments</strong> with an easy-to-answer question</li>
                  <li><strong>Offer immediate value</strong> with free resources based on their response</li>
                  <li><strong>Segment the audience</strong> based on their interests and pain points</li>
                  <li><strong>Create a personal connection</strong> through direct interaction</li>
                  <li><strong>Reinforce key points</strong> from the masterclass</li>
                </ul>
                
                <p>The post uses a question-based approach that's easy for anyone to answer, regardless of their level of sophistication. By offering different resources based on their response, it creates a personalized experience and gives you valuable information about what aspects of grant writing most interest each person. This allows for more targeted follow-up and increases the likelihood of conversion.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 1 after the masterclass while the content is still fresh in attendees' minds. When people comment with their biggest takeaway, send them the corresponding resource via DM. This creates a personal connection and gives you an opportunity to continue the conversation one-on-one, potentially leading to a Strategy Session booking.</p>
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
