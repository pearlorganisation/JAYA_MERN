
import React, { useState } from 'react';

const SchemeModal = ({ isOpen, onClose }) => {




  const [isYesChecked, setIsYesChecked] = useState(false);
  const [isNoChecked, setIsNoChecked] = useState(false);

  const handleYesChange = () => {
    setIsYesChecked(true);
    setIsNoChecked(false); 
  };

  const handleNoChange = () => {
    setIsNoChecked(true);
    setIsYesChecked(false); };
  return (
    <div
      className={
        `bg-black/30 z-20 fixed flex justify-end h-full w-full top-0 transform ease-in-out duration-700 ${
            isOpen ? "left-0" : "left-[1440px]"
          } `
      }
      onClick={onClose} >
      <div
        className="bg-white lg:w-[50%]"
        onClick={(e) => e.stopPropagation()} >
        <div className="bg-white/95 p-4 rounded-lg shadow-lg w-full h-screen relative pl-20">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>

          <div className="flex justify-center items-center gap-10 container mx-auto">
            <div>
              <h1 className="text-start text-[#070707] text-xl mb-5 font-poppins font-[600]">
                Check Eligibility
              </h1>
              <div className="flex justify-between">
                <div className="flex flex-row gap-3">
                  <div className="rounded-lg p-1.5 text-[#419A62]">
                  Financial Assistance To Disabled Students Pursuing (10th, 11th, 12th Equivalent Exams)
                  </div>

                 
                </div>

                
              </div>
              <p className="text-black">
              Are you a resident of Kerala State?*

              </p>
              <div className="flex items-center space-x-4">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={isYesChecked}
          onChange={handleYesChange}
          className="mr-2"
        />
        <span>Yes</span>
      </label>
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={isNoChecked}
          onChange={handleNoChange}
          className="mr-2"
        />
        <span>No</span>
      </label>
    </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeModal;
