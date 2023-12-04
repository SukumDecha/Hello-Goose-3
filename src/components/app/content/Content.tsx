import { ReactElement } from "react";
import "./Content.css"
interface ContentProps {
  color: string;
  children: ReactElement;
}

const Content = ({ color, children }: ContentProps) => {
  return <div className={`bg-linear-${color}-c h-[100em]`}>{children}</div>;
};

export default Content;
