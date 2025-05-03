"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide80Page() {
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
                Slide 80 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide79"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide81"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 10: THE HIGH-TICKET OFFER
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Launching Your High-Ticket Grant Writing Business
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">90-Day Launch Plan</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Days 1-30: Foundation Building</div>
                            <div className="text-white/80 text-sm">
                              <p>• Define your niche and ideal client</p>
                              <p>• Create your premium offer stack</p>
                              <p>• Develop your sales presentation</p>
                              <p>• Build your basic website</p>
                              <p>• Set up client management systems</p>
                              <p>• Create your onboarding process</p>
                              <p>• Establish your pricing strategy</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Days 31-60: Client Acquisition</div>
                            <div className="text-white/80 text-sm">
                              <p>• Identify 50 ideal client prospects</p>
                              <p>• Develop outreach campaign</p>
                              <p>• Create case studies and testimonials</p>
                              <p>• Implement referral partnerships</p>
                              <p>• Launch LinkedIn content strategy</p>
                              <p>• Book 10+ sales conversations</p>
                              <p>• Close your first premium client</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Days 61-90: Optimization & Scale</div>
                            <div className="text-white/80 text-sm">
                              <p>• Refine your offer based on feedback</p>
                              <p>• Optimize your sales process</p>
                              <p>• Enhance client experience</p>
                              <p>• Develop content marketing strategy</p>
                              <p>• Create systems for delivery</p>
                              <p>• Implement tracking and metrics</p>
                              <p>• Plan for team expansion</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Client Acquisition Strategies</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Direct Outreach Campaign</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-pink-300 font-medium">Strategy:</span> Personalized outreach to ideal clients</p>
                                <p>• Research 50 perfect-fit organizations</p>
                                <p>• Develop personalized value proposition</p>
                                <p>• Create multi-touch outreach sequence</p>
                                <p>• Offer free grant opportunity assessment</p>
                                <p>• Follow up persistently (7+ touches)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Strategic Partnerships</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-pink-300 font-medium">Strategy:</span> Leverage existing relationships</p>
                                <p>• Identify complementary service providers</p>
                                <p>• Create referral fee structure</p>
                                <p>• Develop co-marketing opportunities</p>
                                <p>• Host joint webinars or events</p>
                                <p>• Create shared resources and tools</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Thought Leadership Content</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-pink-300 font-medium">Strategy:</span> Establish authority and attract clients</p>
                                <p>• Create LinkedIn content strategy</p>
                                <p>• Develop educational blog/newsletter</p>
                                <p>• Host webinars on grant opportunities</p>
                                <p>• Publish case studies and success stories</p>
                                <p>• Speak at industry events and conferences</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Value-First Workshops</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-pink-300 font-medium">Strategy:</span> Demonstrate expertise through teaching</p>
                                <p>• Host grant readiness workshops</p>
                                <p>• Conduct funding opportunity webinars</p>
                                <p>• Offer grant strategy sessions</p>
                                <p>• Create educational masterclasses</p>
                                <p>• Provide valuable tools and templates</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Common Launch Challenges & Solutions</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Pricing Confidence Issues</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-green-300 font-medium">Solution:</span> Start with a slightly lower price point that still feels premium but comfortable. Increase pricing with each new client as your confidence grows. Focus on the value and ROI you deliver rather than the price itself.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Lack of Case Studies</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-green-300 font-medium">Solution:</span> Offer a discounted rate to 1-2 ideal clients in exchange for detailed case studies. Use industry statistics and third-party data to demonstrate potential results. Share your personal grant writing success stories and metrics.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Sales Conversation Anxiety</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-green-300 font-medium">Solution:</span> Script and practice your sales conversations extensively. Record yourself and review. Focus on asking questions rather than talking. Remember you're helping organizations secure funding they need, not "selling" them something they don't need.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">First 3 Clients Roadmap</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">1</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Client #1: The Foundation</div>
                      <div className="text-white/70 text-sm">
                        <p className="mb-2">Your first client helps you validate your offer and build confidence.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Offer slightly reduced rate</li>
                          <li>Overdeliver on every aspect</li>
                          <li>Document entire process</li>
                          <li>Request detailed testimonial</li>
                          <li>Create comprehensive case study</li>
                          <li>Ask for referrals</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">2</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Client #2: The Refinement</div>
                      <div className="text-white/70 text-sm">
                        <p className="mb-2">Your second client helps you refine your process and increase efficiency.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Increase price by 15-25%</li>
                          <li>Implement lessons from first client</li>
                          <li>Test new delivery methods</li>
                          <li>Refine onboarding process</li>
                          <li>Create additional case study</li>
                          <li>Request video testimonial</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">3</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Client #3: The Scaling</div>
                      <div className="text-white/70 text-sm">
                        <p className="mb-2">Your third client helps you prepare for scaling and team expansion.</p>
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Charge full premium price</li>
                          <li>Document all processes</li>
                          <li>Test delegation of specific tasks</li>
                          <li>Implement full measurement system</li>
                          <li>Create referral program</li>
                          <li>Plan for team expansion</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> Launching a high-ticket grant writing business requires a strategic approach focused on building a solid foundation, implementing effective client acquisition strategies, and continuously refining your offer and processes. By following this 90-day plan and focusing on securing your first three clients, you can quickly establish a premium service that generates $10K+/month while delivering exceptional value to your clients.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 80: Launching Your High-Ticket Grant Writing Business
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive framework for launching a high-ticket grant writing business. It outlines a strategic 90-day plan, effective client acquisition strategies, solutions to common challenges, and a roadmap for securing the first three clients. The key elements include:</p>
                
                <ul>
                  <li><strong>90-Day Launch Plan:</strong> Detailed breakdown of the three phases of launching a high-ticket grant writing business, from foundation building to optimization and scale</li>
                  <li><strong>Client Acquisition Strategies:</strong> Four specific strategies for attracting premium clients, including direct outreach, strategic partnerships, thought leadership, and value-first workshops</li>
                  <li><strong>Common Launch Challenges & Solutions:</strong> Practical solutions to the three most common challenges faced when launching a high-ticket service: pricing confidence issues, lack of case studies, and sales conversation anxiety</li>
                  <li><strong>First 3 Clients Roadmap:</strong> Strategic approach to securing and maximizing the first three client relationships to build momentum and prepare for scaling</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on the importance of a methodical approach to launching a premium service business</li>
                </ul>
                
                <p>This slide concludes the high-ticket offer section by providing a practical roadmap for implementation. The 90-day launch plan breaks down the process into three clear phases: days 1-30 focused on foundation building, days 31-60 dedicated to client acquisition, and days 61-90 centered on optimization and scale. The client acquisition strategies section presents four specific approaches to attracting premium clients: direct outreach campaigns with personalized value propositions, strategic partnerships with complementary service providers, thought leadership content that establishes authority, and value-first workshops that demonstrate expertise through teaching. The common launch challenges section addresses three frequent obstacles—pricing confidence issues, lack of case studies, and sales conversation anxiety—with practical solutions for each. The first 3 clients roadmap provides a strategic approach to securing and maximizing the initial client relationships: client #1 (the foundation) helps validate the offer and build confidence, client #2 (the refinement) helps refine processes and increase efficiency, and client #3 (the scaling) helps prepare for team expansion. The key takeaway emphasizes the importance of a strategic, methodical approach to launching a high-ticket grant writing business that can quickly generate $10K+/month while delivering exceptional value. This slide provides participants with a complete implementation plan for the concepts presented throughout the high-ticket offer section, creating a clear path to building a premium grant writing business.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide79"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide81"
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
