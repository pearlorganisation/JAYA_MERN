import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Sidebar2 from "../Sidebar/Sidebar2";

const Layout = () => {
  return (
    <div className="grid lg:grid-cols-[18rem_auto]">
      <div className="relative ">
        <Sidebar2 />
      </div>
      <div className="py-16 lg:py-0">{<Outlet />}</div>
    </div>
  );
};

export default Layout;
