"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide10Page() {
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
                Slide 10 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide9"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide11"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Masterclass Framework: The 5 Pillars
                </h1>
                
                <div className="grid grid-cols-5 gap-4 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center">
                    <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-purple-800 font-bold mb-3">1</div>
                    <h3 className="text-lg font-bold text-white mb-2">The Opportunity</h3>
                    <div className="text-white/80 text-sm">
                      Why grant writing is a $700B opportunity
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center">
                    <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-purple-800 font-bold mb-3">2</div>
                    <h3 className="text-lg font-bold text-white mb-2">The Business Model</h3>
                    <div className="text-white/80 text-sm">
                      3 profitable models for consistent income
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center">
                    <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-purple-800 font-bold mb-3">3</div>
                    <h3 className="text-lg font-bold text-white mb-2">Client Acquisition</h3>
                    <div className="text-white/80 text-sm">
                      How to find and land high-paying clients
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center">
                    <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-purple-800 font-bold mb-3">4</div>
                    <h3 className="text-lg font-bold text-white mb-2">Grant Writing Process</h3>
                    <div className="text-white/80 text-sm">
                      Creating winning applications with AI
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex flex-col items-center">
                    <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-purple-800 font-bold mb-3">5</div>
                    <h3 className="text-lg font-bold text-white mb-2">Scaling Your Business</h3>
                    <div className="text-white/80 text-sm">
                      From first client to $10K+/month
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-3">What We'll Cover</h3>
                    <ul className="space-y-2 text-white/90 text-sm">
                      <li className="flex items-start">
                        <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>The exact strategies our successful students use</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>How to get started with zero experience</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>How to price your services for maximum profit</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>How to use AI to create winning applications</div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-3">What We Won't Cover</h3>
                    <ul className="space-y-2 text-white/90 text-sm">
                      <li className="flex items-start">
                        <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>Complex technical details that AI handles for you</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>Outdated strategies that no longer work</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>Theory without practical implementation steps</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-red-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>Vague advice without specific action steps</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 10: Masterclass Framework: The 5 Pillars
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide introduces the 5-pillar framework that will be covered during the masterclass, providing structure for the content to follow. The key elements include:</p>
                
                <ul>
                  <li><strong>Clear Structure:</strong> The 5 pillars create a logical framework for the masterclass content</li>
                  <li><strong>Visual Organization:</strong> Each pillar is visually represented with a numbered box</li>
                  <li><strong>Brief Descriptions:</strong> Concise explanations of what each pillar covers</li>
                  <li><strong>What We'll Cover:</strong> Specific benefits and outcomes from the masterclass</li>
                  <li><strong>What We Won't Cover:</strong> Setting expectations by clarifying what won't be included</li>
                </ul>
                
                <p>This slide creates a clear roadmap for the masterclass content while setting appropriate expectations. The "What We'll Cover" section emphasizes practical strategies and implementation, while the "What We Won't Cover" section addresses potential concerns about complexity and vague advice. The mention of "AI handles for you" reinforces the accessibility of the approach for beginners.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide9"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide11"
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
