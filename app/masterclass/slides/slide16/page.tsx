"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide16Page() {
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
                Slide 16 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide15"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide17"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Income Potential
                </h1>
                
                <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-3">Project-Based</h3>
                    <div className="text-3xl font-bold text-white mb-2">$3,000-$5,000</div>
                    <div className="text-white/80 text-sm mb-4">Per Grant Application</div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                      <div className="flex justify-between mb-1">
                        <span>Time Investment:</span>
                        <span className="font-semibold">20-30 hours*</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hourly Rate:</span>
                        <span className="font-semibold">$100-$250/hour</span>
                      </div>
                      <div className="text-xs text-white/70 mt-2">*With our AI system (vs. 40-60 hours traditionally)</div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-3">Retainer</h3>
                    <div className="text-3xl font-bold text-white mb-2">$2,000-$4,000</div>
                    <div className="text-white/80 text-sm mb-4">Monthly Recurring</div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                      <div className="flex justify-between mb-1">
                        <span>Time Investment:</span>
                        <span className="font-semibold">15-25 hours/month</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Client Retention:</span>
                        <span className="font-semibold">12+ months avg.</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                    <h3 className="text-xl font-bold text-white mb-3">Success Fee</h3>
                    <div className="text-3xl font-bold text-white mb-2">5-10%</div>
                    <div className="text-white/80 text-sm mb-4">Of Funded Amount</div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                      <div className="flex justify-between mb-1">
                        <span>Average Grant:</span>
                        <span className="font-semibold">$50,000-$500,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fee Range:</span>
                        <span className="font-semibold">$2,500-$50,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">Monthly Income Scenarios</h3>
                  
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-lg font-semibold text-white mb-1">Beginner</div>
                      <div className="text-2xl font-bold text-white mb-2">$5,000-$8,000</div>
                      <div className="text-white/80 text-sm">
                        2 projects/month<br />
                        15-20 hours/week
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-lg font-semibold text-white mb-1">Intermediate</div>
                      <div className="text-2xl font-bold text-white mb-2">$10,000-$15,000</div>
                      <div className="text-white/80 text-sm">
                        3-4 projects/month<br />
                        25-30 hours/week
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-lg font-semibold text-white mb-1">Advanced</div>
                      <div className="text-2xl font-bold text-white mb-2">$20,000+</div>
                      <div className="text-white/80 text-sm">
                        Team-based approach<br />
                        Multiple revenue streams
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Realistic Timeline:</span> Most of our students reach the $10K/month milestone within 3-6 months of implementing our system.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 16: Income Potential
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a breakdown of average project values and monthly potential with realistic earnings timeline. The key elements include:</p>
                
                <ul>
                  <li><strong>Three Business Models:</strong> Clear explanation of project-based, retainer, and success fee models</li>
                  <li><strong>Specific Numbers:</strong> Concrete figures for each model, including per-project rates and hourly equivalents</li>
                  <li><strong>Time Investment:</strong> Realistic time requirements that acknowledge the work involved</li>
                  <li><strong>AI Advantage:</strong> Highlighting how the AI system reduces time investment (20-30 hours vs. 40-60 hours)</li>
                  <li><strong>Income Scenarios:</strong> Three clear levels of income potential based on experience and time investment</li>
                  <li><strong>Realistic Timeline:</strong> Honest assessment that the $10K/month milestone takes 3-6 months to achieve</li>
                </ul>
                
                <p>This slide creates desire by showing the specific income potential of grant writing while maintaining credibility with realistic time investments and timelines. The three business models provide flexibility for different preferences, while the income scenarios create a clear progression path from beginner to advanced. The mention of the AI system reducing time investment addresses concerns about the workload, while the realistic timeline sets appropriate expectations for results.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide15"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide17"
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
