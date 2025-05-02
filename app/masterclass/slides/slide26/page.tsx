"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide26Page() {
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
                Slide 26 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide25"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide27"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 3: THE BUSINESS MODEL
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Three Profitable Business Models<br />
                  for Grant Writers
                </h1>
                
                <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="bg-indigo-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Project-Based</h3>
                    <div className="text-2xl font-bold text-white mb-2">$3K-$5K</div>
                    <div className="text-white/80 text-sm mb-4">Per Grant Application</div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                      <div className="flex justify-between mb-1">
                        <span>Best For:</span>
                        <span className="font-semibold">New Writers</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">20-30 hours</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="bg-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Retainer</h3>
                    <div className="text-2xl font-bold text-white mb-2">$2K-$4K</div>
                    <div className="text-white/80 text-sm mb-4">Monthly Recurring</div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                      <div className="flex justify-between mb-1">
                        <span>Best For:</span>
                        <span className="font-semibold">Stable Income</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-semibold">15-25 hrs/month</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="bg-green-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Success Fee</h3>
                    <div className="text-2xl font-bold text-white mb-2">5-10%</div>
                    <div className="text-white/80 text-sm mb-4">Of Funded Amount</div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                      <div className="flex justify-between mb-1">
                        <span>Best For:</span>
                        <span className="font-semibold">Scaling Income</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Potential:</span>
                        <span className="font-semibold">$2.5K-$50K+</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Insight:</span> The most successful grant writers combine all three models to maximize income and stability.
                  </p>
                </div>
                
                <div className="mt-4 text-white/80 text-sm">
                  <em>In the next few slides, we'll break down each model in detail and show you exactly how to implement them.</em>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 26: Three Profitable Business Models for Grant Writers
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide introduces the three main business models for grant writers: project-based, retainer, and success fee. The key elements include:</p>
                
                <ul>
                  <li><strong>Section Header:</strong> "PART 3: THE BUSINESS MODEL" clearly indicates the start of a new section</li>
                  <li><strong>Three Models:</strong> Clear visual representation of the three business models with distinct icons</li>
                  <li><strong>Specific Pricing:</strong> Concrete figures for each model ($3K-$5K per project, $2K-$4K monthly, 5-10% of funded amount)</li>
                  <li><strong>Best Use Cases:</strong> Guidance on when each model is most appropriate (new writers, stable income, scaling income)</li>
                  <li><strong>Time Investment:</strong> Realistic time requirements for each model (20-30 hours, 15-25 hours/month)</li>
                  <li><strong>Key Insight:</strong> Strategic advice to combine all three models for maximum success</li>
                </ul>
                
                <p>This slide creates desire by showing the specific income potential of each business model. The visual organization makes the options immediately clear, while the specific pricing and time investments set realistic expectations. The "Key Insight" about combining models provides strategic guidance that adds value beyond just information. The note about upcoming detailed breakdowns creates anticipation for the next slides.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide25"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide27"
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
