import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectFive, projectFour, projectOne, projectSix, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
          title="E-commerce Website"
          des="Using HTML, CSS, React JS And API"
            
            src={projectOne}
          />
          <ProjectsCard
            title="News Website"
            des=" Using React JS, Next JS, API And Tailwind CSS framework"
            src={projectTwo}
          />
          <ProjectsCard
            title="Youtube Clone"
            des=" Using HTML, CSS, JavaScript React JS, Next JS And Tailwind CSS framework"
            src={projectThree}
          />
          <ProjectsCard
            title="Money Divider"
            des=" Using React JS, Next JS And Tailwind CSS framework"
            src={projectFour}
          />
          <ProjectsCard
            title="Personal Website"
            des=" Using HTML, CSS And Javascript"
            src={projectFive}
          />
          <ProjectsCard
            title="Blog Website"
            des="Using HTML, CSS, React JS And API"
            src={projectSix}
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
