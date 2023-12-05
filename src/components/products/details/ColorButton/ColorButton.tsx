type ColorButtonProps = {
  color: string;
};

const ColorButton = (props: ColorButtonProps) => {
  return (
    <button className={`bg-[${props.color}] w-8 h-8 rounded-full`}></button>
  );
};

export default ColorButton;
