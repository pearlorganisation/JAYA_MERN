import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { GrDocument } from "react-icons/gr";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      {/*  <!-- Component: Basic side navigation menu --> */}
      {/*  <!-- Mobile trigger --> */}
      <button
        title="Side navigation"
        type="button"
        className={`visible fixed left-6 top-6 z-40 order-10 block h-10 w-10 self-center rounded bg-white opacity-100 lg:hidden ${
          isSideNavOpen
            ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
            : ""
        }`}
        aria-haspopup="menu"
        aria-label="Side navigation"
        aria-expanded={isSideNavOpen ? " true" : "false"}
        aria-controls="nav-menu-1"
        onClick={() => setIsSideNavOpen(!isSideNavOpen)}
      >
        <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-700 transition-all duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
          ></span>
          <span
            aria-hidden="true"
            className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
          ></span>
        </div>
      </button>

      {/*  <!-- Side Navigation --> */}
      <aside
        id="nav-menu-1"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 flex w-52 flex-col border-r border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <Link
          to="/admin/schemes"
          aria-label="logo"
          className="flex items-center gap-2 whitespace-nowrap p-6 text-xl font-medium focus:outline-none"
        >
          <h1> ADMIN </h1>
          {/* <img
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1819120589.1728259200&semt=ais_hybrid"
            alt=""
          />*/}
        </Link>
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="px-6 py-[7.5px]">
                <Link
                  to="/admin/schemes"
                  className="flex items-center gap-2 rounded-md px-3 py-1 text-slate-700 transition-colors border-2 border-[#B6D8C2] hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50"
                  aria-current="page"
                >
                  <div className="flex items-center self-center ">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 7.34375C15.4913 7.34375 13.5277 7.9394 11.8575 9.05539C10.1873 10.1714 8.88556 11.7576 8.11685 13.6134C7.34815 15.4692 7.14702 17.5113 7.5389 19.4814C7.93079 21.4515 8.89807 23.2612 10.3185 24.6816C11.7388 26.1019 13.5485 27.0692 15.5186 27.4611C17.4887 27.853 19.5308 27.6519 21.3866 26.8832C23.2424 26.1144 24.8286 24.8127 25.9446 23.1425C27.0606 21.4723 27.6563 19.5087 27.6563 17.5C27.6532 14.8073 26.5821 12.2259 24.6781 10.3219C22.7741 8.41788 20.1927 7.34685 17.5 7.34375ZM26.0566 16.7188H22.167C21.9922 13.1533 20.6191 10.6318 19.4932 9.14063C21.2415 9.56046 22.8146 10.517 23.9918 11.876C25.169 13.235 25.8914 14.9284 26.0576 16.7188H26.0566ZM14.3975 18.2812H20.6025C20.377 22.3447 18.4316 24.835 17.5 25.8008C16.5674 24.834 14.6231 22.3438 14.3975 18.2812ZM14.3975 16.7188C14.6231 12.6553 16.5684 10.165 17.5 9.19922C18.4326 10.1689 20.377 12.6592 20.6025 16.7188H14.3975ZM15.5068 9.14063C14.3809 10.6318 13.0078 13.1533 12.833 16.7188H8.94239C9.10859 14.9284 9.83097 13.235 11.0082 11.876C12.1855 10.517 13.7585 9.56046 15.5068 9.14063ZM8.94239 18.2812H12.833C13.0107 21.8467 14.3809 24.3682 15.5068 25.8594C13.7585 25.4395 12.1855 24.483 11.0082 23.124C9.83097 21.765 9.10859 20.0716 8.94239 18.2812ZM19.4893 25.8594C20.6152 24.3682 21.9854 21.8467 22.1631 18.2812H26.0537C25.8878 20.0711 25.166 21.7641 23.9895 23.123C22.813 24.482 21.2408 25.4388 19.4932 25.8594H19.4893Z"
                        fill="#419A62"
                      />
                    </svg>
                  </div>
                  <div className="flex w-[80%] text-[#419A62] flex-col items-start justify-center gap-0  truncate text-sm">
                    Schemes
                  </div>
                </Link>
              </li>

              <li className="px-6 py-[7.5px]">
                <Link
                  to="/admin/users"
                  className="flex items-center gap-2 rounded-md px-3 py-1 text-slate-700 transition-colors border-2 border-[#B6D8C2] hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50"
                  aria-current="page"
                >
                  <div className="flex items-center self-center ">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M27.5508 26.0862C26.0635 23.5149 23.7715 21.6711 21.0967 20.7971C22.4198 20.0095 23.4477 18.8093 24.0227 17.3809C24.5977 15.9525 24.6878 14.3748 24.2794 12.8902C23.8709 11.4056 22.9864 10.0961 21.7617 9.16284C20.537 8.22957 19.0398 7.72412 17.5 7.72412C15.9603 7.72412 14.4631 8.22957 13.2383 9.16284C12.0136 10.0961 11.1291 11.4056 10.7207 12.8902C10.3122 14.3748 10.4024 15.9525 10.9774 17.3809C11.5523 18.8093 12.5803 20.0095 13.9034 20.7971C11.2286 21.6701 8.93656 23.5139 7.44925 26.0862C7.39471 26.1751 7.35853 26.274 7.34286 26.3772C7.32718 26.4803 7.33232 26.5856 7.35797 26.6867C7.38362 26.7878 7.42927 26.8828 7.49222 26.966C7.55516 27.0492 7.63413 27.1189 7.72447 27.1711C7.81481 27.2233 7.91469 27.2568 8.01821 27.2698C8.12173 27.2827 8.22679 27.2748 8.3272 27.2465C8.42762 27.2182 8.52134 27.1701 8.60286 27.105C8.68437 27.0399 8.75201 26.9591 8.80179 26.8674C10.6416 23.6877 13.8936 21.7893 17.5 21.7893C21.1065 21.7893 24.3584 23.6877 26.1983 26.8674C26.2481 26.9591 26.3157 27.0399 26.3972 27.105C26.4787 27.1701 26.5725 27.2182 26.6729 27.2465C26.7733 27.2748 26.8783 27.2827 26.9819 27.2698C27.0854 27.2568 27.1853 27.2233 27.2756 27.1711C27.3659 27.1189 27.4449 27.0492 27.5079 26.966C27.5708 26.8828 27.6164 26.7878 27.6421 26.6867C27.6678 26.5856 27.6729 26.4803 27.6572 26.3772C27.6415 26.274 27.6054 26.1751 27.5508 26.0862ZM12.0313 14.758C12.0313 13.6764 12.352 12.6191 12.9529 11.7198C13.5538 10.8204 14.408 10.1195 15.4072 9.70556C16.4065 9.29164 17.5061 9.18335 18.5669 9.39436C19.6278 9.60537 20.6022 10.1262 21.367 10.891C22.1318 11.6559 22.6527 12.6303 22.8637 13.6911C23.0747 14.752 22.9664 15.8515 22.5525 16.8508C22.1386 17.8501 21.4376 18.7042 20.5383 19.3051C19.639 19.906 18.5817 20.2268 17.5 20.2268C16.0501 20.2252 14.66 19.6486 13.6348 18.6233C12.6095 17.5981 12.0328 16.208 12.0313 14.758Z"
                        fill="#419A62"
                      />
                    </svg>
                  </div>
                  <div className="flex w-[80%] text-[#419A62] flex-col items-start justify-center gap-0  truncate text-sm">
                    Users
                  </div>
                </Link>
              </li>

              <li className="px-6 py-[7.5px]">
                <Link
                  to="/admin/document"
                  className="flex items-center gap-2 rounded-md px-3 py-1 text-slate-700 transition-colors border-2 border-[#B6D8C2] hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50"
                  aria-current="page"
                >
                  <div className="flex items-center self-center ">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.8652 13.041L20.3965 7.57227C20.3239 7.49974 20.2377 7.44223 20.1429 7.40302C20.048 7.36381 19.9464 7.34367 19.8438 7.34375H10.4688C10.0543 7.34375 9.65692 7.50837 9.3639 7.8014C9.07087 8.09442 8.90625 8.49185 8.90625 8.90625V26.0938C8.90625 26.5082 9.07087 26.9056 9.3639 27.1986C9.65692 27.4916 10.0543 27.6562 10.4688 27.6562H24.5312C24.9457 27.6562 25.3431 27.4916 25.6361 27.1986C25.9291 26.9056 26.0938 26.5082 26.0938 26.0938V13.5938C26.0938 13.4911 26.0737 13.3895 26.0345 13.2946C25.9953 13.1998 25.9378 13.1136 25.8652 13.041ZM20.625 10.0107L23.4268 12.8125H20.625V10.0107ZM24.5312 26.0938H10.4688V8.90625H19.0625V13.5938C19.0625 13.801 19.1448 13.9997 19.2913 14.1462C19.4378 14.2927 19.6365 14.375 19.8438 14.375H24.5312V26.0938Z"
                        fill="#419A62"
                      />
                    </svg>
                  </div>
                  <div className="flex w-[80%] text-[#419A62] flex-col items-start justify-center gap-0  truncate text-sm">
                    Document
                  </div>
                </Link>
              </li>
              <li className="px-6 py-[7.5px]">
                <Link
                  to="/admin/blog"
                  className="flex items-center gap-2 rounded-md px-3 py-1 text-slate-700 transition-colors border-2 border-[#B6D8C2] hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50"
                  aria-current="page"
                >
                  <div className="flex items-center self-center ">
                    <svg
                      width="35"
                      height="35"
                      viewBox="0 0 35 35"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.5 7.34375C15.4913 7.34375 13.5277 7.9394 11.8575 9.05539C10.1873 10.1714 8.88556 11.7576 8.11685 13.6134C7.34815 15.4692 7.14702 17.5113 7.5389 19.4814C7.93079 21.4515 8.89807 23.2612 10.3185 24.6816C11.7388 26.1019 13.5485 27.0692 15.5186 27.4611C17.4887 27.853 19.5308 27.6519 21.3866 26.8832C23.2424 26.1144 24.8286 24.8127 25.9446 23.1425C27.0606 21.4723 27.6563 19.5087 27.6563 17.5C27.6532 14.8073 26.5821 12.2259 24.6781 10.3219C22.7741 8.41788 20.1927 7.34685 17.5 7.34375ZM26.0566 16.7188H22.167C21.9922 13.1533 20.6191 10.6318 19.4932 9.14063C21.2415 9.56046 22.8146 10.517 23.9918 11.876C25.169 13.235 25.8914 14.9284 26.0576 16.7188H26.0566ZM14.3975 18.2812H20.6025C20.377 22.3447 18.4316 24.835 17.5 25.8008C16.5674 24.834 14.6231 22.3438 14.3975 18.2812ZM14.3975 16.7188C14.6231 12.6553 16.5684 10.165 17.5 9.19922C18.4326 10.1689 20.377 12.6592 20.6025 16.7188H14.3975ZM15.5068 9.14063C14.3809 10.6318 13.0078 13.1533 12.833 16.7188H8.94239C9.10859 14.9284 9.83097 13.235 11.0082 11.876C12.1855 10.517 13.7585 9.56046 15.5068 9.14063ZM8.94239 18.2812H12.833C13.0107 21.8467 14.3809 24.3682 15.5068 25.8594C13.7585 25.4395 12.1855 24.483 11.0082 23.124C9.83097 21.765 9.10859 20.0716 8.94239 18.2812ZM19.4893 25.8594C20.6152 24.3682 21.9854 21.8467 22.1631 18.2812H26.0537C25.8878 20.0711 25.166 21.7641 23.9895 23.123C22.813 24.482 21.2408 25.4388 19.4932 25.8594H19.4893Z"
                        fill="#419A62"
                      />
                    </svg>
                  </div>
                  <div className="flex w-[80%] text-[#419A62] flex-col items-start justify-center gap-0  truncate text-sm">
                    Blogs
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/*  <!-- Backdrop --> */}
      <div
        className={`fixed top-0 bottom-0 left-0 right-0 z-30 bg-slate-900/20 transition-colors sm:hidden ${
          isSideNavOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsSideNavOpen(false)}
      ></div>
      {/*  <!-- End Basic side navigation menu --> */}
    </>
  );
};
export default AdminSideBar;
