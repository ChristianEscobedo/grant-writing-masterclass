"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide53Page() {
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
                Slide 53 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide52"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide54"
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
                  Phase 2 & 3: AI-Powered Planning & Writing
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Phase 2: AI-Powered Planning</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Grant Analysis</div>
                            <div className="text-white/80 text-sm">
                              <p>AI analyzes grant guidelines and requirements</p>
                              <p className="text-white/60 text-xs mt-1">Extracts key criteria, priorities, and evaluation metrics</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Outline Generation</div>
                            <div className="text-white/80 text-sm">
                              <p>AI creates detailed section-by-section outline</p>
                              <p className="text-white/60 text-xs mt-1">Customized to match grant requirements and client strengths</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Information Gathering</div>
                            <div className="text-white/80 text-sm">
                              <p>AI generates customized information request form</p>
                              <p className="text-white/60 text-xs mt-1">Only asks for information needed for this specific grant</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Resource Allocation</div>
                            <div className="text-white/80 text-sm">
                              <p>AI recommends optimal word count per section</p>
                              <p className="text-white/60 text-xs mt-1">Based on grant priorities and scoring criteria</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-blue-500/20 rounded-lg p-3">
                      <p className="text-white text-center font-medium">
                        Planning Time: 1-2 hours (vs. 10-15 hours traditional)
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Phase 3: AI-Powered Writing</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Section Drafting</div>
                            <div className="text-white/80 text-sm">
                              <p>AI generates first drafts of each section</p>
                              <p className="text-white/60 text-xs mt-1">Based on client information and grant requirements</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Persuasive Elements</div>
                            <div className="text-white/80 text-sm">
                              <p>AI incorporates proven persuasive frameworks</p>
                              <p className="text-white/60 text-xs mt-1">Problem-solution-impact structure with evidence</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Keyword Optimization</div>
                            <div className="text-white/80 text-sm">
                              <p>AI analyzes successful grants for key terminology</p>
                              <p className="text-white/60 text-xs mt-1">Incorporates funder-specific language and priorities</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Human Review & Refinement</div>
                            <div className="text-white/80 text-sm">
                              <p>You review and personalize the AI-generated content</p>
                              <p className="text-white/60 text-xs mt-1">Add client-specific details and nuance</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-green-500/20 rounded-lg p-3">
                      <p className="text-white text-center font-medium">
                        Writing Time: 4-6 hours (vs. 30-40 hours traditional)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">The AI Writing Advantage</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="bg-yellow-500/50 rounded-full p-2 mr-2">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Consistency</div>
                          <div className="text-white/80 text-xs">
                            <p>Maintains consistent tone, style, and quality across all sections</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="bg-yellow-500/50 rounded-full p-2 mr-2">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Adaptability</div>
                          <div className="text-white/80 text-xs">
                            <p>Easily modify content for different funders without starting over</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="flex items-start">
                        <div className="bg-yellow-500/50 rounded-full p-2 mr-2">
                          <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-semibold">Scalability</div>
                          <div className="text-white/80 text-xs">
                            <p>Write multiple grants simultaneously without quality degradation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Benefit:</span> Our AI system reduces writing time by 85% while maintaining or improving quality compared to traditional methods.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 53: Phase 2 & 3: AI-Powered Planning & Writing
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide focuses on the planning and writing phases of the grant writing process, showing how AI transforms these traditionally time-intensive tasks. The key elements include:</p>
                
                <ul>
                  <li><strong>Step-by-Step Process:</strong> Clear breakdown of both the planning and writing phases into four manageable steps each</li>
                  <li><strong>Time Comparison:</strong> Direct comparison showing the dramatic time savings (1-2 hours vs. 10-15 for planning, 4-6 hours vs. 30-40 for writing)</li>
                  <li><strong>AI Advantages:</strong> Three specific benefits of AI-powered writing beyond just time savings</li>
                  <li><strong>Human Element:</strong> Emphasis on the human review and refinement step, showing that AI augments rather than replaces human expertise</li>
                </ul>
                
                <p>This slide addresses the core of the grant writing process: planning and writing the actual proposal. By showing how AI transforms these traditionally time-intensive tasks into streamlined processes, it demonstrates significant value to potential clients. The step-by-step breakdown makes the process easy to understand and implement, while the time comparisons provide compelling evidence of efficiency gains. The section on AI advantages highlights benefits beyond just time savings, addressing potential concerns about quality and personalization. The inclusion of the human review step emphasizes that this is an AI-assisted rather than fully automated process, maintaining the value of human expertise while leveraging AI for efficiency.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide52"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide54"
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
