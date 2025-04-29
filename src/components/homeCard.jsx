import { motion } from "framer-motion";

function HomeCard({ title, description, icon, bgColor }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative flex flex-col ${bgColor} h-80 sm:h-[550px] sm:w-[100%] rounded-[24px] p-7 overflow-hidden`}
    >
      <p className="text-right tracking-widest">{description}</p>
      <h3 className="text-xl tracking-tight text-right text-titlefont font-semibold">
        {title}
      </h3>
      <img src={icon} className="absolute right-1 bottom-[-5px] h-[60%]"></img>
    </motion.div>
  );
}

export default HomeCard;
