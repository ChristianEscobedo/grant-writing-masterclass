"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide71Page() {
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
                Slide 71 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide70"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide72"
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
                  From Solo Practitioner to $10K+/Month Agency
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">The Growth Journey</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Phase 1: Solo Practitioner</div>
                            <div className="text-white/80 text-sm">
                              <p>• $3-5K/month revenue</p>
                              <p>• 1-2 clients at a time</p>
                              <p>• Handling everything yourself</p>
                              <p>• Building initial systems</p>
                              <p>• Establishing credibility</p>
                              <p>• Timeline: Months 1-3</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Phase 2: Productized Service</div>
                            <div className="text-white/80 text-sm">
                              <p>• $5-8K/month revenue</p>
                              <p>• 3-4 clients at a time</p>
                              <p>• Standardized packages</p>
                              <p>• Documented processes</p>
                              <p>• First VA or contractor</p>
                              <p>• Timeline: Months 4-6</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Phase 3: Small Agency</div>
                            <div className="text-white/80 text-sm">
                              <p>• $10-15K/month revenue</p>
                              <p>• 5-8 clients at a time</p>
                              <p>• Small team (2-3 people)</p>
                              <p>• Specialized roles</p>
                              <p>• Refined systems</p>
                              <p>• Timeline: Months 7-12</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Phase 4: Scaled Agency</div>
                            <div className="text-white/80 text-sm">
                              <p>• $20K+/month revenue</p>
                              <p>• 10+ clients at a time</p>
                              <p>• Full team with departments</p>
                              <p>• Multiple service offerings</p>
                              <p>• Automated operations</p>
                              <p>• Timeline: Year 2+</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Key Scaling Principles</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-teal-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Systematize Before You Scale</div>
                              <div className="text-white/80 text-xs">
                                <p>Document every process before hiring</p>
                                <p>Create templates and standard operating procedures</p>
                                <p>Build repeatable workflows that don't require your expertise</p>
                                <p>Implement quality control checkpoints</p>
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
                              <div className="text-white font-semibold">Leverage Technology</div>
                              <div className="text-white/80 text-xs">
                                <p>Use AI to multiply team productivity</p>
                                <p>Implement project management software</p>
                                <p>Automate repetitive tasks</p>
                                <p>Create client dashboards for transparency</p>
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
                              <div className="text-white font-semibold">Specialize Team Roles</div>
                              <div className="text-white/80 text-xs">
                                <p>Divide work into specialized functions:</p>
                                <p>• Research & opportunity analysis</p>
                                <p>• Client management & information gathering</p>
                                <p>• Grant writing & content creation</p>
                                <p>• Quality control & submission</p>
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
                              <div className="text-white font-semibold">Focus on Retention</div>
                              <div className="text-white/80 text-xs">
                                <p>Prioritize client retention over acquisition</p>
                                <p>Implement proactive communication systems</p>
                                <p>Create long-term client relationships</p>
                                <p>Build recurring revenue through retainers</p>
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
                              <div className="text-white font-semibold">Measure Everything</div>
                              <div className="text-white/80 text-xs">
                                <p>Track key performance indicators:</p>
                                <p>• Client acquisition cost</p>
                                <p>• Lifetime client value</p>
                                <p>• Grant success rates</p>
                                <p>• Team productivity metrics</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Common Scaling Mistakes</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Hiring Too Early</div>
                              <div className="text-white/80 text-xs">
                                <p>Bringing on team members before systems are in place</p>
                                <p>Creating overhead before consistent revenue</p>
                                <p>Hiring full-time before testing with contractors</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Neglecting Quality Control</div>
                              <div className="text-white/80 text-xs">
                                <p>Failing to maintain quality as you scale</p>
                                <p>Not implementing proper review processes</p>
                                <p>Sacrificing excellence for growth</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Underpricing as You Grow</div>
                              <div className="text-white/80 text-xs">
                                <p>Not raising prices as your expertise increases</p>
                                <p>Failing to charge premium rates for premium service</p>
                                <p>Creating a price ceiling that limits growth</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Your First 90 Days Scaling Plan</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">1</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Days 1-30</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Document all current processes</li>
                          <li>Create templates for each deliverable</li>
                          <li>Set up project management system</li>
                          <li>Establish KPIs and tracking</li>
                          <li>Identify first role to delegate</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">2</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Days 31-60</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Hire first contractor (VA or writer)</li>
                          <li>Test delegation of specific tasks</li>
                          <li>Refine processes based on feedback</li>
                          <li>Implement client management system</li>
                          <li>Develop quality control checklist</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">3</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Days 61-90</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Increase client capacity by 50%</li>
                          <li>Implement team communication system</li>
                          <li>Create training materials for team</li>
                          <li>Develop client onboarding automation</li>
                          <li>Establish weekly team metrics review</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> Scaling is a methodical process, not an overnight transformation. Focus on building systems first, then gradually adding team members who can operate within those systems. This approach allows you to grow without sacrificing quality or burning out.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 71: From Solo Practitioner to $10K+/Month Agency
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide introduces the scaling journey for a grant writing business, providing a clear roadmap from solo practitioner to a full-fledged agency generating $10K+ per month. It presents a comprehensive framework for growth with practical principles and common pitfalls to avoid. The key elements include:</p>
                
                <ul>
                  <li><strong>The Growth Journey:</strong> Four-phase progression from solo practitioner to scaled agency, with revenue targets, client capacity, and timeline for each phase</li>
                  <li><strong>Key Scaling Principles:</strong> Five fundamental principles for successful scaling, including systematization, technology leverage, role specialization, client retention, and performance measurement</li>
                  <li><strong>Common Scaling Mistakes:</strong> Critical errors to avoid during the scaling process, including premature hiring, quality control neglect, and underpricing</li>
                  <li><strong>90-Day Scaling Plan:</strong> Actionable 90-day roadmap divided into three 30-day phases with specific tasks for each phase</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on the methodical nature of scaling and the importance of systems before team expansion</li>
                </ul>
                
                <p>This slide sets the stage for the scaling section by providing a comprehensive overview of the growth journey for a grant writing business. The growth journey section breaks down the progression into four clear phases: solo practitioner ($3-5K/month), productized service ($5-8K/month), small agency ($10-15K/month), and scaled agency ($20K+/month), with specific characteristics and timelines for each phase. The key scaling principles section provides five fundamental principles for successful scaling: systematize before scaling, leverage technology, specialize team roles, focus on retention, and measure everything. The common scaling mistakes section highlights three critical errors to avoid: hiring too early, neglecting quality control, and underpricing as you grow. The 90-day scaling plan provides an actionable roadmap divided into three 30-day phases, with specific tasks for each phase to guide participants through the initial scaling process. The key takeaway emphasizes the methodical nature of scaling and the importance of building systems before adding team members, setting the stage for the more detailed exploration of scaling strategies in subsequent slides.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide70"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide72"
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
