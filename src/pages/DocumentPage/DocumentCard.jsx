/* eslint-disable react/prop-types */
import React from "react";
import DropdownBasic from "../../components/Dropdown cop/Dropdown";

const DocumentCard = ({ data, documentId }) => {
  function getFileExtension(url) {
    return url?.split(".").pop().split("?")[0].toLowerCase();
  }
  return (
    <div>
      <div className="flex flex-row gap-3 flex-wrap mt-5">
        {data.map((doc, index) => {
          return (
            <div key={index} className="flex flex-row justify-between">
              <div className="border-green-400 group  relative  border-2 rounded-md w-72  h-44 flex flex-col justify-end mt-5 mb-5">
                <a
                  className="w-20 h-20 mb-10 mx-24"
                  href={doc.path}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {(getFileExtension(doc.path) === "jpg" ||
                    getFileExtension(doc.path) === "png") && (
                    <img
                      src={doc.path}
                      alt="Preview"
                      style={{ width: "200px", height: "100px" }}
                    />
                  )}

                  {getFileExtension(doc.path) === "pdf" && (
                    <embed
                      src={doc.path}
                      type="application/pdf"
                      width="100"
                      height="100"
                    />
                  )}
                </a>
                <div className="flex justify-between px-2 items-center border-t-2 border-t-green-300 ">
                  <h1>{doc.title}</h1>
                  <DropdownBasic
                    documentId={documentId}
                    collectionId={doc._id}
                    doc={doc}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DocumentCard;
