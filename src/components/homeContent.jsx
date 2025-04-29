import Circle from "./circle";
import HomeCard from "./homeCard";
import AboutIMG from "../assets/about.svg";
import ProjectIMG from "../assets/project.svg";
import ContactIMG from "../assets/contact.svg";

function HomeContent() {
  return (
    <>
      <div
        id="home"
        className="lg:pb-[185px] lg:pt-[245px] sm:pt-[175px] pt-[200px] pb-[130px] flex flex-col justify-center items-center relative"
      >
        <h1 className="lg:text-8xl sm:text-7xl text-[#444444] text-5xl text-center font-titlefont">
          Réalisons vos <br />
          idées web !
        </h1>
        <p className="text-colorFont mt-4 text-center lg:text-2xl">
          Sur mesure, sans compromis.
        </p>
        <Circle
          size="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16"
          bgColor="bg-white"
          position="bottom-[15%] left-[6%] sm:bottom-[20%] sm:left-[5%] lg:bottom-[20%]"
        />
        <Circle
          size="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16"
          bgColor="bg-white"
          position="top-[30%] left-[87%] sm:top-[23%] sm:left-[90%] lg:top-[25%]"
        />
      </div>
      <section className="px-7 flex flex-col gap-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-around">
          <HomeCard
            bgColor="bg-[#C084FC]"
            title="À Propos"
            description="SECTION"
            icon={AboutIMG}
          />
          <HomeCard
            bgColor="bg-[#86EFAC]"
            title="Projets"
            description="SECTION"
            icon={ProjectIMG}
          />
        </div>
        <div className="flex justify-center">
          <HomeCard
            bgColor="bg-[#A5B4FC]"
            title="Contact"
            description="SECTION"
            icon={ContactIMG}
          />
        </div>
      </section>
    </>
  );
}

export default HomeContent;
