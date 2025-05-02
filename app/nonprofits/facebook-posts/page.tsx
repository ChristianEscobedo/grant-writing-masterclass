"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NonprofitFacebookPostsPage() {
  const posts = [
    {
      id: "post1",
      title: "The 7 Hidden Reasons Why Most Grant Applications Get Rejected (And How to Avoid These Common Pitfalls)",
      description: "Comprehensive breakdown of common grant application mistakes with actionable solutions",
      color: "bg-emerald-600",
      day: "Day 1"
    },
    {
      id: "post2",
      title: "How to Research Grant Funders Beyond the Published Guidelines (The Strategy That Increased This Non-Profit's Success Rate by 300%)",
      description: "Detailed guide to effective funder research with a case study",
      color: "bg-teal-600",
      day: "Day 2"
    },
    {
      id: "post3",
      title: "The Outcome Metric Framework That Makes Grant Funders Take Notice (With Real Examples From 5 Different Sectors)",
      description: "Actionable framework for creating compelling outcome metrics",
      color: "bg-blue-600",
      day: "Day 3"
    },
    {
      id: "post4",
      title: "\"We Were Rejected 12 Times Before Discovering This Approach...\" How a Small Environmental Non-Profit Secured $375K in Grants",
      description: "Detailed case study with specific strategies and implementation steps",
      color: "bg-indigo-600",
      day: "Day 4"
    },
    {
      id: "post5",
      title: "The 5-Part Narrative Structure That Dramatically Improves Grant Success Rates (With Templates You Can Use)",
      description: "Step-by-step guide to structuring compelling grant narratives",
      color: "bg-purple-600",
      day: "Day 5"
    },
    {
      id: "post6",
      title: "How AI Is Revolutionizing Grant Applications for Non-Profits (And Why Most Organizations Are Missing Out)",
      description: "Exploration of AI tools and strategies for grant applications",
      color: "bg-rose-600",
      day: "Day 6"
    },
    {
      id: "post7",
      title: "LAST CHANCE: Join Us Tomorrow to Learn How to Dramatically Increase Your Grant Success Rate (Plus a Free Resource for Everyone Who Registers)",
      description: "Final invitation with urgency and special offer",
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
            Facebook Posts for Non-Profit Organizations
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-4 text-center"
          >
            7-Day Ultra Long-Form, Value-Forward Facebook Post Sequence to Drive Masterclass Registrations
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
                      Non-Profit Organizations
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">{post.title}</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">{post.description}</p>
                  <Link 
                    href={`/nonprofits/facebook-posts/${post.id}`}
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
