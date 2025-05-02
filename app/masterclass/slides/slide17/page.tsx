"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide17Page() {
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
                Slide 17 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide16"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide18"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                    Success Story #1: Meet Michael
                  </h1>
                  <p className="text-xl text-white/90 max-w-3xl mx-auto">
                    Former copywriter who transitioned to grant writing with no prior experience
                  </p>
                </div>
                
                <div className="grid grid-cols-3 gap-8 max-w-5xl mx-auto">
                  <div className="col-span-1">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                      <div className="aspect-square relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center">
                          <svg className="w-24 h-24 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="p-4 text-center">
                        <div className="text-white font-semibold text-lg">Michael T.</div>
                        <div className="text-white/70 text-sm">Denver, Colorado</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-3">
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-white/80 text-sm font-medium">Background</div>
                        <div className="text-white">Freelance Copywriter</div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-white/80 text-sm font-medium">Experience Level</div>
                        <div className="text-white">Zero Grant Writing Experience</div>
                      </div>
                      
                      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                        <div className="text-white/80 text-sm font-medium">Starting Income</div>
                        <div className="text-white">$3,000/month (inconsistent)</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-span-2">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full">
                      <h3 className="text-xl font-bold text-white mb-4">Michael's Story</h3>
                      
                      <div className="space-y-4 text-white/90">
                        <p>
                          "I was struggling as a freelance copywriter. The competition was brutal, clients constantly haggled over my rates, and I was stuck in the feast-or-famine cycle. Some months I'd make $5K, others barely $1K.
                        </p>
                        
                        <p>
                          I was skeptical when I first heard about grant writing. I had no experience with grants and wasn't sure if I could break into a new field. But the income potential and the idea of helping organizations make a difference was appealing.
                        </p>
                        
                        <p>
                          What surprised me most was how quickly I was able to land my first client. Using the outreach templates and the AI-powered grant writing system, I secured a $3,500 project within two weeks of starting. The client was thrilled with the result, and it took me less than 25 hours to complete.
                        </p>
                        
                        <p>
                          Within 90 days, I had four regular clients and was making $12,000/month consistently. The best part? I'm working fewer hours than I did as a copywriter, and I'm helping organizations that are making a real difference in the world."
                        </p>
                      </div>
                      
                      <div className="mt-6 bg-green-500/20 rounded-lg p-3">
                        <div className="flex items-center">
                          <div className="font-bold text-white mr-2">Current Income:</div>
                          <div className="text-white">$12,000/month</div>
                        </div>
                        <div className="flex items-center">
                          <div className="font-bold text-white mr-2">Time to First Client:</div>
                          <div className="text-white">14 days</div>
                        </div>
                        <div className="flex items-center">
                          <div className="font-bold text-white mr-2">Time to $10K/month:</div>
                          <div className="text-white">90 days</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 17: Success Story #1: Meet Michael
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide introduces Michael, a former copywriter who transitioned to grant writing with no prior experience. The key elements include:</p>
                
                <ul>
                  <li><strong>Relatable Background:</strong> Positioning Michael as a struggling copywriter creates relatability for freelancers</li>
                  <li><strong>Zero Experience:</strong> Clear emphasis that he had "Zero Grant Writing Experience" addresses the main objection</li>
                  <li><strong>Before/After Income:</strong> Specific numbers showing the transformation from $3,000/month to $12,000/month</li>
                  <li><strong>Timeline Highlights:</strong> "First client in 14 days" and "$10K/month in 90 days" create realistic expectations</li>
                  <li><strong>Pain Points:</strong> Addressing common freelancer struggles like competition, haggling, and feast-or-famine</li>
                  <li><strong>AI Advantage:</strong> Mention of the "AI-powered grant writing system" that made the transition possible</li>
                </ul>
                
                <p>This slide creates desire through a relatable success story that directly addresses the main objection about experience. By showing how Michael went from zero grant writing experience to $12,000/month in just 90 days, it makes the opportunity feel accessible to the audience. The specific timeline milestones create clear expectations, while the mention of working fewer hours addresses concerns about workload. The first-person narrative creates authenticity and emotional connection.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide16"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide18"
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
