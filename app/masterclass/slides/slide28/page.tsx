"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide28Page() {
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
                Slide 28 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide27"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide29"
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
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Business Model #2:<br />
                    Monthly Retainer Services
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    The key to consistent, predictable income and long-term client relationships
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">What's Included</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Ongoing Grant Research</div>
                            <div className="text-white/80 text-sm">Continuous monitoring of grant opportunities that match client needs</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Monthly Strategy Calls</div>
                            <div className="text-white/80 text-sm">Regular check-ins to discuss opportunities and priorities</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Grant Calendar Management</div>
                            <div className="text-white/80 text-sm">Tracking deadlines and planning application schedules</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Grant Applications</div>
                            <div className="text-white/80 text-sm">1-2 grant applications per month (depending on tier)</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Reporting & Updates</div>
                            <div className="text-white/80 text-sm">Monthly progress reports and application status updates</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Pricing Tiers</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-white font-semibold">Basic Tier</div>
                            <div className="text-white font-bold">$1,500/month</div>
                          </div>
                          <div className="text-white/80 text-sm">
                            1 grant application per month, research, monthly call
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-white font-semibold">Standard Tier</div>
                            <div className="text-white font-bold">$2,500/month</div>
                          </div>
                          <div className="text-white/80 text-sm">
                            2 grant applications per month, research, bi-weekly calls
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-white font-semibold">Premium Tier</div>
                            <div className="text-white font-bold">$4,000/month</div>
                          </div>
                          <div className="text-white/80 text-sm">
                            3-4 grant applications per month, priority research, weekly calls
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-white/80 text-sm italic">
                        Note: 3-month minimum commitment recommended for all retainer clients.
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
                              <div>Predictable monthly income</div>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>Deeper client relationships</div>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>Less client acquisition time</div>
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
                              <div>Harder to sell initially</div>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>Requires more experience</div>
                            </li>
                            <li className="flex items-start">
                              <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </div>
                              <div>Client may expect 24/7 access</div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Best Practice:</span> After completing 1-2 successful project-based grants for a client, propose a retainer arrangement by emphasizing the benefits of ongoing support and priority access.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 28: Business Model #2: Monthly Retainer Services
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of the monthly retainer business model for grant writing services. The key elements include:</p>
                
                <ul>
                  <li><strong>Service Inclusions:</strong> Five specific services included in the retainer arrangement</li>
                  <li><strong>Pricing Tiers:</strong> Three clear pricing tiers with specific deliverables for each</li>
                  <li><strong>Minimum Commitment:</strong> Recommendation for "3-month minimum commitment" sets appropriate expectations</li>
                  <li><strong>Pros and Cons:</strong> Honest assessment of the advantages and disadvantages of this model</li>
                  <li><strong>Transition Strategy:</strong> Specific advice on how to transition clients from project-based to retainer arrangements</li>
                </ul>
                
                <p>This slide provides practical, actionable information about implementing the retainer business model. The detailed service inclusions create a clear value proposition, while the tiered pricing structure provides options for different client needs and budgets. The pros and cons section builds credibility by acknowledging the limitations of this model, while the best practice advice provides a strategic approach for transitioning clients to this more stable income model.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide27"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide29"
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
