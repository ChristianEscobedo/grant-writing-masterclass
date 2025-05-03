"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide70Page() {
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
                Slide 70 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide69"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide71"
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
                  Stage 4: Review & Optimization
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">AI-Powered Quality Assessment</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Funder Criteria Scoring</div>
                            <div className="text-white/80 text-sm">
                              <p>• AI analyzes grant against scoring rubric</p>
                              <p>• Evaluates each section against criteria</p>
                              <p>• Assigns scores on 1-10 scale</p>
                              <p>• Identifies weak sections</p>
                              <p>• Provides specific improvement recommendations</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Clarity & Readability Analysis</div>
                            <div className="text-white/80 text-sm">
                              <p>• Evaluates reading level and complexity</p>
                              <p>• Identifies jargon and technical language</p>
                              <p>• Assesses sentence and paragraph structure</p>
                              <p>• Checks for logical flow and transitions</p>
                              <p>• Suggests simplification where needed</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Persuasiveness Evaluation</div>
                            <div className="text-white/80 text-sm">
                              <p>• Assesses emotional and logical appeal</p>
                              <p>• Evaluates use of evidence and data</p>
                              <p>• Checks for compelling storytelling</p>
                              <p>• Analyzes urgency and importance framing</p>
                              <p>• Suggests persuasion enhancements</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Consistency & Alignment Check</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-purple-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Internal Consistency</div>
                              <div className="text-white/80 text-xs">
                                <p>• Verify consistent terminology throughout</p>
                                <p>• Check for contradictions between sections</p>
                                <p>• Ensure budget aligns with narrative</p>
                                <p>• Confirm timeline matches activities</p>
                                <p>• Validate evaluation metrics match objectives</p>
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
                              <div className="text-white font-semibold">Funder Alignment</div>
                              <div className="text-white/80 text-xs">
                                <p>• Check alignment with funder's mission</p>
                                <p>• Verify use of funder's preferred terminology</p>
                                <p>• Ensure focus on funder's priority areas</p>
                                <p>• Confirm adherence to funder's approach</p>
                                <p>• Validate alignment with funding priorities</p>
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
                              <div className="text-white font-semibold">Requirements Compliance</div>
                              <div className="text-white/80 text-xs">
                                <p>• Verify all required sections are included</p>
                                <p>• Check adherence to page/word limits</p>
                                <p>• Confirm all attachments are prepared</p>
                                <p>• Validate formatting requirements</p>
                                <p>• Ensure all questions are answered</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Final Optimization</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Targeted Revisions</div>
                              <div className="text-white/80 text-xs">
                                <p>• Prioritize improvements by impact</p>
                                <p>• Strengthen weak sections</p>
                                <p>• Enhance persuasive elements</p>
                                <p>• Clarify complex concepts</p>
                                <p>• Add compelling examples</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Final Human Review</div>
                              <div className="text-white/80 text-xs">
                                <p>• Expert grant writer review</p>
                                <p>• Client review and approval</p>
                                <p>• Subject matter expert input</p>
                                <p>• Final quality assurance check</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Submission Preparation</div>
                              <div className="text-white/80 text-xs">
                                <p>• Format according to requirements</p>
                                <p>• Prepare all attachments</p>
                                <p>• Organize submission package</p>
                                <p>• Create submission checklist</p>
                                <p>• Schedule submission (early!)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Grant Quality Score</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Alignment</div>
                      <div className="text-white/70 text-sm text-center">
                        <div className="text-2xl font-bold mb-1">9.2</div>
                        <p className="text-xs">Funder Fit</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Clarity</div>
                      <div className="text-white/70 text-sm text-center">
                        <div className="text-2xl font-bold mb-1">8.7</div>
                        <p className="text-xs">Readability</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Impact</div>
                      <div className="text-white/70 text-sm text-center">
                        <div className="text-2xl font-bold mb-1">9.5</div>
                        <p className="text-xs">Significance</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Feasibility</div>
                      <div className="text-white/70 text-sm text-center">
                        <div className="text-2xl font-bold mb-1">8.9</div>
                        <p className="text-xs">Implementation</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg p-4">
                      <div className="bg-green-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Overall</div>
                      <div className="text-white/70 text-sm text-center">
                        <div className="text-2xl font-bold mb-1">9.1</div>
                        <p className="text-xs">Excellent</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> The review and optimization stage is what separates average grant writers from exceptional ones. Our AI system provides objective, data-driven assessment that catches issues human reviewers might miss, while still incorporating critical human judgment for the final polish.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 70: Stage 4: Review & Optimization
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of the fourth and final stage in the AI-powered grant writing process: review and optimization. It presents a systematic approach to ensuring the highest quality grant application with the greatest chance of success. The key elements include:</p>
                
                <ul>
                  <li><strong>AI-Powered Quality Assessment:</strong> Three-step process for evaluating the grant application against funder criteria, clarity standards, and persuasiveness metrics</li>
                  <li><strong>Consistency & Alignment Check:</strong> Comprehensive approach to ensuring internal consistency, funder alignment, and requirements compliance</li>
                  <li><strong>Final Optimization:</strong> Strategic methods for targeted revisions, final human review, and submission preparation</li>
                  <li><strong>Grant Quality Score:</strong> Quantitative assessment of the grant application across five key dimensions</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on the critical importance of this stage in distinguishing exceptional grant applications</li>
                </ul>
                
                <p>This slide takes the fourth stage of the AI grant writing process and provides a detailed, actionable framework for implementation. The AI-powered quality assessment section breaks down the process into three clear steps: funder criteria scoring, clarity & readability analysis, and persuasiveness evaluation, with specific actions for each step. The consistency & alignment check section provides a comprehensive approach to ensuring the grant application is internally consistent, aligned with funder priorities, and compliant with all requirements. The final optimization section addresses the critical task of making targeted revisions, incorporating human expertise, and preparing for submission. The grant quality score section presents a quantitative assessment of the grant application across five key dimensions: alignment, clarity, impact, feasibility, and overall quality. The key takeaway emphasizes the critical importance of this stage in distinguishing exceptional grant applications, positioning the AI system as a tool that combines objective, data-driven assessment with human judgment. This slide provides participants with a complete framework for implementing the fourth stage of the grant writing process effectively, completing the comprehensive AI-powered grant writing system presented across the previous slides.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide69"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide71"
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
