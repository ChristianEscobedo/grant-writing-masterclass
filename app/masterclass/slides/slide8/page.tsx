"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide8Page() {
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
              href="/masterclass/slides"
              className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-50 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Back to Slides
            </Button>
            
            <div className="flex items-center">
              <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                Slide 8 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide7"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide9"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Next
                <IconArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 mb-8"
          >
            <div className="aspect-[16/9] relative bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Success Stories Overview
                </h1>
                
                <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 text-center">Michael</h3>
                    <p className="text-white/80 text-sm mb-3 text-center">Former Copywriter</p>
                    
                    <div className="space-y-2">
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white">
                        <span className="font-semibold">Before:</span> $3K/month, inconsistent
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white">
                        <span className="font-semibold">After:</span> $12K/month, steady
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white">
                        <span className="font-semibold">Timeline:</span> 90 days
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 text-center">Sarah</h3>
                    <p className="text-white/80 text-sm mb-3 text-center">Complete Beginner</p>
                    
                    <div className="space-y-2">
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white">
                        <span className="font-semibold">Before:</span> $0, no writing experience
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white">
                        <span className="font-semibold">After:</span> $8K/month
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white">
                        <span className="font-semibold">Timeline:</span> 90 days
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 text-center">David</h3>
                    <p className="text-white/80 text-sm mb-3 text-center">Former Teacher</p>
                    
                    <div className="space-y-2">
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white">
                        <span className="font-semibold">Before:</span> $4K/month, burnout
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white">
                        <span className="font-semibold">After:</span> $15K/month, 25 hrs/week
                      </div>
                      <div className="bg-white/10 rounded-lg p-2 text-sm text-white">
                        <span className="font-semibold">Timeline:</span> 6 months
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">What do they have in common?</span> They all started with no grant writing experience and used our AI-powered approach.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 8: Success Stories Overview
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a quick overview of success stories to establish that the promise is achievable for ordinary people. The key elements include:</p>
                
                <ul>
                  <li><strong>Diverse Backgrounds:</strong> Three different starting points (copywriter, complete beginner, teacher) show it works for various people</li>
                  <li><strong>Clear Before/After:</strong> Specific income numbers before and after implementing the system</li>
                  <li><strong>Realistic Timelines:</strong> 90 days to 6 months shows realistic expectations for results</li>
                  <li><strong>Common Thread:</strong> "They all started with no grant writing experience" addresses the main objection</li>
                  <li><strong>AI Advantage:</strong> Mentions the "AI-powered approach" that makes it accessible to beginners</li>
                </ul>
                
                <p>This slide establishes social proof through relatable success stories of people from different backgrounds. The specific income numbers and timelines create believability and set realistic expectations. The emphasis on "no grant writing experience" directly addresses the main objection, while the mention of the "AI-powered approach" introduces the unique advantage of the system being taught.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide7"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide9"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Next Slide
              <IconArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
