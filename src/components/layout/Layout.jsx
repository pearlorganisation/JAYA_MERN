import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Sidebar2 from "../Sidebar/Sidebar2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div className="grid lg:grid-cols-[18rem_auto] font-poppins">
      <div className="relative ">
        <Sidebar2 />
      </div>
      <div className="py-16 lg:py-0">
        <Header />
        {<Outlet />}
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Layout;
