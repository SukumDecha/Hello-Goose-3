import { useColorContext } from "../../../context/ColorContext";
import Card from "./Card";
import "./CardSection.css";

const CardSection = () => {
  const { color } = useColorContext();

  return (
    <div
      className={`flex flex-col justify-center p-8 pt-24 bg-linear-${color}-c`}
    >
      <div className="font-margarine text-5xl text-white ml-4 mb-4">Coupon</div>
      <div className="w-full inline-flex overflow-scroll gap-4 no-scrollbar">
        <Card
          title="sale 10%"
          subTitle="RNOVNEW10"
          description="เมื่อช้อปครบ ฿4,000 สำหรับลูกค้าใหม่ stuket"
        ></Card>
        <Card
          title="sale 10%"
          subTitle="RNOVNEW10"
          description="เมื่อช้อปครบ ฿4,000 สำหรับลูกค้าใหม่ stuket"
        ></Card>
        <Card
          title="sale 10%"
          subTitle="RNOVNEW10"
          description="เมื่อช้อปครบ ฿4,000 สำหรับลูกค้าใหม่ stuket"
        ></Card>
        <Card
          title="sale 10%"
          subTitle="RNOVNEW10"
          description="เมื่อช้อปครบ ฿4,000 สำหรับลูกค้าใหม่ stuket"
        ></Card>
        <Card
          title="sale 10%"
          subTitle="RNOVNEW10"
          description="เมื่อช้อปครบ ฿4,000 สำหรับลูกค้าใหม่ stuket"
        ></Card>
        <Card
          title="sale 10%"
          subTitle="RNOVNEW10"
          description="เมื่อช้อปครบ ฿4,000 สำหรับลูกค้าใหม่ stuket"
        ></Card>
        <Card
          title="sale 10%"
          subTitle="RNOVNEW10"
          description="เมื่อช้อปครบ ฿4,000 สำหรับลูกค้าใหม่ stuket"
        ></Card>
        <Card
          title="sale 10%"
          subTitle="RNOVNEW10"
          description="เมื่อช้อปครบ ฿4,000 สำหรับลูกค้าใหม่ stuket"
        ></Card>
      </div>
    </div>
  );
};

export default CardSection;
