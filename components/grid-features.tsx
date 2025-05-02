"use client";

import { cn } from "@/lib/utils";
import {
  IconBuildingBank,
  IconUsers,
  IconCurrencyDollar,
  IconChartBar,
  IconUsersGroup,
  IconHeadset,
  IconAward,
  IconBellRinging,
} from "@tabler/icons-react";
import { motion, MotionConfig } from "framer-motion";

export const GridFeatures = () => {
  const features = [
    {
      title: "Built for Non-Profits",
      description:
        "Specially designed for non-profits, educational institutions, and community organizations.",
      icon: <IconBuildingBank className="text-blue-500" />,
    },
    {
      title: "User-Friendly Interface",
      description:
        "Intuitive platform that requires no grant writing experience to get started.",
      icon: <IconUsers className="text-purple-500" />,
    },
    {
      title: "Affordable Pricing",
      description:
        "Transparent pricing with plans that scale with your organization's needs.",
      icon: <IconCurrencyDollar className="text-green-500" />,
    },
    {
      title: "99.9% Success Rate",
      description: "Grant Writer AI has helped secure funding for thousands of projects.",
      icon: <IconChartBar className="text-orange-500" />,
    },
    {
      title: "Collaborative Features",
      description: "Work together with your team to create and review grant proposals.",
      icon: <IconUsersGroup className="text-pink-500" />,
    },
    {
      title: "Expert Support",
      description:
        "Access to grant writing experts and resources 24/7.",
      icon: <IconHeadset className="text-indigo-500" />,
    },
    {
      title: "Guaranteed Results",
      description:
        "We're committed to your success with our satisfaction guarantee.",
      icon: <IconAward className="text-yellow-500" />,
    },
    {
      title: "Grant Alerts",
      description: "Real-time notifications about new grant opportunities and deadlines.",
      icon: <IconBellRinging className="text-red-500" />,
    },
  ];
  return (
    <MotionConfig reducedMotion="user">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Feature {...feature} index={index} />
          </motion.div>
        ))}
      </div>
    </MotionConfig>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-500 group absolute inset-0 h-full w-full bg-gradient-to-t from-blue-500/5 via-purple-500/5 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover:opacity-100 transition duration-500 group absolute inset-0 h-full w-full bg-gradient-to-b from-blue-500/5 via-purple-500/5 to-transparent pointer-events-none" />
      )}
      <motion.div 
        className="mb-4 relative z-10 px-10"
        whileHover={{ scale: 1.1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {icon}
      </motion.div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-gradient-to-b from-blue-500 to-purple-500 group-hover:h-12 transition-all duration-300" />
        <span className="group-hover:translate-x-2 transition duration-300 inline-block">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted dark:text-muted-dark max-w-xs mx-auto relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
