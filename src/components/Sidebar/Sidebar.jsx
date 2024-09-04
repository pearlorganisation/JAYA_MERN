import React, { useState } from "react";
import { FaRegBookmark } from "react-icons/fa6";
import { GrDocument } from "react-icons/gr";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.png";
const Sidebar = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);

  return (
    <>
      {/*  <!-- Component: Basic side navigation menu --> */}
      {/*  <!-- Mobile trigger --> */}
      <button
        title="Side navigation"
        type="button"
        className={`visible mt-12 lg:mt-0 bg-red-500 top-6 left-0 z-40 order-10 block w-full rounded  opacity-100 lg:hidden ${
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
        <div className="absolute border-2 w-full top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 transform">
          <div className="grid grid-cols-[30%_auto] items-center px-2 ">
            <svg
              width="35"
              height="36"
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M30.25 17.8438C30.25 18.1338 30.1348 18.412 29.9296 18.6171C29.7245 18.8223 29.4463 18.9375 29.1562 18.9375H5.09375C4.80367 18.9375 4.52547 18.8223 4.32035 18.6171C4.11523 18.412 4 18.1338 4 17.8438C4 17.5537 4.11523 17.2755 4.32035 17.0704C4.52547 16.8652 4.80367 16.75 5.09375 16.75H29.1562C29.4463 16.75 29.7245 16.8652 29.9296 17.0704C30.1348 17.2755 30.25 17.5537 30.25 17.8438ZM5.09375 10.1875H29.1562C29.4463 10.1875 29.7245 10.0723 29.9296 9.86715C30.1348 9.66203 30.25 9.38383 30.25 9.09375C30.25 8.80367 30.1348 8.52547 29.9296 8.32035C29.7245 8.11523 29.4463 8 29.1562 8H5.09375C4.80367 8 4.52547 8.11523 4.32035 8.32035C4.11523 8.52547 4 8.80367 4 9.09375C4 9.38383 4.11523 9.66203 4.32035 9.86715C4.52547 10.0723 4.80367 10.1875 5.09375 10.1875ZM29.1562 25.5H5.09375C4.80367 25.5 4.52547 25.6152 4.32035 25.8204C4.11523 26.0255 4 26.3037 4 26.5938C4 26.8838 4.11523 27.162 4.32035 27.3671C4.52547 27.5723 4.80367 27.6875 5.09375 27.6875H29.1562C29.4463 27.6875 29.7245 27.5723 29.9296 27.3671C30.1348 27.162 30.25 26.8838 30.25 26.5938C30.25 26.3037 30.1348 26.0255 29.9296 25.8204C29.7245 25.6152 29.4463 25.5 29.1562 25.5Z"
                fill="#393939"
              />
            </svg>

            <img className="pt-2" src={Logo} />
          </div>
        </div>
      </button>

      {/*  <!-- Side Navigation --> */}
      <aside
        id="nav-menu-1"
        aria-label="Side navigation"
        className={`fixed top-0 bottom-0 left-0 z-40 flex flex-col border-r w-[18%] border-r-slate-200 bg-white transition-transform lg:translate-x-0 ${
          isSideNavOpen ? "translate-x-0" : " -translate-x-full"
        }`}
      >
        <Link
          to="/"
          aria-label="WindUI logo"
          className="flex items-center gap-2 whitespace-nowrap p-6 text-xl font-medium focus:outline-none"
          href="javascript:void(0)"
        >
          <img
            src="./logo.png"
            alt="Logo"
            className="mx-auto lg:mx-0 mb-4 lg:mb-0"
          />
        </Link>
        <nav
          aria-label="side navigation"
          className="flex-1 divide-y divide-slate-100 overflow-auto"
        >
          <div>
            <ul className="flex flex-1 flex-col gap-1 py-3">
              <li className="px-3 mt-2">
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-1 text-slate-700 transition-colors border-2 border-[#B6D8C2] rounded-xl hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50"
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
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-base font-normal text-[#419A62]">
                    Explore
                  </div>
                </a>
              </li>
              <li className="px-3 mt-2">
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-1 text-slate-700 transition-colors border-2 border-[#B6D8C2] rounded-xl hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50"
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
                  <Link
                    to={"/profile"}
                    className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-base font-normal text-[#419A62]"
                  >
                    Profile
                  </Link>
                </a>
              </li>
              <li className="px-3 mt-2">
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-1 text-slate-700 transition-colors border-2 border-[#B6D8C2] rounded-xl hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 "
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
                        d="M22.9688 7.73438H12.0312C11.6168 7.73438 11.2194 7.899 10.9264 8.19202C10.6334 8.48505 10.4688 8.88247 10.4688 9.29688V26.4844C10.4688 26.6238 10.5062 26.7607 10.577 26.8808C10.6478 27.0009 10.7495 27.0998 10.8714 27.1674C10.9934 27.235 11.1312 27.2686 11.2706 27.265C11.41 27.2613 11.5458 27.2204 11.6641 27.1465L17.5 23.499L23.3369 27.1465C23.4551 27.2201 23.5909 27.2608 23.7301 27.2644C23.8693 27.2679 24.007 27.2342 24.1288 27.1667C24.2506 27.0991 24.3521 27.0003 24.4229 26.8803C24.4937 26.7603 24.5311 26.6236 24.5312 26.4844V9.29688C24.5312 8.88247 24.3666 8.48505 24.0736 8.19202C23.7806 7.899 23.3832 7.73438 22.9688 7.73438ZM22.9688 25.0752L17.9131 21.916C17.7889 21.8384 17.6454 21.7973 17.499 21.7973C17.3526 21.7973 17.2091 21.8384 17.085 21.916L12.0312 25.0752V9.29688H22.9688V25.0752Z"
                        fill="#419A62"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-base font-normal text-[#419A62]">
                    Saved
                  </div>
                </a>
              </li>
              <li className="px-3 mt-2">
                <Link
                  to="/mydocuments"
                  className="flex items-center gap-3 px-3 py-1 text-slate-700 transition-colors border-2 border-[#B6D8C2] rounded-xl hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50"
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
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-base font-normal text-[#419A62]">
                    My Documents
                  </div>
                </Link>
              </li>

              <li className="px-3 mt-2">
                <a
                  href="#"
                  className="flex items-center gap-3 px-3 py-1 text-slate-700 transition-colors border-2 border-[#B6D8C2] rounded-xl hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50"
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
                        d="M26.6605 22.1821C26.1185 21.2485 25.3128 18.6069 25.3128 15.1567C25.3128 13.0847 24.4897 11.0976 23.0246 9.63247C21.5595 8.16734 19.5723 7.34424 17.5003 7.34424C15.4283 7.34424 13.4412 8.16734 11.9761 9.63247C10.5109 11.0976 9.68783 13.0847 9.68783 15.1567C9.68783 18.6079 8.88119 21.2485 8.3392 22.1821C8.20079 22.4195 8.12742 22.6891 8.12647 22.9639C8.12553 23.2386 8.19705 23.5088 8.33383 23.7471C8.4706 23.9854 8.66779 24.1834 8.90551 24.3211C9.14323 24.4589 9.41308 24.5315 9.68783 24.5317H13.6732C13.8534 25.4137 14.3328 26.2064 15.0301 26.7757C15.7275 27.3449 16.6001 27.6559 17.5003 27.6559C18.4006 27.6559 19.2731 27.3449 19.9705 26.7757C20.6679 26.2064 21.1472 25.4137 21.3275 24.5317H25.3128C25.5875 24.5314 25.8572 24.4586 26.0948 24.3208C26.3324 24.1829 26.5294 23.9849 26.6661 23.7466C26.8028 23.5084 26.8742 23.2383 26.8732 22.9636C26.8722 22.689 26.7989 22.4194 26.6605 22.1821ZM17.5003 26.0942C17.0158 26.0941 16.5432 25.9438 16.1476 25.6639C15.752 25.3841 15.4529 24.9886 15.2913 24.5317H19.7093C19.5478 24.9886 19.2487 25.3841 18.8531 25.6639C18.4575 25.9438 17.9849 26.0941 17.5003 26.0942ZM9.68783 22.9692C10.4398 21.6763 11.2503 18.6802 11.2503 15.1567C11.2503 13.4991 11.9088 11.9094 13.0809 10.7373C14.253 9.56522 15.8427 8.90674 17.5003 8.90674C19.1579 8.90674 20.7476 9.56522 21.9197 10.7373C23.0919 11.9094 23.7503 13.4991 23.7503 15.1567C23.7503 18.6772 24.5589 21.6733 25.3128 22.9692H9.68783Z"
                        fill="#419A62"
                      />
                    </svg>
                  </div>
                  <div className="flex w-full flex-1 flex-col items-start justify-center gap-0 overflow-hidden truncate text-base font-normal text-[#419A62]">
                    Notification
                  </div>
                </a>
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
export default Sidebar;
