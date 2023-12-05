import { motion } from "framer-motion";
import "./VisitButton.css";

interface VisitButtonProps {
  color: string;
}
const VisitButton = ({ color }: VisitButtonProps) => {
  return (
    <motion.div
      className="box"
      whileHover={{ scale: 1.2, x: 20 }}
      whileTap={{ scale: 0.8 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
    >
      <button className={`text-4xl w-3/5 mt-10 ${color} btn z-1`}>
        Visit now
      </button>
    </motion.div>
  );
};

export default VisitButton;
