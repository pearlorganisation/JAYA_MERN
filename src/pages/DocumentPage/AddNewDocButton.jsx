/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import Bot from "../../assets/Bot.jpg";
import DocumentCard from "./DocumentCard";
import { useDispatch, useSelector } from "react-redux";
import { addDocumentInUserCollection } from "../../features/actions/uploadDocumentAction";

const AddNewDocButton = ({ el, currDocData }) => {
  const { isLoading } = useSelector((state) => state.document);
  const addDocFileRef = useRef();
  const personIdRef = useRef(null);
  const dispatch = useDispatch();
  const fileName = useRef("My File");
  const handleAddDocument = () => {
    const formData = new FormData();

    formData.append("document", docuemnt);
    formData.append("documentTitle", fileName.current.value);

    dispatch(
      addDocumentInUserCollection({
        id: personIdRef.current,
        payload: formData,
      })
    );

    setAddCollectionModal(false);
  };

  const [docuemnt, setDocument] = useState("");

  const [addCollectionModal, setAddCollectionModal] = useState(false);
  const handleImage = (event, id) => {
    event.preventDefault();

    personIdRef.current = id;
    console.log(event.target, "image details");
    const fileData = event.target.files[0];

    console.log(fileData, "file data");
    if (fileData) {
      setDocument(fileData);
      setAddCollectionModal(true);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between">
        <h1>{currDocData?.name ?? ""}</h1>

        <button
          onClick={() => addDocFileRef.current.click()}
          className="px-4 py-2 bg-[#419A62] text-white"
        >
          <p>Add More Documents</p>
          <input
            onChange={(e) => {
              handleImage(e);
              personIdRef.current = el?._id;
              console.log("name id", el?._id);
            }}
            ref={addDocFileRef}
            multiple={false}
            type="file"
            hidden
          ></input>
        </button>
      </div>
      {currDocData && (
        <DocumentCard
          documentId={el?._id ?? "shubham"}
          data={currDocData?.documentsCollection ?? []}
        />
      )}

      <div className="px-6 mt-2 mb-2 w-full">
        {addCollectionModal ? (
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
                            ref={fileName}
                            placeholder="File Name"
                            className="border-2 border-green-200 rounded-md p-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="p-6 hover:cursor-pointer"
                      onClick={() => setAddCollectionModal(false)}
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
                        onClick={handleAddDocument}
                      >
                        Loading ...
                      </button>
                    ) : (
                      <button
                        className="bg-[#419A62] w-full text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handleAddDocument}
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
    </>
  );
};

export default AddNewDocButton;
