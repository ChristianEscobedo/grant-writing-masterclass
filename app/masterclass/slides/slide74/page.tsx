"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide74Page() {
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
                Slide 74 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide73"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide75"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 9: SCALING YOUR BUSINESS
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Financial Management for Growth
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Financial Metrics to Track</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Revenue Metrics</div>
                            <div className="text-white/80 text-sm">
                              <p>• Monthly recurring revenue (MRR)</p>
                              <p>• Revenue by service type</p>
                              <p>• Revenue by client</p>
                              <p>• Average revenue per client</p>
                              <p>• Revenue growth rate</p>
                              <p>• Revenue forecast (90-day, 6-month, annual)</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Profitability Metrics</div>
                            <div className="text-white/80 text-sm">
                              <p>• Gross profit margin</p>
                              <p>• Net profit margin</p>
                              <p>• Profit per client</p>
                              <p>• Profit per service type</p>
                              <p>• Profit per team member</p>
                              <p>• Profit per hour worked</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Cash Flow Metrics</div>
                            <div className="text-white/80 text-sm">
                              <p>• Cash flow forecast</p>
                              <p>• Accounts receivable aging</p>
                              <p>• Average collection period</p>
                              <p>• Cash runway</p>
                              <p>• Burn rate</p>
                              <p>• Cash reserve ratio</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Client Acquisition Metrics</div>
                            <div className="text-white/80 text-sm">
                              <p>• Customer acquisition cost (CAC)</p>
                              <p>• Lifetime value (LTV)</p>
                              <p>• LTV:CAC ratio</p>
                              <p>• Sales cycle length</p>
                              <p>• Conversion rates by stage</p>
                              <p>• Client retention rate</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Financial Systems</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-teal-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Accounting System</div>
                              <div className="text-white/80 text-xs">
                                <p>Implement cloud-based accounting software:</p>
                                <p>• Automated expense tracking</p>
                                <p>• Invoice generation and management</p>
                                <p>• Financial reporting</p>
                                <p>• Tax preparation</p>
                                <p>• Bank and payment processor integration</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-teal-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Billing & Payment System</div>
                              <div className="text-white/80 text-xs">
                                <p>Streamline payment collection:</p>
                                <p>• Automated recurring billing</p>
                                <p>• Multiple payment methods</p>
                                <p>• Payment plans and installments</p>
                                <p>• Late payment reminders</p>
                                <p>• Client payment portal</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-teal-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Expense Management</div>
                              <div className="text-white/80 text-xs">
                                <p>Control and track business expenses:</p>
                                <p>• Expense categorization</p>
                                <p>• Receipt capture and storage</p>
                                <p>• Expense approval workflows</p>
                                <p>• Contractor/employee reimbursements</p>
                                <p>• Budget vs. actual tracking</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-teal-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Financial Dashboard</div>
                              <div className="text-white/80 text-xs">
                                <p>Real-time visibility into business finances:</p>
                                <p>• Key financial metrics at a glance</p>
                                <p>• Cash flow visualization</p>
                                <p>• Revenue and expense trends</p>
                                <p>• Profitability analysis</p>
                                <p>• Goal tracking and forecasting</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Financial Planning for Growth</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Revenue Forecasting</div>
                              <div className="text-white/80 text-xs">
                                <p>Develop realistic revenue projections:</p>
                                <p>• Client retention and expansion</p>
                                <p>• New client acquisition targets</p>
                                <p>• Service mix evolution</p>
                                <p>• Seasonal variations</p>
                                <p>• Multiple scenarios (conservative, expected, optimistic)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Expense Planning</div>
                              <div className="text-white/80 text-xs">
                                <p>Strategic approach to managing expenses:</p>
                                <p>• Fixed vs. variable costs</p>
                                <p>• Team expansion timing</p>
                                <p>• Technology investments</p>
                                <p>• Marketing budget allocation</p>
                                <p>• Office and infrastructure costs</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Cash Flow Management</div>
                              <div className="text-white/80 text-xs">
                                <p>Ensure adequate cash flow during growth:</p>
                                <p>• Cash reserve requirements</p>
                                <p>• Payment terms optimization</p>
                                <p>• Deposit and milestone payment structure</p>
                                <p>• Credit line establishment</p>
                                <p>• Cash flow gap contingency plans</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Profit Maximization Strategies</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Revenue Enhancement</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Implement strategic price increases</li>
                          <li>Develop premium service tiers</li>
                          <li>Create upsell and cross-sell opportunities</li>
                          <li>Introduce success fees for large grants</li>
                          <li>Develop recurring revenue streams</li>
                          <li>Implement minimum engagement sizes</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Efficiency Optimization</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Leverage AI for content generation</li>
                          <li>Create reusable content libraries</li>
                          <li>Implement standardized processes</li>
                          <li>Automate repetitive tasks</li>
                          <li>Optimize team member utilization</li>
                          <li>Improve project scoping accuracy</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Cost Management</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Implement value-based pricing</li>
                          <li>Optimize contractor vs. employee mix</li>
                          <li>Negotiate volume discounts with vendors</li>
                          <li>Implement tiered compensation structures</li>
                          <li>Reduce client acquisition costs</li>
                          <li>Minimize administrative overhead</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> Financial management is the backbone of sustainable growth. By implementing robust financial systems, tracking the right metrics, and strategically planning for growth, you can build a highly profitable grant writing business that scales efficiently and provides long-term financial security.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 74: Financial Management for Growth
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive framework for the financial management needed to support sustainable growth in a grant writing business. It covers the essential financial metrics, systems, planning approaches, and profit maximization strategies that form the foundation of a financially sound scaling strategy. The key elements include:</p>
                
                <ul>
                  <li><strong>Financial Metrics to Track:</strong> Detailed breakdown of the key metrics across four categories: revenue, profitability, cash flow, and client acquisition</li>
                  <li><strong>Financial Systems:</strong> Comprehensive approach to implementing robust financial infrastructure, including accounting, billing, expense management, and financial dashboard systems</li>
                  <li><strong>Financial Planning for Growth:</strong> Strategic methods for forecasting revenue, planning expenses, and managing cash flow during periods of growth</li>
                  <li><strong>Profit Maximization Strategies:</strong> Practical approaches to enhancing revenue, optimizing efficiency, and managing costs to maximize profitability</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on financial management as the backbone of sustainable growth</li>
                </ul>
                
                <p>This slide builds on the operational systems focus of the previous slide by addressing the financial aspects of scaling a grant writing business. The financial metrics section breaks down the key metrics that business owners should track across four categories: revenue metrics, profitability metrics, cash flow metrics, and client acquisition metrics, providing a comprehensive framework for financial monitoring. The financial systems section outlines the essential infrastructure needed to support growth, including accounting systems, billing and payment systems, expense management, and financial dashboards, ensuring the business has the tools to manage increasing financial complexity. The financial planning section addresses the critical task of preparing for growth through revenue forecasting, expense planning, and cash flow management, enabling proactive rather than reactive financial management. The profit maximization strategies section presents practical approaches to enhancing revenue, optimizing efficiency, and managing costs, providing a blueprint for building a highly profitable business model. The key takeaway emphasizes the fundamental importance of financial management in creating sustainable growth, positioning it as the backbone of a successful scaling strategy. This slide provides participants with a complete framework for implementing financial management practices that support scale, setting the stage for the more detailed exploration of quality control systems in the next slide.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide73"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide75"
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
