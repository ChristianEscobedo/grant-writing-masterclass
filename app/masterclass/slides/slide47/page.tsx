"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide47Page() {
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
                Slide 47 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide46"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide48"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-red-600 to-pink-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 7: CHALLENGES & SOLUTIONS
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Overcoming Common Challenges<br />
                  in Your Grant Writing Business
                </h1>
                
                <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Client Acquisition Challenges</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Low Response Rates</div>
                            <div className="text-white/80 text-sm mb-2">Getting ignored by potential clients despite multiple outreach attempts</div>
                            <div className="bg-white/10 rounded p-2">
                              <div className="text-white font-medium text-sm">Solution:</div>
                              <div className="text-white/80 text-xs">Improve targeting criteria, personalize outreach with specific grant opportunities, and focus on value-first approach that addresses their specific needs</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Price Objections</div>
                            <div className="text-white/80 text-sm mb-2">Potential clients saying your rates are too high compared to competitors</div>
                            <div className="bg-white/10 rounded p-2">
                              <div className="text-white font-medium text-sm">Solution:</div>
                              <div className="text-white/80 text-xs">Focus on ROI (10-20x return on investment), demonstrate value through case studies, and offer tiered pricing options to accommodate different budgets</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Experience Requirements</div>
                            <div className="text-white/80 text-sm mb-2">Organizations requiring 3-5+ years of grant writing experience</div>
                            <div className="bg-white/10 rounded p-2">
                              <div className="text-white font-medium text-sm">Solution:</div>
                              <div className="text-white/80 text-xs">Emphasize your AI-powered system, focus on transferable skills, offer a risk-free trial or money-back guarantee, and use the 4-part response framework</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Service Delivery Challenges</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Information Bottlenecks</div>
                            <div className="text-white/80 text-sm mb-2">Clients not providing necessary information in a timely manner</div>
                            <div className="bg-white/10 rounded p-2">
                              <div className="text-white font-medium text-sm">Solution:</div>
                              <div className="text-white/80 text-xs">Create a structured onboarding process with clear deadlines, use AI to extract information from existing materials, and build information collection into your contract terms</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Scope Creep</div>
                            <div className="text-white/80 text-sm mb-2">Clients requesting additional work beyond the original agreement</div>
                            <div className="bg-white/10 rounded p-2">
                              <div className="text-white font-medium text-sm">Solution:</div>
                              <div className="text-white/80 text-xs">Create detailed scope documents, include clear boundaries in contracts, implement a change order process with additional fees, and practice saying "yes, and here's the cost"</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Unrealistic Expectations</div>
                            <div className="text-white/80 text-sm mb-2">Clients expecting guaranteed funding or unreasonable timelines</div>
                            <div className="bg-white/10 rounded p-2">
                              <div className="text-white font-medium text-sm">Solution:</div>
                              <div className="text-white/80 text-xs">Set clear expectations during sales process, educate clients on grant success rates (industry average 10-15%), provide realistic timelines, and focus on your process rather than guarantees</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-6 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Business Management Challenges</h3>
                    
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-2">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Inconsistent Cash Flow</div>
                            <div className="text-white/80 text-xs">Solution: Implement 50% upfront payment policy, focus on building retainer clients, and maintain 3-month emergency fund</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-2">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Time Management</div>
                            <div className="text-white/80 text-xs">Solution: Use AI to automate repetitive tasks, implement time blocking, and focus on high-value activities only</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-2">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Workload Fluctuations</div>
                            <div className="text-white/80 text-xs">Solution: Create a balanced client portfolio with staggered deadlines and develop partnerships for overflow work</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Mindset Challenges</h3>
                    
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-2">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Imposter Syndrome</div>
                            <div className="text-white/80 text-xs">Solution: Focus on your AI-powered system advantage, join our community for support, and collect client testimonials</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-2">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Rejection Sensitivity</div>
                            <div className="text-white/80 text-xs">Solution: Track metrics to see that rejection is normal (10-15% response rate is good), focus on volume not individual outcomes</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-2">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Perfectionism</div>
                            <div className="text-white/80 text-xs">Solution: Use AI for first drafts, focus on progress over perfection, and remember that done is better than perfect</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 47: Overcoming Common Challenges in Your Grant Writing Business
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide introduces the challenges and solutions section of the masterclass, addressing common obstacles that grant writers face and providing practical solutions. The key elements include:</p>
                
                <ul>
                  <li><strong>Section Header:</strong> "PART 7: CHALLENGES & SOLUTIONS" clearly indicates the start of a new section</li>
                  <li><strong>Four Challenge Categories:</strong> Comprehensive coverage of client acquisition, service delivery, business management, and mindset challenges</li>
                  <li><strong>Specific Problems:</strong> Detailed description of common challenges like "Low Response Rates" and "Scope Creep"</li>
                  <li><strong>Practical Solutions:</strong> Actionable strategies for addressing each challenge</li>
                  <li><strong>AI Integration:</strong> Strategic positioning of AI as a solution to multiple challenges</li>
                  <li><strong>Realistic Expectations:</strong> Honest acknowledgment of industry realities like "10-15% response rate is good"</li>
                </ul>
                
                <p>This slide builds credibility by acknowledging the real challenges of running a grant writing business rather than presenting an unrealistically rosy picture. By addressing common obstacles head-on and providing specific solutions, it prepares participants for the realities of implementation and reduces the likelihood of giving up when facing difficulties. The comprehensive coverage of different types of challenges—from client acquisition to mindset issues—demonstrates a deep understanding of the business. The practical solutions create confidence that these challenges can be overcome, while the integration of AI as a solution to multiple challenges reinforces its value as a competitive advantage.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide46"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide48"
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
