"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide58Page() {
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
                Slide 58 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide57"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide59"
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
                  Pillar 2: Content Marketing System
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">The 4 Types of High-Converting Content</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-pink-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Grant Opportunity Alerts</div>
                            <div className="text-white/80 text-sm">
                              <p>Weekly alerts for industry-specific grant opportunities</p>
                              <p className="text-white/60 text-xs mt-1">Include eligibility criteria, deadlines, and funding amounts</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-pink-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Success Case Studies</div>
                            <div className="text-white/80 text-sm">
                              <p>Detailed breakdowns of successful grant applications</p>
                              <p className="text-white/60 text-xs mt-1">Highlight specific strategies that led to approval</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-pink-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Educational Content</div>
                            <div className="text-white/80 text-sm">
                              <p>How-to guides and tips for grant application components</p>
                              <p className="text-white/60 text-xs mt-1">Focus on common pain points and challenges</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-pink-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Funding Trend Analysis</div>
                            <div className="text-white/80 text-sm">
                              <p>Industry-specific funding trends and opportunities</p>
                              <p className="text-white/60 text-xs mt-1">Position yourself as a knowledgeable industry insider</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-pink-500/20 rounded-lg p-3">
                      <p className="text-white text-center font-medium">
                        AI-Generated in 15-30 minutes each
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Content Distribution Channels</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-orange-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Email Newsletter</div>
                              <div className="text-white/80 text-xs">
                                <p>Weekly grant opportunity roundup</p>
                                <p>30-40% open rates with proper segmentation</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-orange-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">LinkedIn</div>
                              <div className="text-white/80 text-xs">
                                <p>Industry-specific posts 3x per week</p>
                                <p>Focus on engagement and conversation</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-orange-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Industry Groups</div>
                              <div className="text-white/80 text-xs">
                                <p>Share valuable content in relevant groups</p>
                                <p>Answer questions to build authority</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-orange-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Website/Blog</div>
                              <div className="text-white/80 text-xs">
                                <p>SEO-optimized content for grant-related keywords</p>
                                <p>Lead magnets for email capture</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">AI Content Creation Process</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <span className="text-white text-xs font-bold">1</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Research Phase</div>
                              <div className="text-white/80 text-xs">
                                <p>Use our AI to identify trending grant topics</p>
                                <p>Pull data from our grant database for opportunities</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <span className="text-white text-xs font-bold">2</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Content Generation</div>
                              <div className="text-white/80 text-xs">
                                <p>Use our specialized content prompts</p>
                                <p>Generate first draft with AI in minutes</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <span className="text-white text-xs font-bold">3</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Personalization</div>
                              <div className="text-white/80 text-xs">
                                <p>Add industry-specific insights</p>
                                <p>Incorporate your unique perspective</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <span className="text-white text-xs font-bold">4</span>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Distribution</div>
                              <div className="text-white/80 text-xs">
                                <p>Schedule across multiple channels</p>
                                <p>Track engagement and follow up with interested prospects</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Content Marketing Results</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">2-3</div>
                      <div className="text-white/70 text-sm">Hours Per Week</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">15-20</div>
                      <div className="text-white/70 text-sm">Leads Per Month</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">25%</div>
                      <div className="text-white/70 text-sm">Higher Close Rate</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">$3-5K</div>
                      <div className="text-white/70 text-sm">Monthly Revenue</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> Content marketing creates warm leads who already trust your expertise, resulting in 25% higher close rates and less price resistance.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 58: Pillar 2: Content Marketing System
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of the second client acquisition pillar: content marketing. It presents a systematic approach to creating and distributing valuable content that attracts potential clients. The key elements include:</p>
                
                <ul>
                  <li><strong>4 Content Types:</strong> Specific types of content that are most effective for attracting grant-seeking organizations</li>
                  <li><strong>Distribution Channels:</strong> Multiple channels for sharing content with target audiences</li>
                  <li><strong>AI Creation Process:</strong> Step-by-step process for efficiently creating content using AI</li>
                  <li><strong>Expected Results:</strong> Concrete metrics showing the impact of content marketing on lead generation and revenue</li>
                  <li><strong>Key Takeaway:</strong> Clear benefit of content marketing compared to cold outreach</li>
                </ul>
                
                <p>This slide takes the content marketing pillar introduced earlier and breaks it down into a detailed, actionable system. The four content types provide a clear focus for content creation, emphasizing high-value content that directly addresses the needs and interests of potential clients. The distribution channels section shows how to reach target audiences across multiple platforms, while the AI content creation process demonstrates how to efficiently produce content without spending hours writing. The results section provides concrete metrics that show the business impact of content marketing, including the time investment required (just 2-3 hours per week) and the potential return (15-20 leads per month, $3-5K monthly revenue). The key takeaway highlights a significant advantage of content marketing: it creates warm leads who already trust your expertise, resulting in 25% higher close rates and less price resistance. This positions content marketing as a valuable complement to the targeted outreach approach covered in the previous slide.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide57"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide59"
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
