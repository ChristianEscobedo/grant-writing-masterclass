"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide81Page() {
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
                Slide 81 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide80"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide82"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 11: MASTERCLASS CONCLUSION
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Your $10K+/Month Grant Writing Roadmap
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Key Milestones to $10K/Month</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">First $3K Month</div>
                            <div className="text-white/80 text-sm">
                              <p>• Secure first premium client ($3-5K)</p>
                              <p>• Establish core service offering</p>
                              <p>• Create basic systems and processes</p>
                              <p>• Develop initial case study</p>
                              <p>• Build confidence in your approach</p>
                              <p>• Timeline: 30-60 days</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Consistent $5K Months</div>
                            <div className="text-white/80 text-sm">
                              <p>• Maintain 1-2 premium clients</p>
                              <p>• Refine your service delivery</p>
                              <p>• Implement client management system</p>
                              <p>• Develop referral strategy</p>
                              <p>• Create content marketing plan</p>
                              <p>• Timeline: 2-3 months</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Breaking $10K Months</div>
                            <div className="text-white/80 text-sm">
                              <p>• Serve 2-3 premium clients simultaneously</p>
                              <p>• Hire first team member (VA or writer)</p>
                              <p>• Implement scalable systems</p>
                              <p>• Develop tiered service offerings</p>
                              <p>• Create consistent lead generation</p>
                              <p>• Timeline: 4-6 months</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Scaling Beyond $15K</div>
                            <div className="text-white/80 text-sm">
                              <p>• Expand to 4-5 premium clients</p>
                              <p>• Build specialized team (3-4 people)</p>
                              <p>• Implement department structure</p>
                              <p>• Create recurring revenue model</p>
                              <p>• Develop strategic partnerships</p>
                              <p>• Timeline: 8-12 months</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Critical Success Factors</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-violet-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Niche Specialization</div>
                              <div className="text-white/80 text-xs">
                                <p>Focus on specific grant types or industries:</p>
                                <p>• Develop deep expertise in chosen area</p>
                                <p>• Become known as the specialist</p>
                                <p>• Command premium pricing</p>
                                <p>• Streamline your research and writing</p>
                                <p>• Build relationships with specific funders</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-violet-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">AI-Powered Systems</div>
                              <div className="text-white/80 text-xs">
                                <p>Leverage AI throughout your business:</p>
                                <p>• Automate research and opportunity identification</p>
                                <p>• Streamline content creation</p>
                                <p>• Enhance quality control</p>
                                <p>• Scale your capacity without proportional time</p>
                                <p>• Maintain competitive advantage</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-violet-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Results-Based Positioning</div>
                              <div className="text-white/80 text-xs">
                                <p>Focus marketing on outcomes, not services:</p>
                                <p>• Track and showcase success metrics</p>
                                <p>• Develop compelling case studies</p>
                                <p>• Quantify ROI for clients</p>
                                <p>• Position as investment, not expense</p>
                                <p>• Build authority through results</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-violet-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Strategic Relationships</div>
                              <div className="text-white/80 text-xs">
                                <p>Build network for consistent client flow:</p>
                                <p>• Develop referral partnerships</p>
                                <p>• Connect with complementary service providers</p>
                                <p>• Build relationships with funding organizations</p>
                                <p>• Join industry associations</p>
                                <p>• Create strategic alliances</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Common Pitfalls to Avoid</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Underpricing Your Services</div>
                              <div className="text-white/80 text-xs">
                                <p>Starting too low creates a price ceiling that's hard to break through. Focus on value-based pricing from the beginning, even if you start with fewer clients.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Trying to Serve Everyone</div>
                              <div className="text-white/80 text-xs">
                                <p>Being a generalist makes it harder to command premium fees and scale efficiently. Choose a specific niche and become the go-to expert in that area.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Neglecting Systems & Processes</div>
                              <div className="text-white/80 text-xs">
                                <p>Without documented systems, you can't scale beyond yourself. Invest time in creating processes and leveraging technology from the beginning.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Inconsistent Client Acquisition</div>
                              <div className="text-white/80 text-xs">
                                <p>Relying on sporadic referrals creates feast-or-famine cycles. Implement consistent outreach and marketing systems that generate predictable leads.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Your 30-Day Action Plan</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">1</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Days 1-10: Foundation</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Choose your grant writing niche</li>
                          <li>Create your premium service offering</li>
                          <li>Set up basic business infrastructure</li>
                          <li>Develop your sales presentation</li>
                          <li>Create client onboarding process</li>
                          <li>Set up AI tools and systems</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">2</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Days 11-20: Outreach</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Identify 20 ideal client prospects</li>
                          <li>Create personalized outreach plan</li>
                          <li>Reach out to 5 prospects per day</li>
                          <li>Contact potential referral partners</li>
                          <li>Schedule 5+ sales conversations</li>
                          <li>Create LinkedIn content strategy</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">3</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Days 21-30: Conversion</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Conduct sales conversations</li>
                          <li>Sign your first premium client</li>
                          <li>Implement client onboarding</li>
                          <li>Begin service delivery</li>
                          <li>Document processes and results</li>
                          <li>Plan next 30 days of growth</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> Building a $10K+/month grant writing business is achievable within 4-6 months when you follow a strategic roadmap. By focusing on premium positioning, leveraging AI, creating scalable systems, and avoiding common pitfalls, you can build a profitable, sustainable business that delivers exceptional results for clients while providing you with freedom and financial security.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 81: Your $10K+/Month Grant Writing Roadmap
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive roadmap for building a $10K+/month grant writing business. It outlines the key milestones, critical success factors, common pitfalls, and immediate action steps needed to achieve this income goal. The key elements include:</p>
                
                <ul>
                  <li><strong>Key Milestones to $10K/Month:</strong> Four-stage progression from first $3K month to scaling beyond $15K, with specific goals and timelines for each stage</li>
                  <li><strong>Critical Success Factors:</strong> Four essential elements for building a successful grant writing business: niche specialization, AI-powered systems, results-based positioning, and strategic relationships</li>
                  <li><strong>Common Pitfalls to Avoid:</strong> Four frequent mistakes that can derail progress: underpricing services, trying to serve everyone, neglecting systems and processes, and inconsistent client acquisition</li>
                  <li><strong>30-Day Action Plan:</strong> Immediate, actionable steps divided into three phases: foundation (days 1-10), outreach (days 11-20), and conversion (days 21-30)</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on the achievability of the $10K+/month goal within a realistic timeframe</li>
                </ul>
                
                <p>This slide begins the conclusion section by providing a comprehensive roadmap for implementing the concepts presented throughout the masterclass. The key milestones section breaks down the journey to $10K+/month into four clear stages: first $3K month (30-60 days), consistent $5K months (2-3 months), breaking $10K months (4-6 months), and scaling beyond $15K (8-12 months), with specific goals and timelines for each stage. The critical success factors section highlights four essential elements for building a successful grant writing business: niche specialization that allows for premium pricing, AI-powered systems that enhance efficiency and quality, results-based positioning that focuses on outcomes rather than services, and strategic relationships that provide a consistent flow of clients. The common pitfalls section addresses four frequent mistakes that can derail progress: underpricing services that creates a difficult-to-break price ceiling, trying to serve everyone instead of specializing, neglecting systems and processes that limit scalability, and inconsistent client acquisition that creates feast-or-famine cycles. The 30-day action plan provides immediate, actionable steps divided into three phases: foundation building (days 1-10), outreach (days 11-20), and conversion (days 21-30). The key takeaway emphasizes that building a $10K+/month grant writing business is achievable within 4-6 months when following a strategic roadmap, providing a realistic timeframe that balances ambition with practicality. This slide provides participants with a clear path forward for implementing the concepts presented throughout the masterclass, setting the stage for the more detailed exploration of success stories in the next slide.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide80"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide82"
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
