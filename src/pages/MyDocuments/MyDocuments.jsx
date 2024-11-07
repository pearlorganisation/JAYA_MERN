import React, { useEffect, useState } from "react";
import DocumentCard from "../DocumentPage/DocumentCard";
import { getDocumentByUserId } from "../../features/actions/uploadDocumentAction";
import { useDispatch, useSelector } from "react-redux";

const MyDocuments = () => {
  const { userData } = useSelector((state) => state.auth);
  const { singleDocument, documentData } = useSelector(
    (state) => state.document
  );
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (singleDocument?.status) {
      setShowModal(false);
    }
  }, [singleDocument, documentData]);

  // useEffect(() => {
  //   dispatch(getDocumentByUserId({ userId: userData?.user?._id }));
  // }, [singleDocument]);

  const groupedDocuments = documentData.reduce((acc, document) => {
    const { _id: completeDocId, name, documentsCollection } = document;
    if (!acc[name]) {
      acc[name] = [];
    }
    acc[name].push({ completeDocId, name, currDoc: documentsCollection });
    return acc;
  }, {});
  return (
    <div className="p-10 flex flex-col  gap-5">
      {documentData?.length === 0 ? (
        <div>
          {" "}
          <h1> No Documents Found </h1>{" "}
        </div>
      ) : (
        <div className="grid  grid-cols-1 gap-3">
          {Array.isArray(documentData) &&
            documentData?.length > 0 &&
            Object.keys(groupedDocuments).map((el) => (
              <div key={el}>
                <h2>{el}</h2>

                <div className="flex flex-row gap-3 flex-wrap mt-5">
                  {groupedDocuments[el].map((doc, index) => (
                    <div key={index}>
                      <DocumentCard data={doc.currDoc} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default MyDocuments;
