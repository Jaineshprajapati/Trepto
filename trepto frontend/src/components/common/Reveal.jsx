import { motion } from "framer-motion";

// Only reveal up direction
const variants = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export default function Reveal({
  children,
  delay = 0,
  duration = 0.7,
  // Default 'once' to false so animation re-triggers when in view again
  once = false,
  amount = 0.25,
  className = "",
}) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      transition={{ delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
