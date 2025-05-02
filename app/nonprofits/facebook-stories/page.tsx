"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function NonprofitFacebookStoriesPage() {
  const stories = [
    {
      id: "story1",
      title: "7 Hidden Reasons Grant Applications Get Rejected",
      description: "Visual breakdown of common grant application mistakes",
      color: "bg-emerald-600",
      day: "Day 1",
      image: "/nonprofits/story1.png"
    },
    {
      id: "story2",
      title: "How This Non-Profit Increased Their Grant Success Rate by 300%",
      description: "Success story with key metrics and strategies",
      color: "bg-teal-600",
      day: "Day 2",
      image: "/nonprofits/story2.png"
    },
    {
      id: "story3",
      title: "The Outcome Metric Framework That Makes Funders Say Yes",
      description: "Visual framework for creating compelling metrics",
      color: "bg-blue-600",
      day: "Day 3",
      image: "/nonprofits/story3.png"
    },
    {
      id: "story4",
      title: "From Rejected to $375K in Funding: A Non-Profit's Journey",
      description: "Visual case study with transformation story",
      color: "bg-indigo-600",
      day: "Day 4",
      image: "/nonprofits/story4.png"
    },
    {
      id: "story5",
      title: "5-Part Narrative Structure for Winning Grant Applications",
      description: "Visual template for structuring grant narratives",
      color: "bg-purple-600",
      day: "Day 5",
      image: "/nonprofits/story5.png"
    },
    {
      id: "story6",
      title: "How AI Is Revolutionizing Grant Applications",
      description: "Visual exploration of AI tools for grant writing",
      color: "bg-rose-600",
      day: "Day 6",
      image: "/nonprofits/story6.png"
    },
    {
      id: "story7",
      title: "Last Chance: Free Masterclass Tomorrow + Bonus",
      description: "Final reminder with urgency and special offer",
      color: "bg-amber-600",
      day: "Day 7",
      image: "/nonprofits/story7.png"
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
            Facebook Stories for Non-Profit Organizations
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-4 text-center"
          >
            7-Day Visual Story Sequence to Drive Masterclass Registrations
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-center p-3 rounded-md mb-12 max-w-2xl mx-auto"
          >
            <strong>Target Audience:</strong> Non-Profit Organizations & NGOs Seeking Grant Funding
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800"
              >
                <div className={`${story.color} h-3`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                      {story.day}
                    </span>
                    <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-1 rounded">
                      Story
                    </span>
                  </div>
                  
                  <div className="aspect-[9/16] relative mb-4 rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                    <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                      <p className="text-sm">Story Preview</p>
                    </div>
                  </div>
                  
                  <h2 className="text-lg font-semibold mb-2 text-neutral-800 dark:text-neutral-200">{story.title}</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{story.description}</p>
                  <Link 
                    href={`/nonprofits/facebook-stories/${story.id}`}
                    className="inline-flex items-center text-sm px-3 py-1.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
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
