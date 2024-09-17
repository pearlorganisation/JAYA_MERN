import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserProfile from "../../Dropdown/UserProfile";

const Header = () => {
  const { isUserLoggedIn, userData } = useSelector((state) => state.auth);
  return (
    <header className="flex justify-end items-center space-x-4 py-4 px-6">
      {isUserLoggedIn ? <UserProfile user={userData?.user} /> : null}
    </header>
  );
};

export default Header;
