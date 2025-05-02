"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide33Page() {
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
                Slide 33 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide32"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide34"
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
                    The Perfect Outreach Email
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Word-for-word templates that get 10-15% response rates
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">Cold Outreach Template</h3>
                    
                    <div className="bg-white/10 rounded-lg p-5 text-white/90 text-sm">
                      <p className="mb-3"><strong>Subject:</strong> Grant Opportunity for [Organization Name]</p>
                      
                      <p className="mb-2">Hi [First Name],</p>
                      
                      <p className="mb-2">I noticed [Organization Name] is doing important work in [specific area/cause] and wanted to reach out about a potential grant opportunity that might be a good fit for your [specific program/initiative].</p>
                      
                      <p className="mb-2">I'm a grant writer who specializes in helping organizations like yours secure funding for [relevant cause/sector]. Recently, I helped [similar organization type] secure [$X amount] in grant funding for their [type of program].</p>
                      
                      <p className="mb-2">There are currently several open grant opportunities that align with your mission, including:</p>
                      
                      <ul className="list-disc pl-5 mb-2 space-y-1">
                        <li>[Specific grant name] - Deadline [date]</li>
                        <li>[Specific grant name] - Deadline [date]</li>
                      </ul>
                      
                      <p className="mb-2">Would you be open to a 15-minute call to discuss these opportunities and how I might be able to help [Organization Name] secure additional funding?</p>
                      
                      <p className="mb-2">Best regards,<br />[Your Name]</p>
                    </div>
                    
                    <div className="mt-4 space-y-3">
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-white font-semibold mb-1">Key Elements:</div>
                        <ul className="space-y-1 text-white/80 text-sm list-disc pl-4">
                          <li>Specific research about their organization</li>
                          <li>Relevant experience with similar organizations</li>
                          <li>Actual grant opportunities with deadlines</li>
                          <li>Clear, low-commitment call to action</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-3">
                        <div className="text-white font-semibold mb-1">Response Rate:</div>
                        <div className="text-white/80 text-sm">
                          10-15% response rate when properly personalized and researched
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Follow-Up Template</h3>
                      
                      <div className="bg-white/10 rounded-lg p-5 text-white/90 text-sm">
                        <p className="mb-3"><strong>Subject:</strong> Re: Grant Opportunity for [Organization Name]</p>
                        
                        <p className="mb-2">Hi [First Name],</p>
                        
                        <p className="mb-2">I wanted to follow up on my previous email about potential grant opportunities for [Organization Name].</p>
                        
                        <p className="mb-2">I just came across another grant from [Funder Name] that seems like an excellent fit for your [specific program]. They're offering [$X amount] for organizations working on [relevant focus area].</p>
                        
                        <p className="mb-2">The deadline is [date], which gives us enough time to put together a strong application if you're interested.</p>
                        
                        <p className="mb-2">I'd be happy to share more details in a brief call this week. Would you have 15 minutes on [specific day/time] or [alternative day/time]?</p>
                        
                        <p className="mb-2">Best regards,<br />[Your Name]</p>
                      </div>
                      
                      <div className="mt-4">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">When to Send:</div>
                          <div className="text-white/80 text-sm">
                            3-4 business days after initial email if no response
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Outreach Best Practices</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Research Before Reaching Out</div>
                              <div className="text-white/80 text-sm">Spend 5-10 minutes researching each organization</div>
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
                              <div className="text-white font-semibold">Identify Real Opportunities</div>
                              <div className="text-white/80 text-sm">Always include 1-2 specific grants they qualify for</div>
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
                              <div className="text-white font-semibold">Follow a 3-Email Sequence</div>
                              <div className="text-white/80 text-sm">Initial, follow-up, and final value-add email</div>
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
                              <div className="text-white font-semibold">Send Tuesday-Thursday</div>
                              <div className="text-white/80 text-sm">Between 9-11am or 1-3pm for best response rates</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Action Step:</span> Customize these templates for 5 potential clients from your list and send your first outreach emails this week. Aim for 20 total emails over the next 2 weeks.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 33: The Perfect Outreach Email
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides word-for-word email templates for reaching out to potential grant writing clients. The key elements include:</p>
                
                <ul>
                  <li><strong>Complete Templates:</strong> Ready-to-use email templates for initial outreach and follow-up</li>
                  <li><strong>Key Elements:</strong> Breakdown of the critical components that make the templates effective</li>
                  <li><strong>Response Rate:</strong> Specific metric of "10-15% response rate" creates credibility</li>
                  <li><strong>Best Practices:</strong> Four specific guidelines for maximizing effectiveness</li>
                  <li><strong>Timing Guidance:</strong> Specific advice on when to send follow-ups and what days/times work best</li>
                  <li><strong>Action Step:</strong> Clear next step to "Customize these templates for 5 potential clients" creates immediate implementation</li>
                </ul>
                
                <p>This slide addresses one of the biggest challenges for new grant writers: how to effectively reach out to potential clients. By providing complete, ready-to-use templates, it eliminates the need to start from scratch and reduces the anxiety around writing outreach emails. The key elements breakdown helps understand why the templates work, while the best practices provide additional guidance for maximizing effectiveness. The specific response rate creates credibility and sets realistic expectations, while the action step creates a clear path to implementation with specific targets.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide32"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide34"
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
