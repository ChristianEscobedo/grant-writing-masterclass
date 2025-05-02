"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide64Page() {
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
                Slide 64 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide63"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide65"
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
                  Success Fee Model Pricing Strategy
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Success Fee Structure</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Base Fee Component</div>
                            <div className="text-white/80 text-sm">
                              <p>Simple grants: $1,000 base fee</p>
                              <p>Standard grants: $1,500 base fee</p>
                              <p>Complex grants: $2,000 base fee</p>
                              <p>Purpose: Covers basic costs and ensures minimum compensation</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Success Fee Percentage</div>
                            <div className="text-white/80 text-sm">
                              <p>Standard rate: 5-10% of awarded amount</p>
                              <p>Sliding scale based on grant size:</p>
                              <p>• $10K-$100K grants: 10%</p>
                              <p>• $100K-$500K grants: 7%</p>
                              <p>• $500K+ grants: 5%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Fee Caps</div>
                            <div className="text-white/80 text-sm">
                              <p>Maximum fee per grant: $25,000-$50,000</p>
                              <p>Prevents excessive fees on very large grants</p>
                              <p>Example: $1M grant at 5% = $50,000 cap</p>
                              <p>$2M grant at 5% = $50,000 cap (not $100,000)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Payment Timeline</div>
                            <div className="text-white/80 text-sm">
                              <p>Base fee: Due upon contract signing</p>
                              <p>Success fee: Due within 30 days of grant award</p>
                              <p>Partial payments for multi-year grants</p>
                              <p>Example: 50% upon award, 25% in Year 2, 25% in Year 3</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Success Fee Calculator</h3>
                      
                      <div className="bg-white/10 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-white font-semibold">Grant Amount</div>
                          <div className="text-white font-semibold text-right">$250,000</div>
                          
                          <div className="text-white/80 text-sm">Base Fee</div>
                          <div className="text-white/80 text-sm text-right">$1,500</div>
                          
                          <div className="text-white/80 text-sm">Success Fee Percentage</div>
                          <div className="text-white/80 text-sm text-right">7%</div>
                          
                          <div className="text-white/80 text-sm">Success Fee Amount</div>
                          <div className="text-white/80 text-sm text-right">$17,500</div>
                          
                          <div className="text-white/80 text-sm">Fee Cap Applied?</div>
                          <div className="text-white/80 text-sm text-right">No</div>
                          
                          <div className="border-t border-white/20 pt-2 text-white font-semibold">Total Fee</div>
                          <div className="border-t border-white/20 pt-2 text-white font-semibold text-right">$19,000</div>
                          
                          <div className="text-white/80 text-sm">Percentage of Grant</div>
                          <div className="text-white/80 text-sm text-right">7.6%</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Success Fee Contract Essentials</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Clear Definition of "Success"</div>
                              <div className="text-white/80 text-xs">
                                <p>Specify exactly what constitutes a successful grant award</p>
                                <p>Address partial funding scenarios (pro-rated fees)</p>
                                <p>Include timeline for award notification</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Client Responsibilities</div>
                              <div className="text-white/80 text-xs">
                                <p>Timely provision of required information</p>
                                <p>Notification requirements for grant awards</p>
                                <p>Consequences for withholding award information</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Termination Clauses</div>
                              <div className="text-white/80 text-xs">
                                <p>Success fee still applies if grant is awarded after termination</p>
                                <p>Time limit for success fee eligibility (typically 12-18 months)</p>
                                <p>Handling of in-progress applications upon termination</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Dispute Resolution</div>
                              <div className="text-white/80 text-xs">
                                <p>Clear process for resolving payment disputes</p>
                                <p>Interest charges for late payments</p>
                                <p>Mediation or arbitration clauses</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">When to Use the Success Fee Model</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-white font-semibold mb-2">Ideal Scenarios:</div>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Large grant opportunities ($250K+) where the potential fee justifies the risk</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Clients with limited upfront budgets but strong grant eligibility</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Grants with high probability of success (30%+ success rate)</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Experienced grant writers with proven track records</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>As a supplement to retainer or project-based models</div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-white font-semibold mb-2">Scenarios to Avoid:</div>
                      <ul className="text-white/80 text-sm space-y-1">
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>Small grant opportunities where the success fee would be minimal</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>Highly competitive grants with very low success rates (<10%)</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>Clients with poor financial track records or payment history</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>When you need consistent, predictable cash flow</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>As your only business model (too much revenue uncertainty)</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> The success fee model can be highly profitable for large grants with good success probability, but should be used selectively and with strong contractual protections. Limit it to 10-20% of your overall client portfolio to manage cash flow risk.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 64: Success Fee Model Pricing Strategy
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed framework for implementing the success fee model in a grant writing business, balancing potential high rewards with risk management. The key elements include:</p>
                
                <ul>
                  <li><strong>Fee Structure:</strong> Comprehensive breakdown of base fees, success fee percentages, fee caps, and payment timelines</li>
                  <li><strong>Fee Calculator:</strong> Practical example showing how to calculate the total fee for a specific grant</li>
                  <li><strong>Contract Essentials:</strong> Critical contract provisions to protect your interests in a success fee arrangement</li>
                  <li><strong>Usage Guidelines:</strong> Clear guidance on when to use and when to avoid the success fee model</li>
                  <li><strong>Key Takeaway:</strong> Strategic recommendation to limit success fee clients to 10-20% of the overall portfolio</li>
                </ul>
                
                <p>This slide takes the success fee model introduced earlier and provides a detailed, actionable framework for implementation. The fee structure section breaks down the four key components: base fees to ensure minimum compensation, success fee percentages with a sliding scale based on grant size, fee caps to prevent excessive fees on very large grants, and payment timelines to manage cash flow. The fee calculator demonstrates how these components combine in a real-world example, showing a total fee of $19,000 (7.6% of the grant) for a $250,000 grant. The contract essentials section addresses critical legal considerations, including clear definition of "success," client responsibilities, termination clauses, and dispute resolution. The usage guidelines provide specific scenarios where the success fee model is ideal (large grants, limited client budgets, high success probability) and scenarios to avoid (small grants, highly competitive grants, clients with poor payment history). The key takeaway emphasizes the potential profitability of the model while recommending a conservative approach: limiting success fee clients to 10-20% of the overall portfolio to manage cash flow risk. This slide provides participants with a complete framework for implementing the success fee model effectively while mitigating its inherent risks.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide63"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide65"
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
