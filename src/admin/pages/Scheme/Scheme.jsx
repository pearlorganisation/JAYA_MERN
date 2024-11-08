import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../documents/modal";
import {
  deleteScheme,
  getSchemes,
} from "../../../features/actions/schemesAction";
import { Link } from "react-router-dom";
import { clearSuccessData } from "../../../features/slices/schemesSlice";
import { toast } from "react-toastify";
const Scheme = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [scheme, setScheme] = useState(null);

  const { schemes } = useSelector((state) => state.schemes);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSchemes());
    dispatch(clearSuccessData());
  }, []);

  useEffect(() => {
    console.log("schemes", schemes);
  }, [schemes]);

  return (
    <div className="px-6 py-4">
      <div className="flex flex-row p-5 bg-[#4A9162] text-[#ffffff] justify-between font-bold rounded-md">
        <h1 className="self-center mx-4 text-2xl md:text-4xl">
          Manage Your Schemes
        </h1>
        <Link to="/admin/AddScheme">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            className="pl-4"
            height="54"
            width="54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M346.5 240H272v-74.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-74.5c-8.8 0-16 6-16 16s7.5 16 16 16H240v74.5c0 9.5 7 16 16 16s16-7.2 16-16V272h74.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
            <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z"></path>
          </svg>
        </Link>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Scheme
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Benefit
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Department
            </th>
            <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Details
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.isArray(schemes?.data) &&
            schemes?.data?.length > 0 &&
            schemes?.data?.map((item) => {
              return (
                <tr
                  key={item._id}
                  className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <td className="px-2 py-4 text-xs font-medium max-w-xs">
                    <p className="truncate text-gray-900">{item?.title}</p>
                  </td>
                  <td className="px-2 py-4 space-x-2 whitespace-nowrap text-xs text-gray-500 flex ">
                    {item?.tags?.slice(0, 2).map((tag, index) => (
                      <button
                        key={index}
                        className="bg-[#4A9162] text-[#ffffff] rounded-md px-4 py-2"
                      >
                        {tag}
                      </button>
                    ))}

                    {item?.tags?.length > 2 && (
                      <div className="px-2 py-2 bg-green-300 rounded-full">
                        {item?.tags.length - 2} More
                      </div>
                    )}
                  </td>

                  <td className="px-2 py-4 whitespace-nowrap text-xs text-gray-500">
                    {item.miniTitle}
                  </td>
                  <td className="px-4">
                    <div className="flex gap-4 items-start font-bold text-md">
                      <Link
                        className="text-blue-500 rounded-md bg-blue-600/30 px-3 py-2 hover:text-blue-600"
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                          setScheme(item);
                        }}
                      >
                        View
                      </Link>
                      <Link
                        className="text-[#419A62] rounded-md bg-green-600/30 px-3 py-2 hover:text-green-600"
                        to={`/admin/editScheme/${item?._id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="text-red-500 rounded-md bg-red-600/30 px-3 py-2 hover:text-red-600"
                        onClick={() => {
                          console.log("Delete clicked");
                          dispatch(deleteScheme(item?._id)).then((res) => {
                            if (res?.payload?.status) {
                              toast.success("Scheme deleted successfully!");
                              dispatch(getSchemes());
                              dispatch(clearSuccessData());
                            }
                          });
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-0 z-50">
          <Modal
            schemeData={scheme}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        </div>
      )}
    </div>
  );
};

export default Scheme;
