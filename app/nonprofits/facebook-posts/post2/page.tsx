"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function NonprofitFacebookPost2Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `How to Research Grant Funders Beyond the Published Guidelines (The Strategy That Increased This Non-Profit's Success Rate by 300%)

Yesterday, I shared the 7 hidden reasons why most grant applications get rejected. The #1 reason was misalignment with funder priorities - specifically, the unstated priorities that don't appear in the published guidelines.

Today, I want to share a detailed process for uncovering these hidden priorities, using a case study of Community Roots, a small environmental non-profit that increased their grant success rate from 7% to 28% by implementing this research strategy.

When I first met with Community Roots, they were following a common approach to grant research:
1. Finding opportunities that matched their program areas
2. Reading the guidelines carefully
3. Following the application instructions precisely
4. Submitting applications that directly addressed the stated requirements

Despite this diligent approach, they had secured only 1 grant out of 14 applications in the previous year.

After analyzing their rejected applications, we discovered they were missing crucial information about the funders' unstated priorities - information that successful applicants had somehow uncovered.

Here's the 7-step research process we implemented that transformed their results:

𝗦𝘁𝗲𝗽 𝟭: 𝗔𝗻𝗮𝗹𝘆𝘇𝗲 𝗣𝗮𝘀𝘁 𝗚𝗿𝗮𝗻𝘁𝘀

For each potential funder, Community Roots began researching:
• Who they had funded in the past 2-3 years
• The specific projects they had funded
• The grant amounts awarded
• Geographic distribution of grants
• Types of organizations funded (size, age, focus areas)

