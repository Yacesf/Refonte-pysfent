import { motion } from "framer-motion";

function HomeCard({ title, description, icon, bgColor }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative flex flex-col ${bgColor} h-80 xl:h-[500px] lg:h-[460px] w-[100%] sm:w-[320px] lg:w-[460px] xl:w-[500px] rounded-[24px] p-7 overflow-hidden`}
    >
      <p className="text-right tracking-widest">{description}</p>
      <h3 className="text-xl text-colorFont tracking-tight text-right text-titlefont font-semibold">
        {title}
      </h3>
      <img src={icon} className="absolute right-1 bottom-[-5px] h-[60%]"></img>
    </motion.div>
  );
}

export default HomeCard;
