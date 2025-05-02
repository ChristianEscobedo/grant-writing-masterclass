"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconDownload, IconPresentation } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function MasterclassBreakdownPage() {
  const sections = [
    {
      name: "PART 1: HOOK & INTRODUCTION",
      slides: [
        { number: 1, title: "How to Build a $10K+/Month Grant Writing Business (Even If You Have Zero Experience)", description: "Title slide introducing the masterclass with a compelling headline that addresses the main objection (no experience needed)." },
        { number: 2, title: "The $700 Billion Opportunity Most Freelancers Are Missing", description: "Attention-grabbing slide highlighting the massive grant funding market that creates immediate interest and curiosity." },
        { number: 3, title: "Presenter Introduction", description: "Brief bio establishing credibility without being overly self-promotional, focusing on results achieved for clients." },
        { number: 4, title: "Agenda Slide", description: "Clear outline of what they'll learn in the next 90 minutes, creating a roadmap for the presentation." },
        { number: 5, title: "Participation Slide", description: "Instructions for getting the most value from the masterclass, encouraging active engagement." },
        { number: 6, title: "The Big Promise", description: "Bold statement of the transformation they'll experience: \"By the end of this session, you'll have a clear roadmap to building a $10K+/month grant writing business.\"" },
        { number: 7, title: "Pattern Interrupt", description: "Addressing the common freelance struggle of inconsistent income and positioning grant writing as the solution." },
        { number: 8, title: "Social Proof Slide", description: "Quick overview of success stories to establish that the promise is achievable for ordinary people." },
        { number: 9, title: "The Grant Writing Advantage", description: "Comparison to other freelance services highlighting higher rates, less competition, and recurring revenue." },
        { number: 10, title: "Masterclass Framework", description: "Introduction to the 5 pillars we'll cover, providing structure for the content to follow." }
      ]
    },
    {
      name: "PART 2: THE OPPORTUNITY",
      slides: [
        { number: 11, title: "The Grant Funding Landscape", description: "$700 billion available annually with visual breakdown by funding source and sector." },
        { number: 12, title: "Where Grant Money Comes From", description: "Explanation of the three main funding sources: government agencies, private foundations, and corporations." },
        { number: 13, title: "Who Needs Grant Writers", description: "Overview of the four main client categories: non-profits, educational institutions, research organizations, and small businesses." },
        { number: 14, title: "Why Organizations Hire Grant Writers", description: "The four key reasons organizations outsource grant writing: expertise, time constraints, success rates, and objectivity." },
        { number: 15, title: "The Supply-Demand Gap", description: "Data showing the high demand and low supply of qualified grant writers, creating a perfect market opportunity." },
        { number: 16, title: "Income Potential", description: "Breakdown of average project values and monthly potential with realistic earnings timeline." },
        { number: 17, title: "Success Story #1: Meet Michael", description: "Introduction to Michael, a former copywriter who transitioned to grant writing with no prior experience." },
        { number: 18, title: "Michael's Journey", description: "His transformation from struggling copywriter making $3K/month to earning $12K/month with grant writing." },
        { number: 19, title: "Michael's Timeline", description: "Detailed 90-day timeline showing how he landed his first client in just 14 days after starting." },
        { number: 20, title: "Success Story #2: Meet Sarah", description: "Introduction to Sarah, a complete beginner with no writing background who succeeded in grant writing." },
        { number: 21, title: "Sarah's Journey", description: "Her transformation from zero experience to $8K/month in 90 days using the AI-powered approach." },
        { number: 22, title: "Sarah's Timeline", description: "Detailed breakdown of her first 90 days showing key milestones and actions taken." },
        { number: 23, title: "Common Objection #1: \"Don't I need experience?\"", description: "Addressing the experience objection by explaining how the AI system and templates eliminate the need for prior experience." },
        { number: 24, title: "Common Objection #2: \"Isn't it too competitive?\"", description: "Addressing the competition objection with data showing the favorable supply-demand ratio compared to other freelance services." },
        { number: 25, title: "Reality Check", description: "Honest assessment of the opportunity, acknowledging that it requires work but is more accessible than most realize." }
      ]
    },
    {
      name: "PART 3: THE BUSINESS MODEL",
      slides: [
        { number: 26, title: "The 3 Grant Writing Business Models", description: "Overview of the three main business models: project-based, retainer, and success fee." },
        { number: 27, title: "Model #1: Project-Based", description: "Detailed explanation of the project-based model including structure, pricing strategy, and pros/cons." },
        { number: 28, title: "Project-Based Example", description: "Real-world example of a $3,500 project with breakdown of deliverables, timeline, and profit margin." },
        { number: 29, title: "Model #2: Retainer", description: "Detailed explanation of the retainer model including structure, pricing strategy, and pros/cons." },
        { number: 30, title: "Retainer Example", description: "Real-world example of a $2,000/month retainer with breakdown of services, time investment, and profit margin." },
        { number: 31, title: "Model #3: Success Fee", description: "Detailed explanation of the success fee model including structure, pricing strategy, and pros/cons." },
        { number: 32, title: "Success Fee Example", description: "Real-world example of a 5% success fee arrangement with analysis of potential earnings and risk factors." },
        { number: 33, title: "Recommended Model for Beginners", description: "Guidance on which model to start with and why, with emphasis on the hybrid approach for beginners." },
        { number: 34, title: "Pricing Your Services", description: "Specific pricing strategies for beginners to command premium rates from day one without feeling like an impostor." },
        { number: 35, title: "Service Packaging", description: "How to structure your service offerings to maximize value and minimize time investment." },
        { number: 36, title: "Client Acquisition Timeline", description: "Realistic expectations for how quickly beginners can expect to land their first clients." },
        { number: 37, title: "Scaling to $10K/Month", description: "The mathematical breakdown of how many clients and projects are needed to reach the $10K/month milestone." },
        { number: 38, title: "Profit Margins", description: "Analysis of typical profit margins in grant writing compared to other freelance services." },
        { number: 39, title: "Time Investment", description: "Realistic assessment of hours required per project/month with and without the AI system." },
        { number: 40, title: "Lifestyle Benefits", description: "The freedom, flexibility, and impact that comes with running a successful grant writing business." }
      ]
    },
    {
      name: "PART 4: CLIENT ACQUISITION",
      slides: [
        { number: 41, title: "The Client Acquisition Framework", description: "Overview of the 5-step framework for consistently acquiring high-paying clients." },
        { number: 42, title: "Step 1: Choosing Your Niche", description: "How to select a profitable sector specialization that matches your interests and background." },
        { number: 43, title: "Profitable Niches", description: "Analysis of which sectors have the most funding and least competition for beginners." },
        { number: 44, title: "Step 2: Creating Your Offer", description: "How to structure your service offering to address what clients actually want and need." },
        { number: 45, title: "Offer Examples", description: "Real examples of successful service packages that have converted well for beginners." },
        { number: 46, title: "Step 3: Building Your Prospect List", description: "Systematic approach to creating a list of qualified prospects who need grant writing services." },
        { number: 47, title: "Prospecting Methods", description: "Specific online and offline strategies for finding potential clients, including free and paid methods." },
        { number: 48, title: "Step 4: The Outreach Process", description: "Step-by-step outreach system including email templates that consistently get responses." },
        { number: 49, title: "Outreach Example", description: "Actual email template that landed a $4K client with analysis of why it worked so well." },
        { number: 50, title: "Step 5: The Discovery Call", description: "Structure and script for conducting discovery calls that position you as an expert." },
        { number: 51, title: "Call Framework", description: "Specific questions that demonstrate expertise even if you're new to grant writing." },
        { number: 52, title: "Objection Handling", description: "Scripts for addressing common client concerns and objections during the sales process." },
        { number: 53, title: "Closing the Deal", description: "The proposal and contract process that converts prospects into paying clients." },
        { number: 54, title: "Case Study", description: "Complete walkthrough of a successful client acquisition process from prospecting to closing." },
        { number: 55, title: "Action Step", description: "Specific next steps for creating your own client acquisition plan with templates provided." }
      ]
    },
    {
      name: "PART 5: GRANT WRITING PROCESS",
      slides: [
        { number: 56, title: "The Grant Writing Process", description: "Overview of the 5-step process for creating winning grant applications." },
        { number: 57, title: "Step 1: Finding Grant Opportunities", description: "Research methods and resources for identifying relevant funding opportunities." },
        { number: 58, title: "Grant Database Demo", description: "Quick demonstration of how to use grant databases to find opportunities for clients." },
        { number: 59, title: "Step 2: Evaluating Fit", description: "Decision framework for determining whether an opportunity is worth pursuing." },
        { number: 60, title: "Fit Assessment Example", description: "Real-world example of evaluating a grant opportunity for a client." },
        { number: 61, title: "Step 3: The Application Process", description: "Overview of the key components of a successful grant application." },
        { number: 62, title: "Critical Elements", description: "Detailed breakdown of the most important sections: needs statement, goals, outcomes, and budget." },
        { number: 63, title: "The Secret Sauce", description: "What separates winning applications from rejected ones, based on analysis of thousands of applications." },
        { number: 64, title: "Common Mistakes", description: "The most frequent errors that lead to rejection and how to avoid them." },
        { number: 65, title: "The AI Advantage", description: "How our software transforms the grant writing process for beginners and experienced writers alike." },
        { number: 66, title: "Software Demo", description: "Quick overview of the key features of our AI Grant Builder software." },
        { number: 67, title: "Time-Saving Benefits", description: "How the AI system cuts work time by 50%+ while improving quality." },
        { number: 68, title: "Quality Improvement", description: "How AI improves application quality by incorporating best practices and funder preferences." },
        { number: 69, title: "Case Study", description: "Before/After comparison of a grant application created with and without our approach." },
        { number: 70, title: "Action Step", description: "Specific next steps for implementing the grant writing process with templates provided." }
      ]
    },
    {
      name: "PART 6: SCALING YOUR BUSINESS",
      slides: [
        { number: 71, title: "Scaling Framework", description: "Overview of the 3-phase approach to scaling your grant writing business." },
        { number: 72, title: "Phase 1: First $5K/Month", description: "Strategy and focus areas for reaching your first $5K/month in revenue." },
        { number: 73, title: "Phase 2: $5K to $10K/Month", description: "Leverage and systems needed to break through the $10K/month barrier." },
        { number: 74, title: "Phase 3: Beyond $10K/Month", description: "Team building and expansion strategies for scaling beyond $10K/month." },
        { number: 75, title: "Time Management", description: "Specific techniques for handling multiple clients and projects efficiently." },
        { number: 76, title: "Systems & Processes", description: "Creating standardized workflows that increase efficiency and quality." },
        { number: 77, title: "Team Building", description: "When and how to bring on help, including hiring and training strategies." },
        { number: 78, title: "Avoiding Burnout", description: "Sustainable growth strategies that prevent overwhelm and burnout." },
        { number: 79, title: "Success Story #3: Meet David", description: "Case study of a grant writer who scaled to $25K/month using these methods." },
        { number: 80, title: "Action Step", description: "Creating your personalized scaling plan with milestones and timelines." }
      ]
    },
    {
      name: "PART 7: THE OFFER",
      slides: [
        { number: 81, title: "The Path Forward", description: "Presenting two options: Do It Yourself vs. Accelerated Program." },
        { number: 82, title: "Option 1: Do It Yourself", description: "Honest assessment of what the DIY path looks like, including challenges and timeline." },
        { number: 83, title: "Option 2: The Grant Writer Accelerator Program", description: "Overview of our comprehensive program for fast-tracking success." },
        { number: 84, title: "Program Component #1: The AI Grant Builder Software", description: "Detailed explanation of our proprietary AI software that transforms the grant writing process." },
        { number: 85, title: "Software Demonstration", description: "Live demonstration of key software features showing how it works in real-time." },
        { number: 86, title: "Program Component #2: Comprehensive Training System", description: "Overview of the step-by-step training modules that guide implementation." },
        { number: 87, title: "Training Overview", description: "Breakdown of modules and implementation schedule for rapid results." },
        { number: 88, title: "Program Component #3: Done-for-You Templates & Scripts", description: "The complete library of templates, scripts, and frameworks included in the program." },
        { number: 89, title: "Templates Preview", description: "Showcase of the highest-value templates that save time and improve results." },
        { number: 90, title: "Program Component #4: Expert Coaching & Support", description: "The coaching and support structure that ensures client success." },
        { number: 91, title: "Support Structure", description: "Detailed explanation of how we support clients throughout their journey." },
        { number: 92, title: "Program Component #5: Client Acquisition System", description: "The done-for-you client acquisition system that generates consistent leads." },
        { number: 93, title: "Full Investment", description: "Price reveal and value stack showing the complete investment and value proposition." },
        { number: 94, title: "Guarantee", description: "Risk reversal guarantee that addresses hesitation and builds confidence." },
        { number: 95, title: "Objection Handling", description: "Addressing the most common objections to investing in the program." }
      ]
    },
    {
      name: "PART 8: CLOSE & NEXT STEPS",
      slides: [
        { number: 96, title: "Limited Time Bonus #1: Grant Opportunity Database", description: "Exclusive database of 500+ active grant opportunities across various sectors." },
        { number: 97, title: "Limited Time Bonus #2: Client Acquisition Accelerator", description: "Done-for-you outreach campaigns that generate immediate client opportunities." },
        { number: 98, title: "Limited Time Bonus #3: VIP Strategy Session", description: "Personalized 1-on-1 strategy session to create your custom implementation plan." },
        { number: 99, title: "Application Process", description: "Clear explanation of next steps to apply for the program and what to expect." },
        { number: 100, title: "Final Call to Action", description: "Compelling final call to action to apply now, with Q&A to follow." }
      ]
    }
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col py-10">
        <div className="w-full max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <Button
              as={Link}
              href="/assets"
              className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Back to Assets
            </Button>
            
            <h1 className="text-2xl md:text-3xl font-bold text-center text-neutral-800 dark:text-neutral-200">
              Masterclass Slide Breakdown
            </h1>
            
            <Button
              as={Link}
              href="/masterclass/slides"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <IconPresentation className="h-4 w-4 mr-2" />
              View Slides
            </Button>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 mb-8 p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
              Masterclass Overview: Building a $10K+/Month Grant Writing Business
            </h2>
            
            <div className="prose prose-blue dark:prose-invert max-w-none">
              <p>This 90-minute masterclass is designed for the non-sophisticated audience with little to no grant writing experience. The presentation focuses on the opportunity in grant writing, the business models, client acquisition, the grant writing process, and scaling strategies. The masterclass concludes with a high-ticket offer for our Grant Writer Accelerator Program.</p>
              
              <h3>Target Audience</h3>
              <p>Freelancers, consultants, and aspiring entrepreneurs who:</p>
              <ul>
                <li>Have little to no grant writing experience</li>
                <li>Are looking for a high-paying freelance opportunity</li>
                <li>Want to build a consistent $10K+/month business</li>
                <li>Are tired of low-paying, competitive freelance markets</li>
                <li>Value making an impact while earning a good income</li>
              </ul>
              
              <h3>Key Selling Points</h3>
              <ul>
                <li><strong>Massive Opportunity:</strong> $700 billion in annual grant funding with high demand for writers</li>
                <li><strong>Low Competition:</strong> Far less competitive than other freelance services</li>
                <li><strong>High Rates:</strong> Average projects ranging from $3,000-$5,000</li>
                <li><strong>Recurring Revenue:</strong> Retainer models create predictable monthly income</li>
                <li><strong>AI Advantage:</strong> Our software makes it accessible even for beginners</li>
              </ul>
              
              <h3>Objections Addressed</h3>
              <ul>
                <li><strong>"I don't have experience":</strong> The AI system and templates eliminate the need for prior experience</li>
                <li><strong>"It's too competitive":</strong> Data showing favorable supply-demand ratio compared to other services</li>
                <li><strong>"I don't have connections":</strong> Client acquisition system that works without existing network</li>
                <li><strong>"It's too technical":</strong> AI simplifies the complex aspects of grant writing</li>
                <li><strong>"I can't afford it":</strong> ROI calculation showing how quickly the investment is recouped</li>
              </ul>
              
              <h3>The Offer</h3>
              <p>The Grant Writer Accelerator Program ($5,000) includes:</p>
              <ul>
                <li>AI Grant Builder Software</li>
                <li>Comprehensive Training System</li>
                <li>Done-for-You Templates & Scripts</li>
                <li>Expert Coaching & Support</li>
                <li>Client Acquisition System</li>
                <li>Limited-Time Bonuses (valued at $3,000+)</li>
              </ul>
            </div>
          </motion.div>

          {/* Section breakdown */}
          {sections.map((section, index) => (
            <motion.div
              key={section.name}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.05) }}
              className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 mb-8"
            >
              <div className="bg-purple-600 h-2"></div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                  {section.name}
                </h2>
                
                <div className="space-y-4">
                  {section.slides.map((slide) => (
                    <div 
                      key={slide.number}
                      className="border border-neutral-200 dark:border-neutral-700 rounded-lg p-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm px-2 py-1 rounded min-w-[40px] text-center">
                          {slide.number}
                        </div>
                        <div>
                          <h3 className="font-medium text-neutral-800 dark:text-neutral-200 mb-1">{slide.title}</h3>
                          <p className="text-sm text-neutral-600 dark:text-neutral-400">{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          <div className="flex justify-center mb-8">
            <Button
              as={Link}
              href="/masterclass/slides"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <IconPresentation className="h-4 w-4 mr-2" />
              View Slide Presentation
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
