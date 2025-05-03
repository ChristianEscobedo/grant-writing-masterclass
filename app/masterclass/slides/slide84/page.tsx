"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide84Page() {
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
                Slide 84 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide83"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide85"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 11: MASTERCLASS CONCLUSION
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Your Next Steps & Resources
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Immediate Action Steps</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Complete Your Business Foundation</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-2">Set up the essential elements of your grant writing business:</p>
                              
                              <div className="bg-white/10 p-3 rounded-lg">
                                <ul className="list-disc pl-5 text-white/80 text-xs space-y-1">
                                  <li>Choose your niche and ideal client profile</li>
                                  <li>Create your premium service packages</li>
                                  <li>Set up basic business infrastructure</li>
                                  <li>Develop your sales presentation</li>
                                  <li>Create client onboarding process</li>
                                  <li>Set up AI tools and systems</li>
                                </ul>
                                <p className="text-white/80 text-xs mt-2">
                                  <span className="text-indigo-300 font-medium">Timeline:</span> Complete within 7 days
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Launch Your Client Acquisition Campaign</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-2">Implement your outreach strategy to secure your first clients:</p>
                              
                              <div className="bg-white/10 p-3 rounded-lg">
                                <ul className="list-disc pl-5 text-white/80 text-xs space-y-1">
                                  <li>Identify 20 ideal client prospects</li>
                                  <li>Create personalized outreach plan</li>
                                  <li>Reach out to 5 prospects per day</li>
                                  <li>Contact potential referral partners</li>
                                  <li>Schedule 5+ sales conversations</li>
                                  <li>Create LinkedIn content strategy</li>
                                </ul>
                                <p className="text-white/80 text-xs mt-2">
                                  <span className="text-indigo-300 font-medium">Timeline:</span> Begin within 7 days, continue for 30 days
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Join the Grant Writing Accelerator</div>
                            <div className="text-white/80 text-sm">
                              <p className="mb-2">Get ongoing support, advanced training, and accountability:</p>
                              
                              <div className="bg-white/10 p-3 rounded-lg">
                                <ul className="list-disc pl-5 text-white/80 text-xs space-y-1">
                                  <li>Apply for the Grant Writing Accelerator program</li>
                                  <li>Schedule your strategy session</li>
                                  <li>Get personalized feedback on your offer</li>
                                  <li>Access the AI grant writing toolkit</li>
                                  <li>Join the community of grant writing entrepreneurs</li>
                                  <li>Get weekly coaching and accountability</li>
                                </ul>
                                <p className="text-white/80 text-xs mt-2">
                                  <span className="text-indigo-300 font-medium">Timeline:</span> Apply today (limited spots available)
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Essential Resources</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-violet-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Grant Writing Business Templates</div>
                              <div className="text-white/80 text-xs">
                                <p>Complete set of ready-to-use templates to accelerate your business:</p>
                                <ul className="list-disc pl-5 space-y-0.5 mt-1">
                                  <li>Premium service package descriptions</li>
                                  <li>Client proposal templates</li>
                                  <li>Service agreements and contracts</li>
                                  <li>Client onboarding questionnaires</li>
                                  <li>Grant writing process checklists</li>
                                  <li>Client communication templates</li>
                                </ul>
                                <p className="mt-1"><span className="text-violet-300 font-medium">Access:</span> Download from the resource portal</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-violet-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">AI Grant Writing Toolkit</div>
                              <div className="text-white/80 text-xs">
                                <p>Comprehensive AI tools and prompts to enhance your grant writing:</p>
                                <ul className="list-disc pl-5 space-y-0.5 mt-1">
                                  <li>Grant research automation system</li>
                                  <li>Narrative development prompts</li>
                                  <li>Budget justification generator</li>
                                  <li>Evaluation plan creator</li>
                                  <li>Grant editing and enhancement tools</li>
                                  <li>Client communication AI assistants</li>
                                </ul>
                                <p className="mt-1"><span className="text-violet-300 font-medium">Access:</span> Available in the Accelerator program</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-violet-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Advanced Training Modules</div>
                              <div className="text-white/80 text-xs">
                                <p>In-depth training on specialized grant writing topics:</p>
                                <ul className="list-disc pl-5 space-y-0.5 mt-1">
                                  <li>Federal grant mastery</li>
                                  <li>Foundation grant strategies</li>
                                  <li>Corporate funding approaches</li>
                                  <li>Advanced budget development</li>
                                  <li>Program evaluation frameworks</li>
                                  <li>Grant compliance management</li>
                                </ul>
                                <p className="mt-1"><span className="text-violet-300 font-medium">Access:</span> Available in the Accelerator program</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Support & Community</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Grant Writing Entrepreneur Community</div>
                              <div className="text-white/80 text-xs">
                                <p>Connect with fellow grant writing business owners:</p>
                                <ul className="list-disc pl-5 space-y-0.5 mt-1">
                                  <li>Private community forum</li>
                                  <li>Peer collaboration opportunities</li>
                                  <li>Resource sharing and networking</li>
                                  <li>Accountability partnerships</li>
                                  <li>Success celebrations and support</li>
                                </ul>
                                <p className="mt-1"><span className="text-blue-300 font-medium">Access:</span> Join through the Accelerator program</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Weekly Coaching & Q&A Calls</div>
                              <div className="text-white/80 text-xs">
                                <p>Get ongoing guidance and support:</p>
                                <ul className="list-disc pl-5 space-y-0.5 mt-1">
                                  <li>Weekly group coaching calls</li>
                                  <li>Live Q&A sessions</li>
                                  <li>Grant opportunity reviews</li>
                                  <li>Proposal feedback and critique</li>
                                  <li>Strategy adjustments and guidance</li>
                                </ul>
                                <p className="mt-1"><span className="text-blue-300 font-medium">Access:</span> Schedule through the Accelerator portal</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">The Grant Writing Accelerator Program</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">What You Get</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>12-week intensive program</li>
                          <li>Complete AI grant writing toolkit</li>
                          <li>All business templates and systems</li>
                          <li>Weekly group coaching calls</li>
                          <li>Private community access</li>
                          <li>Advanced training modules</li>
                          <li>1:1 strategy sessions</li>
                          <li>Lifetime updates to materials</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Expected Results</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Launch your business in 30 days</li>
                          <li>Secure first premium client ($5K+)</li>
                          <li>Reach $10K/month within 90 days</li>
                          <li>Develop scalable systems</li>
                          <li>Create your signature methodology</li>
                          <li>Build your client acquisition system</li>
                          <li>Establish your authority positioning</li>
                          <li>Prepare for team expansion</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-indigo-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">How to Apply</div>
                      <div className="text-white/70 text-sm">
                        <p className="mb-3">Applications for the Grant Writing Accelerator are now open with limited spots available.</p>
                        
                        <div className="bg-white/10 p-3 rounded-lg">
                          <p className="text-center text-white font-medium mb-2">Next Steps:</p>
                          <ol className="list-decimal pl-5 space-y-1 text-white/80 text-xs">
                            <li>Complete the application form</li>
                            <li>Schedule your strategy call</li>
                            <li>Receive your personalized plan</li>
                            <li>Make your decision</li>
                            <li>Begin your journey</li>
                          </ol>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> The path to building a $10K+/month grant writing business is clear, but implementation is where most people fall short. By taking immediate action on the steps outlined today and leveraging the resources, support, and community available in the Grant Writing Accelerator, you can fast-track your journey and avoid the common pitfalls that derail most aspiring grant writing entrepreneurs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 84: Your Next Steps & Resources
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a clear path forward for participants after the masterclass, outlining specific action steps, essential resources, and ongoing support options. It creates a bridge between the knowledge gained during the masterclass and the implementation required to build a successful grant writing business. The key elements include:</p>
                
                <ul>
                  <li><strong>Immediate Action Steps:</strong> Three specific, time-bound actions to take after the masterclass: completing the business foundation, launching a client acquisition campaign, and joining the Grant Writing Accelerator</li>
                  <li><strong>Essential Resources:</strong> Three categories of tools and templates to support implementation: grant writing business templates, AI grant writing toolkit, and advanced training modules</li>
                  <li><strong>Support & Community:</strong> Two ongoing support mechanisms: the grant writing entrepreneur community and weekly coaching and Q&A calls</li>
                  <li><strong>The Grant Writing Accelerator Program:</strong> Comprehensive overview of the high-ticket offer, including what participants receive, expected results, and application process</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on implementation as the critical factor in success</li>
                </ul>
                
                <p>This slide builds on the previous content by transitioning from education to implementation, providing a clear bridge between the knowledge gained during the masterclass and the actions required to build a successful grant writing business. The immediate action steps section outlines three specific, time-bound actions to take after the masterclass: completing the business foundation within 7 days, launching a client acquisition campaign over 30 days, and joining the Grant Writing Accelerator program for ongoing support. The essential resources section presents three categories of tools and templates to support implementation: grant writing business templates for immediate use, an AI grant writing toolkit to enhance efficiency and quality, and advanced training modules for specialized knowledge. The support and community section highlights two ongoing support mechanisms: the grant writing entrepreneur community for peer collaboration and networking, and weekly coaching and Q&A calls for ongoing guidance and feedback. The Grant Writing Accelerator Program section provides a comprehensive overview of the high-ticket offer, including what participants receive (12-week program, tools, templates, coaching), expected results (launching in 30 days, reaching $10K/month within 90 days), and the application process. The key takeaway emphasizes that implementation is the critical factor in success, positioning the Accelerator program as the solution to the common implementation gap that prevents most people from building successful businesses. This slide effectively transitions from education to action while presenting the high-ticket offer in a value-focused, non-pushy manner.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide83"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide85"
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
