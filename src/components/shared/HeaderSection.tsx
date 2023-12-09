import { useState } from "react";
import Sidebar from "./navbar/Sidebar";
import Login from "../pages/checkout/login/Login";
import Navbar from "./navbar/Navbar";
import { useLoginModalContext } from "../../context/LoginModalContext";

export default function HeaderSection() {
  const [isSidebarOpen, setSidebar] = useState(false);
  const { loginModal, setLoginModal } = useLoginModalContext();

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} setOpen={setSidebar} />
      <Login isOpen={loginModal} setOpen={setLoginModal} />
      <Navbar setOpen={setSidebar} setLogin={setLoginModal}></Navbar>
    </div>
  );
}
