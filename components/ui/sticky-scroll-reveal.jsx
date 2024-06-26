"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import JobCard from "@/components/ui/jobcard";
export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    // uncomment line below and comment the next if you DON'T want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    // "var(--slate-900)",
    // "var(--black)",
    // "var(--neutral-900)",
  ];
  const linearGradients = [
    // "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 50%, #ffffff 100%)",
    // "linear-gradient(62deg, #FFDEE9 0%, #B5FFFC 33%, #ffffff 66%, #ffffff 100%)",
    // "linear-gradient(62deg, #FFDEE9 0%, #B5FFFC 33%, #ffffff 66%, #ffffff 100%)",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <section className='xl:h-[860px] pb-12 xl:py-24'>
        <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          Experience
        </h2>
        <div>
        <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="h-[35rem] overflow-y-auto  flex justify-between relative space-x-10 rounded-md p-10 hide-scrollbar overflow-auto"
      ref={ref}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl">
          {content.map((item, index) => (
            <div key={item.companyName + index} className="my-20">
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-3xl font-bold text-black dark:text-white py-1"
              >
                {item.title}
              </motion.h2>
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-xl font-semibold  text-gray-800 dark:text-gray-200 py-1"
              >
                {item.companyName}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-sm font-light max-w-sm mb-8 text-gray-800 dark:text-gray-200 py-1"
              >
                {item.year}
              </motion.p>
              <ul className="flex flex-col space-y-2 mt-2">
                    {item.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="text-muted-foreground text-xl font-normal">
                     {resp}
                      </li>
                    ))}
                  </ul>
            </div>
          ))}
          <div className="h-40" />
        </div>
      </div>
      <div
        style={{ background: backgroundGradient }}
        className={cn(
          "hidden lg:block w-80 rounded-md sticky top-10 overflow-hidden",
          contentClassName
        )}
      >
        {/* {content[activeCard].content ?? null} */}
        <JobCard
  logo={content[activeCard].path}
  companyName={content[activeCard].companyName}
  postedDaysAgo="30"
  jobTitle={content[activeCard].title}
  jobType={content[activeCard].jobType}
  skills={content[activeCard].skills}
  location={content[activeCard].location}
  style={{ background: backgroundGradient }} // Pass the background style

/>

      </div>
    </motion.div>
        </div>
        </div>
    </section>
    
  );
};
