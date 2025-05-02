"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide65Page() {
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
                Slide 65 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide64"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide66"
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
                  Scaling to $10K+/Month: The Hybrid Model
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">The $10K/Month Revenue Roadmap</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-teal-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Phase 1: Foundation (Months 1-3)</div>
                            <div className="text-white/80 text-sm">
                              <p>2-3 project-based clients: $6,000-$9,000/month</p>
                              <p>Focus on building portfolio and testimonials</p>
                              <p>Target simple, high-probability grants</p>
                              <p>Goal: Consistent $6K+ monthly revenue</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-teal-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Phase 2: Stability (Months 4-6)</div>
                            <div className="text-white/80 text-sm">
                              <p>Convert 1-2 project clients to retainers: $2,500-$5,000/month</p>
                              <p>Maintain 1-2 project clients: $3,000-$6,000/month</p>
                              <p>Focus on building recurring revenue base</p>
                              <p>Goal: $8K+ monthly revenue with 30%+ recurring</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-teal-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Phase 3: Growth (Months 7-9)</div>
                            <div className="text-white/80 text-sm">
                              <p>Expand to 2-3 retainer clients: $5,000-$10,000/month</p>
                              <p>Add 1-2 success fee clients for large grants</p>
                              <p>Maintain 1 project client for new opportunities</p>
                              <p>Goal: $10K+ monthly revenue with 50%+ recurring</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-teal-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Phase 4: Optimization (Months 10-12)</div>
                            <div className="text-white/80 text-sm">
                              <p>Retainer clients: $7,000-$12,000/month (60-70%)</p>
                              <p>Project clients: $2,000-$4,000/month (20%)</p>
                              <p>Success fee clients: $1,000-$4,000/month (10-20%)</p>
                              <p>Goal: $12K-$15K+ monthly revenue with optimal mix</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Hybrid Model Revenue Calculator</h3>
                      
                      <div className="bg-white/10 rounded-lg p-4 mb-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-white font-semibold">Revenue Source</div>
                          <div className="text-white font-semibold text-right">Monthly Revenue</div>
                          
                          <div className="text-white/80 text-sm">Retainer Clients (3)</div>
                          <div className="text-white/80 text-sm text-right">$9,500</div>
                          
                          <div className="text-white/80 text-xs pl-4">• Premium Package (1)</div>
                          <div className="text-white/80 text-xs text-right">$5,000</div>
                          
                          <div className="text-white/80 text-xs pl-4">• Standard Package (1)</div>
                          <div className="text-white/80 text-xs text-right">$3,000</div>
                          
                          <div className="text-white/80 text-xs pl-4">• Basic Package (1)</div>
                          <div className="text-white/80 text-xs text-right">$1,500</div>
                          
                          <div className="text-white/80 text-sm">Project Clients (1)</div>
                          <div className="text-white/80 text-sm text-right">$3,000</div>
                          
                          <div className="text-white/80 text-xs pl-4">• Standard Grant (1)</div>
                          <div className="text-white/80 text-xs text-right">$3,000</div>
                          
                          <div className="text-white/80 text-sm">Success Fee Clients (2)</div>
                          <div className="text-white/80 text-sm text-right">$2,500</div>
                          
                          <div className="text-white/80 text-xs pl-4">• Base Fees (2)</div>
                          <div className="text-white/80 text-xs text-right">$2,500</div>
                          
                          <div className="text-white/80 text-xs pl-4">• Success Fees (Avg/Month)</div>
                          <div className="text-white/80 text-xs text-right">$0-$5,000</div>
                          
                          <div className="border-t border-white/20 pt-2 text-white font-semibold">Total Monthly Revenue</div>
                          <div className="border-t border-white/20 pt-2 text-white font-semibold text-right">$15,000</div>
                          
                          <div className="text-white/80 text-sm">Recurring Revenue %</div>
                          <div className="text-white/80 text-sm text-right">63%</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Client Portfolio Management</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Client Capacity Management</div>
                              <div className="text-white/80 text-xs">
                                <p>Maximum clients per model:</p>
                                <p>• Retainer: 3-4 clients (depending on package level)</p>
                                <p>• Project: 1-2 clients per month</p>
                                <p>• Success Fee: 2-3 active applications</p>
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
                              <div className="text-white font-semibold">Client Conversion Strategy</div>
                              <div className="text-white/80 text-xs">
                                <p>Start with project-based work to demonstrate value</p>
                                <p>Transition to retainer after successful project</p>
                                <p>Add success fee component for large grants</p>
                                <p>Regularly evaluate and optimize client portfolio</p>
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
                              <div className="text-white font-semibold">Revenue Optimization</div>
                              <div className="text-white/80 text-xs">
                                <p>Target revenue mix:</p>
                                <p>• Retainer: 60-70% (stability)</p>
                                <p>• Project: 20-30% (new opportunities)</p>
                                <p>• Success Fee: 10-20% (upside potential)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Scaling Beyond $10K/Month</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Team Expansion</div>
                      <div className="text-white/70 text-sm">
                        <p>Hire grant researchers, writers, and administrators to increase capacity</p>
                        <p>Start with contractors, then transition to employees</p>
                        <p>Potential: $20K-$50K+/month</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Agency Model</div>
                      <div className="text-white/70 text-sm">
                        <p>Build a full-service grant agency with multiple writers</p>
                        <p>Specialize by industry or grant type</p>
                        <p>Potential: $50K-$100K+/month</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Software Licensing</div>
                      <div className="text-white/70 text-sm">
                        <p>White-label our AI Grant Builder to other grant writers</p>
                        <p>Create recurring SaaS revenue stream</p>
                        <p>Potential: Unlimited scale</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> The hybrid model combines the best aspects of each pricing model to create a stable, scalable business. Start with projects to build momentum, transition to retainers for stability, and add success fees for growth potential.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 65: Scaling to $10K+/Month: The Hybrid Model
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive roadmap for scaling a grant writing business to $10,000+ per month using a hybrid business model. The key elements include:</p>
                
                <ul>
                  <li><strong>Four-Phase Roadmap:</strong> Clear, sequential growth strategy from foundation to optimization over a 12-month period</li>
                  <li><strong>Revenue Calculator:</strong> Detailed breakdown of how different client types combine to create a $15,000/month business</li>
                  <li><strong>Portfolio Management:</strong> Specific guidelines for client capacity, conversion strategy, and revenue optimization</li>
                  <li><strong>Scaling Strategies:</strong> Three distinct approaches for growing beyond $10,000/month</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on combining different models for maximum stability and growth</li>
                </ul>
                
                <p>This slide brings together all the business models discussed in previous slides to create a comprehensive roadmap for building a $10,000+/month grant writing business. The four-phase roadmap provides a clear, sequential growth strategy from foundation (building a portfolio with project-based clients) to optimization (creating an ideal mix of retainer, project, and success fee clients) over a 12-month period. The revenue calculator demonstrates how different client types combine to create a $15,000/month business, with specific breakdowns for each revenue source. The portfolio management section provides practical guidelines for client capacity (how many clients you can handle of each type), conversion strategy (how to move clients from projects to retainers), and revenue optimization (the ideal revenue mix for stability and growth). The scaling strategies section presents three distinct approaches for growing beyond $10,000/month: team expansion, agency model, and software licensing. The key takeaway emphasizes the strategic advantage of the hybrid model: combining the best aspects of each pricing model to create a stable, scalable business. This slide provides participants with a complete roadmap for building a successful grant writing business, from initial projects to a thriving enterprise.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide64"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide66"
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
