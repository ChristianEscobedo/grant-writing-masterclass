"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Day1EveningEmailPage() {
  const alternativeSubjects = [
    "Did you see this? The service non-profits and small businesses can't say NO to",
    "The untapped gold mine most freelancers are missing (hint: grants)",
    "How to end the feast-or-famine cycle with grant writing (free training)"
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
              href="/emails"
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
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">To: [Subscriber]</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Day 1 - Evening</p>
                </div>
              </div>
              <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">Did you see this? The service non-profits and small businesses can't say NO to</h1>
            </div>

            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p>Hey [First Name],</p>

              <p>Earlier today I sent you an invitation to our free masterclass on building a $10K/month grant writing business with AI.</p>

              <p>But I wanted to share something that might resonate with you as a freelancer or agency owner...</p>

              <p>The constant struggle to find new clients is <em>exhausting</em>, isn't it?</p>

              <p>You finish one project, then immediately have to hustle for the next one. It's a never-ending cycle that makes consistent income nearly impossible.</p>

              <p>But what if you offered a service that:</p>

              <ol>
                <li><strong>Clients immediately see the value in</strong> (because it directly brings them money)</li>
                <li><strong>Has a clear ROI</strong> (making it easy to justify your premium fees)</li>
                <li><strong>Creates ongoing opportunities</strong> (since organizations need multiple grants throughout the year)</li>
              </ol>

              <p>That's exactly what grant writing offers — and with our AI tools, it's now easier than ever to deliver exceptional results even if you have zero grant writing experience.</p>

              <p>In our free masterclass this Saturday (May 3rd at 2:00 PM EST), I'll show you how to:</p>

              <ul>
                <li>Find the perfect grants for any business (even in "boring" industries)</li>
                <li>Use our AI Grant Builder to write compelling applications in a fraction of the time</li>
                <li>Position yourself as the expert who can unlock this "hidden" funding</li>
                <li>Charge $3-5K per grant or create monthly retainers</li>
              </ul>

              <p><strong>→ <a href="http://localhost:3001/masterclass" className="text-blue-600 dark:text-blue-400 font-medium">Click here to save your seat for Saturday</a></strong></p>

              <p>Let me introduce you to our grant writing expert, Gwen:</p>

              <p>Gwen has helped secure over <strong>$50 million</strong> in grant funding for small businesses and non-profits, including:</p>

              <ul>
                <li>$2 million for a community park development project</li>
                <li>$300,000 for a local non-profit organization</li>
                <li>$11 million in grants just last year alone</li>
              </ul>

              <p>And here's what makes this even more impressive: Gwen maintains a <strong>25% success rate</strong> on grant applications — far above the industry average.</p>

              <p>The best part? Our AI Grant Builder now makes it possible for you to achieve similar results by automating the most time-consuming parts of the process.</p>

              <p><strong>→ <a href="http://localhost:3001/masterclass" className="text-blue-600 dark:text-blue-400 font-medium">Join us on Saturday to see exactly how it works</a></strong></p>

              <p>Talk soon,</p>

              <p>[Your Name]<br />
              Grant Writer AI</p>

              <p>P.S. Remember, when you attend live, you'll get free access to the AI Grant Builder for 7 days so you can try it yourself. <a href="http://localhost:3001/masterclass" className="text-blue-600 dark:text-blue-400 font-medium">Save your seat here</a>.</p>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/emails/html/day1-evening.html"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              target="_blank"
            >
              View HTML Version
            </Button>

            <Button
              as="a"
              href="/emails/html/day1-evening.html"
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
