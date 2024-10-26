import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getAllDocument } from "../../../features/actions/uploadDocumentAction";
import { toast } from "react-toastify";
import Modal from "./modal";
const Document = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const { documentData } = useSelector((state) => state.document);
  console.log("doc", documentData);
  const { userData } = useSelector((state) => state.auth);
  console.log("userss", userData.user._id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllDocument()).then((res) => {
      console.log("all documents", res);
    });
  }, []);

  // useEffect(()=>{
  //   dispatch(getAllDocument())
  // },[])

  return (
    <div>
      <div className="flex flex-row p-5 bg-[#4A9162] text-[#ffffff] justify-between font-bold">
        <h1 className="self-center">Manage Your Document</h1>
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
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Person
            </th>
            {/* <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            name
            </th> */}
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              document{" "}
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {documentData?.map((item) => (
            <tr>
              <td className="px-6 py-4 text-sm font-medium max-w-xs">
                <p className="truncate text-gray-900">{item?.user}</p>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {item.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <a
                  href={item.document}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Document
                </a>
              </td>
              <td className="px-6">
                <div className="flex gap-4 items-start font-bold text-md">
                  <button
                    className="text-red-500 rounded-md bg-red-600/30 px-3 py-2 hover:text-red-600"
                    // onClick={() => {
                    //   dispatch(deleteDocument(item._id)).then((res) => {
                    //     console.log("rdsf", res);
                    //     if (res?.payload?.status) {
                    //       toast.success("document deleted successfully!");
                    //       dispatch(getAllDocument());
                    //     }
                    //   });
                    // }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-0 z-50">
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </div>
      )}
    </div>
  );
};

export default Document;
