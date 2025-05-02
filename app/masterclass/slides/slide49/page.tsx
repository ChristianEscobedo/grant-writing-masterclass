"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide49Page() {
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
                Slide 49 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide48"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide50"
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
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 8: CONCLUSION & NEXT STEPS
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Your Roadmap to Success<br />
                  in Grant Writing
                </h1>
                
                <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="bg-green-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">What You've Learned</h3>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>The 3 proven business models</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Client acquisition frameworks</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>AI-powered grant writing</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>90-day implementation plan</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Challenge troubleshooting</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="bg-teal-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Your Next Steps</h3>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="bg-teal-500 rounded-full w-5 h-5 flex items-center justify-center text-white font-bold mr-2 mt-0.5">1</div>
                          <div>Complete your implementation calendar with specific dates and deadlines</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-teal-500 rounded-full w-5 h-5 flex items-center justify-center text-white font-bold mr-2 mt-0.5">2</div>
                          <div>Set up your legal business structure within the next 7 days</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-teal-500 rounded-full w-5 h-5 flex items-center justify-center text-white font-bold mr-2 mt-0.5">3</div>
                          <div>Create your target client list of 20 potential clients</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-teal-500 rounded-full w-5 h-5 flex items-center justify-center text-white font-bold mr-2 mt-0.5">4</div>
                          <div>Send your first 5 outreach emails using our templates</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-teal-500 rounded-full w-5 h-5 flex items-center justify-center text-white font-bold mr-2 mt-0.5">5</div>
                          <div>Join our implementation community for ongoing support</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="bg-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Additional Resources</h3>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Implementation Workbook</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Template Library</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>AI Prompt Database</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Private Community Access</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Weekly Q&A Calls</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Your Path to $10K/Month</h3>
                    
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="bg-green-500/30 rounded-full w-12 h-12 flex items-center justify-center mb-2 mx-auto">
                          <span className="text-white font-bold">1</span>
                        </div>
                        <div className="text-white font-semibold">Month 1</div>
                        <div className="text-white/80 text-sm">$3-5K</div>
                        <div className="text-white/60 text-xs">Foundation</div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="bg-teal-500/30 rounded-full w-12 h-12 flex items-center justify-center mb-2 mx-auto">
                          <span className="text-white font-bold">2</span>
                        </div>
                        <div className="text-white font-semibold">Month 2</div>
                        <div className="text-white/80 text-sm">$5-7K</div>
                        <div className="text-white/60 text-xs">Growth</div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="bg-blue-500/30 rounded-full w-12 h-12 flex items-center justify-center mb-2 mx-auto">
                          <span className="text-white font-bold">3</span>
                        </div>
                        <div className="text-white font-semibold">Month 3</div>
                        <div className="text-white/80 text-sm">$10K+</div>
                        <div className="text-white/60 text-xs">Scaling</div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4 text-center">
                        <div className="bg-purple-500/30 rounded-full w-12 h-12 flex items-center justify-center mb-2 mx-auto">
                          <span className="text-white font-bold">6</span>
                        </div>
                        <div className="text-white font-semibold">Month 6</div>
                        <div className="text-white/80 text-sm">$15-20K</div>
                        <div className="text-white/60 text-xs">Mastery</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Ready to Take the Next Step?</h3>
                  <p className="text-white text-lg mb-6 text-center">
                    Join our comprehensive Grant Writing Business Accelerator program for complete access to our AI tools, templates, community, and personalized coaching.
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all">
                      Learn More About the Accelerator
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 49: Your Roadmap to Success in Grant Writing
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive conclusion to the masterclass, summarizing key learnings and providing clear next steps. The key elements include:</p>
                
                <ul>
                  <li><strong>Section Header:</strong> "PART 8: CONCLUSION & NEXT STEPS" clearly indicates the start of the final section</li>
                  <li><strong>What You've Learned:</strong> Concise summary of the key concepts covered in the masterclass</li>
                  <li><strong>Next Steps:</strong> Five specific, actionable steps to begin implementation immediately</li>
                  <li><strong>Additional Resources:</strong> Overview of the resources available to support implementation</li>
                  <li><strong>Revenue Progression:</strong> Visual reminder of the revenue targets for each phase</li>
                  <li><strong>Call to Action:</strong> Clear invitation to learn more about the high-ticket offer</li>
                </ul>
                
                <p>This slide effectively bridges the gap between the educational content of the masterclass and the implementation phase that follows. The summary of key learnings reinforces the value provided in the masterclass, while the specific next steps create a clear path to immediate action. The additional resources highlight the support available through the high-ticket offer, and the revenue progression reminds participants of the financial opportunity. The call to action provides a natural transition to learning more about the Accelerator program, positioning it as the logical next step for those who want comprehensive support in implementing what they've learned.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide48"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide50"
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
