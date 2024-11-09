import React, { useEffect, useState } from "react";
import Modal from "../documents/modal";
import { useDispatch, useSelector } from "react-redux";
import { getAllUserData } from "../../../features/actions/userAction";
// import { getAllUserData } from "../../../features/actions/authAction";
const User = () => {
  const { users } = useSelector((state) => state.user);

  console.log("userdata in admin panel", users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUserData());
  }, []);
  return (
    <div className="px-10 py-4">
      <div className="flex flex-row p-5 bg-[#4A9162] text-[#ffffff] justify-between font-bold rounded-md">
        <h1 className="self-center">Registered User</h1>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {users?.data?.map((item) => (
            <>
              <tr className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
                <td
                  className="px-6 py-4 text-sm font-medium max-w-xs"
                  key={item._id}
                >
                  <p className="truncate text-gray-900">{item?.username}</p>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item?.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item?.phoneNumber}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default User;
