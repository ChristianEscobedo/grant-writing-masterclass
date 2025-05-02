"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";

export default function UnawareAttendeesFacebookPostsPage() {
  const posts = [
    {
      id: "post1",
      title: "For everyone who attended the Grant Writing Masterclass: Here are the 5 steps to landing your first $3K client (even with zero experience)...",
      description: "Detailed action plan for beginners to get started with grant writing",
      color: "bg-blue-600",
      date: "Day 1"
    },
    {
      id: "post2",
      title: "\"I was terrified to start grant writing with no experience. Here's exactly how I landed my first $3,500 client in 14 days...\"",
      description: "Success story focused on overcoming the fear of getting started",
      color: "bg-purple-600",
      date: "Day 2"
    },
    {
      id: "post3",
      title: "REVEALED: The exact client outreach template that's helping our students land $3K-$5K grant writing clients (copy/paste this)",
      description: "Actionable template that attendees can use immediately",
      color: "bg-green-600",
      date: "Day 3"
    },
    {
      id: "post4",
      title: "How our AI Grant Builder turns complete beginners into confident grant writers (behind-the-scenes look)",
      description: "Detailed explanation of how the AI system supports beginners",
      color: "bg-amber-600",
      date: "Day 4"
    },
    {
      id: "post5",
      title: "The 3 types of grant writing retainer packages that create predictable $5K-$10K monthly income (with contract templates)",
      description: "Value-packed breakdown of retainer models with templates",
      color: "bg-red-600",
      date: "Day 5"
    },
    {
      id: "post6",
      title: "Case Study: How Sarah went from zero grant writing experience to $15K/month in 90 days (full breakdown)",
      description: "Detailed case study with specific strategies and timeline",
      color: "bg-indigo-600",
      date: "Day 6"
    },
    {
      id: "post7",
      title: "LAST CHANCE: The Grant Builder AI Strategy Session closes tomorrow (plus a special bonus for action-takers)",
      description: "Final call to action with urgency and special offer",
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
            Post-Event Facebook Posts for Unaware Attendees
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-4 text-center"
          >
            7-Day Facebook Post Sequence to Convert Masterclass Attendees into Consultation Calls
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
                      Post-Event
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">{post.title}</h2>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4">{post.description}</p>
                  <Link 
                    href={`/unaware/attendees/facebook-posts/${post.id}`}
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
