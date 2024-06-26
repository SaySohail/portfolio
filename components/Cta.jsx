import { Button } from './ui/button';
import Link from 'next/link';
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
const words = [
  { text: "Let's " },
  { text: "connect " },
  { text: "and " },
  { text: "explore " },
  { text: "how " },
  { text: "we " },
  { text: "can " },
  { text: "transform " },
  { text: "the " },
  { text: "future " },
  { text: "together!" }
];
const Cta = () => {
  return (
    <section className='py-24 bg-tertiary dark:bg-secondary/40'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center justify-center'>
        <TypewriterEffect words={words} className='h2 max-w-xl text-center mb-8' />
          <Link href='/contact'>
            <Button>Contact me</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
