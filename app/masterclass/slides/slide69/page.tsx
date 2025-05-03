"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide69Page() {
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
                Slide 69 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide68"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide70"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 8: GRANT WRITING PROCESS
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Stage 3: Grant Content Generation
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Core Narrative Development</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Problem/Need Statement</div>
                            <div className="text-white/80 text-sm">
                              <p>• AI analyzes client data and research</p>
                              <p>• Identifies compelling problem framing</p>
                              <p>• Incorporates relevant statistics and data</p>
                              <p>• Creates urgency and importance</p>
                              <p>• Aligns with funder priorities</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Solution/Approach</div>
                            <div className="text-white/80 text-sm">
                              <p>• Develops clear solution framework</p>
                              <p>• Articulates unique approach</p>
                              <p>• Incorporates evidence-based practices</p>
                              <p>• Highlights innovation aspects</p>
                              <p>• Demonstrates feasibility</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Outcomes & Impact</div>
                            <div className="text-white/80 text-sm">
                              <p>• Defines clear, measurable outcomes</p>
                              <p>• Articulates short and long-term impact</p>
                              <p>• Connects to broader significance</p>
                              <p>• Aligns with funder's desired results</p>
                              <p>• Incorporates evaluation framework</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Section-by-Section Generation</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-purple-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Organizational Background</div>
                              <div className="text-white/80 text-xs">
                                <p>• History and mission</p>
                                <p>• Capacity and qualifications</p>
                                <p>• Track record and achievements</p>
                                <p>• Unique positioning</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-purple-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Project Description</div>
                              <div className="text-white/80 text-xs">
                                <p>• Goals and objectives</p>
                                <p>• Activities and methods</p>
                                <p>• Timeline and milestones</p>
                                <p>• Staffing and management</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-purple-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Evaluation Plan</div>
                              <div className="text-white/80 text-xs">
                                <p>• Evaluation methodology</p>
                                <p>• Performance indicators</p>
                                <p>• Data collection methods</p>
                                <p>• Reporting and learning</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-purple-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Sustainability Plan</div>
                              <div className="text-white/80 text-xs">
                                <p>• Long-term funding strategy</p>
                                <p>• Organizational commitment</p>
                                <p>• Community support</p>
                                <p>• Replication potential</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-purple-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Budget & Budget Narrative</div>
                              <div className="text-white/80 text-xs">
                                <p>• Line-item budget</p>
                                <p>• Budget justification</p>
                                <p>• Cost-effectiveness</p>
                                <p>• Matching funds</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Supporting Materials</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Logic Model</div>
                              <div className="text-white/80 text-xs">
                                <p>AI-generated visual representation of project logic:</p>
                                <p>• Inputs → Activities → Outputs → Outcomes → Impact</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Implementation Timeline</div>
                              <div className="text-white/80 text-xs">
                                <p>Detailed Gantt chart showing:</p>
                                <p>• Key activities, milestones, and deadlines</p>
                                <p>• Responsible parties and dependencies</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Key Personnel Bios</div>
                              <div className="text-white/80 text-xs">
                                <p>Professionally formatted staff bios highlighting:</p>
                                <p>• Relevant experience and qualifications</p>
                                <p>• Role-specific achievements</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">AI Writing Process</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">1</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Initial Draft</div>
                      <div className="text-white/70 text-sm">
                        <p>AI generates first draft based on client information and funder requirements</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">2</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Funder Adaptation</div>
                      <div className="text-white/70 text-sm">
                        <p>Content is tailored to match funder's specific language, priorities, and preferences</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">3</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Human Review</div>
                      <div className="text-white/70 text-sm">
                        <p>Grant writer reviews, edits, and enhances AI-generated content</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">4</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Final Refinement</div>
                      <div className="text-white/70 text-sm">
                        <p>AI polishes content based on human feedback for optimal quality</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> The content generation stage is where our AI system truly shines, producing high-quality grant content in a fraction of the time it would take manually. The system doesn't just "write" - it strategically crafts each section to maximize persuasiveness and alignment with funder priorities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 69: Stage 3: Grant Content Generation
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of the third stage in the AI-powered grant writing process: grant content generation. It presents a systematic approach to creating compelling grant content that aligns with funder priorities and maximizes the chances of success. The key elements include:</p>
                
                <ul>
                  <li><strong>Core Narrative Development:</strong> Three-step process for crafting the central narrative of the grant, including problem/need statement, solution/approach, and outcomes & impact</li>
                  <li><strong>Section-by-Section Generation:</strong> Comprehensive approach to generating all required sections of the grant application</li>
                  <li><strong>Supporting Materials:</strong> Strategic methods for creating visual and supplementary materials that strengthen the application</li>
                  <li><strong>AI Writing Process:</strong> Four-stage process that combines AI generation with human expertise for optimal results</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on the efficiency and quality gains in this critical stage</li>
                </ul>
                
                <p>This slide takes the third stage of the AI grant writing process and provides a detailed, actionable framework for implementation. The core narrative development section breaks down the process into three clear steps: problem/need statement, solution/approach, and outcomes & impact, with specific actions for each step. The section-by-section generation section provides a comprehensive approach to creating all required components of the grant application, including organizational background, project description, evaluation plan, sustainability plan, and budget & budget narrative. The supporting materials section addresses the critical task of creating visual and supplementary materials that strengthen the application, including logic model, implementation timeline, and key personnel bios. The AI writing process section presents a four-stage process that combines AI generation with human expertise: initial draft, funder adaptation, human review, and final refinement. The key takeaway emphasizes the efficiency and quality gains in this critical stage, positioning the AI system as a solution that not only saves time but also enhances the strategic quality of the grant application. This slide provides participants with a complete framework for implementing the third stage of the grant writing process effectively, setting the stage for the review & optimization stage that follows.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide68"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide70"
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
