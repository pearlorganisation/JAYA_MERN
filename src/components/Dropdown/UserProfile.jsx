/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { persistor } from "../../features/store";
import { useDispatch } from "react-redux";

const UserProfile = ({ user }) => {
  const dispatch = useDispatch();
  const [dropdown, setDropdown] = useState(false);
  return (
    <div>
      <div className="space-x-3 relative">
        <span className="font-medium capitalize">{user.username}</span>{" "}
        <img
          onClick={() => setDropdown(!dropdown)}
          className="cursor-pointer inline-block size-[46px] rounded-full"
          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
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