𝗪𝗵𝗲𝗿𝗲 𝘁𝗼 𝗳𝗶𝗻𝗱 𝘁𝗵𝗶𝘀 𝗶𝗻𝗳𝗼𝗿𝗺𝗮𝘁𝗶𝗼𝗻:
• Funder's website (annual reports, press releases, grant listings)
• Foundation Directory Online (available at many public libraries)
• 990 tax forms (available on GuideStar or ProPublica's Nonprofit Explorer)
• News articles about the funder's grant announcements

𝗦𝘁𝗲𝗽 𝟮: 𝗔𝗻𝗮𝗹𝘆𝘇𝗲 𝗙𝘂𝗻𝗱𝗲𝗿 𝗟𝗮𝗻𝗴𝘂𝗮𝗴𝗲

Community Roots created a document for each funder where they collected:
• Key phrases from the funder's mission and vision statements
• Recurring language in their annual reports
• Terms used to describe successful projects
• How they described their impact and priorities

They then analyzed this language to identify:
• Values and principles the funder emphasized
• Specific approaches they seemed to favor
• Outcomes they highlighted most frequently
• How they measured success

𝗦𝘁𝗲𝗽 𝟯: 𝗥𝗲𝘀𝗲𝗮𝗿𝗰𝗵 𝗙𝘂𝗻𝗱𝗲𝗿 𝗟𝗲𝗮𝗱𝗲𝗿𝘀𝗵𝗶𝗽

For each potential funder, they researched:
• Board members and their affiliations
• Program officers responsible for their focus area
• Executive leadership and their backgrounds
• Recent speeches, articles, or interviews by leadership

This research revealed valuable insights about:
• Personal interests and passions of decision-makers
• Professional backgrounds that influenced their perspectives
• Recent shifts in thinking or approach
• Connections to other organizations or initiatives

𝗦𝘁𝗲𝗽 𝟰: 𝗔𝗻𝗮𝗹𝘆𝘇𝗲 𝗦𝘁𝗿𝗮𝘁𝗲𝗴𝗶𝗰 𝗣𝗹𝗮𝗻𝘀

Many foundations publish strategic plans or frameworks that reveal:
• Long-term goals and priorities
• Emerging areas of interest
• Shifts in funding strategy
• How they measure their own impact

Community Roots found that aligning with these strategic priorities - even when they weren't explicitly mentioned in grant guidelines - significantly increased their chances of success.

𝗦𝘁𝗲𝗽 𝟱: 𝗖𝗼𝗻𝘁𝗮𝗰𝘁 𝗣𝗿𝗲𝘃𝗶𝗼𝘂𝘀 𝗚𝗿𝗮𝗻𝘁𝗲𝗲𝘀

This was perhaps the most valuable step. Community Roots:
• Identified organizations similar to theirs that had received funding
• Reached out for brief conversations about their experience
• Asked specific questions about what they believed made their application successful
• Inquired about any feedback they received from the funder

These conversations often revealed crucial insights about:
• What the funder really valued in applications
• Unstated preferences for certain approaches
• How the funder liked to be engaged during the process
• Common pitfalls to avoid

𝗦𝘁𝗲𝗽 𝟲: 𝗘𝗻𝗴𝗮𝗴𝗲 𝘄𝗶𝘁𝗵 𝗙𝘂𝗻𝗱𝗲𝗿𝘀 (𝗪𝗵𝗲𝗻 𝗣𝗼𝘀𝘀𝗶𝗯𝗹𝗲)

When funders were open to pre-application contact, Community Roots:
• Attended information sessions or webinars
• Scheduled brief calls to discuss their organization's fit
• Asked specific, well-researched questions
• Listened carefully for cues about priorities

They found that program officers often provided valuable guidance that wasn't in the written guidelines, such as:
• Current areas of particular interest
• Common weaknesses in applications they receive
• Specific approaches they'd like to see more of
• How competitive the current funding cycle was expected to be

𝗦𝘁𝗲𝗽 𝟳: 𝗖𝗿𝗲𝗮𝘁𝗲 𝗮 𝗙𝘂𝗻𝗱𝗲𝗿 𝗔𝗹𝗶𝗴𝗻𝗺𝗲𝗻𝘁 𝗗𝗼𝗰𝘂𝗺𝗲𝗻𝘁

For each potential funder, Community Roots created a document that summarized:
• Stated priorities from the guidelines
• Unstated priorities discovered through research
• Key language and terminology the funder used
• Specific outcomes the funder valued
• Approaches and methodologies the funder favored
• Potential red flags or misalignments with their organization

This document became their roadmap for crafting each application, ensuring they addressed both the stated and unstated priorities.

𝗧𝗵𝗲 𝗥𝗲𝘀𝘂𝗹𝘁𝘀

After implementing this research process, Community Roots:
• Applied for 12 grants in the following year
• Secured 4 grants totaling $325,000
• Increased their success rate from 7% to 33%
• Reduced the time spent on each application by focusing only on well-aligned opportunities

The executive director noted: "We're actually writing fewer applications now, but securing more funding. By understanding what funders really want - beyond what's in the guidelines - we're able to focus our efforts on opportunities where we have a genuine chance of success."

𝗧𝗵𝗲 𝗞𝗲𝘆 𝗧𝗮𝗸𝗲𝗮𝘄𝗮𝘆

The most successful grant applicants aren't necessarily those with the best programs or the most polished writing. They're the ones who understand what funders are really looking for - including the priorities that aren't explicitly stated in the guidelines.

By investing time in thorough funder research before writing applications, you can dramatically increase your success rate while actually reducing the total time spent on grant writing.

If you'd like to learn more about this approach and other strategies for dramatically improving your grant success rate, I'm hosting a free masterclass this Saturday (May 3rd at 2:00 PM EST) specifically for non-profit organizations.

During this session, I'll share:
• Templates for creating effective funder research documents
• Scripts for contacting previous grantees and program officers
• Strategies for aligning your language with funder priorities
• A framework for evaluating whether an opportunity is worth pursuing
• Case studies of organizations that have transformed their grant success rates

Click here to register: [REGISTRATION LINK]

Has your organization tried any of these research strategies? What's been most effective for you in understanding what funders are really looking for? Comment below and let's discuss!`;

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
              href="/nonprofits/facebook-posts"
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
            <div className="bg-teal-600 h-3"></div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 2
                </span>
                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-1 rounded">
                  Non-Profit Organizations
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">How to Research Grant Funders Beyond the Published Guidelines (The Strategy That Increased This Non-Profit's Success Rate by 300%)</h1>
                <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Non-Profit Organizations & NGOs Seeking Grant Funding
                </div>
              </div>

              <div className="bg-teal-50 dark:bg-teal-900/10 border border-teal-100 dark:border-teal-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-emerald dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This Facebook post is designed to:</p>
                
                <ul>
                  <li><strong>Provide a detailed, actionable process</strong> for effective funder research</li>
                  <li><strong>Demonstrate results</strong> through a specific case study with impressive metrics</li>
                  <li><strong>Build on the previous day's content</strong> by addressing the #1 reason for rejection</li>
                  <li><strong>Position you as an expert</strong> with insider knowledge about how funding decisions are made</li>
                  <li><strong>Create desire</strong> for the templates and additional resources available in the masterclass</li>
                </ul>
                
                <p>The post uses a step-by-step format that provides immediate value while showing the comprehensive nature of effective funder research. By including specific details about where to find information and what to look for, it gives non-profits actionable steps they can implement immediately. The case study with concrete results (7% to 33% success rate) creates believability and desire. The mention of templates and scripts available in the masterclass creates a natural next step for those who want to implement the process more efficiently.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 2 to build on the foundation established in the first post. The question at the end encourages comments about research strategies, which allows you to acknowledge their efforts while suggesting additional approaches they might try. When responding to comments, highlight specific aspects of the research process that will be covered in more depth during the masterclass, creating anticipation for the additional value they'll receive by attending.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <Button
              onClick={copyToClipboard}
              className="bg-teal-600 hover:bg-teal-700 text-white"
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
