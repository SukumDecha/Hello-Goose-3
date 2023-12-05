interface MemberProp {
  name: string;
  img: string;
}
function Member({ name, img }: MemberProp) {
  return (
    <div className="flex justify-center items-center w-[50%] justify-between">
      <span className="font-margarine text-2xl text-white">{name}</span>
      <div className="rounded-full  flex items-center justify-center">
        <img src={img} alt={name} width={100} />
      </div>
    </div>
  );
}

export default Member;
