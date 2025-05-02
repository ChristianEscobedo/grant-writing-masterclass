"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide5Page() {
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
                Slide 5 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide4"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide6"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  How to Get the Most From This Masterclass
                </h1>
                
                <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="flex items-start mb-3">
                      <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold mr-3 mt-1">✓</div>
                      <div>
                        <div className="text-xl font-semibold text-white mb-2">Take Notes</div>
                        <div className="text-white/80 text-sm">
                          Focus on action steps and insights that resonate with your specific situation
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="flex items-start mb-3">
                      <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold mr-3 mt-1">✓</div>
                      <div>
                        <div className="text-xl font-semibold text-white mb-2">Stay Until the End</div>
                        <div className="text-white/80 text-sm">
                          Live attendees will receive exclusive bonuses not available in the replay
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="flex items-start mb-3">
                      <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold mr-3 mt-1">✓</div>
                      <div>
                        <div className="text-xl font-semibold text-white mb-2">Eliminate Distractions</div>
                        <div className="text-white/80 text-sm">
                          Close other tabs and put your phone on silent to maximize your learning
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="flex items-start mb-3">
                      <div className="bg-yellow-400 rounded-full w-8 h-8 flex items-center justify-center text-blue-800 font-bold mr-3 mt-1">✓</div>
                      <div>
                        <div className="text-xl font-semibold text-white mb-2">Ask Questions</div>
                        <div className="text-white/80 text-sm">
                          Use the chat to ask questions, which we'll address during the Q&A session
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
                  <div className="text-white/90 text-lg font-medium">
                    "The difference between success and failure is often in the implementation details. Today, you'll get those details."
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 5: How to Get the Most From This Masterclass
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide provides instructions for getting the most value from the masterclass, encouraging active engagement. The key elements include:</p>
                
                <ul>
                  <li><strong>Clear Instructions:</strong> Specific guidance on how to participate effectively</li>
                  <li><strong>Stay Until the End:</strong> Creates urgency by mentioning exclusive bonuses for live attendees</li>
                  <li><strong>Eliminate Distractions:</strong> Practical advice to ensure full attention and retention</li>
                  <li><strong>Ask Questions:</strong> Encourages interaction and engagement through the chat feature</li>
                  <li><strong>Implementation Focus:</strong> The quote emphasizes that success comes from implementation details</li>
                </ul>
                
                <p>This slide helps set expectations for participation and increases the likelihood that attendees will stay engaged throughout the presentation. The mention of "exclusive bonuses not available in the replay" creates urgency and incentivizes staying until the end. The emphasis on implementation details positions the masterclass as providing practical, actionable information rather than just theory.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide4"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide6"
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
