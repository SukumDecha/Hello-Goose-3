import "./VisitButton.css";

interface VisitButtonProps {
  color: string;
}
const VisitButton = ({ color }: VisitButtonProps) => {
  return (
    <button className={`text-4xl w-3/5 mt-10 ${color} btn z-1`}>
      Visit now
    </button>
  );
};

export default VisitButton;
