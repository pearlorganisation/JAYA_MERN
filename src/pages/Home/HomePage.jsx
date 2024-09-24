import React, { useEffect } from "react";
import { LuSendHorizonal } from "react-icons/lu";
import { Link } from "react-router-dom";
import Footer from "../../components/layout/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../../features/actions/blogAction";
import moment from "moment";

const HomePage = () => {
  const dispatch = useDispatch();

  const blogsState = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    dispatch(getBlogs());
  };
  // console.log(blogsState, "Home Page Blogs State");
  return (
    <div className=" w-full grid place-items-center px-4 md:py-10 md:px-16">
      <div className=" flex flex-col lg:justify-center justify-start lg:items-center">
        <div className="bg-white  rounded-lg  lg:py-6 py-6 px-2 lg:w-[80%] lg:mt-0 mt-4">
          {/* Chatbot Header */}
          <div className="flex items-center justify-center mb-8 border-2 border-green-100 rounded-xl">
            <div className="">
              {/* Chatbot Avatar */}
              <img src="./Bot.svg" alt="" className="h-54 lg:h-64" />
            </div>
            <div className="relative text-left text-sm  md:text-2xl font-semibold !w-[100%] lg:!w-[40%] md:max-w-lg lg:-translate-x-[4rem] md:-translate-x-[5rem] lg:-translate-y-[2rem] md:-translate-y-[1.5rem] bg-[#668DCB] text-white p-3 md:px-3 md:py-2 rounded-md">
              <p className="lg:text-xl font-normal text-xs">Hi,</p>
              <p className=" lg:text-xl font-normal text-xs">I am sahaya</p>
              <p className="lg:text-xl font-normal text-xs">
                I am here to help you with
              </p>
              <p className="lg:text-xl font-normal text-xs">
                Government Services & Schemes
              </p>
              <img
                className="-bottom-3 -left-2 absolute"
                src="./Polygon.svg"
                alt=""
              />
            </div>
          </div>

          {/* Input Field */}
          <div className="flex items-center justify-center">
            <div className="flex items-center border-2 border-green-100 rounded-full p-2 mb-4 w-[90%] justify-center">
              <input
                type="text"
                placeholder="Ask citizen..."
                className="flex-grow px-3 py-2 text-[#9b9b9b] bg-transparent focus:outline-none"
              />
              <Link to="/schemes" className="">
                <svg
                  width="29"
                  height="31"
                  viewBox="0 0 29 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M27.0581 13.5822L4.0893 0.472212C3.70187 0.25411 3.25718 0.15924 2.81447 0.200241C2.37177 0.241243 1.95206 0.416169 1.61128 0.701715C1.2705 0.98726 1.02481 1.36987 0.906959 1.79856C0.789106 2.22726 0.804679 2.68169 0.951605 3.10131L5.1393 15.4962L0.951605 27.8925C0.835062 28.2224 0.799336 28.5754 0.847424 28.9219C0.895512 29.2684 1.02601 29.5984 1.22797 29.884C1.42993 30.1697 1.69746 30.4028 2.00812 30.5637C2.31877 30.7246 2.66348 30.8086 3.01332 30.8087C3.3934 30.8079 3.76684 30.709 4.0975 30.5216L27.0553 17.3898C27.3939 17.2001 27.676 16.9237 27.8725 16.589C28.0691 16.2543 28.173 15.8734 28.1737 15.4852C28.1744 15.0971 28.0718 14.7158 27.8765 14.3804C27.6812 14.045 27.4001 13.7676 27.0622 13.5767L27.0581 13.5822ZM3.01332 28.6212C3.01391 28.6158 3.01391 28.6103 3.01332 28.6048L7.07934 16.59H15.0446C15.3347 16.59 15.6129 16.4748 15.818 16.2696C16.0231 16.0645 16.1383 15.7863 16.1383 15.4962C16.1383 15.2062 16.0231 14.928 15.818 14.7228C15.6129 14.5177 15.3347 14.4025 15.0446 14.4025H7.07934L3.02153 2.39311C3.02018 2.38537 3.0174 2.37795 3.01332 2.37124L25.9821 15.473L3.01332 28.6212Z"
                    fill="#419A62"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[80%] bg-white ">
              <button className="border-green-100 border-2  text-[#5e5e5e] text-xs font-normal py-3 lg:px-6 px-2 rounded-xl hover:bg-green-200">
                I am studying 12th. Show some schemes for me !
              </button>
              <button className="border-green-100 border-2  text-xs text-[#5e5e5e] font-normal py-3 lg:px-6 px-2 rounded-xl hover:bg-green-200">
                What are the government agriculture schemes?
              </button>
              <button className="border-green-100 border-2 text-xs  text-[#5e5e5e] font-normal py-3 lg:px-6 px-2 rounded-xl hover:bg-green-200">
                Show some welfare schemes for women and child
              </button>
              <button className="border-green-100 border-2  text-xs text-[#5e5e5e] font-normal py-3 lg:px-6 px-2 rounded-xl hover:bg-green-200">
                Schemes for widow and women
              </button>
              <button className="border-green-100 border-2 text-xs  text-[#5e5e5e] font-normal py-3 lg:px-6 px-2 rounded-xl hover:bg-green-200">
                Government schemes for single parent
              </button>
              <button className="border-green-100 border-2 text-xs  text-[#5e5e5e] font-normal py-3 lg:px-6 px-2 rounded-xl hover:bg-green-200">
                Welfare schemes for under graduation students
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-6 rounded-lg   ">
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-[#668DCB] mb-4">
          You know !
        </h1>
        <div className="border-2 border-green-100 px-6 rounded-lg mt-8">
          <h2 className="text-[40px] md:text-6xl lg:text-[64px] font-bold text-[#419A62] mb-4 lg:mt-4">
            2440+ Schemes
          </h2>
          <p className="text-[#5e5e5e] mb-6 lg:w-[70%] text-base">
            Indian government schemes include social welfare (pensions and
            subsidies), healthcare (affordable medical services), education
            (support for marginalized students), and agriculture (financial
            assistance to farmers).
          </p>
          <div className="flex items-center lg:justify-end -translate-x-[1rem] lg:-translate-x-[6rem] mt-16 lg:mt-0 ">
            <div className="flex flex-row gap-6">
              <button className="bg-[#668DCB] text-white text-[14px] lg:text-base px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition">
                <div className="flex flex-row gap-3">
                  <span>Explore now !</span>
                  <span>
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5471 11.2978L6.14081 1.93452C5.89845 1.80022 5.62102 1.74273 5.34525 1.76966C5.06949 1.79659 4.80841 1.90667 4.59662 2.08531C4.38483 2.26396 4.23231 2.50274 4.15928 2.77002C4.08625 3.0373 4.09616 3.32046 4.18768 3.58198L7.19354 12.5L4.18085 21.4189C4.1079 21.6251 4.08547 21.8457 4.11544 22.0623C4.14541 22.279 4.22691 22.4852 4.35309 22.6638C4.47928 22.8424 4.64646 22.9882 4.84062 23.0888C5.03478 23.1894 5.25025 23.242 5.46893 23.2421C5.70612 23.2416 5.93918 23.1801 6.14569 23.0634L22.5431 13.6816C22.7547 13.5627 22.9308 13.3896 23.0534 13.1802C23.176 12.9707 23.2406 12.7324 23.2406 12.4897C23.2406 12.247 23.176 12.0087 23.0534 11.7992C22.9308 11.5898 22.7547 11.4167 22.5431 11.2978H22.5471ZM21.966 12.665L5.56659 22.0439C5.53188 22.0633 5.49205 22.0717 5.45245 22.0679C5.41285 22.0641 5.37535 22.0483 5.34498 22.0226C5.31461 21.9969 5.29281 21.9625 5.2825 21.9241C5.27219 21.8857 5.27386 21.845 5.28729 21.8076C5.28768 21.8043 5.28768 21.801 5.28729 21.7978L8.2326 13.0859H14.0627C14.2181 13.0859 14.3671 13.0242 14.477 12.9143C14.5869 12.8044 14.6486 12.6554 14.6486 12.5C14.6486 12.3446 14.5869 12.1955 14.477 12.0856C14.3671 11.9757 14.2181 11.914 14.0627 11.914H8.2326L5.29022 3.20308C5.29077 3.19984 5.29077 3.19654 5.29022 3.19331C5.27493 3.15605 5.27238 3.11478 5.28298 3.07592C5.29358 3.03707 5.31672 3.0028 5.34881 2.97847C5.37742 2.9511 5.41423 2.93388 5.45358 2.92947C5.49292 2.92506 5.53263 2.9337 5.56659 2.95405L21.9728 12.3183C22.0031 12.335 22.0283 12.3596 22.0455 12.3896C22.0627 12.4195 22.0714 12.4537 22.0705 12.4882C22.0707 12.524 22.061 12.5591 22.0426 12.5898C22.0242 12.6204 21.9977 12.6454 21.966 12.6621V12.665Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <div className="absolute -top-20 -right-14 lg:-top-16 lg:-right-28 bg-[#668DCB] text-white p-3 rounded-lg lg:w-[12rem] w-[7rem]  lg:h-20 h-24 text-left clip-polygon">
                  Know what you are eligible for !
                  <img
                    className="-bottom-3 -left-2 absolute"
                    src="./Polygon.svg"
                    alt=""
                  />
                </div>
                <img src="./LeftHBot.svg" alt="" className="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog section */}
      <div className="bg-white p-6 rounded-lg  w-full max-w-6xl">
        <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-[96px] font-bold text-[#668DCB] mb-4 mt-2 lg:mt-0">
          Blogs
        </h1>
        <p className="text-[#5e5e5e] mb-8 text-base lg:w-[84%]">
          Indian government schemes include social welfare (pensions and
          subsidies), healthcare (affordable medical services), education
          (support for marginalized students), and agriculture (financial
          assistance to farmers).
        </p>
        <div className="space-y-5">
          {blogsState?.data?.map((item) => {
            return (
              <div
                key={item}
                className="flex flex-col lg:flex-row lg:space-x-6 items-center"
              >
                <div className="bg-gray-200 lg:w-1/3 w-full h-52 rounded-lg">
                  <img src={item.blogImage} />
                </div>

                <div className="flex flex-col mt-4 lg:mt-0 justify-between lg:w-[50%]">
                  <div className="mt-0">
                    <h2 className="text-2xl font-semibold text-[#393939] mb-2">
                      {item?.title}
                    </h2>
                    <p className="text-[#393939] text-base mb-2 mt-6 lg:mt-0">
                      {item?.description}
                    </p>
                    <div className="flex lg:space-x-2 mt-4">
                      {item?.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="border-green-100 border-2 text-[#419A62] px-3 py-1 rounded-lg text-xs lg:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-[#5e5e5e] text-xs lg:mt-1 mt-2">
                    {moment(item?.date).format("DD-MM-YYYY")}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end lg:w-[90%]">
          <button
            className="text-base bg-white px-4 py-2 rounded text-[#1f3456] underline font-medium"
            type="button"
          >
            See More
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid place-items-center w-[80%] mb-8">
        <img src="./OurMission.png" alt="" />
        <p className="text-center font-[20px] text-[#5e5e5e]">
          {" "}
          My sahaya was built with the aim of breaking inefficient service
          barriers with Indian citizens and the Indian government. As a first
          step, we step into schemes and forms provided by the central and state
          governments by engaging awareness and gaining knowledge of them in a
          better way.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
