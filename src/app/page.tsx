import Image from "next/image";
import Card, { Template } from "../components/Card";
import AddButton from "../components/AddButton";

const templates: Template[] = [
  {
    title: "Frontend",
    preDefined: {
      "job.role": "Frontend Developer",
    },
    template: `I am writing to express my interest in the {{job.role}} role at {{company.name}}. With a strong background in JavaScript and TypeScript, along with a passion for developing efficient and scalable web applications, I am excited about the opportunity to contribute to {{company.name}}'s mission.

  I have extensive experience working with modern frameworks and libraries, particularly React.js, and have successfully delivered projects that meet user needs. Recently, I developed a booking application featuring a robust scheduling system and implemented a serverless notification system on AWS. These experiences have strengthened my ability to create high-quality software solutions.
  
  I would love the opportunity to discuss how my skills and experiences align with the goals of {{company.name}}. Thank you for considering my application. I look forward to the possibility of working together.`,
  },

  {
    title: "Backend",
    preDefined: {
      "job.role": "Software Engineer",
    },
    template: `I am writing to express my interest in the {{job.role}} role at {{company.name}}. With a strong background in JavaScript and TypeScript, as well as a passion for developing efficient and scalable web applications, I am excited about the opportunity to contribute to {{company.name}}'s mission.

  I have extensive experience working with modern frameworks and technologies, particularly in building backend solutions using NestJS and Node.js. My recent projects include developing a booking application featuring a robust scheduling system and creating a serverless notification system on AWS, both of which highlight my ability to deliver high-quality software solutions.
  
  I would love the opportunity to discuss how my skills and experiences align with the goals of {{company.name}}. Thank you for considering my application. I look forward to the possibility of working together.`,
  },
];

export default function Home() {
  return (
    <main className="p-2 flex flex-wrap gap-4 items-start">
      {templates.map((template, i) => (
        <Card {...template} key={i} />
      ))}
      {/* <AddButton /> */}
    </main>
  );
}
