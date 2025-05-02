"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function NonprofitEmail1Page() {
  const [copied, setCopied] = useState(false);
  const [htmlCopied, setHtmlCopied] = useState(false);

  const emailSubject = "Struggling to Secure Grant Funding? Here's Why 75% of Non-Profits Are Missing Out...";

  const emailContent = `Hi there,

If your organization is like most non-profits I work with, you're probably facing a familiar challenge:

You know there's grant funding available for organizations like yours, but securing it feels like trying to solve a puzzle with missing pieces.

You're not alone. According to our research of over 1,000 non-profit organizations:

• 75% of grant applications are rejected without ever reaching the final review stage
• The average non-profit spends 15-20 hours on each application
• Most organizations have a success rate of less than 10%
• Even experienced grant writers often miss critical elements that funders are looking for

That's a lot of wasted time and missed opportunities.

But here's the good news: The organizations that consistently secure funding aren't necessarily larger or more established than yours. They simply understand what funders are actually looking for (which is often different from what the application guidelines suggest).

After analyzing thousands of successful and unsuccessful grant applications across various sectors, we've identified the three critical factors that separate funded applications from rejected ones:

1. Alignment with funder priorities (beyond what's stated in the guidelines)
2. Compelling outcome metrics that resonate with decision-makers
3. Strategic narrative structure that addresses unstated objections

Most organizations focus exclusively on meeting the stated requirements, which is necessary but not sufficient for success.

The truth is, there's a science to grant writing that few organizations have mastered. But those that do consistently secure 25-30% of the grants they apply for (3x the average success rate).

I'm hosting a free masterclass this Saturday (May 3rd at 2:00 PM EST) where I'll reveal:

• The 5 most common mistakes that get applications rejected immediately
• How to identify the "hidden priorities" of any funder
• The exact structure of a winning grant narrative (with real examples)
• How to create compelling metrics that funders can't ignore
• The new AI tools that can dramatically improve your applications

This isn't theoretical advice - it's based on our work helping organizations secure over $50 million in grant funding, with a success rate of 25% (well above the industry average).

If you're tired of spending countless hours on applications that go nowhere, this masterclass will show you a better approach.

Click here to save your spot for Saturday's masterclass: [REGISTER NOW]

To your organization's success,
[Your Name]

P.S. Even if you can't make it live, register anyway and I'll send you the replay. But live attendees will get access to our Grant Opportunity Database with 50+ active funding opportunities, so try to make it if you can!`;

  const emailHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Struggling to Secure Grant Funding? Here's Why 75% of Non-Profits Are Missing Out...</title>
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
        .stats {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 5px;
            padding: 15px;
            margin: 20px 0;
        }
        .cta-button {
            display: inline-block;
            background-color: #059669;
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
            <h1>Struggling to Secure Grant Funding? Here's Why 75% of Non-Profits Are Missing Out...</h1>
            
            <p>Hi there,</p>
            
            <p>If your organization is like most non-profits I work with, you're probably facing a familiar challenge:</p>
            
            <div class="highlight">
                <p>You know there's grant funding available for organizations like yours, but securing it feels like trying to solve a puzzle with missing pieces.</p>
            </div>
            
            <p>You're not alone. According to our research of over 1,000 non-profit organizations:</p>
            
            <div class="stats">
                <ul>
                    <li>75% of grant applications are rejected without ever reaching the final review stage</li>
                    <li>The average non-profit spends 15-20 hours on each application</li>
                    <li>Most organizations have a success rate of less than 10%</li>
                    <li>Even experienced grant writers often miss critical elements that funders are looking for</li>
                </ul>
            </div>
            
            <p>That's a lot of wasted time and missed opportunities.</p>
            
            <p>But here's the good news: The organizations that consistently secure funding aren't necessarily larger or more established than yours. They simply understand what funders are actually looking for (which is often different from what the application guidelines suggest).</p>
            
            <p>After analyzing thousands of successful and unsuccessful grant applications across various sectors, we've identified the three critical factors that separate funded applications from rejected ones:</p>
            
            <ol>
                <li><strong>Alignment with funder priorities</strong> (beyond what's stated in the guidelines)</li>
                <li><strong>Compelling outcome metrics</strong> that resonate with decision-makers</li>
                <li><strong>Strategic narrative structure</strong> that addresses unstated objections</li>
            </ol>
            
            <p>Most organizations focus exclusively on meeting the stated requirements, which is necessary but not sufficient for success.</p>
            
            <div class="highlight">
                <p>The truth is, there's a science to grant writing that few organizations have mastered. But those that do consistently secure 25-30% of the grants they apply for (3x the average success rate).</p>
            </div>
            
            <p>I'm hosting a free masterclass this Saturday (May 3rd at 2:00 PM EST) where I'll reveal:</p>
            
            <ul>
                <li>The 5 most common mistakes that get applications rejected immediately</li>
                <li>How to identify the "hidden priorities" of any funder</li>
                <li>The exact structure of a winning grant narrative (with real examples)</li>
                <li>How to create compelling metrics that funders can't ignore</li>
                <li>The new AI tools that can dramatically improve your applications</li>
            </ul>
            
            <p>This isn't theoretical advice - it's based on our work helping organizations secure over $50 million in grant funding, with a success rate of 25% (well above the industry average).</p>
            
            <p>If you're tired of spending countless hours on applications that go nowhere, this masterclass will show you a better approach.</p>
            
            <div style="text-align: center;">
                <a href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3" class="cta-button">REGISTER NOW</a>
            </div>
            
            <p>To your organization's success,<br>
            [Your Name]</p>
            
            <div class="ps">
                <p>P.S. Even if you can't make it live, register anyway and I'll send you the replay. But live attendees will get access to our Grant Opportunity Database with 50+ active funding opportunities, so try to make it if you can!</p>
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
              href="/nonprofits"
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
                  Non-Profit Organizations
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                  {emailSubject}
                </h1>
                <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Non-Profit Organizations & NGOs Seeking Grant Funding
                </div>
              </div>

              <div className="prose prose-emerald dark:prose-invert max-w-none mb-6">
                <h3>Email Strategy</h3>
                <p>This email is designed to:</p>
                
                <ul>
                  <li><strong>Address pain points</strong> that non-profit organizations experience with grant applications</li>
                  <li><strong>Establish credibility</strong> with research and statistics</li>
                  <li><strong>Highlight the gap</strong> between typical and successful grant applications</li>
                  <li><strong>Position the masterclass</strong> as the solution to their funding challenges</li>
                  <li><strong>Create urgency</strong> with a limited-time bonus offer</li>
                </ul>
                
                <p>The email uses statistics and research to establish the problem (75% rejection rate, 10% average success rate) and then positions the masterclass as the solution to achieving a much higher success rate (25-30%). It addresses the common frustration of spending significant time on applications that don't get funded and promises to reveal the "hidden" factors that influence funding decisions.</p>
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
