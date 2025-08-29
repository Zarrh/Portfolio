import { FaLocationDot } from "react-icons/fa6";
import type { Study } from "../constants";
import RadialBar from "./RadialBar";

const StudyCard: React.FC<Study> = ({ title, years, text, location, degree, lateralIcon, link }) => {

  const LateralIcon = lateralIcon;

  return (
    <div className="relative">
      <div className="
        absolute -left-12 rounded-full 
        bg-bg border-2 border-primary
        -translate-x-1/2 -translate-y-1/2 z-10 p-6 flex flex-row items-center
      ">
        {LateralIcon && typeof(LateralIcon) === "string" ?
          (<img className="" src={LateralIcon} alt={""} />)
          : typeof(LateralIcon) === 'function' && (
            <LateralIcon className="w-10 h-10" />
          )
        }
      </div>
      <div className="
        absolute 
        bg-primary/40
        w-2 h-[101.5%]
        -left-12
        rounded-lg
        z-1 shadow-lg shadow-primary
        -translate-x-1/2
      "/>
      <div 
        className="
          w-full
          flex flex-col md:flex-row justify-between items-center md:items-start
          border-2 border-primary/45
          shadow-md
          rounded-md
          p-6 md:p-12
          my-6
        "
        style={{
          background: "linear-gradient(180deg, rgba(19, 4, 40, 1) 0%, rgba(28, 16, 41, 1) 24%, rgba(17, 7, 31, 1) 85%, rgba(19, 4, 40, 1) 100%)",
        }}
      >
        <div className="w-7/10 flex flex-col">
          <h1 className="text-[36px] font-bold text-center md:text-left w-full md:w-4/5">
            {title}
          </h1>
          <a href={link} target="_blank">
            <div className="text-left text-white/50 flex flex-col md:flex-row md:justify-start items-start w-full md:w-4/5 my-4 hover:cursor-pointer">
              <FaLocationDot className="text-[28px] w-full md:w-1/10 md:mr-2 md:-ml-2"/>
              <span className="text-[24px] text-center md:text-justify w-full md:w-9/10 underline underline-offset-4">
                {location}
              </span>
            </div>
          </a>
          <p className="text-[18px] text-white/80 text-center md:text-left w-full md:w-4/5 md:mt-4">
            {text}
          </p>
        </div>
        <div className="w-full md:w-1/5 flex flex-col">
          <span className="text-[20px] text-primary font-bold w-full text-center">
            {years}
          </span>
          <span className="text-[24px] font-bold text-center mt-12">
            Final grade
          </span>
          <div className="w-full flex flex-row justify-center mt-6">
            <RadialBar value={degree?.[0] && degree?.[1] && degree?.[0] / degree?.[1]}>
              <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
                <span className={`
                  text-center text-2xl font-bold 
                  ${degree?.[0] && degree?.[1] ? "text-primary" : "text-neutral-500"}
                `}>
                  {degree?.[0] && degree?.[1] ? `${degree[0]} / ${degree[1]}` : "ND"}
                </span>
              </div>
            </RadialBar>
          </div>
        </div>
        {/* <div className="flex flex-col md:flex-row justify-between items-center mb-2 text-center md:text-left">
          
        </div>
        <div className="mt-8 flex flex-row items-center justify-between">
          <span className="text-[24px] font-bold">
            Final grade
          </span>
          <RadialBar value={degree?.[0] && degree?.[1] && degree?.[0] / degree?.[1]}>
            <div className="absolute top-1/2 start-1/2 transform -translate-y-1/2 -translate-x-1/2">
              <span className={`
                text-center text-2xl font-bold 
                ${degree?.[0] && degree?.[1] ? "text-primary" : "text-neutral-500"}
              `}>
                {degree?.[0] && degree?.[1] ? `${degree[0]} / ${degree[1]}` : "ND"}
              </span>
            </div>
          </RadialBar>
        </div> */}
      </div>
    </div>
  );
};

export default StudyCard;