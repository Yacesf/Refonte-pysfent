function AnimatedTopGradient() {
  return (
    <div className="fixed top-0 left-0 w-full h-60 z-[-1] pointer-events-none">
      <div className="w-[200%] h-60 bg-gradient-to-r from-[#d6eaf8] via-[#c8d6ff] to-[#e5ccff] animate-gradientMove blur-2xl opacity-85" />
    </div>
  );
}

export default AnimatedTopGradient;