"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide85Page() {
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
                Slide 85 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide84"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides"
                className="bg-purple-600 hover:bg-purple-700 text-white"
              >
                Back to All Slides
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 11: MASTERCLASS CONCLUSION
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Thank You & Final Thoughts
                </h1>
                
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-left">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">What We've Covered Today</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                            <div>
                              <div className="text-white font-semibold">The Grant Writing Opportunity</div>
                              <div className="text-white/80 text-sm">
                                <p>• The massive demand for grant writing services</p>
                                <p>• Why now is the perfect time to enter this market</p>
                                <p>• How AI is transforming the grant writing industry</p>
                                <p>• The unique advantages of a grant writing business</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                            <div>
                              <div className="text-white font-semibold">Grant Writing Fundamentals</div>
                              <div className="text-white/80 text-sm">
                                <p>• The different types of grants and funding sources</p>
                                <p>• The grant writing process from start to finish</p>
                                <p>• Key components of successful grant proposals</p>
                                <p>• How to leverage AI for better grant writing</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                            <div>
                              <div className="text-white font-semibold">Building Your Grant Writing Business</div>
                              <div className="text-white/80 text-sm">
                                <p>• Choosing your niche and ideal clients</p>
                                <p>• Creating your service offerings and packages</p>
                                <p>• Setting up your business systems and processes</p>
                                <p>• Pricing strategies for maximum profitability</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                            <div>
                              <div className="text-white font-semibold">Client Acquisition Strategies</div>
                              <div className="text-white/80 text-sm">
                                <p>• Proven methods to attract premium clients</p>
                                <p>• Conducting effective sales conversations</p>
                                <p>• Overcoming objections and closing deals</p>
                                <p>• Building strategic partnerships and referrals</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                            <div>
                              <div className="text-white font-semibold">Delivering Exceptional Results</div>
                              <div className="text-white/80 text-sm">
                                <p>• Creating a premium client experience</p>
                                <p>• Streamlining your grant writing process</p>
                                <p>• Increasing your success rates with AI</p>
                                <p>• Managing client expectations and relationships</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">6</div>
                            <div>
                              <div className="text-white font-semibold">Scaling Your Business</div>
                              <div className="text-white/80 text-sm">
                                <p>• Building a team and delegating effectively</p>
                                <p>• Creating systems for consistent delivery</p>
                                <p>• Managing finances for sustainable growth</p>
                                <p>• Maintaining quality while expanding</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">7</div>
                            <div>
                              <div className="text-white font-semibold">Your High-Ticket Offer</div>
                              <div className="text-white/80 text-sm">
                                <p>• Creating premium $5K+ grant writing packages</p>
                                <p>• Structuring your offer for maximum value</p>
                                <p>• Selling high-ticket services confidently</p>
                                <p>• Launching your premium grant writing business</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">8</div>
                            <div>
                              <div className="text-white font-semibold">Your Path to $10K+/Month</div>
                              <div className="text-white/80 text-sm">
                                <p>• Your roadmap to building a $10K+/month business</p>
                                <p>• Overcoming obstacles and mindset challenges</p>
                                <p>• Essential resources and next steps</p>
                                <p>• Ongoing support through the Accelerator program</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">A Personal Message</h3>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <p className="text-white/90 text-base leading-relaxed">
                          Thank you for investing your time with me today. Building a grant writing business has been one of the most rewarding journeys of my life—not just financially, but in the impact it's allowed me to make.
                        </p>
                        <p className="text-white/90 text-base leading-relaxed mt-3">
                          Every grant secured represents real change: programs funded, communities served, research advanced, and missions fulfilled. And the beauty of this business is that you can create this impact while building a thriving, profitable business for yourself.
                        </p>
                        <p className="text-white/90 text-base leading-relaxed mt-3">
                          Whether you choose to join us in the Accelerator program or implement what you've learned on your own, I truly hope you'll take action on the strategies we've covered today. The world needs more skilled grant writers helping worthy organizations access the funding they deserve.
                        </p>
                        <p className="text-white/90 text-base leading-relaxed mt-3">
                          I believe in you and your ability to build this business. The path is clear—now it's time to take the first step.
                        </p>
                        <p className="text-white/90 text-base font-medium mt-4 text-right">
                          With gratitude,<br />
                          [Your Name]
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Your Next Steps</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                            <div>
                              <div className="text-white font-semibold">Complete Your Application</div>
                              <div className="text-white/80 text-sm">
                                <p>Apply for the Grant Writing Accelerator program while spots are available. The application takes just 5 minutes to complete.</p>
                                <div className="mt-2">
                                  <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    Apply Now
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                            <div>
                              <div className="text-white font-semibold">Schedule Your Strategy Call</div>
                              <div className="text-white/80 text-sm">
                                <p>After your application is approved, you'll be invited to schedule a 1:1 strategy call to discuss your specific situation and goals.</p>
                                <div className="mt-2">
                                  <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    View Calendar
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                            <div>
                              <div className="text-white font-semibold">Access Bonus Resources</div>
                              <div className="text-white/80 text-sm">
                                <p>Download the free resources from today's masterclass, including the 30-day action plan and AI prompt guide.</p>
                                <div className="mt-2">
                                  <a href="#" className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    Download Resources
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">Limited-Time Bonus Offer</h3>
                    
                    <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg p-6">
                      <div className="text-center mb-4">
                        <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-white text-sm font-medium">
                          For Masterclass Attendees Only
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-white text-center mb-4">
                        Apply for the Grant Writing Accelerator Today and Receive:
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">BONUS #1</div>
                              <div className="text-white/80 text-xs">
                                <p>Complete Grant Template Library</p>
                                <p className="text-yellow-300 font-medium">($997 Value)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">BONUS #2</div>
                              <div className="text-white/80 text-xs">
                                <p>3 Private 1:1 Coaching Calls</p>
                                <p className="text-yellow-300 font-medium">($1,500 Value)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">BONUS #3</div>
                              <div className="text-white/80 text-xs">
                                <p>Grant Opportunity Finder Software</p>
                                <p className="text-yellow-300 font-medium">($1,200 Value)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <p className="text-white/90 text-sm mb-4">
                          Total Bonus Value: <span className="text-yellow-300 font-bold">$3,697</span> — Free for the first 20 applicants who join after today's masterclass!
                        </p>
                        
                        <a href="#" className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                          Apply Now While Spots Are Available
                        </a>
                        
                        <p className="text-white/70 text-xs mt-3">
                          Only 20 spots available. Offer expires when all spots are filled or in 48 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 85: Thank You & Final Thoughts
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This final slide provides a comprehensive summary of the masterclass content, delivers a personal message from the presenter, outlines clear next steps for participants, and presents a limited-time bonus offer for those who join the Accelerator program. It serves as both a recap of the value delivered and a compelling call to action. The key elements include:</p>
                
                <ul>
                  <li><strong>What We've Covered Today:</strong> Concise summary of the eight main topics addressed during the masterclass, from the grant writing opportunity to the path to $10K+/month</li>
                  <li><strong>A Personal Message:</strong> Heartfelt note from the presenter that emphasizes the impact of grant writing work and expresses belief in the participants' ability to succeed</li>
                  <li><strong>Your Next Steps:</strong> Three specific actions participants can take immediately: completing an application, scheduling a strategy call, and accessing bonus resources</li>
                  <li><strong>Limited-Time Bonus Offer:</strong> Special incentive for immediate action, including three valuable bonuses available only to masterclass attendees who apply promptly</li>
                </ul>
                
                <p>This slide effectively concludes the masterclass by reinforcing the value delivered, establishing an emotional connection through the personal message, providing clear next steps for implementation, and creating urgency through the limited-time bonus offer. The "What We've Covered Today" section provides a concise summary of the eight main topics addressed during the masterclass, helping participants recognize the comprehensive nature of the content and reinforcing key learnings. The personal message establishes an emotional connection by sharing the presenter's own experience with grant writing and expressing genuine belief in the participants' ability to succeed, creating trust and goodwill. The next steps section provides three specific, actionable items participants can take immediately—completing an application, scheduling a strategy call, and accessing bonus resources—making it easy to maintain momentum after the masterclass. The limited-time bonus offer creates urgency through scarcity (only 20 spots available) and a deadline (48 hours), while adding substantial value ($3,697 worth of bonuses) to incentivize immediate action. This slide provides a strong conclusion to the masterclass that balances value delivery with an effective call to action, setting participants up for success whether they join the Accelerator program or implement the strategies on their own.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide84"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides"
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Back to All Slides
              <IconArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
