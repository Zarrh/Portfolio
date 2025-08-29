import Line from "../components/Line";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

const Projects = () => {
  return (
    <section id="projects" className="my-[16rem] px-[4rem] xl:px-[14rem] ">
      <h1 className="text-center text-[36px] font-bold">
        Projects
      </h1>
      <Line />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 mt-[6rem]">
        {projects && projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>

    </section>
  );
};

export default Projects;