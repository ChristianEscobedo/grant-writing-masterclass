"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";

export default function EngagementPostsPage() {
  const posts = [
    {
      id: "post1",
      title: "What's one grant writing challenge you're currently facing?",
      description: "Question-based engagement post to identify pain points",
      color: "bg-blue-600",
      date: "Day 1"
    },
    {
      id: "post2",
      title: "Grant writers: What's your current success rate?",
      description: "Data-gathering post to benchmark and create engagement",
      color: "bg-purple-600",
      date: "Day 2"
    },
    {
      id: "post3",
      title: "Which funding source has been most responsive to your grant applications?",
      description: "Industry-specific question to demonstrate expertise",
      color: "bg-green-600",
      date: "Day 3"
    },
    {
      id: "post4",
      title: "What's your go-to strategy for the 'Sustainability' section of grant applications?",
      description: "Technical question that only sophisticated grant writers would understand",
      color: "bg-amber-600",
      date: "Day 4"
    },
    {
      id: "post5",
      title: "Just compiled a list of 25 grant opportunities with deadlines in the next 90 days. Comment 'GRANTS' if you'd like access.",
      description: "Value-offer post with clear call to action",
      color: "bg-red-600",
      date: "Day 5"
    },
    {
      id: "post6",
      title: "I've analyzed 100+ successful grant applications. The most common mistake? Comment 'INSIGHTS' to find out.",
      description: "Curiosity-driven engagement post with clear call to action",
      color: "bg-indigo-600",
      date: "Day 6"
    },
    {
      id: "post7",
      title: "Grant writers: What's one AI tool you're currently using in your workflow?",
      description: "Technology-focused question to identify sophistication level",
      color: "bg-teal-600",
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
            Engagement Post Sequence
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-4 text-center"
          >
            7-Day Engagement Post Sequence to Drive Interaction and Masterclass Registrations
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-center p-3 rounded-md mb-12 max-w-2xl mx-auto"
          >
            <strong>Target Audience:</strong> Sophisticated audience (Already Writing Grants or Aware Of Grant writing)
          </motion.div>

          <div className="space-y-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800"
              >
                <div className={`${post.color} h-3`}></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                      {post.date}
                    </span>
                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded">
                      Engagement Post
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">{post.title}</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">{post.description}</p>
                  <Link 
                    href={`/engagement-posts/${post.id}`}
                    className="inline-flex items-center text-sm px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Full Post
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
