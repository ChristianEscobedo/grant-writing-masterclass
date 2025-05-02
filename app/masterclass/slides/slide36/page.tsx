"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide36Page() {
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
                Slide 36 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide35"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide37"
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
                    Handling the Experience Objection
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    How to confidently address the #1 objection you'll face as a new grant writer
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                    <h3 className="text-xl font-bold text-white mb-4">The Experience Objection</h3>
                    
                    <div className="bg-white/10 rounded-lg p-4 mb-4">
                      <div className="text-white font-semibold mb-2">Common Forms:</div>
                      <ul className="space-y-2 text-white/80 text-sm">
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>"Have you written grants in our specific field before?"</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>"How many years have you been writing grants?"</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>"What's your success rate with grant applications?"</div>
                        </li>
                        <li className="flex items-start">
                          <div className="bg-red-500 rounded-full p-1 mr-2 mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>"Can you share examples of grants you've written?"</div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-4">
                      <div className="text-white font-semibold mb-2">What's Really Happening:</div>
                      <div className="text-white/80 text-sm">
                        <p className="mb-2">The client isn't actually asking about your experience. They're expressing concern about:</p>
                        <ul className="space-y-1 list-disc pl-4">
                          <li>Risk of wasting money</li>
                          <li>Fear of missed opportunities</li>
                          <li>Worry about their reputation</li>
                          <li>Uncertainty about results</li>
                        </ul>
                        <p className="mt-2">Address these underlying concerns, not just the surface-level question about experience.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">The 4-Part Response Framework</h3>
                      
                      <div className="space-y-4">
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">1</div>
                            <div>
                              <div className="text-white font-semibold">Acknowledge & Validate</div>
                              <div className="text-white/80 text-sm">"That's a great question. You want to make sure you're working with someone who can deliver results."</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">2</div>
                            <div>
                              <div className="text-white font-semibold">Reframe Experience</div>
                              <div className="text-white/80 text-sm">"While grant writing is specialized, success comes from research skills, clear writing, and following specific guidelines—all areas where I excel."</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">3</div>
                            <div>
                              <div className="text-white font-semibold">Highlight Your System</div>
                              <div className="text-white/80 text-sm">"What sets my approach apart is the AI-powered grant writing system I use. It's trained on thousands of successful grants and ensures we follow best practices for each application."</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-4">
                          <div className="flex items-start">
                            <div className="bg-green-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3">4</div>
                            <div>
                              <div className="text-white font-semibold">Offer Risk Reversal</div>
                              <div className="text-white/80 text-sm">"I understand this is an investment. That's why I offer a satisfaction guarantee—if you're not completely satisfied with the application before submission, I'll revise it until you are."</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                      <h3 className="text-xl font-bold text-white mb-4">Specific Responses to Common Questions</h3>
                      
                      <div className="space-y-3">
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">"Have you written grants in our field before?"</div>
                          <div className="text-white/80 text-sm">
                            "While I've worked with organizations in [related fields], each grant is unique. The key is understanding your specific needs and matching them to the right opportunities. My research-driven approach and AI-powered system ensure we create compelling applications regardless of the sector."
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">"What's your success rate?"</div>
                          <div className="text-white/80 text-sm">
                            "The grant writing system I use has helped organizations achieve a 25% success rate, which is significantly above the industry average of 10-15%. Of course, success depends on many factors, including the competitiveness of the grant and how well the organization aligns with funder priorities."
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-3">
                          <div className="text-white font-semibold mb-1">"Can you share examples?"</div>
                          <div className="text-white/80 text-sm">
                            "Due to confidentiality agreements, I can't share complete applications. However, I can walk you through the process I use and show you anonymized sections that demonstrate the quality of work. I can also connect you with past clients who can speak to their experience working with me."
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">Action Step:</span> Practice these responses until they feel natural. Record yourself answering these objections and review the recording to identify areas for improvement in your delivery and confidence.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 36: Handling the Experience Objection
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides a comprehensive framework for addressing the most common objection faced by new grant writers: lack of experience. The key elements include:</p>
                
                <ul>
                  <li><strong>Common Forms:</strong> Four specific ways clients express the experience objection</li>
                  <li><strong>Underlying Concerns:</strong> Insight into what clients are really worried about beyond the surface-level question</li>
                  <li><strong>4-Part Response Framework:</strong> Structured approach to addressing the objection effectively</li>
                  <li><strong>Word-for-Word Scripts:</strong> Specific language for responding to common questions</li>
                  <li><strong>System Emphasis:</strong> Strategic positioning of the "AI-powered grant writing system" as a key differentiator</li>
                  <li><strong>Risk Reversal:</strong> Specific technique for reducing client perceived risk</li>
                  <li><strong>Action Step:</strong> Practical advice to practice responses for improved delivery and confidence</li>
                </ul>
                
                <p>This slide addresses one of the biggest challenges for new grant writers: overcoming the experience objection. By providing insight into the underlying concerns behind the objection, it helps reframe the conversation from experience to results. The 4-part response framework creates a structured approach that builds confidence, while the specific word-for-word scripts provide ready-to-use language. The emphasis on the AI-powered system positions it as a key differentiator that compensates for personal experience, while the risk reversal technique addresses the client's fear of wasting money. The action step creates a path to implementation through practice and self-evaluation.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide35"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide37"
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
