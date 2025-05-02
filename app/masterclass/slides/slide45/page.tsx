"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide45Page() {
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
                Slide 45 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide44"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide46"
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
                    Days 31-60: Growth & Optimization
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Expanding your client base and refining your processes
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Expanding Your Client Base</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Referral System Implementation</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">Set up a structured referral process with your first client</p>
                              <p className="text-white/70 italic text-xs">Timeline: Days 31-35</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Expanded Outreach</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">Research and contact 20 new potential clients using refined targeting</p>
                              <p className="text-white/70 italic text-xs">Timeline: Days 35-45</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Case Study Development</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">Create a detailed case study based on your first successful project</p>
                              <p className="text-white/70 italic text-xs">Timeline: Days 40-50</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Strategic Networking</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">Attend 1-2 industry events or online communities where potential clients gather</p>
                              <p className="text-white/70 italic text-xs">Timeline: Days 45-60</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">First Partnership Exploration</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">Identify and reach out to 3-5 potential strategic partners</p>
                              <p className="text-white/70 italic text-xs">Timeline: Days 50-60</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Process Refinement</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                            <div>
                              <div className="text-white font-semibold">Client Onboarding Optimization</div>
                              <div className="text-white/80 text-sm">
                                <p className="mb-1">Create a streamlined questionnaire and information gathering process</p>
                                <p className="text-white/70 italic text-xs">Timeline: Days 31-40</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                            <div>
                              <div className="text-white font-semibold">AI Prompt Library</div>
                              <div className="text-white/80 text-sm">
                                <p className="mb-1">Build a personal library of effective AI prompts for different grant sections</p>
                                <p className="text-white/70 italic text-xs">Timeline: Days 35-45</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                            <div>
                              <div className="text-white font-semibold">Project Management System</div>
                              <div className="text-white/80 text-sm">
                                <p className="mb-1">Implement a simple project management system for tracking multiple clients</p>
                                <p className="text-white/70 italic text-xs">Timeline: Days 40-50</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                            <div>
                              <div className="text-white font-semibold">Client Communication Templates</div>
                              <div className="text-white/80 text-sm">
                                <p className="mb-1">Create templates for regular client updates and milestone communications</p>
                                <p className="text-white/70 italic text-xs">Timeline: Days 45-55</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Retainer Implementation</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Retainer Service Package</div>
                              <div className="text-white/80 text-sm">Finalize your monthly retainer offerings with clear deliverables</div>
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
                              <div className="text-white font-semibold">Retainer Conversion Strategy</div>
                              <div className="text-white/80 text-sm">Develop a process for converting project clients to retainer clients</div>
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
                              <div className="text-white font-semibold">Retainer Contract Template</div>
                              <div className="text-white/80 text-sm">Create a comprehensive contract for monthly retainer services</div>
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
                              <div className="text-white font-semibold">First Retainer Client</div>
                              <div className="text-white/80 text-sm">Convert at least one project client to a monthly retainer</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Milestone:</span> By day 60, you should have 2-3 active project clients, 1 retainer client, and refined systems that allow you to handle multiple clients efficiently. Your monthly revenue should reach $5,000-$7,000.
                  </p>
                </div>
                
                <div className="mt-4 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Action Step:</span> Create your retainer service package and conversion strategy. Identify which of your current or potential clients would be the best fit for a monthly retainer arrangement.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 45: Days 31-60: Growth & Optimization
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of days 31-60 of the implementation plan, focusing on expanding the client base and refining business processes. The key elements include:</p>
                
                <ul>
                  <li><strong>Client Base Expansion:</strong> Five specific strategies for finding new clients and leveraging existing relationships</li>
                  <li><strong>Process Refinement:</strong> Four key systems to optimize for handling multiple clients efficiently</li>
                  <li><strong>Retainer Implementation:</strong> Four-step process for developing and implementing monthly retainer services</li>
                  <li><strong>Specific Timelines:</strong> Day-by-day guidance for when to complete each task</li>
                  <li><strong>Key Milestone:</strong> Clear target for client composition and revenue by day 60</li>
                  <li><strong>Action Step:</strong> Immediate next step focused on retainer service development</li>
                </ul>
                
                <p>This slide provides practical, actionable guidance for the second month of business, building on the foundation established in the first month. The client base expansion strategies create multiple channels for finding new clients, reducing reliance on any single approach. The process refinement section addresses the operational challenges of managing multiple clients simultaneously, ensuring scalability. The retainer implementation section provides a clear path to more stable, recurring revenue. The specific timelines for each task create accountability and help with planning, while the key milestone provides a clear target to aim for. The action step creates immediate implementation with a specific focus on developing retainer services, which are critical for stable income.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide44"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide46"
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
