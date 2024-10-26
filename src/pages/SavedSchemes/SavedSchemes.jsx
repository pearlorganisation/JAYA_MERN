import React, { useEffect, useState } from "react";
import SchemeCard from "../Schemes/SchemeCard";
import { getBookmarksAction } from "../../features/actions/bookMarkAction";
import { useDispatch, useSelector } from "react-redux";

const SavedSchemes = () => {
  const schemeState = useSelector((state) => state.schemes.schemes.data);
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);
  const { bookmarksData, isSuccess } = useSelector((state) => state.bookmarks);
  const [schemeMap, setSchemeMap] = useState(new Map());

  useEffect(() => {
    let map = new Map();
    schemeState?.forEach((element) => {
      map.set(element._id, element);
    });
    setSchemeMap(map);
  }, [schemeState]);

  useEffect(() => {
    dispatch(getBookmarksAction(userData?.user?._id));
  }, []);

  useEffect(() => {
    if (isSuccess) {
      dispatch(getBookmarksAction(userData?.user?._id));
    }
  }, [isSuccess]);
  return (
    <div>
      <div className="flex flex-col py-4 gap-5">
        {bookmarksData && bookmarksData.length == 0 && (
          <div className="flex items-center justify-center mt-4">
            No Bookmarks Found
          </div>
        )}
        {bookmarksData &&
          schemeMap &&
          bookmarksData.map((el, index) => (
            <SchemeCard key={index} scheme={el} map={schemeMap} />
          ))}
      </div>
    </div>
  );
};

export default SavedSchemes;
