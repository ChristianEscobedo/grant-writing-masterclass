"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide54Page() {
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
                Slide 54 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide53"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide55"
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
                  Phase 4 & 5: AI-Powered Review & Submission
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Phase 4: AI-Powered Review</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Compliance Check</div>
                            <div className="text-white/80 text-sm">
                              <p>AI verifies all grant requirements are met</p>
                              <p className="text-white/60 text-xs mt-1">Checks word counts, required sections, and formatting</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Quality Analysis</div>
                            <div className="text-white/80 text-sm">
                              <p>AI evaluates clarity, persuasiveness, and impact</p>
                              <p className="text-white/60 text-xs mt-1">Scores each section and provides improvement suggestions</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Alignment Assessment</div>
                            <div className="text-white/80 text-sm">
                              <p>AI checks alignment with funder priorities</p>
                              <p className="text-white/60 text-xs mt-1">Identifies areas needing stronger connections to funder goals</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Final Refinement</div>
                            <div className="text-white/80 text-sm">
                              <p>AI suggests specific improvements for weak areas</p>
                              <p className="text-white/60 text-xs mt-1">Generates alternative phrasings and stronger evidence</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-blue-500/20 rounded-lg p-3">
                      <p className="text-white text-center font-medium">
                        Review Time: 2-3 hours (vs. 10-15 hours traditional)
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Phase 5: AI-Powered Submission</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Document Formatting</div>
                            <div className="text-white/80 text-sm">
                              <p>AI formats documents to match requirements</p>
                              <p className="text-white/60 text-xs mt-1">Handles margins, fonts, headers, and page numbers</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Attachment Preparation</div>
                            <div className="text-white/80 text-sm">
                              <p>AI generates checklist of required attachments</p>
                              <p className="text-white/60 text-xs mt-1">Creates templates for budgets and supporting documents</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Submission Checklist</div>
                            <div className="text-white/80 text-sm">
                              <p>AI creates comprehensive pre-submission checklist</p>
                              <p className="text-white/60 text-xs mt-1">Ensures all requirements are met before submission</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Follow-up Plan</div>
                            <div className="text-white/80 text-sm">
                              <p>AI generates post-submission follow-up schedule</p>
                              <p className="text-white/60 text-xs mt-1">Creates templates for status inquiries and updates</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-green-500/20 rounded-lg p-3">
                      <p className="text-white text-center font-medium">
                        Submission Time: 1-2 hours (vs. 5-10 hours traditional)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">The Complete AI Grant Writing Process</h3>
                  <div className="grid grid-cols-5 gap-2">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div className="text-white font-medium text-sm">Research</div>
                      <div className="text-white/70 text-xs">2-3 hours</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div className="text-white font-medium text-sm">Planning</div>
                      <div className="text-white/70 text-xs">1-2 hours</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div className="text-white font-medium text-sm">Writing</div>
                      <div className="text-white/70 text-xs">4-6 hours</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div className="text-white font-medium text-sm">Review</div>
                      <div className="text-white/70 text-xs">2-3 hours</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                        <span className="text-white font-bold">5</span>
                      </div>
                      <div className="text-white font-medium text-sm">Submission</div>
                      <div className="text-white/70 text-xs">1-2 hours</div>
                    </div>
                  </div>
                  
                  <div className="mt-4 bg-green-500/20 rounded-lg p-3">
                    <p className="text-white text-center font-medium">
                      Total Time: 10-16 hours per grant (vs. 75-110 hours traditional)
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Benefit:</span> Our AI system allows you to complete 3-5 grants per month instead of just 1, dramatically increasing your income potential.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 54: Phase 4 & 5: AI-Powered Review & Submission
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide completes the overview of the AI-powered grant writing process by covering the review and submission phases. The key elements include:</p>
                
                <ul>
                  <li><strong>Step-by-Step Process:</strong> Clear breakdown of both the review and submission phases into four manageable steps each</li>
                  <li><strong>Time Comparison:</strong> Direct comparison showing the time savings (2-3 hours vs. 10-15 for review, 1-2 hours vs. 5-10 for submission)</li>
                  <li><strong>Complete Process Summary:</strong> Visual representation of the entire 5-phase process with time estimates for each phase</li>
                  <li><strong>Total Time Savings:</strong> Compelling comparison of total time required (10-16 hours vs. 75-110 hours)</li>
                  <li><strong>Income Impact:</strong> Clear statement of how time savings translates to increased income potential</li>
                </ul>
                
                <p>This slide completes the picture of the AI-powered grant writing process by addressing the often-overlooked review and submission phases. By showing how AI streamlines these final steps, it demonstrates a comprehensive solution that addresses every aspect of grant writing. The step-by-step breakdown makes the process easy to understand and implement, while the time comparisons provide compelling evidence of efficiency gains. The complete process summary ties everything together, showing the dramatic overall time savings (85%) that AI enables. The final key benefit statement translates these time savings into a direct business impact: the ability to complete 3-5 grants per month instead of just 1, which directly impacts income potential. This creates a compelling business case for adopting the AI-powered approach.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide53"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide55"
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
