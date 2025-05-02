"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconPresentation, IconList, IconUsers } from "@tabler/icons-react";
import { Button } from "@/components/button";

export default function MasterclassPage() {
  const audiences = [
    {
      name: "Non-Sophisticated Audience",
      description: "For freelancers and entrepreneurs with little to no grant writing experience",
      link: "/masterclass/breakdown",
      color: "bg-purple-600",
      icon: <IconUsers className="h-6 w-6" />
    },
    {
      name: "Sophisticated Audience",
      description: "For experienced grant writers looking to scale their business",
      link: "/masterclass/sophisticated",
      color: "bg-blue-600",
      icon: <IconUsers className="h-6 w-6" />
    },
    {
      name: "Non-Profit Organizations",
      description: "For non-profits and NGOs seeking to improve grant success rates",
      link: "/masterclass/nonprofits",
      color: "bg-emerald-600",
      icon: <IconUsers className="h-6 w-6" />
    }
  ];

  const resources = [
    {
      name: "Slide Breakdown",
      description: "Detailed breakdown of all masterclass slides with descriptions",
      link: "/masterclass/breakdown",
      color: "bg-indigo-600",
      icon: <IconList className="h-6 w-6" />
    },
    {
      name: "Slide Presentation",
      description: "Interactive slide presentation for the masterclass",
      link: "/masterclass/slides",
      color: "bg-rose-600",
      icon: <IconPresentation className="h-6 w-6" />
    }
  ];

  return (
    <div className="relative">
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <Background />
      </div>
      <Container className="flex min-h-screen flex-col py-20">
        <div className="w-full max-w-5xl mx-auto">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-black dark:text-white mb-8 text-center"
          >
            Grant Writing Masterclass
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-6 text-center max-w-3xl mx-auto"
          >
            Comprehensive 90-minute masterclass on building a $10K+/month grant writing business with resources for different audience segments
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center mb-12"
          >
            <Button
              as={Link}
              href="/register"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Register for the Masterclass
            </Button>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 mb-12"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
                Masterclass Overview
              </h2>

              <div className="prose prose-blue dark:prose-invert max-w-none">
                <p>This 90-minute masterclass is designed to teach participants how to build a successful grant writing business, even with no prior experience. The presentation covers the entire process from understanding the opportunity to scaling a $10K+/month business, with a focus on leveraging AI tools to simplify the grant writing process.</p>

                <h3>Key Topics Covered</h3>
                <ul>
                  <li>The $700 billion grant funding opportunity</li>
                  <li>Three profitable business models for grant writers</li>
                  <li>Client acquisition strategies that work without prior connections</li>
                  <li>The grant writing process simplified with AI</li>
                  <li>Scaling strategies to reach $10K+/month</li>
                </ul>

                <h3>Masterclass Structure</h3>
                <ol>
                  <li><strong>Hook & Introduction</strong> (10 minutes)</li>
                  <li><strong>The Opportunity</strong> (15 minutes)</li>
                  <li><strong>The Business Model</strong> (15 minutes)</li>
                  <li><strong>Client Acquisition</strong> (15 minutes)</li>
                  <li><strong>Grant Writing Process</strong> (15 minutes)</li>
                  <li><strong>Scaling Your Business</strong> (10 minutes)</li>
                  <li><strong>The Offer</strong> (15 minutes)</li>
                  <li><strong>Close & Next Steps</strong> (5 minutes)</li>
                </ol>

                <h3>The Offer</h3>
                <p>The masterclass concludes with a high-ticket offer ($5,000+) for the Grant Writer Accelerator Program, which includes AI software, comprehensive training, templates, coaching, and a client acquisition system.</p>
              </div>
            </div>
          </motion.div>

          <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
            Audience-Specific Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {audiences.map((audience, index) => (
              <motion.div
                key={audience.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 flex flex-col"
              >
                <div className={`${audience.color} h-2`}></div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className={`${audience.color} bg-opacity-20 dark:bg-opacity-30 p-2 rounded-lg mr-3`}>
                      {audience.icon}
                    </div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">{audience.name}</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{audience.description}</p>
                  <Link
                    href={audience.link}
                    className={`inline-flex items-center text-sm px-3 py-1.5 ${audience.color} text-white rounded-md hover:bg-opacity-90 transition-colors mt-auto`}
                  >
                    View Resources
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mb-6 text-neutral-800 dark:text-neutral-200">
            Masterclass Resources
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 flex flex-col"
              >
                <div className={`${resource.color} h-2`}></div>
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className={`${resource.color} bg-opacity-20 dark:bg-opacity-30 p-2 rounded-lg mr-3`}>
                      {resource.icon}
                    </div>
                    <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">{resource.name}</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{resource.description}</p>
                  <Link
                    href={resource.link}
                    className={`inline-flex items-center text-sm px-3 py-1.5 ${resource.color} text-white rounded-md hover:bg-opacity-90 transition-colors mt-auto`}
                  >
                    View Resource
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
