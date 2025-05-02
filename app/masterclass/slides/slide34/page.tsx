"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide34Page() {
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
                Slide 34 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide33"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide35"
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
                    The Discovery Call Framework
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    How to convert 30-40% of prospects into paying clients
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">7-Step Discovery Call Process</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                          <div>
                            <div className="text-white font-semibold">Warm Introduction (2-3 min)</div>
                            <div className="text-white/80 text-sm">Build rapport by mentioning specific research about their organization and mission</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                          <div>
                            <div className="text-white font-semibold">Set Agenda (1 min)</div>
                            <div className="text-white/80 text-sm">Outline the purpose of the call and what they'll get from the conversation</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                          <div>
                            <div className="text-white font-semibold">Discovery Questions (10-15 min)</div>
                            <div className="text-white/80 text-sm">Ask targeted questions about their funding needs, challenges, and goals</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                          <div>
                            <div className="text-white font-semibold">Present Opportunities (5 min)</div>
                            <div className="text-white/80 text-sm">Share 2-3 specific grant opportunities that match their needs</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">5</div>
                          <div>
                            <div className="text-white font-semibold">Explain Your Process (3-5 min)</div>
                            <div className="text-white/80 text-sm">Outline how you work, emphasizing the AI-powered system that ensures quality</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">6</div>
                          <div>
                            <div className="text-white font-semibold">Handle Objections (5 min)</div>
                            <div className="text-white/80 text-sm">Address common concerns about experience, pricing, and timeline</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white/10 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="bg-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">7</div>
                          <div>
                            <div className="text-white font-semibold">Next Steps (2 min)</div>
                            <div className="text-white/80 text-sm">Propose clear next action: sending a proposal within 24 hours</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">10 Key Discovery Questions</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">Organization Background</div>
                          <ul className="space-y-1 text-white/80 text-sm list-disc pl-4">
                            <li>What are your organization's top priorities for the next 6-12 months?</li>
                            <li>What programs or initiatives need funding the most right now?</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">Grant Experience</div>
                          <ul className="space-y-1 text-white/80 text-sm list-disc pl-4">
                            <li>Have you applied for grants before? What was that experience like?</li>
                            <li>What's been your biggest challenge with grant funding?</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">Funding Needs</div>
                          <ul className="space-y-1 text-white/80 text-sm list-disc pl-4">
                            <li>What funding amount would make a significant impact?</li>
                            <li>Are there specific types of grants you're interested in?</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">Decision Process</div>
                          <ul className="space-y-1 text-white/80 text-sm list-disc pl-4">
                            <li>Who else is involved in decisions about grant writing services?</li>
                            <li>What would need to happen for us to work together?</li>
                          </ul>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">Timeline</div>
                          <ul className="space-y-1 text-white/80 text-sm list-disc pl-4">
                            <li>How soon would you ideally like to submit grant applications?</li>
                            <li>Are there any specific deadlines you're working toward?</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Handling Common Objections</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">"Your rates seem high..."</div>
                          <div className="text-white/80 text-sm">
                            "I understand the investment is significant. Our clients typically see a 10-20x return on their investment. For example, [Organization] paid $4,000 for our services and secured a $75,000 grant."
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">"Do you have experience in our field?"</div>
                          <div className="text-white/80 text-sm">
                            "While each sector has unique aspects, grant writing fundamentals remain consistent. Our AI system is trained on successful grants across all sectors, and we'll research your specific field thoroughly. We've helped organizations in [similar field] secure funding successfully."
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">"We need to think about it..."</div>
                          <div className="text-white/80 text-sm">
                            "That makes sense. To help with your decision, I'll send over a proposal with the specific grants we discussed and their deadlines. Many of these opportunities close soon, so reviewing the proposal this week would be ideal to ensure we don't miss any deadlines."
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Action Step:</span> Create a personalized discovery call script using this framework and practice it until you can deliver it confidently. Record yourself and review the recording to identify areas for improvement.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 34: The Discovery Call Framework
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive framework for conducting effective discovery calls with potential grant writing clients. The key elements include:</p>
                
                <ul>
                  <li><strong>7-Step Process:</strong> Clear, structured approach to discovery calls with specific time allocations</li>
                  <li><strong>10 Key Questions:</strong> Specific questions organized by category to guide the conversation</li>
                  <li><strong>Objection Handling:</strong> Word-for-word responses to the most common objections</li>
                  <li><strong>Conversion Rate:</strong> Specific metric of "30-40% of prospects into paying clients" creates credibility</li>
                  <li><strong>AI Emphasis:</strong> Guidance to "emphasize the AI-powered system that ensures quality" addresses the experience objection</li>
                  <li><strong>Action Step:</strong> Practical next step to "Create a personalized discovery call script" with specific implementation advice</li>
                </ul>
                
                <p>This slide addresses one of the most critical aspects of client acquisition: converting interested prospects into paying clients. The structured 7-step process makes the discovery call feel manageable and organized, while the specific time allocations help with pacing. The 10 key questions provide a roadmap for guiding the conversation and gathering the necessary information, while the objection handling scripts provide confidence in addressing common concerns. The emphasis on the AI system as a quality assurance tool helps address the experience objection, which is often the biggest barrier to conversion.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide33"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide35"
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
