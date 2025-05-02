"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconCopy, IconCheck } from "@tabler/icons-react";
import { Button } from "@/components/button";
import { useState } from "react";

export default function NonprofitFacebookPost1Page() {
  const [copied, setCopied] = useState(false);

  const postContent = `The 7 Hidden Reasons Why Most Grant Applications Get Rejected (And How to Avoid These Common Pitfalls)

After analyzing thousands of successful and unsuccessful grant applications across various sectors, we've identified the seven most common reasons why applications get rejected - and most of them aren't what you might expect.

If your organization has been struggling to secure grant funding, this post might help you identify where things are going wrong.

𝗥𝗲𝗮𝘀𝗼𝗻 #𝟭: 𝗠𝗶𝘀𝗮𝗹𝗶𝗴𝗻𝗺𝗲𝗻𝘁 𝘄𝗶𝘁𝗵 𝗳𝘂𝗻𝗱𝗲𝗿 𝗽𝗿𝗶𝗼𝗿𝗶𝘁𝗶𝗲𝘀

Most organizations focus exclusively on the published guidelines, but funders often have unstated priorities that significantly influence their decisions. These priorities might include:

• Geographic focus areas that aren't explicitly stated
• Preference for certain approaches or methodologies
• Unstated demographic priorities
• Specific outcomes they're particularly interested in
• Alignment with their internal strategic plan

𝗛𝗼𝘄 𝘁𝗼 𝗮𝘃𝗼𝗶𝗱 𝘁𝗵𝗶𝘀 𝗽𝗶𝘁𝗳𝗮𝗹𝗹:

1. Research the funder beyond their guidelines - look at their past grants, annual reports, and strategic plans
2. Analyze the language they use to describe their mission and vision
3. Look for patterns in the types of organizations and projects they've funded in the past
4. If possible, speak with previous grantees to understand what the funder valued in their applications

𝗥𝗲𝗮𝘀𝗼𝗻 #𝟮: 𝗪𝗲𝗮𝗸 𝗼𝘂𝘁𝗰𝗼𝗺𝗲 𝗺𝗲𝘁𝗿𝗶𝗰𝘀

Many applications focus on activities and outputs rather than meaningful outcomes. Funders want to see clear, measurable impact that aligns with their goals.

Common mistakes include:
• Vague or unmeasurable outcomes ("increased awareness")
• Focusing solely on outputs (number of people served) rather than impact
• Unrealistic outcomes that don't match the scope of the project
• Outcomes that don't clearly connect to the funder's priorities

𝗛𝗼𝘄 𝘁𝗼 𝗮𝘃𝗼𝗶𝗱 𝘁𝗵𝗶𝘀 𝗽𝗶𝘁𝗳𝗮𝗹𝗹:

1. Develop SMART outcomes (Specific, Measurable, Achievable, Relevant, Time-bound)
2. Include both short-term and long-term outcomes
3. Connect your outcomes directly to the funder's stated goals
4. Include a mix of quantitative and qualitative metrics
5. Explain how you'll measure and report on these outcomes

𝗥𝗲𝗮𝘀𝗼𝗻 #𝟯: 𝗜𝗻𝗮𝗱𝗲𝗾𝘂𝗮𝘁𝗲 𝗻𝗲𝗲𝗱 𝘀𝘁𝗮𝘁𝗲𝗺𝗲𝗻𝘁

Many organizations assume the need for their work is obvious, but funders require compelling evidence that:
• The need is significant and urgent
• Your organization understands the root causes
• Your approach addresses these root causes
• Your organization is well-positioned to address this need

𝗛𝗼𝘄 𝘁𝗼 𝗮𝘃𝗼𝗶𝗱 𝘁𝗵𝗶𝘀 𝗽𝗶𝘁𝗳𝗮𝗹𝗹:

1. Use a mix of data sources (statistics, research, testimonials)
2. Include both broad context and local specifics
3. Demonstrate your organization's direct experience with the issue
4. Connect the need statement directly to your proposed approach
5. Use compelling storytelling alongside data

𝗥𝗲𝗮𝘀𝗼𝗻 #𝟰: 𝗪𝗲𝗮𝗸 𝗯𝘂𝗱𝗴𝗲𝘁 𝗷𝘂𝘀𝘁𝗶𝗳𝗶𝗰𝗮𝘁𝗶𝗼𝗻

Funders scrutinize budgets carefully, looking for:
• Clear alignment between budget and proposed activities
• Reasonable costs based on the scope of work
• Appropriate allocation across budget categories
• Evidence of good financial management

Common budget mistakes include:
• Vague line items ("program expenses")
• Insufficient detail in budget narratives
• Unrealistic cost projections
• Misalignment between narrative and budget

𝗛𝗼𝘄 𝘁𝗼 𝗮𝘃𝗼𝗶𝗱 𝘁𝗵𝗶𝘀 𝗽𝗶𝘁𝗳𝗮𝗹𝗹:

1. Provide detailed budget narratives that explain each line item
2. Include the methodology for how costs were calculated
3. Ensure perfect alignment between narrative activities and budget items
4. Research comparable costs to ensure your budget is realistic
5. Demonstrate good stewardship of resources

𝗥𝗲𝗮𝘀𝗼𝗻 #𝟱: 𝗨𝗻𝗰𝗼𝗻𝘃𝗶𝗻𝗰𝗶𝗻𝗴 𝘀𝘂𝘀𝘁𝗮𝗶𝗻𝗮𝗯𝗶𝗹𝗶𝘁𝘆 𝗽𝗹𝗮𝗻

Funders want to know their investment will have lasting impact. Many applications fail to address:
• How the project will continue after grant funding ends
• Specific funding sources for ongoing operations
• Evidence of organizational capacity to sustain the work
• Plans for program evaluation and improvement

𝗛𝗼𝘄 𝘁𝗼 𝗮𝘃𝗼𝗶𝗱 𝘁𝗵𝗶𝘀 𝗽𝗶𝘁𝗳𝗮𝗹𝗹:

1. Develop a diversified funding plan for after the grant period
2. Include specific potential funders and revenue streams
3. Demonstrate organizational capacity and commitment
4. Explain how you'll evaluate and improve the program over time
5. Show how the grant will help build sustainable capacity

𝗥𝗲𝗮𝘀𝗼𝗻 #𝟲: 𝗪𝗲𝗮𝗸 𝗼𝗿𝗴𝗮𝗻𝗶𝘇𝗮𝘁𝗶𝗼𝗻𝗮𝗹 𝗰𝗮𝗽𝗮𝗰𝗶𝘁𝘆 𝘀𝘁𝗮𝘁𝗲𝗺𝗲𝗻𝘁

Funders need confidence that your organization can successfully implement the proposed project. Many applications fail to adequately demonstrate:
• Relevant experience and expertise
• Sufficient staffing and infrastructure
• Strong leadership and governance
• Track record of successful project management
• Financial stability and sound management

𝗛𝗼𝘄 𝘁𝗼 𝗮𝘃𝗼𝗶𝗱 𝘁𝗵𝗶𝘀 𝗽𝗶𝘁𝗳𝗮𝗹𝗹:

1. Highlight specific relevant experience and past successes
2. Include brief bios of key staff and their qualifications
3. Demonstrate board engagement and expertise
4. Address any potential red flags proactively (new organization, recent leadership change, etc.)
5. Include specific systems and processes that ensure quality implementation

𝗥𝗲𝗮𝘀𝗼𝗻 #𝟳: 𝗣𝗼𝗼𝗿 𝗻𝗮𝗿𝗿𝗮𝘁𝗶𝘃𝗲 𝘀𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗲 𝗮𝗻𝗱 𝗿𝗲𝗮𝗱𝗮𝗯𝗶𝗹𝗶𝘁𝘆

Even with strong content, poor presentation can doom an application. Common issues include:
• Dense, difficult-to-read text
• Poor organization and flow
• Jargon and technical language
• Lack of compelling storytelling
• Failure to follow instructions precisely

𝗛𝗼𝘄 𝘁𝗼 𝗮𝘃𝗼𝗶𝗱 𝘁𝗵𝗶𝘀 𝗽𝗶𝘁𝗳𝗮𝗹𝗹:

1. Use clear, concise language and short paragraphs
2. Include headings, bullet points, and white space
3. Balance data with compelling stories and examples
4. Have someone unfamiliar with your work review for clarity
5. Follow all formatting instructions precisely

The good news is that these pitfalls can be avoided with the right approach to grant writing. Organizations that address these seven areas typically see their grant success rates increase dramatically - often from less than 10% to 25-30% or higher.

If you'd like to learn more about how to transform your grant applications and dramatically increase your success rate, I'm hosting a free masterclass this Saturday (May 3rd at 2:00 PM EST) specifically for non-profit organizations.

During this session, I'll share:
• The exact research process that helps uncover funders' unstated priorities
• A framework for creating compelling outcome metrics that resonate with decision-makers
• Templates for structuring powerful need statements
• A budget justification approach that eliminates common objections
• A sustainability plan template that addresses funders' concerns
• Organizational capacity statements that build confidence
• Narrative structures that make your applications stand out

Click here to register: [REGISTRATION LINK]

Even if you can't make it live, register anyway and I'll send you the replay. But live attendees will get access to our Grant Opportunity Database with 50+ active funding opportunities, so try to make it if you can!

What's been your organization's biggest challenge with grant applications? Comment below, and I'll try to provide some specific guidance.`;

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
            <div className="bg-emerald-600 h-3"></div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                  Day 1
                </span>
                <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-1 rounded">
                  Non-Profit Organizations
                </span>
              </div>

              <div className="mb-6">
                <h1 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">The 7 Hidden Reasons Why Most Grant Applications Get Rejected (And How to Avoid These Common Pitfalls)</h1>
                <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm px-3 py-2 rounded-md mb-4">
                  <strong>Target Audience:</strong> Non-Profit Organizations & NGOs Seeking Grant Funding
                </div>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/10 border border-emerald-100 dark:border-emerald-800/20 rounded-xl p-6 mb-6 whitespace-pre-line">
                {postContent}
              </div>

              <div className="prose prose-emerald dark:prose-invert max-w-none">
                <h3>Post Strategy</h3>
                <p>This Facebook post is designed to:</p>
                
                <ul>
                  <li><strong>Provide immediate value</strong> by identifying common grant application pitfalls</li>
                  <li><strong>Position you as an expert</strong> in the grant writing field</li>
                  <li><strong>Address specific pain points</strong> that non-profit organizations experience</li>
                  <li><strong>Offer actionable solutions</strong> they can implement immediately</li>
                  <li><strong>Create desire</strong> for more comprehensive guidance through the masterclass</li>
                </ul>
                
                <p>The post uses a problem-solution format that's highly valuable to non-profit organizations struggling with grant applications. By breaking down each common pitfall and providing specific solutions, it gives them immediate takeaways while demonstrating that there's much more to learn. The comprehensive nature of the content establishes credibility and positions the masterclass as the logical next step for organizations that want to improve their grant success rates.</p>
                
                <h3>Usage Instructions</h3>
                <p>Post this on Day 1 to establish your expertise and provide immediate value to your target audience. The question at the end encourages comments, which creates engagement and allows you to provide personalized advice that further demonstrates your expertise. When responding to comments, acknowledge their specific challenges and provide brief, helpful insights while mentioning that you'll cover these topics in more depth during the masterclass.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <Button
              onClick={copyToClipboard}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
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
