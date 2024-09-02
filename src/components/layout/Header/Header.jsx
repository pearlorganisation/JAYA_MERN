import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserProfile from "../../Dropdown/UserProfile";

const Header = () => {
  const { isUserLoggedIn, userData } = useSelector(state => state.auth)
  return (
    <header className="flex justify-end items-center space-x-4 py-4 px-6">
      {
        isUserLoggedIn ? <UserProfile user={userData?.user} /> : <div className="space-x-4">

          <Link
            to="signup"
            className="px-6 py-3 bg-emerald-500 text-white font-medium rounded-md"
            type="button"
          >
            SignUp
          </Link>
          <Link
            to="signin"
            className="px-6 py-3 bg-emerald-500 text-white font-medium rounded-md"
            type="button"
          >
            Login
          </Link>
        </div>
      }
    </header>
  );
};

export default Header;
