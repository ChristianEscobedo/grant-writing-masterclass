"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function NonprofitEmail2Page() {
  const [copied, setCopied] = useState(false);
  const [htmlCopied, setHtmlCopied] = useState(false);

  const emailSubject = "How This Small Non-Profit Secured $375K in Grants (Using a Method Anyone Can Replicate)";

  const emailContent = `Hi there,

Earlier today, I mentioned that most non-profits struggle with grant applications, with success rates hovering around 10%.

But what about the organizations that consistently secure funding? What are they doing differently?

Let me tell you about Community Roots, a small environmental non-profit with just 3 full-time staff members.

When I first met their Executive Director, Sarah, they were in a familiar situation:

• They had applied for 14 grants in the previous year
• They had secured only 1 grant for $25,000
• They were spending 15-20 hours on each application
• Their team was burning out from the constant rejection

Sarah was frustrated because they were doing important work in their community, but they couldn't secure the funding they needed to expand their impact.

"We're following all the guidelines," she told me. "We're answering every question. We're submitting everything on time. But we keep getting rejected, and the funders rarely tell us why."

This is a common experience. Most funders don't provide detailed feedback on rejected applications, leaving organizations in the dark about what they're doing wrong.

After analyzing Community Roots' previous applications, we identified several critical issues:

1. Their narrative wasn't aligned with the funders' unstated priorities
2. Their outcome metrics weren't compelling to decision-makers
3. Their budget justifications lacked the specificity funders were looking for
4. Their sustainability plan didn't address key concerns

We worked with them to implement a new approach to grant writing, focusing on:

• Researching funders beyond their published guidelines
• Restructuring their narrative to address unstated priorities
• Developing more compelling outcome metrics
• Creating stronger budget justifications
• Building a more convincing sustainability plan

The results were remarkable:

• In the next 12 months, they applied for 12 grants
• They secured 5 grants totaling $375,000
• Their success rate jumped from 7% to 42%
• They reduced their application time by 40%

The most important part? They didn't change their programs or hire new staff. They simply changed how they communicated their work to funders.

And here's the thing - the approach they used isn't complicated or mysterious. It's a systematic method that any organization can implement, regardless of size or sector.

In our free masterclass this Saturday (May 3rd at 2:00 PM EST), I'll walk through exactly how Community Roots transformed their grant success rate, including:

• The exact research process they used to uncover funders' unstated priorities
• The narrative structure that dramatically improved their applications
• The outcome metric framework that resonated with decision-makers
• The budget justification approach that eliminated common objections
• The sustainability plan template that addressed funders' concerns

If you're tired of rejection and ready to dramatically improve your grant success rate, this masterclass will give you the tools you need.

Click here to save your spot for Saturday's masterclass: [REGISTER NOW]

To your organization's success,
[Your Name]

P.S. Community Roots isn't an outlier. We've helped dozens of small and mid-sized non-profits achieve similar results using this same approach. Join us on Saturday to learn how you can do the same.`;

  const emailHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How This Small Non-Profit Secured $375K in Grants (Using a Method Anyone Can Replicate)</title>
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
        .story-box {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 5px;
            padding: 20px;
            margin: 20px 0;
        }
        .before {
            background-color: #fee2e2;
            border-left: 4px solid #ef4444;
            padding: 15px;
            margin: 20px 0;
        }
        .after {
            background-color: #dcfce7;
            border-left: 4px solid #22c55e;
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
            <h1>How This Small Non-Profit Secured $375K in Grants (Using a Method Anyone Can Replicate)</h1>
            
            <p>Hi there,</p>
            
            <p>Earlier today, I mentioned that most non-profits struggle with grant applications, with success rates hovering around 10%.</p>
            
            <p>But what about the organizations that consistently secure funding? What are they doing differently?</p>
            
            <div class="story-box">
                <p>Let me tell you about Community Roots, a small environmental non-profit with just 3 full-time staff members.</p>
                
                <p>When I first met their Executive Director, Sarah, they were in a familiar situation:</p>
                
                <div class="before">
                    <ul>
                        <li>They had applied for 14 grants in the previous year</li>
                        <li>They had secured only 1 grant for $25,000</li>
                        <li>They were spending 15-20 hours on each application</li>
                        <li>Their team was burning out from the constant rejection</li>
                    </ul>
                </div>
                
                <p>Sarah was frustrated because they were doing important work in their community, but they couldn't secure the funding they needed to expand their impact.</p>
                
                <p>"We're following all the guidelines," she told me. "We're answering every question. We're submitting everything on time. But we keep getting rejected, and the funders rarely tell us why."</p>
            </div>
            
            <p>This is a common experience. Most funders don't provide detailed feedback on rejected applications, leaving organizations in the dark about what they're doing wrong.</p>
            
            <p>After analyzing Community Roots' previous applications, we identified several critical issues:</p>
            
            <ol>
                <li>Their narrative wasn't aligned with the funders' unstated priorities</li>
                <li>Their outcome metrics weren't compelling to decision-makers</li>
                <li>Their budget justifications lacked the specificity funders were looking for</li>
                <li>Their sustainability plan didn't address key concerns</li>
            </ol>
            
            <p>We worked with them to implement a new approach to grant writing, focusing on:</p>
            
            <ul>
                <li>Researching funders beyond their published guidelines</li>
                <li>Restructuring their narrative to address unstated priorities</li>
                <li>Developing more compelling outcome metrics</li>
                <li>Creating stronger budget justifications</li>
                <li>Building a more convincing sustainability plan</li>
            </ul>
            
            <div class="after">
                <p><strong>The results were remarkable:</strong></p>
                <ul>
                    <li>In the next 12 months, they applied for 12 grants</li>
                    <li>They secured 5 grants totaling $375,000</li>
                    <li>Their success rate jumped from 7% to 42%</li>
                    <li>They reduced their application time by 40%</li>
                </ul>
            </div>
            
            <div class="highlight">
                <p>The most important part? They didn't change their programs or hire new staff. They simply changed how they communicated their work to funders.</p>
            </div>
            
            <p>And here's the thing - the approach they used isn't complicated or mysterious. It's a systematic method that any organization can implement, regardless of size or sector.</p>
            
            <p>In our free masterclass this Saturday (May 3rd at 2:00 PM EST), I'll walk through exactly how Community Roots transformed their grant success rate, including:</p>
            
            <ul>
                <li>The exact research process they used to uncover funders' unstated priorities</li>
                <li>The narrative structure that dramatically improved their applications</li>
                <li>The outcome metric framework that resonated with decision-makers</li>
                <li>The budget justification approach that eliminated common objections</li>
                <li>The sustainability plan template that addressed funders' concerns</li>
            </ul>
            
            <p>If you're tired of rejection and ready to dramatically improve your grant success rate, this masterclass will give you the tools you need.</p>
            
            <div style="text-align: center;">
                <a href="https://livewebinar.com/280-498-675/3837b8c6cb549fb87cbe67d8899630d3" class="cta-button">REGISTER NOW</a>
            </div>
            
            <p>To your organization's success,<br>
            [Your Name]</p>
            
            <div class="ps">
                <p>P.S. Community Roots isn't an outlier. We've helped dozens of small and mid-sized non-profits achieve similar results using this same approach. Join us on Saturday to learn how you can do the same.</p>
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
                  Day 1 - Evening
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
                  <li><strong>Provide social proof</strong> through a relatable case study</li>
                  <li><strong>Show transformation</strong> with clear before and after metrics</li>
                  <li><strong>Address the "is this possible for us?" objection</strong> by featuring a small organization</li>
                  <li><strong>Highlight specific issues</strong> that most organizations face</li>
                  <li><strong>Preview the masterclass content</strong> with specific, valuable takeaways</li>
                </ul>
                
                <p>The email uses a story-based approach to help the reader see themselves in Community Roots' journey. By featuring a small organization with just 3 staff members, it makes the success feel achievable for organizations of any size. The specific metrics (7% to 42% success rate, $375,000 in funding) create both desire and believability. The emphasis that they "didn't change their programs or hire new staff" addresses a common objection that success requires resources they don't have.</p>
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
