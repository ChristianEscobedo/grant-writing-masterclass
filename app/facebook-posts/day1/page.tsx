"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconBrandFacebook, IconCopy } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Day1FacebookPostPage() {
  const [copied, setCopied] = useState(false);

  const postContent = `What's the worst grant application you've ever seen? 👇

I'll go first...

A few years ago, I reviewed a grant application for a $500K community development project that made me physically cringe.

The applicant had:

✓ Copy-pasted their mission statement into EVERY section
✓ Included a budget with a $50,000 math error
✓ Submitted 47 pages when the limit was 15
✓ Used Comic Sans font (I wish I was joking)
✓ Included zero measurable outcomes

The sad part? Their project was actually AMAZING and desperately needed in the community.

But they lost out on half a million dollars because of these simple mistakes.

After reviewing thousands of grant applications and helping secure over $50 million in funding, I've noticed something shocking:

Most organizations are leaving MILLIONS on the table because of easily fixable mistakes.

And it's not their fault!

Grant writing has traditionally been:
• Complicated and technical
• Time-consuming (40+ hours per application)
• Full of unwritten rules and hidden expectations
• Expensive to outsource ($3K-$5K per application)

But here's what's changed everything...

AI is completely transforming grant writing.

What used to take 40+ hours can now be done in under 5.

What used to require specialized knowledge can now be guided by intelligent systems.

What used to cost $3K-$5K to outsource can now be done in-house with the right tools.

This is why I'm hosting a FREE masterclass this Saturday (May 3rd at 2:00 PM EST) on "How to Build a $10K+/Month Grant Writing Business Using AI."

In this training, I'll show you:

• How our AI Grant Builder writes 90% of the grant FOR you
• The exact system for finding and closing high-ticket clients ($3K-$5K per project)
• Real examples of grants that secured $250K-$1M+ in funding
• How to create monthly retainers that generate predictable income

Whether you're a:
• Freelancer looking for a high-ticket service
• Consultant wanting to add grant writing to your offerings
• Non-profit professional seeking to bring grant writing in-house
• Business owner looking to access funding

This masterclass will show you how to leverage AI to write winning grants in a fraction of the time.

The best part? You don't need any previous grant writing experience.

To save your spot, comment "GRANTS" below and I'll send you the registration link.

P.S. When you attend live, you'll get FREE access to our AI Grant Builder for 7 days so you can try it yourself!`;

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
                Day 1
              </span>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
              <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">What's the worst grant application you've ever seen?</h1>
              <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-3 py-2 rounded-md mb-4">
                <strong>Target Audience:</strong> Mixed Audience (Beginners & Experienced)
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
