"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide40Page() {
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
                Slide 40 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide39"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide41"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-cyan-600 to-blue-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    AI-Powered Grant Research & Analysis
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    How to find and evaluate the perfect grant opportunities in minutes, not hours
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Grant Opportunity Research</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">AI-Powered Grant Database Search</div>
                            <div className="text-white/80 text-sm">Use our custom AI tool to search across multiple grant databases simultaneously</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Automated Eligibility Checking</div>
                            <div className="text-white/80 text-sm">AI analyzes grant requirements against client profile to determine eligibility</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Opportunity Prioritization</div>
                            <div className="text-white/80 text-sm">AI ranks opportunities based on match score, deadline, and funding amount</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-5 mt-6">
                        <div className="text-white font-semibold mb-2">Sample AI Prompt:</div>
                        <div className="bg-white/10 p-3 rounded text-white/90 text-sm font-mono">
                          "Analyze the following grant opportunity for [Organization Name]: [Grant Details]. Evaluate eligibility based on: 1) Organization type, 2) Geographic focus, 3) Program alignment, 4) Funding history. Provide a match score from 1-10 and explain your reasoning."
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Funder Analysis & Insights</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                            <div>
                              <div className="text-white font-semibold">Funder Priority Extraction</div>
                              <div className="text-white/80 text-sm">AI analyzes funder websites, annual reports, and past grants to identify priorities</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                            <div>
                              <div className="text-white font-semibold">Success Pattern Recognition</div>
                              <div className="text-white/80 text-sm">AI identifies common elements in previously funded projects</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                            <div>
                              <div className="text-white font-semibold">Keyword & Terminology Analysis</div>
                              <div className="text-white/80 text-sm">AI extracts key terms and phrases to incorporate in your application</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-5 mt-6">
                          <div className="text-white font-semibold mb-2">Sample AI Prompt:</div>
                          <div className="bg-white/10 p-3 rounded text-white/90 text-sm font-mono">
                            "Analyze the following funder's website and recent grant announcements: [URLs]. Extract: 1) Top 5 priority areas, 2) Preferred terminology, 3) Types of projects they've funded recently, 4) Any specific impact metrics they value. Format as a strategic brief for grant application development."
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Grant Opportunity Report</h3>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-white font-semibold mb-2">AI-Generated Client Deliverable:</div>
                        <div className="text-white/80 text-sm">
                          <p className="mb-2">Our AI system automatically generates comprehensive grant opportunity reports for clients that include:</p>
                          <ul className="space-y-1 list-disc pl-4">
                            <li>Top 5-10 grant opportunities with match scores</li>
                            <li>Detailed eligibility analysis for each opportunity</li>
                            <li>Funder priorities and preferences</li>
                            <li>Application requirements and deadlines</li>
                            <li>Strategic recommendations for each application</li>
                          </ul>
                          <p className="mt-2 text-white/70 italic">This high-value deliverable can be created in 30-45 minutes using our AI system vs. 4-6 hours manually.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Benefit:</span> Our AI research system reduces grant research time by 80-90% while improving match quality. This allows you to focus on high-value client interactions rather than tedious research.
                  </p>
                </div>
                
                <div className="mt-4 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Action Step:</span> Use the provided AI prompts to analyze one potential grant opportunity for a client (real or hypothetical). Compare the AI analysis to your manual assessment to see the time savings and insight quality.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 40: AI-Powered Grant Research & Analysis
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of how AI can be used for grant research and analysis, the first phase of the grant writing process. The key elements include:</p>
                
                <ul>
                  <li><strong>Three-Step Research Process:</strong> Clear framework for using AI to search, check eligibility, and prioritize opportunities</li>
                  <li><strong>Three-Step Funder Analysis:</strong> Structured approach to extracting funder priorities, success patterns, and key terminology</li>
                  <li><strong>Sample AI Prompts:</strong> Ready-to-use prompts for grant opportunity analysis and funder research</li>
                  <li><strong>Client Deliverable:</strong> Description of the comprehensive grant opportunity report that can be generated</li>
                  <li><strong>Time Savings:</strong> Specific comparison of "30-45 minutes using our AI system vs. 4-6 hours manually"</li>
                  <li><strong>Key Benefit:</strong> Clear articulation of the 80-90% time reduction while improving quality</li>
                  <li><strong>Action Step:</strong> Practical next step to test the AI prompts with a real or hypothetical client</li>
                </ul>
                
                <p>This slide addresses one of the most time-consuming aspects of grant writing: research and analysis. By providing a structured framework and specific AI prompts, it makes the process feel concrete and implementable. The emphasis on time savings (80-90%) creates a compelling value proposition, while the description of the comprehensive client deliverable shows how AI can enhance quality, not just speed. The action step creates immediate implementation with a specific task that demonstrates the value proposition firsthand.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide39"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide41"
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
