import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../documents/modal";
import { toast } from "react-toastify";

import {
  deleteScheme,
  getSchemes,
} from "../../../features/actions/schemesAction";
import { Link } from "react-router-dom";
import { clearSuccessData } from "../../../features/slices/schemesSlice";
import {
  deleteBlog,
  getSingleBlog,
  getBlogs,
} from "../../../features/actions/blogAction";
import ViewModal from "./viewBlog/Viewmodal";

const Blog = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);
  console.log("blogdata", blogs);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    dispatch(getBlogs());
    dispatch(clearSuccessData());
  }, []);

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row p-5 bg-[#48DE80] text-white justify-between items-center md:items-start font-bold rounded-md shadow-md">
        <h1 className="text-2xl md:text-4xl">Manage Your Blogs</h1>
        <Link to="/admin/addblog" className="mt-4 md:mt-0">
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

      {/* Table Container */}
      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full table-auto divide-y divide-gray-200">
          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr>
              {/* Responsive Table Headers */}
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Title
              </th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Benefit
              </th>

              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.isArray(blogs) && blogs.length > 0 ? (
              blogs.map((item) => (
                <tr
                  key={item._id}
                  className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <td className="px-4 py-4 text-sm font-medium text-gray-900 max-w-xs">
                    <img src={item.blogImage} className="" />
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900 max-w-xs">
                    <p className="truncate">{item.title}</p>
                  </td>

                  <td className="px-4 py-4 space-x-2 whitespace-nowrap text-sm text-gray-500">
                    {item.tags?.map((tag, index) => (
                      <button
                        key={index}
                        className="bg-[#48DE80] text-white rounded-md px-3 py-2.5 text-xs md:text-sm"
                      >
                        {tag.benefit || tag}
                      </button>
                    ))}
                  </td>

                  <td className="px-4 py-4">
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                      <button
                        className="text-blue-500 rounded-md bg-blue-600/30 px-3 py-2 hover:text-blue-600 text-center"
                        onClick={(e) => {
                          e.preventDefault();
                          openModal();
                          setId(item._id);
                        }}
                      >
                        View
                      </button>

                      {/* Edit Button */}
                      <Link
                        to={`/admin/editblog/${item._id}`}
                        className="text-green-500 rounded-md bg-green-600/30 px-3 py-2 hover:text-green-600 text-center"
                      >
                        Edit
                      </Link>

                      {/* Delete Button */}
                      <button
                        className="text-red-500 rounded-md bg-red-600/30 px-3 py-2 hover:text-red-600 text-center"
                        onClick={() => {
                          dispatch(deleteBlog(item._id)).then((res) => {
                            if (res?.payload?.status) {
                              toast.success("blog deleted successfully!");
                              dispatch(getBlogs());
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
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="px-4 py-4 text-center text-sm text-gray-500"
                >
                  No blogs available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50 p-4">
          <ViewModal blogData={id} isOpen={isModalOpen} onClose={closeModal} />
        </div>
      )}
    </div>
  );
};

export default Blog;
