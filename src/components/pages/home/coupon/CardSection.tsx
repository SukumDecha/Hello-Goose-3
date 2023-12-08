import { useColorContext } from "../../../../context/ColorContext";
import Card from "./Card";
import couponData from "../../../../libs/data/coupon.json";
import "./CardSection.css";

const CardSection = () => {
  const { color } = useColorContext();

  const couponList = couponData.map((coupon, index) => (
    <Card
      key={index}
      title={`sale ${coupon.discount}`}
      subTitle={`${coupon.code}`}
      description={`เมื่อช้อปครบ ${coupon.require} สำหรับลูกค้าใหม่ stuket`}
    />
  ));
  return (
    <div
      className={`flex flex-col justify-center p-8 pt-24 pb-24 bg-linear-${color}-c`}
    >
      <div className="font-margarine text-5xl text-white ml-4 mb-4">Coupon</div>
      <div className="w-full inline-flex overflow-scroll gap-5 no-scrollbar">
        {couponList}
      </div>
    </div>
  );
};

export default CardSection;
