import type { Language } from "../constants";
import GradientBorder from "./GradientBorder";
import LoadingBar from "./LoadingBar";

const LanguageCard: React.FC<Language> = ({ name, icon, levelEvaluation, text }) => {

  const Icon = icon;

  return (
    <div className="flex flex-col items-center relative">
      <div 
        className="
          rounded-full 
          bg-card border-3 border-primary
          flex items-center 
          p-4 
          w-[128px] h-[128px] 
          translate-y-[48px] 
          z-1
        "
      >
        {Icon && typeof(Icon) === "string" ?
          (<img className="w-full" src={Icon} alt={""} />)
          : typeof(Icon) === 'function' && (
            <Icon className="w-full" />
          )
        }
      </div>
      <div className="w-full z-10">
        <GradientBorder border={3}>
          <div className="rounded-lg bg-card shadow-lg p-8 w-full h-full">
            <div className="flex flex-col">
              <h1 className="text-center font-bold text-[36px] mb-8 text-white/80">
                {name}
              </h1>
              {levelEvaluation && (
                <div className="flex flex-row justify-between items-center">
                  <p className="text-[24px] text-center font-bold mb-4 text-white/70">
                    Level:
                  </p>
                  <div className="w-1/2 -translate-y-1/2">
                    <LoadingBar value={levelEvaluation}/>
                  </div>
                </div>
              )}
              <p className="text-[16px] text-justify mb-[1rem]">
                {text}
              </p>
            </div>
          </div>
        </GradientBorder>
      </div>
    </div>
  );
};

export default LanguageCard;