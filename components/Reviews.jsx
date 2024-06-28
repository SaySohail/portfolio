"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function Reviews() {
  return (
<section className='mb-12 xl:mb-32 w-full'>
  <div className='w-full max-w-none px-4 sm:px-6 lg:px-8'>
    <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden w-full">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  </div>
</section>

    
  );
}

const testimonials = [
  {
    quote:
      "Thank you for your exceptional dedication and comprehensive support in both the development and ongoing maintenance of the Demand Tool. Your expertise and proactive approach have greatly enhanced our operational efficiency and have been instrumental in streamlining our processes. Your efforts are greatly appreciated!",
    name: "Vijay Kirthi Mysore",
    title: "Vice President - PS India, Software Ag",
  },
  {
    quote:
      "Sohail has excelled as a newcomer, quickly mastering new technologies like AngularJS and delivering his tasks effectively. His analytical skills are impressive, enabling him to resolve issues creatively. He consistently demonstrates thorough ownership and dedication in his work, seeks continuous improvement, and communicates precisely. His deep analytical approach and teamwork make him a highly effective and reliable team member.",
    name: "Supriyo Dey",
    title: "Senior Principal Consultant, Software Ag",
  },
  {
    quote: "I am deeply appreciative of the exemplary support provided to the HQ Global Sourcing project. The development of a mobile app and leadership in the UI rewrite for an E-Commerce/Procurement web app are commendable achievements. Transitioning from webMethods CAF to a Single Page Application using Angular 7 and JBoss was seamlessly executed under my guidance. This significant enhancement not only improved user experience but also streamlined our operations.",
    name: "Bharath Vutukuru",
    title: "Senior Vice President, PS India APJ & ME, Software Ag",
  },
  {
    quote:
      "Sayed Sohail has excelled as an LLMOps Intern, showing consistent eagerness and passion. He made substantial contributions to our products through his involvement in Prompt Engineering, Fine-Tuning, Architecture Designs, and Frontend Development for our LLM-powered applications",
    name: "Ivan Tryskyba",
    title: "CEO, Caseguru",
  },
];
