/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { persistor } from "../../features/store";
import { useDispatch } from "react-redux";

const UserProfile = ({ user }) => {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div>
      <div className="space-x-3 relative">
        <span className="font-medium capitalize">{user?.username}</span>{" "}
        <img
          onClick={() => setDropdown(!dropdown)}
          className="cursor-pointer inline-block size-[46px] rounded-full"
          src={
            user?.profile
              ? user?.profile
              : `https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=`
          }
          alt="Avatar"
        />
        {dropdown ? (
          <div className="absolute -left-12 -bottom-[7.5rem] w-40 min-h-28 border bg-white shadow-md rounded-lg overflow-hidden ">
            <button
              onClick={() => {
                persistor.purge().then(() => {
                  dispatch({ type: "RESET_APP" }); // Reset all state
                });
              }}
              type="button"
              className="font-medium text-left px-3 py-1 border-b w-full"
            >
              Logout
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserProfile;
