
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
                    className="text-2xl px-4 leading-relaxed lg:leading-snug mx-auto text-start"
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
