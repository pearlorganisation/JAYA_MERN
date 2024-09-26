import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import FeedbackForm from "../../components/FeedbackForm/FeedbackForm";
import Bot from ".././../assets/Bot.jpg";
import SchemeModal from "./SchemeModel";

const SchemeDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-0 lg:py-12 lg:px-8">
      <div className="">
        <div className="bg-white rounded-lg space-y-3 py-6 px-1">
          <div className=" px-6">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-4">
              <p className="text-[#393939] text-base font-light order-2 lg:order-1 mt-3 lg:mt-0">
                Ministry Of Women Welfare Department
              </p>
              <div className="flex space-x-4 order-1">
                <div className="p-[2px] border border-[#B6D8C2] group hover:bg-[#419A62] rounded-full">
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:bg-[#419A62] rounded-full"
                  >
                    <path
                      d="M22.7 9.5H12.3C11.9552 9.5 11.6246 9.62041 11.3808 9.83473C11.137 10.0491 11 10.3397 11 10.6428V25.01C11 25.0975 11.0266 25.1833 11.077 25.2587C11.1275 25.3341 11.2 25.3962 11.287 25.4386C11.374 25.481 11.4723 25.5021 11.5717 25.4998C11.6712 25.4975 11.7681 25.4719 11.8524 25.4256L17.4991 22.3235L23.1476 25.4256C23.2319 25.4719 23.3288 25.4975 23.4283 25.4998C23.5277 25.5021 23.626 25.481 23.713 25.4386C23.8 25.3962 23.8725 25.3341 23.923 25.2587C23.9734 25.1833 24 25.0975 24 25.01V10.6428C24 10.3397 23.863 10.0491 23.6192 9.83473C23.3754 9.62041 23.0448 9.5 22.7 9.5ZM22.8857 24.126L17.7944 21.3293C17.7058 21.2806 17.6035 21.2548 17.4991 21.2548C17.3947 21.2548 17.2923 21.2806 17.2038 21.3293L12.1143 24.126V10.6428C12.1143 10.5995 12.1339 10.558 12.1687 10.5274C12.2035 10.4968 12.2507 10.4796 12.3 10.4796H22.7C22.7493 10.4796 22.7965 10.4968 22.8313 10.5274C22.8661 10.558 22.8857 10.5995 22.8857 10.6428V24.126Z"
                      fill="#419A62"
                      className="group-hover:fill-white"
                    />
                  </svg>
                </div>

                <div className="p-[2px] border border-[#B6D8C2] group hover:bg-[#419A62] rounded-full">
                  {" "}
                  <svg
                    width="35"
                    height="35"
                    viewBox="0 0 35 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:bg-[#419A62] rounded-full"
                  >
                    <path
                      d="M21.8746 20.0723C21.4578 20.0722 21.0452 20.1581 20.6612 20.325C20.2773 20.4918 19.9297 20.7362 19.6393 21.0437L16.0386 18.6631C16.3218 17.916 16.3218 17.0866 16.0386 16.3395L19.6393 13.9588C20.1801 14.5288 20.9074 14.8718 21.6801 14.9214C22.4529 14.971 23.216 14.7238 23.8215 14.2275C24.4271 13.7312 24.832 13.0213 24.9576 12.2354C25.0833 11.4495 24.9208 10.6436 24.5016 9.974C24.0825 9.30435 23.4366 8.81866 22.6891 8.61108C21.9416 8.4035 21.1458 8.48883 20.456 8.85051C19.7662 9.2122 19.2316 9.82449 18.9557 10.5687C18.6798 11.3128 18.6824 12.1359 18.9629 12.8782L15.3622 15.2588C14.9286 14.8009 14.3721 14.4864 13.7639 14.3555C13.1557 14.2247 12.5233 14.2833 11.9476 14.5241C11.372 14.7648 10.8792 15.1767 10.5322 15.707C10.1853 16.2373 10 16.8621 10 17.5013C10 18.1405 10.1853 18.7652 10.5322 19.2956C10.8792 19.8259 11.372 20.2378 11.9476 20.4785C12.5233 20.7192 13.1557 20.7779 13.7639 20.647C14.3721 20.5161 14.9286 20.2016 15.3622 19.7437L18.9629 22.1244C18.7217 22.7643 18.686 23.467 18.861 24.1293C19.0361 24.7917 19.4127 25.379 19.9357 25.8052C20.4587 26.2315 21.1006 26.4743 21.7675 26.4981C22.4343 26.5219 23.0911 26.3254 23.6415 25.9375C24.192 25.5496 24.6073 24.9905 24.8265 24.3422C25.0458 23.694 25.0575 22.9905 24.86 22.3349C24.6625 21.6792 24.2661 21.1059 23.7289 20.6987C23.1917 20.2916 22.5419 20.0721 21.8746 20.0723ZM21.8746 9.7881C22.2454 9.7881 22.6078 9.9012 22.9161 10.1131C23.2243 10.325 23.4646 10.6261 23.6065 10.9785C23.7483 11.3308 23.7855 11.7185 23.7131 12.0926C23.6408 12.4666 23.4623 12.8102 23.2001 13.0799C22.938 13.3496 22.604 13.5332 22.2403 13.6076C21.8767 13.682 21.4998 13.6439 21.1573 13.4979C20.8148 13.352 20.522 13.1048 20.316 12.7877C20.11 12.4706 20.0001 12.0978 20.0001 11.7164C20.0001 11.205 20.1976 10.7145 20.5491 10.3529C20.9007 9.99126 21.3775 9.7881 21.8746 9.7881ZM13.1268 19.4296C12.7561 19.4296 12.3937 19.3165 12.0854 19.1046C11.7771 18.8927 11.5369 18.5916 11.395 18.2392C11.2531 17.8869 11.216 17.4991 11.2883 17.1251C11.3607 16.751 11.5392 16.4075 11.8013 16.1378C12.0635 15.8681 12.3975 15.6844 12.7611 15.61C13.1248 15.5356 13.5017 15.5738 13.8442 15.7198C14.1867 15.8657 14.4795 16.1129 14.6855 16.43C14.8914 16.7471 15.0014 17.1199 15.0014 17.5013C15.0014 18.0127 14.8039 18.5032 14.4523 18.8648C14.1008 19.2264 13.624 19.4296 13.1268 19.4296ZM21.8746 25.2145C21.5039 25.2145 21.1415 25.1014 20.8332 24.8895C20.5249 24.6776 20.2847 24.3765 20.1428 24.0241C20.0009 23.6718 19.9638 23.284 20.0361 22.91C20.1084 22.5359 20.287 22.1923 20.5491 21.9227C20.8113 21.653 21.1453 21.4693 21.5089 21.3949C21.8725 21.3205 22.2495 21.3587 22.592 21.5047C22.9345 21.6506 23.2273 21.8978 23.4332 22.2149C23.6392 22.532 23.7492 22.9048 23.7492 23.2862C23.7492 23.7976 23.5517 24.2881 23.2001 24.6497C22.8486 25.0113 22.3718 25.2145 21.8746 25.2145Z"
                      fill="#419A62"
                      className="group-hover:fill-white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h2 className="text-[#107536] text-[32px] font-semibold mb-4">
              Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme
            </h2>

            <div className="flex flex-col lg:flex-row  lg:justify-between items-center">
              <div className="flex flex-wrap  justify-start gap-2 mb-4 lg:w-[80%]">
                <span className="border-green-100 border-2 text-[#419A62] text-xs font-medium px-1 py-1 rounded-md">
                  1000/month
                </span>
                <span className="border-green-100 border-2 text-[#419A62] text-xs font-medium px-1 py-1 rounded-md">
                  70% Reservation
                </span>

                <span className="border-green-100 border-2 text-[#419A62] text-xs font-medium px-1 py-1 rounded-md">
                  Scholarship
                </span>
              </div>
              <div className="flex items-center justify-center hover:text-[#419A62]  lg:w-fit w-[90%] bg-[#419A62] hover:bg-white text-white border-2 border-green-100 rounded-md">
                <Link to="/schemeDetail">
                  <button
                    className="text-center min-w-full font-semibold px-6 py-2 rounded-md"
                    onClick={(e) => {
                      e.preventDefault();
                      openModal();
                      console.log("onclick");
                    }}
                  >
                    Check Eligibility
                  </button>
                </Link>
              </div>

              {isShowing && typeof document !== "undefined"
                ? ReactDOM.createPortal(
                    <div
                      className="fixed top-0 left-0 z-20 flex h-screen w-screen  justify-end bg-slate-300/20 backdrop-blur-sm"
                      aria-labelledby="header-4a content-4a"
                      aria-modal="true"
                      tabindex="-1"
                      role="dialog"
                    >
                      {/*    <!-- Modal --> */}
                      <div
                        ref={wrapperRef}
                        className="flex max-h-[100vh] w-[50%]  flex-col gap-4 overflow-hidden rounded bg-white p-6 text-slate-500 shadow-xl shadow-slate-700/10"
                        id="modal"
                        role="document"
                      >
                        {/*        <!-- Modal header --> */}
                        <header id="header-4a" className="flex items-center">
                          <h3 className="flex-1 text-lg font-medium text-slate-700">
                            Check Eligibility
                          </h3>

                          <button
                            // onClick={() => setIsShowing(false)}
                            className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                            aria-label="close dialog"
                          >
                            <span className="relative only:-mx-5">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                role="graphics-symbol"
                                aria-labelledby="title-79 desc-79"
                              >
                                <title id="title-79">Icon title</title>
                                <desc id="desc-79">
                                  A more detailed description of the icon
                                </desc>
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </span>
                          </button>
                        </header>

                        <h1 className="mt-3 text-[#419A62]">
                          Financial Assistance To Disabled Students Pursuing
                          (10th, 11th, 12th Equivalent Exams)
                        </h1>
                        {/*        <!-- Modal body --> */}
                        <div id="content-4a" className="">
                          <div className="flex flex-col gap-6">
                            <h1> Are you a resident of Kerela State ?*</h1>
                            <div className="relative max-w-sm flex w-full flex-col rounded-xl bg-white shadow">
                              <nav className="flex min-w-[240px] flex-row gap-1 p-2">
                                <div
                                  role="button"
                                  className="flex items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                                >
                                  <label
                                    for="react-horizontal"
                                    className="flex cursor-pointer items-center px-3 py-2"
                                  >
                                    <div className="inline-flex items-center">
                                      <label
                                        className="relative flex items-center cursor-pointer"
                                        for="react-horizontal"
                                      >
                                        <input
                                          name="framework-horizontal"
                                          type="radio"
                                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                          id="react-horizontal"
                                          checked
                                        />
                                        <span className="absolute bg-[#419A62] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                      </label>
                                      <label
                                        className="ml-2 text-slate-600 cursor-pointer text-sm"
                                        for="react-horizontal"
                                      >
                                        Yes
                                      </label>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  role="button"
                                  className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                                >
                                  <label
                                    for="vue-horizontal"
                                    className="flex w-full cursor-pointer items-center px-3 py-2"
                                  >
                                    <div className="inline-flex items-center">
                                      <label
                                        className="relative flex items-center cursor-pointer"
                                        for="vue-horizontal"
                                      >
                                        <input
                                          name="framework-horizontal"
                                          type="radio"
                                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                          id="vue-horizontal"
                                        />
                                        <span className="absolute bg-[#419A62] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                      </label>
                                      <label
                                        className="ml-2 text-slate-600 cursor-pointer text-sm"
                                        for="vue-horizontal"
                                      >
                                        No
                                      </label>
                                    </div>
                                  </label>
                                </div>
                              </nav>
                            </div>
                          </div>
                        </div>

                        <div id="content-4a" className="">
                          <div className="flex flex-col">
                            <h1> Are you a differently-abled student?*</h1>

                            <div className="relative max-w-sm flex w-full flex-col rounded-xl bg-white shadow">
                              <nav className="flex min-w-[240px] flex-row gap-1 p-2">
                                <div
                                  role="button"
                                  className="flex items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                                >
                                  <label
                                    for="react-horizontal"
                                    className="flex cursor-pointer items-center px-3 py-2"
                                  >
                                    <div className="inline-flex items-center">
                                      <label
                                        className="relative flex items-center cursor-pointer"
                                        for="react-horizontal"
                                      >
                                        <input
                                          name="framework-horizontal"
                                          type="radio"
                                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                          id="react-horizontal"
                                          checked
                                        />
                                        <span className="absolute bg-[#419A62] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                      </label>
                                      <label
                                        className="ml-2 text-slate-600 cursor-pointer text-sm"
                                        for="react-horizontal"
                                      >
                                        Yes
                                      </label>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  role="button"
                                  className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                                >
                                  <label
                                    for="vue-horizontal"
                                    className="flex w-full cursor-pointer items-center px-3 py-2"
                                  >
                                    <div className="inline-flex items-center">
                                      <label
                                        className="relative flex items-center cursor-pointer"
                                        for="vue-horizontal"
                                      >
                                        <input
                                          name="framework-horizontal"
                                          type="radio"
                                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                          id="vue-horizontal"
                                        />
                                        <span className="absolute bg-[#419A62] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                      </label>
                                      <label
                                        className="ml-2 text-slate-600 cursor-pointer text-sm"
                                        for="vue-horizontal"
                                      >
                                        No
                                      </label>
                                    </div>
                                  </label>
                                </div>
                              </nav>
                            </div>
                            {/*                <!-- Input field --> */}
                          </div>
                        </div>

                        <div id="content-4a" className="">
                          <div className="flex flex-col">
                            <h1> Do you have 40% or more disability?*</h1>
                            <div className="relative max-w-sm flex w-full flex-col rounded-xl bg-white shadow">
                              <nav className="flex min-w-[240px] flex-row gap-1 p-2">
                                <div
                                  role="button"
                                  className="flex items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                                >
                                  <label
                                    for="react-horizontal"
                                    className="flex cursor-pointer items-center px-3 py-2"
                                  >
                                    <div className="inline-flex items-center">
                                      <label
                                        className="relative flex items-center cursor-pointer"
                                        for="react-horizontal"
                                      >
                                        <input
                                          name="framework-horizontal"
                                          type="radio"
                                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                          id="react-horizontal"
                                          checked
                                        />
                                        <span className="absolute bg-[#419A62] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                      </label>
                                      <label
                                        className="ml-2 text-slate-600 cursor-pointer text-sm"
                                        for="react-horizontal"
                                      >
                                        Yes
                                      </label>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  role="button"
                                  className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                                >
                                  <label
                                    for="vue-horizontal"
                                    className="flex w-full cursor-pointer items-center px-3 py-2"
                                  >
                                    <div className="inline-flex items-center">
                                      <label
                                        className="relative flex items-center cursor-pointer"
                                        for="vue-horizontal"
                                      >
                                        <input
                                          name="framework-horizontal"
                                          type="radio"
                                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                          id="vue-horizontal"
                                        />
                                        <span className="absolute bg-[#419A62] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                      </label>
                                      <label
                                        className="ml-2 text-slate-600 cursor-pointer text-sm"
                                        for="vue-horizontal"
                                      >
                                        No
                                      </label>
                                    </div>
                                  </label>
                                </div>
                              </nav>
                            </div>
                            {/*                <!-- Input field --> */}
                          </div>
                        </div>

                        <div id="content-4a" className="">
                          <div className="flex flex-col">
                            <h1>
                              {" "}
                              Do you belong to the Above Poverty Line (APL) or
                              Below Poverty Line (BPL) category?*
                            </h1>
                            <div className="relative max-w-sm flex w-full flex-col rounded-xl bg-white shadow">
                              <nav className="flex min-w-[240px] flex-row gap-1 p-2">
                                <div
                                  role="button"
                                  className="flex items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                                >
                                  <label
                                    for="bp-yes"
                                    className="flex cursor-pointer items-center px-3 py-2"
                                  >
                                    <div className="inline-flex items-center">
                                      <label
                                        className="relative flex items-center cursor-pointer"
                                        for="bp-yes"
                                      >
                                        <input
                                          name="framework-horizontal"
                                          type="radio"
                                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                          id="bp-yes"
                                          checked
                                        />
                                        <span className="absolute bg-[#419A62] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                      </label>
                                      <label
                                        className="ml-2 text-slate-600 cursor-pointer text-sm"
                                        for="bp-yes"
                                      >
                                        Yes
                                      </label>
                                    </div>
                                  </label>
                                </div>
                                <div
                                  role="button"
                                  className="flex w-full items-center rounded-lg p-0 transition-all hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
                                >
                                  <label
                                    for="bp-no"
                                    className="flex w-full cursor-pointer items-center px-3 py-2"
                                  >
                                    <div className="inline-flex items-center">
                                      <label
                                        className="relative flex items-center cursor-pointer"
                                        for="bp-no"
                                      >
                                        <input
                                          name="framework-horizontal"
                                          type="radio"
                                          className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-slate-300 checked:border-slate-400 transition-all"
                                          id="bp-no"
                                        />
                                        <span className="absolute bg-[#419A62] w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
                                      </label>
                                      <label
                                        className="ml-2 text-slate-600 cursor-pointer text-sm"
                                        for="bp-no"
                                      >
                                        No
                                      </label>
                                    </div>
                                  </label>
                                </div>
                              </nav>
                            </div>
                            {/*                <!-- Input field --> */}
                          </div>
                        </div>
                        {/*        <!-- Modal actions --> */}
                      </div>
                    </div>,
                    document.body
                  )
                : null}
            </div>
          </div>

          <div className="text-gray-700 lg:px-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-[#107536]">
                About
              </h3>
              <p className="text-base font-normal text-[#393939]">
                "Dr. Ammaiyar Centrally Sponsored Scheme of Post-Metric
                Scholarships for the Economically Backward Class (EBC) Students"
                is a scheme that aims to provide financial assistance to
                students from economically weaker sections. The scheme is
                designed to help students cover their expenses during higher
                education.
              </p>
            </div>

            <div className="space-y-3 mt-3">
              <h3 className="text-2xl font-semibold  text-[#107536]">
                Benefits
              </h3>
              <div>
                <h3 className="text-xl font-medium  text-[#315288]">
                  {" "}
                  Group 01{" "}
                </h3>
                <ol className="text-sm list-decimal list-inside font-medium px-3 mt-2">
                  <li className="font-normal text-base text-[#393939]">
                    Full Post Graduate level courses including M.Phil, PhD, and
                    Post Doctoral research in Medicine (Allopathic, Indian, and
                    other systems of medicine), Engineering, Technology,
                    Planning, Architecture, Design, Fashion Technology,
                    Agriculture, Veterinary and Allied Sciences, Management,
                    Business Studies, and Computer Science/Applications.
                  </li>
                  <li className="font-normal text-base text-[#393939]">
                    Post Graduate Diploma courses in various branches of
                    management & medicine
                  </li>
                  <li className="font-normal text-base text-[#393939]">
                    C.A./ I.C.W.A./ C.S./ I.C.F.A. etc
                  </li>
                  <li className="font-normal text-base text-[#393939]">
                    M. Phil., Ph.D. and Post-Doctoral Programmes (D.Litt., D.Sc.
                    etc.)
                  </li>
                  <li className="font-normal text-base text-[#393939]">
                    L.L.M
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-medium  text-[#315288]">
                  {" "}
                  Group 02{" "}
                </h3>
                <ol className="text-sm list-decimal list-inside font-medium px-3 mt-2">
                  <li className="font-normal text-base text-[#393939]">
                    All other courses leading to a graduate degree not covered
                    under Group A & B e.g. BA/B.Sc./B.Com etc.
                  </li>
                  <li className="font-normal text-base text-[#393939]">
                    Rate of Maintenance Allowance (₹ per month): Hostellers:
                    400; Day Scholars: 210.
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-medium  text-[#315288]">
                  {" "}
                  Group 03{" "}
                </h3>
                <ol className="text-sm list-decimal list-inside font-medium px-3 mt-2">
                  <li className="font-normal text-base text-[#393939]">
                    All post-matriculation level non-degree courses for which
                    entrance qualification is High School (Class X), e.g. senior
                    secondary certificate (className XI and XII); both general
                    and vocational stream, ITI courses, 3-year diploma courses
                    in Polytechnics, etc.
                  </li>
                  <li className="font-normal text-base text-[#393939]">
                    Rate of Maintenance Allowance (₹ per month): Hostellers:
                    260; Day Scholars: 160.
                  </li>
                </ol>
              </div>
            </div>

            <div className="space-y-3 mt-3">
              <h3 className="text-2xl font-semibold  text-[#107536]">
                Eligibility
              </h3>
              <div>
                <h3 className="text-xl font-medium  text-[#315288]">
                  {" "}
                  Group 01{" "}
                </h3>
                <ol className="text-sm list-decimal list-inside font-medium px-3 mt-2">
                  <li className="font-normal text-base text-[#393939]">
                    The scholarships will be open to Indian nationals belonging
                    to the General Category (Other than Schedule Caste, Schedule
                    Tribe and Other Backward Classes).
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-medium  text-[#315288]">
                  {" "}
                  Group 02{" "}
                </h3>
                <ol className="text-sm list-decimal list-inside font-medium px-3">
                  <li className="font-normal text-base text-[#393939]">
                    These scholarships will be given for the study of all
                    recognized post-matriculation or post-secondary courses
                    pursued in Government institutions.
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-medium  text-[#315288]">
                  {" "}
                  Group 03{" "}
                </h3>
                <ol className="text-sm list-decimal list-inside font-medium px-3">
                  <li className="font-normal text-base text-[#393939]">
                    Students pursuing Post-graduate courses in medicine will be
                    eligible if they are not allowed to practice during the
                    period of their course.
                  </li>
                </ol>
              </div>
            </div>

            <div className="space-y-3 mt-3">
              <h3 className="text-2xl font-semibold  text-[#107536]">
                Application Process (Online)
              </h3>
              <div>
                <h3 className="text-xl font-medium  text-[#315288] mt-2">
                  {" "}
                  Step 01{" "}
                </h3>
                <ol className="text-sm list-decimal list-inside font-medium px-3 mt-2">
                  <li className="font-normal text-base text-[#393939]">
                    The scholarships will be open to Indian nationals belonging
                    to the General Category (Other than Schedule Caste, Schedule
                    Tribe and Other Backward Classes).
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-medium  text-[#315288] mt-2">
                  {" "}
                  Step 02{" "}
                </h3>
                <ol className="text-sm list-decimal list-inside font-medium px-3 mt-2">
                  <li className="font-normal text-base text-[#393939]">
                    The scholarships will be open to Indian nationals belonging
                    to the General Category (Other than Schedule Caste, Schedule
                    Tribe and Other Backward Classes).
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-medium  text-[#315288] mt-2">
                  {" "}
                  Step 03{" "}
                </h3>
                <ol className="text-sm list-decimal list-inside font-medium px-3 mt-2">
                  <li className="font-normal text-base text-[#393939]">
                    The scholarships will be open to Indian nationals belonging
                    to the General Category (Other than Schedule Caste, Schedule
                    Tribe and Other Backward Classes).
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-medium  text-[#315288] mt-2">
                  {" "}
                  Step 04{" "}
                </h3>
                <ol className="text-sm list-decimal list-inside font-medium px-3 mt-2">
                  <li className="font-normal text-base text-[#393939]">
                    The scholarships will be open to Indian nationals belonging
                    to the General Category (Other than Schedule Caste, Schedule
                    Tribe and Other Backward Classes).
                  </li>
                </ol>
              </div>
            </div>

            <div className="space-y-3 mt-3">
              <h3 className="text-2xl font-semibold  text-[#107536]">
                Documents Required
              </h3>

              <div>
                <h3 className="text-xl font-medium  text-[#315288] mt-2">
                  {" "}
                  Aadhar{" "}
                </h3>
                <ol className="text-sm list-decimal list-inside font-medium px-3 mt-2">
                  <li className="font-normal text-base text-[#393939]">
                    The scholarships will be open to Indian nationals belonging
                    to the General Category (Other than Schedule Caste, Schedule
                    Tribe and Other Backward Classes).
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-medium  text-[#315288] mt-2">
                  {" "}
                  Birth Certificate{" "}
                </h3>
                <ol className="text-sm list-decimal list-inside font-medium px-3 mt-2">
                  <li className="font-normal text-base text-[#393939]">
                    The scholarships will be open to Indian nationals belonging
                    to the General Category (Other than Schedule Caste, Schedule
                    Tribe and Other Backward Classes).
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-medium  text-[#315288] mt-2">
                  {" "}
                  Community Certificate{" "}
                </h3>
                <ol className="text-sm list-decimal list-inside font-medium px-3 mt-2">
                  <li className="font-normal text-base text-[#393939]">
                    The scholarships will be open to Indian nationals belonging
                    to the General Category (Other than Schedule Caste, Schedule
                    Tribe and Other Backward Classes).
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-medium  text-[#315288] mt-2">
                  {" "}
                  Photo{" "}
                </h3>
                <ol className="text-sm list-decimal list-inside font-medium px-3 mt-2">
                  <li className="font-normal text-base text-[#393939]">
                    The scholarships will be open to Indian nationals belonging
                    to the General Category (Other than Schedule Caste, Schedule
                    Tribe and Other Backward Classes).
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center ">
            <div className=" justify-center items-center">
              <div className="flex flex-row justify-start items-center mt-12">
                <img src={Bot} alt="" className="w-10 h-10" />
                <span className="text-[#393939] font-light ml-4">
                  Was it helpful ?
                </span>
              </div>

              <div className="flex flex-row gap-2 mt-5 lg:mt-3">
                <svg
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0489 0.927051C16.3483 0.00574017 17.6517 0.00574017 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878303 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z"
                    fill="#419A62"
                  />
                </svg>

                <svg
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0489 0.927051C16.3483 0.00574017 17.6517 0.00574017 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878303 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z"
                    fill="#419A62"
                  />
                </svg>

                <svg
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0489 0.927051C16.3483 0.00574017 17.6517 0.00574017 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878303 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z"
                    fill="#419A62"
                  />
                </svg>

                <svg
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0489 0.927051C16.3483 0.00574017 17.6517 0.00574017 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878303 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z"
                    fill="#419A62"
                  />
                </svg>

                <svg
                  width="34"
                  height="33"
                  viewBox="0 0 34 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.0489 0.927051C16.3483 0.00574017 17.6517 0.00574017 17.9511 0.927051L21.2658 11.1287C21.3996 11.5407 21.7836 11.8197 22.2168 11.8197H32.9434C33.9122 11.8197 34.3149 13.0593 33.5312 13.6287L24.8532 19.9336C24.5027 20.1883 24.3561 20.6396 24.4899 21.0517L27.8046 31.2533C28.104 32.1746 27.0495 32.9407 26.2658 32.3713L17.5878 26.0664C17.2373 25.8117 16.7627 25.8117 16.4122 26.0664L7.73419 32.3713C6.95048 32.9407 5.896 32.1746 6.19535 31.2533L9.51006 21.0517C9.64393 20.6396 9.49728 20.1883 9.14679 19.9336L0.468768 13.6287C-0.314945 13.0593 0.0878303 11.8197 1.05655 11.8197H11.7832C12.2164 11.8197 12.6004 11.5407 12.7342 11.1287L16.0489 0.927051Z"
                    fill="#E7F2EB"
                  />
                </svg>
              </div>

              <div className="flex items-center justify-center mt-10 lg:mt-6">
                <button className="p-1 bg-[#419A62] text-white rounded-md">
                  Submit{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SchemeModal isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </div>
  );
};

export default SchemeDetail;
