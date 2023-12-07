type CardProps = {
  title: string;
  subTitle: string;
  description: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="hover-small">
      <div className="drop-shadow-xl text-[#0652C0] bg-[#F9D77E] w-72 rounded-xl h-40">
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
    </div>
  );
};

export default Card;
