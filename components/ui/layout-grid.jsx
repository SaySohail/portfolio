"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { Card, CardHeader } from './card';
import Link from 'next/link';
import { Github, Link2Icon } from 'lucide-react';
import {LinkPreview} from "../ui/link-preview"

export const LayoutGrid = ({ cards }) => {
  const [selected, setSelected] = useState(null);
  const [lastSelected, setLastSelected] = useState(null);
  const gridRef = useRef(null);

  const handleClick = (card) => {
    setLastSelected(selected);
    setSelected(card);
    if (gridRef.current) {
      const cardElement = gridRef.current.querySelector(`#card-${card.id}`);
      const cardRect = cardElement.getBoundingClientRect();
      const scrollTop = window.scrollY + cardRect.top - window.innerHeight / 2 + cardRect.height / 2;
      const scrollLeft = window.scrollX + cardRect.left - window.innerWidth / 2 + cardRect.width / 2;

      window.scrollTo({
        top: scrollTop,
        left: scrollLeft,
        behavior: 'smooth'
      });
    }
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return (
    <div ref={gridRef} className="w-full h-screen p-10 grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative overflow-auto hide-scrollbar">
      {cards.map((card, i) => (
        <div key={i} id={`card-${card.id}`} className={cn(card.className, "min-h-[179px] md:min-h-[423px]")}>
          <motion.div
            onClick={() => handleClick(card)}
            className={cn(
              card.className,
              "relative overflow-hidden",
              selected?.id === card.id
                ? "rounded-lg cursor-pointer fixed inset-0 h-1/2 w-full md:w-1/2 m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                : lastSelected?.id === card.id
                ? "z-40 bg-white rounded-xl h-full w-full"
                : "bg-white rounded-xl h-full w-full"
            )}
            layout
          >
            {selected?.id === card.id && <SelectedCard selected={selected} />}
            <BlurImage2 card={card} isSelected={selected?.id === card.id} />
          </motion.div>
        </div>
      ))}
      {selected && (
        <motion.div
          onClick={handleOutsideClick}
          className="fixed h-full w-full left-0 top-0 bg-black bg-opacity-50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
        />
      )}
    </div>
  );
};

const BlurImage = ({ card }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className=" h-full w-full">
         <Image
      src={card.thumbnail}
      height="500"
      width="500"
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
    </div>
   
  );
};

const BlurImage2 = ({ card, isSelected }) => {
    const [loaded, setLoaded] = useState(false);
    console.log(card);
    return (
      <div className="h-full w-full">
        <Image
          src={card.thumbnail}
          height="500"
          width="500"
          onLoad={() => setLoaded(true)}
          className={cn(
            "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
            loaded ? "blur-none" : "blur-md"
          )}
          alt="thumbnail"
        />
      {isSelected &&(
        <div className="absolute inset-0 flex justify-center items-center visible md:invisible">
        <Link
              href={card.github}
              target="_blank" 
              rel="noopener noreferrer"
              className='bg-secondary w-[54px] h-[54px] rounded-full flex justify-center items-center scale-100 opacity-100 z-[100]'
            >
              <Github className='text-white' />
            </Link>
        </div>
      )}
       {!isSelected &&(
       
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <h4 className="font-bold text-lg md:text-2xl text-white">{card.title}</h4>
         
        </div>
       )}
      </div>
    );
  };

const BlurCard = ({card}) => {
    const [loaded, setLoaded] = useState(false);
  return (
    <Card className=''>
     <CardHeader className='p-0'>
     <div className=" h-full w-full">       
     <Image
        src={card.thumbnail}
        height="500"
        width="500"
        onLoad={() => setLoaded(true)}
        className={cn(
          "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
          loaded ? "blur-none" : "blur-md"
        )}
        alt="thumbnail"
      />
      </div>
     </CardHeader>
     <div className='h-full px-8 py-6'>
        <h4 className='h4 mb-1'>{"project.name"}</h4>
        <p className='text-muted-foreground text-lg'>{"project.description"}</p>
      </div>
            
    </Card>
    
   
  );
};

const SelectedCard = ({ selected }) => {
  return (
    <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 0.6,
        }}
        className="absolute inset-0 h-full w-full bg-black opacity-60 z-10"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 100,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative px-8 pb-4 z-[70]"
      >
        {selected?.content}
      </motion.div>
    </div>
  );
};
