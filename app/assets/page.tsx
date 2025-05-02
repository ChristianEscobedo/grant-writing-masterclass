"use client";

import { Container } from "@/components/container";
import { Background } from "@/components/background";
import Link from "next/link";
import { motion } from "framer-motion";
import { IconMail, IconBrandFacebook, IconPhoto, IconMessageCircle, IconUsers, IconPresentation } from "@tabler/icons-react";

export default function AssetsPage() {
  const sophisticatedPreEventAssets = [
    {
      title: "Pre-Event Email Sequence",
      description: "7-day email sequence to drive masterclass registrations",
      icon: <IconMail className="h-6 w-6" />,
      link: "/emails",
      color: "bg-blue-600"
    },
    {
      title: "Facebook Posts",
      description: "Ultra long-form, value-forward Facebook posts to promote the masterclass",
      icon: <IconBrandFacebook className="h-6 w-6" />,
      link: "/facebook-posts",
      color: "bg-indigo-600"
    },
    {
      title: "Facebook Stories",
      description: "Visual story sequence to complement Facebook posts",
      icon: <IconPhoto className="h-6 w-6" />,
      link: "/facebook-stories",
      color: "bg-purple-600"
    },
    {
      title: "Engagement Posts",
      description: "Interactive posts to generate comments and engagement",
      icon: <IconMessageCircle className="h-6 w-6" />,
      link: "/engagement-posts",
      color: "bg-pink-600"
    }
  ];

  const sophisticatedPostEventAssets = [
    {
      title: "Post-Event Email Sequence",
      description: "7-day email sequence to convert masterclass attendees into consultation calls",
      icon: <IconMail className="h-6 w-6" />,
      link: "/sophisticated/attendees",
      color: "bg-blue-600"
    },
    {
      title: "Post-Event Facebook Posts",
      description: "Ultra long-form, value-forward Facebook posts for sophisticated attendees",
      icon: <IconBrandFacebook className="h-6 w-6" />,
      link: "/sophisticated/attendees/facebook-posts",
      color: "bg-indigo-600"
    },
    {
      title: "Post-Event Engagement Posts",
      description: "Interactive posts to generate comments from sophisticated attendees",
      icon: <IconMessageCircle className="h-6 w-6" />,
      link: "/sophisticated/attendees/engagement-posts",
      color: "bg-purple-600"
    }
  ];

  const unawareAssets = [
    {
      title: "Pre-Event Email Sequence",
      description: "7-day email sequence to educate and convert unaware prospects",
      icon: <IconMail className="h-6 w-6" />,
      link: "/unaware",
      color: "bg-green-600"
    },
    {
      title: "Pre-Event Facebook Posts",
      description: "Facebook posts to introduce grant writing to unaware audience",
      icon: <IconBrandFacebook className="h-6 w-6" />,
      link: "/unaware/facebook-posts",
      color: "bg-teal-600"
    },
    {
      title: "Pre-Event Facebook Stories",
      description: "Visual story sequence for unaware audience",
      icon: <IconPhoto className="h-6 w-6" />,
      link: "/unaware/facebook-stories",
      color: "bg-cyan-600"
    },
    {
      title: "Pre-Event Engagement Posts",
      description: "Interactive posts to generate comments and engagement",
      icon: <IconMessageCircle className="h-6 w-6" />,
      link: "/unaware/engagement-posts",
      color: "bg-emerald-600"
    }
  ];

  const unawareAttendeeAssets = [
    {
      title: "Post-Event Email Sequence",
      description: "7-day email sequence to convert masterclass attendees into consultation calls",
      icon: <IconMail className="h-6 w-6" />,
      link: "/unaware/attendees",
      color: "bg-amber-600"
    },
    {
      title: "Post-Event Facebook Posts",
      description: "Ultra long-form, value-forward Facebook posts for attendees",
      icon: <IconBrandFacebook className="h-6 w-6" />,
      link: "/unaware/attendees/facebook-posts",
      color: "bg-orange-600"
    },
    {
      title: "Post-Event Engagement Posts",
      description: "Interactive posts to generate comments from attendees",
      icon: <IconMessageCircle className="h-6 w-6" />,
      link: "/unaware/attendees/engagement-posts",
      color: "bg-red-600"
    }
  ];

  const nonprofitAssets = [
    {
      title: "Pre-Event Email Sequence",
      description: "7-day email sequence to drive masterclass registrations from non-profits",
      icon: <IconMail className="h-6 w-6" />,
      link: "/nonprofits",
      color: "bg-emerald-600"
    },
    {
      title: "Facebook Posts",
      description: "Ultra long-form, value-forward Facebook posts for non-profit organizations",
      icon: <IconBrandFacebook className="h-6 w-6" />,
      link: "/nonprofits/facebook-posts",
      color: "bg-teal-600"
    },
    {
      title: "Facebook Stories",
      description: "Visual story sequence for non-profit organizations",
      icon: <IconPhoto className="h-6 w-6" />,
      link: "/nonprofits/facebook-stories",
      color: "bg-blue-600"
    },
    {
      title: "Engagement Posts",
      description: "Interactive posts to generate comments and engagement",
      icon: <IconMessageCircle className="h-6 w-6" />,
      link: "/nonprofits/engagement-posts",
      color: "bg-indigo-600"
    }
  ];

  const nonprofitAttendeeAssets = [
    {
      title: "Post-Event Email Sequence",
      description: "7-day email sequence to drive implementation and consultation bookings",
      icon: <IconMail className="h-6 w-6" />,
      link: "/nonprofits/attendees",
      color: "bg-emerald-600"
    }
  ];

  const masterclassAssets = [
    {
      title: "Masterclass Slides",
      description: "Complete slide deck for the 90-minute grant writing masterclass",
      icon: <IconPresentation className="h-6 w-6" />,
      link: "/masterclass/slides",
      color: "bg-purple-600"
    },
    {
      title: "Slide Breakdown",
      description: "Detailed breakdown of all masterclass slides with descriptions",
      icon: <IconPresentation className="h-6 w-6" />,
      link: "/masterclass/breakdown",
      color: "bg-indigo-600"
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
            Grant Writing Masterclass Assets
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-neutral-600 dark:text-neutral-300 mb-12 text-center max-w-3xl mx-auto"
          >
            Comprehensive collection of marketing and nurture content for both sophisticated and low sophistication audiences
          </motion.p>

          {/* Sophisticated Audience Pre-Event Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <IconUsers className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Sophisticated Audience (Pre-Event)</h2>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm px-4 py-3 rounded-md mb-8 max-w-3xl">
              <strong>Target:</strong> People already writing grants or aware of grant writing
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sophisticatedPreEventAssets.map((asset, index) => (
                <motion.div
                  key={asset.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                  className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 flex flex-col"
                >
                  <div className={`${asset.color} h-2`}></div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className={`${asset.color} bg-opacity-20 dark:bg-opacity-30 p-2 rounded-lg mr-3`}>
                        {asset.icon}
                      </div>
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">{asset.title}</h3>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{asset.description}</p>
                    <Link
                      href={asset.link}
                      className="inline-flex items-center text-sm px-3 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors mt-auto"
                    >
                      View Assets
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sophisticated Audience Post-Event Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <IconUsers className="h-6 w-6 text-indigo-600 dark:text-indigo-400 mr-3" />
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Sophisticated Audience (Post-Event)</h2>
            </div>
            <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 text-sm px-4 py-3 rounded-md mb-8 max-w-3xl">
              <strong>Target:</strong> Masterclass attendees who are experienced with grant writing
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sophisticatedPostEventAssets.map((asset, index) => (
                <motion.div
                  key={asset.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                  className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 flex flex-col"
                >
                  <div className={`${asset.color} h-2`}></div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className={`${asset.color} bg-opacity-20 dark:bg-opacity-30 p-2 rounded-lg mr-3`}>
                        {asset.icon}
                      </div>
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">{asset.title}</h3>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{asset.description}</p>
                    <Link
                      href={asset.link}
                      className="inline-flex items-center text-sm px-3 py-1.5 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors mt-auto"
                    >
                      View Assets
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Unaware Audience Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <IconUsers className="h-6 w-6 text-green-600 dark:text-green-400 mr-3" />
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Low Sophistication Audience (Pre-Event)</h2>
            </div>
            <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm px-4 py-3 rounded-md mb-8 max-w-3xl">
              <strong>Target:</strong> People unfamiliar with grant writing but knowledgeable about online business/agency work
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unawareAssets.map((asset, index) => (
                <motion.div
                  key={asset.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                  className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 flex flex-col"
                >
                  <div className={`${asset.color} h-2`}></div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className={`${asset.color} bg-opacity-20 dark:bg-opacity-30 p-2 rounded-lg mr-3`}>
                        {asset.icon}
                      </div>
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">{asset.title}</h3>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{asset.description}</p>
                    <Link
                      href={asset.link}
                      className="inline-flex items-center text-sm px-3 py-1.5 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors mt-auto"
                    >
                      View Assets
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Unaware Attendees Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <IconUsers className="h-6 w-6 text-amber-600 dark:text-amber-400 mr-3" />
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Low Sophistication Audience (Post-Event)</h2>
            </div>
            <div className="bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 text-sm px-4 py-3 rounded-md mb-8 max-w-3xl">
              <strong>Target:</strong> Masterclass attendees who are new to grant writing
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {unawareAttendeeAssets.map((asset, index) => (
                <motion.div
                  key={asset.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.1 + (index * 0.1) }}
                  className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 flex flex-col"
                >
                  <div className={`${asset.color} h-2`}></div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className={`${asset.color} bg-opacity-20 dark:bg-opacity-30 p-2 rounded-lg mr-3`}>
                        {asset.icon}
                      </div>
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">{asset.title}</h3>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{asset.description}</p>
                    <Link
                      href={asset.link}
                      className="inline-flex items-center text-sm px-3 py-1.5 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition-colors mt-auto"
                    >
                      View Assets
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Non-Profit Organizations (Pre-Event) Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <IconUsers className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mr-3" />
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Non-Profit Organizations (Pre-Event)</h2>
            </div>
            <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm px-4 py-3 rounded-md mb-8 max-w-3xl">
              <strong>Target:</strong> Non-Profit Organizations & NGOs Seeking Grant Funding
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonprofitAssets.map((asset, index) => (
                <motion.div
                  key={asset.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.5 + (index * 0.1) }}
                  className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 flex flex-col"
                >
                  <div className={`${asset.color} h-2`}></div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className={`${asset.color} bg-opacity-20 dark:bg-opacity-30 p-2 rounded-lg mr-3`}>
                        {asset.icon}
                      </div>
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">{asset.title}</h3>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{asset.description}</p>
                    <Link
                      href={asset.link}
                      className="inline-flex items-center text-sm px-3 py-1.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors mt-auto"
                    >
                      View Assets
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Non-Profit Organizations (Post-Event) Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="mb-16"
          >
            <div className="flex items-center mb-6">
              <IconUsers className="h-6 w-6 text-teal-600 dark:text-teal-400 mr-3" />
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Non-Profit Organizations (Post-Event)</h2>
            </div>
            <div className="bg-teal-100 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-sm px-4 py-3 rounded-md mb-8 max-w-3xl">
              <strong>Target:</strong> Non-Profit Organizations & NGOs That Attended the Masterclass
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nonprofitAttendeeAssets.map((asset, index) => (
                <motion.div
                  key={asset.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.8 + (index * 0.1) }}
                  className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 flex flex-col"
                >
                  <div className={`${asset.color} h-2`}></div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className={`${asset.color} bg-opacity-20 dark:bg-opacity-30 p-2 rounded-lg mr-3`}>
                        {asset.icon}
                      </div>
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">{asset.title}</h3>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{asset.description}</p>
                    <Link
                      href={asset.link}
                      className="inline-flex items-center text-sm px-3 py-1.5 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors mt-auto"
                    >
                      View Assets
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Masterclass Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.0 }}
          >
            <div className="flex items-center mb-6">
              <IconPresentation className="h-6 w-6 text-purple-600 dark:text-purple-400 mr-3" />
              <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200">Masterclass Resources</h2>
            </div>
            <div className="bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-sm px-4 py-3 rounded-md mb-8 max-w-3xl">
              <strong>Content:</strong> 90-minute masterclass on building a $10K+/month grant writing business
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              {masterclassAssets.map((asset, index) => (
                <motion.div
                  key={asset.title}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.1 + (index * 0.1) }}
                  className="bg-white dark:bg-neutral-900 rounded-xl overflow-hidden shadow-aceternity relative z-10 border border-neutral-200 dark:border-neutral-800 flex flex-col"
                >
                  <div className={`${asset.color} h-2`}></div>
                  <div className="p-6 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className={`${asset.color} bg-opacity-20 dark:bg-opacity-30 p-2 rounded-lg mr-3`}>
                        {asset.icon}
                      </div>
                      <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">{asset.title}</h3>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">{asset.description}</p>
                    <Link
                      href={asset.link}
                      className={`inline-flex items-center text-sm px-3 py-1.5 ${asset.color} text-white rounded-md hover:bg-opacity-90 transition-colors mt-auto`}
                    >
                      View Resource
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
