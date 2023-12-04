import './VisitButton.css'

interface VisitButtonProps {
  class: string,
  color: string
}
const VisitButton = ({color}: VisitButtonProps) => {
  return (
    <button className={`btn text-5xl ${color}`}>
      Visit now
    </button>
  );
};

export default VisitButton;
