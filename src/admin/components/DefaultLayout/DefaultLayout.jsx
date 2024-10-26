import { Outlet } from "react-router-dom";
import AdminSideBar from "../Sidebar/AdminSideBar";

const DefaultLayout = () => {
  return (
    <div className="grid lg:grid-cols-[12rem_auto]">
      <div className="relative ">
        <AdminSideBar />
      </div>
      <div className="">{<Outlet />}</div>
    </div>
  );
};

export default DefaultLayout;
