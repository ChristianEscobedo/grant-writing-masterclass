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
  const totalSlides = 100;

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
    { name: "The Opportunity", start: 11, end: 25 },
    { name: "The Business Model", start: 26, end: 40 },
    { name: "Client Acquisition", start: 41, end: 55 },
    { name: "Grant Writing Process", start: 56, end: 70 },
    { name: "Scaling Your Business", start: 71, end: 80 },
    { name: "The Offer", start: 81, end: 95 },
    { name: "Close & Next Steps", start: 96, end: 100 }
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
    8: "Success Stories Overview",
    9: "The Grant Writing Advantage",
    10: "Masterclass Framework: The 5 Pillars",
    11: "The Grant Funding Landscape",
    12: "Where Grant Money Comes From",
    13: "Who Needs Grant Writers",
    14: "Why Organizations Hire Grant Writers",
    15: "The Supply-Demand Gap",
    16: "Income Potential",
    17: "Success Story #1: Meet Michael",
    18: "Michael's Journey",
    19: "Michael's Timeline",
    20: "Success Story #2: Meet Sarah",
    21: "Sarah's Journey",
    22: "Sarah's Timeline",
    23: "Common Objection #1: Don't I Need Experience?",
    24: "Common Objection #2: Isn't It Too Competitive?",
    25: "Reality Check",
    // Add more slide titles as needed
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
    8: "Quick overview of success stories from people who have built successful grant writing businesses using the methods taught in this masterclass.",
    9: "Comparison of grant writing to other freelance services, highlighting the advantages in terms of pricing, competition, and client retention.",
    10: "Introduction to the 5-pillar framework that will be covered during the masterclass, providing structure for the content to follow.",
    11: "Overview of the grant funding landscape with $700 billion available annually and the problem that creates demand for grant writers.",
    12: "Explanation of the three main funding sources: government agencies, private foundations, and corporations with detailed breakdowns.",
    13: "Overview of the four main client categories: non-profits, educational institutions, research organizations, and small businesses.",
    14: "The four key reasons organizations outsource grant writing: expertise, time constraints, success rates, and objectivity.",
    15: "Data showing the high demand and low supply of qualified grant writers, creating a perfect market opportunity.",
    16: "Breakdown of average project values and monthly potential with realistic earnings timeline.",
    17: "Introduction to Michael, a former copywriter who transitioned to grant writing with no prior experience.",
    18: "His transformation from struggling copywriter making $3K/month to earning $12K/month with grant writing.",
    19: "Detailed 90-day timeline showing how he landed his first client in just 14 days after starting.",
    20: "Introduction to Sarah, a complete beginner with no writing background who succeeded in grant writing.",
    21: "Her transformation from zero experience to $8K/month in 90 days using the AI-powered approach.",
    22: "Detailed breakdown of her first 90 days showing key milestones and actions taken.",
    23: "Addressing the experience objection by explaining how the AI system and templates eliminate the need for prior experience.",
    24: "Addressing the competition objection with data showing the favorable supply-demand ratio compared to other freelance services.",
    25: "Honest assessment of the opportunity, acknowledging that it requires work but is more accessible than most realize.",
    // Add more slide descriptions as needed
  };

  return slideDescriptions[slideNumber] || "Slide description goes here.";
}
