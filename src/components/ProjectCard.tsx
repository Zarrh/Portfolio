import type { Project, Technology, IconLink } from "../constants";
import GradientBorder from "./GradientBorder";

const ProjectCard: React.FC<Project> = ({ title, text, techstack, links, img }) => {
  return (
    <GradientBorder border={3}>
      <div className="flex flex-col h-full">
        {img && <div className="relative bg-bg rounded-t-lg"><img src={img} className="rounded-t-lg w-full h-auto opacity-50" alt="" /></div>}
        <div className="rounded-b-lg bg-card shadow-lg p-8 w-full h-full relative overflow-hidden">
          <div className="flex flex-col">
            <div className="min-h-[20rem]">
              <h1 className="text-left font-bold text-[32px] mb-[2rem] text-white/80">
                {title}
              </h1>
              <p className="text-[18px] text-justify mb-[1rem] text-white/75">
                {text}
              </p>
            </div>
            <ul className="flex flex-row gap-4 mt-[1rem] mb-[2rem] flex-wrap">
              {techstack && techstack.map((tech: Technology, index) => (
                <li key={index}>
                  {tech.icon && typeof(tech.icon) === "string" ?
                    (<img className="h-[32px] w-auto" src={tech.icon} alt={tech.name} />)
                    : typeof(tech.icon) === 'function' && (
                      <tech.icon className="h-[32px] w-auto" style={{ color: tech.color }} />
                    )
                  }
                </li>
              ))}
            </ul>
            <div className="w-full h-[2px] rounded-lg bg-gray-700" />
            <ul className="flex flex-row gap-4 mt-[2rem] relative">
              {links && links.map((link: IconLink, index) => (
                <li key={index}>
                  {link.icon && typeof(link.icon) === "string" ?
                    (<a href={link.href} target="_blank">
                      <img className="h-[32px] w-auto hover:cursor-pointer" src={link.icon} alt={""} />
                    </a>)
                    : typeof(link.icon) === 'function' && (
                      <a href={link.href} target="_blank">
                        <link.icon className="h-[32px] w-auto text-gray-500 hover:cursor-pointer hover:text-gray-300" />
                      </a>)
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </GradientBorder>
  );
};

export default ProjectCard;