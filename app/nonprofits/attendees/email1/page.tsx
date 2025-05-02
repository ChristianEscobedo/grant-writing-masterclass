"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function NonprofitAttendeeEmail1Page() {
  const [copied, setCopied] = useState(false);
  const [htmlCopied, setHtmlCopied] = useState(false);

  const emailSubject = "Your Grant Writing Masterclass Replay + Implementation Guide";

  const emailContent = `Hi there,

Thank you for attending the Grant Writing Masterclass yesterday! It was wonderful to see so many dedicated non-profit leaders committed to improving their grant success rates.

As promised, here's the replay link so you can review any sections you found particularly valuable:

[REPLAY LINK]

The replay will be available for the next 14 days, so I recommend bookmarking this email.

During the masterclass, we covered a lot of information, and I know it can feel overwhelming to figure out what to implement first. To help you take action on what you learned, I've created a step-by-step implementation guide specifically for non-profit organizations.

You can download it here: [IMPLEMENTATION GUIDE LINK]

This guide breaks down the key strategies from the masterclass into manageable action steps, including:

1. How to conduct effective funder research beyond the published guidelines
2. A template for restructuring your grant narratives to address unstated priorities
3. The outcome metric framework that resonates with decision-makers
4. A checklist for creating stronger budget justifications
5. A template for building a more convincing sustainability plan

Many organizations make the mistake of trying to implement everything at once, which can lead to overwhelm and inaction. Instead, I recommend focusing on just one strategy from the guide this week.

In fact, several organizations that attended previous masterclasses saw significant improvements by implementing just one strategy at a time:

• Community Health Partners improved their success rate from 8% to 23% by focusing solely on restructuring their narratives
• Riverfront Conservation Alliance secured a $75,000 grant after implementing the outcome metric framework
• Youth Empowerment Collective landed their first $50,000+ grant after improving their funder research process

If you have any questions about implementing these strategies, simply reply to this email. I personally read and respond to every message.

Also, for those who want more hands-on guidance, I'm offering a limited number of 1-on-1 Grant Strategy Sessions. During this 60-minute call, we'll:

• Review one of your recent grant applications
• Identify specific areas for improvement
• Create a customized implementation plan for your organization
• Answer any questions you have about the strategies from the masterclass

These sessions are normally $497, but as a thank you for attending the masterclass, I'm offering them for just $197 for the next 72 hours.

If you're interested, you can book your session here: [BOOKING LINK]

I'm excited to see how these strategies transform your grant success rate!

To your organization's success,
[Your Name]

P.S. If you're wondering which strategy to implement first, I generally recommend starting with the funder research process (Strategy #1 in the guide). This tends to have the biggest immediate impact on success rates.`;

  const emailHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Grant Writing Masterclass Replay + Implementation Guide</title>
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
            background-color: #059669;
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
            color: #059669;
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
            background-color: #ecfdf5;
            border-left: 4px solid #059669;
            padding: 15px;
            margin: 20px 0;
        }
        .download-box {
            background-color: #f0fdf4;
            border: 1px solid #bbf7d0;
            border-radius: 5px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
        }
        .download-button {
            display: inline-block;
            background-color: #059669;
            color: #ffffff !important;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 5px;
            font-weight: bold;
            margin: 10px 0;
        }
        .replay-box {
            background-color: #eff6ff;
            border: 1px solid #bfdbfe;
            border-radius: 5px;
            padding: 20px;
            margin: 20px 0;
            text-align: center;
        }
        .replay-button {
            display: inline-block;
            background-color: #3b82f6;
            color: #ffffff !important;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 5px;
            font-weight: bold;
            margin: 10px 0;
        }
        .success-stories {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 5px;
            padding: 15px;
            margin: 20px 0;
        }
        .cta-box {
            background-color: #fef2f2;
            border: 1px solid #fee2e2;
            border-radius: 5px;
            padding: 20px;
            margin: 20px 0;
        }
        .cta-button {
            display: inline-block;
            background-color: #dc2626;
            color: #ffffff !important;
            text-decoration: none;
            padding: 12px 25px;
            border-radius: 5px;
            font-weight: bold;
            margin: 10px 0;
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
            <h1>Your Grant Writing Masterclass Replay + Implementation Guide</h1>
            
            <p>Hi there,</p>
            
            <p>Thank you for attending the Grant Writing Masterclass yesterday! It was wonderful to see so many dedicated non-profit leaders committed to improving their grant success rates.</p>
            
            <div class="replay-box">
                <p><strong>As promised, here's the replay link so you can review any sections you found particularly valuable:</strong></p>
                <a href="#" class="replay-button">WATCH REPLAY</a>
                <p><small>The replay will be available for the next 14 days, so I recommend bookmarking this email.</small></p>
            </div>
            
            <p>During the masterclass, we covered a lot of information, and I know it can feel overwhelming to figure out what to implement first. To help you take action on what you learned, I've created a step-by-step implementation guide specifically for non-profit organizations.</p>
            
            <div class="download-box">
                <p><strong>Download your implementation guide here:</strong></p>
                <a href="#" class="download-button">GET YOUR IMPLEMENTATION GUIDE</a>
            </div>
            
            <p>This guide breaks down the key strategies from the masterclass into manageable action steps, including:</p>
            
            <ol>
                <li>How to conduct effective funder research beyond the published guidelines</li>
                <li>A template for restructuring your grant narratives to address unstated priorities</li>
                <li>The outcome metric framework that resonates with decision-makers</li>
                <li>A checklist for creating stronger budget justifications</li>
                <li>A template for building a more convincing sustainability plan</li>
            </ol>
            
            <div class="highlight">
                <p>Many organizations make the mistake of trying to implement everything at once, which can lead to overwhelm and inaction. Instead, I recommend focusing on just one strategy from the guide this week.</p>
            </div>
            
            <p>In fact, several organizations that attended previous masterclasses saw significant improvements by implementing just one strategy at a time:</p>
            
            <div class="success-stories">
                <ul>
                    <li><strong>Community Health Partners</strong> improved their success rate from 8% to 23% by focusing solely on restructuring their narratives</li>
                    <li><strong>Riverfront Conservation Alliance</strong> secured a $75,000 grant after implementing the outcome metric framework</li>
                    <li><strong>Youth Empowerment Collective</strong> landed their first $50,000+ grant after improving their funder research process</li>
                </ul>
            </div>
            
            <p>If you have any questions about implementing these strategies, simply reply to this email. I personally read and respond to every message.</p>
            
            <div class="cta-box">
                <p>Also, for those who want more hands-on guidance, I'm offering a limited number of 1-on-1 Grant Strategy Sessions. During this 60-minute call, we'll:</p>
                
                <ul>
                    <li>Review one of your recent grant applications</li>
                    <li>Identify specific areas for improvement</li>
                    <li>Create a customized implementation plan for your organization</li>
                    <li>Answer any questions you have about the strategies from the masterclass</li>
                </ul>
                
                <p>These sessions are normally $497, but as a thank you for attending the masterclass, I'm offering them for just $197 for the next 72 hours.</p>
                
                <div style="text-align: center;">
                    <a href="#" class="cta-button">BOOK YOUR STRATEGY SESSION</a>
                </div>
            </div>
            
            <p>I'm excited to see how these strategies transform your grant success rate!</p>
            
            <p>To your organization's success,<br>
            [Your Name]</p>
            
            <div class="ps">
                <p>P.S. If you're wondering which strategy to implement first, I generally recommend starting with the funder research process (Strategy #1 in the guide). This tends to have the biggest immediate impact on success rates.</p>
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
              href="/nonprofits/attendees"
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
                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-1 rounded">
                  Post-Event
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                  {emailSubject}
                </h1>
                <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Non-Profit Organizations & NGOs That Attended the Masterclass
                </div>
              </div>

              <div className="prose prose-emerald dark:prose-invert max-w-none mb-6">
                <h3>Email Strategy</h3>
                <p>This email is designed to:</p>
                
                <ul>
                  <li><strong>Deliver immediate value</strong> with the replay link and implementation guide</li>
                  <li><strong>Address the overwhelm</strong> that often follows information-heavy events</li>
                  <li><strong>Provide a clear next step</strong> (implementing one strategy at a time)</li>
                  <li><strong>Offer social proof</strong> through specific success stories</li>
                  <li><strong>Present the Strategy Session</strong> as a natural next step for those who want more help</li>
                </ul>
                
                <p>The email acknowledges that implementing everything from the masterclass can be overwhelming and provides a structured approach to taking action. By recommending that they focus on just one strategy at a time, it makes implementation feel more manageable. The success stories demonstrate that this approach works, showing specific results from organizations that implemented just one strategy. The Strategy Session offer is positioned as optional additional help rather than a requirement for success.</p>
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
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
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
