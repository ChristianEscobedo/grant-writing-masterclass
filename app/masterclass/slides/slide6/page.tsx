"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconArrowLeft, IconArrowRight, IconDownload } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function Slide6Page() {
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
                Slide 6 of 100
              </span>
            </div>
            
            <div className="flex space-x-2">
              <Button
                as={Link}
                href="/masterclass/slides/slide5"
                className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
              >
                <IconArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              
              <Button
                as={Link}
                href="/masterclass/slides/slide7"
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
            <div className="aspect-[16/9] relative bg-gradient-to-br from-purple-600 to-indigo-700 flex items-center justify-center p-12">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/pattern-dots.svg')] opacity-10"></div>
              
              <div className="relative z-10 text-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                  The Big Promise
                </h1>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-4xl mx-auto">
                  <p className="text-2xl md:text-3xl text-white leading-relaxed">
                    By the end of this session, you'll have a <span className="text-yellow-300 font-semibold">clear roadmap</span> to building a <span className="text-yellow-300 font-semibold">$10K+/month grant writing business</span> — even if you have zero experience today.
                  </p>
                </div>
                
                <div className="mt-8 grid grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-xl font-bold text-white mb-2">No Experience</div>
                    <div className="text-white/80 text-sm">
                      Required
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-xl font-bold text-white mb-2">No Connections</div>
                    <div className="text-white/80 text-sm">
                      Needed
                    </div>
                  </div>
                  
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-xl font-bold text-white mb-2">No Technical Skills</div>
                    <div className="text-white/80 text-sm">
                      Required
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4 text-neutral-800 dark:text-neutral-200">
                Slide 6: The Big Promise
              </h2>
              
              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This slide makes a bold statement of the transformation they'll experience by the end of the masterclass. The key elements include:</p>
                
                <ul>
                  <li><strong>Clear Promise:</strong> "Clear roadmap to building a $10K+/month grant writing business" states exactly what they'll get</li>
                  <li><strong>Objection Handling:</strong> "Even if you have zero experience today" directly addresses the main concern</li>
                  <li><strong>Highlighted Elements:</strong> Key phrases are highlighted in yellow to draw attention to the most important points</li>
                  <li><strong>Three Key Barriers Removed:</strong> The three boxes address the main objections (experience, connections, technical skills)</li>
                  <li><strong>Visual Design:</strong> The promise is framed in a highlighted box to make it stand out</li>
                </ul>
                
                <p>This slide clearly articulates the core promise of the masterclass and addresses the three main objections that might prevent someone from believing they can succeed. By stating that no experience, connections, or technical skills are required, it removes the main barriers to entry and makes the opportunity feel accessible to everyone.</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-between">
            <Button
              as={Link}
              href="/masterclass/slides/slide5"
              className="bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700"
            >
              <IconArrowLeft className="h-4 w-4 mr-2" />
              Previous Slide
            </Button>
            
            <Button
              as={Link}
              href="/masterclass/slides/slide7"
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
