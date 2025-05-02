"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Day1EveningEmailPage() {
  const alternativeSubjects = [
    "The $250K opportunity most grant writers are missing in 2025",
    "Why 2025 is the perfect time to start your grant writing business",
    "The untapped grant writing opportunity that's exploding right now"
  ];

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
              href="/email-attendees"
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
            className="bg-white dark:bg-neutral-900 rounded-xl p-8 shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 mb-8"
          >
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2 text-neutral-800 dark:text-neutral-200">Alternative Subject Lines</h2>
              <ul className="space-y-2">
                {alternativeSubjects.map((subject, index) => (
                  <li key={index} className="bg-neutral-50 dark:bg-neutral-800 p-3 rounded-md text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                    {subject}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">From: Grant Writer AI</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">To: [Attendee]</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Day 1 - Evening</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">The $250K opportunity most grant writers are missing in 2025</h1>
            </div>

            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p>Hey [First Name],</p>
              
              <p>Earlier today, I sent you access to our Grant Builder AI platform as a thank you for attending our masterclass.</p>
              
              <p>I hope you've had a chance to log in and explore the system. If not, I encourage you to do so soon — your access expires in just 6 days!</p>
              
              <p>But today, I want to talk about something that's been on my mind lately...</p>
              
              <h2>The Perfect Storm for AI-Powered Grant Writers in 2025</h2>
              
              <p>We're currently witnessing a unique convergence of factors that's creating an unprecedented opportunity for grant writers who leverage AI:</p>
              
              <ol>
                <li><strong>Increased Funding Availability</strong> - Government, non-profit, and private funding sources have dramatically expanded their grant programs in recent years. There's more money available than ever before.</li>
                <li><strong>Desperate Need for Funding</strong> - Small businesses, non-profits, and local organizations are struggling in the current economic climate and actively seeking funding solutions.</li>
                <li><strong>Shortage of Qualified Grant Writers</strong> - Traditional grant writing is time-consuming and requires specialized knowledge, creating a significant skills gap in the market.</li>
                <li><strong>AI Technology Breakthrough</strong> - Our Grant Builder AI has fundamentally changed what's possible, allowing you to produce high-quality grant applications in a fraction of the time.</li>
              </ol>
              
              <p>This combination of factors has created what I call a "perfect storm" of opportunity for those who position themselves as AI-powered grant writing experts in 2025.</p>
              
              <h2>The Pain of Missing This Opportunity</h2>
              
              <p>I've been in the online business world for over a decade, and I've seen opportunities come and go. Some of the most painful professional regrets come from missing a clear opportunity when it presents itself.</p>
              
              <p>Think about it:</p>
              
              <ul>
                <li>Remember when people could buy Bitcoin for under $100?</li>
                <li>Remember when you could start a YouTube channel and grow to millions of subscribers in months?</li>
                <li>Remember when you could buy domain names for $10 that later sold for millions?</li>
              </ul>
              
              <p>The people who acted on these opportunities when they first emerged are the ones who reaped the biggest rewards.</p>
              
              <p>I believe we're at a similar inflection point with AI-powered grant writing.</p>
              
              <p>The window to establish yourself as an expert in this field is open right now, but it won't stay open forever. As more people discover this opportunity, competition will increase, and the early adopter advantage will diminish.</p>
              
              <h2>The $250K Opportunity Most Grant Writers Are Missing</h2>
              
              <p>Most grant writers focus exclusively on writing individual grants for clients. They charge $3K-$5K per grant and move on to the next client.</p>
              
              <p>But there's a much bigger opportunity they're missing: <strong>the monthly retainer model</strong>.</p>
              
              <p>Here's how it works:</p>
              
              <p>Instead of charging per grant, you offer a comprehensive grant funding service on a monthly retainer basis. You continuously identify grant opportunities, prepare applications, and manage the entire funding process for your clients.</p>
              
              <p>This approach has several massive advantages:</p>
              
              <ol>
                <li><strong>Predictable Monthly Income</strong> - No more feast-or-famine cycles. You know exactly how much you'll earn each month.</li>
                <li><strong>Higher Lifetime Value</strong> - A client on a $2,500/month retainer for a year is worth $30,000 — far more than a single $5,000 grant project.</li>
                <li><strong>Deeper Client Relationships</strong> - You become a trusted advisor rather than a one-time service provider.</li>
                <li><strong>Scalable Business Model</strong> - With our Grant Builder AI, you can efficiently manage multiple retainer clients simultaneously.</li>
              </ol>
              
              <p>With just 10 clients on a $2,500/month retainer, you're generating $25,000 per month or $300,000 per year. And that's just the beginning.</p>
              
              <p>This is the model that our most successful students are using to build six-figure grant writing businesses in record time.</p>
              
              <h2>How to Capitalize on This Opportunity</h2>
              
              <p>If you're serious about building a successful grant writing business in 2025, here are the steps you need to take:</p>
              
              <ol>
                <li><strong>Master the Grant Builder AI platform</strong> - This is your unfair advantage. Spend time exploring all its features during your 7-day access period.</li>
                <li><strong>Identify your niche</strong> - Focus on a specific industry or type of organization where you can become the go-to grant writing expert.</li>
                <li><strong>Develop your service offerings</strong> - Create both project-based and retainer packages to maximize your income potential.</li>
                <li><strong>Build your client acquisition system</strong> - Implement a reliable method for finding and closing high-ticket clients.</li>
                <li><strong>Scale with systems and automation</strong> - Use our tools and templates to efficiently manage multiple clients.</li>
              </ol>
              
              <p>This might seem overwhelming, but you don't have to figure it all out on your own.</p>
              
              <p><strong>→ <a href="https://calendly.com/grantbuilderai/strategy" className="text-blue-600 dark:text-blue-400 font-medium">Book your 1:1 Grant Business Strategy Call</a></strong> and we'll help you create a personalized roadmap for your grant writing business.</p>
              
              <p>During this call, we'll address your specific situation, answer your questions, and determine if our advanced training and support would be a good fit for your goals.</p>
              
              <p>Remember, these calls are completely free, but they're limited to masterclass attendees and spots are filling quickly.</p>
              
              <p>I'm looking forward to connecting with you and helping you build a thriving grant writing business in 2025.</p>
              
              <p>To your success,</p>
              
              <p>[Your Name]<br />
              Grant Writer AI</p>
              
              <p>P.S. Tomorrow, I'll be sharing a detailed breakdown of how to land your first $3K-$5K grant writing client this month, even if you have zero experience. Keep an eye on your inbox!</p>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/emails/html-attendees/day1-evening.html"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              target="_blank"
            >
              View HTML Version
            </Button>
            
            <Button
              as="a"
              href="/emails/html-attendees/day1-evening.html"
              download="day1-evening.html"
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <IconDownload className="h-4 w-4 mr-2" />
              Download HTML
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
