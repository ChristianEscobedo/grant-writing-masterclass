"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide57Page() {
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
                Slide 57 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide56"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide58"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-orange-600 to-pink-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 6: CLIENT ACQUISITION
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Pillar 1: Targeted Outreach System
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">The 5-Step Outreach Process</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Identify Target Organizations</div>
                            <div className="text-white/80 text-sm">
                              <p>Use AI to find organizations that match grant criteria</p>
                              <p className="text-white/60 text-xs mt-1">Focus on industries with high grant success rates</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Research Specific Grant Opportunities</div>
                            <div className="text-white/80 text-sm">
                              <p>Find grants that match each organization's profile</p>
                              <p className="text-white/60 text-xs mt-1">Use our database to identify high-probability matches</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Craft Personalized Outreach</div>
                            <div className="text-white/80 text-sm">
                              <p>Use the Grant Opportunity Outreach Template</p>
                              <p className="text-white/60 text-xs mt-1">Highlight specific grant details and deadlines</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Execute Multi-Channel Follow-Up</div>
                            <div className="text-white/80 text-sm">
                              <p>Follow the 3-7-14 day follow-up sequence</p>
                              <p className="text-white/60 text-xs mt-1">Use email, LinkedIn, and phone for maximum response</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">Schedule Discovery Calls</div>
                            <div className="text-white/80 text-sm">
                              <p>Use the Grant Opportunity Assessment framework</p>
                              <p className="text-white/60 text-xs mt-1">Position as a no-obligation evaluation call</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">The Grant Opportunity Outreach Template</h3>
                      
                      <div className="bg-white/10 rounded-lg p-4 text-white/90 text-sm">
                        <p className="mb-2"><strong>Subject:</strong> [Specific Grant] Opportunity for [Organization Name] - $[Amount] Available</p>
                        
                        <p className="mb-2"><strong>Hi [Name],</strong></p>
                        
                        <p className="mb-2">I noticed that [Organization Name] might be eligible for the [Grant Name] offering up to $[Amount] in funding for [purpose of grant].</p>
                        
                        <p className="mb-2">This grant specifically supports organizations that [key eligibility criteria] and the deadline is [date] (just [X] weeks away).</p>
                        
                        <p className="mb-2">Based on [specific detail about their organization], you appear to be an excellent candidate for this funding opportunity.</p>
                        
                        <p className="mb-2">I specialize in helping organizations like yours secure grant funding using our AI-powered grant writing system that has achieved a [X]% success rate.</p>
                        
                        <p className="mb-2">Would you be open to a 15-minute call to discuss if this grant is a good fit for [Organization Name]? I'm happy to share more details about the application requirements and timeline.</p>
                        
                        <p className="mb-2">You can book a time directly here: [Calendar Link]</p>
                        
                        <p className="mb-2">Best regards,<br />[Your Name]</p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">The 3-7-14 Follow-Up Sequence</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <span className="text-white text-xs font-bold">3</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Day 3: Email Follow-Up</div>
                              <div className="text-white/80 text-xs">
                                <p>"Just checking if you saw my email about the [Grant Name] opportunity..."</p>
                                <p>Include 1 new detail about the grant not mentioned in first email</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <span className="text-white text-xs font-bold">7</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Day 7: LinkedIn + Email</div>
                              <div className="text-white/80 text-xs">
                                <p>Connect on LinkedIn with personalized message</p>
                                <p>Send "Grant Deadline Approaching" email with success story</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <span className="text-white text-xs font-bold">14</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Day 14: Final Outreach</div>
                              <div className="text-white/80 text-xs">
                                <p>Phone call if number available</p>
                                <p>"Last Chance" email with specific deadline reminder</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Outreach Automation Tools</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="bg-orange-500/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-1">CRM System</div>
                      <div className="text-white/70 text-xs">Track all prospects and follow-ups</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="bg-orange-500/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-1">Calendar Tool</div>
                      <div className="text-white/70 text-xs">Automated scheduling for discovery calls</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="bg-orange-500/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-1">Email Automation</div>
                      <div className="text-white/70 text-xs">Scheduled follow-ups and tracking</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> The Grant Opportunity Outreach approach converts at 3x the rate of generic cold outreach because it leads with specific, relevant value for the prospect.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 57: Pillar 1: Targeted Outreach System
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of the first client acquisition pillar: targeted outreach. It presents a systematic approach to finding and contacting potential clients with specific grant opportunities. The key elements include:</p>
                
                <ul>
                  <li><strong>5-Step Process:</strong> Clear, sequential steps for implementing the targeted outreach strategy</li>
                  <li><strong>Email Template:</strong> Ready-to-use template that focuses on specific grant opportunities rather than generic services</li>
                  <li><strong>Follow-Up Sequence:</strong> Structured 3-7-14 day follow-up system across multiple channels</li>
                  <li><strong>Automation Tools:</strong> Specific tools to streamline and scale the outreach process</li>
                  <li><strong>Key Takeaway:</strong> Compelling statistic about the effectiveness of this approach compared to generic outreach</li>
                </ul>
                
                <p>This slide takes the targeted outreach pillar introduced in the previous slide and breaks it down into a detailed, actionable system. The 5-step process provides a clear roadmap for implementation, while the email template gives participants a concrete tool they can use immediately. The 3-7-14 follow-up sequence addresses a common challenge in outreach—consistent follow-up—by providing a structured approach across multiple channels. The automation tools section shows how to scale this process efficiently, while the key takeaway provides a compelling reason to use this approach: it converts at 3x the rate of generic cold outreach. The focus on specific grant opportunities rather than generic services is a key differentiator that positions this approach as more valuable and relevant to prospects than traditional cold outreach.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide56"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide58"
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
