"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide27Page() {
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
                Slide 27 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide26"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide28"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-indigo-600 to-blue-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Business Model #1:<br />
                    Project-Based Grant Writing
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    The simplest way to get started and build your portfolio
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">How It Works</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Client Consultation</div>
                            <div className="text-white/80 text-sm">Understand the organization's needs, goals, and eligible grants</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Grant Research</div>
                            <div className="text-white/80 text-sm">Identify suitable grant opportunities with high match potential</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Proposal Development</div>
                            <div className="text-white/80 text-sm">Create the application using our AI-powered system</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Review & Submission</div>
                            <div className="text-white/80 text-sm">Client approves and you submit or they submit directly</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">Follow-Up</div>
                            <div className="text-white/80 text-sm">Offer additional support and discuss future opportunities</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Pricing Structure</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-white font-semibold">Small Grants</div>
                            <div className="text-white font-bold">$1,500-$2,500</div>
                          </div>
                          <div className="text-white/80 text-sm">
                            Under $50,000 funding amount, simpler applications
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-white font-semibold">Medium Grants</div>
                            <div className="text-white font-bold">$3,000-$5,000</div>
                          </div>
                          <div className="text-white/80 text-sm">
                            $50,000-$200,000 funding amount, moderate complexity
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-white font-semibold">Large Grants</div>
                            <div className="text-white font-bold">$5,000-$10,000</div>
                          </div>
                          <div className="text-white/80 text-sm">
                            $200,000+ funding amount, complex federal grants
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-white/80 text-sm italic">
                        Note: Our AI system reduces your time investment by 40-60%, dramatically increasing your effective hourly rate.
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
                              <div>Easy to start</div>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>Larger upfront payments</div>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>Clear deliverables</div>
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
                              <div>Inconsistent income</div>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>Constant client acquisition</div>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>Project scope creep risk</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Best Practice:</span> Start with 2-3 project-based clients to build your portfolio and confidence, then transition some to retainer arrangements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 27: Business Model #1: Project-Based Grant Writing
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of the project-based grant writing business model. The key elements include:</p>
                
                <ul>
                  <li><strong>Process Breakdown:</strong> Five-step process from client consultation to follow-up</li>
                  <li><strong>Pricing Structure:</strong> Specific pricing tiers based on grant size and complexity</li>
                  <li><strong>AI Advantage:</strong> Note that "AI system reduces your time investment by 40-60%" highlights the efficiency benefit</li>
                  <li><strong>Pros and Cons:</strong> Honest assessment of the advantages and disadvantages of this model</li>
                  <li><strong>Strategic Guidance:</strong> Best practice advice to "start with 2-3 project-based clients" then transition to retainers</li>
                </ul>
                
                <p>This slide provides practical, actionable information about implementing the project-based business model. The step-by-step process creates a clear roadmap, while the specific pricing tiers give concrete guidance on how to price services. The pros and cons section builds credibility by acknowledging the limitations of this model, while the best practice advice provides strategic guidance for using this model as a starting point before transitioning to more stable income models.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide26"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide28"
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
