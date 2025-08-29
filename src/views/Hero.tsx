import { useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import Gradient from "../components/Gradient";
import { heroLinks, type IconLink } from "../constants";
import FourierEpicycles from "../assets/videos/Fourier.webm";
import FourierEpicyclesConstant from "../assets/videos/Fourier-constant.webm";

const Hero = () => {

  const [showFirst, setShowFirst] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowFirst(false);
    }, 20000); // 20 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="hero" className="pt-[20rem] mb-[2rem] md:mb-[16rem] relative overflow-hidden">

      <Gradient x={10} y={-10} width={130} height={90} />

      <div className="flex flex-col md:flex-row justify-between md:mx-[15%] items-center gap-4 w-full md:w-4/5">
        <div className="text-center md:text-left w-4/9">
          <h3 className="text-[22px] font-bold mb-2 text-primary">
            About me
          </h3>
          <h1 className="text-[64px] font-bold mb-[2rem]">
            Luca Fagaraz
          </h1>
          <p className="text-[18px] text-gray-300 mb-[2rem]">
            I'm a Mathematical Engineering student at Politecnico di Milano (Italy) and an amateur software developer.
          </p>
          <Button href="#projects">
            See my projects
          </Button>
          <div className="mx-auto md:mx-0 w-2/3 md:w-1/2 bg-primary h-[18px] rounded-br-lg rounded-bl-lg md:rounded-bl-none pb-[4px] mt-4 mb-6">
            <div className="bg-bg h-full"/>
          </div>
          <ul className="flex flex-row gap-4 justify-center md:justify-start">
            {heroLinks && heroLinks.map((link: IconLink, index) => (
              <li key={index}>
                {link.icon && typeof(link.icon) === "string" ?
                  (<a href={link.href} target="_blank">
                    <img className="h-[32px] w-auto hover:cursor-pointer" src={link.icon} alt={""} />
                  </a>)
                  : typeof(link.icon) === 'function' && (
                    <a href={link.href} target="_blank">
                      <link.icon className="h-[36px] w-auto text-gray-500 hover:cursor-pointer hover:text-gray-300" />
                    </a>)
                }
              </li>
            ))}
          </ul>
        </div>

        <div className="size-[42rem] relative">
          {showFirst ? (
            <video 
              src={FourierEpicycles} 
              autoPlay 
              muted
              loop 
              className="absolute top-0 left-0 w-full h-full z-20"
            />
          ) : (
            <video 
              src={FourierEpicyclesConstant} 
              autoPlay
              muted
              loop 
              className="absolute top-0 left-0 w-full h-full z-30"
            />
          )}
        </div>

      </div>
    </section>
  );
};

export default Hero;