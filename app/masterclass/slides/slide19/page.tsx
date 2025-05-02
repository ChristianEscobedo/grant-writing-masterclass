"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide19Page() {
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
                Slide 19 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide18"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide20"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Michael's Timeline
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Detailed 90-day timeline showing how he landed his first client in just 14 days
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-5xl mx-auto">
                  <div className="relative">
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-white/30"></div>
                    
                    <div className="space-y-12">
                      <div className="relative flex">
                        <div className="absolute left-8 top-8 -ml-8 h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                          <div className="text-white font-bold text-xl">1</div>
                        </div>
                        <div className="ml-16 bg-white/10 rounded-xl p-6">
                          <div className="text-white font-bold text-lg mb-1">Day 1-3: Research & Setup</div>
                          <div className="text-white/80 mb-3">
                            Michael spent the first three days researching the grant writing market and setting up his business.
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Key Actions:</span> Researched grant types, identified target clients, set up AI grant writing system
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Michael's Note:</span> "The AI system was surprisingly easy to set up. I spent most of my time researching potential clients."
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative flex">
                        <div className="absolute left-8 top-8 -ml-8 h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                          <div className="text-white font-bold text-xl">2</div>
                        </div>
                        <div className="ml-16 bg-white/10 rounded-xl p-6">
                          <div className="text-white font-bold text-lg mb-1">Day 4-7: Outreach Campaign</div>
                          <div className="text-white/80 mb-3">
                            Using the outreach templates, Michael contacted 20 non-profit organizations in his area.
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Key Actions:</span> Created prospect list, customized outreach templates, sent 20 emails
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Results:</span> 5 responses, 3 discovery calls scheduled
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative flex">
                        <div className="absolute left-8 top-8 -ml-8 h-16 w-16 rounded-full bg-green-500 flex items-center justify-center">
                          <div className="text-white font-bold text-xl">3</div>
                        </div>
                        <div className="ml-16 bg-white/10 rounded-xl p-6">
                          <div className="text-white font-bold text-lg mb-1">Day 14: First Client</div>
                          <div className="text-white/80 mb-3">
                            After conducting discovery calls, Michael landed his first client - a local environmental non-profit.
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Project Details:</span> $3,500 federal grant application, 3-week timeline
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Michael's Note:</span> "I was upfront about being new to grant writing but explained how my system would ensure quality. They were more concerned with results than experience."
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative flex">
                        <div className="absolute left-8 top-8 -ml-8 h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                          <div className="text-white font-bold text-xl">4</div>
                        </div>
                        <div className="ml-16 bg-white/10 rounded-xl p-6">
                          <div className="text-white font-bold text-lg mb-1">Day 15-45: Building Momentum</div>
                          <div className="text-white/80 mb-3">
                            While working on his first project, Michael continued outreach and secured two more clients.
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Key Actions:</span> Completed first project (25 hours total), sent 30 more outreach emails
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Results:</span> 2 new clients at $4,000 each, first client requested another project
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative flex">
                        <div className="absolute left-8 top-8 -ml-8 h-16 w-16 rounded-full bg-green-500 flex items-center justify-center">
                          <div className="text-white font-bold text-xl">5</div>
                        </div>
                        <div className="ml-16 bg-white/10 rounded-xl p-6">
                          <div className="text-white font-bold text-lg mb-1">Day 90: $10K+ Milestone</div>
                          <div className="text-white/80 mb-3">
                            By day 90, Michael had four regular clients and was consistently earning over $10,000 per month.
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Client Portfolio:</span> 4 regular clients (2 on retainer at $2,000/month each, 2 project-based)
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Monthly Income:</span> $12,000 ($4,000 from retainers, $8,000 from projects)
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Michael's Note:</span> "The most surprising part was how quickly I went from zero to $10K+. The AI system was the key - it allowed me to produce high-quality work from day one."
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 19: Michael's Timeline
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed 90-day timeline showing how Michael landed his first client in just 14 days and reached $10K+/month by day 90. The key elements include:</p>
                
                <ul>
                  <li><strong>Visual Timeline:</strong> Clear visual representation of the 90-day journey with key milestones</li>
                  <li><strong>Specific Actions:</strong> Concrete steps Michael took at each stage of the process</li>
                  <li><strong>Realistic Progression:</strong> Gradual build-up from first client to consistent $10K+/month</li>
                  <li><strong>Personal Notes:</strong> Direct quotes from Michael add authenticity and address objections</li>
                  <li><strong>AI Emphasis:</strong> Multiple mentions of how the "AI system" made success possible</li>
                  <li><strong>Key Milestones:</strong> Day 14 (first client) and Day 90 ($10K+ milestone) highlighted in green</li>
                </ul>
                
                <p>This slide creates a clear roadmap for the audience by showing the specific steps and timeline for success. The detailed breakdown makes the process feel accessible and achievable, while the personal notes address common objections and concerns. The emphasis on the AI system reinforces its importance in enabling success, particularly for those with no prior experience. The realistic progression from first client to $10K+/month sets appropriate expectations for the timeline.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide18"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide20"
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
