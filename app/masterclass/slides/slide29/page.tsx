"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide29Page() {
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
                Slide 29 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide28"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide30"
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
                    Business Model #3:<br />
                    Success Fee Arrangements
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    The scalable approach for experienced grant writers to maximize income
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">How It Works</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Initial Agreement</div>
                            <div className="text-white/80 text-sm">Establish fee structure based on grant size and complexity</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Upfront Payment</div>
                            <div className="text-white/80 text-sm">Collect a small base fee ($500-$1,500) to cover initial work</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Grant Development</div>
                            <div className="text-white/80 text-sm">Create and submit the grant application</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Award Notification</div>
                            <div className="text-white/80 text-sm">Client receives grant award notification</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">Success Fee Payment</div>
                            <div className="text-white/80 text-sm">Collect agreed percentage of the grant amount</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Fee Structure Options</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-white font-semibold">Standard Percentage</div>
                            <div className="text-white font-bold">5-10% of Award</div>
                          </div>
                          <div className="text-white/80 text-sm">
                            <div className="mb-1">Example: $100,000 grant × 7% = $7,000 fee</div>
                            <div>Best for: Most grant types, especially foundation grants</div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-white font-semibold">Tiered Structure</div>
                            <div className="text-white font-bold">Sliding Scale</div>
                          </div>
                          <div className="text-white/80 text-sm">
                            <div className="mb-1">Example: 10% of first $100K, 7% of next $100K, 5% of remainder</div>
                            <div>Best for: Large federal or corporate grants</div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-white font-semibold">Hybrid Model</div>
                            <div className="text-white font-bold">Base + Percentage</div>
                          </div>
                          <div className="text-white/80 text-sm">
                            <div className="mb-1">Example: $2,000 base fee + 5% of award amount</div>
                            <div>Best for: Balancing risk with guaranteed income</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-white/80 text-sm italic">
                        Note: Always check that success fees comply with client organization policies and grant requirements.
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Pros & Cons</h3>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <div className="text-white font-semibold mb-2">Pros</div>
                          <ul className="space-y-2 text-white/80 text-sm">
                            <li className="flex items-start">
                              <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>Highest income potential</div>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>Aligns your interests with client</div>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>Easier to sell to new clients</div>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <div className="text-white font-semibold mb-2">Cons</div>
                          <ul className="space-y-2 text-white/80 text-sm">
                            <li className="flex items-start">
                              <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>Delayed payment (3-12 months)</div>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>Risk of non-payment if not awarded</div>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>Not allowed by some organizations</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Best Practice:</span> Combine success fees with a smaller upfront payment to mitigate risk. Start with 1-2 success fee clients while maintaining a base of project and retainer clients for consistent cash flow.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 29: Business Model #3: Success Fee Arrangements
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of the success fee business model for grant writing services. The key elements include:</p>
                
                <ul>
                  <li><strong>Process Breakdown:</strong> Five-step process from initial agreement to success fee payment</li>
                  <li><strong>Fee Structure Options:</strong> Three different approaches to structuring success fees with specific examples</li>
                  <li><strong>Compliance Note:</strong> Important reminder to "check that success fees comply with client organization policies"</li>
                  <li><strong>Pros and Cons:</strong> Honest assessment of the advantages and disadvantages of this model</li>
                  <li><strong>Risk Mitigation:</strong> Advice to "combine success fees with a smaller upfront payment to mitigate risk"</li>
                  <li><strong>Portfolio Approach:</strong> Recommendation to maintain "a base of project and retainer clients for consistent cash flow"</li>
                </ul>
                
                <p>This slide provides practical, actionable information about implementing the success fee business model. The step-by-step process creates a clear roadmap, while the fee structure options provide flexibility for different situations. The pros and cons section builds credibility by acknowledging the significant risks of this model, while the best practice advice provides a strategic approach for incorporating this high-potential but higher-risk model into a balanced business portfolio.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide28"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide30"
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
