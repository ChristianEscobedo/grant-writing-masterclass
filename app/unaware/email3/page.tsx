"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Email3Page() {
  const [copied, setCopied] = useState(false);
  const [htmlCopied, setHtmlCopied] = useState(false);

  const emailSubject = "The 3 Reasons Why Grant Writing Is the Perfect High-Ticket Service (Even If You're Starting From Zero)";

  const emailContent = `Hey there,

Over the past couple of days, I've been sharing why grant writing is such an incredible opportunity for freelancers and agency owners looking for a high-ticket service that's in demand.

Today, I want to break down exactly WHY grant writing is the perfect high-ticket service - especially if you're starting from zero.

𝗥𝗲𝗮𝘀𝗼𝗻 #𝟭: 𝗧𝗵𝗲 𝗘𝗰𝗼𝗻𝗼𝗺𝗶𝗰𝘀 𝗔𝗿𝗲 𝗜𝗻𝘀𝗮𝗻𝗲

Think about most freelance services:

• You charge $1,000 for a website
• The client gets a website worth... $1,000

But with grant writing:

• You charge $3,500 for a grant application
• The client potentially gets $100,000, $250,000, or even $1M+ in funding

This completely changes the value equation. You're not selling a deliverable - you're selling access to funding that can transform an organization.

That's why clients happily pay $3,000-$5,000 per application without batting an eye. The ROI is obvious.

𝗥𝗲𝗮𝘀𝗼𝗻 #𝟮: 𝗧𝗵𝗲 𝗗𝗲𝗺𝗮𝗻𝗱-𝗦𝘂𝗽𝗽𝗹𝘆 𝗜𝗺𝗯𝗮𝗹𝗮𝗻𝗰𝗲 𝗜𝘀 𝗦𝘁𝗮𝗴𝗴𝗲𝗿𝗶𝗻𝗴

Let's look at the numbers:

• There are over 1.5 million non-profits in the US alone
• Plus countless small businesses eligible for grants
• There's over $700 billion in grant funding available annually
• Yet there are fewer than 50,000 professional grant writers

Compare that to:

• 1.3 million web designers
• 700,000+ digital marketers
• 500,000+ copywriters

The competition is virtually non-existent compared to other freelance services.

𝗥𝗲𝗮𝘀𝗼𝗻 #𝟯: 𝗔𝗜 𝗛𝗮𝘀 𝗟𝗲𝘃𝗲𝗹𝗲𝗱 𝘁𝗵𝗲 𝗣𝗹𝗮𝘆𝗶𝗻𝗴 𝗙𝗶𝗲𝗹𝗱

Here's the game-changer: Until recently, grant writing required years of experience and specialized knowledge.

But with the right AI tools (like our Grant Builder AI), you can:

• Generate compelling narratives tailored to specific funders
• Create detailed budgets with proper justifications
• Develop evaluation plans with measurable outcomes
• Craft sustainability strategies that funders love

The AI handles the technical aspects, while you focus on client relationships and strategy.

This means you can deliver professional-quality grant applications even if you're just starting out.

𝗪𝗵𝘆 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗧𝗵𝗲 𝗣𝗲𝗿𝗳𝗲𝗰𝘁 𝗧𝗶𝗺𝗲 𝘁𝗼 𝗚𝗲𝘁 𝗦𝘁𝗮𝗿𝘁𝗲𝗱

We're at a unique moment:

1. Massive demand for grant writing services
2. Very little competition
3. AI tools that make it accessible to beginners
4. Organizations with budgets allocated for grant writing

This window of opportunity won't last forever. As more people discover this opportunity, competition will increase.

In our free masterclass this Saturday (May 3rd at 2:00 PM EST), I'll show you exactly how to capitalize on this opportunity - even if you have zero grant writing experience.

You'll learn:

• How to position yourself as a grant writing specialist
• The exact client acquisition system that works for beginners
• How to use our AI Grant Builder to write winning applications
• The monthly retainer model that creates predictable income

Click here to save your spot for Saturday's masterclass: [REGISTER NOW]

To your success,
[Your Name]

P.S. I've helped over 300 freelancers and agency owners add grant writing to their service offerings, and the average time to first client is just 21 days. This is truly one of the fastest ways to start generating high-ticket income.`;

  const emailHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The 3 Reasons Why Grant Writing Is the Perfect High-Ticket Service (Even If You're Starting From Zero)</title>
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
        h2 {
            color: #1a56db;
            font-size: 20px;
            margin-top: 30px;
            margin-bottom: 15px;
        }
        ul {
            padding-left: 20px;
        }
        li {
            margin-bottom: 10px;
        }
        .reason {
            background-color: #f0f4ff;
            border-left: 4px solid #1a56db;
            padding: 15px;
            margin: 20px 0;
        }
        .comparison {
            display: flex;
            justify-content: space-between;
            margin: 20px 0;
        }
        .comparison-column {
            width: 48%;
            padding: 15px;
            box-sizing: border-box;
        }
        .traditional {
            background-color: #fff5f5;
            border: 1px solid #fed7d7;
        }
        .grant-writing {
            background-color: #f0fff4;
            border: 1px solid #c6f6d5;
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
            <h1>The 3 Reasons Why Grant Writing Is the Perfect High-Ticket Service (Even If You're Starting From Zero)</h1>
            
            <p>Hey there,</p>
            
            <p>Over the past couple of days, I've been sharing why grant writing is such an incredible opportunity for freelancers and agency owners looking for a high-ticket service that's in demand.</p>
            
            <p>Today, I want to break down exactly WHY grant writing is the perfect high-ticket service - especially if you're starting from zero.</p>
            
            <div class="reason">
                <h2>𝗥𝗲𝗮𝘀𝗼𝗻 #𝟭: 𝗧𝗵𝗲 𝗘𝗰𝗼𝗻𝗼𝗺𝗶𝗰𝘀 𝗔𝗿𝗲 𝗜𝗻𝘀𝗮𝗻𝗲</h2>
                
                <p>Think about most freelance services:</p>
                
                <ul>
                    <li>You charge $1,000 for a website</li>
                    <li>The client gets a website worth... $1,000</li>
                </ul>
                
                <p>But with grant writing:</p>
                
                <ul>
                    <li>You charge $3,500 for a grant application</li>
                    <li>The client potentially gets $100,000, $250,000, or even $1M+ in funding</li>
                </ul>
                
                <p>This completely changes the value equation. You're not selling a deliverable - you're selling access to funding that can transform an organization.</p>
                
                <p>That's why clients happily pay $3,000-$5,000 per application without batting an eye. The ROI is obvious.</p>
            </div>
            
            <div class="reason">
                <h2>𝗥𝗲𝗮𝘀𝗼𝗻 #𝟮: 𝗧𝗵𝗲 𝗗𝗲𝗺𝗮𝗻𝗱-𝗦𝘂𝗽𝗽𝗹𝘆 𝗜𝗺𝗯𝗮𝗹𝗮𝗻𝗰𝗲 𝗜𝘀 𝗦𝘁𝗮𝗴𝗴𝗲𝗿𝗶𝗻𝗴</h2>
                
                <p>Let's look at the numbers:</p>
                
                <ul>
                    <li>There are over 1.5 million non-profits in the US alone</li>
                    <li>Plus countless small businesses eligible for grants</li>
                    <li>There's over $700 billion in grant funding available annually</li>
                    <li>Yet there are fewer than 50,000 professional grant writers</li>
                </ul>
                
                <p>Compare that to:</p>
                
                <ul>
                    <li>1.3 million web designers</li>
                    <li>700,000+ digital marketers</li>
                    <li>500,000+ copywriters</li>
                </ul>
                
                <p>The competition is virtually non-existent compared to other freelance services.</p>
            </div>
            
            <div class="reason">
                <h2>𝗥𝗲𝗮𝘀𝗼𝗻 #𝟯: 𝗔𝗜 𝗛𝗮𝘀 𝗟𝗲𝘃𝗲𝗹𝗲𝗱 𝘁𝗵𝗲 𝗣𝗹𝗮𝘆𝗶𝗻𝗴 𝗙𝗶𝗲𝗹𝗱</h2>
                
                <p>Here's the game-changer: Until recently, grant writing required years of experience and specialized knowledge.</p>
                
                <p>But with the right AI tools (like our Grant Builder AI), you can:</p>
                
                <ul>
                    <li>Generate compelling narratives tailored to specific funders</li>
                    <li>Create detailed budgets with proper justifications</li>
                    <li>Develop evaluation plans with measurable outcomes</li>
                    <li>Craft sustainability strategies that funders love</li>
                </ul>
                
                <p>The AI handles the technical aspects, while you focus on client relationships and strategy.</p>
                
                <p>This means you can deliver professional-quality grant applications even if you're just starting out.</p>
            </div>
            
            <h2>𝗪𝗵𝘆 𝗧𝗵𝗶𝘀 𝗜𝘀 𝗧𝗵𝗲 𝗣𝗲𝗿𝗳𝗲𝗰𝘁 𝗧𝗶𝗺𝗲 𝘁𝗼 𝗚𝗲𝘁 𝗦𝘁𝗮𝗿𝘁𝗲𝗱</h2>
            
            <p>We're at a unique moment:</p>
            
            <ol>
                <li>Massive demand for grant writing services</li>
                <li>Very little competition</li>
                <li>AI tools that make it accessible to beginners</li>
                <li>Organizations with budgets allocated for grant writing</li>
            </ol>
            
            <p>This window of opportunity won't last forever. As more people discover this opportunity, competition will increase.</p>
            
            <p>In our free masterclass this Saturday (May 3rd at 2:00 PM EST), I'll show you exactly how to capitalize on this opportunity - even if you have zero grant writing experience.</p>
            
            <p>You'll learn:</p>
            
            <ul>
                <li>How to position yourself as a grant writing specialist</li>
                <li>The exact client acquisition system that works for beginners</li>
                <li>How to use our AI Grant Builder to write winning applications</li>
                <li>The monthly retainer model that creates predictable income</li>
            </ul>
            
            <div style="text-align: center;">
                <a href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3" class="cta-button">REGISTER NOW</a>
            </div>
            
            <p>To your success,<br>
            [Your Name]</p>
            
            <div class="ps">
                <p>P.S. I've helped over 300 freelancers and agency owners add grant writing to their service offerings, and the average time to first client is just 21 days. This is truly one of the fastest ways to start generating high-ticket income.</p>
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
                  Day 2 - Morning
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
                  <li><strong>Educate the audience</strong> about the advantages of grant writing as a service</li>
                  <li><strong>Compare grant writing</strong> to traditional freelance services they're familiar with</li>
                  <li><strong>Address the "barrier to entry" concern</strong> by highlighting AI tools</li>
                  <li><strong>Create urgency</strong> by positioning this as a limited-time opportunity</li>
                  <li><strong>Provide concrete data</strong> to support the claims</li>
                </ul>
                
                <p>The email uses a structured "3 reasons" format to make the information easy to digest. It directly compares grant writing to services the audience is already familiar with (websites, marketing, copywriting) to help them understand the opportunity in terms they can relate to. The emphasis on AI tools addresses the main objection of "I don't know how to write grants" by showing how technology can bridge the knowledge gap.</p>
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
