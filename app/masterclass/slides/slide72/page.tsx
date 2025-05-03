"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide72Page() {
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
                Slide 72 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide71"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide73"
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
                  Building Your Grant Writing Team
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Team Structure & Roles</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Grant Researcher</div>
                            <div className="text-white/80 text-sm">
                              <p>• Identifies grant opportunities</p>
                              <p>• Analyzes funder requirements</p>
                              <p>• Evaluates client-grant fit</p>
                              <p>• Creates opportunity reports</p>
                              <p>• Maintains grant database</p>
                              <p><span className="text-teal-300">Hiring tip:</span> Look for research experience and attention to detail</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Client Success Manager</div>
                            <div className="text-white/80 text-sm">
                              <p>• Manages client relationships</p>
                              <p>• Gathers client information</p>
                              <p>• Conducts client interviews</p>
                              <p>• Handles client communication</p>
                              <p>• Ensures client satisfaction</p>
                              <p><span className="text-teal-300">Hiring tip:</span> Prioritize communication skills and organization</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Grant Writer</div>
                            <div className="text-white/80 text-sm">
                              <p>• Creates grant content</p>
                              <p>• Develops project narratives</p>
                              <p>• Crafts budgets and justifications</p>
                              <p>• Produces supporting materials</p>
                              <p>• Adapts to funder requirements</p>
                              <p><span className="text-teal-300">Hiring tip:</span> Focus on writing ability and strategic thinking</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-blue-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Quality Assurance Specialist</div>
                            <div className="text-white/80 text-sm">
                              <p>• Reviews all grant materials</p>
                              <p>• Ensures compliance with requirements</p>
                              <p>• Checks for consistency and clarity</p>
                              <p>• Manages submission process</p>
                              <p>• Maintains quality standards</p>
                              <p><span className="text-teal-300">Hiring tip:</span> Look for attention to detail and critical thinking</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Hiring & Onboarding Process</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-teal-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Start with Contractors, Not Employees</div>
                              <div className="text-white/80 text-xs">
                                <p>Begin with project-based contractors to test fit</p>
                                <p>Use platforms like Upwork for initial hiring</p>
                                <p>Convert to part-time then full-time as needed</p>
                                <p>Maintain flexibility in early growth stages</p>
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
                              <div className="text-white font-semibold">Practical Skills Assessment</div>
                              <div className="text-white/80 text-xs">
                                <p>Create role-specific test projects:</p>
                                <p>• Researchers: Find grants for a sample client</p>
                                <p>• Writers: Draft a section of a grant</p>
                                <p>• Client managers: Role-play client interaction</p>
                                <p>• QA: Review a grant with intentional errors</p>
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
                              <div className="text-white font-semibold">Structured Onboarding System</div>
                              <div className="text-white/80 text-xs">
                                <p>Create comprehensive onboarding materials:</p>
                                <p>• Role-specific training videos</p>
                                <p>• Process documentation and SOPs</p>
                                <p>• Access to templates and examples</p>
                                <p>• Shadowing opportunities with experienced team</p>
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
                              <div className="text-white font-semibold">Progressive Responsibility</div>
                              <div className="text-white/80 text-xs">
                                <p>Gradually increase responsibility and autonomy:</p>
                                <p>• Week 1-2: Closely supervised work</p>
                                <p>• Week 3-4: Independent work with review</p>
                                <p>• Month 2: Handle full process with oversight</p>
                                <p>• Month 3+: Full autonomy with spot checks</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Team Management Systems</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Project Management</div>
                              <div className="text-white/80 text-xs">
                                <p>Implement a centralized project management system:</p>
                                <p>• Grant pipeline tracking</p>
                                <p>• Task assignments and deadlines</p>
                                <p>• Document management</p>
                                <p>• Client communication logs</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Meeting Cadence</div>
                              <div className="text-white/80 text-xs">
                                <p>Establish regular team communication:</p>
                                <p>• Daily 15-minute standups</p>
                                <p>• Weekly grant pipeline review</p>
                                <p>• Bi-weekly team training</p>
                                <p>• Monthly performance reviews</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Performance Metrics</div>
                              <div className="text-white/80 text-xs">
                                <p>Track role-specific KPIs:</p>
                                <p>• Researchers: Opportunities identified, match quality</p>
                                <p>• Writers: Content quality, turnaround time</p>
                                <p>• Client managers: Client satisfaction, retention</p>
                                <p>• QA: Error detection, submission success</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Team Compensation Models</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Hourly/Project-Based</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Best for contractors and early hires</li>
                          <li>Researchers: $25-40/hour</li>
                          <li>Writers: $40-75/hour</li>
                          <li>Client managers: $30-50/hour</li>
                          <li>QA specialists: $35-60/hour</li>
                          <li>Or fixed project fees based on grant size</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Base + Performance</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Best for established team members</li>
                          <li>Base salary (70-80% of compensation)</li>
                          <li>Performance bonus (20-30%)</li>
                          <li>Tied to grant success rates</li>
                          <li>Quarterly or bi-annual bonuses</li>
                          <li>Encourages quality and efficiency</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-blue-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Revenue Share</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Best for senior team/partners</li>
                          <li>Base compensation + % of revenue</li>
                          <li>Typically 5-15% of client revenue</li>
                          <li>Can be tied to specific clients</li>
                          <li>Creates ownership mentality</li>
                          <li>Aligns team with business growth</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> Your team is your most valuable asset in scaling. Invest time in creating clear roles, thorough onboarding processes, and effective management systems. Start with contractors to test fit before making full-time hires, and implement compensation structures that align with your business goals.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 72: Building Your Grant Writing Team
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive framework for building and managing a grant writing team as you scale your business. It covers the essential aspects of team structure, hiring processes, management systems, and compensation models. The key elements include:</p>
                
                <ul>
                  <li><strong>Team Structure & Roles:</strong> Detailed breakdown of four key roles in a grant writing agency, including responsibilities and hiring tips for each position</li>
                  <li><strong>Hiring & Onboarding Process:</strong> Strategic approach to hiring and onboarding team members, emphasizing contractor-first strategy, skills assessment, structured onboarding, and progressive responsibility</li>
                  <li><strong>Team Management Systems:</strong> Essential systems for effective team management, including project management, meeting cadence, and performance metrics</li>
                  <li><strong>Team Compensation Models:</strong> Three compensation approaches for different team stages, from hourly/project-based to base+performance to revenue share</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on the importance of team building in the scaling process</li>
                </ul>
                
                <p>This slide builds on the scaling overview from the previous slide by focusing specifically on the team-building aspect of scaling a grant writing business. The team structure section breaks down the four key roles needed in a grant writing agency: grant researcher, client success manager, grant writer, and quality assurance specialist, with detailed responsibilities and hiring tips for each. The hiring and onboarding process section provides a strategic approach to bringing on team members, emphasizing starting with contractors, using practical skills assessments, implementing structured onboarding, and gradually increasing responsibility. The team management systems section outlines the essential systems needed for effective team management, including project management tools, meeting cadence, and performance metrics. The team compensation models section presents three different approaches to compensation based on team member stage and role: hourly/project-based for contractors and early hires, base+performance for established team members, and revenue share for senior team members or partners. The key takeaway emphasizes the critical importance of team building in the scaling process, positioning it as the most valuable asset in growing the business. This slide provides participants with a complete framework for building and managing a grant writing team effectively, setting the stage for the more detailed exploration of operational systems in subsequent slides.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide71"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide73"
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
