import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleBlog } from "../../features/actions/blogAction";
import moment from "moment";

const BlogDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleBlog(id));
  }, []);

  const { singleBlog } = useSelector((state) => state.blog);

  return (
    <div className="flex flex-col lg:space-x-6 items-center mb-6">
      <div className="flex items-center justify-center w-full h-52 rounded-lg">
        <img src={singleBlog?.blogImage} className="h-52 w-[80%]" />
      </div>

      <div className="flex flex-col mt-4 lg:mt-0 justify-between lg:w-[50%]">
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-[#393939] mb-2">
            {singleBlog?.title}
          </h2>
          <p className="text-[#393939] text-base mb-2 mt-6 lg:mt-0">
            {singleBlog?.description}
          </p>
          <div className="flex lg:space-x-2 mt-4">
            {singleBlog?.tags?.map((tag) => (
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
          {moment(singleBlog?.date).format("DD-MM-YYYY")}
        </p>
      </div>
    </div>
  );
};

export default BlogDetails;
