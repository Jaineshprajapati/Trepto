import { motion } from "framer-motion";

export default function RevealGroup({
  children,
  stagger = 0.15,
  once = true,
  amount = 0.3,
  className = "",
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={{
        visible: {
          transition: { staggerChildren: stagger },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
