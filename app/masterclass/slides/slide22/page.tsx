"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide22Page() {
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
                Slide 22 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide21"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide23"
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
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Sarah's Timeline
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Detailed breakdown of her first 90 days showing key milestones and actions taken
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
                          <div className="text-white font-bold text-lg mb-1">Day 1-7: Research & Learning</div>
                          <div className="text-white/80 mb-3">
                            Sarah spent the first week learning about grant writing and setting up the AI system.
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Key Actions:</span> Completed system setup, watched training videos, researched local non-profits
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Sarah's Note:</span> "I was surprised by how user-friendly the AI system was. The training videos walked me through everything step by step."
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative flex">
                        <div className="absolute left-8 top-8 -ml-8 h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                          <div className="text-white font-bold text-xl">2</div>
                        </div>
                        <div className="ml-16 bg-white/10 rounded-xl p-6">
                          <div className="text-white font-bold text-lg mb-1">Day 8-14: Leveraging Connections</div>
                          <div className="text-white/80 mb-3">
                            Instead of cold outreach, Sarah reached out to organizations where she had volunteered.
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Key Actions:</span> Created a list of 10 organizations she had connections with, reached out to 5 of them
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Results:</span> 3 meetings scheduled with organization directors
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative flex">
                        <div className="absolute left-8 top-8 -ml-8 h-16 w-16 rounded-full bg-green-500 flex items-center justify-center">
                          <div className="text-white font-bold text-xl">3</div>
                        </div>
                        <div className="ml-16 bg-white/10 rounded-xl p-6">
                          <div className="text-white font-bold text-lg mb-1">Day 21: First Client</div>
                          <div className="text-white/80 mb-3">
                            Sarah secured her first client, a local arts organization where she had volunteered.
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Project Details:</span> $2,500 foundation grant application, 4-week timeline
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Sarah's Note:</span> "They knew I had no grant writing experience, but they trusted me because I understood their mission. I was honest about being new but explained how the AI system would help me create a professional application."
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative flex">
                        <div className="absolute left-8 top-8 -ml-8 h-16 w-16 rounded-full bg-blue-500 flex items-center justify-center">
                          <div className="text-white font-bold text-xl">4</div>
                        </div>
                        <div className="ml-16 bg-white/10 rounded-xl p-6">
                          <div className="text-white font-bold text-lg mb-1">Day 22-45: Building Portfolio</div>
                          <div className="text-white/80 mb-3">
                            While working on her first project, Sarah continued outreach and secured two more clients.
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Key Actions:</span> Completed first project (28 hours total), asked for referrals, reached out to 5 more organizations
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Results:</span> 2 new clients at $3,000 each, 1 referral to another organization
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative flex">
                        <div className="absolute left-8 top-8 -ml-8 h-16 w-16 rounded-full bg-green-500 flex items-center justify-center">
                          <div className="text-white font-bold text-xl">5</div>
                        </div>
                        <div className="ml-16 bg-white/10 rounded-xl p-6">
                          <div className="text-white font-bold text-lg mb-1">Day 60: $5K/Month Milestone</div>
                          <div className="text-white/80 mb-3">
                            By day 60, Sarah had three regular clients and was earning $5,000 per month.
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Client Portfolio:</span> 3 regular clients (1 on retainer at $1,500/month, 2 project-based)
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Working Hours:</span> 20-25 hours per week, primarily during school hours
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative flex">
                        <div className="absolute left-8 top-8 -ml-8 h-16 w-16 rounded-full bg-green-500 flex items-center justify-center">
                          <div className="text-white font-bold text-xl">6</div>
                        </div>
                        <div className="ml-16 bg-white/10 rounded-xl p-6">
                          <div className="text-white font-bold text-lg mb-1">Day 90: $8K/Month Achievement</div>
                          <div className="text-white/80 mb-3">
                            By day 90, Sarah had expanded to five clients and was earning $8,000 per month.
                          </div>
                          <div className="space-y-2">
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Client Portfolio:</span> 5 clients (2 on retainer at $1,500/month each, 3 project-based)
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Working Hours:</span> 25-30 hours per week, maintaining family flexibility
                            </div>
                            <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                              <span className="font-semibold">Sarah's Note:</span> "The AI system was the key to my success. It handled the technical aspects of grant writing while I focused on understanding the organizations and telling their stories effectively. Without it, I would have needed years of experience to achieve the same results."
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
                Slide 22: Sarah's Timeline
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of Sarah's first 90 days showing key milestones and actions taken. The key elements include:</p>
                
                <ul>
                  <li><strong>Visual Timeline:</strong> Clear visual representation of the 90-day journey with key milestones</li>
                  <li><strong>Different Approach:</strong> Emphasis on "Leveraging Connections" rather than cold outreach</li>
                  <li><strong>Realistic Progression:</strong> Gradual build-up from first client to $8K/month</li>
                  <li><strong>Family Focus:</strong> Mentions of "primarily during school hours" and "maintaining family flexibility"</li>
                  <li><strong>AI Emphasis:</strong> Multiple mentions of how the "AI system" made success possible</li>
                  <li><strong>Key Milestones:</strong> Day 21 (first client), Day 60 ($5K/month), and Day 90 ($8K/month) highlighted in green</li>
                </ul>
                
                <p>This slide creates a clear roadmap for the audience by showing the specific steps and timeline for success, particularly for those without professional experience. The detailed breakdown makes the process feel accessible and achievable, while the personal notes address common objections and concerns. The emphasis on leveraging existing connections rather than cold outreach provides an alternative client acquisition strategy that may feel more comfortable for some. The focus on family-friendly scheduling addresses work-life balance concerns, making the opportunity appealing to parents.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide21"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide23"
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
