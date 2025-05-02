"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function NonprofitAttendeeEmail2Page() {
  const [copied, setCopied] = useState(false);
  const [htmlCopied, setHtmlCopied] = useState(false);

  const emailSubject = "The #1 Mistake Non-Profits Make After Learning Grant Strategies";

  const emailContent = `Hi there,

This morning, I sent you the replay of the Grant Writing Masterclass along with the implementation guide.

But there's something important we need to discuss...

After working with hundreds of non-profit organizations, I've noticed a concerning pattern that I call the "Knowledge-Implementation Gap."

Here's what typically happens:

1. Organizations attend a workshop or masterclass on grant writing
2. They get excited about the strategies they learn
3. They download the resources and materials
4. They fully intend to implement what they've learned
5. But then... nothing happens

Three months later, they're still using the same approach to grant writing, with the same disappointing results.

Why does this happen? It's not because the strategies don't work or because the organizations don't care. It's because of three common barriers:

𝗕𝗮𝗿𝗿𝗶𝗲𝗿 #𝟭: 𝗧𝗵𝗲 "𝗪𝗵𝗲𝗻 𝗜 𝗛𝗮𝘃𝗲 𝗧𝗶𝗺𝗲" 𝗦𝘆𝗻𝗱𝗿𝗼𝗺𝗲

Many organizations put implementation on the "when I have time" list, which means it never happens. The daily demands of running a non-profit always take precedence over implementing new strategies.

𝗕𝗮𝗿𝗿𝗶𝗲𝗿 #𝟮: 𝗧𝗵𝗲 𝗣𝗲𝗿𝗳𝗲𝗰𝘁𝗶𝗼𝗻 𝗣𝗮𝗿𝗮𝗹𝘆𝘀𝗶𝘀

Some organizations get stuck trying to implement everything perfectly. They spend weeks planning the "perfect" implementation, which often leads to no implementation at all.

𝗕𝗮𝗿𝗿𝗶𝗲𝗿 #𝟯: 𝗧𝗵𝗲 𝗖𝗼𝗻𝗳𝗶𝗱𝗲𝗻𝗰𝗲 𝗚𝗮𝗽

Many organizations doubt their ability to implement the strategies correctly, so they hesitate to start. They worry they'll miss something important or make a mistake that costs them funding opportunities.

The good news is that these barriers are completely normal and can be overcome with the right approach.

Here's what I recommend:

1. 𝗦𝗰𝗵𝗲𝗱𝘂𝗹𝗲 𝗜𝗺𝗽𝗹𝗲𝗺𝗲𝗻𝘁𝗮𝘁𝗶𝗼𝗻 𝗧𝗶𝗺𝗲: Block off 2 hours this week specifically for implementing one strategy from the guide. Put it on your calendar and treat it as non-negotiable.

2. 𝗦𝘁𝗮𝗿𝘁 𝗦𝗺𝗮𝗹𝗹: Don't try to overhaul your entire grant writing process at once. Pick one strategy (I recommend the funder research process) and implement just that.

3. 𝗘𝗺𝗯𝗿𝗮𝗰𝗲 𝗜𝗺𝗽𝗲𝗿𝗳𝗲𝗰𝘁 𝗔𝗰𝘁𝗶𝗼𝗻: It's better to implement a strategy imperfectly than to not implement it at all. You can always refine your approach later.

Remember, the organizations that see the biggest improvements in their grant success rates aren't necessarily the ones with the most knowledge—they're the ones that actually implement what they learn.

If you're concerned about any of these barriers, I'd love to hear from you. Reply to this email and let me know which barrier resonates most with your organization, and I'll share some specific strategies to help you overcome it.

Also, if you'd like more structured guidance on implementation, don't forget that I'm offering 1-on-1 Grant Strategy Sessions at a special rate of $197 (normally $497) for the next 48 hours.

During this session, we'll create a customized implementation plan that addresses your specific barriers and sets you up for success. You can book your session here: [BOOKING LINK]

To your organization's success,
[Your Name]

P.S. If you're thinking "I don't have time for implementation right now," consider this: The average non-profit spends 15-20 hours on each grant application. Implementing these strategies can cut that time in half while doubling your success rate. That's a return on investment you can't afford to miss.`;

  const emailHtml = `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The #1 Mistake Non-Profits Make After Learning Grant Strategies</title>
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
        .warning-box {
            background-color: #fef2f2;
            border-left: 4px solid #ef4444;
            padding: 15px;
            margin: 20px 0;
        }
        .barrier {
            background-color: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 5px;
            padding: 15px;
            margin: 15px 0;
        }
        .barrier-title {
            font-weight: bold;
            color: #dc2626;
            margin-bottom: 5px;
        }
        .solution {
            background-color: #f0fdf4;
            border: 1px solid #bbf7d0;
            border-radius: 5px;
            padding: 15px;
            margin: 15px 0;
        }
        .solution-title {
            font-weight: bold;
            color: #059669;
            margin-bottom: 5px;
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
            <h1>The #1 Mistake Non-Profits Make After Learning Grant Strategies</h1>
            
            <p>Hi there,</p>
            
            <p>This morning, I sent you the replay of the Grant Writing Masterclass along with the implementation guide.</p>
            
            <p>But there's something important we need to discuss...</p>
            
            <div class="warning-box">
                <p>After working with hundreds of non-profit organizations, I've noticed a concerning pattern that I call the <strong>"Knowledge-Implementation Gap."</strong></p>
            </div>
            
            <p>Here's what typically happens:</p>
            
            <ol>
                <li>Organizations attend a workshop or masterclass on grant writing</li>
                <li>They get excited about the strategies they learn</li>
                <li>They download the resources and materials</li>
                <li>They fully intend to implement what they've learned</li>
                <li>But then... nothing happens</li>
            </ol>
            
            <p>Three months later, they're still using the same approach to grant writing, with the same disappointing results.</p>
            
            <p>Why does this happen? It's not because the strategies don't work or because the organizations don't care. It's because of three common barriers:</p>
            
            <div class="barrier">
                <div class="barrier-title">Barrier #1: The "When I Have Time" Syndrome</div>
                <p>Many organizations put implementation on the "when I have time" list, which means it never happens. The daily demands of running a non-profit always take precedence over implementing new strategies.</p>
            </div>
            
            <div class="barrier">
                <div class="barrier-title">Barrier #2: The Perfection Paralysis</div>
                <p>Some organizations get stuck trying to implement everything perfectly. They spend weeks planning the "perfect" implementation, which often leads to no implementation at all.</p>
            </div>
            
            <div class="barrier">
                <div class="barrier-title">Barrier #3: The Confidence Gap</div>
                <p>Many organizations doubt their ability to implement the strategies correctly, so they hesitate to start. They worry they'll miss something important or make a mistake that costs them funding opportunities.</p>
            </div>
            
            <div class="highlight">
                <p>The good news is that these barriers are completely normal and can be overcome with the right approach.</p>
            </div>
            
            <p>Here's what I recommend:</p>
            
            <div class="solution">
                <div class="solution-title">1. Schedule Implementation Time</div>
                <p>Block off 2 hours this week specifically for implementing one strategy from the guide. Put it on your calendar and treat it as non-negotiable.</p>
            </div>
            
            <div class="solution">
                <div class="solution-title">2. Start Small</div>
                <p>Don't try to overhaul your entire grant writing process at once. Pick one strategy (I recommend the funder research process) and implement just that.</p>
            </div>
            
            <div class="solution">
                <div class="solution-title">3. Embrace Imperfect Action</div>
                <p>It's better to implement a strategy imperfectly than to not implement it at all. You can always refine your approach later.</p>
            </div>
            
            <div class="highlight">
                <p>Remember, the organizations that see the biggest improvements in their grant success rates aren't necessarily the ones with the most knowledge—they're the ones that actually implement what they learn.</p>
            </div>
            
            <p>If you're concerned about any of these barriers, I'd love to hear from you. Reply to this email and let me know which barrier resonates most with your organization, and I'll share some specific strategies to help you overcome it.</p>
            
            <p>Also, if you'd like more structured guidance on implementation, don't forget that I'm offering 1-on-1 Grant Strategy Sessions at a special rate of $197 (normally $497) for the next 48 hours.</p>
            
            <p>During this session, we'll create a customized implementation plan that addresses your specific barriers and sets you up for success.</p>
            
            <div style="text-align: center;">
                <a href="#" class="cta-button">BOOK YOUR STRATEGY SESSION</a>
            </div>
            
            <p>To your organization's success,<br>
            [Your Name]</p>
            
            <div class="ps">
                <p>P.S. If you're thinking "I don't have time for implementation right now," consider this: The average non-profit spends 15-20 hours on each grant application. Implementing these strategies can cut that time in half while doubling your success rate. That's a return on investment you can't afford to miss.</p>
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
                  Day 1 - Evening
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
                  <li><strong>Address the implementation gap</strong> that often occurs after educational events</li>
                  <li><strong>Identify specific barriers</strong> that prevent organizations from taking action</li>
                  <li><strong>Provide practical solutions</strong> to overcome these barriers</li>
                  <li><strong>Create urgency</strong> around implementation</li>
                  <li><strong>Position the Strategy Session</strong> as a solution for those who need more guidance</li>
                </ul>
                
                <p>The email tackles the common problem of information without implementation. By naming and explaining the three main barriers (time, perfectionism, and confidence), it helps organizations recognize their own patterns and feel understood. The solutions are practical and actionable, focusing on small steps rather than overwhelming changes. The P.S. creates urgency by framing implementation as a time-saving investment rather than a time-consuming task.</p>
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
