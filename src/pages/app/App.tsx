import Banner from "../../components/app/banner/Banner";
import Content from "../../components/app/content/Content";
import Card from "../../components/app/coupon/Card";
import Navbar from "../../components/navbar/Navbar";

import "./App.css";

interface AppProps {
  color: string;
  major: string;
}
const App = ({ color, major }: AppProps) => {
  // const [color, setColor] = useState(c);
  // const [major, setMajor] = useState(m);

  return (
    /** Todo: wrap into json */
    <div className={`bg-linear-${color}`}>
      {/* <OpenHamburger/> */}
      <Navbar></Navbar>
      <Banner color={color} major={major}></Banner>

      <Content color={color}>
        <div className="w-full inline-flex overflow-scroll gap-4">
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
      </Content>
    </div>
  );
};

export default App;
