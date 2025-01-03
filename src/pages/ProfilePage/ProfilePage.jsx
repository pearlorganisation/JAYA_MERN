import { useEffect, useState } from "react";
import ProfileSavedCard from "../../components/ProfileSavedCard/ProfileSavedCard";
import { useDispatch, useSelector } from "react-redux";
import { getBookmarksAction } from "../../features/actions/bookMarkAction";
import ProfileCard from "./ProfileCard";
import SchemeCard from "../Schemes/SchemeCard";
import { getProfile } from "../../features/actions/authAction";
import MyDocuments from "../MyDocuments/MyDocuments";

const ProfilePage = () => {
  const [documentSwitch, setDocumentSwitch] = useState(0);

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
    <div className="lg:py-12 lg:px-20">
      <div className="w-full items-center justify-center flex">
        <div className="rounded-lg  bg-white pt-8 pb-10 w-[90%] lg:w-[80%]">
          <ProfileCard />
        </div>
      </div>

      <div className=" px-2 lg:px-5 bg-white">
        <div className="flex items-center justify-center">
          <div className=" grid grid-cols-2 overflow-hidden w-[100%] lg:w-[80%] ">
            <button
              onClick={() => setDocumentSwitch(0)}
              className={`${
                documentSwitch === 0
                  ? "before:bg-[#419A62]"
                  : " before:bg-green-200"
              }  text-center py-3 before:content-[""] relative before:absolute before:w-full before:h-[6px]  before:bottom-0 before:left-0 before:rounded-bl-[6px] before:rounded-tl-[6px] text-[#393939] font-medium text-xl leading-[30px]`}
            >
              {" "}
              Saved
            </button>

            <button
              onClick={() => setDocumentSwitch(1)}
              className={`${
                documentSwitch === 1
                  ? " before:bg-[#419A62]"
                  : " before:bg-green-200"
              }   text-center py-3 text-[#393939] font-medium text-xl leading-[30px]  before:content-[""] relative before:absolute before:w-full before:h-[6px]  before:bottom-0 before:left-0 before:rounded-br-[6px] before:rounded-tr-[6px] `}
            >
              My Documents
            </button>
          </div>
        </div>

        <div className="">
          <div>
            {documentSwitch === 0 ? (
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
            ) : (
              <div className="min-h-[18rem] grid place-items-center">
                <MyDocuments />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
