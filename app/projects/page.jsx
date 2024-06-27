"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../../components/ui/layout-grid";
import {LinkPreview} from "../../components/ui/link-preview"
// const projectsData = {
//   "projects": [
//     {
//       "id": 1,
//       "title": "House in the woods",
//       "description": "A serene and tranquil retreat, this house in the woods offers a peaceful escape from the hustle and bustle of city life.",
//       "className": "md:col-span-2",
//       "thumbnail": "/work/kylian_mbappe.jpg"
//     },
//     {
//       "id": 2,
//       "title": "House above the clouds",
//       "description": "Perched high above the world, this house offers breathtaking views and a unique living experience. It's a place where the sky meets home, and tranquility is a way of life.",
//       "className": "col-span-1",
//       "thumbnail": "/work/chatbot.jpg"
//     },
//     {
//       "id": 3,
//       "title": "Greens all over",
//       "description": "A house surrounded by greenery and nature's beauty. It's the perfect place to relax, unwind, and enjoy life.",
//       "className": "col-span-1",
//       "thumbnail": "/work/aws-cleaning.jpg"
//     },
//     {
//       "id": 4,
//       "title": "Rivers are serene",
//       "description": "A house by the river is a place of peace and tranquility. It's the perfect place to relax, unwind, and enjoy life.",
//       "className": "md:col-span-2",
//       "thumbnail": "/work/social-network.jpg"
//     },
//     {
//       "id": 5,
//       "title": "Mountain Escape",
//       "description": "Nestled in the mountains, this home offers stunning views and a cozy retreat for nature lovers.",
//       "className": "md:col-span-2",
//       "thumbnail": "/work/weather-forecast.jpg"
//     },
//     {
//       "id": 6,
//       "title": "Desert Oasis",
//       "description": "A beautiful oasis in the desert, providing a perfect blend of luxury and natural beauty.",
//       "className": "col-span-1",
//       "thumbnail": "/work/taxi-company.jpg"
//     },
//     {
//       "id": 7,
//       "title": "Urban Chic",
//       "description": "A stylish home in the heart of the city, combining modern design with urban convenience.",
//       "className": "col-span-1",
//       "thumbnail": "/work/xml-query.jpg"
//     },
//     {
//       "id": 8,
//       "title": "Coastal Retreat",
//       "description": "This home by the sea offers stunning ocean views and a relaxing atmosphere.",
//       "className": "md:col-span-2",
//       "thumbnail": "/work/eastenders.jpg"
//     },
//     {
//       "id": 9,
//       "title": "Lakefront Paradise",
//       "description": "A beautiful home on the lake, perfect for water enthusiasts and those seeking tranquility.",
//       "className": "md:col-span-2",
//       "thumbnail": "/work/fake-news.jpg"
//     },
//     {
//       "id": 10,
//       "title": "Forest Haven",
//       "description": "Surrounded by trees, this house offers a peaceful retreat in the heart of the forest.",
//       "className": "col-span-1",
//       "thumbnail": "/work/vowel-formant.jpg"
//     },
//     {
//       "id": 11,
//       "title": "Iris Plant Classification",
//       "description": "Iris Plant Classification Using Logistic Regression and Neural Networks",
//       "className": "md:col-span-2",
//       "thumbnail": "/work/iris.jpg"
//     },
//     {
//       "id": 12,
//       "title": "Predicting Diabetes Progression",
//       "description": "Predicting Diabetes Progression Using Linear Regression and Regularization Techniques",
//       "className": "col-span-1",
//       "thumbnail": "/work/diabetes.jpg"
//     }
//   ]
// };


const Projects = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("/work/projects.json")
      .then((response) => response.json())
      .then((data) => {
        const projects = data.projects.map((project) => ({
          id: project.id,
          content: <Skeleton title={project.title} description={project.description} github={project.github} />,
          className: project.className,
          thumbnail: project.thumbnail,
          title: project.title,
          github: project.github,
        }));
        setCards(projects);
      });
  }, []);
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-12 text-center mx-auto">
          My Projects
        </h2>
        <div className="h-screen py-2 w-full overflow-y-auto hide-scrollbar">
          <LayoutGrid cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default Projects;

const Skeleton = ({ title, description, github }) => {
  return (
    <div>
    <LinkPreview url={github}  
      target="_blank"
      rel="noopener noreferrer"><p className="font-bold text-4xl text-white">{title}</p></LinkPreview>
      
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p>
    </div>
  );
};


// const SkeletonOne = () => {
//   return (
//     <div>
//       <p className="font-bold text-4xl text-white">House in the woods</p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A serene and tranquil retreat, this house in the woods offers a peaceful
//         escape from the hustle and bustle of city life.
//       </p>
//     </div>
//   );
// };

// const SkeletonTwo = () => {
//   return (
//     <div>
//       <p className="font-bold text-4xl text-white">House above the clouds</p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         Perched high above the world, this house offers breathtaking views and a
//         unique living experience. It&apos;s a place where the sky meets home,
//         and tranquility is a way of life.
//       </p>
//     </div>
//   );
// };
// const SkeletonThree = () => {
//   return (
//     <div>
//       <p className="font-bold text-4xl text-white">Greens all over</p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A house surrounded by greenery and nature&apos;s beauty. It&apos;s the
//         perfect place to relax, unwind, and enjoy life.
//       </p>
//     </div>
//   );
// };
// const SkeletonFour = () => {
//   return (
//     <div>
//       <p className="font-bold text-4xl text-white">Rivers are serene</p>
//       <p className="font-normal text-base text-white"></p>
//       <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//         A house by the river is a place of peace and tranquility. It&apos;s the
//         perfect place to relax, unwind, and enjoy life.
//       </p>
//     </div>
//   );
  
