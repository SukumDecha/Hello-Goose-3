import { ReactElement } from "react";

interface ContentProps {
  color: string;
  children: ReactElement;
}

const Content = ({ children }: ContentProps) => {
  return <div className={`h-[100vh]`}>{children}</div>;
};

export default Content;
