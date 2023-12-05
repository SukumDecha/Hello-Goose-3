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
          title="sale 7%"
          subTitle="RNOVNEW1"
          description="เมื่อช้อปครบ ฿100 สำหรับลูกค้าใหม่ stuket"
        ></Card>
        <Card
          title="sale 10%"
          subTitle="RNOVNEW2"
          description="เมื่อช้อปครบ ฿1,100 สำหรับลูกค้าใหม่ stuket"
        ></Card>
        <Card
          title="sale 15%"
          subTitle="RNOVNEW3"
          description="เมื่อช้อปครบ ฿300 สำหรับลูกค้าใหม่ stuket"
        ></Card>
        <Card
          title="sale 9%"
          subTitle="RNOVNEW4"
          description="เมื่อช้อปครบ ฿2,000 สำหรับลูกค้าใหม่ stuket"
        ></Card>
        <Card
          title="sale 23%"
          subTitle="RNOVNEW5"
          description="เมื่อช้อปครบ ฿900 สำหรับลูกค้าใหม่ stuket"
        ></Card>
        <Card
          title="sale 17%"
          subTitle="RNOVNEW6"
          description="เมื่อช้อปครบ ฿500 สำหรับลูกค้าใหม่ stuket"
        ></Card>
        <Card
          title="sale 5%"
          subTitle="RNOVNEW7"
          description="เมื่อช้อปครบ ฿4,000 สำหรับลูกค้าใหม่ stuket"
        ></Card>
        <Card
          title="sale 30%"
          subTitle="RNOVNEW8"
          description="เมื่อช้อปครบ ฿2,000 สำหรับลูกค้าใหม่ stuket"
        ></Card>
      </div>
    </div>
  );
};

export default CardSection;
