import Footer from "../../components/footer/Footer";
import Sidebar from "../../components/navbar/Sidebar";
import FavouriteList from "../../components/pages/favourite/FavouriteList";
import Navbar from "../../components/navbar/Navbar";
import { useColorContext } from "../../context/ColorContext";
import { useState } from "react";
import Login from "../../components/pages/login/Login";

export default function FavouritePage() {
  const { color } = useColorContext();
  const [isSidebarOpen, setSidebar] = useState(false);
  const [isLoginOpen, setLogin] = useState(false);

  return (
    <div>
      <div className={`bg-transition bg-linear-${color}`}>
        <Sidebar isOpen={isSidebarOpen} setOpen={setSidebar} />
        <Navbar setOpen={setSidebar} setLogin={setLogin}></Navbar>
        <Login isOpen={isLoginOpen} setOpen={setLogin} />
        <FavouriteList />
        <Footer />
      </div>
    </div>
  );
}
