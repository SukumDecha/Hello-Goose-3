import { motion } from "framer-motion";
import "./VisitButton.css";

interface VisitButtonProps {
  className: string;
  color: string;
}
const VisitButton = ({ color, className }: VisitButtonProps) => {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.2, x: 20 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <button className={`text-4xl w-3/5 mt-10 ${color} btn z-1 ${className}`}>
        Visit now
      </button>
    </motion.div>
  );
};

export default VisitButton;
