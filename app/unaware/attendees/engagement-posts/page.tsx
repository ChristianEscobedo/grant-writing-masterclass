"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UnawareAttendeesEngagementPostsPage() {
  const posts = [
    {
      id: "post1",
      title: "Masterclass attendees: What was your biggest takeaway from the session? (Plus a free resource for you...)",
      description: "Question-based post to generate engagement with value offer",
      color: "bg-blue-600",
      date: "Day 1"
    },
    {
      id: "post2",
      title: "What's holding you back from starting your grant writing business? Comment below and I'll give you a personalized solution.",
      description: "Problem-solving post to address specific objections",
      color: "bg-purple-600",
      date: "Day 2"
    },
    {
      id: "post3",
      title: "POLL: Which part of grant writing feels most intimidating to you? (I'll share specific resources for the top 3 responses)",
      description: "Poll-based post to identify specific pain points",
      color: "bg-green-600",
      date: "Day 3"
    },
    {
      id: "post4",
      title: "If you could ask a successful grant writer ONE question, what would it be? (I'll answer all of them in tomorrow's live Q&A)",
      description: "Question collection post to promote upcoming live session",
      color: "bg-amber-600",
      date: "Day 4"
    },
    {
      id: "post5",
      title: "Tag a non-profit or small business that could benefit from grant funding! I'll randomly select 3 and provide a free grant opportunity assessment.",
      description: "Tagging post to expand reach and demonstrate value",
      color: "bg-red-600",
      date: "Day 5"
    },
    {
      id: "post6",
      title: "Share your #GrantWritingGoals below! What would success look like for you in the next 90 days? (Plus a free 90-day planner template)",
      description: "Goal-setting post with valuable resource offer",
      color: "bg-indigo-600",
      date: "Day 6"
    },
    {
      id: "post7",
      title: "LAST CHANCE: Comment \"READY\" if you're serious about building your grant writing business and I'll send you something special (24 hours only)",
      description: "Final engagement post with exclusive offer",
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
            Post-Event Engagement Posts for Unaware Attendees
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-4 text-center"
          >
            7-Day Engagement Post Sequence to Generate Interaction and Drive Consultation Calls
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-rose-100 dark:bg-rose-900/30 text-rose-800 dark:text-rose-300 text-center p-3 rounded-md mb-12 max-w-2xl mx-auto"
          >
            <strong>Target Audience:</strong> Low Sophistication Attendees (New to Grant Writing)
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
                    href={`/unaware/attendees/engagement-posts/${post.id}`}
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
