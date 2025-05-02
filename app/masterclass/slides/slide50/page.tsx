"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide50Page() {
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
                Slide 50 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide49"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide51"
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
                  <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                    The Grant Writing Business Accelerator
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Your complete system for building a $10K+/month grant writing business
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">What's Included</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">AI-Powered Grant Writing System</div>
                            <div className="text-white/80 text-sm mb-2">Complete access to our proprietary AI tools for research, content creation, and quality assurance</div>
                            <div className="bg-white/10 rounded p-2">
                              <div className="text-white/80 text-xs">Includes: Custom prompt library, grant database integration, and AI-powered quality checking system</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Complete Business Template Library</div>
                            <div className="text-white/80 text-sm mb-2">All the templates you need to launch and scale your business</div>
                            <div className="bg-white/10 rounded p-2">
                              <div className="text-white/80 text-xs">Includes: Client contracts, proposal templates, outreach emails, discovery call scripts, and more</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">12-Week Implementation Program</div>
                            <div className="text-white/80 text-sm mb-2">Step-by-step guidance to implement everything you've learned</div>
                            <div className="bg-white/10 rounded p-2">
                              <div className="text-white/80 text-xs">Includes: Weekly modules, implementation workbooks, and accountability tracking system</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Private Community & Support</div>
                            <div className="text-white/80 text-sm mb-2">Connect with other grant writers and get expert support</div>
                            <div className="bg-white/10 rounded p-2">
                              <div className="text-white/80 text-xs">Includes: Private community access, weekly Q&A calls, and direct support from our team</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Program Details</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Program Duration</div>
                              <div className="text-white/80 text-sm">
                                <p>12 weeks of structured implementation + 12 months of ongoing support and community access</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Investment Options</div>
                              <div className="text-white/80 text-sm">
                                <p>One-time payment: $4,997</p>
                                <p>Payment plan: 6 monthly payments of $997</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Our Guarantee</div>
                              <div className="text-white/80 text-sm">
                                <p>If you implement our system and don't land your first client within 60 days, we'll provide personalized coaching until you do.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Success Stories</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Sarah T.</div>
                              <div className="text-white/80 text-xs">"From $0 to $12,500/month in just 90 days using the AI system. I had no prior grant writing experience."</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Michael R.</div>
                              <div className="text-white/80 text-xs">"Landed 3 retainer clients in my first 45 days. The templates and systems made it so easy to get started."</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 005 10a6 6 0 0012 0c0-.35-.035-.691-.1-1.02A5 5 0 0010 11z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Jennifer L.</div>
                              <div className="text-white/80 text-xs">"Hit $18K in month 4 and now have a waitlist of clients. The AI tools save me 20+ hours per week."</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4 text-center">Limited Time Bonus</h3>
                  <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 p-4 rounded-lg mb-6">
                    <p className="text-white text-lg text-center">
                      The first 20 people to join will receive 3 one-on-one strategy sessions with our head grant writing coach ($1,500 value)
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all">
                      Book Your Free Strategy Call
                    </button>
                  </div>
                  <p className="text-white/70 text-sm text-center mt-4">
                    Limited to 20 spots. No obligation to join during your call.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 50: The Grant Writing Business Accelerator
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide presents the high-ticket offer, providing a comprehensive overview of the Grant Writing Business Accelerator program. The key elements include:</p>
                
                <ul>
                  <li><strong>Program Components:</strong> Detailed description of the four main components of the program</li>
                  <li><strong>Program Details:</strong> Clear information about duration, investment options, and guarantee</li>
                  <li><strong>Success Stories:</strong> Three specific testimonials with concrete results</li>
                  <li><strong>Limited Time Bonus:</strong> Scarcity element with the one-on-one strategy sessions</li>
                  <li><strong>Clear Call to Action:</strong> "Book Your Free Strategy Call" button with no-obligation disclaimer</li>
                </ul>
                
                <p>This slide effectively presents the high-ticket offer as the logical next step for those who want comprehensive support in implementing what they've learned. The detailed description of program components demonstrates the value of the offer, while the program details provide transparency about the investment required. The success stories create social proof and demonstrate the potential results, while the limited time bonus creates urgency to act now. The clear call to action with a no-obligation disclaimer reduces the perceived risk of taking the next step. Overall, this slide creates a compelling case for booking a strategy call to learn more about the Accelerator program.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide49"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide51"
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
