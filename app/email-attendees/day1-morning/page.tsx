"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Day1MorningEmailPage() {
  const alternativeSubjects = [
    "🎁 [MASTERCLASS ATTENDEE] Your Grant Builder AI access + next steps",
    "Thanks for attending! Here's your Grant Builder AI access (expires in 7 days)",
    "Your next steps to building a $10K/month grant writing business"
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
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Day 1 - Morning</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">🎁 [MASTERCLASS ATTENDEE] Your Grant Builder AI access + next steps</h1>
            </div>

            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p>Hey [First Name],</p>
              
              <p>First of all, I wanted to personally thank you for attending our Grant Writing Masterclass yesterday. Your presence and engagement made it a truly special event!</p>
              
              <p>As promised during the masterclass, here's your exclusive 7-day access to our Grant Builder AI platform:</p>
              
              <p><strong>Your Grant Builder AI Access:</strong><br />
              URL: <a href="https://app.grantbuilderai.com" className="text-blue-600 dark:text-blue-400 font-medium">https://app.grantbuilderai.com</a><br />
              Username: [Your Email]<br />
              Password: Use the "Forgot Password" link to set your password<br />
              <em>Note: Your access expires in 7 days on [Expiration Date]</em></p>
              
              <p>I'm excited to see what you'll accomplish with this powerful tool. Remember, this is the same system that Gwen used to secure over $50 million in grants, including $11 million just last year alone.</p>
              
              <h2>What You Learned in the Masterclass</h2>
              
              <p>We covered a lot of ground yesterday, so I wanted to provide a quick recap of the key points:</p>
              
              <ol>
                <li><strong>The Grant Writing Opportunity in 2025</strong> - How the market has evolved to create unprecedented demand for grant writers who can leverage AI</li>
                <li><strong>The AI Advantage</strong> - How our Grant Builder AI writes 90% of the grant FOR you, making it possible to deliver exceptional results even if you're new to grant writing</li>
                <li><strong>The $10K/Month Business Model</strong> - The exact framework for pricing your services at $3K-$5K per grant or creating monthly retainers</li>
                <li><strong>Client Acquisition</strong> - How to find and close high-ticket clients who are desperate for funding</li>
                <li><strong>Automation & Scaling</strong> - How to use our software to handle multiple clients efficiently</li>
              </ol>
              
              <h2>Your Next Steps</h2>
              
              <p>If you're serious about building a $10K/month grant writing business in 2025, here are the immediate next steps I recommend:</p>
              
              <ol>
                <li><strong>Log into the Grant Builder AI platform</strong> and explore the interface. Try creating your first grant proposal using one of our templates.</li>
                <li><strong>Download the resources</strong> we shared during the masterclass, including the "$500K Grant Proposal Template" and the "Funded Fast" Prospecting Script Pack.</li>
                <li><strong>Book a 1:1 Grant Business Strategy Call</strong> with our team to create a personalized roadmap for your grant writing business.</li>
              </ol>
              
              <p><strong>→ <a href="https://calendly.com/grantbuilderai/strategy" className="text-blue-600 dark:text-blue-400 font-medium">Click here to book your 1:1 Grant Business Strategy Call</a></strong></p>
              
              <p>During this 30-minute call, we'll:</p>
              
              <ul>
                <li>Assess your current skills and experience</li>
                <li>Identify your ideal client niche</li>
                <li>Create a customized action plan to get you to $10K/month</li>
                <li>Answer any specific questions you have about building your grant writing business</li>
                <li>Determine if our advanced training and support would be a good fit for your goals</li>
              </ul>
              
              <p>These calls are completely free, but they're limited to masterclass attendees and spots are filling quickly.</p>
              
              <h2>Why You Need to Act Now</h2>
              
              <p>The grant writing landscape is changing rapidly. With the explosion of AI tools, those who position themselves as AI-powered grant writers in 2025 will have a massive advantage.</p>
              
              <p>But this window of opportunity won't last forever. As more people discover this opportunity, competition will increase and the early adopter advantage will diminish.</p>
              
              <p>That's why I'm encouraging you to take action now while you have:</p>
              
              <ul>
                <li>7-day access to our premium Grant Builder AI platform</li>
                <li>The opportunity to book a 1:1 strategy call with our team</li>
                <li>The fresh knowledge and motivation from the masterclass</li>
              </ul>
              
              <p><strong>→ <a href="https://calendly.com/grantbuilderai/strategy" className="text-blue-600 dark:text-blue-400 font-medium">Secure your strategy call before spots fill up</a></strong></p>
              
              <p>I'm personally committed to your success in this journey. Over the next 7 days, I'll be sending you additional training, case studies, and resources to help you build your grant writing business.</p>
              
              <p>To your success,</p>
              
              <p>[Your Name]<br />
              Grant Writer AI</p>
              
              <p>P.S. If you have any questions about the Grant Builder AI platform or need technical support, please reply to this email or contact our support team at support@grantbuilderai.com.</p>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/emails/html-attendees/day1-morning.html"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              target="_blank"
            >
              View HTML Version
            </Button>
            
            <Button
              as="a"
              href="/emails/html-attendees/day1-morning.html"
              download="day1-morning.html"
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
