import React, { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

const EligibilityModal = ({ isOpen, onClose }) => {
  // Initialize state variables with default values
  const [isResident, setIsResident] = useState(null);
  const [isDifferentlyAbled, setIsDifferentlyAbled] = useState(null);
  const [moreDisability, setIsMoreDisability] = useState(null);
  const [isBPL, setIsBPL] = useState(null);

  // Handle resetting all state variables
  const handleReset = () => {
    setIsResident(null);
    setIsDifferentlyAbled(null);
    setIsMoreDisability(null);
    setIsBPL(null);
  };

  // If the modal is not open, don't render anything
  if (!isOpen) return null;

  return (
    <div className="z-50 absolute inset-0 flex justify-center items-center bg-black/60 px-24"   onClick={onClose}>
      {/* Modal Wrapper */}
      <div
        className="relative bg-white shadow-lg rounded-lg w-full  p-5"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing on inner click
      >
        

        {/* Modal Content */}
        <div className="flex flex-col gap-6 container mx-auto min-h-[85%] text-center">
          <h1 className="text-xl mb-5 font-semibold ">
            <IoMdInformationCircleOutline className="text-red-500 text-5xl mx-auto" />
          </h1>


          <div className="text-base mb-4 flex self-center">
            Based on your inputs you may not be eligible for Financial Assistance To Disabled Students Pursuing (10th, 11th, 12th Equivalent Exams)
          </div>

          {/* Resident of Kerala State */}
          <div className="text-left">
            <p className="">
            Eligibility Criteria was not fulfilled for following Question(s)
            </p>
            <li>Are you a resident of Kerala State?</li>
            <li>Are you a differently-abled student?</li>
           
          </div>

          <hr className="border-gray-300" />
         <button className="bg-[#419A62] text-white  justify-centerw-20 rounded-md p-2 flex  self-end">Okay</button>
        </div>
      </div>
    </div>
  );
};

export default EligibilityModal;
