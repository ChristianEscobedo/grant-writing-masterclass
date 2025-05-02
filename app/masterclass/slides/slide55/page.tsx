"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide55Page() {
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
                Slide 55 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide54"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide56"
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
                  The AI Grant Builder System
                </h1>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-5xl mx-auto mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Our Proprietary AI Grant Writing System</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-xl p-5 text-left">
                      <div className="bg-blue-500/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                        </svg>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-3">Grant Database</h4>
                      
                      <ul className="space-y-2 text-white/80 text-sm">
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>20,000+ grants updated daily</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Advanced filtering by industry, amount, and eligibility</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>AI-powered matching algorithm</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Automated deadline tracking</div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-5 text-left">
                      <div className="bg-purple-500/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-3">AI Content Generator</h4>
                      
                      <ul className="space-y-2 text-white/80 text-sm">
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Custom-trained on 10,000+ successful grants</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Section-specific prompts for optimal results</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Funder-specific language adaptation</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Persuasive frameworks built-in</div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-5 text-left">
                      <div className="bg-green-500/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-white mb-3">Quality Assurance</h4>
                      
                      <ul className="space-y-2 text-white/80 text-sm">
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Automated compliance checking</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Scoring system for each section</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Improvement suggestions engine</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>Success probability estimator</div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">System Benefits</h3>
                    
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">No Experience Required</div>
                            <div className="text-white/80 text-xs">The system guides you through every step with templates and examples</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">85% Time Reduction</div>
                            <div className="text-white/80 text-xs">Complete grants in days instead of weeks, allowing you to take on more clients</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Higher Success Rates</div>
                            <div className="text-white/80 text-xs">Our clients see 25% higher approval rates compared to traditional methods</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-yellow-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">White Label Option</div>
                            <div className="text-white/80 text-xs">Brand the system as your own for a more professional client experience</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Client Results</h3>
                    
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Education Non-Profit</div>
                            <div className="text-white/80 text-xs">$250,000 Department of Education grant secured in first attempt</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Healthcare Startup</div>
                            <div className="text-white/80 text-xs">$500,000 NIH SBIR grant with only 2 weeks of preparation</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Environmental Organization</div>
                            <div className="text-white/80 text-xs">$1.2M in foundation funding across 5 different grants</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Small Business</div>
                            <div className="text-white/80 text-xs">$350,000 economic development grant with no prior grant experience</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> Our AI Grant Builder system gives you an unfair advantage in the grant writing market, allowing you to deliver better results in less time with no prior experience.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 55: The AI Grant Builder System
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive overview of the AI Grant Builder system, showcasing its features, benefits, and real-world results. The key elements include:</p>
                
                <ul>
                  <li><strong>System Components:</strong> Detailed breakdown of the three main components (Grant Database, AI Content Generator, Quality Assurance)</li>
                  <li><strong>Feature Lists:</strong> Specific features within each component that deliver value to users</li>
                  <li><strong>System Benefits:</strong> Four key advantages that directly impact the user's business</li>
                  <li><strong>Client Results:</strong> Real-world examples of successful grants secured using the system</li>
                  <li><strong>Key Takeaway:</strong> Compelling summary of the system's competitive advantage</li>
                </ul>
                
                <p>This slide serves as a comprehensive overview of the AI Grant Builder system, providing a detailed look at what makes it powerful and effective. By breaking down the system into three main components and listing specific features for each, it creates a clear picture of the technology's capabilities. The system benefits section translates these features into direct business advantages, while the client results provide social proof and demonstrate the system's effectiveness across different industries and grant types. The key takeaway summarizes the competitive advantage in a memorable way, positioning the AI system as a game-changer that allows users to outperform competitors regardless of experience level. This slide effectively bridges the gap between the process explanation and the upcoming offer, setting the stage for the high-ticket program that includes access to this system.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide54"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide56"
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
