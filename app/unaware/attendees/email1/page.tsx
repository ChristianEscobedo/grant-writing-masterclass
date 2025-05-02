"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function AttendeeEmail1Page() {
  const [copied, setCopied] = useState(false);
  const [htmlCopied, setHtmlCopied] = useState(false);

  const emailSubject = "Your Grant Writing Masterclass Replay + Next Steps";

  const emailContent = `Hey there,

Thank you so much for attending the Grant Writing Masterclass yesterday! I hope you found it valuable and eye-opening.

As promised, here's the replay link so you can review any sections you found particularly helpful: [REPLAY LINK]

(The replay will be available for the next 7 days only, so make sure to watch it soon!)

I also wanted to highlight the key takeaways from the masterclass in case you want a quick refresher:

1️⃣ The Grant Writing Opportunity:
• $700 billion in grant funding available annually
• Organizations willing to pay $3K-$5K per application
• Minimal competition compared to other freelance services
• Predictable income through retainer relationships

2️⃣ The Client Acquisition System:
• How to identify organizations actively seeking funding
• The exact outreach templates that get 30%+ response rates
• The qualification process that ensures you only talk to serious buyers
• The high-ticket closing framework that makes $3K-$5K fees a no-brainer

3️⃣ The AI-Powered Grant Writing Process:
• How to use AI to write compelling narratives
• Creating detailed budgets with proper justifications
• Developing evaluation plans with measurable outcomes
• Crafting sustainability strategies that funders love

4️⃣ The Monthly Retainer Model:
• How to structure $2K-$3K monthly retainers
• The exact services to include (and what to exclude)
• How to demonstrate ongoing value
• The renewal strategy that keeps clients for 12+ months

I know that starting something new can feel overwhelming, especially if you've never written a grant before.

That's why I've created a special opportunity for those who are serious about building a successful grant writing business.

I'm offering a limited number of 1-on-1 Strategy Sessions where we'll:

• Create a personalized roadmap for your grant writing business
• Identify your ideal client niche based on your background and interests
• Develop your unique positioning strategy
• Map out your first 30/60/90 days for maximum results
• Answer any specific questions you have about getting started

These sessions are normally $497, but as a thank you for attending the masterclass, I'm offering them for just $97 for the next 48 hours.

If you're ready to take the next step and get personalized guidance on building your grant writing business, click here to book your Strategy Session: [BOOK NOW]

To your success,
[Your Name]

P.S. Remember, you also have access to our AI Grant Builder tool for the next 7 days. Make sure to log in and explore how it can help you write winning grant applications even if you're just getting started: [LOGIN LINK]`;

  const emailHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Grant Writing Masterclass Replay + Next Steps</title>
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
        .section {
            background-color: #f0f4ff;
            border-left: 4px solid #1a56db;
            padding: 15px;
            margin: 20px 0;
        }
        .section-number {
            display: inline-block;
            width: 30px;
            height: 30px;
            background-color: #1a56db;
            color: white;
            border-radius: 50%;
            text-align: center;
            line-height: 30px;
            font-weight: bold;
            margin-right: 10px;
        }
        .section-title {
            font-weight: bold;
            font-size: 18px;
            display: inline-block;
            vertical-align: middle;
        }
        .offer-box {
            background-color: #f9f9f9;
            border: 1px solid #eeeeee;
            border-radius: 5px;
            padding: 20px;
            margin: 20px 0;
        }
        .price {
            font-size: 24px;
            font-weight: bold;
            color: #1a56db;
            margin: 10px 0;
        }
        .strike {
            text-decoration: line-through;
            color: #999999;
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
            <h1>Your Grant Writing Masterclass Replay + Next Steps</h1>
            
            <p>Hey there,</p>
            
            <p>Thank you so much for attending the Grant Writing Masterclass yesterday! I hope you found it valuable and eye-opening.</p>
            
            <p>As promised, here's the replay link so you can review any sections you found particularly helpful:</p>
            
            <div style="text-align: center;">
                <a href="#" class="cta-button">WATCH REPLAY</a>
            </div>
            
            <p><em>(The replay will be available for the next 7 days only, so make sure to watch it soon!)</em></p>
            
            <p>I also wanted to highlight the key takeaways from the masterclass in case you want a quick refresher:</p>
            
            <div class="section">
                <div>
                    <span class="section-number">1</span>
                    <span class="section-title">The Grant Writing Opportunity:</span>
                </div>
                <ul>
                    <li>$700 billion in grant funding available annually</li>
                    <li>Organizations willing to pay $3K-$5K per application</li>
                    <li>Minimal competition compared to other freelance services</li>
                    <li>Predictable income through retainer relationships</li>
                </ul>
            </div>
            
            <div class="section">
                <div>
                    <span class="section-number">2</span>
                    <span class="section-title">The Client Acquisition System:</span>
                </div>
                <ul>
                    <li>How to identify organizations actively seeking funding</li>
                    <li>The exact outreach templates that get 30%+ response rates</li>
                    <li>The qualification process that ensures you only talk to serious buyers</li>
                    <li>The high-ticket closing framework that makes $3K-$5K fees a no-brainer</li>
                </ul>
            </div>
            
            <div class="section">
                <div>
                    <span class="section-number">3</span>
                    <span class="section-title">The AI-Powered Grant Writing Process:</span>
                </div>
                <ul>
                    <li>How to use AI to write compelling narratives</li>
                    <li>Creating detailed budgets with proper justifications</li>
                    <li>Developing evaluation plans with measurable outcomes</li>
                    <li>Crafting sustainability strategies that funders love</li>
                </ul>
            </div>
            
            <div class="section">
                <div>
                    <span class="section-number">4</span>
                    <span class="section-title">The Monthly Retainer Model:</span>
                </div>
                <ul>
                    <li>How to structure $2K-$3K monthly retainers</li>
                    <li>The exact services to include (and what to exclude)</li>
                    <li>How to demonstrate ongoing value</li>
                    <li>The renewal strategy that keeps clients for 12+ months</li>
                </ul>
            </div>
            
            <p>I know that starting something new can feel overwhelming, especially if you've never written a grant before.</p>
            
            <p>That's why I've created a special opportunity for those who are serious about building a successful grant writing business.</p>
            
            <div class="offer-box">
                <h2 style="margin-top: 0;">1-on-1 Strategy Session</h2>
                
                <p>I'm offering a limited number of 1-on-1 Strategy Sessions where we'll:</p>
                
                <ul>
                    <li>Create a personalized roadmap for your grant writing business</li>
                    <li>Identify your ideal client niche based on your background and interests</li>
                    <li>Develop your unique positioning strategy</li>
                    <li>Map out your first 30/60/90 days for maximum results</li>
                    <li>Answer any specific questions you have about getting started</li>
                </ul>
                
                <p>These sessions are normally <span class="strike">$497</span>, but as a thank you for attending the masterclass, I'm offering them for just:</p>
                
                <div class="price">$97</div>
                
                <p><strong>This special offer expires in 48 hours!</strong></p>
                
                <div style="text-align: center;">
                    <a href="#" class="cta-button">BOOK YOUR STRATEGY SESSION</a>
                </div>
            </div>
            
            <p>To your success,<br>
            [Your Name]</p>
            
            <div class="ps">
                <p>P.S. Remember, you also have access to our AI Grant Builder tool for the next 7 days. Make sure to log in and explore how it can help you write winning grant applications even if you're just getting started: <a href="#">LOGIN HERE</a></p>
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
              href="/unaware/attendees"
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
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded">
                  Post-Event
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                  {emailSubject}
                </h1>
                <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Low Sophistication Attendees (New to Grant Writing)
                </div>
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none mb-6">
                <h3>Email Strategy</h3>
                <p>This email is designed to:</p>
                
                <ul>
                  <li><strong>Provide immediate value</strong> with the replay link and key takeaways</li>
                  <li><strong>Reinforce the opportunity</strong> by summarizing the main points from the masterclass</li>
                  <li><strong>Address the overwhelm</strong> that beginners often feel after learning something new</li>
                  <li><strong>Offer a logical next step</strong> with the 1-on-1 Strategy Session</li>
                  <li><strong>Create urgency</strong> with limited-time offers (replay access and discounted session)</li>
                </ul>
                
                <p>The email uses a structured format with numbered sections to make the information easy to digest for beginners. It acknowledges the potential feeling of overwhelm and positions the Strategy Session as the solution, with a significant discount to make it more accessible.</p>
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
