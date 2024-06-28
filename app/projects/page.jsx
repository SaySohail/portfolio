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
        <div className="h-screen py-2 w-full overflow-y-auto hide-scrollbar overflow-x-hidden">
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
      rel="noopener noreferrer"><p className="font-bold text-lg md:text-2xl">{description}</p></LinkPreview>
      
      {/* <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {description}
      </p> */}
    </div>
  );
};

