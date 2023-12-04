import './VisitButton.css'
import { twMerge } from 'tailwind-merge'

interface VisitButtonProps {
  class: string,
  color: string
}
const VisitButton = ({color}: VisitButtonProps) => {
  return (
    <button className={twMerge(`btn text-5xl ${color}`)}>
      Visit now
    </button>
  );
};

export default VisitButton;
