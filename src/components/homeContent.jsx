import AnimatedTopGradient from "./animatedTopGradient";
import Circle from "./circle";
import HomeCard from "./homeCard";

function HomeContent() {
  return (
    <>
    <div
      id="home"
      className="lg:pt-[245px] sm:pt-[175px] pt-[200px] pb-[100px] flex flex-col justify-center items-center relative"
    >
    <AnimatedTopGradient />
      <h1 className="lg:text-8xl sm:text-7xl text-5xl text-center font-titlefont">
        Réalisons vos idées <br/>web !
      </h1>
      <p className="mt-4 text-center lg:text-2xl">
        Sur mesure, sans compromis.
      </p>
      <Circle 
        size="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16"
        bgColor="bg-[#91c0e1]"
        position="bottom-[15%] left-[6%] sm:bottom-[20%] sm:left-[5%] lg:bottom-[10%] xl:bottom-[10%]"
      />
      <Circle 
        size="w-8 h-8 sm:w-10 sm:h-10 lg:w-16 lg:h-16"
        bgColor="bg-[#91c0e1]"
        position="top-[30%] left-[87%] sm:top-[23%] sm:left-[90%] lg:top-[25%]"
      />
    </div>
      <section className="px-7"><HomeCard/></section>
    </>
  );
}

export default HomeContent;
