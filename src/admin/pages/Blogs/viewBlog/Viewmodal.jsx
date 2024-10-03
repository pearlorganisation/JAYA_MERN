import React, { useEffect, useState } from "react";
import DOMPurify from 'dompurify';
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../../../features/actions/blogAction";

const ViewModal = ({ blogData, isOpen, onClose }) => {
    console.log("blogsss data ",blogData)
  if (!isOpen) return null;
const dispatch=useDispatch()
const{blog}=useSelector(state=>state.blog)
console.log("blog",blog)
  useEffect(() => {
    if(blogData){
      dispatch(getBlog(blogData))
    }


  }, [blogData])

  return (
<div className="fixed inset-0" onClick={onClose} w-full
>
  <button
    className="absolute right-3 text-white text-4xl z-50"
    onClick={onClose}
  >
    &times;
  </button>
  <div
    className="bg-black/30 p-4 grid place-items-center  h-screen relative"
    onClick={(e) => e.stopPropagation()}
  >
    <div className="gap-10 container w-full h-[90vh]  mx-auto rounded-lg overflow-auto bg-white px-6 py-4 flex flex-col justify-center ">
      <div className="flex flex-col items-center">
        {blog?.data?.blogImage && (
          <img src={blog?.data.blogImage} alt="edf" className="mb-4 h-56 w-96  mx-auto" />
        )}
        <h1 className="text-center text-[#107536] text-3xl mb-5 font-poppins font-[600]">
          {blog?.data?.title}
        </h1>

        <div className="flex justify-center gap-10 mb-4  w-full">
          <div className="flex flex-row justify-center gap-3 ">
            {blog?.data?.tags?.map((ite, index) => (
              <div
                key={index}
                className="border-2 border-[#B6D8C2] rounded-lg p-1.5 text-[#419A62]"
              >
                {ite}
              </div>
            ))}
          </div>
          <div className="border-2 border-[#419A62] rounded-lg p-1.5 bg-[#419A62] text-[#FFFFFF] text-center">
            Check Eligibility
          </div>
        </div>

        <h1 className="text-[#105336] text-3xl mt-5 font-[600]">About</h1>
        <p
          className="text-black"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(blog?.data?.description),
          }}
        />
      </div>
    </div>
  </div>
</div>


  );
};

export default ViewModal;
