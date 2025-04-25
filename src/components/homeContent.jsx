import AnimatedTopGradient from "./animatedTopGradient";
import Circle from "./circle";

function HomeContent() {
  return (
    <section
      id="home"
      className="lg:pt-[200px] sm:pt-[175px] pt-[140px] flex flex-col justify-center items-center relative"
    >
    <AnimatedTopGradient />
      <h1 className="lg:text-8xl sm:text-7xl text-5xl font-semibold text-center font-titlefont">
        Réalisons vos idées web !
      </h1>
      <p className="mt-4 text-center lg:text-2xl">
        Sur mesure, sans compromis.
      </p>
      {/* <Circle 
        size="w-5 h-5"
        bgColor="bg-[#91c0e1]"
        position="bottom-0 left-[10px]"
      /> */}
    </section>
  );
}

export default HomeContent;
