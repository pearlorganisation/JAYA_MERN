import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SchemeModal = ({ isOpen, onClose }) => {
  const [isResident, setIsResident] = useState();
  const [isDifferentlyAbled, setIsDifferentlyAbled] = useState();
  const [moreDisability, setIsMoreDisability] = useState();

  const [isBPL, setIsBPL] = useState();

  const { register, handleSubmit } = useForm();

  const handleSubmission = (data) => {
    console.log(data);
  };

  // const [userdata, setUserdata] = useState({
  //   isResident: null,
  //   isDifferentlyAbled: null,
  //   moreDisability: null,
  //   isBPL: null,
  // });

  // const [resultModal, setResultModal] = useState();

  // const handleSubmission = ()=> {
  //   if()
  // }

  return (
    <div
      className={`bg-black/30 z-20 fixed flex justify-end h-full w-full top-0 transform ease-in-out duration-700 ${
        isOpen ? "left-0" : "left-[1440px]"
      } `}
      onClick={onClose}
    >
      <div
        className="bg-white w-[70%] lg:w-[50%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-white/95 p-4 rounded-lg shadow-lg w-full h-screen relative pl-20">
          <button
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
            onClick={onClose}
          >
            &times;
          </button>

          <div className="flex justify-center items-center gap-10 container mx-auto">
            <form>
              <h1 className="text-start text-[#070707] text-xl mb-5 font-poppins font-[600]">
                Check Eligibility
              </h1>

              <hr className="mt-3" />
              <div className="flex justify-between mt-4">
                <div className="flex flex-row gap-3">
                  <div className="rounded-lg p-1.5 text-[#419A62] text-xl font-semibold">
                    Financial Assistance To Disabled Students Pursuing (10th,
                    11th, 12th Equivalent Exams)
                  </div>
                </div>
              </div>
              <p className="text-black mt-4">
                Are you a resident of Kerala State?*
              </p>
              <div className="flex items-center space-x-4 mt-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="resident-radio"
                    onChange={() => setIsResident(true)}
                    className="mr-2"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="resident-radio"
                    onChange={() => setIsResident(false)}
                    className="mr-2"
                  />
                  <span>No</span>
                </label>
              </div>

              {isResident && (
                <div>
                  <p className="text-black mt-4">
                    Are you a differently-abled student?*
                  </p>
                  <div className="flex items-center space-x-4 mt-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="diffabled"
                        onChange={() => setIsDifferentlyAbled(true)}
                        className="mr-2"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="diffabled"
                        onChange={() => setIsDifferentlyAbled(false)}
                        className="mr-2"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              )}

              {isDifferentlyAbled && isResident && (
                <div>
                  <p className="text-black mt-4">
                    Do you have 40% or more disability?*
                  </p>
                  <div className="flex items-center space-x-4 mt-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="more-disability"
                        onChange={() => setIsMoreDisability(true)}
                        className="mr-2"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="more-disability"
                        onChange={() => setIsMoreDisability(false)}
                        className="mr-2"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              )}

              {moreDisability && isDifferentlyAbled && isResident && (
                <div>
                  <p className="text-black mt-4">
                    Do you belong to the Above Poverty Line (APL) or Below
                    Poverty Line (BPL) category?*
                  </p>
                  <div className="flex items-center space-x-4 mt-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="isBPL"
                        onChange={() => setIsBPL(true)}
                        className="mr-2"
                      />
                      <span>Yes</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="isBPL"
                        onChange={() => setIsBPL(false)}
                        className="mr-2"
                      />
                      <span>No</span>
                    </label>
                  </div>
                </div>
              )}

              <div className="flex flex-row gap-6 mt-8">
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#419A62] rounded-md text-white"
                  onSubmit={handleSubmit(handleSubmission)}
                >
                  Submit
                </button>

                <button
                  className="px-4 py-2 border border-black rounded-md"
                  onClick={() => setIsResident(false)}
                >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeModal;
{
  /*
  

              // <input
              //   {...register("Developer", { required: true })}
              //   type="radio"
              //   value="Yes"
              // />
              // <input
              //   {...register("Developer", { required: true })}
              //   type="radio"
              //   value="No"
              // />

  */
}
