"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide41Page() {
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
                Slide 41 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide40"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide42"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    AI-Powered Grant Content Creation
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    How to develop compelling grant narratives in a fraction of the time
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">The 5-Step Content Creation Process</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Information Gathering</div>
                            <div className="text-white/80 text-sm">Use our AI-powered questionnaire to extract key information from clients</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Section Planning</div>
                            <div className="text-white/80 text-sm">AI analyzes grant requirements and creates a detailed content outline</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Initial Draft Generation</div>
                            <div className="text-white/80 text-sm">AI creates first drafts of each section based on client information</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Human Review & Direction</div>
                            <div className="text-white/80 text-sm">You review and provide feedback for AI refinement</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">Final Polishing</div>
                            <div className="text-white/80 text-sm">AI refines content based on your feedback and funder preferences</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Key Section Prompts</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">Organization Background</div>
                          <div className="bg-white/10 p-3 rounded text-white/90 text-sm font-mono">
                            "Using the following information about [Organization Name]: [Client Info], create a compelling 250-word organization background section that emphasizes their credibility, experience, and alignment with [Funder Name]'s priorities of [Priorities]. Highlight their track record and unique approach to [Focus Area]."
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">Need Statement</div>
                          <div className="bg-white/10 p-3 rounded text-white/90 text-sm font-mono">
                            "Create a compelling 300-word need statement for [Project Name] that: 1) Defines the problem using specific data and statistics, 2) Explains who is affected and how, 3) Identifies the root causes, 4) Connects to [Funder Name]'s mission of [Mission]. Use an urgent but hopeful tone."
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">Project Description</div>
                          <div className="bg-white/10 p-3 rounded text-white/90 text-sm font-mono">
                            "Based on the following project information: [Project Details], create a detailed 500-word project description that: 1) Clearly explains the approach and methodology, 2) Outlines specific activities and timeline, 3) Identifies key personnel and their roles, 4) Explains how this addresses the need statement. Use [Funder Name]'s preferred terminology including [Terms]."
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Specialized Content Elements</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Budget Justification</div>
                              <div className="text-white/80 text-sm">AI creates detailed budget narratives that align with funder expectations</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Evaluation Plan</div>
                              <div className="text-white/80 text-sm">AI develops comprehensive evaluation frameworks with appropriate metrics</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Sustainability Plan</div>
                              <div className="text-white/80 text-sm">AI creates compelling narratives about long-term project viability</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Executive Summary</div>
                              <div className="text-white/80 text-sm">AI distills the full proposal into a compelling overview</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Benefit:</span> Our AI content creation system reduces writing time by 50-70% while maintaining high quality. A complete grant narrative that would typically take 15-20 hours can be developed in just 4-6 hours.
                  </p>
                </div>
                
                <div className="mt-4 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Action Step:</span> Use one of the provided prompts to generate content for a sample grant application. Review the output and practice giving the AI feedback to refine the content further.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 41: AI-Powered Grant Content Creation
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of how AI can be used for grant content creation, the second phase of the grant writing process. The key elements include:</p>
                
                <ul>
                  <li><strong>5-Step Content Creation Process:</strong> Clear framework for using AI to gather information, plan, draft, review, and polish grant content</li>
                  <li><strong>Key Section Prompts:</strong> Ready-to-use prompts for creating organization backgrounds, need statements, and project descriptions</li>
                  <li><strong>Specialized Content Elements:</strong> Four specific types of specialized grant content that can be created with AI</li>
                  <li><strong>Human-AI Collaboration:</strong> Emphasis on the review and feedback process in steps 4-5</li>
                  <li><strong>Time Savings:</strong> Specific comparison of "4-6 hours" versus the typical "15-20 hours"</li>
                  <li><strong>Key Benefit:</strong> Clear articulation of the 50-70% time reduction while maintaining quality</li>
                  <li><strong>Action Step:</strong> Practical next step to test the AI prompts and practice the feedback process</li>
                </ul>
                
                <p>This slide addresses the core of grant writing: content creation. By providing a structured process and specific AI prompts, it makes the task feel concrete and implementable. The emphasis on human-AI collaboration in steps 4-5 addresses potential concerns about quality and customization, showing that the human grant writer still plays a critical role. The specific time savings (15-20 hours reduced to 4-6 hours) creates a compelling value proposition, while the action step creates immediate implementation with a specific task that demonstrates the value proposition firsthand.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide40"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide42"
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
