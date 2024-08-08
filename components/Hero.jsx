"use client"
import Link from 'next/link';
import { Button } from './ui/button';
import { Download, Send } from 'lucide-react';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from 'react-icons/ri';

// components
import DevImg from './DevImg';
import Badge from './Badge';
import Socials from './Socials';
import { TextGenerateEffect } from './ui/text-generate-effect';

const Hero = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/hero/hero_animation.json'
    });

    return () => instance.destroy();
  }, []);


  return (
    <section className='py-18 xl:py-22 h-[84vh] xl:pt-24 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none mb-96 xl:mb-0 hide-scrollbar'>
      <div className='container mx-auto'>
        <div className='flex justify-between gap-x-8'>
          {/* text */}
          <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
            <div className='text-xs uppercase font-semibold mb-4 text-primary tracking-[4px]'>
            AI / Full Stack Developer
            </div>
          
            <TextGenerateEffect className='h1 mb-4' words='Hello, my name is Sayed Sohail'> </TextGenerateEffect>
            <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
            <br/>
            As an AI and Machine Learning enthusiast specializing in NLP, I harness the power of advanced data science to drive innovation and optimize performance across a variety of industries. With a robust foundation in full stack development, I deliver cutting-edge solutions that enhance user experience and maximize operational efficiency. <br/><br/>
            </p>


            {/* buttons */}
            <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
              <Link href='/contact'>
                <Button className='gap-x-2'>
                  Contact me <Send size={18} />
                </Button>
              </Link>
              <a href="/hero/SayedSohailCV.pdf" download="SayedSohailCV.pdf" className="no-underline">
              <Button variant='secondary' className='gap-x-2'>
                Download CV
                <Download size={18} />
              </Button>
              </a>
            
            </div>
            {/* socials */}
            <Socials
              containerStyles='flex px-4 gap-x-6 mx-auto xl:mx-0'
              iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
            />
          </div>
          
          <div className='hidden xl:flex relative'>
          <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'>
          <div  ref={animationContainer}></div>
          </div>
          </div>
         
        </div>
        {/* icon */}
        <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
          <RiArrowDownSLine className='text-3xl text-primary' />
        </div>
      </div>
    </section>
  );
};

export default Hero;
