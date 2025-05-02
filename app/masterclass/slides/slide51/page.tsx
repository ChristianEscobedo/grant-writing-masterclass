"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide51Page() {
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
                Slide 51 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide50"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide52"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 5: GRANT WRITING PROCESS
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  The AI-Powered Grant Writing Process
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Traditional Grant Writing</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Research Phase</div>
                            <div className="text-white/80 text-sm">
                              <p>20-30 hours manually searching for grants</p>
                              <p className="text-white/60 text-xs mt-1">Tedious searching through multiple databases</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Planning Phase</div>
                            <div className="text-white/80 text-sm">
                              <p>10-15 hours organizing information</p>
                              <p className="text-white/60 text-xs mt-1">Creating outlines and gathering materials</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Writing Phase</div>
                            <div className="text-white/80 text-sm">
                              <p>30-40 hours writing from scratch</p>
                              <p className="text-white/60 text-xs mt-1">Staring at blank pages and writer's block</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Review Phase</div>
                            <div className="text-white/80 text-sm">
                              <p>10-15 hours of manual editing</p>
                              <p className="text-white/60 text-xs mt-1">Multiple rounds of revisions and formatting</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">Submission Phase</div>
                            <div className="text-white/80 text-sm">
                              <p>5-10 hours of administrative work</p>
                              <p className="text-white/60 text-xs mt-1">Formatting, attachments, and submission</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-red-500/20 rounded-lg p-3">
                      <p className="text-white text-center font-medium">
                        Total: 75-110 hours per grant
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">AI-Powered Grant Writing</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Research Phase</div>
                            <div className="text-white/80 text-sm">
                              <p>2-3 hours with AI-powered search</p>
                              <p className="text-white/60 text-xs mt-1">Automated matching with 95% accuracy</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Planning Phase</div>
                            <div className="text-white/80 text-sm">
                              <p>1-2 hours with AI-generated outlines</p>
                              <p className="text-white/60 text-xs mt-1">Automated information gathering and organization</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Writing Phase</div>
                            <div className="text-white/80 text-sm">
                              <p>4-6 hours with AI-generated drafts</p>
                              <p className="text-white/60 text-xs mt-1">90% of content generated by AI, just needs review</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Review Phase</div>
                            <div className="text-white/80 text-sm">
                              <p>2-3 hours with AI-assisted editing</p>
                              <p className="text-white/60 text-xs mt-1">Automated grammar, style, and compliance checks</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">Submission Phase</div>
                            <div className="text-white/80 text-sm">
                              <p>1-2 hours with automated tools</p>
                              <p className="text-white/60 text-xs mt-1">Automated formatting and submission checklist</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-green-500/20 rounded-lg p-3">
                      <p className="text-white text-center font-medium">
                        Total: 10-16 hours per grant (85% time reduction)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">The AI Advantage</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">85%</div>
                      <div className="text-white/80 text-sm">Time Reduction</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">3x</div>
                      <div className="text-white/80 text-sm">More Grants Per Month</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">25%</div>
                      <div className="text-white/80 text-sm">Higher Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 51: The AI-Powered Grant Writing Process
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide introduces the AI-powered grant writing process, comparing it to the traditional approach to highlight the significant time savings and efficiency gains. The key elements include:</p>
                
                <ul>
                  <li><strong>Side-by-Side Comparison:</strong> Clear visual comparison between traditional and AI-powered approaches</li>
                  <li><strong>Phase Breakdown:</strong> Detailed breakdown of the five phases of grant writing (Research, Planning, Writing, Review, Submission)</li>
                  <li><strong>Time Estimates:</strong> Specific time estimates for each phase, highlighting the dramatic reduction with AI</li>
                  <li><strong>Key Metrics:</strong> Three compelling statistics that summarize the AI advantage</li>
                </ul>
                
                <p>This slide addresses a critical pain point for potential clients: the time-intensive nature of traditional grant writing. By showing how AI reduces the time required by 85% (from 75-110 hours to just 10-16 hours per grant), it creates a compelling case for the AI-powered approach. The side-by-side comparison makes the benefits immediately clear, while the breakdown by phase helps participants understand exactly how the AI system improves each step of the process. The key metrics at the bottom provide memorable takeaways that participants can use to explain the benefits to potential clients.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide50"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide52"
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
