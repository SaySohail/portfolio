// components

import About from '@/components/About';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';
import Cta from '@/components/Cta';

import {StickyScrollRevealDemo} from '@/components/StickyScrollRevealDemo'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <StickyScrollRevealDemo />
      <Services />
      <Work />
      <Reviews />
      <Cta />
    </main>
  );
}
