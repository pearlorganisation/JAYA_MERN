import React from "react";
import { Link } from "react-router-dom";

const Schemes = () => {
  return (
    <div>
      <div className="p-4 md:p-8">
        <Link to="/">
          <button className="flex items-center text-xl text-[#419A62] font-medium mb-4 mr-3">
            <span className="mr-3">
              <svg
                width="35"
                height="35"
                viewBox="0 0 35 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.68668 17.9629L15.3465 25.8242C15.4675 25.9399 15.6275 26.0029 15.7929 25.9999C15.9583 25.9969 16.116 25.9282 16.233 25.8081C16.3499 25.6881 16.4169 25.5262 16.4198 25.3565C16.4228 25.1867 16.3614 25.0225 16.2486 24.8983L9.67929 18.1551H26.8617C27.031 18.1551 27.1933 18.0861 27.313 17.9632C27.4327 17.8404 27.5 17.6737 27.5 17.5C27.5 17.3263 27.4327 17.1596 27.313 17.0368C27.1933 16.9139 27.031 16.8449 26.8617 16.8449H9.67929L16.2486 10.1017C16.3614 9.97752 16.4228 9.81326 16.4198 9.64355C16.4169 9.47383 16.3499 9.3119 16.233 9.19188C16.116 9.07185 15.9583 9.0031 15.7929 9.0001C15.6275 8.99711 15.4675 9.0601 15.3465 9.17582L7.68668 17.0371C7.56714 17.1599 7.5 17.3264 7.5 17.5C7.5 17.6736 7.56714 17.8401 7.68668 17.9629Z"
                  fill="#393939"
                />
              </svg>
            </span>
            Back
          </button>
        </Link>

        <div className="flex items-center mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
            <img
              src="./bot_face.svg"
              alt="Icon"
              className="w-full h-full rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <p className="text-base font-light text-[#000000]">Great!</p>
            <p className="text-base font-light text-[#000000] w-[80%]">
              You have eligibility for 158 schemes provided by state and central
              government.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          {Array.from({ length: 3 }).map((item) => {
            return (
              <div
                key={item}
                className="bg-white rounded-lg shadow-md px-4 py-4 border-2 border-green-100"
              >
                <div className="flex justify-between">
                  <p className="text-[#9b9b9b] text-base font-normal mb-2">
                    Ministry Of Women Welfare Department
                  </p>
                  <div className="p-2 bg-white group border-2  hover:cursor-pointer hover:bg-[#419A62] border-green-100 rounded-full">
                    <svg
                      width="13"
                      height="17"
                      viewBox="0 0 13 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <path
                        d="M11.7 0.5H1.3C0.955219 0.5 0.624559 0.620407 0.380761 0.834732C0.136964 1.04906 3.14084e-08 1.33974 3.14084e-08 1.64285V16.01C-3.33629e-05 16.0975 0.0265631 16.1833 0.0770277 16.2587C0.127492 16.3341 0.199985 16.3962 0.286976 16.4386C0.373967 16.481 0.472286 16.5021 0.571721 16.4998C0.671155 16.4975 0.768079 16.4719 0.852429 16.4256L6.49907 13.3235L12.1476 16.4256C12.2319 16.4719 12.3288 16.4975 12.4283 16.4998C12.5277 16.5021 12.626 16.481 12.713 16.4386C12.8 16.3962 12.8725 16.3341 12.923 16.2587C12.9734 16.1833 13 16.0975 13 16.01V1.64285C13 1.33974 12.863 1.04906 12.6192 0.834732C12.3754 0.620407 12.0448 0.5 11.7 0.5ZM11.8857 15.126L6.79436 12.3293C6.70581 12.2806 6.60349 12.2548 6.49907 12.2548C6.39465 12.2548 6.29233 12.2806 6.20379 12.3293L1.11429 15.126V1.64285C1.11429 1.59955 1.13385 1.55802 1.16868 1.5274C1.20351 1.49678 1.25075 1.47958 1.3 1.47958H11.7C11.7493 1.47958 11.7965 1.49678 11.8313 1.5274C11.8661 1.55802 11.8857 1.59955 11.8857 1.64285V15.126Z"
                        fill="#419A62"
                        className="group-hover:fill-white"
                      />
                    </svg>
                  </div>
                </div>
                <h2 className="text-[#12813B] text-2xl font-semibold mb-2">
                  Moovalur Ramamirtham Ammaiyar Higher Education Assurance
                  Scheme
                </h2>
                <p className="text-[#5e5e5e] font-normal text-base mb-4">
                  The Scheme “Moovalur Ramamirtham Ammaiyar Higher Education
                  Assurance Scheme” Was Launched By The Department Of Social
                  Welfare & Women...
                </p>

                <div className="flex flex-col lg:flex-row  lg:justify-between items-center">
                  <div className="flex flex-wrap  justify-start gap-2 mb-4 lg:w-[80%]">
                    <span className="border-green-100 border-2 text-[#419A62] text-xs font-medium px-3 py-1 rounded-md">
                      1000/month
                    </span>
                    <span className="border-green-100 border-2 text-[#419A62] text-xs font-medium px-3 py-1 rounded-md">
                      70% Reservation
                    </span>

                    <span className="border-green-100 border-2 text-[#419A62] text-xs font-medium px-3 py-1 rounded-md">
                      Scholarship
                    </span>

                    <span className="border-green-100 border-2 text-[#419A62] text-xs font-medium px-3 py-1 rounded-md">
                      1000/month
                    </span>
                    <span className="border-green-100 border-2 text-[#419A62] text-xs font-medium px-3 py-1 rounded-md">
                      70% Reservation
                    </span>
                    <span className="border-green-100 border-2 text-[#419A62] text-xs font-medium px-3 py-1 rounded-md">
                      Scholarship
                    </span>
                    <span className="border-green-100 border-2 text-[#419A62] text-xs font-medium px-3 py-1 rounded-md">
                      1000/month
                    </span>
                    <span className="border-green-100 border-2 text-[#419A62] text-xs font-medium px-3 py-1 rounded-md">
                      70% Reservation
                    </span>
                    <span className="border-green-100 border-2 text-[#419A62] text-xs font-medium px-3 py-1 rounded-md">
                      Scholarship
                    </span>
                  </div>
                  <div className="flex items-center justify-center text-[#419A62]  lg:w-fit w-[90%] hover:bg-[#419A62] hover:text-white border-2 border-green-100 rounded-md">
                    <Link to="/schemeDetail">
                      <button className=" text-center min-w-full  font-semibold  px-6 py-2 rounded-md">
                        Check Eligibility
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Schemes;
