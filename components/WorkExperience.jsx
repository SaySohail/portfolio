"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

const experience = [
  {
    "companyName": "Outlier AI",
    "location": "San Francisco, United States",
    "title": "Data Science Consultant",
    "year": "Feb 2024 - Present",
    "responsibilities": [
      "Enhanced the efficiency of AI systems, including generative language models, through the refinement of 500+ outputs and rigorous training on high-quality programming tasks.",
      "Achieved significant performance improvements using advanced data science frameworks to rank and evaluate model performance via Reinforcement Learning from Human Feedback (RLHF) protocols.",
      "Leveraged machine learning algorithms to analyze and identify complex patterns and irregularities in data, enhancing decision-making processes.",
      "Conducted extensive code reviews and rewrote low-quality model responses, ensuring the delivery of high-quality software solutions.",
      "Analyzed and fine-tuned over 100 code segments in Python and SQL for next-generation AI applications, increasing precision and functionality."
    ],
    "jobType": "Remote",
    "skills": [
      "Python",
      "SQL",
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "Keras",
      "Pandas",
      "Numpy"
    ],
    path: "/about/outlier.jpeg"
  },
  {
    "companyName": "Insight Dev",
    "location": "Glasgow, United Kingdom",
    "title": "LLMOps Intern",
    "year": "Jan 2024 - Mar 2024",
    "responsibilities": [
      "Spearheaded the UI development of a Legal AI platform using Next.js and Tailwind CSS, focusing on creating intuitive and responsive user interfaces.",
      "Integrated Google and Facebook OAuth social logins, enhancing user accessibility and security.",
      "Leveraged Husky for executing git hooks to maintain high code quality. Implemented linting, code formatting, and type checking.",
      "Developed and managed the API layer using Axios, enabling efficient data retrieval and manipulation for various platform functionalities.",
      "Set up Jest for unit testing and Cypress for end-to-end automated testing, ensuring the reliability of the platform.",
      "Spearheaded the integration of advanced NLP models using OpenAI's GPT-4 and Cohere's reranking endpoint, significantly enhancing the platform's legal document summarization and case analysis capabilities.",
      "Developed AI-driven chat functionalities, employing LangChain and RAG for context-aware, legally accurate conversations.",
      "Conducted rigorous evaluations of the RAG model's performance in legal contexts, employing a variety of metrics such as the RAG Triad of metrics, ROUGE, ARES, BLEU, and RAGAs."
    ],
    "jobType": "Internship",
    "skills": [
      "Next.js",
      "OpenAI GPT-4",
      "Flask",
      "Tailwind CSS",
      "OAuth",
      "Jest",
      "Cypress",
      "NLP",
      "RAG"
    ],
    path: "/about/insight-dev.jpeg"
  },
  {
    "companyName": "Software AG",
    "location": "Bangalore, India",
    "title": "Associate Consultant",
    "year": "Sep 2018 - Aug 2022",
    "responsibilities": [
      "Led a UI rewrite for an E-Commerce/Procurement web app using Angular 7 and JBoss, enhancing performance and compatibility.",
      "Developed a mobile app in SwiftUI with an MVVM architecture, incorporating custom animations and reusable UI components.",
      "Implemented Single Sign-On with Microsoft Authenticator Library and managed reactive form validations using the Combine framework.",
      "Created solutions for Complaints Management integrating Single Sign-On with OKTA and Agile Apps.",
      "Constructed Full-Text Search queries in SQL Server and implemented automated Continuous Integration and Deployment using Jenkins.",
      "Developed i18n localization for German and English users and built a search engine for the E-commerce application."
    ],
    "jobType": "Full-time",
    "skills": [
      "React",
      "Python",
      "Java",
      "SwiftUI",
      "MVVM",
      "webMethods",
      "AWS",
      "Angular",
      "JBoss",
      "Combine Framework",
      "Agile Apps"
    ],
    path: "/about/software-ag.jpeg"
  }
];

export function WorkExperience({onScrollEnd}) {
  return (
    <div className="p-10">
      <StickyScroll content={experience} onScrollEnd={onScrollEnd} />
    </div>
  );
}
