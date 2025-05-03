"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide75Page() {
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
                Slide 75 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide74"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide76"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-blue-600 to-teal-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 9: SCALING YOUR BUSINESS
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Quality Control at Scale
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">The Quality Challenge</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Common Quality Issues When Scaling</div>
                            <div className="text-white/80 text-sm">
                              <p>• Inconsistent writing style and quality</p>
                              <p>• Missed deadlines and rushed submissions</p>
                              <p>• Errors and compliance issues</p>
                              <p>• Declining win rates</p>
                              <p>• Inconsistent client experience</p>
                              <p>• Knowledge gaps with new team members</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-red-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                          <div>
                            <div className="text-white font-semibold">Business Impact of Quality Issues</div>
                            <div className="text-white/80 text-sm">
                              <p>• Damaged reputation and credibility</p>
                              <p>• Client churn and lost revenue</p>
                              <p>• Reduced referrals and testimonials</p>
                              <p>• Team frustration and turnover</p>
                              <p>• Increased costs from rework</p>
                              <p>• Stalled growth and scaling</p>
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
                            <div className="text-white font-semibold">Quality as a Competitive Advantage</div>
                            <div className="text-white/80 text-sm">
                              <p>• Higher win rates than competitors</p>
                              <p>• Premium pricing justification</p>
                              <p>• Strong reputation in the market</p>
                              <p>• Higher client retention rates</p>
                              <p>• More referrals and testimonials</p>
                              <p>• Reduced stress and firefighting</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Quality Control Framework</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-teal-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Quality Standards & Guidelines</div>
                              <div className="text-white/80 text-xs">
                                <p>Establish clear quality expectations:</p>
                                <p>• Writing style guide and tone</p>
                                <p>• Content structure requirements</p>
                                <p>• Data presentation standards</p>
                                <p>• Formatting and visual guidelines</p>
                                <p>• Client communication protocols</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-teal-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Multi-Level Review Process</div>
                              <div className="text-white/80 text-xs">
                                <p>Implement tiered quality control:</p>
                                <p>• Level 1: Self-review with checklist</p>
                                <p>• Level 2: Peer review for content</p>
                                <p>• Level 3: QA specialist review</p>
                                <p>• Level 4: Final client review</p>
                                <p>• Level 5: Pre-submission verification</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-teal-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Quality Metrics & Tracking</div>
                              <div className="text-white/80 text-xs">
                                <p>Measure and monitor quality performance:</p>
                                <p>• Error rates by type and severity</p>
                                <p>• Quality scores by team member</p>
                                <p>• Client satisfaction ratings</p>
                                <p>• Grant success rates</p>
                                <p>• Rework percentage and causes</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-teal-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Continuous Improvement System</div>
                              <div className="text-white/80 text-xs">
                                <p>Implement feedback loops for ongoing enhancement:</p>
                                <p>• Regular quality review meetings</p>
                                <p>• Root cause analysis for issues</p>
                                <p>• Process updates based on findings</p>
                                <p>• Training to address common errors</p>
                                <p>• Documentation of lessons learned</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Quality Control Tools</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Quality Checklists</div>
                              <div className="text-white/80 text-xs">
                                <p>Comprehensive review checklists for each grant type:</p>
                                <p>• Content completeness verification</p>
                                <p>• Compliance with funder requirements</p>
                                <p>• Common error prevention</p>
                                <p>• Formatting and presentation standards</p>
                                <p>• Submission requirements verification</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">AI Quality Assessment</div>
                              <div className="text-white/80 text-xs">
                                <p>Leverage AI for objective quality evaluation:</p>
                                <p>• Automated content scoring</p>
                                <p>• Readability and clarity analysis</p>
                                <p>• Consistency checking</p>
                                <p>• Error detection and correction</p>
                                <p>• Alignment with funder preferences</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Collaborative Review Platform</div>
                              <div className="text-white/80 text-xs">
                                <p>Centralized system for review and feedback:</p>
                                <p>• Version control and tracking</p>
                                <p>• Comment and feedback management</p>
                                <p>• Review assignment and tracking</p>
                                <p>• Approval workflows</p>
                                <p>• Quality metrics dashboard</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Quality Control Implementation</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">1</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Define Standards</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Document quality expectations</li>
                          <li>Create style guides</li>
                          <li>Establish review criteria</li>
                          <li>Set performance benchmarks</li>
                          <li>Define quality metrics</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">2</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Build Tools</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Develop review checklists</li>
                          <li>Implement review platform</li>
                          <li>Create templates</li>
                          <li>Set up AI quality tools</li>
                          <li>Build tracking dashboard</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">3</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Train Team</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Quality standards training</li>
                          <li>Review process training</li>
                          <li>Tool usage training</li>
                          <li>Common errors workshop</li>
                          <li>Feedback delivery training</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">4</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Monitor & Improve</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Track quality metrics</li>
                          <li>Hold regular reviews</li>
                          <li>Analyze trends</li>
                          <li>Update processes</li>
                          <li>Recognize quality excellence</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> Quality control is not a luxury—it's a necessity for scaling successfully. By implementing a robust quality framework, you can maintain or even improve your grant success rates as you grow, creating a sustainable competitive advantage that justifies premium pricing and drives client retention.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 75: Quality Control at Scale
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive framework for maintaining and enhancing quality as a grant writing business scales. It addresses the critical challenge of maintaining excellence while growing, presenting a structured approach to quality control that can be implemented at any stage of business growth. The key elements include:</p>
                
                <ul>
                  <li><strong>The Quality Challenge:</strong> Detailed examination of common quality issues when scaling, their business impact, and the competitive advantage of maintaining high quality</li>
                  <li><strong>Quality Control Framework:</strong> Comprehensive approach to establishing quality standards, implementing multi-level review processes, tracking quality metrics, and creating continuous improvement systems</li>
                  <li><strong>Quality Control Tools:</strong> Specific tools and technologies to support quality control, including checklists, AI assessment, and collaborative review platforms</li>
                  <li><strong>Quality Control Implementation:</strong> Four-step process for implementing quality control systems: defining standards, building tools, training the team, and monitoring for improvement</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on quality control as a necessity for successful scaling and a source of competitive advantage</li>
                </ul>
                
                <p>This slide builds on the financial management focus of the previous slide by addressing another critical aspect of scaling: maintaining quality as the business grows. The quality challenge section examines common quality issues when scaling, their business impact, and the competitive advantage of maintaining high quality, establishing the importance of quality control in the scaling process. The quality control framework section outlines a comprehensive approach to establishing quality standards, implementing multi-level review processes, tracking quality metrics, and creating continuous improvement systems, providing a structured methodology for quality management. The quality control tools section presents specific tools and technologies to support quality control, including checklists, AI assessment, and collaborative review platforms, offering practical solutions for implementation. The quality control implementation section provides a four-step process for implementing quality control systems: defining standards, building tools, training the team, and monitoring for improvement, creating an actionable roadmap. The key takeaway emphasizes that quality control is not a luxury but a necessity for scaling successfully, positioning it as a source of competitive advantage that justifies premium pricing and drives client retention. This slide provides participants with a complete framework for implementing quality control systems that support scale, completing the comprehensive exploration of scaling strategies across the five slides in this section.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide74"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide76"
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
