// 'use client';
// import styles from './page.module.css'
// import { useRef, useEffect } from 'react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import gsap from 'gsap';
// import { motion } from "framer-motion";
// import {HeroHighlight, Highlight} from "@/components/ui/hero-highlight"

// const phrase = `I'm Sayed Sohail Pasha Peerzade, a seasoned computer science professional based in London. With a Master's degree in Computer Science from Queen Mary University and a Bachelor's in Engineering from PES Institute of Technology, Bangalore, I have developed a diverse skill set that spans across front-end development, machine learning, AI technologies, and more.

// Professionally, my roles have included enhancing AI systems as a Data Science Consultant at Outlier in San Francisco, leading UI development for a Legal AI platform at Insight Dev in Glasgow, and spearheading mobile and web application projects at Software AG in Bangalore. These roles have leveraged my deep expertise in Python, JavaScript, TypeScript, Angular, React, Next.js, SwiftUI, and machine learning frameworks, contributing to advanced projects such as AI-driven legal tools and complex data pattern analysis.

// My project work includes innovative applications like clustering football players with K-means, detecting fake news using SVM classifiers, and implementing vector space semantics in script data. Each project reflects my ability to integrate multiple technologies and methodologies to deliver impactful solutions.

// `;
// export default function Aboutme() {
//     let refs = useRef([]);
//     const body = useRef(null);
//     const container = useRef(null);
//     let scrollTriggerInstance = useRef(null);  // Ref to store the ScrollTrigger instance

//     useEffect(() => {
//         gsap.registerPlugin(ScrollTrigger);

//         const createAnimation = () => {
//             const animation = gsap.fromTo(refs.current, {
//                 opacity: 0.1,
//             }, {
//                 opacity: 1,
//                 scrollTrigger: {
//                     trigger: container.current,
//                     scrub: true,
//                     start: 'top center',
//                     end: `+=${window.innerHeight * (window.innerWidth < 768 ? 0.5 : 1.5)}`,
//                 },
//                 ease: 'none',
//                 stagger: 0.1,
//             });
//             scrollTriggerInstance.current = animation.scrollTrigger;  // Store the ScrollTrigger instance
//         };

//         createAnimation();

//         function handleResize() {
//             ScrollTrigger.refresh();
//         }

//         window.addEventListener('resize', handleResize);

//         return () => {
//             window.removeEventListener('resize', handleResize);
//             if (scrollTriggerInstance.current) {
//                 scrollTriggerInstance.current.kill();  // Kill the stored ScrollTrigger instance
//             }
//         };
//     }, []);

    
  
//     const createAnimation = () => {
//         gsap.fromTo(refs.current, {
//             opacity: 0.1,
//         }, {
//             opacity: 1,
//             scrollTrigger: {
//                 trigger: container.current,
//                 scrub: true,
//                 start: 'top center', // Adjust this as needed
//                 end: `+=${window.innerHeight * (window.innerWidth < 768 ? 0.5 : 1.5)}`, // Responsive adjustment
//             },
//             ease: 'none',
//             stagger: 0.1,
//         });
//     };
  
//     const splitWords = (phrase) => {
//         let paragraphs = phrase.split(/\n\s*\n/);
//         let body = paragraphs.map((paragraph, pIdx) => (
//             <p key={`paragraph_${pIdx}`} style={{ display: 'inline-block', marginBottom: '1em' }}>
//                 {paragraph.split(/(\s+)/).map((part, i) => {
//                     if (part.match(/\s+/)) {
//                         return <span key={`space_${pIdx}_${i}`}>&nbsp;</span>;
//                     } else {
//                         return (
//                             <span key={`${part}_${pIdx}_${i}`} style={{ display: 'inline-block' }} className='text-xl px-0.5'>
//                                 {splitLetters(part)}
//                             </span>
//                         );
//                     }
//                 })}
//             </p>
//         ));
//         return body;
//     };
  
//     const splitLetters = (word) => {
//         let letters = [];
//         word.split('').forEach((letter, i) => {
//             letters.push(
//                 <span key={letter + '_' + i} ref={(el) => { refs.current.push(el); }} style={{ display: 'inline-block', opacity: 0 }} className='text-2xl'>
//                     {letter}
//                 </span>
//             );
//         });
//         return letters;
//     };
  
//     return (
//         <section className='xl:h-[860px] pb-12 xl:py-24' >
//         <div ref={body} className='container mx-auto'>
//              <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
//           About me
//             </h2>
//             <div ref={body} className='div flex-row flex-end px-4'>
//                {splitWords(phrase)}
//                      </div>
//              </div>
              
//         </section>

//     );
// }

"use client";
import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/hero-highlight";

export default function Aboutme() {
    return (
        <section className='xl:h-[860px] pb-8 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                    About me
                </h2>
                <motion.div // Changed from h1 to div for semantic correctness
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: [20, -5, 0],
                    }}
                    transition={{
                        duration: 0.5,
                        ease: [0.4, 0.0, 0.2, 1],
                    }}
                    className="text-2xl px-4 leading-relaxed lg:leading-snug mx-auto"
                >
                    <p>I'm Sayed Sohail Pasha Peerzade, a seasoned computer science professional based in London. With a Master's degree in Computer Science from Queen Mary University and a Bachelor's in Engineering from PES Institute of Technology, Bangalore, I have developed a diverse skill set that spans across front-end development, machine learning, AI technologies, and more.</p><br/>
                    
                    <p>Professionally, my roles have included enhancing AI systems as a Data Science Consultant at Outlier in San Francisco, leading UI development for a Legal AI platform at Insight Dev in Glasgow, and spearheading mobile and web application projects at Software AG in Bangalore. These roles have leveraged my deep expertise in <Highlight className="text-black dark:text-white">
                    Python, JavaScript, TypeScript, Angular, React, Next.js, SwiftUI, and machine learning frameworks,
                    </Highlight> contributing to advanced projects such as AI-driven legal tools and complex data pattern analysis.</p> <br/>

                    <p>My project work includes innovative applications like clustering football players with K-means, detecting fake news using SVM classifiers, and implementing vector space semantics in script data. Each project reflects my ability to integrate multiple technologies and methodologies to deliver impactful solutions.</p>
                </motion.div>
            </div>
        </section>
    );
}
