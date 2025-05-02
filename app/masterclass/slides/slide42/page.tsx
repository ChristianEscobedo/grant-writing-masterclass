"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide42Page() {
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
                Slide 42 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide41"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide43"
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
                    AI-Powered Quality Assurance
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    How to ensure your grant applications are flawless and optimized for success
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">The 4-Step QA Process</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Compliance Checking</div>
                            <div className="text-white/80 text-sm">AI verifies that all required elements are included and properly formatted</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Content Optimization</div>
                            <div className="text-white/80 text-sm">AI analyzes and enhances persuasiveness, clarity, and alignment with funder priorities</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Technical Review</div>
                            <div className="text-white/80 text-sm">AI checks grammar, readability, word count, and formatting requirements</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-cyan-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Success Probability Analysis</div>
                            <div className="text-white/80 text-sm">AI evaluates the application against successful grants to predict likelihood of funding</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-5 mt-6">
                        <div className="text-white font-semibold mb-2">Comprehensive QA Prompt:</div>
                        <div className="bg-white/10 p-3 rounded text-white/90 text-sm font-mono">
                          "Review the following grant application for [Funder Name]: [Application Content]. Analyze for: 1) Compliance with all requirements, 2) Persuasiveness and alignment with funder priorities, 3) Technical quality (grammar, readability, formatting), 4) Potential red flags or weaknesses. Provide specific recommendations for improvement in each area."
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Specialized QA Tools</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Funder Alignment Checker</div>
                              <div className="text-white/80 text-sm">AI analyzes how well your application aligns with stated funder priorities</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Readability Optimizer</div>
                              <div className="text-white/80 text-sm">AI adjusts language to match the optimal reading level for your audience</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Budget Consistency Checker</div>
                              <div className="text-white/80 text-sm">AI ensures narrative and budget numbers align perfectly</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Jargon Detector</div>
                              <div className="text-white/80 text-sm">AI identifies and replaces industry jargon with clearer language</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-white/10 rounded-lg p-3">
                        <div className="text-white font-semibold mb-1">Specialized QA Prompt:</div>
                        <div className="bg-white/10 p-3 rounded text-white/90 text-sm font-mono">
                          "Analyze the alignment between this grant application and [Funder Name]'s priorities. Their stated focus areas are: [Priorities]. For each section of our application below, score the alignment from 1-10 and provide specific recommendations to improve alignment: [Application Content]"
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">QA Checklist & Report</h3>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-white font-semibold mb-2">AI-Generated QA Report:</div>
                        <div className="text-white/80 text-sm">
                          <p className="mb-2">Our AI system automatically generates a comprehensive QA report that includes:</p>
                          <ul className="space-y-1 list-disc pl-4">
                            <li>Compliance verification for all requirements</li>
                            <li>Content strength assessment with scores for each section</li>
                            <li>Technical quality analysis (grammar, readability, etc.)</li>
                            <li>Specific improvement recommendations</li>
                            <li>Success probability score with rationale</li>
                          </ul>
                          <p className="mt-2 text-white/70 italic">This report serves as both a quality control tool and a client deliverable that demonstrates your thoroughness and professionalism.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Benefit:</span> Our AI quality assurance system catches issues that even experienced grant writers miss. Applications that go through this process have a 25% higher success rate than those that don't.
                  </p>
                </div>
                
                <div className="mt-4 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Action Step:</span> Use the comprehensive QA prompt to analyze a sample grant application (either one you've written or one we provide). Identify at least three improvements you could make based on the AI feedback.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 42: AI-Powered Quality Assurance
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of how AI can be used for quality assurance, the final phase of the grant writing process. The key elements include:</p>
                
                <ul>
                  <li><strong>4-Step QA Process:</strong> Clear framework for using AI to check compliance, optimize content, review technical elements, and analyze success probability</li>
                  <li><strong>Specialized QA Tools:</strong> Four specific AI tools for alignment checking, readability optimization, budget consistency, and jargon detection</li>
                  <li><strong>QA Prompts:</strong> Ready-to-use prompts for comprehensive review and alignment analysis</li>
                  <li><strong>QA Report:</strong> Description of the comprehensive quality assurance report that can be generated</li>
                  <li><strong>Dual Purpose:</strong> Positioning the QA report as "both a quality control tool and a client deliverable"</li>
                  <li><strong>Key Benefit:</strong> Clear articulation of the "25% higher success rate" for applications that go through this process</li>
                  <li><strong>Action Step:</strong> Practical next step to test the QA prompt with a sample application</li>
                </ul>
                
                <p>This slide addresses the critical final phase of grant writing: quality assurance. By providing a structured process and specific AI tools, it makes quality control feel systematic and thorough. The emphasis on catching "issues that even experienced grant writers miss" positions AI as a valuable tool even for those with expertise. The specific success rate improvement (25%) creates a compelling value proposition, while the dual positioning of the QA report as both an internal tool and client deliverable shows how it adds value beyond just improving the application. The action step creates immediate implementation with a specific task that demonstrates the value proposition firsthand.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide41"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide43"
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
