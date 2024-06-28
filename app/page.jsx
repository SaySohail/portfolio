

"use client";
import React, { useState } from "react";import Hero from '@/components/Hero';
import Work from '@/components/Work';
import {Reviews} from '@/components/Reviews';
import Cta from '@/components/Cta';
import AboutMe from '@/components/Aboutme'

import {WorkExperience} from '@/components/WorkExperience'


export default function Home() {
  const [enableScroll, setEnableScroll] = useState(false);

  const handleScrollEnd = (isEndReached) => {
    setEnableScroll(isEndReached);
  };
  return (
    <main  className={`hide-scrollbar ${enableScroll ? '' : 'overflow-hidden'}`}>
      <Hero />
      {/* <About /> */}
      <AboutMe/>
      <WorkExperience onScrollEnd={handleScrollEnd} />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
