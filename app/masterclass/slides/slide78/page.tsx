"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide78Page() {
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
                Slide 78 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide77"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide79"
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
                  The High-Ticket Sales Conversation
                </h1>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <h3 className="text-xl font-bold text-white mb-4">The 5-Step Sales Framework</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Build Rapport & Qualify</div>
                            <div className="text-white/80 text-sm">
                              <p>• Establish personal connection</p>
                              <p>• Learn about their organization</p>
                              <p>• Understand their mission and impact</p>
                              <p>• Identify funding needs and goals</p>
                              <p>• Assess grant readiness</p>
                              <p>• Determine decision-making process</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Uncover Pain Points & Desires</div>
                            <div className="text-white/80 text-sm">
                              <p>• Identify current funding challenges</p>
                              <p>• Explore past grant experiences</p>
                              <p>• Uncover capacity limitations</p>
                              <p>• Discuss funding goals and dreams</p>
                              <p>• Quantify the funding gap</p>
                              <p>• Understand timeline pressures</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Present Your Solution</div>
                            <div className="text-white/80 text-sm">
                              <p>• Share your grant success methodology</p>
                              <p>• Explain your unique approach</p>
                              <p>• Present relevant case studies</p>
                              <p>• Outline the client journey</p>
                              <p>• Demonstrate ROI potential</p>
                              <p>• Address their specific challenges</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Handle Objections</div>
                            <div className="text-white/80 text-sm">
                              <p>• Listen fully to concerns</p>
                              <p>• Acknowledge and validate</p>
                              <p>• Reframe from cost to investment</p>
                              <p>• Share relevant success stories</p>
                              <p>• Provide social proof</p>
                              <p>• Offer risk-reduction options</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-purple-500/50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">Close & Next Steps</div>
                            <div className="text-white/80 text-sm">
                              <p>• Present your offer options</p>
                              <p>• Explain payment terms</p>
                              <p>• Create urgency (deadlines, limited spots)</p>
                              <p>• Ask for the commitment</p>
                              <p>• Outline onboarding process</p>
                              <p>• Schedule kickoff meeting</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Key Questions to Ask</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Organization & Mission Questions</div>
                              <div className="text-white/80 text-xs">
                                <p>"Tell me about your organization's mission and the impact you're making."</p>
                                <p>"What are your organization's biggest goals for the next 1-3 years?"</p>
                                <p>"How is your organization currently funded?"</p>
                                <p>"What percentage of your funding comes from grants currently?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Pain Point Questions</div>
                              <div className="text-white/80 text-xs">
                                <p>"What has been your biggest challenge with grant funding so far?"</p>
                                <p>"What's been holding you back from securing more grant funding?"</p>
                                <p>"If you had to identify the biggest gap in your grant strategy, what would it be?"</p>
                                <p>"What would it mean for your organization if you could secure an additional $250,000 in grant funding this year?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Budget & Decision Questions</div>
                              <div className="text-white/80 text-xs">
                                <p>"Have you set aside a budget for grant writing services?"</p>
                                <p>"What would you expect to see as a return on your investment in our services?"</p>
                                <p>"Who else is involved in making this decision?"</p>
                                <p>"What would you need to see from us to feel confident moving forward?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-pink-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">Closing Questions</div>
                              <div className="text-white/80 text-xs">
                                <p>"Based on what we've discussed, which package seems to best fit your needs?"</p>
                                <p>"Would you prefer to pay in full or use our payment plan option?"</p>
                                <p>"Do you have any other questions before we get started?"</p>
                                <p>"Would you like to schedule our kickoff meeting for next week or the following week?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                      <h3 className="text-xl font-bold text-white mb-4">Objection Handling Scripts</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">"We need to think about it."</div>
                              <div className="text-white/80 text-xs">
                                <p>"I completely understand. This is an important decision. May I ask what specific aspects you need to think about? Is it the investment, the timing, or something else about our approach?"</p>
                                <p>"While you're considering, I should mention that grant deadlines are approaching for [specific opportunities]. Each month of delay potentially means missing $50,000-$100,000 in funding that won't come around again for another year."</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">"We can't afford it right now."</div>
                              <div className="text-white/80 text-xs">
                                <p>"I appreciate your transparency about the budget. Many of our clients initially felt the same way. What they found was that our services aren't really a cost—they're an investment that pays for itself many times over."</p>
                                <p>"We do offer payment plans that make it easier to get started. And remember, our clients typically see a 10-20x return on their investment with us. What would it mean for your organization if we helped you secure a $250,000 grant with an investment of just $10,000?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="flex items-start">
                            <div className="bg-red-500/50 rounded-full p-1 mr-2 mt-0.5">
                              <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                              </svg>
                            </div>
                            <div>
                              <div className="text-white font-semibold">"We need to talk to our board first."</div>
                              <div className="text-white/80 text-xs">
                                <p>"That makes perfect sense. Boards play a crucial role in these decisions. To help you present this opportunity effectively to your board, I'd be happy to provide a one-page summary of our proposal, including the ROI potential and case studies of similar organizations we've helped."</p>
                                <p>"When is your next board meeting? Would it be helpful if I joined for 15 minutes to answer any questions they might have directly?"</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-bold text-white mb-4">Sales Conversation Checklist</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">Before the Call</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Research the organization</li>
                          <li>Review their website and programs</li>
                          <li>Check their 990 forms (if nonprofit)</li>
                          <li>Identify potential grant matches</li>
                          <li>Prepare customized presentation</li>
                          <li>Test your technology</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">During the Call</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Build rapport before business</li>
                          <li>Ask questions, listen 80%</li>
                          <li>Take detailed notes</li>
                          <li>Identify specific pain points</li>
                          <li>Present customized solution</li>
                          <li>Address objections confidently</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="bg-purple-500/30 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-3">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="text-white font-medium mb-2 text-center">After the Call</div>
                      <div className="text-white/70 text-sm">
                        <ul className="list-disc pl-5 space-y-1">
                          <li>Send follow-up email immediately</li>
                          <li>Provide requested information</li>
                          <li>Send proposal/contract</li>
                          <li>Schedule follow-up call</li>
                          <li>Add value between calls</li>
                          <li>Follow up persistently</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-yellow-400/20 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Key Takeaway:</span> High-ticket sales conversations are about uncovering needs, demonstrating value, and guiding prospects to the right solution. By following a structured framework, asking powerful questions, and confidently handling objections, you can convert more prospects into premium clients who value your expertise and are committed to the process.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 78: The High-Ticket Sales Conversation
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive framework for conducting effective high-ticket sales conversations in a grant writing business. It outlines a structured approach to sales calls that focuses on uncovering needs, demonstrating value, and guiding prospects to the right solution. The key elements include:</p>
                
                <ul>
                  <li><strong>The 5-Step Sales Framework:</strong> Detailed breakdown of the sales conversation process from building rapport to closing the deal</li>
                  <li><strong>Key Questions to Ask:</strong> Specific questions organized by category to uncover needs, pain points, budget considerations, and facilitate closing</li>
                  <li><strong>Objection Handling Scripts:</strong> Word-for-word responses to the most common objections encountered during high-ticket sales conversations</li>
                  <li><strong>Sales Conversation Checklist:</strong> Comprehensive preparation and execution checklist covering what to do before, during, and after sales calls</li>
                  <li><strong>Key Takeaway:</strong> Strategic emphasis on the consultative nature of high-ticket sales conversations</li>
                </ul>
                
                <p>This slide builds on the premium offer framework established in the previous slides by providing a detailed approach to selling those offers effectively. The 5-step sales framework section breaks down the sales conversation process into five clear stages: building rapport and qualifying, uncovering pain points and desires, presenting your solution, handling objections, and closing with next steps. The key questions section provides specific, powerful questions organized into four categories: organization and mission questions, pain point questions, budget and decision questions, and closing questions. The objection handling scripts section offers word-for-word responses to the three most common objections: "We need to think about it," "We can't afford it right now," and "We need to talk to our board first." The sales conversation checklist provides a comprehensive guide to what should be done before, during, and after sales calls to maximize effectiveness. The key takeaway emphasizes the consultative nature of high-ticket sales conversations, positioning them as a process of uncovering needs, demonstrating value, and guiding prospects to the right solution rather than pushing or pressuring. This slide provides participants with a complete framework for conducting effective high-ticket sales conversations, setting the stage for the more detailed exploration of client onboarding in the next slide.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide77"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide79"
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
