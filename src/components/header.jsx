import { useScroll, useMotionValueEvent, motion } from "framer-motion";
import { useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const [activeIndex, setActiveIndex] = useState(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  const linkNav = [
    { name: "Accueil", href: "#home" },
    { name: "À Propos", href: "#about" },
    { name: "Projets", href: "#project" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="px-[3%] fixed top-0 left-0 w-full z-50">
      <nav className="relative ">
        <motion.ul
          className={`text-colorFont rounded-full flex items-center justify-around mt-[20px] lg:py-4 py-3 px-4 transition-all duration-300 mx-auto lg:max-w-[550px] max-w-[500px] ${
            isScrolled
              ? "bg-white/40 backdrop-blur-lg shadow-sm"
              : "bg-transparent"
          }`}
        >
          {linkNav.map((link, index) => (
            <li className="relative inline-block" key={index}>
              <a
                href={link.href}
                onClick={() => setActiveIndex(index)}
                className="relative p-2 text-sm lg:text-lg tracking-wide"
              >
                {activeIndex === index && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-white rounded-full z-[-1]"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                {link.name}
              </a>
            </li>
          ))}
        </motion.ul>
      </nav>
    </header>
  );
}

export default Header;
