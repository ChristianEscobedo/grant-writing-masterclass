"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide56Page() {
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
                Slide 56 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide55"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide57"
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
                  Client Acquisition Strategy Overview
                </h1>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-5xl mx-auto mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">The 3 Pillars of Client Acquisition</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-xl p-5 text-left">
                      <div className="bg-orange-500/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-xl">1</span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-3">Targeted Outreach</h4>
                      
                      <ul className="space-y-2 text-white/80 text-sm">
                        <li className="flex items-start">
                          <div className="bg-orange-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Identify ideal client profiles</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-orange-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Personalized cold outreach</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-orange-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Grant opportunity-based approach</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-orange-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Multi-channel follow-up system</div>
                        </li>
                      </ul>
                      
                      <div className="mt-4 bg-orange-500/20 rounded-lg p-3">
                        <p className="text-white text-center font-medium">
                          10-15% response rate
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-5 text-left">
                      <div className="bg-pink-500/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-xl">2</span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-3">Content Marketing</h4>
                      
                      <ul className="space-y-2 text-white/80 text-sm">
                        <li className="flex items-start">
                          <div className="bg-pink-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Grant opportunity alerts</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-pink-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Success case studies</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-pink-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Educational content</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-pink-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>AI-powered content creation</div>
                        </li>
                      </ul>
                      
                      <div className="mt-4 bg-pink-500/20 rounded-lg p-3">
                        <p className="text-white text-center font-medium">
                          Builds authority & trust
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-5 text-left">
                      <div className="bg-red-500/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <span className="text-white font-bold text-xl">3</span>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-3">Strategic Partnerships</h4>
                      
                      <ul className="space-y-2 text-white/80 text-sm">
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Accountants & bookkeepers</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Business consultants</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Industry associations</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Referral commission structure</div>
                        </li>
                      </ul>
                      
                      <div className="mt-4 bg-red-500/20 rounded-lg p-3">
                        <p className="text-white text-center font-medium">
                          Pre-qualified leads
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Target Client Industries</h3>
                    
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Healthcare & Medical</div>
                            <div className="text-white/80 text-xs">Clinics, research organizations, medical device companies</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Education</div>
                            <div className="text-white/80 text-xs">Schools, universities, educational technology companies</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Clean Energy & Sustainability</div>
                            <div className="text-white/80 text-xs">Renewable energy, green tech, environmental organizations</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Non-Profits & Social Services</div>
                            <div className="text-white/80 text-xs">Charities, community organizations, social enterprises</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Client Acquisition Metrics</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-white font-semibold">Outreach to Discovery Call</div>
                          <div className="bg-green-500/20 px-3 py-1 rounded-full text-white text-sm">10-15%</div>
                        </div>
                        <div className="mt-2 bg-white/10 h-4 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full" style={{ width: "12%" }}></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-white font-semibold">Discovery Call to Proposal</div>
                          <div className="bg-green-500/20 px-3 py-1 rounded-full text-white text-sm">40-50%</div>
                        </div>
                        <div className="mt-2 bg-white/10 h-4 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full" style={{ width: "45%" }}></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-white font-semibold">Proposal to Client</div>
                          <div className="bg-green-500/20 px-3 py-1 rounded-full text-white text-sm">60-70%</div>
                        </div>
                        <div className="mt-2 bg-white/10 h-4 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full" style={{ width: "65%" }}></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="text-white font-semibold">Overall Conversion Rate</div>
                          <div className="bg-green-500/20 px-3 py-1 rounded-full text-white text-sm">3-5%</div>
                        </div>
                        <div className="mt-2 bg-white/10 h-4 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-green-500 to-green-400 h-full rounded-full" style={{ width: "4%" }}></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-white/10 rounded-lg p-4">
                      <h4 className="text-white font-semibold mb-2">Monthly Activity for $10K</h4>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/10 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-white">100</div>
                          <div className="text-white/80 text-xs">Outreach Messages</div>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-white">12</div>
                          <div className="text-white/80 text-xs">Discovery Calls</div>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-white">5</div>
                          <div className="text-white/80 text-xs">Proposals Sent</div>
                        </div>
                        <div className="bg-white/10 p-3 rounded-lg text-center">
                          <div className="text-2xl font-bold text-white">3</div>
                          <div className="text-white/80 text-xs">New Clients</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> With just 100 targeted outreach messages per month and a systematic follow-up process, you can consistently generate $10K+ in monthly revenue.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 56: Client Acquisition Strategy Overview
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive overview of the client acquisition strategy for a grant writing business, setting the foundation for the more detailed tactics in upcoming slides. The key elements include:</p>
                
                <ul>
                  <li><strong>Three-Pillar Framework:</strong> Clear organization of client acquisition into three distinct approaches (Targeted Outreach, Content Marketing, Strategic Partnerships)</li>
                  <li><strong>Target Industries:</strong> Specific industries that are most likely to need grant writing services and have funding available</li>
                  <li><strong>Conversion Metrics:</strong> Realistic conversion rates at each stage of the client acquisition funnel</li>
                  <li><strong>Activity Targets:</strong> Concrete numbers showing exactly what activity level is needed to reach $10K/month</li>
                  <li><strong>Key Takeaway:</strong> Simple, memorable summary of the effort required to reach the income goal</li>
                </ul>
                
                <p>This slide effectively sets up the client acquisition section by providing a comprehensive overview of the strategy. The three-pillar framework creates a clear structure for understanding the different approaches to client acquisition, while the specific tactics within each pillar give participants actionable ideas to implement. The target industries section helps participants focus their efforts on the most promising sectors, while the conversion metrics provide realistic expectations for each stage of the funnel. The monthly activity breakdown translates these metrics into concrete targets, showing exactly what level of activity is needed to reach $10K/month. The key takeaway summarizes this in a simple, memorable way: just 100 targeted outreach messages per month can generate $10K+ in revenue. This creates confidence that the income goal is achievable with a reasonable amount of effort.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide55"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide57"
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
