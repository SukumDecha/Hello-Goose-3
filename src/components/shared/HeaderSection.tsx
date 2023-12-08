import { useState } from "react";
import Sidebar from "./navbar/Sidebar";
import Login from "../pages/login/Login";
import Navbar from "./navbar/Navbar";

export default function HeaderSection() {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [isLoginOpen, setLogin] = useState(false);

  return (
    <div>
      <Sidebar isOpen={isSidebarOpen} setOpen={setSidebar} />
      <Login isOpen={isLoginOpen} setOpen={setLogin} />
      <Navbar setOpen={setSidebar} setLogin={setLogin}></Navbar>
    </div>
  );
}
