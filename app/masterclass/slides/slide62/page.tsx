"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide62Page() {
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
                Slide 62 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide61"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide63"
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
                  PART 7: PRICING & BUSINESS MODELS
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Project-Based Pricing Strategy
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Pricing Factors</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Grant Complexity</div>
                            <div className="text-white/80 text-sm">
                              <p>Simple (5-10 pages): $2,000-$3,000</p>
                              <p>Standard (10-25 pages): $3,000-$4,000</p>
                              <p>Complex (25+ pages): $4,000-$5,000+</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Grant Amount</div>
                            <div className="text-white/80 text-sm">
                              <p>$10K-$50K grants: $2,000-$3,000</p>
                              <p>$50K-$250K grants: $3,000-$4,000</p>
                              <p>$250K+ grants: $4,000-$5,000+</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Timeline</div>
                            <div className="text-white/80 text-sm">
                              <p>Standard (4-6 weeks): Base price</p>
                              <p>Expedited (2-3 weeks): +25%</p>
                              <p>Rush (1-2 weeks): +50%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Client Readiness</div>
                            <div className="text-white/80 text-sm">
                              <p>Well-prepared (all materials ready): Base price</p>
                              <p>Partially prepared (some materials): +10%</p>
                              <p>Unprepared (needs extensive support): +20%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">Additional Services</div>
                            <div className="text-white/80 text-sm">
                              <p>Research & opportunity identification: +$500</p>
                              <p>Budget development: +$500</p>
                              <p>Logic model/theory of change: +$500</p>
                              <p>Post-submission support: +$500</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Project Pricing Calculator</h3>
                      
                      <div className="bg-white/10 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-white font-semibold">Base Price (Complexity)</div>
                          <div className="text-white font-semibold text-right">$3,500</div>
                          
                          <div className="text-white/80 text-sm">Grant Amount Adjustment</div>
                          <div className="text-white/80 text-sm text-right">+$500</div>
                          
                          <div className="text-white/80 text-sm">Timeline Adjustment</div>
                          <div className="text-white/80 text-sm text-right">+$875</div>
                          
                          <div className="text-white/80 text-sm">Client Readiness Adjustment</div>
                          <div className="text-white/80 text-sm text-right">+$350</div>
                          
                          <div className="text-white/80 text-sm">Additional Services</div>
                          <div className="text-white/80 text-sm text-right">+$1,000</div>
                          
                          <div className="border-t border-white/20 pt-2 text-white font-semibold">Total Project Price</div>
                          <div className="border-t border-white/20 pt-2 text-white font-semibold text-right">$6,225</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-white font-semibold mb-2">Example Project Details:</div>
                        <ul className="text-white/80 text-sm space-y-1">
                          <li>• Standard complexity grant (10-25 pages)</li>
                          <li>• $250K grant amount</li>
                          <li>• Expedited timeline (2-3 weeks)</li>
                          <li>• Partially prepared client</li>
                          <li>• Additional services: Budget development + Logic model</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Payment Structure</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-teal-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <span className="text-white text-xs font-bold">1</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Deposit (50%)</div>
                              <div className="text-white/80 text-xs">
                                <p>Due upon contract signing</p>
                                <p>Required to secure your spot in the schedule</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-teal-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <span className="text-white text-xs font-bold">2</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Final Payment (50%)</div>
                              <div className="text-white/80 text-xs">
                                <p>Due upon grant submission</p>
                                <p>Not contingent on grant approval</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-teal-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <span className="text-white text-xs font-bold">3</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Payment Methods</div>
                              <div className="text-white/80 text-xs">
                                <p>Credit card, ACH, or check</p>
                                <p>Payment plans available for qualified clients</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Project Scope Definition</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-white font-semibold mb-2">What's Included:</div>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Initial consultation and needs assessment</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Customized information gathering questionnaire</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Complete grant narrative development</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Two rounds of revisions</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Final proofreading and quality check</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Submission-ready documents</div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-white font-semibold mb-2">What's Not Included:</div>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>Grant research and opportunity identification (unless added)</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>Budget development (unless added)</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>More than two rounds of revisions</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>Actual submission of the grant (client responsibility)</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>Post-submission support (unless added)</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>Guarantee of grant approval</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> Clear pricing factors and scope definition prevent scope creep and ensure profitability. The project calculator helps you price consistently while accounting for variables that impact your time and effort.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 62: Project-Based Pricing Strategy
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed framework for pricing project-based grant writing services, helping participants establish clear, profitable pricing structures. The key elements include:</p>
                
                <ul>
                  <li><strong>Five Pricing Factors:</strong> Specific variables that should influence project pricing, with concrete price ranges for each</li>
                  <li><strong>Pricing Calculator:</strong> Practical example showing how to combine the various factors into a final project price</li>
                  <li><strong>Payment Structure:</strong> Clear guidelines for when and how to collect payment</li>
                  <li><strong>Scope Definition:</strong> Detailed breakdown of what is and isn't included in the base price</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on clear pricing and scope to prevent scope creep and ensure profitability</li>
                </ul>
                
                <p>This slide takes the project-based model introduced in the previous slide and provides a detailed, actionable framework for implementation. The five pricing factors (grant complexity, grant amount, timeline, client readiness, and additional services) provide a systematic approach to pricing that accounts for the variables that most impact time and effort. The pricing calculator demonstrates how to combine these factors into a final price, using a specific example to make the process concrete. The payment structure addresses a critical practical concern: when and how to collect payment, with a clear 50/50 split that protects cash flow. The scope definition provides a detailed breakdown of what is and isn't included in the base price, helping prevent scope creep—a common challenge in project-based work. The key takeaway emphasizes the importance of clear pricing and scope definition in maintaining profitability, positioning the pricing calculator as a tool for consistent, profitable pricing. This slide provides participants with a complete framework for implementing the project-based model effectively.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide61"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide63"
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
