import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const BlogsPage = () => {
  const { blogs } = useSelector((state) => state.blog);

  return (
    <div className="px-6 py-4 md:px-0 md:py-0">
      <div>
        <div className="p-4 md:p-8">
          <Link to="/">
            <button className="flex items-center text-xl text-[#419A62] font-medium mb-4 mr-3">
              <span className="mr-3">
                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.68668 17.9629L15.3465 25.8242C15.4675 25.9399 15.6275 26.0029 15.7929 25.9999C15.9583 25.9969 16.116 25.9282 16.233 25.8081C16.3499 25.6881 16.4169 25.5262 16.4198 25.3565C16.4228 25.1867 16.3614 25.0225 16.2486 24.8983L9.67929 18.1551H26.8617C27.031 18.1551 27.1933 18.0861 27.313 17.9632C27.4327 17.8404 27.5 17.6737 27.5 17.5C27.5 17.3263 27.4327 17.1596 27.313 17.0368C27.1933 16.9139 27.031 16.8449 26.8617 16.8449H9.67929L16.2486 10.1017C16.3614 9.97752 16.4228 9.81326 16.4198 9.64355C16.4169 9.47383 16.3499 9.3119 16.233 9.19188C16.116 9.07185 15.9583 9.0031 15.7929 9.0001C15.6275 8.99711 15.4675 9.0601 15.3465 9.17582L7.68668 17.0371C7.56714 17.1599 7.5 17.3264 7.5 17.5C7.5 17.6736 7.56714 17.8401 7.68668 17.9629Z"
                    fill="#393939"
                  />
                </svg>
              </span>
              Back
            </button>
          </Link>

          <div className=" space-y-5 ">
            {Array.isArray(blogs) && blogs?.length > 0 ? (
              <div className="">
                {blogs?.map((blog) => (
                  <div
                    key={blog._id}
                    className=" bg-white rounded-lg shadow-md px-4 py-4 border-2 border-green-100 mt-6"
                  >
                    <Link to={`/blogs/${blog._id}`} key={blog._id} className="">
                      <div className="flex flex-col lg:flex-row lg:space-x-6 items-center mb-6">
                        <div className="bg-gray-200 lg:w-1/3 w-full h-52 rounded-lg">
                          <img src={blog.blogImage} className="h-52 w-full" />
                        </div>

                        <div className="flex flex-col mt-4 lg:mt-0 justify-between lg:w-[50%]">
                          <div className="mt-0">
                            <h2 className="text-2xl font-semibold text-[#393939] mb-2">
                              {blog?.title}
                            </h2>
                            <p className="text-[#393939] text-base mb-2 mt-6 lg:mt-0">
                              {blog?.description && parse(blog?.description)}
                            </p>
                            <div className="flex lg:space-x-2 mt-4">
                              {blog?.tags?.map((tag) => (
                                <span
                                  key={tag}
                                  className="border-green-100 border-2 text-[#419A62] px-3 py-1 rounded-lg text-xs lg:text-sm"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-[#5e5e5e] text-xs lg:mt-1 mt-2">
                            {moment(blog?.createdAt).format("DD-MM-YYYY")}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              "No Data Found"
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
