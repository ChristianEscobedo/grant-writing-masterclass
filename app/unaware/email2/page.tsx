"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Email2Page() {
  const [copied, setCopied] = useState(false);
  const [htmlCopied, setHtmlCopied] = useState(false);

  const emailSubject = "How Sarah Went From Struggling Freelancer to $15K/Month Grant Writing Business";

  const emailContent = `Hey there,

Earlier today, I mentioned that grant writing is one of the most overlooked high-ticket service opportunities available right now.

But I know what you might be thinking...

"Sounds interesting, but can someone like ME really make this work?"

Let me tell you about Sarah...

Sarah was a freelance copywriter who was struggling to make ends meet. She was:

• Working 50+ hours per week
• Constantly hustling for new clients
• Competing with thousands of other copywriters
• Barely making $3K-$4K per month despite her skills

She was burned out and considering giving up on freelancing altogether to get a "real job."

Then she discovered grant writing.

At first, she was skeptical. She had no experience with grants and wasn't sure if she could learn a new skill while still trying to keep her business afloat.

But she decided to give it a shot.

Within 30 days of learning the basics of grant writing, she landed her first client - a local non-profit that paid her $3,500 to write a single grant application.

The best part? It only took her about 15 hours to complete (that's $233/hour).

Within 90 days, she had:

• 4 regular clients on monthly retainers
• A consistent income of $15K/month
• A waitlist of organizations wanting to work with her
• Cut her working hours almost in half

How did she do it?

1. She positioned herself as a grant writing specialist (instead of a generalist)
2. She focused on a specific niche (education non-profits)
3. She used AI tools to streamline the writing process
4. She created a monthly retainer model instead of one-off projects

The key was that she didn't try to become a grant writing "expert" overnight. She learned just enough to get started, then leveraged technology to fill in the gaps in her knowledge.

In our free masterclass this Saturday (May 3rd at 2:00 PM EST), I'll show you exactly how Sarah and others like her have built successful grant writing businesses from scratch - even with no prior experience.

You'll learn:

• The exact client acquisition strategy Sarah used to land her first $3,500 client
• How to use AI to write winning grant applications (even if you've never written one before)
• The monthly retainer model that creates predictable income
• How to choose the right niche to minimize competition and maximize results

If Sarah could do it, so can you.

Click here to save your spot for Saturday's masterclass: [REGISTER NOW]

To your success,
[Your Name]

P.S. I'll also be sharing how another freelancer, Mike, transitioned from web design to grant writing and now makes $22K/month working just 25 hours per week. You won't want to miss his story!`;

  const emailHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How Sarah Went From Struggling Freelancer to $15K/Month Grant Writing Business</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333333;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .header {
            background-color: #1a56db;
            padding: 20px;
            text-align: center;
        }
        .header img {
            max-width: 200px;
        }
        .content {
            padding: 20px;
            background-color: #ffffff;
        }
        h1 {
            color: #1a56db;
            font-size: 24px;
            margin-top: 0;
            margin-bottom: 20px;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 10px;
        }
        .highlight {
            background-color: #f0f4ff;
            border-left: 4px solid #1a56db;
            padding: 15px;
            margin: 20px 0;
        }
        .story-box {
            background-color: #f9f9f9;
            border: 1px solid #eeeeee;
            border-radius: 5px;
            padding: 20px;
            margin: 20px 0;
        }
        .results {
            background-color: #f0fff4;
            border-left: 4px solid #38a169;
            padding: 15px;
            margin: 20px 0;
        }
        .cta-button {
            display: inline-block;
            background-color: #1a56db;
            color: #ffffff !important;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 5px;
            font-weight: bold;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            font-size: 12px;
            color: #666666;
            padding: 20px;
        }
        .ps {
            border-top: 1px solid #eeeeee;
            margin-top: 20px;
            padding-top: 20px;
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://ai-saas-template-aceternity.vercel.app/GrantBuilder-AI-Dark.png" alt="Grant Builder AI">
        </div>
        <div class="content">
            <h1>How Sarah Went From Struggling Freelancer to $15K/Month Grant Writing Business</h1>
            
            <p>Hey there,</p>
            
            <p>Earlier today, I mentioned that grant writing is one of the most overlooked high-ticket service opportunities available right now.</p>
            
            <p>But I know what you might be thinking...</p>
            
            <div class="highlight">
                <p><em>"Sounds interesting, but can someone like ME really make this work?"</em></p>
            </div>
            
            <p>Let me tell you about Sarah...</p>
            
            <div class="story-box">
                <p>Sarah was a freelance copywriter who was struggling to make ends meet. She was:</p>
                
                <ul>
                    <li>Working 50+ hours per week</li>
                    <li>Constantly hustling for new clients</li>
                    <li>Competing with thousands of other copywriters</li>
                    <li>Barely making $3K-$4K per month despite her skills</li>
                </ul>
                
                <p>She was burned out and considering giving up on freelancing altogether to get a "real job."</p>
                
                <p>Then she discovered grant writing.</p>
                
                <p>At first, she was skeptical. She had no experience with grants and wasn't sure if she could learn a new skill while still trying to keep her business afloat.</p>
                
                <p>But she decided to give it a shot.</p>
            </div>
            
            <p>Within 30 days of learning the basics of grant writing, she landed her first client - a local non-profit that paid her $3,500 to write a single grant application.</p>
            
            <p>The best part? It only took her about 15 hours to complete (that's $233/hour).</p>
            
            <div class="results">
                <p><strong>Within 90 days, she had:</strong></p>
                
                <ul>
                    <li>4 regular clients on monthly retainers</li>
                    <li>A consistent income of $15K/month</li>
                    <li>A waitlist of organizations wanting to work with her</li>
                    <li>Cut her working hours almost in half</li>
                </ul>
            </div>
            
            <p>How did she do it?</p>
            
            <ol>
                <li>She positioned herself as a grant writing specialist (instead of a generalist)</li>
                <li>She focused on a specific niche (education non-profits)</li>
                <li>She used AI tools to streamline the writing process</li>
                <li>She created a monthly retainer model instead of one-off projects</li>
            </ol>
            
            <p>The key was that she didn't try to become a grant writing "expert" overnight. She learned just enough to get started, then leveraged technology to fill in the gaps in her knowledge.</p>
            
            <p>In our free masterclass this Saturday (May 3rd at 2:00 PM EST), I'll show you exactly how Sarah and others like her have built successful grant writing businesses from scratch - even with no prior experience.</p>
            
            <p>You'll learn:</p>
            
            <ul>
                <li>The exact client acquisition strategy Sarah used to land her first $3,500 client</li>
                <li>How to use AI to write winning grant applications (even if you've never written one before)</li>
                <li>The monthly retainer model that creates predictable income</li>
                <li>How to choose the right niche to minimize competition and maximize results</li>
            </ul>
            
            <p>If Sarah could do it, so can you.</p>
            
            <div style="text-align: center;">
                <a href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3" class="cta-button">REGISTER NOW</a>
            </div>
            
            <p>To your success,<br>
            [Your Name]</p>
            
            <div class="ps">
                <p>P.S. I'll also be sharing how another freelancer, Mike, transitioned from web design to grant writing and now makes $22K/month working just 25 hours per week. You won't want to miss his story!</p>
            </div>
        </div>
        <div class="footer">
            <p>© 2025 Grant Builder AI. All rights reserved.</p>
            <p>If you no longer wish to receive our emails, you can <a href="#">unsubscribe here</a>.</p>
        </div>
    </div>
</body>
</html>`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyHtmlToClipboard = () => {
    navigator.clipboard.writeText(emailHtml);
    setHtmlCopied(true);
    setTimeout(() => setHtmlCopied(false), 2000);
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
              href="/unaware"
              className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Back to All Emails
            </Button>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 mb-8"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 1 - Evening
                </span>
                <span className="bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 text-xs px-2 py-1 rounded">
                  Unaware Audience
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                  {emailSubject}
                </h1>
                <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Low Sophistication (Unaware of Grant Writing)
                </div>
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none mb-6">
                <h3>Email Strategy</h3>
                <p>This email is designed to:</p>
                
                <ul>
                  <li><strong>Address skepticism</strong> through a relatable success story</li>
                  <li><strong>Show transformation</strong> from struggling freelancer to successful grant writer</li>
                  <li><strong>Provide social proof</strong> that someone without prior experience can succeed</li>
                  <li><strong>Highlight specific results</strong> with concrete numbers ($15K/month)</li>
                  <li><strong>Outline a simple process</strong> that feels achievable</li>
                </ul>
                
                <p>The email uses a story-based approach to help the reader see themselves in Sarah's journey. It addresses the common objection "Can I really do this?" by showing how someone with a similar background (freelance copywriter) was able to transition successfully. The specific income figures and timeframe (90 days) create both desire and believability.</p>
              </div>

              <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
                <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Email Content (Plain Text)</h3>
                <div className="bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 whitespace-pre-line">
                  <p className="font-medium mb-2">Subject: {emailSubject}</p>
                  {emailContent}
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button
              onClick={copyToClipboard}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {copied ? (
                <>
                  <IconCheck className="h-4 w-4 mr-2" />
                  Copied Plain Text
                </>
              ) : (
                <>
                  <IconCopy className="h-4 w-4 mr-2" />
                  Copy Plain Text
                </>
              )}
            </Button>
            
            <Button
              onClick={copyHtmlToClipboard}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              {htmlCopied ? (
                <>
                  <IconCheck className="h-4 w-4 mr-2" />
                  Copied HTML
                </>
              ) : (
                <>
                  <IconCopy className="h-4 w-4 mr-2" />
                  Copy HTML Version
                </>
              )}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
