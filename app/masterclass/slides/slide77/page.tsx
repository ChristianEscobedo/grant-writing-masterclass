"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide77Page() {
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
                Slide 77 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide76"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide78"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <div className="bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full text-white text-sm font-medium mb-6 inline-block">
                  PART 10: THE HIGH-TICKET OFFER
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  Crafting Your Premium Offer Stack
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">Core Offer Components</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Grant Research & Strategy</div>
                            <div className="text-white/80 text-sm">
                              <p>• Comprehensive funding opportunity research</p>
                              <p>• Customized grant strategy development</p>
                              <p>• Funder relationship mapping</p>
                              <p>• Grant calendar creation</p>
                              <p>• Eligibility assessment and verification</p>
                              <p>• Funding priority alignment analysis</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Grant Development & Writing</div>
                            <div className="text-white/80 text-sm">
                              <p>• Complete grant application development</p>
                              <p>• Compelling narrative creation</p>
                              <p>• Budget development and justification</p>
                              <p>• Logic model and evaluation plan</p>
                              <p>• Supporting materials preparation</p>
                              <p>• Multiple rounds of revisions</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Submission & Follow-Up</div>
                            <div className="text-white/80 text-sm">
                              <p>• Application submission management</p>
                              <p>• Funder communication support</p>
                              <p>• Post-submission follow-up</p>
                              <p>• Award negotiation assistance</p>
                              <p>• Rejection analysis and resubmission strategy</p>
                              <p>• Grant reporting guidance</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Client Support & Communication</div>
                            <div className="text-white/80 text-sm">
                              <p>• Dedicated grant consultant</p>
                              <p>• Regular progress updates</p>
                              <p>• Client portal access</p>
                              <p>• Strategic advisory calls</p>
                              <p>• Document collection assistance</p>
                              <p>• Grant readiness assessment</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Value-Adding Enhancements</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Grant Readiness Package</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-pink-300 font-medium">Value Add:</span> Prepares clients for successful applications</p>
                                <p>• Organizational assessment</p>
                                <p>• Document preparation templates</p>
                                <p>• Board engagement training</p>
                                <p>• Financial documentation review</p>
                                <p>• Program evaluation framework</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Funder Relationship Building</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-pink-300 font-medium">Value Add:</span> Increases long-term funding success</p>
                                <p>• Funder communication templates</p>
                                <p>• Pre-application meeting preparation</p>
                                <p>• Relationship development strategy</p>
                                <p>• Funder event attendance guidance</p>
                                <p>• Follow-up communication plans</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Grant Implementation Support</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-pink-300 font-medium">Value Add:</span> Ensures successful grant management</p>
                                <p>• Post-award implementation plan</p>
                                <p>• Compliance checklist</p>
                                <p>• Reporting templates and calendars</p>
                                <p>• Budget management guidance</p>
                                <p>• Program evaluation support</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Funding Diversification Strategy</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-pink-300 font-medium">Value Add:</span> Creates sustainable funding approach</p>
                                <p>• Comprehensive funding assessment</p>
                                <p>• Revenue diversification plan</p>
                                <p>• Individual giving strategy</p>
                                <p>• Corporate partnership approach</p>
                                <p>• Earned income opportunities</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Premium Offer Tiers</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Essential Package</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-blue-300 font-medium">Price:</span> $5,000-$8,000</p>
                                <p><span className="text-blue-300 font-medium">Includes:</span></p>
                                <p>• Core offer components</p>
                                <p>• 1-3 grant applications</p>
                                <p>• 3-month engagement</p>
                                <p>• Standard support level</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Premium Package</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-blue-300 font-medium">Price:</span> $8,000-$12,000</p>
                                <p><span className="text-blue-300 font-medium">Includes:</span></p>
                                <p>• Core offer components</p>
                                <p>• 3-5 grant applications</p>
                                <p>• 6-month engagement</p>
                                <p>• Enhanced support level</p>
                                <p>• 2 value-adding enhancements</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-blue-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Elite Package</div>
                              <div className="text-white/80 text-xs">
                                <p><span className="text-blue-300 font-medium">Price:</span> $12,000-$20,000</p>
                                <p><span className="text-blue-300 font-medium">Includes:</span></p>
                                <p>• Core offer components</p>
                                <p>• 5-8 grant applications</p>
                                <p>• 12-month engagement</p>
                                <p>• VIP support level</p>
                                <p>• All value-adding enhancements</p>
                                <p>• Quarterly strategy sessions</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Offer Presentation Framework</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">1</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Current Situation</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Acknowledge their challenges</li>
                          <li>Validate their funding needs</li>
                          <li>Highlight missed opportunities</li>
                          <li>Quantify the funding gap</li>
                          <li>Empathize with their struggles</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">2</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Desired Outcome</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Paint the vision of success</li>
                          <li>Quantify potential funding</li>
                          <li>Describe impact on mission</li>
                          <li>Highlight organizational growth</li>
                          <li>Show long-term sustainability</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">3</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Solution Presentation</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Present your offer tiers</li>
                          <li>Explain each component</li>
                          <li>Highlight unique approach</li>
                          <li>Share success stories</li>
                          <li>Demonstrate ROI potential</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <div className="text-white font-bold">4</div>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Call to Action</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Present investment options</li>
                          <li>Explain payment structure</li>
                          <li>Outline next steps</li>
                          <li>Create urgency (deadlines)</li>
                          <li>Ask for the commitment</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> A premium offer stack isn't just about charging more—it's about creating a comprehensive solution that delivers transformative results. By structuring your offers into tiers with clear value progression, you make it easy for clients to choose the option that best fits their needs and budget while maximizing your revenue potential.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 77: Crafting Your Premium Offer Stack
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive framework for creating a premium offer stack in a grant writing business. It details the components, enhancements, and tiered structure needed to create compelling high-ticket offers that deliver exceptional value to clients. The key elements include:</p>
                
                <ul>
                  <li><strong>Core Offer Components:</strong> Detailed breakdown of the four essential service areas that form the foundation of any premium grant writing offer</li>
                  <li><strong>Value-Adding Enhancements:</strong> Four specific enhancements that can be added to the core offer to increase its value and justify premium pricing</li>
                  <li><strong>Premium Offer Tiers:</strong> Three-tier structure with clear price points and value progression from Essential to Premium to Elite packages</li>
                  <li><strong>Offer Presentation Framework:</strong> Four-step process for presenting offers effectively, from acknowledging the current situation to calling for action</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on comprehensive solutions and clear value progression in premium offers</li>
                </ul>
                
                <p>This slide builds on the high-ticket offer foundation established in the previous slide by providing a detailed framework for structuring premium grant writing offers. The core offer components section breaks down the four essential service areas that form the foundation of any premium grant writing offer: grant research & strategy, grant development & writing, submission & follow-up, and client support & communication. The value-adding enhancements section presents four specific additions that can increase the value of the core offer: grant readiness package, funder relationship building, grant implementation support, and funding diversification strategy. The premium offer tiers section outlines a three-tier structure with clear price points and value progression: Essential Package ($5,000-$8,000), Premium Package ($8,000-$12,000), and Elite Package ($12,000-$20,000). The offer presentation framework provides a four-step process for presenting offers effectively: acknowledging the current situation, painting the desired outcome, presenting the solution, and calling for action. The key takeaway emphasizes that a premium offer stack isn't just about charging more but about creating comprehensive solutions with clear value progression, making it easy for clients to choose the option that best fits their needs while maximizing revenue potential. This slide provides participants with a complete framework for structuring premium grant writing offers, setting the stage for the more detailed exploration of sales conversations in subsequent slides.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide76"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide78"
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
