"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide46Page() {
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
                Slide 46 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide45"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide47"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Days 61-90: Scaling & Systems
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Building strategic partnerships and reaching $10K/month
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Strategic Partnership Development</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Partner Identification</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">Research and identify 10 ideal strategic partners in complementary fields</p>
                              <p className="text-white/70 italic text-xs">Timeline: Days 61-65</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Value Proposition Development</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">Create specific value propositions for each type of potential partner</p>
                              <p className="text-white/70 italic text-xs">Timeline: Days 65-70</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Partnership Outreach</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">Contact 5-7 potential partners with personalized partnership proposals</p>
                              <p className="text-white/70 italic text-xs">Timeline: Days 70-80</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Partnership Agreement</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">Finalize at least 1-2 formal partnership agreements with referral structures</p>
                              <p className="text-white/70 italic text-xs">Timeline: Days 80-90</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Success Fee Implementation</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                            <div>
                              <div className="text-white font-semibold">Success Fee Structure</div>
                              <div className="text-white/80 text-sm">
                                <p className="mb-1">Develop your success fee model with clear terms and percentages</p>
                                <p className="text-white/70 italic text-xs">Timeline: Days 61-70</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                            <div>
                              <div className="text-white font-semibold">Success Fee Contract</div>
                              <div className="text-white/80 text-sm">
                                <p className="mb-1">Create a comprehensive contract template for success fee arrangements</p>
                                <p className="text-white/70 italic text-xs">Timeline: Days 70-75</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                            <div>
                              <div className="text-white font-semibold">Client Identification</div>
                              <div className="text-white/80 text-sm">
                                <p className="mb-1">Identify 2-3 clients who are good candidates for success fee arrangements</p>
                                <p className="text-white/70 italic text-xs">Timeline: Days 75-85</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                            <div>
                              <div className="text-white font-semibold">First Success Fee Client</div>
                              <div className="text-white/80 text-sm">
                                <p className="mb-1">Sign at least one client on a success fee arrangement</p>
                                <p className="text-white/70 italic text-xs">Timeline: Days 85-90</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Business Scaling Systems</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Client Management Dashboard</div>
                              <div className="text-white/80 text-sm">Implement a system to track all clients, projects, and deadlines</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Grant Opportunity Database</div>
                              <div className="text-white/80 text-sm">Create a system to track and match grant opportunities to clients</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Automated Client Reporting</div>
                              <div className="text-white/80 text-sm">Develop templates for consistent, professional client reporting</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Financial Tracking System</div>
                              <div className="text-white/80 text-sm">Implement a system to track revenue, expenses, and profitability</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Milestone:</span> By day 90, you should have 3-4 active project clients, 2 retainer clients, 1-2 strategic partnerships, and at least 1 success fee arrangement in place. Your monthly revenue should reach $10,000+.
                  </p>
                </div>
                
                <div className="mt-4 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Action Step:</span> Begin researching potential strategic partners in your area or industry. Create a list of 10 ideal partners with notes on why they would be a good fit and what value you could offer them.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 46: Days 61-90: Scaling & Systems
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of days 61-90 of the implementation plan, focusing on strategic partnerships, success fee implementation, and business scaling systems. The key elements include:</p>
                
                <ul>
                  <li><strong>Strategic Partnership Development:</strong> Four-step process for identifying, approaching, and formalizing partnerships</li>
                  <li><strong>Success Fee Implementation:</strong> Four-step process for developing and implementing success fee arrangements</li>
                  <li><strong>Business Scaling Systems:</strong> Four key systems to implement for managing a growing business</li>
                  <li><strong>Specific Timelines:</strong> Day-by-day guidance for when to complete each task</li>
                  <li><strong>Key Milestone:</strong> Clear target for client composition and revenue by day 90</li>
                  <li><strong>Action Step:</strong> Immediate next step focused on strategic partner research</li>
                </ul>
                
                <p>This slide provides practical, actionable guidance for the third month of business, building on the foundation and growth established in the first two months. The strategic partnership development process creates a systematic approach to forming valuable business relationships that can provide a steady stream of referrals. The success fee implementation section introduces the third business model, creating potential for higher income with successful grants. The business scaling systems address the operational challenges of managing a growing business with multiple clients and revenue streams. The specific timelines for each task create accountability and help with planning, while the key milestone provides a clear target to aim for. The action step creates immediate implementation with a specific focus on strategic partner research, which is critical for sustainable growth.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide45"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide47"
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
