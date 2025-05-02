"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide24Page() {
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
                Slide 24 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide23"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide25"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Common Objection #2:<br />
                    "Isn't It Too Competitive?"
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Addressing the competition objection with data showing the favorable supply-demand ratio compared to other freelance services
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4 text-center">Grant Writing vs. Other Freelance Services</h3>
                    
                    <div className="space-y-6">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-white font-semibold mb-2 text-center">Copywriting</div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white/80 text-sm">Supply</div>
                          <div className="text-white text-sm font-medium">1.5M+ Freelancers</div>
                        </div>
                        <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full" style={{ width: '90%' }}></div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-white/80 text-sm">Demand</div>
                          <div className="text-white text-sm font-medium">High</div>
                        </div>
                        <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full" style={{ width: '70%' }}></div>
                        </div>
                        <div className="text-white/80 text-sm mt-3 text-center">
                          <span className="text-red-300 font-medium">Supply exceeds demand</span> - Highly competitive
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-white font-semibold mb-2 text-center">Web Design</div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white/80 text-sm">Supply</div>
                          <div className="text-white text-sm font-medium">1M+ Freelancers</div>
                        </div>
                        <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full" style={{ width: '85%' }}></div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-white/80 text-sm">Demand</div>
                          <div className="text-white text-sm font-medium">High</div>
                        </div>
                        <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full" style={{ width: '75%' }}></div>
                        </div>
                        <div className="text-white/80 text-sm mt-3 text-center">
                          <span className="text-red-300 font-medium">Supply exceeds demand</span> - Highly competitive
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-white font-semibold mb-2 text-center">Social Media Management</div>
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white/80 text-sm">Supply</div>
                          <div className="text-white text-sm font-medium">2M+ Freelancers</div>
                        </div>
                        <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full" style={{ width: '95%' }}></div>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <div className="text-white/80 text-sm">Demand</div>
                          <div className="text-white text-sm font-medium">Very High</div>
                        </div>
                        <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full" style={{ width: '80%' }}></div>
                        </div>
                        <div className="text-white/80 text-sm mt-3 text-center">
                          <span className="text-red-300 font-medium">Supply exceeds demand</span> - Extremely competitive
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4 text-center">Grant Writing Market</h3>
                    
                    <div className="bg-white/10 rounded-lg p-6 mb-6">
                      <div className="text-white font-semibold mb-4 text-center">Supply vs. Demand</div>
                      
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-white/80 text-sm">Supply</div>
                        <div className="text-white text-sm font-medium">~50,000 Grant Writers</div>
                      </div>
                      <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
                        <div className="bg-red-500 h-full" style={{ width: '20%' }}></div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 mb-2">
                        <div className="text-white/80 text-sm">Demand</div>
                        <div className="text-white text-sm font-medium">2.5M+ Annual Applications</div>
                      </div>
                      <div className="w-full bg-white/20 h-3 rounded-full overflow-hidden">
                        <div className="bg-green-500 h-full" style={{ width: '95%' }}></div>
                      </div>
                      
                      <div className="text-white/80 text-sm mt-4 text-center">
                        <span className="text-green-300 font-medium">Demand far exceeds supply</span> - Minimal competition
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">50:1 Opportunity Ratio</div>
                            <div className="text-white/80 text-sm">For every grant writer, there are 50+ organizations needing help</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Growing Demand</div>
                            <div className="text-white/80 text-sm">Demand increasing 7.5% annually while supply grows at only 3.2%</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-3 mt-1">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Specialized Niches</div>
                            <div className="text-white/80 text-sm">Further reduce competition by focusing on specific sectors</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">The Bottom Line:</span> Grant writing is one of the least competitive freelance services with one of the highest demand-to-supply ratios in the market.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 24: Common Objection #2: "Isn't It Too Competitive?"
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide addresses the competition objection with data showing the favorable supply-demand ratio compared to other freelance services. The key elements include:</p>
                
                <ul>
                  <li><strong>Side-by-Side Comparison:</strong> Clear contrast between grant writing and other popular freelance services</li>
                  <li><strong>Visual Data:</strong> Progress bars showing the supply-demand imbalance in different markets</li>
                  <li><strong>Specific Numbers:</strong> "50,000 Grant Writers" vs. "2.5M+ Annual Applications" creates a clear picture of opportunity</li>
                  <li><strong>Opportunity Ratio:</strong> "50:1 Opportunity Ratio" provides a simple, memorable metric</li>
                  <li><strong>Growing Gap:</strong> "Demand increasing 7.5% annually while supply grows at only 3.2%" shows the opportunity is expanding</li>
                  <li><strong>Niche Strategy:</strong> Suggestion to "further reduce competition by focusing on specific sectors" provides an actionable strategy</li>
                </ul>
                
                <p>This slide creates desire by showing that grant writing is significantly less competitive than other freelance services. The visual comparison makes the opportunity immediately apparent, while the specific numbers add credibility. The mention of the growing gap between supply and demand creates urgency to enter the market now, while the suggestion to focus on specific niches provides a practical strategy for further reducing competition.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide23"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide25"
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
