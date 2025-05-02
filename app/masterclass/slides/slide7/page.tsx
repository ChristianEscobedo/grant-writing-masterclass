"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide7Page() {
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
                Slide 7 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide6"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide8"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-red-600 to-orange-500 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Why Most Freelancers Struggle<br />With Inconsistent Income
                </h1>
                
                <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">The Typical Freelance Cycle</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-3 text-left">
                        <div className="flex items-center">
                          <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div className="text-white">Land a client</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3 text-left">
                        <div className="flex items-center">
                          <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div className="text-white">Focus on delivery</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3 text-left">
                        <div className="flex items-center">
                          <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div className="text-white">Project ends</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3 text-left">
                        <div className="flex items-center">
                          <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div className="text-white">Scramble for new clients</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3 text-left">
                        <div className="flex items-center">
                          <div className="bg-red-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div className="text-white">Repeat the cycle</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-white/80 text-sm italic">
                      Result: Feast or famine income
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">The Grant Writing Advantage</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-3 text-left">
                        <div className="flex items-center">
                          <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div className="text-white">Higher project values ($3K-$5K+)</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3 text-left">
                        <div className="flex items-center">
                          <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div className="text-white">Recurring revenue opportunities</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3 text-left">
                        <div className="flex items-center">
                          <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div className="text-white">Predictable application cycles</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3 text-left">
                        <div className="flex items-center">
                          <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div className="text-white">Less competition than other services</div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3 text-left">
                        <div className="flex items-center">
                          <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div className="text-white">AI tools reduce workload by 50%+</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 text-white/80 text-sm italic">
                      Result: Consistent, predictable income
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 7: Why Most Freelancers Struggle With Inconsistent Income
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide creates a pattern interrupt by addressing the common freelance struggle of inconsistent income and positioning grant writing as the solution. The key elements include:</p>
                
                <ul>
                  <li><strong>Problem Identification:</strong> Clearly articulates the "feast or famine" cycle that plagues most freelancers</li>
                  <li><strong>Visual Contrast:</strong> Side-by-side comparison of typical freelancing vs. grant writing</li>
                  <li><strong>Color Psychology:</strong> Red for problems, green for solutions creates an immediate visual distinction</li>
                  <li><strong>Specific Advantages:</strong> Five concrete advantages of grant writing over other freelance services</li>
                  <li><strong>Clear Results:</strong> "Consistent, predictable income" as the outcome of the grant writing approach</li>
                </ul>
                
                <p>This slide creates a powerful pattern interrupt by addressing a pain point that resonates with most freelancers. By contrasting the typical freelance cycle with the grant writing advantage, it positions grant writing as a solution to the inconsistent income problem. The mention of AI tools reducing workload by 50%+ addresses concerns about the complexity or time investment required.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide6"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide8"
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
