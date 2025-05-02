"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function FacebookStoriesPage() {
  const stories = [
    {
      id: "story1",
      title: "The $50M Grant Writing Formula",
      description: "Story highlighting Gwen's success with AI-powered grant writing",
      image: "/facebook-stories/story1.png",
      date: "Day 1"
    },
    {
      id: "story2",
      title: "Grant Success Rates: AI vs Traditional",
      description: "Comparison of success rates between AI-assisted and traditional grant writing",
      image: "/facebook-stories/story2.png",
      date: "Day 2"
    },
    {
      id: "story3",
      title: "5 Advanced Grant Writing Strategies for 2025",
      description: "Story showcasing cutting-edge strategies for sophisticated grant writers",
      image: "/facebook-stories/story3.png",
      date: "Day 3"
    },
    {
      id: "story4",
      title: "Grant Builder AI: Behind the Technology",
      description: "Technical breakdown of how the AI system works for grant writing",
      image: "/facebook-stories/story4.png",
      date: "Day 4"
    },
    {
      id: "story5",
      title: "Case Study: $2M Park Development Grant",
      description: "Detailed case study of a successful large-scale grant application",
      image: "/facebook-stories/story5.png",
      date: "Day 5"
    },
    {
      id: "story6",
      title: "Masterclass: Advanced Grant Writing with AI",
      description: "Promotional story for the upcoming masterclass",
      image: "/facebook-stories/story6.png",
      date: "Day 6"
    },
    {
      id: "story7",
      title: "Last Chance: Grant Writing Masterclass Tomorrow",
      description: "Final reminder story with urgency and FOMO",
      image: "/facebook-stories/story7.png",
      date: "Day 7"
    }
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col py-20">
        <div className="w-full max-w-4xl mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-8 text-center"
          >
            Facebook Story Sequence
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-4 text-center"
          >
            7-Day Facebook Story Sequence to Drive Masterclass Registrations
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-center p-3 rounded-md mb-12 max-w-2xl mx-auto"
          >
            <strong>Target Audience:</strong> Sophisticated audience (Already Writing Grants or Aware Of Grant writing)
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 flex flex-col"
              >
                <div className="relative h-64 bg-neutral-100 dark:bg-neutral-800">
                  <div className="absolute top-2 right-2 z-10">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                      {story.date}
                    </span>
                  </div>
                  {story.image && (
                    <div className="relative h-full w-full">
                      <Image
                        src={story.image}
                        alt={story.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
                <div className="p-5 flex-grow">
                  <h2 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">{story.title}</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{story.description}</p>
                  <Link 
                    href={`/facebook-stories/${story.id}`}
                    className="inline-flex items-center text-sm px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mt-auto"
                  >
                    View Story
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
