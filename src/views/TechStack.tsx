import Line from "../components/Line";
import { techStack, type Technology } from "../constants";
import { motion } from "motion/react";

const TechStack = () => {
  return (
    <section id="tech-stack" className="my-[16rem] px-[4rem] xl:px-[14rem] relative">
      <div aria-hidden="true" className={"absolute -bottom-[3rem] inset-0 h-max w-full m-auto grid grid-cols-2 -space-x-52 opacity-20"}>
        <div className={"blur-[106px] h-56 bg-gradient-to-br from-color-primary to-purple-400"}></div>
        <div className={"blur-[106px] h-32 bg-gradient-to-r from-bg to-purple-400"}></div>
      </div>
      <h3 className="text-center text-[22px] font-bold text-primary">
        Technologies
      </h3>
      <h1 className="text-center text-[36px] font-bold">
        My tech stack
      </h1>
      <Line />
      <div className="flex flex-row flex-wrap gap-y-4 gap-x-8 justify-center mt-[6rem] w-3/4 mx-auto">
        {techStack && techStack.map((tech: Technology, index) => (
          <motion.div 
            key={index} 
            className="
              rounded-full bg-card size-[8rem] p-4 relative z-1 flex items-center 
              border-3 border-primary/50
            "
            initial={{ y: 100, opacity: 0 }} 
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1*index }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {tech.icon && typeof(tech.icon) === "string" ?
              (<img className="h-[4rem] w-auto z-10" src={tech.icon} alt={""} />)
              : typeof(tech.icon) === 'function' && (
                <tech.icon className="h-[4rem] w-auto z-10 block mx-auto" style={{ color: tech.color }} />
              )
            }
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;