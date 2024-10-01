import { useEffect, useState } from "react";
import Bot from "../../assets/Bot.jpg";
import { useNavigate } from "react-router-dom";
const SchemesFormPage = () => {
  // const [showSchemes, setShowSchemes] = useState(false);
  // const [scheme, setScheme] = useState("");

  // const handleShowSchemes = () => {
  //   setShowSchemes(true);
  // };

  // const handleSchemeChange = (value) => {
  //   setScheme(value);
  // };

  const navigate = useNavigate();

  return (
    <div className="flex flex-col flex-auto h-full py-6 px-2 lg:p-6">
      <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-white h-full lg:p-4">
        <div className="flex flex-col h-full overflow-x-auto mb-4">
          <div className="flex flex-col h-full">
            <div className="grid grid-cols-12 lg:gap-y-2">
              <div className="col-start-6 col-end-13 p-3 rounded-lg">
                <div className="flex items-center justify-start flex-row-reverse">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0">
                    <img src={Bot} />
                  </div>
                  <div className="relative mr-3 text-sm bg-white  py-1 px-3 w-16 rounded-lg">
                    <div className="text-center">Hi !</div>
                  </div>
                </div>
              </div>
              <div className="col-start-1 col-end-12 py-3 lg:p-3 rounded-lg">
                <div className="flex flex-row items-start">
                  <div className="flex items-center justify-center h-10 w-10 rounded-full  flex-shrink-0">
                    <img src={Bot} />
                  </div>
                  <div className="relative ml-3 text-sm  w-[full] py-2 px-4 rounded-xl">
                    <p className="text-base font-light text-[#000000]">
                      Hello !
                    </p>
                    <p className="text-base font-light text-[#000000] w-[100%]">
                      Can I help you with Indian Governement and NGOs Schemes!
                    </p>

                    <button
                      onClick={() => navigate("/newchatbot")}
                      className="flex lg:justify-start items-center justify-center min-w-40 lg:min-w-max mt-4  border-2 border-green-100 rounded-lg text-black lg:px-4 px-1 py-1 lg:py-2 flex-shrink-0"
                    >
                      <span>Find a better scheme for you !</span>
                      <span className="ml-2">
                        <svg
                          width="35"
                          height="35"
                          viewBox="0 0 35 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M29.8222 15.3485L6.85345 2.23987C6.51416 2.05185 6.12575 1.97136 5.73968 2.00906C5.3536 2.04676 4.9881 2.20088 4.69159 2.45098C4.39508 2.70109 4.18156 3.03538 4.07932 3.40957C3.97708 3.78376 3.99094 4.18019 4.11908 4.54632L8.32728 17.0315L4.10951 29.518C4.00738 29.8066 3.97598 30.1155 4.01794 30.4188C4.0599 30.7221 4.174 31.0109 4.35065 31.2609C4.52731 31.511 4.76137 31.715 5.0332 31.8559C5.30502 31.9967 5.60667 32.0704 5.91283 32.0705C6.24489 32.0698 6.57117 31.9837 6.86029 31.8203L29.8167 18.6858C30.1129 18.5193 30.3595 18.277 30.5311 17.9838C30.7027 17.6905 30.7931 17.3569 30.7931 17.0171C30.7931 16.6774 30.7027 16.3437 30.5311 16.0505C30.3595 15.7572 30.1129 15.5149 29.8167 15.3485H29.8222ZM29.0087 17.2625L6.04955 30.393C6.00095 30.4202 5.9452 30.4319 5.88976 30.4266C5.83431 30.4213 5.78182 30.3992 5.73929 30.3632C5.69677 30.3272 5.66626 30.2791 5.65182 30.2253C5.63739 30.1715 5.63973 30.1146 5.65853 30.0621C5.65907 30.0576 5.65907 30.053 5.65853 30.0485L9.78197 17.8518H17.9441C18.1616 17.8518 18.3703 17.7654 18.5241 17.6115C18.678 17.4577 18.7644 17.249 18.7644 17.0315C18.7644 16.8139 18.678 16.6053 18.5241 16.4514C18.3703 16.2976 18.1616 16.2112 17.9441 16.2112H9.78197L5.66263 4.01585C5.6634 4.01133 5.6634 4.0067 5.66263 4.00218C5.64122 3.95002 5.63766 3.89224 5.6525 3.83784C5.66733 3.78344 5.69974 3.73547 5.74466 3.7014C5.78472 3.66308 5.83625 3.63898 5.89133 3.6328C5.94642 3.62663 6.002 3.63872 6.04955 3.66722L29.0183 16.7772C29.0607 16.8005 29.0959 16.835 29.12 16.877C29.1441 16.9189 29.1562 16.9667 29.155 17.0151C29.1552 17.0651 29.1417 17.1143 29.1159 17.1572C29.0901 17.2001 29.0531 17.2351 29.0087 17.2584V17.2625Z"
                            fill="#419A62"
                          />
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemesFormPage;

{
  /* 
  
  
   {showSchemes && (
                <div className="col-start-6 col-end-13 p-3 rounded-lg">
                  <div className="flex items-start justify-start flex-row-reverse">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0">
                      <img src={Bot} />
                    </div>
                    <div className="relative mr-15 text-sm bg-white py-1 px-3 w-[60] lg:w-72 rounded-lg">
                      <div>
                        <p className="font-semibold">Schemes for you</p>
                        <div className="flex flex-col gap-2 mt-3">
                          {[
                            "General",
                            "Other backward class(OBC)",
                            "Particularly vulnerable tribal(PVTG)",
                            "Scheduled caste(SC)",
                            "Scheduled tribe(ST)",
                          ].map((cas) => (
                            <div key={cas} className="flex flex-row">
                              <button
                                onClick={() => handleSchemeChange(cas)}
                                className={`px-4 py-2 flex flex-row justify-between min-w-56 lg:w-80 items-center text-sm  rounded-lg ${
                                  scheme === cas
                                    ? "bg-[#419A62] text-white"
                                    : "bg-white border-2 border-green-100"
                                }`}
                              >
                                <span> {cas}</span>

                                <span>
                                  <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 16 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M8 1.90625C6.79477 1.90625 5.61661 2.26364 4.6145 2.93323C3.61238 3.60282 2.83133 4.55454 2.37011 5.66802C1.90889 6.78151 1.78821 8.00676 2.02334 9.18883C2.25847 10.3709 2.83884 11.4567 3.69107 12.3089C4.5433 13.1612 5.6291 13.7415 6.81117 13.9767C7.99324 14.2118 9.21849 14.0911 10.332 13.6299C11.4455 13.1687 12.3972 12.3876 13.0668 11.3855C13.7364 10.3834 14.0938 9.20523 14.0938 8C14.092 6.38436 13.4495 4.83538 12.307 3.69295C11.1646 2.55052 9.61564 1.90796 8 1.90625ZM8 13.1562C6.98019 13.1562 5.98328 12.8538 5.13534 12.2873C4.2874 11.7207 3.62651 10.9154 3.23625 9.97321C2.84598 9.03103 2.74387 7.99428 2.94283 6.99407C3.14178 5.99385 3.63287 5.0751 4.35398 4.35398C5.0751 3.63287 5.99385 3.14178 6.99407 2.94283C7.99428 2.74387 9.03103 2.84598 9.97321 3.23625C10.9154 3.62651 11.7207 4.2874 12.2873 5.13534C12.8538 5.98328 13.1563 6.98019 13.1563 8C13.1547 9.36705 12.611 10.6777 11.6443 11.6443C10.6777 12.611 9.36705 13.1547 8 13.1562ZM8.9375 10.8125C8.9375 10.9368 8.88812 11.056 8.80021 11.144C8.7123 11.2319 8.59307 11.2812 8.46875 11.2812C8.22011 11.2812 7.98166 11.1825 7.80584 11.0067C7.63002 10.8308 7.53125 10.5924 7.53125 10.3438V8C7.40693 8 7.2877 7.95061 7.1998 7.86271C7.11189 7.7748 7.0625 7.65557 7.0625 7.53125C7.0625 7.40693 7.11189 7.2877 7.1998 7.19979C7.2877 7.11189 7.40693 7.0625 7.53125 7.0625C7.77989 7.0625 8.01835 7.16127 8.19417 7.33709C8.36998 7.5129 8.46875 7.75136 8.46875 8V10.3438C8.59307 10.3438 8.7123 10.3931 8.80021 10.481C8.88812 10.569 8.9375 10.6882 8.9375 10.8125ZM7.0625 5.42188C7.0625 5.28281 7.10374 5.14687 7.181 5.03124C7.25826 4.91561 7.36807 4.82549 7.49655 4.77227C7.62503 4.71905 7.76641 4.70513 7.9028 4.73226C8.03919 4.75939 8.16448 4.82636 8.26281 4.92469C8.36115 5.02302 8.42811 5.14831 8.45524 5.2847C8.48237 5.42109 8.46845 5.56247 8.41523 5.69095C8.36201 5.81943 8.27189 5.92924 8.15626 6.0065C8.04063 6.08376 7.90469 6.125 7.76563 6.125C7.57915 6.125 7.4003 6.05092 7.26844 5.91906C7.13658 5.7872 7.0625 5.60836 7.0625 5.42188Z"
                                      fill="#419A62"
                                    />
                                  </svg>
                                </span>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {scheme && (
                <div className="col-start-1 col-end-12 p-3 rounded-lg">
                  <div className="flex flex-row items-start justify-start">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full flex-shrink-0">
                      <img src={Bot} />
                    </div>
                    <div className="relative ml-3 text-sm bg-white py-2 px-4 rounded-lg">
                      <div>
                        <p className="text-base text-black font-thin">
                          Thanks for your patience
                        </p>

                        <button className="flex items-start  w-full mt-4 justify-start border-2 border-green-100 rounded-lg text-black px-4 py-2 flex-shrink-0">
                          <span>See Your Result !</span>
                          <span className="ml-2">
                            <svg
                              width="35"
                              height="35"
                              viewBox="0 0 35 35"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M29.8222 15.3485L6.85345 2.23987C6.51416 2.05185 6.12575 1.97136 5.73968 2.00906C5.3536 2.04676 4.9881 2.20088 4.69159 2.45098C4.39508 2.70109 4.18156 3.03538 4.07932 3.40957C3.97708 3.78376 3.99094 4.18019 4.11908 4.54632L8.32728 17.0315L4.10951 29.518C4.00738 29.8066 3.97598 30.1155 4.01794 30.4188C4.0599 30.7221 4.174 31.0109 4.35065 31.2609C4.52731 31.511 4.76137 31.715 5.0332 31.8559C5.30502 31.9967 5.60667 32.0704 5.91283 32.0705C6.24489 32.0698 6.57117 31.9837 6.86029 31.8203L29.8167 18.6858C30.1129 18.5193 30.3595 18.277 30.5311 17.9838C30.7027 17.6905 30.7931 17.3569 30.7931 17.0171C30.7931 16.6774 30.7027 16.3437 30.5311 16.0505C30.3595 15.7572 30.1129 15.5149 29.8167 15.3485H29.8222ZM29.0087 17.2625L6.04955 30.393C6.00095 30.4202 5.9452 30.4319 5.88976 30.4266C5.83431 30.4213 5.78182 30.3992 5.73929 30.3632C5.69677 30.3272 5.66626 30.2791 5.65182 30.2253C5.63739 30.1715 5.63973 30.1146 5.65853 30.0621C5.65907 30.0576 5.65907 30.053 5.65853 30.0485L9.78197 17.8518H17.9441C18.1616 17.8518 18.3703 17.7654 18.5241 17.6115C18.678 17.4577 18.7644 17.249 18.7644 17.0315C18.7644 16.8139 18.678 16.6053 18.5241 16.4514C18.3703 16.2976 18.1616 16.2112 17.9441 16.2112H9.78197L5.66263 4.01585C5.6634 4.01133 5.6634 4.0067 5.66263 4.00218C5.64122 3.95002 5.63766 3.89224 5.6525 3.83784C5.66733 3.78344 5.69974 3.73547 5.74466 3.7014C5.78472 3.66308 5.83625 3.63898 5.89133 3.6328C5.94642 3.62663 6.002 3.63872 6.04955 3.66722L29.0183 16.7772C29.0607 16.8005 29.0959 16.835 29.12 16.877C29.1441 16.9189 29.1562 16.9667 29.155 17.0151C29.1552 17.0651 29.1417 17.1143 29.1159 17.1572C29.0901 17.2001 29.0531 17.2351 29.0087 17.2584V17.2625Z"
                                fill="#419A62"
                              />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
  
  */
}
