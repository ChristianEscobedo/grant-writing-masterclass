"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide35Page() {
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
                Slide 35 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide34"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide36"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    The High-Converting Proposal Template
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    How to create proposals that close 70%+ of qualified prospects
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Proposal Structure</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Executive Summary</div>
                            <div className="text-white/80 text-sm">Brief overview of their needs and your solution (1 page)</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Current Situation</div>
                            <div className="text-white/80 text-sm">Summary of their challenges and funding needs (1 page)</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Grant Opportunities</div>
                            <div className="text-white/80 text-sm">3-5 specific grants they qualify for with deadlines (2-3 pages)</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Our Approach</div>
                            <div className="text-white/80 text-sm">Your process and AI-powered methodology (1-2 pages)</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">Investment & ROI</div>
                            <div className="text-white/80 text-sm">Pricing options and expected return on investment (1 page)</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">6</div>
                          <div>
                            <div className="text-white font-semibold">Next Steps</div>
                            <div className="text-white/80 text-sm">Clear timeline and action items to move forward (1 page)</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-white/80 text-sm italic">
                      Total length: 7-9 pages (quality over quantity)
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Key Elements That Convert</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Personalization</div>
                              <div className="text-white/80 text-sm">Reference specific details from your discovery call throughout</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Specific Grant Matches</div>
                              <div className="text-white/80 text-sm">Include actual grant opportunities with deadlines and award amounts</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">ROI Calculation</div>
                              <div className="text-white/80 text-sm">Show the potential return on their investment with specific numbers</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Social Proof</div>
                              <div className="text-white/80 text-sm">Include 1-2 relevant case studies or testimonials from similar organizations</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Urgency Element</div>
                              <div className="text-white/80 text-sm">Highlight upcoming grant deadlines or limited availability</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Pricing Presentation</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">Option Structure</div>
                          <div className="text-white/80 text-sm">
                            Always present 3 options to avoid yes/no decisions:
                          </div>
                          <ul className="mt-2 space-y-1 text-white/80 text-sm list-disc pl-4">
                            <li>Basic: Single grant application ($3,000-$4,000)</li>
                            <li>Standard: 3-month retainer ($2,500/month)</li>
                            <li>Premium: 6-month retainer with success fee option ($2,000/month + 5%)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">Value Framing</div>
                          <div className="text-white/80 text-sm">
                            Compare your fee to the potential grant amount:
                            <div className="mt-2 pl-4">
                              "$4,000 investment for potential $75,000 grant = 1,775% ROI"
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">Payment Terms</div>
                          <div className="text-white/80 text-sm">
                            <ul className="space-y-1 list-disc pl-4">
                              <li>50% upfront, 50% upon submission</li>
                              <li>Monthly retainer paid at beginning of month</li>
                              <li>Success fees paid within 30 days of award</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Action Step:</span> Create your proposal template using our AI-powered proposal generator (included in your program). Customize it for your first prospect and send within 24 hours of your discovery call.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 35: The High-Converting Proposal Template
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive framework for creating effective proposals that convert prospects into paying clients. The key elements include:</p>
                
                <ul>
                  <li><strong>6-Part Structure:</strong> Clear, organized proposal structure with specific page counts for each section</li>
                  <li><strong>Key Converting Elements:</strong> Five specific elements that increase conversion rates</li>
                  <li><strong>Pricing Strategy:</strong> Three-option approach to avoid yes/no decisions</li>
                  <li><strong>Value Framing:</strong> Specific technique for presenting fees in relation to potential grant amounts</li>
                  <li><strong>Payment Terms:</strong> Clear guidelines for structuring payment schedules</li>
                  <li><strong>Conversion Rate:</strong> Specific metric of "70%+ of qualified prospects" creates credibility</li>
                  <li><strong>AI Reference:</strong> Mention of "AI-powered proposal generator" reinforces the program's value</li>
                </ul>
                
                <p>This slide addresses the critical step of converting interested prospects into paying clients through effective proposals. The structured 6-part framework makes proposal creation feel manageable and organized, while the specific page counts provide guidance on appropriate length and emphasis. The key converting elements highlight what makes proposals effective, while the pricing strategy provides a proven approach to presenting options. The value framing technique helps justify fees by showing the potential return on investment, addressing price objections before they arise. The action step creates immediate implementation with a specific timeline.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide34"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide36"
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
