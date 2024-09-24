
import React from "react";

const Modal = ({ isOpen, onClose, }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 " onClick={onClose}>
      <div
        className="bg-white/95 p-4 rounded-lg shadow-lg w-full h-screen relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
      
        <div className=" flex justify-center items-center gap-10 container mx-auto">
          <div>
            <p className="text-start mb-3">Ministry of women welfare department</p>
            <h1 className="text-start text-[#107536] text-5xl mb-5  font-poppins font-[600]">
              Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme
            </h1>
            <div className="flex justify-between ">
            <div className="flex flex-row gap-3  ">
              <div className="border-2 border-[#B6D8C2] rounded-lg p-1.5 text-[#419A62]">
                1000/month
              </div>

              <div className="border-2 border-[#B6D8C2] rounded-lg p-1.5 text-[#419A62]">
                70% Reservation
              </div>
              <div className="border-2 border-[#B6D8C2] rounded-lg p-1.5 text-[#419A62]">
                Scholarship
              </div>
            </div>
            
            <div className="border-2 border-[#419A62] rounded-lg p-1.5 bg-[#419A62] text-[#FFFFFF] text-center">Check Eligibility</div>
            </div>
            <h1 className="text-[#105336] text-3xl mt-5 font-[600]">About</h1>
            <p className="text-black"> "Dr. Ambedakar Centrally Sponsored Scheme of Post-Matric Scholarships for the Economically Backward Class (EBC) Students" is a Scholarship Scheme by the Department of Social Justice and Empowerment, Ministry of Social Justice and Empowerment. The objective of the scheme is to provide financial assistance to the Economically Backward Class (EBC) students studying at the post-matriculation or post-secondary stage to enable them to complete their education. These scholarships shall be available for studies in India only and will be awarded by the Government of State/Union Territory to which the applicant actually belongs, i.e. permanently settled.</p>
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Modal;
