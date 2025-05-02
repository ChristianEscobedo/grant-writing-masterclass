"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide52Page() {
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
                Slide 52 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide51"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide53"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 5: GRANT WRITING PROCESS
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Phase 1: AI-Powered Grant Research
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">The Research Challenge</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Fragmented Databases</div>
                            <div className="text-white/80 text-sm">
                              <p>Over 20+ different grant databases with no central repository</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Complex Eligibility Criteria</div>
                            <div className="text-white/80 text-sm">
                              <p>Each grant has unique requirements that are easy to miss</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Deadline Management</div>
                            <div className="text-white/80 text-sm">
                              <p>Tracking hundreds of different deadlines manually</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Alignment Analysis</div>
                            <div className="text-white/80 text-sm">
                              <p>Determining which grants are the best fit is subjective and time-consuming</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">The AI Solution</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Unified Database</div>
                            <div className="text-white/80 text-sm">
                              <p>Our AI system aggregates 20+ databases into one searchable platform</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Eligibility Matching</div>
                            <div className="text-white/80 text-sm">
                              <p>AI analyzes client profiles against grant requirements with 95% accuracy</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Automated Tracking</div>
                            <div className="text-white/80 text-sm">
                              <p>Smart calendar integration with deadline alerts and preparation timelines</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Alignment Scoring</div>
                            <div className="text-white/80 text-sm">
                              <p>Proprietary algorithm scores each grant on a 0-100 scale based on fit</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">The Research Process</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="bg-blue-500/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">1</span>
                      </div>
                      <div className="text-white font-medium mb-1">Client Profile</div>
                      <div className="text-white/70 text-xs">Input organization details into AI system</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="bg-blue-500/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">2</span>
                      </div>
                      <div className="text-white font-medium mb-1">AI Matching</div>
                      <div className="text-white/70 text-xs">Algorithm finds grants with highest alignment</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="bg-blue-500/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">3</span>
                      </div>
                      <div className="text-white font-medium mb-1">Opportunity Report</div>
                      <div className="text-white/70 text-xs">Generate detailed report of top matches</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="bg-blue-500/30 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                        <span className="text-white font-bold">4</span>
                      </div>
                      <div className="text-white font-medium mb-1">Timeline Creation</div>
                      <div className="text-white/70 text-xs">Auto-generate work schedule based on deadlines</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Benefit:</span> Our AI research system finds 3x more relevant grant opportunities in 1/10th the time of traditional methods.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 52: Phase 1: AI-Powered Grant Research
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide focuses on the first phase of the grant writing process: research. It highlights how AI transforms the traditionally time-consuming and complex research process into a streamlined, efficient system. The key elements include:</p>
                
                <ul>
                  <li><strong>Problem-Solution Format:</strong> Clear presentation of the challenges in traditional grant research alongside the AI-powered solutions</li>
                  <li><strong>Specific Benefits:</strong> Concrete examples of how AI improves each aspect of the research process</li>
                  <li><strong>Process Visualization:</strong> Simple 4-step process showing how the AI research system works</li>
                  <li><strong>Key Metric:</strong> Memorable statistic highlighting the 3x improvement in results with 90% time savings</li>
                </ul>
                
                <p>This slide addresses one of the most tedious and time-consuming aspects of grant writing: finding the right opportunities. By showing how AI transforms this process from a manual, error-prone task into an automated, highly accurate system, it demonstrates immediate value to potential clients. The side-by-side comparison makes the benefits clear, while the 4-step process provides a simple framework that participants can easily explain to clients. The key metric at the bottom provides a compelling talking point that participants can use in their sales conversations.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide51"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide53"
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
