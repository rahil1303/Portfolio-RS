"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    
    {
        title: "Skills",
        id: "skills",
        content: (
          <div className="p-4 bg-black rounded-lg text-white space-y-4">
            <div className="skills-category">
              <h3 className="text-lg font-bold text-[#FF6B6B]">Technological Skills</h3>
              <ul className="list-disc pl-4">
                <li>Programming: JavaScript, NodeJS, Java, Python, MATLAB, SQL, R programming</li>
                <li>Data Science: Pandas, Confluent Kafka, NumPy, Matplotlib, BeautifulSoup, Seaborn</li>
                <li>Machine Learning Libraries: SciPy, PyTorch, Theano, Keras, Scikit-Learn, TensorFlow, NLTK, OpenCV</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3 className="text-lg font-bold text-[#FF6B6B]">Cloud Technologies</h3>
              <ul className="list-disc pl-4">
                <li>Snowflake, Microsoft Azure, AWS Lambda, Databricks, IBM Watson Cloud, Kafka, Google Cloud</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3 className="text-lg font-bold text-[#FF6B6B]">Frameworks and API’s</h3>
              <ul className="list-disc pl-4">
                <li>Material UI, Django, Bootstrap, Stitch, Docker, Avro Schema Registry</li>
              </ul>
            </div>
            <div className="skills-category">
              <h3 className="text-lg font-bold text-[#FF6B6B]">Other Skills</h3>
              <ul className="list-disc pl-4">
                <li>Version Control System (VCS): Git, GitHub, GitLab, BitBucket</li>
                <li>Methodologies: Waterfall, Agile</li>
                <li>Functional Skills: Communication, Organization Management, Research & Exploration, Information Management</li>
                <li>Relevant Calculus, Probability, and Database Management Knowledge</li>
              </ul>
            </div>
          </div>
        ),
      },
      
  {
    title: "Education",
    id: "education",
    content: (
      <div className="p-4 bg-black rounded-lg text-white space-y-4">
        <div className="education-item space-y-2">
          <h3 className="text-lg font-bold text-[#FF6B6B]">IIIT Bangalore, Bangalore</h3>
          <p className="text-white">Executive PG Program in Software Development</p>
        </div>
        <div className="education-item space-y-2">
          <h3 className="text-lg font-bold text-[#FF6B6B]">Symbiosis International University, Pune</h3>
          <p className="text-white">Bachelors of Technology in Electronics and Tele-Communication</p>
        </div>
      </div>
    ),
  },  
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="p-4 bg-black rounded-lg text-white space-y-4">
        <ul className="list-disc pl-4">
          <li>Snowflake SnowPro COF-CO2 for Data Engineers</li>
          <li>Databricks Lakehouse Data Engineer Associate</li>
          <li>Applied Data Science Specialization by IBM</li>
          <li>Microsoft Azure Fundamentals AZ-900</li>
          <li>Amazon Web Services Solutions Architect Associate</li>
        </ul>
      </div>
    ),
  }
]
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
              I am a dedicated software enthusiast with an unquenchable thirst for knowledge. 
              I find genuine joy in acquiring new skills and diving into complex challenges. 
              My passion lies in tackling intricate projects and solving demanding problems, 
              drawing on a broad spectrum of both technical and interpersonal skills.

              One of my standout qualities is my ability to learn quickly, allowing me to 
              adapt and excel in various technical domains. As I look towards the future, I am 
              driven by a compelling vision which is that I aspire to bridge the gap between intricate computer 
              architecture and intricate AI systems, working tirelessly to enhance their scalability 
              across a broader spectrum. My mission is to simplify and streamline these domains, making 
              them accessible and impactful on a much larger scale.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;