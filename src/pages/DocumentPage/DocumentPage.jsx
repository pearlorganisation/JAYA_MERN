import DropdownBasic from "../../components/Dropdown cop/Dropdown";
import { useEffect, useRef, useState } from "react";
import Bot from "../../assets/Bot.jpg";
import { useDispatch, useSelector } from "react-redux";
import {
  getDocumentByUserId,
  uploadDocument,
} from "../../features/actions/uploadDocumentAction";

import AddNewDocButton from "./AddNewDocButton";

const DocumentPage = () => {
  const { userData } = useSelector((state) => state.auth);
  const { isSuccess, documentData, isLoading } = useSelector(
    (state) => state.document
  );
  const dispatch = useDispatch();
  const [documentCollectionMap, setDocumentCollectionMap] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [fileName, setFileName] = useState("My File");
  const [docuemnt, setDocument] = useState("");
  const [personName, setPersonName] = useState(userData?.user?.username || "");

  const fileInputRef = useRef();

  useEffect(() => {
    const documentMap = new Map();

    if (documentData?.length > 0) {
      documentData?.forEach((element) => {
        documentMap?.set(element?._id, element);
      });
    }

    setDocumentCollectionMap(documentMap);
  }, [documentData, isSuccess]);

  const handleChange = (event) => {
    event.preventDefault();
    const fileData = event.target.files;
    if (fileData) {
      setDocument(fileData);
      setShowModal(true);
    }
  };

  const handleDocument = () => {
    const formData = new FormData();

    formData.append("documentTitle", fileName);
    formData.append("name", personName);
    formData.append("user", userData?.user?._id);
    formData.append("document", docuemnt[0]);

    dispatch(uploadDocument(formData));
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(getDocumentByUserId({ userId: userData?.user?._id }));
      setShowModal(false);
    }
  }, [isSuccess]);

  useEffect(() => {
    dispatch(getDocumentByUserId({ userId: userData?.user?._id }));
  }, []);

  return (
    <div className="min-h-screen">
      <div>
        <div className="flex py-8 px-6 gap-8 items-start ">
          <img src="botHead.png" />
          <div className="flex flex-col gap-1">
            <p className="text-base leading-6 text-[#393939] font-light">
              Hey !
            </p>
            <p className="text-base leading-6 text-[#393939] font-light">
              Upload your certificates and documents for better experience also,
            </p>
            <p className="text-base leading-6 text-[#393939] font-light">
              save as your e-certificates.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <img src="documentImage.svg" className="" />
        </div>
        <div className="p-10 flex flex-col  gap-5">
          <div className="grid  grid-cols-1 gap-3">
            {documentData &&
              documentCollectionMap &&
              documentCollectionMap?.size > 0 &&
              documentData?.map((el) => {
                const currDocData = documentCollectionMap?.get(el?._id);
                return (
                  <>
                    {
                      <AddNewDocButton
                        key={el._id}
                        currDocData={currDocData}
                        el={el}
                      />
                    }
                  </>
                );
              })}
          </div>
        </div>

        <div className="mb-24 mx-10">
          <h1 className="text-xl leading-[30px] font-medium text-[#315288] mt-4">
            Citizen
          </h1>
          <div className="border-[#0D5C2A] border-dashed  border-2 rounded-md max-w-min flex flex-col mt-4">
            <div className="p-3 flex items-center justify-center mt-4">
              <svg
                width="38"
                height="31"
                viewBox="0 0 38 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=""
              >
                <path
                  d="M34.4688 5.65626H19.5818L14.7812 0.855678C14.521 0.593377 14.2113 0.385417 13.87 0.243888C13.5287 0.102359 13.1626 0.0300838 12.7932 0.0312642H3.53125C2.78533 0.0312642 2.06996 0.32758 1.54251 0.855026C1.01507 1.38247 0.71875 2.09784 0.71875 2.84376V28.2652C0.71968 28.982 1.00481 29.6691 1.51162 30.1759C2.01842 30.6827 2.70553 30.9678 3.42227 30.9688H34.6252C35.3293 30.9678 36.0044 30.6877 36.5023 30.1898C37.0002 29.6919 37.2803 29.0169 37.2812 28.3127V8.46876C37.2812 7.72284 36.9849 7.00747 36.4575 6.48003C35.93 5.95258 35.2147 5.65626 34.4688 5.65626ZM12.7932 2.84376L15.6057 5.65626H3.53125V2.84376H12.7932ZM34.4688 28.1563H3.53125V8.46876H34.4688V28.1563ZM19 12.6875C19.373 12.6875 19.7306 12.8357 19.9944 13.0994C20.2581 13.3631 20.4062 13.7208 20.4062 14.0938V16.9063H23.2188C23.5917 16.9063 23.9494 17.0544 24.2131 17.3181C24.4768 17.5819 24.625 17.9396 24.625 18.3125C24.625 18.6855 24.4768 19.0432 24.2131 19.3069C23.9494 19.5706 23.5917 19.7188 23.2188 19.7188H20.4062V22.5313C20.4062 22.9042 20.2581 23.2619 19.9944 23.5256C19.7306 23.7894 19.373 23.9375 19 23.9375C18.627 23.9375 18.2694 23.7894 18.0056 23.5256C17.7419 23.2619 17.5938 22.9042 17.5938 22.5313V19.7188H14.7812C14.4083 19.7188 14.0506 19.5706 13.7869 19.3069C13.5232 19.0432 13.375 18.6855 13.375 18.3125C13.375 17.9396 13.5232 17.5819 13.7869 17.3181C14.0506 17.0544 14.4083 16.9063 14.7812 16.9063H17.5938V14.0938C17.5938 13.7208 17.7419 13.3631 18.0056 13.0994C18.2694 12.8357 18.627 12.6875 19 12.6875Z"
                  fill="#393939"
                />
              </svg>
            </div>

            <div className="px-6 py-4 flex items-center justify-center mb-3">
              <button
                onClick={() => fileInputRef.current.click()}
                className="rounded-md bg-[#419A62] border font-medium text-base leading-6 border-green-100 text-white w-60 h-10"
              >
                {" "}
                Browse
              </button>

              <input
                onChange={handleChange}
                multiple={false}
                ref={fileInputRef}
                type="file"
                hidden
              />
            </div>

            <div className="px-6 mt-2 mb-2 w-full">
              {showModal ? (
                <div>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative bg-white rounded-lg">
                      <div className="border-0 rounded-2xl relative flex flex-col w-full lg:w-full bg-white outline-none focus:outline-none">
                        <div className="flex flex-row justify-between">
                          <div className="relative p-6 flex-auto">
                            <div className=" flex flex-row gap-4">
                              <img src={Bot} className="w-8 h-8" />
                              <h1 className="text-[#393939] font-light text-base leading-6">
                                {" "}
                                Please Fill the Details !
                              </h1>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-3 mt-4">
                              <div className="flex flex-row gap-3 items-center justify-start">
                                <h1 className="text-[#393939] font-light text-base leading-6">
                                  {" "}
                                  File Name :{" "}
                                </h1>{" "}
                                <input
                                  type="text"
                                  value={fileName}
                                  onChange={(e) => {
                                    setFileName(e.target.value);
                                  }}
                                  placeholder="Enter File Name"
                                  className="border-2 border-green-200 rounded-md p-1"
                                />
                              </div>

                              <div className="flex flex-row gap-3 items-center justify-center">
                                <h1 className="text-[#393939] font-light text-base leading-6">
                                  {" "}
                                  Person Name :{" "}
                                </h1>{" "}
                                <input
                                  type="text"
                                  value={personName}
                                  onChange={(e) => {
                                    setPersonName(e.target.value);
                                  }}
                                  placeholder="Enter Person Name"
                                  className="border-2 border-green-200 rounded-md p-1"
                                />
                              </div>
                            </div>
                          </div>

                          <div
                            className="p-6 hover:cursor-pointer"
                            onClick={() => setShowModal(false)}
                          >
                            <svg
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M21.5557 20.008C21.6573 20.1097 21.7379 20.2303 21.7929 20.3631C21.8479 20.4958 21.8762 20.6381 21.8762 20.7819C21.8762 20.9256 21.8479 21.0679 21.7929 21.2007C21.7379 21.3334 21.6573 21.4541 21.5557 21.5557C21.4541 21.6573 21.3334 21.7379 21.2007 21.7929C21.0679 21.8479 20.9256 21.8762 20.7819 21.8762C20.6381 21.8762 20.4958 21.8479 20.3631 21.7929C20.2303 21.7379 20.1097 21.6573 20.008 21.5557L10.9381 12.4844L1.86819 21.5557C1.66295 21.7609 1.3846 21.8762 1.09436 21.8762C0.804116 21.8762 0.525762 21.7609 0.32053 21.5557C0.115298 21.3505 5.72136e-09 21.0721 0 20.7819C-5.72136e-09 20.4916 0.115298 20.2133 0.32053 20.008L9.39182 10.9381L0.32053 1.86819C0.115298 1.66295 0 1.3846 0 1.09436C0 0.804116 0.115298 0.525762 0.32053 0.32053C0.525762 0.115298 0.804116 0 1.09436 0C1.3846 0 1.66295 0.115298 1.86819 0.32053L10.9381 9.39182L20.008 0.32053C20.2133 0.115298 20.4916 -5.72136e-09 20.7819 0C21.0721 5.72136e-09 21.3505 0.115298 21.5557 0.32053C21.7609 0.525762 21.8762 0.804116 21.8762 1.09436C21.8762 1.3846 21.7609 1.66295 21.5557 1.86819L12.4844 10.9381L21.5557 20.008Z"
                                fill="#393939"
                              />
                            </svg>
                          </div>
                        </div>

                        <div className="flex items-center justify-end px-6 mb-3">
                          {isLoading ? (
                            <button
                              disabled
                              className="bg-gray-500 w-full text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={handleDocument}
                            >
                              Loading ...
                            </button>
                          ) : (
                            <button
                              className="bg-[#419A62] w-full text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={handleDocument}
                            >
                              Save
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </div>
              ) : null}
            </div>

            <div className="hidden">
              <div className="flex justify-between px-2 items-center border-t-2 border-t-green-300">
                <h4 className="text-[#393939]  font-semibold ">Aadhar</h4>
                <DropdownBasic />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentPage;
