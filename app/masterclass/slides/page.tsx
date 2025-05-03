"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { IconArrowLeft, IconArrowRight, IconDownload, IconPresentation } from "@tabler/icons-react";
import { Button } from "@/components/button";
import Image from "next/image";

export default function MasterclassSlidesPage() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 85;

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (slideNumber: number) => {
    if (slideNumber >= 1 && slideNumber <= totalSlides) {
      setCurrentSlide(slideNumber);
    }
  };

  const sections = [
    { name: "Hook & Introduction", start: 1, end: 10 },
    { name: "The Grant Opportunity", start: 11, end: 20 },
    { name: "AI-Powered Grant Writing", start: 21, end: 30 },
    { name: "Building Your Business", start: 31, end: 40 },
    { name: "Client Acquisition", start: 41, end: 55 },
    { name: "Grant Writing Process", start: 56, end: 70 },
    { name: "Scaling Your Business", start: 71, end: 75 },
    { name: "The High-Ticket Offer", start: 76, end: 80 },
    { name: "Masterclass Conclusion", start: 81, end: 85 }
  ];

  const getCurrentSection = () => {
    return sections.find(section =>
      currentSlide >= section.start && currentSlide <= section.end
    );
  };

  const currentSection = getCurrentSection();

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

            <div className="flex items-center">
              <span className="text-sm text-neutral-500 dark:text-neutral-400 mr-2">
                Section: {currentSection?.name}
              </span>
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                Slide {currentSlide} of {totalSlides}
              </span>
            </div>

            <Button
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              <IconDownload className="h-4 w-4 mr-2" />
              Download All Slides
            </Button>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 mb-8"
          >
            <div className="aspect-[16/9] relative bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
              <div className="absolute inset-0">
                <Image
                  src={`/masterclass/slides/slide-${currentSlide}.jpg`}
                  alt={`Slide ${currentSlide}`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                disabled={currentSlide === 1}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <IconArrowLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <IconArrowRight className="h-6 w-6" />
              </button>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide {currentSlide}: {getSlideTitle(currentSlide)}
              </h2>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>{getSlideDescription(currentSlide)}</p>
              </div>
            </div>
          </motion.div>

          {/* Section navigation */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">Jump to Section</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sections.map((section) => (
                <button
                  key={section.name}
                  onClick={() => goToSlide(section.start)}
                  className={`p-3 rounded-lg text-sm text-left transition-colors ${
                    currentSlide >= section.start && currentSlide <= section.end
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-800/20'
                      : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700'
                  }`}
                >
                  <div className="font-medium">{section.name}</div>
                  <div className="text-xs opacity-70">Slides {section.start}-{section.end}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Slide thumbnails */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-neutral-800 dark:text-neutral-200">All Slides</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {Array.from({ length: totalSlides }, (_, i) => i + 1).map((slideNum) => (
                <Link
                  key={slideNum}
                  href={`/masterclass/slides/slide${slideNum}`}
                  className={`relative aspect-[16/9] rounded-lg overflow-hidden border-2 transition-colors ${
                    currentSlide === slideNum
                      ? 'border-purple-500 dark:border-purple-400'
                      : 'border-transparent'
                  }`}
                >
                  <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center">
                    <IconPresentation className="h-6 w-6 text-neutral-400 dark:text-neutral-500" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs py-1 px-2">
                    {slideNum}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

function getSlideTitle(slideNumber: number): string {
  const slideTitles: Record<number, string> = {
    1: "How to Build a $10K+/Month Grant Writing Business",
    2: "The $700 Billion Opportunity Most Freelancers Are Missing",
    3: "About Your Presenter",
    4: "What You'll Learn Today",
    5: "How to Get the Most From This Masterclass",
    6: "The Big Promise",
    7: "Why Most Freelancers Struggle With Inconsistent Income",
    8: "The Potential of Grant Writing",
    9: "The Grant Writing Advantage",
    10: "Masterclass Framework: The 5 Pillars",
    11: "The Grant Funding Landscape",
    12: "Where Grant Money Comes From",
    13: "Who Needs Grant Writers",
    14: "Why Organizations Hire Grant Writers",
    15: "The Supply-Demand Gap",
    16: "Income Potential",
    17: "Grant Writing Business Models",
    18: "Paths to Success in Grant Writing",
    19: "90-Day Success Timeline",
    20: "Getting Started Without Experience",
    21: "The AI Revolution in Grant Writing",
    22: "How AI Transforms the Grant Writing Process",
    23: "AI Tools for Grant Research",
    24: "AI Tools for Grant Writing",
    25: "AI Tools for Grant Editing & Optimization",
    26: "AI Prompt Engineering for Grant Writers",
    27: "Ethical Considerations & Best Practices",
    28: "The Human + AI Advantage",
    29: "AI-Powered Grant Writing Results",
    30: "The AI Implementation Roadmap",
    31: "Choosing Your Grant Writing Niche",
    32: "Positioning Yourself as an Expert",
    33: "Creating Your Service Offerings",
    34: "Pricing Your Grant Writing Services",
    35: "Building Your Online Presence",
    36: "Essential Business Systems & Tools",
    37: "Legal & Financial Foundations",
    38: "Your Client Onboarding Process",
    39: "Delivering Exceptional Results",
    40: "The Client Success Framework",
    41: "The Client Acquisition Ecosystem",
    42: "Identifying Ideal Clients",
    43: "Direct Outreach Strategies",
    44: "LinkedIn Prospecting System",
    45: "Content Marketing for Grant Writers",
    46: "Strategic Partnerships & Referrals",
    47: "Networking & Speaking Opportunities",
    48: "Your Sales Conversation Framework",
    49: "Handling Objections & Closing Deals",
    50: "Follow-Up Systems & Sequences",
    51: "Client Acquisition Strategy Analysis",
    52: "Advanced Client Acquisition Tactics",
    53: "Tracking & Optimizing Your Marketing",
    54: "The 30-Day Client Acquisition Plan",
    55: "Client Acquisition Q&A",
    56: "The Grant Writing Process Overview",
    57: "Grant Research & Opportunity Identification",
    58: "Qualifying Grant Opportunities",
    59: "Understanding Funder Requirements",
    60: "The Grant Planning Process",
    61: "Crafting Compelling Narratives",
    62: "Developing Strong Program Designs",
    63: "Creating Effective Budgets",
    64: "Writing Goals, Objectives & Outcomes",
    65: "Evaluation Plans & Logic Models",
    66: "Supporting Materials & Attachments",
    67: "The Submission & Follow-Up Process",
    68: "Grant Management & Reporting",
    69: "Increasing Your Success Rate",
    70: "Grant Writing Process Q&A",
    71: "The Growth Journey: From Solo to Agency",
    72: "Building Your Grant Writing Team",
    73: "Operational Systems for Scale",
    74: "Financial Management for Growth",
    75: "Quality Control at Scale",
    76: "Creating Your $5K+ Grant Writing Program",
    77: "Crafting Your Premium Offer Stack",
    78: "The High-Ticket Sales Conversation",
    79: "Premium Client Onboarding & Experience",
    80: "Launching Your High-Ticket Grant Writing Business",
    81: "Your $10K+/Month Grant Writing Roadmap",
    82: "Proven Business Growth Strategies",
    83: "Overcoming Obstacles & Mindset Mastery",
    84: "Your Next Steps & Resources",
    85: "Thank You & Final Thoughts"
  };

  return slideTitles[slideNumber] || "Slide Title";
}

function getSlideDescription(slideNumber: number): string {
  const slideDescriptions: Record<number, string> = {
    1: "Title slide introducing the masterclass on building a $10K+/month grant writing business with zero experience.",
    2: "Attention-grabbing slide highlighting the massive $700 billion grant funding opportunity that most freelancers are completely missing.",
    3: "Brief introduction of the presenter, establishing credibility and experience in the grant writing industry.",
    4: "Overview of what participants will learn during the 90-minute masterclass, setting expectations and creating anticipation.",
    5: "Instructions for participants to get maximum value from the masterclass, including note-taking suggestions and participation guidelines.",
    6: "The core promise of the masterclass: providing a clear roadmap to building a $10K+/month grant writing business even with no prior experience.",
    7: "Analysis of why traditional freelance services lead to feast-or-famine cycles and how grant writing solves this common problem.",
    8: "Overview of the potential of grant writing as a business model and the opportunities it presents for freelancers and entrepreneurs.",
    9: "Comparison of grant writing to other freelance services, highlighting the advantages in terms of pricing, competition, and client retention.",
    10: "Introduction to the 5-pillar framework that will be covered during the masterclass, providing structure for the content to follow.",
    11: "Overview of the grant funding landscape with $700 billion available annually and the problem that creates demand for grant writers.",
    12: "Explanation of the three main funding sources: government agencies, private foundations, and corporations with detailed breakdowns.",
    13: "Overview of the four main client categories: non-profits, educational institutions, research organizations, and small businesses.",
    14: "The four key reasons organizations outsource grant writing: expertise, time constraints, success rates, and objectivity.",
    15: "Data showing the high demand and low supply of qualified grant writers, creating a perfect market opportunity.",
    16: "Breakdown of average project values and monthly potential with realistic earnings timeline.",
    17: "Exploration of different business models for grant writing services, from solo consultant to full-service agency.",
    18: "Analysis of various paths to success in the grant writing industry, regardless of prior experience or background.",
    19: "Detailed 90-day timeline showing key milestones and actions for building a grant writing business from scratch.",
    20: "Strategies for getting started in grant writing without prior experience, leveraging AI tools and systems.",
    21: "Introduction to how AI is revolutionizing the grant writing industry and creating opportunities for newcomers.",
    22: "Overview of the grant writing process and how AI tools enhance each step from research to submission.",
    23: "Detailed exploration of AI tools for grant research, including opportunity identification and funder research.",
    24: "Comprehensive look at AI tools for grant writing, including narrative development and budget creation.",
    25: "Examination of AI tools for editing and optimizing grant proposals to increase success rates.",
    26: "Practical guide to prompt engineering specifically for grant writing tasks with examples and templates.",
    27: "Discussion of ethical considerations when using AI for grant writing and best practices for responsible use.",
    28: "Framework for combining human expertise with AI capabilities to create a competitive advantage.",
    29: "Analysis of measurable results that can be achieved using AI in grant writing, including productivity gains and success rate improvements.",
    30: "Step-by-step roadmap for implementing AI tools in your grant writing business with minimal learning curve.",
    31: "Framework for selecting a profitable grant writing niche based on demand, competition, and personal interest.",
    32: "Strategies for establishing yourself as an expert in your chosen niche even without extensive experience.",
    33: "Guide to creating service packages that solve specific client problems and command premium fees.",
    34: "Pricing strategies for grant writing services, including value-based pricing and package structures.",
    35: "Essential elements of an effective online presence for grant writers, including website and social profiles.",
    36: "Overview of the key business systems and tools needed to run an efficient grant writing business.",
    37: "Legal and financial foundations for your business, including entity structure, contracts, and accounting.",
    38: "Comprehensive client onboarding process that sets expectations and gathers all necessary information.",
    39: "Framework for consistently delivering exceptional results that lead to referrals and testimonials.",
    40: "The client success framework that ensures clients achieve their funding goals and become long-term partners.",
    41: "Overview of the complete client acquisition ecosystem for a successful grant writing business.",
    42: "Process for identifying and targeting ideal clients who value your services and have ongoing needs.",
    43: "Direct outreach strategies that generate high-quality leads without being pushy or salesy.",
    44: "Step-by-step LinkedIn prospecting system specifically designed for grant writing services.",
    45: "Content marketing strategies that position you as an authority and attract inbound client inquiries.",
    46: "Framework for building strategic partnerships and referral systems that generate consistent leads.",
    47: "Guide to leveraging networking events and speaking opportunities to attract premium clients.",
    48: "Comprehensive sales conversation framework that converts prospects into clients without hard selling.",
    49: "Scripts and strategies for handling common objections and closing deals with confidence.",
    50: "Follow-up systems and sequences that nurture prospects and increase conversion rates over time.",
    51: "In-depth analysis of effective client acquisition strategies for grant writing businesses, with metrics and optimization techniques.",
    52: "Advanced tactics for client acquisition in competitive markets, including multi-channel approaches and automation.",
    53: "Systems for tracking and optimizing your marketing efforts to increase ROI and efficiency.",
    54: "30-day action plan for implementing client acquisition strategies and securing your first clients.",
    55: "Answers to common questions about client acquisition for grant writing businesses.",
    56: "Overview of the complete grant writing process from opportunity identification to submission.",
    57: "Comprehensive approach to grant research and opportunity identification using both AI and manual methods.",
    58: "Framework for qualifying grant opportunities to ensure alignment with client goals and capabilities.",
    59: "Strategies for thoroughly understanding funder requirements and preferences to increase success rates.",
    60: "The grant planning process that ensures all requirements are met and deadlines are managed effectively.",
    61: "Techniques for crafting compelling narratives that engage reviewers and clearly communicate impact.",
    62: "Guide to developing strong program designs that align with funder priorities and organizational capacity.",
    63: "Step-by-step process for creating effective budgets that are realistic, compliant, and well-justified.",
    64: "Framework for writing clear, measurable goals, objectives, and outcomes that impress reviewers.",
    65: "Guide to creating evaluation plans and logic models that demonstrate program effectiveness.",
    66: "Overview of supporting materials and attachments that strengthen grant applications.",
    67: "Best practices for the submission process and follow-up strategies to maximize success.",
    68: "Introduction to grant management and reporting responsibilities after funding is secured.",
    69: "Proven strategies for increasing your grant success rate over time through continuous improvement.",
    70: "Answers to common questions about the grant writing process and troubleshooting challenges.",
    71: "Overview of the growth journey from solo practitioner to agency owner with key milestones.",
    72: "Framework for building and managing a grant writing team, including hiring, training, and retention.",
    73: "Operational systems needed to scale a grant writing business beyond the founder's capacity.",
    74: "Financial management strategies for sustainable growth, including cash flow, profitability, and reinvestment.",
    75: "Quality control systems that maintain excellence as the business scales and the team expands.",
    76: "Guide to creating high-ticket grant writing programs that command $5,000+ fees and attract premium clients.",
    77: "Framework for crafting a premium offer stack with clear value progression and tiered pricing.",
    78: "Comprehensive approach to high-ticket sales conversations that convert prospects into premium clients.",
    79: "Client onboarding and experience design that justifies premium pricing and builds long-term relationships.",
    80: "Step-by-step plan for launching a high-ticket grant writing business, including the first 90 days.",
    81: "Comprehensive roadmap to building a $10K+/month grant writing business with key milestones and timelines.",
    82: "Analysis of proven strategies for growing a grant writing business, with data-driven approaches to scaling revenue and impact.",
    83: "Strategies for overcoming common obstacles and developing the mindset needed for entrepreneurial success.",
    84: "Overview of next steps and resources available to support implementation after the masterclass.",
    85: "Final thoughts, summary of key takeaways, and call to action for participants to implement what they've learned."
  };

  return slideDescriptions[slideNumber] || "Slide description goes here.";
}
