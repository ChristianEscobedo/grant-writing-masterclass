"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide20Page() {
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
                Slide 20 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide19"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide21"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Success Story #2: Meet Sarah
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Complete beginner with no writing background who succeeded in grant writing
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="col-span-1">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                      <div className="aspect-square relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-teal-400/20 flex items-center justify-center">
                          <svg className="w-24 h-24 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="p-4 text-center">
                        <div className="text-white font-semibold text-lg">Sarah K.</div>
                        <div className="text-white/70 text-sm">Austin, Texas</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-white/80 text-sm font-medium">Background</div>
                        <div className="text-white">Stay-at-home Mom</div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-white/80 text-sm font-medium">Experience Level</div>
                        <div className="text-white">No Writing Experience</div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-white/80 text-sm font-medium">Starting Income</div>
                        <div className="text-white">$0/month</div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-white/80 text-sm font-medium">Education</div>
                        <div className="text-white">Bachelor's in Psychology</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full">
                      <h3 className="text-xl font-bold text-white mb-4">Sarah's Story</h3>
                      
                      <div className="space-y-4 text-white/90">
                        <p>
                          "After staying home with my kids for 6 years, I wanted to find a flexible way to contribute to our family income. I had no professional writing experience and was worried about competing in the freelance market.
                        </p>
                        
                        <p>
                          When I first heard about grant writing, I was intimidated. It sounded technical and complicated. I thought you needed specialized degrees or certifications. But I was drawn to the idea of helping non-profits and the income potential.
                        </p>
                        
                        <p>
                          What changed everything was learning about the AI-powered approach. The system handled the technical aspects and formatting, while I focused on telling the organization's story. I didn't need to memorize grant requirements or worry about making technical mistakes.
                        </p>
                        
                        <p>
                          I started by reaching out to local non-profits I was already connected with through volunteer work. My first client was a small arts organization where I'd volunteered. They took a chance on me because I knew their mission well, even though I had no grant writing experience.
                        </p>
                        
                        <p>
                          Within 90 days, I had built a consistent $8,000/month business working 25-30 hours per week, all while maintaining flexibility for my family. The best part is that I'm helping organizations I care about secure funding for important work."
                        </p>
                      </div>
                      
                      <div className="mt-6 bg-green-500/20 rounded-lg p-3">
                        <div className="flex items-center">
                          <div className="font-bold text-white mr-2">Current Income:</div>
                          <div className="text-white">$8,000/month</div>
                        </div>
                        <div className="flex items-center">
                          <div className="font-bold text-white mr-2">Time to First Client:</div>
                          <div className="text-white">21 days</div>
                        </div>
                        <div className="flex items-center">
                          <div className="font-bold text-white mr-2">Time to $5K/month:</div>
                          <div className="text-white">60 days</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 20: Success Story #2: Meet Sarah
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide introduces Sarah, a complete beginner with no writing background who succeeded in grant writing. The key elements include:</p>
                
                <ul>
                  <li><strong>Different Background:</strong> Positioning Sarah as a stay-at-home mom with no writing experience creates relatability for non-writers</li>
                  <li><strong>Zero Starting Point:</strong> Clear emphasis on "$0/month" starting income and "No Writing Experience" addresses the experience objection</li>
                  <li><strong>AI Emphasis:</strong> "The system handled the technical aspects" highlights how the AI makes it accessible</li>
                  <li><strong>Leveraging Connections:</strong> Shows how she used existing relationships rather than cold outreach</li>
                  <li><strong>Family Flexibility:</strong> Emphasizes the work-life balance benefits with "25-30 hours per week, all while maintaining flexibility"</li>
                  <li><strong>Timeline Milestones:</strong> Specific achievements like "First Client: 21 days" and "$5K/month: 60 days"</li>
                </ul>
                
                <p>This slide creates desire through a different type of success story that appeals to those without any writing background. By showing how a stay-at-home mom with no professional writing experience succeeded, it makes the opportunity feel accessible to an even broader audience. The emphasis on flexibility and work-life balance addresses the lifestyle benefits, while the mention of helping organizations "secure funding for important work" highlights the meaningful impact of the work.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide19"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide21"
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
