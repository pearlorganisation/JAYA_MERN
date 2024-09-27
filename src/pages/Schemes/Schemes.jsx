import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSchemes } from "../../features/actions/schemesAction";
import SchemeCard from "./SchemeCard";
import { getBookmarksAction } from "../../features/actions/bookMarkAction";
import { resetIsSuccess } from "../../features/slices/bookMarkSlice";

const Schemes = () => {
  const dispatch = useDispatch();

  const schemeState = useSelector((state) => state.schemes.schemes.data);

  const { userData } = useSelector((state) => state.auth);
  const { bookmarksData, isSuccess } = useSelector((state) => state.bookmarks);
  const [bookmarkMap, setBookmarkMap] = useState(new Map());

  console.log("Bookmarks", bookmarksData);

  useEffect(() => {
    if (userData?.user?._id) {
      dispatch(getBookmarksAction(userData?.user?._id));
    }
  }, [userData]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(resetIsSuccess(false));
    }
  }, [isSuccess]);

  useEffect(() => {
    // Populate the map whenever bookmarks change
    const newMap = new Map();
    bookmarksData?.forEach((element) => newMap.set(element._id, element));
    setBookmarkMap(newMap);
  }, [bookmarksData]);

  useEffect(() => {
    dispatch(getSchemes());
  }, []);

  return (
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

        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
            <img
              src="./bot_face.svg"
              alt="Icon"
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-base font-light text-[#000000]">Great!</p>
            <p className="text-base font-light text-[#000000] w-[80%]">
              You have eligibility for {schemeState?.length} schemes provided by
              state and central government.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {Array.isArray(schemeState) && schemeState.length > 0
            ? schemeState.map((scheme) => (
                <SchemeCard
                  map={bookmarkMap}
                  scheme={scheme}
                  key={scheme._id}
                />
              ))
            : "No Data Found"}
        </div>
      </div>
    </div>
  );
};

export default Schemes;
