"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide66Page() {
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
                Slide 66 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide65"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide67"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 8: GRANT WRITING PROCESS
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  The AI-Powered Grant Writing System
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Traditional vs. AI-Powered Approach</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Traditional Grant Writing</div>
                            <div className="text-white/80 text-sm">
                              <p>• 75-100 hours per grant application</p>
                              <p>• Steep learning curve (years to master)</p>
                              <p>• Requires specialized knowledge</p>
                              <p>• Highly manual research process</p>
                              <p>• Inconsistent quality across sections</p>
                              <p>• Limited by writer's experience</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-green-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">AI-Powered Grant Writing</div>
                            <div className="text-white/80 text-sm">
                              <p>• 15-25 hours per grant application</p>
                              <p>• Rapid learning (days, not years)</p>
                              <p>• Knowledge embedded in the system</p>
                              <p>• Automated research and data gathering</p>
                              <p>• Consistent quality across all sections</p>
                              <p>• Leverages best practices from thousands of grants</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Key Benefits</div>
                            <div className="text-white/80 text-sm">
                              <p>• 4x faster grant production</p>
                              <p>• Higher quality applications</p>
                              <p>• Increased win rates (20-30%)</p>
                              <p>• Ability to handle more clients</p>
                              <p>• Reduced stress and burnout</p>
                              <p>• Competitive advantage in the market</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">The 4-Stage AI Grant System</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                            <div>
                              <div className="text-white font-semibold">Research & Opportunity Analysis</div>
                              <div className="text-white/80 text-xs">
                                <p>• AI-powered grant database search</p>
                                <p>• Automated eligibility matching</p>
                                <p>• Funder analysis and success probability</p>
                                <p>• Competitive landscape assessment</p>
                                <p>• Time required: 2-4 hours</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                            <div>
                              <div className="text-white font-semibold">Client Information Gathering</div>
                              <div className="text-white/80 text-xs">
                                <p>• Smart questionnaire system</p>
                                <p>• Automated data extraction from documents</p>
                                <p>• Gap analysis for missing information</p>
                                <p>• Structured data organization</p>
                                <p>• Time required: 3-5 hours</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                            <div>
                              <div className="text-white font-semibold">Grant Content Generation</div>
                              <div className="text-white/80 text-xs">
                                <p>• Section-by-section AI writing</p>
                                <p>• Funder-specific language adaptation</p>
                                <p>• Automated budget development</p>
                                <p>• Logic model and timeline creation</p>
                                <p>• Time required: 8-12 hours</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                            <div>
                              <div className="text-white font-semibold">Review & Optimization</div>
                              <div className="text-white/80 text-xs">
                                <p>• AI-powered quality assessment</p>
                                <p>• Scoring against funder criteria</p>
                                <p>• Consistency and alignment check</p>
                                <p>• Final human review and submission</p>
                                <p>• Time required: 2-4 hours</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">AI Tools in Our System</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-purple-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Grant Opportunity Finder</div>
                              <div className="text-white/80 text-xs">
                                <p>Searches 15,000+ funding sources to find perfect matches</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-purple-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Client Questionnaire Generator</div>
                              <div className="text-white/80 text-xs">
                                <p>Creates custom questionnaires based on grant requirements</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-purple-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Grant Writer AI</div>
                              <div className="text-white/80 text-xs">
                                <p>Specialized LLM trained on 10,000+ successful grant applications</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-purple-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Grant Evaluator</div>
                              <div className="text-white/80 text-xs">
                                <p>Scores applications against funder criteria to optimize before submission</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">System Results</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">75%</div>
                      <div className="text-white/70 text-sm">Time Reduction</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">3-4x</div>
                      <div className="text-white/70 text-sm">Client Capacity</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">25%</div>
                      <div className="text-white/70 text-sm">Win Rate</div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4 text-center">
                      <div className="text-3xl font-bold text-white mb-2">$10K+</div>
                      <div className="text-white/70 text-sm">Monthly Revenue</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> Our AI-powered grant writing system doesn't replace human expertise—it amplifies it. You provide the strategic oversight while the AI handles the heavy lifting, allowing you to produce more grants in less time with higher quality.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 66: The AI-Powered Grant Writing System
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide introduces the AI-powered grant writing system that forms the foundation of the business model. It presents a comprehensive comparison between traditional and AI-powered approaches, along with the specific tools and processes that make the system effective. The key elements include:</p>
                
                <ul>
                  <li><strong>Traditional vs. AI Comparison:</strong> Clear contrast between the time-intensive traditional approach and the efficient AI-powered method</li>
                  <li><strong>4-Stage System:</strong> Detailed breakdown of the four stages of the AI grant writing process with time estimates for each</li>
                  <li><strong>AI Tools:</strong> Specific AI tools that power the system, including their capabilities and benefits</li>
                  <li><strong>System Results:</strong> Concrete metrics showing the impact of the AI system on efficiency, capacity, success rates, and revenue</li>
                  <li><strong>Key Takeaway:</strong> Strategic positioning of AI as an amplifier of human expertise rather than a replacement</li>
                </ul>
                
                <p>This slide addresses a critical concern for participants: how to actually write grants efficiently without years of experience. The comparison between traditional and AI-powered approaches highlights the dramatic time savings (75-100 hours vs. 15-25 hours) and the accessibility of the AI system to beginners. The 4-stage process provides a clear, systematic approach to grant writing, breaking down a complex task into manageable steps with specific time estimates. The AI tools section showcases the specific technologies that power the system, emphasizing their specialized nature and effectiveness. The system results section provides concrete metrics that demonstrate the business impact of the AI approach, including increased client capacity (3-4x) and win rates (25%). The key takeaway addresses potential concerns about AI replacing human expertise, positioning it instead as a tool that amplifies human capabilities—a critical distinction for participants who may be skeptical about AI-based solutions. This slide sets the stage for the more detailed exploration of each stage of the grant writing process in subsequent slides.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide65"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide67"
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
