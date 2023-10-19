"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Medicus: The Smart Care Assistant for Healthcare",
    description: "Developed and Build a predictive chatbot enabled digital assistant, backed by data, that can help surgeons, patients, and care teams throughout the patient journey by automating some of the crucial tasks done manually such as decision making, post-surgery planning, tracking, and estimating recovery-time, and takes patients' feedback. This was an award-winning project in the AGBI Hackathon.",
    image: "/1.png",
    tag: ["All", "Project"],
    gitUrl: "https://github.com/stars/rahil1303/lists/medicus-project-repositories",
    previewUrl: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/details/projects/",
  },
  {
    id: 2,
    title: "Yelp-inspired Full Stack web application",
    description: "This project was part of the Capstone Project Executive PG Program in Software Development at IIIT Bangalore. Utilized JavaScript, CSS, React (front end), and Java (back end). Conducted thorough API testing using Postman. Enhanced user experience and interaction for the platform.",
    image: "/2.png",
    tag: ["All", "Project"],
    gitUrl: "https://github.com/rahil1303/Yelp-Inspired-Backend-Design-Project",
    previewUrl: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/details/projects/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "This is a front-end React JS e-commerce website built, using data from the Fake Store API. It features a home page where users can add items to their cart and a cart page where they can review their cart, add or remove products, and place a final order",
    image: "/3.png",
    tag: ["All", "Project"],
    gitUrl: "https://github.com/rahil1303/C4_Project_Submission_FrontEnd",
    previewUrl: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/details/projects/",
  },
  {
    id: 4,
    title: "Applications of Disease Detection using Digital Image Processing Techniques (Publication)",
    description: "• The title of this paper was Applications of Disease Detection using Digital Image Processing Techniques which involved a stud y of concepts such as Neural Networks and the machine learning algorithms related to it. The paper also discussed the idea of a disease prediction model based on 3 different diseases and their application in the Medical Field. Paper Published under Library Philosophy and Practical Journal by the University of Nebraska-Lincoln. Shortlisted for the Top 5 projects in the Youth Zest Virtual Project Contest organized by the Indian Institute of Project Technology (IIPT).",
    image: "/4.png",
    tag: ["All", "Publication"],
    gitUrl: "https://digitalcommons.unl.edu/libphilprac/5765/",
    previewUrl: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/details/projects/",
  },
  {
    id: 5,
    title: "Exploring Design Patterns with FSD: Disease Static Monitor",
    description: "The project showcases the practical application of RESTful API development, Factory and Strategy design patterns, and error handling in Java. The application fetches disease count statistics from different sources, offering an insightful tracking mechanism for diseases like COVID-19.",
    image: "/5.png",
    tag: ["All", "Project"],
    gitUrl: "https://github.com/rahil1303/Exploring-Design-Patterns-with-FSD-",
    previewUrl: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/details/projects/",
  },
  {
    id: 6,
    title: "A Novel Approach towards Healthcare using Identity Access Management and Machine Learning (Publication)",
    description: "Presented a digital healthcare platform leveraging Identity Access Management and Machine Learning, addressing healthcare challenges by automating critical processes, enabling smart disease detection, and enhancing doctor-patient collaboration. Paper Published under International Journal For Research in Applied Science and Engineering Technology.",
    image: "/6.png",
    tag: ["All", "Publication"],
    gitUrl: "https://www.academia.edu/83239179/A_Novel_Approach_towards_Healthcare_using_Identity_Access_Management_and_Machine_Learning?auto_accept_coauthor=true",
    previewUrl: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/details/projects/",
  },
  {
    id: 7,
    title: "HPAIR: Harvard Project for Asian and International Relations (HPAIR)",
    description: "Got the opportunity to represent India and my College as a Delegate. Networked and took active participation in all keynote sessions surrounding Leadership, Healthcare, and Social Causes. HPAIR is an internationally recognized student organization at Harvard College, offering a forum of exchange to facilitate discussion of the most important economic, political, and social issues relevant to the Asia-Pacific region.",
    image: "/7.png",
    tag: ["All", "Conferences and Community"],
    gitUrl: "https://drive.google.com/file/d/1Iz5FBHsQnCja4Qptv07w2sw9PKEAkIbM/view",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Communique International Telecom Conference",
    description: "Represented College in the Communique International Telecom Seminar. The annual fest of Symbiosis Institute of Telecom Management. It explored whether the present ecosystem is resilient enough to sustain developments or the converging telecom tumultuous will topple the ICT domain. Imminent speakers from COAI, Oracle, Yes Bank, Accenture, etc. graced the event and shared their rich experiences during panel discussions and keynote sessions.",
    image: "/8.png",
    tag: ["All", "Conferences and Community"],
    gitUrl: "https://drive.google.com/file/d/1AwnpNiOM7mITccdCX-uylnJOEfxY1kCy/view?usp=sharing",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "E-Commerce platform for women empowerment in Rural India",
    description: "As part of my internship project, I worked as a Website Developer Intern. The topic of the project that I worked on was E-Commerce platform for women empowerment. Designed and delivered an E-Commerce website for an NGO, enabling the sale of handloom products and custom artwork, contributing to rural women's economic empowerment and employment. Ensured a timely and seamless deployment of the website.",
    image: "/9.png",
    tag: ["All", "Conferences and Community"],
    gitUrl: "https://www.linkedin.com/in/rahil-sharma-ba5b6718b/details/Experience",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Project"
          isSelected={tag === "Project"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Publication"
          isSelected={tag === "Publication"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Conferences and Community Work"
          isSelected={tag === "Conferences and Community Work"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;