"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide61Page() {
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
                Slide 61 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide60"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide62"
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
                  The 3 Proven Grant Writing Business Models
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="bg-green-500/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">1</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">Project-Based Model</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Pricing Structure</div>
                            <div className="text-white/80 text-xs">
                              <p>$3,000-$5,000 per grant application</p>
                              <p>50% upfront, 50% upon submission</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Best For</div>
                            <div className="text-white/80 text-xs">
                              <p>New grant writers building portfolio</p>
                              <p>Clients with specific one-time needs</p>
                              <p>Organizations with limited budgets</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Pros</div>
                            <div className="text-white/80 text-xs">
                              <p>Easy to sell and understand</p>
                              <p>Clear deliverables and timeline</p>
                              <p>Lower barrier to entry for clients</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Cons</div>
                            <div className="text-white/80 text-xs">
                              <p>Inconsistent income</p>
                              <p>Constant client acquisition needed</p>
                              <p>No recurring revenue</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Monthly Revenue</div>
                            <div className="text-white/80 text-xs">
                              <p>2-3 grants = $6,000-$15,000</p>
                              <p>Requires consistent pipeline</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="bg-teal-500/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">2</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">Retainer Model</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Pricing Structure</div>
                            <div className="text-white/80 text-xs">
                              <p>$2,500-$5,000 per month</p>
                              <p>3, 6, or 12-month contracts</p>
                              <p>Tiered packages based on grant volume</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Best For</div>
                            <div className="text-white/80 text-xs">
                              <p>Organizations with ongoing funding needs</p>
                              <p>Established grant writers seeking stability</p>
                              <p>Clients with multiple grant opportunities</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Pros</div>
                            <div className="text-white/80 text-xs">
                              <p>Predictable recurring revenue</p>
                              <p>Deeper client relationships</p>
                              <p>Less time spent on acquisition</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Cons</div>
                            <div className="text-white/80 text-xs">
                              <p>Higher barrier to entry for clients</p>
                              <p>Requires clear scope boundaries</p>
                              <p>Need systems to manage multiple clients</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Monthly Revenue</div>
                            <div className="text-white/80 text-xs">
                              <p>3-4 clients = $7,500-$20,000</p>
                              <p>Stable and predictable income</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="bg-blue-500/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                      <span className="text-white font-bold text-xl">3</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3">Success Fee Model</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Pricing Structure</div>
                            <div className="text-white/80 text-xs">
                              <p>Base fee: $1,000-$2,000 per grant</p>
                              <p>Success fee: 5-10% of awarded amount</p>
                              <p>Cap at $25,000-$50,000 per grant</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Best For</div>
                            <div className="text-white/80 text-xs">
                              <p>Experienced grant writers with high success rates</p>
                              <p>Clients with limited upfront budgets</p>
                              <p>Large grant opportunities ($100K+)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Pros</div>
                            <div className="text-white/80 text-xs">
                              <p>Potential for large payouts</p>
                              <p>Lower barrier to entry for clients</p>
                              <p>Aligns your interests with client success</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Cons</div>
                            <div className="text-white/80 text-xs">
                              <p>Unpredictable cash flow</p>
                              <p>Long payment cycles (6-12+ months)</p>
                              <p>Success factors outside your control</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Monthly Revenue</div>
                            <div className="text-white/80 text-xs">
                              <p>Highly variable: $2,000-$50,000+</p>
                              <p>Requires pipeline of 10+ active grants</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Recommended Business Model Strategy</h3>
                  
                  <div className="bg-white/10 rounded-lg p-4 text-left">
                    <div className="flex items-start">
                      <div className="bg-yellow-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-semibold text-lg">The Hybrid Approach</div>
                        <div className="text-white/80 text-base mt-2">
                          <p>Start with 2-3 project-based clients to build portfolio and cash flow</p>
                          <p>Transition successful project clients to retainer model for stability</p>
                          <p>Add success fee component for large grants ($250K+) to maximize upside</p>
                          <p>Goal: 70% retainer revenue, 20% project revenue, 10% success fees</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> The retainer model provides the most stable foundation for a $10K+/month grant writing business, but a hybrid approach gives you flexibility to serve different client needs and maximize revenue opportunities.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 61: The 3 Proven Grant Writing Business Models
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide presents three distinct business models for a grant writing business, comparing their structures, advantages, and disadvantages. The key elements include:</p>
                
                <ul>
                  <li><strong>Three Business Models:</strong> Clear breakdown of project-based, retainer, and success fee models</li>
                  <li><strong>Comprehensive Comparison:</strong> Detailed analysis of pricing structures, ideal clients, pros, cons, and revenue potential for each model</li>
                  <li><strong>Hybrid Strategy:</strong> Practical recommendation to combine elements of all three models for maximum stability and growth</li>
                  <li><strong>Revenue Targets:</strong> Specific revenue allocation goals across the different models</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on the retainer model as the foundation for a stable business</li>
                </ul>
                
                <p>This slide provides a comprehensive overview of the different business models available for a grant writing business, helping participants choose the approach that best fits their goals and circumstances. The detailed comparison of each model's pricing structure, ideal clients, pros, cons, and revenue potential provides a clear framework for decision-making. The hybrid strategy recommendation acknowledges that there's no one-size-fits-all approach, suggesting a practical combination that leverages the strengths of each model while mitigating their weaknesses. The specific revenue allocation targets (70% retainer, 20% project, 10% success fees) provide a concrete goal to work toward, while the key takeaway emphasizes the importance of the retainer model as the foundation for a stable $10K+/month business. This slide sets the stage for the more detailed pricing strategies that will be covered in subsequent slides.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide60"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide62"
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
