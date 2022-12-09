import Image from "next/image";
import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import ProjectCard from "@/components/ProjectCard";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";

import article from "public/projects/article.webp";
import Terminal from "public/projects/Terminal-portfolio.webp";

const ProjectSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [projectSection]);

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <RoughNotation
          type="underline"
          color={`${theme === "light" ? "rgb(0, 122, 122)" : "rgb(5 206 145)"}`}
          strokeWidth={2}
          order={1}
          show={isOnScreen}
        >
          <h2 className="section-heading">Featured Projects</h2>
        </RoughNotation>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>
      <div className="flex flex-wrap">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} project={project} />
        ))}
      </div>
      <div className="others text-center mb-16">
        Other projects can be explored in{" "}
        <a
          href="https://github.com/rifat-ahmed-rar"
          className="font-medium underline link-outline text-marrsgreen dark:text-carrigreen whitespace-nowrap"
        >
          my github profile
        </a>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Ransomware: The Evolution of a Cybercrime",
    type: "Frontend",
    image: (
      <Image
        src={article}
        sizes="100vw"
        fill
        alt="Ransomware: The Evolution of a Cybercrime"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "This one my first article which one publish with my lecture.",
    tags: ["Ransomware"],
    liveUrl: "https://www.psychosocial.com/article/PR190449/9770/",
    codeUrl: "https://www.psychosocial.com/article/PR190449/9770/",
    bgColor: "bg-[#B4BEE0]",
  },
 
  {
    title: "Terminal Portfolio",
    type: "Frontend",
    image: (
      <Image
        src={Terminal}
        sizes="100vw"
        fill
        alt="Terminal Portfolio"
        className="transition-transform duration-500 hover:scale-110 object-cover"
      />
    ),
    desc: "My perfolio website in terminal version developed with React and TypeScript. In this project, styled-components library is used for styling and multiple themes supported.",
    tags: ["React", "TypeScript", "Styled-Components"],
    liveUrl: "https://rar-terminal.netlify.app",
    codeUrl: "https://rar-terminal.netlify.app",
    bgColor: "bg-[#B4BEE0]",
  },
 
];

export default ProjectSection;
