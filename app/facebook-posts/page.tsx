"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";

export default function FacebookPostsPage() {
  const posts = [
    {
      id: "day1",
      title: "What's the worst grant application you've ever seen? (And how AI is changing the game)",
      description: "Engagement post about common grant writing mistakes and how AI is revolutionizing the process",
      date: "Day 1",
      audience: "Mixed Audience (Beginners & Experienced)"
    },
    {
      id: "day2",
      title: "𝗔𝗿𝗲 𝘆𝗼𝘂 𝗵𝗲𝗹𝗽𝗶𝗻𝗴 𝗰𝗹𝗶𝗲𝗻𝘁𝘀 𝗴𝗲𝘁 𝗳𝘂𝗻𝗱𝗶𝗻𝗴 𝗯𝘂𝘁 𝘀𝘁𝗿𝘂𝗴𝗴𝗹𝗶𝗻𝗴 𝘁𝗼 𝗴𝗲𝘁 𝗽𝗮𝗶𝗱 𝘄𝗵𝗮𝘁 𝘆𝗼𝘂'𝗿𝗲 𝘄𝗼𝗿𝘁𝗵?",
      description: "Post about the value of grant writing services and how to charge premium rates",
      date: "Day 2",
      audience: "Current Grant Writers & Freelancers"
    },
    {
      id: "day3",
      title: "I've been using the 'Grant Builder AI' to secure $50M in funding for clients... Want to see how?",
      description: "Post highlighting Gwen's success and offering the masterclass as a solution",
      date: "Day 3",
      audience: "Mixed Audience (Beginners & Experienced)"
    },
    {
      id: "day4",
      title: "𝗧𝗵𝗲 𝗚𝗿𝗮𝗻𝘁 𝗪𝗿𝗶𝘁𝗶𝗻𝗴 𝗔𝘂𝘁𝗼-𝗣𝗿𝗼𝘀𝗽𝗲𝗰𝘁𝗶𝗻𝗴 𝗦𝗢𝗣: 𝗕𝗼𝗼𝗸 𝟮-𝟰 𝗛𝗶𝗴𝗵-𝗧𝗶𝗰𝗸𝗲𝘁 𝗖𝗹𝗶𝗲𝗻𝘁𝘀 𝗣𝗲𝗿 𝗪𝗲𝗲𝗸",
      description: "Post about systematizing client acquisition for grant writing services",
      date: "Day 4",
      audience: "Freelancers & Agency Owners"
    },
    {
      id: "day5",
      title: "𝗪𝗵𝗲𝗻 𝗜 𝗳𝗼𝘂𝗻𝗱 𝗼𝘂𝘁 𝗜 𝘄𝗮𝘀 𝗱𝗼𝗶𝗻𝗴 𝗴𝗿𝗮𝗻𝘁 𝘄𝗿𝗶𝘁𝗶𝗻𝗴 𝗮𝗹𝗹 𝘄𝗿𝗼𝗻𝗴, 𝗜 𝘄𝗮𝘀 𝘀𝗼𝗼𝗼𝗼 𝗺𝗮𝗮𝗮𝗱𝗱𝗱...",
      description: "Story-based post about the struggles of traditional grant writing and the AI solution",
      date: "Day 5",
      audience: "Current Grant Writers & Non-Profit Professionals"
    },
    {
      id: "day6",
      title: "Just created a spreadsheet with 50+ grant opportunities worth $250K-$1M each. Want access?",
      description: "Value-offer post with a clear call to action for the masterclass",
      date: "Day 6",
      audience: "Sophisticated Audience (Already Writing Grants or Aware Of Grant writing)"
    },
    {
      id: "day7",
      title: "LAST CHANCE: Free Masterclass Tomorrow - Turn AI Into a $10K/Month Grant Writing Business",
      description: "Final reminder post with urgency and FOMO",
      date: "Day 7",
      audience: "All Audiences"
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
            Facebook Post Sequence
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-12 text-center"
          >
            7-Day Facebook Post Sequence to Drive Masterclass Registrations
          </motion.p>

          <div className="space-y-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded">
                    {post.date}
                  </span>
                  <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs px-2 py-1 rounded">
                    Facebook Post
                  </span>
                </div>
                <div className="mb-3">
                  <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-xs px-2 py-1 rounded">
                    Target: {post.audience}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-3 text-neutral-800 dark:text-neutral-200">{post.title}</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-4">{post.description}</p>
                <Link
                  href={`/facebook-posts/${post.id}`}
                  className="inline-flex items-center text-sm px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  View Full Post
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
