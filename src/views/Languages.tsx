import LanguageCard from "../components/LanguageCard";
import Line from "../components/Line";
import { languages } from "../constants";

const Languages = () => {
  return (
    <section id="languages" className="my-[16rem] px-[4rem] lg:px-[14rem]">
      <h3 className="text-center text-[22px] font-bold text-primary">
        Languages
      </h3>
      <h1 className="text-center text-[36px] font-bold">
        The languages I speak
      </h1>
      <Line />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[6rem]">
        {languages && languages.map((language, index) => (
          <LanguageCard key={index} {...language} />
        ))}
      </div>
    </section>
  );
};

export default Languages;