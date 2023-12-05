import { motion } from "framer-motion";
type CardProps = {
  title: string;
  subTitle: string;
  description: string;
};

const Card = (props: CardProps) => {
  return (
    <div>
      <motion.div
        className="box"
        whileHover={{ scale: 0.9}}
        whileTap={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        <div className="drop-shadow-xl text-[#0652C0] bg-[#F9D77E] w-72 rounded-xl">
          <div className="p-4">
            <span>
              <strong className="text-xl bg-white p-2 rounded-xl">
                {props.title}
              </strong>
            </span>
            <p className="mt-6">{props.subTitle}</p>
            <p className="mt-2 text-sm">{props.description}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
