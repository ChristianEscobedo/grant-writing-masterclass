"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide79Page() {
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
                Slide 79 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide78"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide80"
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
                  Premium Client Onboarding & Experience
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">The Premium Onboarding Process</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Welcome Package</div>
                            <div className="text-white/80 text-sm">
                              <p>• Personalized welcome video</p>
                              <p>• Digital welcome kit with resources</p>
                              <p>• Physical welcome package (optional)</p>
                              <p>• Service agreement and contract</p>
                              <p>• Payment processing</p>
                              <p>• Client portal access and setup</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Kickoff Strategy Session</div>
                            <div className="text-white/80 text-sm">
                              <p>• 60-90 minute deep dive call</p>
                              <p>• Review goals and expectations</p>
                              <p>• Gather initial information</p>
                              <p>• Develop preliminary grant strategy</p>
                              <p>• Create timeline and milestones</p>
                              <p>• Establish communication protocols</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Information Gathering</div>
                            <div className="text-white/80 text-sm">
                              <p>• Customized questionnaire</p>
                              <p>• Document collection checklist</p>
                              <p>• Secure document upload system</p>
                              <p>• Follow-up interviews as needed</p>
                              <p>• Data organization and analysis</p>
                              <p>• Gap identification and resolution</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Strategy Presentation</div>
                            <div className="text-white/80 text-sm">
                              <p>• Comprehensive grant strategy document</p>
                              <p>• Prioritized grant opportunities</p>
                              <p>• Detailed action plan and timeline</p>
                              <p>• Roles and responsibilities</p>
                              <p>• Success metrics and tracking</p>
                              <p>• Strategy approval and refinement</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Creating a Premium Client Experience</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Proactive Communication</div>
                              <div className="text-white/80 text-xs">
                                <p>Establish clear communication protocols:</p>
                                <p>• Weekly status updates via email</p>
                                <p>• Bi-weekly check-in calls</p>
                                <p>• 24-hour response time guarantee</p>
                                <p>• Dedicated client communication channel</p>
                                <p>• Proactive updates on grant opportunities</p>
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
                              <div className="text-white font-semibold">Transparent Process</div>
                              <div className="text-white/80 text-xs">
                                <p>Create visibility into your work:</p>
                                <p>• Client dashboard with real-time updates</p>
                                <p>• Grant pipeline visualization</p>
                                <p>• Clear milestone tracking</p>
                                <p>• Document version history</p>
                                <p>• Decision-making transparency</p>
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
                              <div className="text-white font-semibold">Value-Added Extras</div>
                              <div className="text-white/80 text-xs">
                                <p>Deliver unexpected value:</p>
                                <p>• Quarterly strategy review sessions</p>
                                <p>• Funding opportunity alerts</p>
                                <p>• Educational resources and webinars</p>
                                <p>• Introductions to potential partners</p>
                                <p>• Celebration of milestones and wins</p>
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
                              <div className="text-white font-semibold">Personalized Attention</div>
                              <div className="text-white/80 text-xs">
                                <p>Make clients feel special and valued:</p>
                                <p>• Remember personal details and preferences</p>
                                <p>• Acknowledge organizational milestones</p>
                                <p>• Send thoughtful gifts at key moments</p>
                                <p>• Customize communication style</p>
                                <p>• Adapt to their working preferences</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Client Success Metrics</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Funding Success Metrics</div>
                              <div className="text-white/80 text-xs">
                                <p>Track and report on funding outcomes:</p>
                                <p>• Number of grants submitted</p>
                                <p>• Grant success rate</p>
                                <p>• Total funding secured</p>
                                <p>• Average grant size</p>
                                <p>• ROI on services (funding vs. cost)</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Client Satisfaction Metrics</div>
                              <div className="text-white/80 text-xs">
                                <p>Measure client experience quality:</p>
                                <p>• Net Promoter Score (NPS)</p>
                                <p>• Client satisfaction surveys</p>
                                <p>• Testimonials and case studies</p>
                                <p>• Referral rate</p>
                                <p>• Renewal and upsell rate</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Process Efficiency Metrics</div>
                              <div className="text-white/80 text-xs">
                                <p>Optimize your service delivery:</p>
                                <p>• Average time to first submission</p>
                                <p>• Information gathering completion time</p>
                                <p>• Response time to client inquiries</p>
                                <p>• Number of revision rounds</p>
                                <p>• Client portal engagement</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Client Retention & Expansion Strategy</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Proactive Renewals</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Schedule renewal strategy call 60 days before end date</li>
                          <li>Present results and ROI report</li>
                          <li>Outline next phase opportunities</li>
                          <li>Offer renewal incentives</li>
                          <li>Provide multi-year options</li>
                          <li>Secure early commitment</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Service Expansion</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Identify additional service needs</li>
                          <li>Present customized upsell opportunities</li>
                          <li>Create package upgrades</li>
                          <li>Develop complementary services</li>
                          <li>Offer exclusive client-only options</li>
                          <li>Provide bundled pricing incentives</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Referral Generation</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Create formal referral program</li>
                          <li>Offer incentives for referrals</li>
                          <li>Make specific referral requests</li>
                          <li>Provide referral tools and templates</li>
                          <li>Host client appreciation events</li>
                          <li>Facilitate client-to-client introductions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> The client experience is what transforms a one-time project into a long-term relationship. By creating a premium onboarding process, delivering exceptional service, tracking success metrics, and implementing retention strategies, you build a sustainable business with recurring revenue and referrals—the foundation of a $10K+/month grant writing business.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 79: Premium Client Onboarding & Experience
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive framework for creating an exceptional client experience that justifies premium pricing and builds long-term relationships. It outlines the systems and strategies needed to onboard, serve, and retain high-ticket clients effectively. The key elements include:</p>
                
                <ul>
                  <li><strong>The Premium Onboarding Process:</strong> Detailed breakdown of the four-step onboarding journey from welcome package to strategy presentation</li>
                  <li><strong>Creating a Premium Client Experience:</strong> Four key elements that elevate the client experience, including proactive communication, transparent processes, value-added extras, and personalized attention</li>
                  <li><strong>Client Success Metrics:</strong> Specific metrics to track across three categories: funding success, client satisfaction, and process efficiency</li>
                  <li><strong>Client Retention & Expansion Strategy:</strong> Three-pronged approach to extending client relationships through proactive renewals, service expansion, and referral generation</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on client experience as the foundation of a sustainable high-ticket business model</li>
                </ul>
                
                <p>This slide builds on the sales conversation framework established in the previous slide by addressing what happens after the sale is made. The premium onboarding process section breaks down the four-step journey that new clients experience: welcome package, kickoff strategy session, information gathering, and strategy presentation. The creating a premium client experience section outlines four key elements that elevate the service: proactive communication with clear protocols, transparent processes that create visibility, value-added extras that deliver unexpected benefits, and personalized attention that makes clients feel special. The client success metrics section provides specific metrics to track across three categories: funding success metrics that demonstrate ROI, client satisfaction metrics that measure experience quality, and process efficiency metrics that optimize service delivery. The client retention and expansion strategy section presents a three-pronged approach to extending client relationships: proactive renewals that secure commitments before contracts end, service expansion that increases client value, and referral generation that leverages satisfied clients for new business. The key takeaway emphasizes that client experience is what transforms a one-time project into a long-term relationship, positioning it as the foundation of a sustainable $10K+/month grant writing business. This slide provides participants with a complete framework for creating an exceptional client experience that justifies premium pricing and builds long-term relationships, setting the stage for the final slide in the high-ticket offer section.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide78"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide80"
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
