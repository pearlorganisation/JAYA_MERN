import React, { useEffect, useState } from "react";
import DocumentCard from "../DocumentPage/DocumentCard";
import { getDocumentByUserId } from "../../features/actions/uploadDocumentAction";
import { useDispatch, useSelector } from "react-redux";
import AddNewDocButton from "../DocumentPage/AddNewDocButton";

const MyDocuments = () => {
  const { userData } = useSelector((state) => state.auth);

  const { isSuccess, documentData, isLoading } = useSelector(
    (state) => state.document
  );
  // const { singleDocument, documentData } = useSelector(
  //   (state) => state.document
  // );
  const dispatch = useDispatch();

  const [documentCollectionMap, setDocumentCollectionMap] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const documentMap = new Map();

    if (documentData?.length > 0) {
      documentData?.forEach((element) => {
        documentMap?.set(element?._id, element);
      });
    }

    setDocumentCollectionMap(documentMap);
  }, [documentData, isSuccess]);

  useEffect(() => {
    dispatch(getDocumentByUserId({ userId: userData?.user?._id }));
  }, []);

  // useEffect(() => {
  //   if (singleDocument?.status) {
  //     setShowModal(false);
  //   }
  // }, [singleDocument, documentData]);

  // useEffect(() => {
  //   dispatch(getDocumentByUserId({ userId: userData?.user?._id }));
  // }, [singleDocument]);

  // const groupedDocuments = documentData?.reduce((acc, document) => {
  //   const { _id: completeDocId, name, documentsCollection } = document;
  //   if (!acc[name]) {
  //     acc[name] = [];
  //   }
  //   acc[name].push({ completeDocId, name, currDoc: documentsCollection });
  //   return acc;
  // }, {});
  return (
    <div className="p-10 flex flex-col  gap-5">
      {documentData?.length === 0 ? (
        <div>
          {" "}
          <h1> No Documents Found </h1>{" "}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default MyDocuments;
