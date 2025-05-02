"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function UnawareAttendeePost1Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `For everyone who attended the Grant Writing Masterclass: Here are the 5 steps to landing your first $3K client (even with zero experience)...

First, thank you to everyone who attended the masterclass! The feedback has been incredible, and I'm thrilled to see so many of you excited about grant writing.

I know many of you are thinking, "This sounds great, but how do I actually get started with ZERO grant writing experience?"

That's exactly what I want to address today.

The truth is, you don't need years of experience to start landing high-paying grant writing clients. What you need is a clear, step-by-step process and the right tools.

Here's the exact 5-step process our most successful students use to land their first $3K+ client within 30 days (even with zero experience):

𝗦𝘁𝗲𝗽 𝟭: 𝗖𝗵𝗼𝗼𝘀𝗲 𝗬𝗼𝘂𝗿 𝗡𝗶𝗰𝗵𝗲

The biggest mistake beginners make is trying to serve everyone. Instead, choose ONE specific niche to focus on:

• Education non-profits
• Healthcare organizations
• Environmental groups
• Community development
• Arts & culture organizations

How to choose? Look at your background, interests, and connections. For example, if you've worked in education, start there. If you're passionate about the environment, focus on environmental organizations.

Having a niche makes you more credible instantly and simplifies your learning curve.

𝗦𝘁𝗲𝗽 𝟮: 𝗖𝗿𝗲𝗮𝘁𝗲 𝗬𝗼𝘂𝗿 𝗦𝗶𝗺𝗽𝗹𝗲 𝗢𝗳𝗳𝗲𝗿

Don't overcomplicate this. For your first clients, create a simple, clear offer:

"Grant Research + Application Package: $3,000"

This includes:
• Grant opportunity research (finding 3-5 relevant grants)
• Application preparation (all required forms and narratives)
• One round of revisions
• Submission support

That's it. No complex packages or confusing options. One clear offer with a specific price.

𝗦𝘁𝗲𝗽 𝟯: 𝗜𝗱𝗲𝗻𝘁𝗶𝗳𝘆 𝟮𝟬 𝗣𝗼𝘁𝗲𝗻𝘁𝗶𝗮𝗹 𝗖𝗹𝗶𝗲𝗻𝘁𝘀

Now it's time to create your prospect list. Here's how to find organizations that need grant writing help:

