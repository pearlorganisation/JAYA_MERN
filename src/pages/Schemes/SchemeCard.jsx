/* eslint-disable react/prop-types */
import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  addSchemeToBookmark,
  removeFromBookmark,
} from "../../features/actions/schemesAction";
import { useDispatch, useSelector } from "react-redux";
import { resetIsSuccess } from "../../features/slices/bookMarkSlice";
import { getBookmarksAction } from "../../features/actions/bookMarkAction";

const SchemeCard = ({ scheme, map }) => {
  const { userData } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  
  const bookMarkColor =  map.get(scheme._id) ? "bg-[#419A62]" : "bg-white";
  

  const isBookmarked = map.get(scheme._id) ? true : false;
  console.log("asdsad",isBookmarked);


  const addBookmark = () => {
    dispatch(
      addSchemeToBookmark({
        userId: userData.user._id,
        schemeId: scheme._id,
      })
    );
  };


  const removeBookMark = ()=>{
    dispatch(removeFromBookmark({
      userId: userData.user._id,
        schemeId: scheme._id,
    }))
  }


  function handleBookMark()
  {

    console.log("we are comming here ")
      if(isBookmarked)
        removeBookMark();
      else
        addBookmark();
  }

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(getBookmarksAction(userData.user._id));
  //     dispatch(resetIsSuccess(false));
  //   }
  // }, [isSuccess]);

  return (
    <div
      key={scheme._id}
      className="bg-white rounded-lg shadow-md px-4 py-4 border-2 border-green-100"
    >
      <>
        <div className="flex justify-between">
          <p className="text-[#9b9b9b] text-base font-normal mb-2">
            {scheme.miniTitle}
          </p>
          <div
            // style={{ backgroundColor: ` ${bookMarkColor} ` }}
            className={`p-2  ${bookMarkColor}  group border-2  hover:cursor-pointer  hover:bg-[#419A62 border-green-100 rounded-full`}
            onClick={handleBookMark}
          >
            <svg
              width="13"
              height="17"
              viewBox="0 0 13 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M11.7 0.5H1.3C0.955219 0.5 0.624559 0.620407 0.380761 0.834732C0.136964 1.04906 3.14084e-08 1.33974 3.14084e-08 1.64285V16.01C-3.33629e-05 16.0975 0.0265631 16.1833 0.0770277 16.2587C0.127492 16.3341 0.199985 16.3962 0.286976 16.4386C0.373967 16.481 0.472286 16.5021 0.571721 16.4998C0.671155 16.4975 0.768079 16.4719 0.852429 16.4256L6.49907 13.3235L12.1476 16.4256C12.2319 16.4719 12.3288 16.4975 12.4283 16.4998C12.5277 16.5021 12.626 16.481 12.713 16.4386C12.8 16.3962 12.8725 16.3341 12.923 16.2587C12.9734 16.1833 13 16.0975 13 16.01V1.64285C13 1.33974 12.863 1.04906 12.6192 0.834732C12.3754 0.620407 12.0448 0.5 11.7 0.5ZM11.8857 15.126L6.79436 12.3293C6.70581 12.2806 6.60349 12.2548 6.49907 12.2548C6.39465 12.2548 6.29233 12.2806 6.20379 12.3293L1.11429 15.126V1.64285C1.11429 1.59955 1.13385 1.55802 1.16868 1.5274C1.20351 1.49678 1.25075 1.47958 1.3 1.47958H11.7C11.7493 1.47958 11.7965 1.49678 11.8313 1.5274C11.8661 1.55802 11.8857 1.59955 11.8857 1.64285V15.126Z"
                fill="#419A62"
                className={`${
                  isBookmarked ? " fill-white" : " fill-[#4A9162]"
                } `}
              />
            </svg>
          </div>
        </div>

        <Link to={`/schemes/${scheme._id}`}>
          <h2 className="text-[#12813B] text-2xl font-semibold mb-2">
            {scheme.title}
          </h2>
          <p className="text-[#5e5e5e] font-normal text-base mb-4">
            The Scheme “Moovalur Ramamirtham Ammaiyar Higher Education Assurance
            Scheme” Was Launched By The Department Of Social Welfare & Women...
          </p>

          <div className="flex flex-col lg:flex-row  lg:justify-between items-center">
            <div className="flex flex-wrap  justify-start gap-2 mb-4 lg:w-[80%]">
              {scheme?.tags.map((tag) => (
                <span
                  key={tag}
                  className="border-green-100 border-2 text-[#419A62] text-xs font-medium px-3 py-1 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-center text-[#419A62]  lg:w-fit w-[90%] hover:bg-[#419A62] hover:text-white border-2 border-green-100 rounded-md">
              <Link to="/schemeDetail">
                <button className=" text-center min-w-full  font-semibold  px-6 py-2 rounded-md">
                  Check Eligibility
                </button>
              </Link>
            </div>
          </div>
        </Link>
      </>
    </div>
  );
};

export default SchemeCard;
