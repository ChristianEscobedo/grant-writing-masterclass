"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NonprofitEngagementPostsPage() {
  const posts = [
    {
      id: "post1",
      title: "Non-profit leaders: What's been your biggest challenge with grant applications? (I'll share specific strategies for the most common challenges)",
      description: "Question-based post to identify pain points and provide targeted advice",
      color: "bg-emerald-600",
      day: "Day 1"
    },
    {
      id: "post2",
      title: "POLL: What's your organization's current grant success rate? (I'll share insights based on your response)",
      description: "Poll-based post to segment audience and provide relevant insights",
      color: "bg-teal-600",
      day: "Day 2"
    },
    {
      id: "post3",
      title: "Tag a non-profit that deserves more funding! I'll randomly select 3 and share potential grant opportunities for their specific sector.",
      description: "Tagging post to expand reach and demonstrate value",
      color: "bg-blue-600",
      day: "Day 3"
    },
    {
      id: "post4",
      title: "What's one question you wish you could ask a grant reviewer? (I've interviewed dozens and will share their insights)",
      description: "Question-based post to address specific concerns about reviewers",
      color: "bg-indigo-600",
      day: "Day 4"
    },
    {
      id: "post5",
      title: "Comment \"FUNDING\" below if you'd like access to my list of 50 grant opportunities open right now (with deadlines in the next 90 days)",
      description: "Value-offer post with clear call to action",
      color: "bg-purple-600",
      day: "Day 5"
    },
    {
      id: "post6",
      title: "What would your organization do with an additional $100K in grant funding this year? (Share your vision below)",
      description: "Aspirational question to create desire for the opportunity",
      color: "bg-rose-600",
      day: "Day 6"
    },
    {
      id: "post7",
      title: "LAST CHANCE: Comment \"READY\" if you want to learn how to dramatically increase your grant success rate (Free Masterclass Tomorrow)",
      description: "Final engagement post with urgency and clear call to action",
      color: "bg-amber-600",
      day: "Day 7"
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
            Engagement Posts for Non-Profit Organizations
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
            className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-center p-3 rounded-md mb-12 max-w-2xl mx-auto"
          >
            <strong>Target Audience:</strong> Non-Profit Organizations & NGOs Seeking Grant Funding
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
                      {post.day}
                    </span>
                    <span className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs px-2 py-1 rounded">
                      Engagement Post
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">{post.title}</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">{post.description}</p>
                  <Link 
                    href={`/nonprofits/engagement-posts/${post.id}`}
                    className="inline-flex items-center text-sm px-3 py-1.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
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