// };


// const SkeletonFive = () => (
//   <div>
//     <p className="font-bold text-4xl text-white">Mountain Escape</p>
//     <p className="font-normal text-base text-white"></p>
//     <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//       Nestled in the mountains, this home offers stunning views and a cozy retreat for nature lovers.
//     </p>
//   </div>
// );

// const SkeletonSix = () => (
//   <div>
//     <p className="font-bold text-4xl text-white">Desert Oasis</p>
//     <p className="font-normal text-base text-white"></p>
//     <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//       A beautiful oasis in the desert, providing a perfect blend of luxury and natural beauty.
//     </p>
//   </div>
// );
// const SkeletonSeven = () => (
//   <div>
//     <p className="font-bold text-4xl text-white">Urban Chic</p>
//     <p className="font-normal text-base text-white"></p>
//     <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//       A stylish home in the heart of the city, combining modern design with urban convenience.
//     </p>
//   </div>
// );

// const SkeletonEight = () => (
//   <div>
//     <p className="font-bold text-4xl text-white">Coastal Retreat</p>
//     <p className="font-normal text-base text-white"></p>
//     <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//       This home by the sea offers stunning ocean views and a relaxing atmosphere.
//     </p>
//   </div>
// );

// const SkeletonNine = () => (
//   <div>
//     <p className="font-bold text-4xl text-white">Lakefront Paradise</p>
//     <p className="font-normal text-base text-white"></p>
//     <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//       A beautiful home on the lake, perfect for water enthusiasts and those seeking tranquility.
//     </p>
//   </div>
// );

// const SkeletonTen = () => (
//   <div>
//     <p className="font-bold text-4xl text-white">Forest Haven</p>
//     <p className="font-normal text-base text-white"></p>
//     <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
//       Surrounded by trees, this house offers a peaceful retreat in the heart of the forest.
//     </p>
//   </div>
// );

// const cards = [
//   {
//     id: 1,
//     content: <SkeletonOne />,
//     className: "md:col-span-2",
//     thumbnail:
//       "/work/kylian_mbappe.jpg",
//       title: "Clustering of Football Players Similar to Kylian Mbappe using K-means and GMM algorithms"
//   },
//   {
//     id: 2,
//     content: <SkeletonTwo />,
//     className: "col-span-1",
//     thumbnail:
//       "/work/chatbot.jpg",
//       title:"OpenAI Personal ChatBot"
//   },
//   {
//     id: 3,
//     content: <SkeletonThree />,
//     className: "col-span-1",
//     thumbnail:
//       "/work/aws-cleaning.jpg",
//       title:"House-keeping WhatsApp Notifier"
//   },
//   {
//     id: 4,
//     content: <SkeletonFour />,
//     className: "md:col-span-2",
//     thumbnail: "/work/social-network.jpg",
//           title:"Haskell Social Network Simulation"
//   },
//   {
//     id: 5,
//     content: <SkeletonFive />,
//     className: "md:col-span-2",
//     thumbnail:
//       "/work/weather-forecast.jpg",
//       title: "Haskell Weather Data Harvesting App"
//   },
//   {
//     id: 6,
//     content: <SkeletonSix />,
//     className: "col-span-1",
//     thumbnail:
//       "/work/taxi-company.jpg",
//       title: "Semi-structured database for a taxi company using MongoDB"
//   },
//   {
//     id: 7,
//     content: <SkeletonSeven />,
//     className: "col-span-1",
//     thumbnail:
//       "/work/xml-query.jpg",
//       title: "Leveraging XQuery for Advanced XML Data Analysis and Word Frequency Insights"
//   },
//   {
//     id: 8,
//     content: <SkeletonEight />,
//     className: "md:col-span-2",
//     thumbnail:
//       "/work/eastenders.jpg",
//       title:"NLP: Optimizing Character Vectors for Enhanced Retrieval in Eastenders Scripts"
//   },
//   {
//     id: 9,
//     content: <SkeletonNine />,
//     className: "md:col-span-2",
//     thumbnail:
//       "/work/fake-news.jpg",
//       title:"Fake News Detection using Support Vector Machine (SVM) Classifier"
//   },
//   {
//     id: 10,
//     content: <SkeletonTen />,
//     className: "col-span-1",
//     thumbnail:
//       "/work/vowel-formant.jpg",
//       title:"Clustering Vowel Formant Frequencies Using Mixture of Gaussians and EM Algorithm"
//   },
//   {
//     id: 11,
//     content: <SkeletonTen />,
//     className: "md:col-span-2",
//     thumbnail:
//       "/work/iris.jpg",
//       title:"Iris Plant Classification Using Logistic Regression and Neural Networks"
//   },
//   {
//     id: 11,
//     content: <SkeletonTen />,
//     className: "col-span-1",
//     thumbnail:
//       "/work/diabetes.jpg",
//       title:"Predicting Diabetes Progression Using Linear Regression and Regularization Techniques"
//   },
// ];
// export default Projects;