• Search for organizations in your niche that have recently posted about needing funding
• Look for organizations that have received small grants in the past (they're likely seeking more)
• Check local community foundation websites for recent grantees
• Search for new non-profits in your area (they often need funding to get started)

Create a spreadsheet with 20 organizations, including:
• Organization name
• Website
• Contact person (Executive Director or Development Director)
• Email address
• Phone number
• Notes about their mission and funding needs

𝗦𝘁𝗲𝗽 𝟰: 𝗦𝗲𝗻𝗱 𝗧𝗮𝗿𝗴𝗲𝘁𝗲𝗱 𝗢𝘂𝘁𝗿𝗲𝗮𝗰𝗵

Here's the exact outreach template that's working for our students right now:

Subject: [Organization Name] + Grant Opportunity

Hi [Name],

I came across [Organization Name] and was impressed by your work on [specific project or mission].

I'm a grant writer who specializes in helping [your niche] secure funding, and I recently identified a grant opportunity that might be a good fit for your [specific program or need].

This grant offers funding between [amount range] and the deadline is [date].

Would you be interested in a quick 15-minute call to discuss this opportunity and how I might be able to help you secure this funding?

Best regards,
[Your Name]

Send this to all 20 organizations on your list. Based on our data, you should get 4-6 responses and 2-3 calls scheduled.

𝗦𝘁𝗲𝗽 𝟱: 𝗖𝗼𝗻𝗱𝘂𝗰𝘁 𝗮 𝗩𝗮𝗹𝘂𝗲-𝗙𝗼𝗰𝘂𝘀𝗲𝗱 𝗖𝗮𝗹𝗹

On the call, follow this simple structure:

1. Ask about their organization and funding needs (listen more than you talk)
2. Share the specific grant opportunity you found for them
3. Explain your process for developing winning applications
4. Address the "experience question" directly: "While I'm relatively new to grant writing, I use a proven system and advanced AI tools that have helped my clients secure funding. Plus, you only pay if you're completely satisfied with the application."
5. Present your offer and ask if they'd like to move forward

The key is to focus on the OUTCOME (funding for their mission), not your experience level.

𝗧𝗵𝗲 "𝗘𝘅𝗽𝗲𝗿𝗶𝗲𝗻𝗰𝗲" 𝗤𝘂𝗲𝘀𝘁𝗶𝗼𝗻

Let's address the elephant in the room: "What if they ask about my experience?"

They probably will, and that's okay. Here's exactly how to handle it:

"I specialize in using cutting-edge AI tools and proven frameworks to develop compelling grant applications. While I'm newer to grant writing specifically, I bring [your relevant background - e.g., research skills, writing experience, knowledge of the sector] to the table. Most importantly, I'm committed to delivering a high-quality application that positions you for funding success. If you're not completely satisfied with the application before submission, you don't pay."

This approach has worked for dozens of our students with zero prior grant writing experience.

𝗧𝗵𝗲 𝗦𝗲𝗰𝗿𝗲𝘁 𝗪𝗲𝗮𝗽𝗼𝗻: 𝗔𝗜 𝗚𝗿𝗮𝗻𝘁 𝗕𝘂𝗶𝗹𝗱𝗲𝗿

The reason this approach works even for complete beginners is our AI Grant Builder tool. It guides you through the entire process:

• Finding the right grants for your client
• Creating compelling narratives tailored to specific funders
• Developing realistic budgets with proper justifications
• Crafting evaluation plans with measurable outcomes
• Generating sustainability strategies that funders love

The AI handles the technical aspects while you focus on client relationships and strategy.

𝗡𝗲𝘅𝘁 𝗦𝘁𝗲𝗽𝘀

If you're serious about building a successful grant writing business, I'm offering a limited number of 1-on-1 Strategy Sessions where we'll:

• Create a personalized roadmap for your grant writing business
• Identify your ideal client niche based on your background
• Develop your unique positioning strategy
• Map out your first 30/60/90 days for maximum results
• Answer any specific questions you have about getting started

These sessions are normally $497, but as a thank you for attending the masterclass, I'm offering them for just $97 for the next 48 hours.

Comment "STRATEGY" below if you'd like the booking link.

Remember, you don't need to be a grant writing expert to get started. You just need a clear process, the right tools, and the willingness to take action.

I can't wait to see you land your first client!`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(postContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
              href="/unaware/attendees/facebook-posts"
              className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Back to All Posts
            </Button>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 mb-8"
          >
            <div className="bg-blue-600 h-3"></div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 1
                </span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded">
                  Post-Event
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">For everyone who attended the Grant Writing Masterclass: Here are the 5 steps to landing your first $3K client (even with zero experience)...</h1>
                <div className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Low Sophistication Attendees (New to Grant Writing)
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This Facebook post is designed to:</p>
                
                <ul>
                  <li><strong>Provide immediate, actionable value</strong> to masterclass attendees</li>
                  <li><strong>Address the main objection</strong> of having no experience</li>
                  <li><strong>Break down the process</strong> into clear, manageable steps</li>
                  <li><strong>Include specific templates and scripts</strong> they can use immediately</li>
                  <li><strong>Position the AI tool</strong> as the solution to the experience gap</li>
                  <li><strong>Create engagement</strong> with a clear call to action</li>
                </ul>
                
                <p>The post uses an ultra long-form, value-forward approach that delivers substantial content they could actually implement. By providing the exact 5-step process, complete with templates and scripts, it demonstrates your expertise while giving them confidence that they can succeed even as beginners. The blue color block creates visual distinction, and the structured format with clear headings makes the information easy to digest.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 1 after the masterclass to capitalize on the momentum and excitement. When people comment "STRATEGY," you can send them the booking link via DM, creating a personal connection and increasing the likelihood of conversion.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <Button
              onClick={copyToClipboard}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              {copied ? (
                <>
                  <IconCheck className="h-4 w-4 mr-2" />
                  Copied to Clipboard
                </>
              ) : (
                <>
                  <IconCopy className="h-4 w-4 mr-2" />
                  Copy Post Text
                </>
              )}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
