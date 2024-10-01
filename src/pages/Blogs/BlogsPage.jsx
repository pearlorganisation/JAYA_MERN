import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../features/actions/blogAction";
import moment from "moment";
import { Link } from "react-router-dom";

const BlogsPage = () => {
  const { blogs } = useSelector((state) => state.blog);
  console.log("Blogs Page", blogs);

  return (
    <div className="px-6 py-4 md:px-0 md:py-0">
      <h1 className="mt-6 mb-6"> Blogs </h1>

      {blogs?.map((blog) => (
        <Link to={`/blogs/${blog._id}`} key={blog._id}>
          <div
            key={blog}
            className="flex flex-col lg:flex-row lg:space-x-6 items-center mb-6"
          >
            <div className="bg-gray-200 lg:w-1/3 w-full h-52 rounded-lg">
              <img src={blog.blogImage} className="h-52" />
            </div>

            <div className="flex flex-col mt-4 lg:mt-0 justify-between lg:w-[50%]">
              <div className="mt-0">
                <h2 className="text-2xl font-semibold text-[#393939] mb-2">
                  {blog?.title}
                </h2>
                <p className="text-[#393939] text-base mb-2 mt-6 lg:mt-0">
                  {blog?.description}
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
                {moment(blog?.date).format("DD-MM-YYYY")}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogsPage;
