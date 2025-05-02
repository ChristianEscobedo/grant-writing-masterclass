"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide37Page() {
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
                Slide 37 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide36"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide38"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    The Client Referral System
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    How to generate a steady stream of pre-qualified leads without cold outreach
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">The 5-Step Referral Process</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Exceed Expectations</div>
                            <div className="text-white/80 text-sm">Deliver exceptional work that goes beyond what was promised</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Plant the Seed</div>
                            <div className="text-white/80 text-sm">Mention during the project that you grow through referrals</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Make the Ask</div>
                            <div className="text-white/80 text-sm">Request specific referrals at the right moment using the referral script</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Simplify the Process</div>
                            <div className="text-white/80 text-sm">Make it easy for clients to refer you with templates and warm introductions</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">Show Appreciation</div>
                            <div className="text-white/80 text-sm">Thank referrers and provide updates on the referred client's progress</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">The Perfect Referral Ask</h3>
                      
                      <div className="bg-white/10 rounded-lg p-5 text-white/90 text-sm">
                        <p className="mb-3"><strong>When to Ask:</strong> After a successful milestone (grant submission or award notification)</p>
                        
                        <p className="mb-2"><strong>The Script:</strong></p>
                        
                        <p className="mb-2">"I'm so glad we were able to [specific achievement] for [organization name]. I really enjoy working with organizations like yours that are making a difference in [cause/field].</p>
                        
                        <p className="mb-2">I'm currently looking to work with a few more organizations similar to yours. Do you know any other [specific type] organizations that might benefit from grant funding support?</p>
                        
                        <p className="mb-2">Specifically, I'm looking to connect with [exact role, e.g., Executive Directors or Development Directors] at organizations focused on [specific cause/mission]."</p>
                        
                        <p className="mb-2"><strong>If They Say Yes:</strong></p>
                        
                        <p className="mb-2">"That's great! Would you be comfortable making an introduction via email? I can draft a short message that makes it easy for you to forward."</p>
                      </div>
                      
                      <div className="mt-4">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">Key Elements:</div>
                          <ul className="space-y-1 text-white/80 text-sm list-disc pl-4">
                            <li>Be specific about who you want to meet</li>
                            <li>Make it about helping their peers</li>
                            <li>Offer to draft the introduction email</li>
                            <li>Express genuine appreciation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Referral Incentives</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Financial Incentives</div>
                              <div className="text-white/80 text-sm">10-15% of first project fee or first month's retainer</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Service Incentives</div>
                              <div className="text-white/80 text-sm">Free grant research report or application review</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Donation Incentives</div>
                              <div className="text-white/80 text-sm">Donation to their organization or cause of their choice</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Reciprocal Referrals</div>
                              <div className="text-white/80 text-sm">Offer to refer potential donors or partners to them</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Metric:</span> With a proper referral system, 30-40% of your clients should come from referrals by your third month in business, reducing your need for cold outreach and lowering your client acquisition costs.
                  </p>
                </div>
                
                <div className="mt-4 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Action Step:</span> Create your referral request template and identify your first three clients to ask for referrals. Schedule specific times to make these requests after your next milestone with each client.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 37: The Client Referral System
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive framework for generating client referrals, reducing the need for cold outreach. The key elements include:</p>
                
                <ul>
                  <li><strong>5-Step Process:</strong> Clear, structured approach to generating referrals</li>
                  <li><strong>Perfect Referral Ask:</strong> Word-for-word script for requesting referrals at the right moment</li>
                  <li><strong>Timing Guidance:</strong> Specific advice on when to ask for referrals</li>
                  <li><strong>Incentive Options:</strong> Four different approaches to incentivizing referrals</li>
                  <li><strong>Key Metric:</strong> Specific goal of "30-40% of your clients should come from referrals by your third month"</li>
                  <li><strong>Action Step:</strong> Practical next step to "Create your referral request template" with implementation guidance</li>
                </ul>
                
                <p>This slide addresses a critical aspect of sustainable client acquisition: generating referrals from existing clients. The 5-step process provides a structured approach that makes referral generation systematic rather than haphazard. The word-for-word script eliminates guesswork and provides confidence in making the ask, while the timing guidance ensures referrals are requested at optimal moments. The various incentive options provide flexibility in designing a referral program that fits different business models and client types. The key metric creates a clear goal to aim for, while the action step creates immediate implementation with specific tasks.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide36"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide38"
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
