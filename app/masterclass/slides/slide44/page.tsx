"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide44Page() {
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
                Slide 44 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide43"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide45"
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
                    Days 1-30: Foundation Building
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Setting up your grant writing business for long-term success
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Business Setup Essentials</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Legal Structure</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">Set up as a sole proprietor or single-member LLC (simplest options)</p>
                              <p className="text-white/70 italic text-xs">Timeline: Days 1-7</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Business Banking</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">Open a dedicated business checking account and set up payment processing</p>
                              <p className="text-white/70 italic text-xs">Timeline: Days 3-10</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Service Packages</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">Define your initial service offerings and pricing structure</p>
                              <p className="text-white/70 italic text-xs">Timeline: Days 5-12</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Client Contracts</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">Create contract templates for project-based and retainer services</p>
                              <p className="text-white/70 italic text-xs">Timeline: Days 7-14</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">Basic Online Presence</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-1">Create a simple LinkedIn profile and one-page website</p>
                              <p className="text-white/70 italic text-xs">Timeline: Days 10-20</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Initial Client Acquisition</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                            <div>
                              <div className="text-white font-semibold">Target Client List</div>
                              <div className="text-white/80 text-sm">
                                <p className="mb-1">Research and create a list of 20 potential clients using our targeting criteria</p>
                                <p className="text-white/70 italic text-xs">Timeline: Days 7-14</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                            <div>
                              <div className="text-white font-semibold">Outreach Campaign</div>
                              <div className="text-white/80 text-sm">
                                <p className="mb-1">Send personalized outreach emails to your top 10 prospects</p>
                                <p className="text-white/70 italic text-xs">Timeline: Days 14-21</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                            <div>
                              <div className="text-white font-semibold">Discovery Calls</div>
                              <div className="text-white/80 text-sm">
                                <p className="mb-1">Conduct 3-5 discovery calls using our proven framework</p>
                                <p className="text-white/70 italic text-xs">Timeline: Days 18-25</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-indigo-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                            <div>
                              <div className="text-white font-semibold">Proposal Submission</div>
                              <div className="text-white/80 text-sm">
                                <p className="mb-1">Create and send 2-3 customized proposals using our template</p>
                                <p className="text-white/70 italic text-xs">Timeline: Days 20-28</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">First Project Delivery</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Client Onboarding</div>
                              <div className="text-white/80 text-sm">Create a structured process to gather all necessary information</div>
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
                              <div className="text-white font-semibold">Grant Research</div>
                              <div className="text-white/80 text-sm">Use our AI research system to identify 3-5 grant opportunities</div>
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
                              <div className="text-white font-semibold">Application Development</div>
                              <div className="text-white/80 text-sm">Create your first grant application using our AI content system</div>
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
                              <div className="text-white font-semibold">Client Communication</div>
                              <div className="text-white/80 text-sm">Establish regular update schedule and feedback process</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Milestone:</span> By day 30, you should have your business legally established, at least one paying client ($3,000-$5,000 project), and your first grant application in development.
                  </p>
                </div>
                
                <div className="mt-4 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Action Step:</span> Create your implementation calendar for days 1-30 with specific dates for each task. Start with the legal structure setup and target client list research this week.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 44: Days 1-30: Foundation Building
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a detailed breakdown of the first 30 days of the implementation plan, focusing on building a solid foundation for the grant writing business. The key elements include:</p>
                
                <ul>
                  <li><strong>Business Setup Essentials:</strong> Five specific steps for establishing the business infrastructure</li>
                  <li><strong>Initial Client Acquisition:</strong> Four-step process for finding and securing the first clients</li>
                  <li><strong>First Project Delivery:</strong> Four key elements of successfully delivering the first grant writing project</li>
                  <li><strong>Specific Timelines:</strong> Day-by-day guidance for when to complete each task</li>
                  <li><strong>Key Milestone:</strong> Clear target for what should be accomplished by day 30</li>
                  <li><strong>Action Step:</strong> Immediate next step to create an implementation calendar</li>
                </ul>
                
                <p>This slide provides practical, actionable guidance for the critical first month of business. The step-by-step approach to business setup creates a clear roadmap for establishing the necessary infrastructure, while the client acquisition process provides a systematic approach to finding and securing the first clients. The project delivery section ensures that the first client experience is successful, setting the stage for referrals and testimonials. The specific timelines for each task create accountability and help with planning, while the key milestone provides a clear target to aim for. The action step creates immediate implementation with a specific task to begin right away.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide43"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide45"
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
