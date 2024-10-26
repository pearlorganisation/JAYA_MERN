/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const Modal = ({ schemeData, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 " onClick={onClose}>
      <button
        className="absolute right-3 text-white text-4xl z-50"
        onClick={onClose}
      >
        &times;
      </button>
      <div
        className="bg-black/30 p-4  grid place-items-center shadow-lg w-full h-screen relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="  gap-10 container h-[90dvh] rounded-lg overflow-auto bg-white px-6 py-4 mx-auto">
          <div>
            <>
              {" "}
              <p className="text-start mb-3">{schemeData?.miniTitle}</p>
              <h1 className="text-start text-[#107536] text-3xl mb-5  font-poppins font-[600]">
                {schemeData?.title}{" "}
              </h1>
              <div className="flex justify-between ">
                <div className="flex flex-row gap-3  ">
                  {schemeData?.tags?.map((ite) => (
                    <div className="border-2 border-[#B6D8C2] rounded-lg p-1.5 text-[#419A62]">
                      {ite}{" "}
                    </div>
                  ))}

                  {/* <div className="border-2 border-[#B6D8C2] rounded-lg p-1.5 text-[#419A62]">
                70% Reservation
              </div>
              <div className="border-2 border-[#B6D8C2] rounded-lg p-1.5 text-[#419A62]">
                Scholarship
              </div> */}
                </div>

                <div className="border-2 border-[#419A62] rounded-lg p-1.5 bg-[#419A62] text-[#FFFFFF] text-center">
                  Check Eligibility
                </div>
              </div>
              <h1 className="text-[#105336] text-3xl mt-5 font-[600]">About</h1>
              <p className="text-black">{parse(schemeData?.schemeBody)}</p>
            </>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
