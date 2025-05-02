"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function Email1Page() {
  const [copied, setCopied] = useState(false);
  const [htmlCopied, setHtmlCopied] = useState(false);

  const emailSubject = "Tired of Chasing Clients? This $10K/Month Opportunity Is Flying Under the Radar...";

  const emailContent = `Hey there,

Are you tired of...

• Constantly chasing new clients who haggle over your rates?
• Dealing with scope creep that turns profitable projects into money-losers?
• The feast-or-famine cycle that makes your income unpredictable?
• Competing with thousands of other freelancers and agencies for the same clients?

If you're nodding your head right now, I get it. I've been there too.

For years, I ran a digital marketing agency. We did good work, but it was HARD:

• Clients constantly questioned our value
• Projects often went over budget
• We were always hustling for the next client
• Competition kept driving prices down

Then I discovered something that completely changed my business (and my life)...

Grant writing.

Now, before you say "Wait, what? Grant writing?!" hear me out...

Grant writing is one of the most overlooked high-ticket service opportunities available right now. Here's why:

1. Organizations are DESPERATE for this service (there's over $700 billion in grant funding available annually)

2. They're happy to pay $3,000-$5,000 per grant application (because they're trying to secure much larger amounts)

3. There's virtually NO competition compared to marketing, copywriting, web design, etc.

4. You can learn the basics quickly (especially with the right tools)

5. It creates PREDICTABLE income through retainer relationships

The best part? With new AI tools, you can deliver exceptional results even if you have zero experience with grant writing.

I'm hosting a free masterclass this Saturday (May 3rd at 2:00 PM EST) where I'll show you exactly how to build a $10K+/month grant writing business from scratch.

You'll discover:

• How to position yourself as a grant writing expert (even if you're starting from zero)
• The exact client acquisition system that consistently brings in high-paying clients
• How to use AI to write winning grant applications in a fraction of the time
• The monthly retainer model that creates predictable $3K-$5K/month income streams
• Real case studies of people who've built successful grant writing businesses in 90 days or less

If you're looking for a high-ticket service that's in high demand, has low competition, and can create predictable income, this is for you.

Click here to save your spot for Saturday's masterclass: [REGISTER NOW]

To your success,
[Your Name]

P.S. Even if you can't make it live, register anyway and I'll send you the replay. But live attendees will get access to our AI Grant Builder tool for 7 days, so try to make it if you can!`;

  const emailHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tired of Chasing Clients? This $10K/Month Opportunity Is Flying Under the Radar...</title>
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
            <h1>Tired of Chasing Clients? This $10K/Month Opportunity Is Flying Under the Radar...</h1>
            
            <p>Hey there,</p>
            
            <p>Are you tired of...</p>
            
            <ul>
                <li>Constantly chasing new clients who haggle over your rates?</li>
                <li>Dealing with scope creep that turns profitable projects into money-losers?</li>
                <li>The feast-or-famine cycle that makes your income unpredictable?</li>
                <li>Competing with thousands of other freelancers and agencies for the same clients?</li>
            </ul>
            
            <p>If you're nodding your head right now, I get it. I've been there too.</p>
            
            <p>For years, I ran a digital marketing agency. We did good work, but it was HARD:</p>
            
            <ul>
                <li>Clients constantly questioned our value</li>
                <li>Projects often went over budget</li>
                <li>We were always hustling for the next client</li>
                <li>Competition kept driving prices down</li>
            </ul>
            
            <p>Then I discovered something that completely changed my business (and my life)...</p>
            
            <div class="highlight">
                <p><strong>Grant writing.</strong></p>
            </div>
            
            <p>Now, before you say "Wait, what? Grant writing?!" hear me out...</p>
            
            <p>Grant writing is one of the most overlooked high-ticket service opportunities available right now. Here's why:</p>
            
            <ol>
                <li>Organizations are DESPERATE for this service (there's over $700 billion in grant funding available annually)</li>
                <li>They're happy to pay $3,000-$5,000 per grant application (because they're trying to secure much larger amounts)</li>
                <li>There's virtually NO competition compared to marketing, copywriting, web design, etc.</li>
                <li>You can learn the basics quickly (especially with the right tools)</li>
                <li>It creates PREDICTABLE income through retainer relationships</li>
            </ol>
            
            <p>The best part? With new AI tools, you can deliver exceptional results even if you have zero experience with grant writing.</p>
            
            <p>I'm hosting a free masterclass this Saturday (May 3rd at 2:00 PM EST) where I'll show you exactly how to build a $10K+/month grant writing business from scratch.</p>
            
            <p>You'll discover:</p>
            
            <ul>
                <li>How to position yourself as a grant writing expert (even if you're starting from zero)</li>
                <li>The exact client acquisition system that consistently brings in high-paying clients</li>
                <li>How to use AI to write winning grant applications in a fraction of the time</li>
                <li>The monthly retainer model that creates predictable $3K-$5K/month income streams</li>
                <li>Real case studies of people who've built successful grant writing businesses in 90 days or less</li>
            </ul>
            
            <p>If you're looking for a high-ticket service that's in high demand, has low competition, and can create predictable income, this is for you.</p>
            
            <div style="text-align: center;">
                <a href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3" class="cta-button">REGISTER NOW</a>
            </div>
            
            <p>To your success,<br>
            [Your Name]</p>
            
            <div class="ps">
                <p>P.S. Even if you can't make it live, register anyway and I'll send you the replay. But live attendees will get access to our AI Grant Builder tool for 7 days, so try to make it if you can!</p>
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
                  Day 1 - Morning
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
                  <li><strong>Address pain points</strong> that freelancers and agency owners experience</li>
                  <li><strong>Position grant writing</strong> as a solution to these common problems</li>
                  <li><strong>Introduce the concept</strong> of grant writing as a high-ticket service</li>
                  <li><strong>Highlight the benefits</strong> compared to traditional freelance services</li>
                  <li><strong>Create curiosity</strong> about the masterclass</li>
                </ul>
                
                <p>The email uses language and references that resonate with freelancers and agency owners who are struggling with common issues like client acquisition, scope creep, and unpredictable income. It positions grant writing as a solution to these problems without requiring deep technical knowledge of grant writing itself.</p>
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
