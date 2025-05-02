"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide43Page() {
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
                Slide 43 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide42"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide44"
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
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 6: IMPLEMENTATION & SCALING
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Your 90-Day Implementation Plan<br />
                  to $10K/Month
                </h1>
                
                <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="bg-purple-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Days 1-30</h3>
                    <div className="text-white/80 text-sm mb-4">Foundation Building</div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="bg-purple-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Business setup</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-purple-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Initial client acquisition</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-purple-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>First project delivery</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="bg-indigo-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Days 31-60</h3>
                    <div className="text-white/80 text-sm mb-4">Growth & Optimization</div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="bg-indigo-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Expand client base</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-indigo-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Refine processes</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-indigo-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Implement retainers</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="bg-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2">Days 61-90</h3>
                    <div className="text-white/80 text-sm mb-4">Scaling & Systems</div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Strategic partnerships</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Success fee implementation</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Reach $10K/month</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 grid grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Key Milestones</h3>
                    
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div><span className="font-semibold">Day 14:</span> First client signed ($3,000-$5,000 project)</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div><span className="font-semibold">Day 45:</span> First retainer client ($2,000-$3,000/month)</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div><span className="font-semibold">Day 75:</span> First strategic partnership (3-5 referrals/month)</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div><span className="font-semibold">Day 90:</span> $10,000+ monthly revenue (combination of all models)</div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Revenue Progression</h3>
                    
                    <ul className="space-y-3 text-white/90">
                      <li className="flex items-start">
                        <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div><span className="font-semibold">Month 1:</span> $3,000-$5,000 (1-2 project clients)</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div><span className="font-semibold">Month 2:</span> $5,000-$7,000 (2-3 projects + 1 retainer)</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div><span className="font-semibold">Month 3:</span> $10,000+ (3-4 projects + 2 retainers + referrals)</div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-500 rounded-full p-1 mr-3 mt-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div><span className="font-semibold">Month 6:</span> $15,000-$20,000 (full implementation of all models)</div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 43: Your 90-Day Implementation Plan to $10K/Month
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide introduces the implementation and scaling section of the masterclass, providing a comprehensive 90-day roadmap to reaching $10,000 per month in revenue. The key elements include:</p>
                
                <ul>
                  <li><strong>Section Header:</strong> "PART 6: IMPLEMENTATION & SCALING" clearly indicates the start of a new section</li>
                  <li><strong>Three-Phase Framework:</strong> Clear breakdown of the implementation process into 30-day phases</li>
                  <li><strong>Specific Milestones:</strong> Four key achievements with specific timelines (first client by day 14, etc.)</li>
                  <li><strong>Revenue Progression:</strong> Concrete monthly revenue targets with specific client composition</li>
                  <li><strong>Business Model Integration:</strong> Strategic implementation of the three business models over time</li>
                  <li><strong>Realistic Timeline:</strong> Progressive scaling from $3,000-$5,000 in month 1 to $10,000+ in month 3</li>
                </ul>
                
                <p>This slide creates desire by showing a clear, achievable path to the promised $10,000 per month income. The three-phase framework makes the implementation process feel structured and manageable, while the specific milestones create clear targets to aim for. The revenue progression shows a realistic growth curve that builds confidence in the approach. The integration of the three business models demonstrates how the earlier content comes together in a cohesive strategy. The specific client composition at each stage (e.g., "2-3 projects + 1 retainer") provides concrete guidance on how to achieve the revenue targets.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide42"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide44"
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
