"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide15Page() {
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
                Slide 15 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide14"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide16"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-blue-600 to-green-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  The Supply-Demand Gap
                </h1>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">Demand</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white font-semibold">Organizations Needing Grants</div>
                          <div className="text-white font-bold">33M+</div>
                        </div>
                        <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white font-semibold">Annual Grant Applications</div>
                          <div className="text-white font-bold">2.5M+</div>
                        </div>
                        <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white font-semibold">Average Project Value</div>
                          <div className="text-white font-bold">$3K-$5K</div>
                        </div>
                        <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full" style={{ width: '80%' }}></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white font-semibold">Growth Rate</div>
                          <div className="text-white font-bold">7.5% Annually</div>
                        </div>
                        <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden">
                          <div className="bg-green-500 h-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-2xl font-bold text-white mb-4 text-center">Supply</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white font-semibold">Professional Grant Writers</div>
                          <div className="text-white font-bold">~50,000</div>
                        </div>
                        <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full" style={{ width: '20%' }}></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white font-semibold">Average Capacity</div>
                          <div className="text-white font-bold">25 Grants/Year</div>
                        </div>
                        <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full" style={{ width: '30%' }}></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white font-semibold">Total Capacity</div>
                          <div className="text-white font-bold">1.25M Grants</div>
                        </div>
                        <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full" style={{ width: '40%' }}></div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-white font-semibold">Supply Growth</div>
                          <div className="text-white font-bold">3.2% Annually</div>
                        </div>
                        <div className="w-full bg-white/20 h-4 rounded-full overflow-hidden">
                          <div className="bg-red-500 h-full" style={{ width: '25%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">The Gap:</span> Demand exceeds supply by approximately <span className="font-bold">1.25 million grant applications annually</span> — and the gap is widening every year.
                  </p>
                </div>
                
                <div className="mt-4 text-white/80 text-sm">
                  <em>Source: Foundation Center, Grant Professionals Association, Bureau of Labor Statistics</em>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 15: The Supply-Demand Gap
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide presents data showing the high demand and low supply of qualified grant writers, creating a perfect market opportunity. The key elements include:</p>
                
                <ul>
                  <li><strong>Side-by-Side Comparison:</strong> Clear visual contrast between demand and supply metrics</li>
                  <li><strong>Specific Numbers:</strong> Concrete statistics like "33M+ Organizations" and "~50,000 Professional Grant Writers"</li>
                  <li><strong>Visual Representation:</strong> Progress bars showing the relative imbalance between demand and supply</li>
                  <li><strong>Growth Rates:</strong> Showing that demand (7.5%) is growing faster than supply (3.2%)</li>
                  <li><strong>The Gap:</strong> Clear statement that demand exceeds supply by 1.25 million applications annually</li>
                  <li><strong>Source Citation:</strong> References to credible sources add authority to the statistics</li>
                </ul>
                
                <p>This slide creates a compelling case for the market opportunity by showing the massive imbalance between demand and supply. The visual representation with progress bars makes the gap immediately apparent, while the specific numbers add credibility. The mention that the gap is "widening every year" creates urgency to enter the market now. This slide effectively addresses potential concerns about competition by showing that there's more than enough demand to go around.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide14"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide16"
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
