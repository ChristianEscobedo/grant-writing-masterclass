"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide30Page() {
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
                Slide 30 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide29"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide31"
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
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    The Ideal Business Model Mix
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    How to combine all three models for maximum stability and income potential
                  </p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-5xl mx-auto">
                  <div className="grid grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <div className="bg-indigo-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2">Project-Based</h3>
                        <div className="text-white/80 text-sm mb-3">40% of Revenue</div>
                        
                        <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                          <div className="mb-2 font-semibold">Target: 3-4 projects per month</div>
                          <ul className="space-y-1 text-white/80 list-disc pl-4">
                            <li>New client acquisition</li>
                            <li>Portfolio building</li>
                            <li>Quick cash flow</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-white text-sm">
                          <span className="font-semibold">Monthly Income:</span> $9,000-$15,000
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <div className="bg-blue-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2">Retainer</h3>
                        <div className="text-white/80 text-sm mb-3">40% of Revenue</div>
                        
                        <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                          <div className="mb-2 font-semibold">Target: 3-5 retainer clients</div>
                          <ul className="space-y-1 text-white/80 list-disc pl-4">
                            <li>Stable monthly income</li>
                            <li>Predictable workload</li>
                            <li>Deeper relationships</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-white text-sm">
                          <span className="font-semibold">Monthly Income:</span> $6,000-$12,000
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-xl p-4 text-center">
                        <div className="bg-green-500/30 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        
                        <h3 className="text-lg font-bold text-white mb-2">Success Fee</h3>
                        <div className="text-white/80 text-sm mb-3">20% of Revenue</div>
                        
                        <div className="bg-white/10 rounded-lg p-3 text-sm text-white text-left">
                          <div className="mb-2 font-semibold">Target: 2-3 active applications</div>
                          <ul className="space-y-1 text-white/80 list-disc pl-4">
                            <li>High upside potential</li>
                            <li>Larger grant amounts</li>
                            <li>Long-term payoffs</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-white text-sm">
                          <span className="font-semibold">Monthly Income:</span> $0-$20,000 (variable)
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-white/20 rounded-xl p-4">
                    <div className="text-center text-white mb-4">
                      <span className="font-bold text-xl">Total Monthly Income Potential: $15,000-$40,000+</span>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Implementation Timeline</h4>
                        <ul className="space-y-2 text-white/80 text-sm">
                          <li className="flex items-start">
                            <div className="bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-2 mt-0.5">1</div>
                            <div><span className="font-semibold">Months 1-2:</span> Focus on project-based clients (80% of revenue)</div>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-2 mt-0.5">2</div>
                            <div><span className="font-semibold">Months 3-4:</span> Convert 2-3 clients to retainers (50/50 split)</div>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-purple-500 rounded-full w-6 h-6 flex items-center justify-center text-white font-bold mr-2 mt-0.5">3</div>
                            <div><span className="font-semibold">Months 5-6:</span> Add success fee arrangements (40/40/20 mix)</div>
                          </li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-2">Key Success Factors</h4>
                        <ul className="space-y-2 text-white/80 text-sm">
                          <li className="flex items-start">
                            <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>Diversify across multiple clients and sectors</div>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>Balance consistent income with growth potential</div>
                          </li>
                          <li className="flex items-start">
                            <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>Use AI system to manage increased workload</div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">The Bottom Line:</span> By strategically combining all three business models, you create a grant writing business with stable monthly income, consistent client relationships, and significant upside potential.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 30: The Ideal Business Model Mix
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive strategy for combining all three business models to maximize stability and income potential. The key elements include:</p>
                
                <ul>
                  <li><strong>Revenue Allocation:</strong> Specific percentage breakdown (40% project-based, 40% retainer, 20% success fee)</li>
                  <li><strong>Target Metrics:</strong> Clear targets for each model (3-4 projects, 3-5 retainer clients, 2-3 success fee applications)</li>
                  <li><strong>Income Potential:</strong> Specific income ranges for each model and total potential ($15,000-$40,000+)</li>
                  <li><strong>Implementation Timeline:</strong> Three-phase approach to gradually build the ideal mix over 6 months</li>
                  <li><strong>Success Factors:</strong> Strategic guidance on diversification, balance, and leveraging AI</li>
                  <li><strong>Bottom Line Summary:</strong> Clear articulation of the benefits of the combined approach</li>
                </ul>
                
                <p>This slide provides a strategic roadmap for building a comprehensive grant writing business. The specific revenue allocation and target metrics create clear goals, while the implementation timeline provides a realistic progression from project-based to a balanced portfolio. The income potential figures create desire by showing the significant earning potential, while the success factors provide practical guidance for managing the complexity of multiple business models. This slide effectively ties together the previous three slides into a cohesive strategy.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide29"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide31"
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
