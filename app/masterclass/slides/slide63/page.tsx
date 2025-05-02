"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide63Page() {
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
                Slide 63 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide62"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide64"
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
                  Retainer Model Pricing Strategy
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Retainer Package Tiers</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-teal-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Basic Package: $2,500/month</div>
                            <div className="text-white/80 text-sm">
                              <p>1 grant application per quarter (4 per year)</p>
                              <p>Monthly grant opportunity reports</p>
                              <p>Up to 5 hours of consulting/support per month</p>
                              <p>Best for: Small organizations with limited funding needs</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-teal-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Standard Package: $3,500/month</div>
                            <div className="text-white/80 text-sm">
                              <p>2 grant applications per quarter (8 per year)</p>
                              <p>Bi-weekly grant opportunity reports</p>
                              <p>Up to 10 hours of consulting/support per month</p>
                              <p>Best for: Mid-sized organizations with regular funding needs</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-teal-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Premium Package: $5,000/month</div>
                            <div className="text-white/80 text-sm">
                              <p>3 grant applications per quarter (12 per year)</p>
                              <p>Weekly grant opportunity reports</p>
                              <p>Up to 15 hours of consulting/support per month</p>
                              <p>Best for: Larger organizations with extensive funding needs</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-teal-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Enterprise Package: $7,500+/month</div>
                            <div className="text-white/80 text-sm">
                              <p>4+ grant applications per quarter (16+ per year)</p>
                              <p>Custom grant research and strategy</p>
                              <p>Unlimited consulting/support</p>
                              <p>Best for: Major institutions with complex funding strategies</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Contract Terms & Conditions</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Contract Duration</div>
                              <div className="text-white/80 text-xs">
                                <p>Minimum 3-month commitment</p>
                                <p>6 and 12-month options with discounts (5% and 10%)</p>
                                <p>Auto-renewal with 30-day cancellation notice</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Payment Terms</div>
                              <div className="text-white/80 text-xs">
                                <p>Monthly billing on the 1st of each month</p>
                                <p>Payment due within 7 days</p>
                                <p>Late fees: 5% after 7 days, 10% after 14 days</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Service Delivery</div>
                              <div className="text-white/80 text-xs">
                                <p>Monthly strategy calls (30-60 minutes)</p>
                                <p>Regular progress reports</p>
                                <p>Dedicated account manager</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Scope Management</div>
                              <div className="text-white/80 text-xs">
                                <p>Clear definition of grant complexity limits</p>
                                <p>Additional fees for grants exceeding scope</p>
                                <p>Unused grant allocations roll over for one quarter</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Retainer ROI Calculator</h3>
                      
                      <div className="bg-white/10 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-white font-semibold">Monthly Retainer Fee</div>
                          <div className="text-white font-semibold text-right">$3,500</div>
                          
                          <div className="text-white/80 text-sm">Annual Investment</div>
                          <div className="text-white/80 text-sm text-right">$42,000</div>
                          
                          <div className="text-white/80 text-sm">Grants Written Per Year</div>
                          <div className="text-white/80 text-sm text-right">8</div>
                          
                          <div className="text-white/80 text-sm">Average Grant Size</div>
                          <div className="text-white/80 text-sm text-right">$100,000</div>
                          
                          <div className="text-white/80 text-sm">Success Rate</div>
                          <div className="text-white/80 text-sm text-right">25%</div>
                          
                          <div className="text-white/80 text-sm">Expected Annual Funding</div>
                          <div className="text-white/80 text-sm text-right">$200,000</div>
                          
                          <div className="border-t border-white/20 pt-2 text-white font-semibold">Return on Investment</div>
                          <div className="border-t border-white/20 pt-2 text-white font-semibold text-right">476%</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Selling the Retainer Model</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-teal-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Cost Predictability</div>
                      <div className="text-white/70 text-sm">
                        <p>"Our retainer model provides predictable monthly costs for your grant writing needs, making budgeting easier and eliminating surprise expenses."</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-teal-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Priority Service</div>
                      <div className="text-white/70 text-sm">
                        <p>"Retainer clients receive priority service, dedicated support, and faster response times. You'll never miss a grant deadline due to our availability."</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-teal-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Long-Term Strategy</div>
                      <div className="text-white/70 text-sm">
                        <p>"Our retainer relationship allows us to develop a comprehensive, long-term funding strategy rather than just chasing individual grants."</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> The retainer model creates predictable income for you and predictable results for clients. The ROI calculator demonstrates that even with a conservative 25% success rate, clients receive a substantial return on their investment.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 63: Retainer Model Pricing Strategy
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed framework for pricing retainer-based grant writing services, helping participants establish recurring revenue streams. The key elements include:</p>
                
                <ul>
                  <li><strong>Four Package Tiers:</strong> Clearly defined service levels with specific deliverables and pricing for different client needs</li>
                  <li><strong>Contract Terms:</strong> Detailed guidelines for contract duration, payment terms, service delivery, and scope management</li>
                  <li><strong>ROI Calculator:</strong> Practical tool demonstrating the financial value of the retainer relationship to clients</li>
                  <li><strong>Selling Points:</strong> Specific language for communicating the benefits of the retainer model to potential clients</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on the mutual benefits of the retainer model for both the grant writer and the client</li>
                </ul>
                
                <p>This slide takes the retainer model introduced earlier and provides a detailed, actionable framework for implementation. The four package tiers (Basic, Standard, Premium, and Enterprise) provide clear options for different client needs and budgets, with specific deliverables for each tier. The contract terms section addresses critical practical concerns like contract duration, payment terms, service delivery, and scope management, providing a solid foundation for the client relationship. The ROI calculator demonstrates the financial value of the retainer relationship, showing that even with a conservative 25% success rate, clients receive a substantial return on their investment. The selling points provide specific language for communicating the benefits of the retainer model to potential clients, focusing on cost predictability, priority service, and long-term strategy. The key takeaway emphasizes the mutual benefits of the retainer model: predictable income for the grant writer and predictable results for clients. This slide provides participants with a complete framework for implementing the retainer model effectively, positioning it as the foundation for a stable, profitable grant writing business.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide62"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide64"
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
