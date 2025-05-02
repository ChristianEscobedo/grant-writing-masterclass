"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide14Page() {
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
                Slide 14 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide13"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide15"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">
                  Why Organizations Hire Grant Writers
                </h1>
                
                <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="flex items-start mb-4">
                      <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-purple-800 font-bold mr-4">1</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Specialized Expertise</h3>
                        <p className="text-white/90 text-sm">
                          Organizations recognize that grant writing requires specialized knowledge of funding sources, application processes, and persuasive writing techniques that they don't have in-house.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                      <span className="font-semibold">Client Quote:</span> "We tried writing grants ourselves, but our success rate was less than 5%. With a professional grant writer, it jumped to 30%."
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="flex items-start mb-4">
                      <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-purple-800 font-bold mr-4">2</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Time Constraints</h3>
                        <p className="text-white/90 text-sm">
                          Staff are already stretched thin with their primary responsibilities. Grant applications are time-consuming, requiring 40-60 hours per application, which organizations can't spare.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                      <span className="font-semibold">Client Quote:</span> "Our program directors are experts in their field, but they don't have 40+ hours to spend on a single grant application."
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="flex items-start mb-4">
                      <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-purple-800 font-bold mr-4">3</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Higher Success Rates</h3>
                        <p className="text-white/90 text-sm">
                          Professional grant writers typically achieve 2-3x higher success rates than organizations writing their own applications, making the investment well worth it.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                      <span className="font-semibold">Client Quote:</span> "We paid $4,000 for a grant writer and secured a $250,000 grant. That's a 6,150% ROI. It was a no-brainer."
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
                    <div className="flex items-start mb-4">
                      <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-purple-800 font-bold mr-4">4</div>
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2">Objective Perspective</h3>
                        <p className="text-white/90 text-sm">
                          External grant writers bring an objective perspective that helps articulate the organization's value proposition more effectively to funders.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 rounded-lg p-3 text-sm text-white">
                      <span className="font-semibold">Client Quote:</span> "Our grant writer helped us see our programs through the funder's eyes, which completely changed how we presented our work."
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-xl p-4 max-w-3xl mx-auto">
                  <p className="text-white text-lg">
                    <span className="font-semibold">The Bottom Line:</span> Organizations hire grant writers because the ROI is substantial — both in terms of funding secured and staff time saved.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 14: Why Organizations Hire Grant Writers
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide explains the four key reasons organizations outsource grant writing: expertise, time constraints, success rates, and objectivity. The key elements include:</p>
                
                <ul>
                  <li><strong>Four Key Reasons:</strong> Clear explanation of the main motivations for hiring grant writers</li>
                  <li><strong>Specific Details:</strong> Concrete information like "40-60 hours per application" and "2-3x higher success rates"</li>
                  <li><strong>Client Quotes:</strong> Real-world testimonials that add credibility and relatability</li>
                  <li><strong>ROI Focus:</strong> Emphasis on return on investment, including the impressive "6,150% ROI" example</li>
                  <li><strong>Bottom Line Summary:</strong> Clear conclusion that ties together the value proposition</li>
                </ul>
                
                <p>This slide builds desire by explaining why organizations are willing to pay for grant writing services. The specific details and client quotes add credibility, while the ROI focus addresses potential concerns about pricing. The mention of "staff time saved" highlights an additional benefit beyond just the funding secured. This slide effectively positions grant writing as a high-value service that organizations are eager to pay for.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide13"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide15"
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
