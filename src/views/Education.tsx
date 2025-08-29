import Line from "../components/Line";
import StudyCard from "../components/StudyCard";
import { studies, type Study } from "../constants";

const Education = () => {
  return (
    <section id="education" className="my-[16rem] pr-[0.5rem] pl-[2rem] xl:px-[14rem] relative">
      <h3 className="text-center text-[22px] font-bold text-primary">
        Education
      </h3>
      <h1 className="text-center text-[36px] font-bold">
        My studies
      </h1>
      <Line />
      <div className="flex flex-col mt-[6rem] w-3/4 mx-auto">
        {studies && studies.map((study: Study, index) => (
          <StudyCard key={index} {...study}/>
        ))}
      </div>
    </section>
  );
};

export default Education;