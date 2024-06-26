// 'use client';

// import Image from 'next/image';

// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';

// // import swiper react components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // import swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';

// // import required modules
// import { Pagination } from 'swiper/modules';

// const reviewsData = [
//   {
//     avatar: '/reviews/avatar-1.png',
//     name: 'Richard Thompson',
//     job: 'Chef',
//     review:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
//   },
//   {
//     avatar: '/reviews/avatar-2.png',
//     name: 'Evelyn Anderson',
//     job: 'Interior Designer',
//     review:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
//   },
//   {
//     avatar: '/reviews/avatar-3.png',
//     name: 'John Doe',
//     job: 'Game Dev',
//     review:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
//   },
//   {
//     avatar: '/reviews/avatar-4.png',
//     name: 'Emily Smith',
//     job: 'Therapist',
//     review:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
//   },
//   {
//     avatar: '/reviews/avatar-5.png',
//     name: 'Oliver Taylor',
//     job: 'Engineer',
//     review:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
//   },
//   {
//     avatar: '/reviews/avatar-6.png',
//     name: 'Mason Wilson',
//     job: 'Video Editor',
//     review:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos quo voluptas tempora delectus dicta.',
//   },
// ];

// const Reviews = () => {
//   return (
//     <section className='mb-12 xl:mb-32'>
//       <div className='container mx-auto'>
//         <h2 className='section-title mb-12 text-center mx-auto'>Reviews</h2>
//         {/* slider */}
//         <Swiper
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             1400: { slidesPerView: 3 },
//           }}
//           spaceBetween={30}
//           modules={[Pagination]}
//           pagination={{
//             clickable: true,
//           }}
//           className='h-[350px]'
//         >
//           {reviewsData.map((person, index) => {
//             return (
//               <SwiperSlide key={index}>
//                 <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
//                   <CardHeader className='p-0 mb-10'>
//                     <div className='flex items-center gap-x-4'>
//                       {/* image */}
//                       <Image
//                         src={person.avatar}
//                         width={70}
//                         height={70}
//                         alt=''
//                         priority
//                       />
//                       {/* name */}
//                       <div className='flex flex-col'>
//                         <CardTitle>{person.name}</CardTitle>
//                         <p>{person.job}</p>
//                       </div>
//                     </div>
//                   </CardHeader>
//                   <CardDescription className='text-lg text-muted-foreground'>
//                     {person.review}
//                   </CardDescription>
//                 </Card>
//               </SwiperSlide>
//             );
//           })}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default Reviews;
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
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];
