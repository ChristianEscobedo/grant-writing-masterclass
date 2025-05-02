"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function AttendeeEmail2Page() {
  const [copied, setCopied] = useState(false);
  const [htmlCopied, setHtmlCopied] = useState(false);

  const emailSubject = "The #1 Mistake New Grant Writers Make (And How to Avoid It)";

  const emailContent = `Hey there,

I hope you've had a chance to watch the Grant Writing Masterclass replay I sent earlier today.

As you're thinking about getting started with grant writing, I wanted to share something important with you...

The #1 mistake I see new grant writers make is trying to become an "expert" before they land their first client.

Here's what typically happens:

• They spend months studying grant writing
• They take course after course
• They read dozens of books and articles
• They analyze countless sample grants
• They perfect their "process"

And after all that... they STILL don't feel ready to start.

The truth is, you don't need to be a grant writing expert to get started and be successful.

In fact, trying to learn everything before you begin is actually holding you back.

Here's why:

1. Grant writing is a skill you develop through practice, not just study
2. Each funder and organization has unique requirements that you can't prepare for in advance
3. The most valuable learning happens when you're working on real applications
4. AI tools (like our Grant Builder) can fill in the knowledge gaps while you're learning

Let me tell you about Michael...

Michael was a freelance copywriter who was interested in grant writing but had zero experience. He was worried that he needed to spend months learning before he could offer it as a service.

Instead of going down the "study forever" route, he:

1. Identified a specific niche (environmental non-profits)
2. Created a simple offer (grant research + application writing)
3. Used our AI Grant Builder to help with the technical aspects
4. Reached out to 20 organizations using our outreach templates

Within two weeks, he landed his first client - a small environmental non-profit that paid him $2,500 to write a grant application.

Was he nervous? Absolutely.

Did he know everything about grant writing? Not even close.

But he had two things working in his favor:

1. Our AI Grant Builder, which guided him through the process
2. A willingness to learn as he went

That first grant took him about 25 hours to complete (still a solid $100/hour). But more importantly, it gave him the confidence and experience to keep going.

Within 60 days, he had:
• Completed 3 grant applications
• Earned $8,500
• Built his confidence
• Developed a repeatable process

The key was that he started BEFORE he felt ready.

If you're feeling hesitant about getting started with grant writing, I completely understand. It's natural to want to feel fully prepared before putting yourself out there.

That's why I created the 1-on-1 Strategy Session - to give you the confidence, guidance, and tools you need to get started quickly, even if you have zero experience.

During the session, we'll:
• Create a personalized roadmap for your grant writing business
• Identify your ideal client niche based on your background and interests
• Develop your unique positioning strategy
• Map out your first 30/60/90 days for maximum results
• Answer any specific questions you have about getting started

Remember, this special offer ($97 instead of the usual $497) expires tomorrow, so if you're serious about building a successful grant writing business, now is the time to act.

Click here to book your Strategy Session: [BOOK NOW]

To your success,
[Your Name]

P.S. If you're worried about not knowing enough to get started, that's exactly what the AI Grant Builder is designed for. It guides you through the entire process, from research to submission, so you can deliver professional results even while you're learning. You still have 6 days left to explore it: [LOGIN LINK]`;

  const emailHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The #1 Mistake New Grant Writers Make (And How to Avoid It)</title>
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
        .mistake-box {
            background-color: #fee2e2;
            border-left: 4px solid #ef4444;
            padding: 15px;
            margin: 20px 0;
        }
        .solution-box {
            background-color: #dcfce7;
            border-left: 4px solid #22c55e;
            padding: 15px;
            margin: 20px 0;
        }
        .case-study {
            background-color: #f0f4ff;
            border: 1px solid #dbeafe;
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
            <h1>The #1 Mistake New Grant Writers Make (And How to Avoid It)</h1>
            
            <p>Hey there,</p>
            
            <p>I hope you've had a chance to watch the Grant Writing Masterclass replay I sent earlier today.</p>
            
            <p>As you're thinking about getting started with grant writing, I wanted to share something important with you...</p>
            
            <div class="mistake-box">
                <h2 style="color: #ef4444; margin-top: 0;">The #1 mistake I see new grant writers make is trying to become an "expert" before they land their first client.</h2>
                
                <p>Here's what typically happens:</p>
                
                <ul>
                    <li>They spend months studying grant writing</li>
                    <li>They take course after course</li>
                    <li>They read dozens of books and articles</li>
                    <li>They analyze countless sample grants</li>
                    <li>They perfect their "process"</li>
                </ul>
                
                <p>And after all that... they STILL don't feel ready to start.</p>
            </div>
            
            <p>The truth is, you don't need to be a grant writing expert to get started and be successful.</p>
            
            <p>In fact, trying to learn everything before you begin is actually holding you back.</p>
            
            <div class="solution-box">
                <p><strong>Here's why:</strong></p>
                
                <ol>
                    <li>Grant writing is a skill you develop through practice, not just study</li>
                    <li>Each funder and organization has unique requirements that you can't prepare for in advance</li>
                    <li>The most valuable learning happens when you're working on real applications</li>
                    <li>AI tools (like our Grant Builder) can fill in the knowledge gaps while you're learning</li>
                </ol>
            </div>
            
            <div class="case-study">
                <h2 style="margin-top: 0;">Let me tell you about Michael...</h2>
                
                <p>Michael was a freelance copywriter who was interested in grant writing but had zero experience. He was worried that he needed to spend months learning before he could offer it as a service.</p>
                
                <p>Instead of going down the "study forever" route, he:</p>
                
                <ol>
                    <li>Identified a specific niche (environmental non-profits)</li>
                    <li>Created a simple offer (grant research + application writing)</li>
                    <li>Used our AI Grant Builder to help with the technical aspects</li>
                    <li>Reached out to 20 organizations using our outreach templates</li>
                </ol>
                
                <p>Within two weeks, he landed his first client - a small environmental non-profit that paid him $2,500 to write a grant application.</p>
                
                <p>Was he nervous? Absolutely.</p>
                
                <p>Did he know everything about grant writing? Not even close.</p>
                
                <p>But he had two things working in his favor:</p>
                
                <ol>
                    <li>Our AI Grant Builder, which guided him through the process</li>
                    <li>A willingness to learn as he went</li>
                </ol>
                
                <div class="results">
                    <p><strong>Within 60 days, he had:</strong></p>
                    <ul>
                        <li>Completed 3 grant applications</li>
                        <li>Earned $8,500</li>
                        <li>Built his confidence</li>
                        <li>Developed a repeatable process</li>
                    </ul>
                </div>
                
                <p>The key was that he started BEFORE he felt ready.</p>
            </div>
            
            <p>If you're feeling hesitant about getting started with grant writing, I completely understand. It's natural to want to feel fully prepared before putting yourself out there.</p>
            
            <p>That's why I created the 1-on-1 Strategy Session - to give you the confidence, guidance, and tools you need to get started quickly, even if you have zero experience.</p>
            
            <div class="offer-box">
                <h2 style="margin-top: 0;">1-on-1 Strategy Session</h2>
                
                <p>During the session, we'll:</p>
                
                <ul>
                    <li>Create a personalized roadmap for your grant writing business</li>
                    <li>Identify your ideal client niche based on your background and interests</li>
                    <li>Develop your unique positioning strategy</li>
                    <li>Map out your first 30/60/90 days for maximum results</li>
                    <li>Answer any specific questions you have about getting started</li>
                </ul>
                
                <p>Remember, this special offer (<span class="strike">$497</span> $97) expires tomorrow, so if you're serious about building a successful grant writing business, now is the time to act.</p>
                
                <div style="text-align: center;">
                    <a href="#" class="cta-button">BOOK YOUR STRATEGY SESSION</a>
                </div>
            </div>
            
            <p>To your success,<br>
            [Your Name]</p>
            
            <div class="ps">
                <p>P.S. If you're worried about not knowing enough to get started, that's exactly what the AI Grant Builder is designed for. It guides you through the entire process, from research to submission, so you can deliver professional results even while you're learning. You still have 6 days left to explore it: <a href="#">LOGIN HERE</a></p>
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
                  Day 1 - Evening
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
                  <li><strong>Address the biggest objection</strong> that beginners have (not feeling ready/qualified)</li>
                  <li><strong>Reframe the learning process</strong> to emphasize action over study</li>
                  <li><strong>Provide a relatable case study</strong> of someone who started without experience</li>
                  <li><strong>Position AI as the solution</strong> to the knowledge gap</li>
                  <li><strong>Reinforce the Strategy Session offer</strong> with increased urgency</li>
                </ul>
                
                <p>The email uses a problem-solution format to directly address the fear of not being qualified enough to start. By sharing Michael's story (a copywriter with no grant writing experience), it creates a relatable example that shows the path from complete beginner to success. The emphasis on AI as a support tool helps reduce the perceived learning curve and makes starting feel more accessible.</p>
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
