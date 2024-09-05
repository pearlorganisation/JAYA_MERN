import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { RiFacebookCircleLine } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-[8rem] py-10 mx-auto w-[80%] border-t border-[#419A62] px-6">
      <div className="w-full lg:w-auto text-center lg:text-left">
        <img
          src="./logo.png"
          alt="Logo"
          className="mx-auto lg:mx-0 mb-4 lg:mb-0"
        />

        <div className="flex items-center justify-center">
          <div className="flex justify-center lg:justify-start gap-3 text-4xl mt-2 w-[80%] items-center">
            <svg
              width="25"
              height="26"
              viewBox="0 0 25 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px]"
            >
              <path
                d="M19.4823 14.9734L15.7323 13.0984C15.5846 13.0249 15.4202 12.9916 15.2556 13.0019C15.091 13.0121 14.9321 13.0657 14.7947 13.157L13.0733 14.3055C12.283 13.871 11.6327 13.2207 11.1983 12.4305L12.3467 10.709C12.4381 10.5717 12.4916 10.4127 12.5019 10.2481C12.5122 10.0835 12.4789 9.9191 12.4053 9.77148L10.5303 6.02148C10.4526 5.86454 10.3325 5.7325 10.1835 5.64033C10.0346 5.54816 9.86285 5.49955 9.68772 5.5C8.44452 5.5 7.25223 5.99386 6.37316 6.87294C5.49408 7.75201 5.00022 8.9443 5.00022 10.1875C5.00332 12.9216 6.09081 15.5428 8.0241 17.4761C9.9574 19.4094 12.5786 20.4969 15.3127 20.5C15.9283 20.5 16.5378 20.3788 17.1065 20.1432C17.6753 19.9076 18.192 19.5623 18.6273 19.1271C19.0626 18.6918 19.4078 18.175 19.6434 17.6063C19.879 17.0376 20.0002 16.4281 20.0002 15.8125C20.0003 15.6383 19.9519 15.4676 19.8605 15.3194C19.769 15.1712 19.638 15.0514 19.4823 14.9734ZM15.3127 18.625C13.0757 18.6225 10.931 17.7328 9.34925 16.151C7.76745 14.5692 6.8777 12.4245 6.87522 10.1875C6.87504 9.53725 7.10018 8.90702 7.51232 8.40407C7.92447 7.90112 8.49816 7.55652 9.13577 7.42891L10.4811 10.1242L9.33615 11.8281C9.2506 11.9565 9.19803 12.1039 9.18311 12.2574C9.16819 12.411 9.19137 12.5658 9.25061 12.7082C9.92137 14.3024 11.1896 15.5706 12.7838 16.2414C12.9267 16.3033 13.0827 16.3286 13.2377 16.3151C13.3928 16.3016 13.5421 16.2497 13.6721 16.1641L15.3842 15.0227L18.0795 16.368C17.9509 17.0063 17.6048 17.5803 17.1002 17.9919C16.5956 18.4035 15.9639 18.6272 15.3127 18.625ZM12.5002 0.8125C10.3961 0.812041 8.32766 1.35635 6.4963 2.39246C4.66493 3.42856 3.13301 4.92115 2.04964 6.72496C0.96627 8.52877 0.368361 10.5823 0.314111 12.6858C0.259861 14.7892 0.751117 16.8709 1.74006 18.7281L0.409984 22.7184C0.29981 23.0487 0.283821 23.4033 0.36381 23.7422C0.443799 24.0811 0.616604 24.3911 0.862857 24.6374C1.10911 24.8836 1.41908 25.0564 1.75802 25.1364C2.09697 25.2164 2.45149 25.2004 2.78186 25.0902L6.77209 23.7602C8.40659 24.6295 10.2177 25.1151 12.0678 25.18C13.918 25.2449 15.7587 24.8875 17.4501 24.1348C19.1415 23.3822 20.6392 22.2541 21.8295 20.8362C23.0199 19.4183 23.8715 17.7478 24.3199 15.9516C24.7683 14.1554 24.8015 12.2807 24.4172 10.4697C24.0328 8.65876 23.2409 6.95914 22.1017 5.4999C20.9624 4.04066 19.5056 2.86014 17.842 2.04795C16.1783 1.23577 14.3515 0.81326 12.5002 0.8125ZM12.5002 23.3125C10.6873 23.3137 8.90619 22.8363 7.33694 21.9285C7.22204 21.8619 7.0943 21.8204 6.96217 21.8069C6.83005 21.7934 6.69655 21.8081 6.57053 21.85L2.18772 23.3125L3.64905 18.9297C3.69117 18.8038 3.70606 18.6703 3.69272 18.5382C3.67939 18.406 3.63814 18.2783 3.5717 18.1633C2.43495 16.1979 1.97855 13.9124 2.2733 11.6612C2.56805 9.41001 3.59748 7.319 5.20188 5.71257C6.80629 4.10613 8.89599 3.07407 11.1468 2.77647C13.3976 2.47888 15.6838 2.93239 17.6505 4.06666C19.6173 5.20093 21.1548 6.95255 22.0245 9.04979C22.8941 11.147 23.0474 13.4727 22.4605 15.6659C21.8736 17.8591 20.5793 19.7974 18.7784 21.1799C16.9775 22.5625 14.7706 23.3121 12.5002 23.3125Z"
                fill="#1F3456"
              />
            </svg>

            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px]"
            >
              <path
                d="M29.4911 8.07889C29.4202 7.90757 29.3 7.76113 29.1459 7.65809C28.9917 7.55504 28.8105 7.50002 28.6251 7.49998H25.059C24.5605 6.65176 23.8509 5.94697 22.9993 5.45413C22.1477 4.9613 21.1831 4.69719 20.1993 4.68748C19.4663 4.67787 18.7388 4.81495 18.0596 5.09067C17.3803 5.36638 16.7631 5.77516 16.2442 6.29295C15.7101 6.81704 15.2863 7.44262 14.9975 8.1329C14.7087 8.82318 14.5608 9.56423 14.5626 10.3125V11.0262C9.84459 9.78163 5.98561 5.94373 5.94459 5.90272C5.81882 5.77583 5.6594 5.68752 5.48512 5.6482C5.31084 5.60887 5.12895 5.62016 4.96087 5.68074C4.79279 5.74133 4.64552 5.84868 4.53641 5.99015C4.4273 6.13162 4.36088 6.30133 4.34498 6.47928C3.8399 12.0797 5.46647 15.8273 6.92311 17.9848C7.63335 19.0513 8.49738 20.0069 9.48717 20.8207C7.7024 22.875 4.89225 23.9543 4.86178 23.966C4.72949 24.0155 4.61011 24.0944 4.51256 24.1965C4.415 24.2987 4.3418 24.4216 4.29841 24.556C4.25503 24.6905 4.24259 24.833 4.26201 24.9729C4.28144 25.1128 4.33224 25.2465 4.41061 25.364C4.4985 25.4953 4.85006 25.9558 5.70904 26.3859C6.77076 26.918 8.1735 27.1875 9.87506 27.1875C18.1567 27.1875 25.0766 20.8101 25.7833 12.6047L29.2883 9.10077C29.4194 8.96958 29.5086 8.80248 29.5447 8.62058C29.5808 8.43869 29.5621 8.25018 29.4911 8.07889ZM24.2176 11.5254C24.0569 11.6865 23.9603 11.9006 23.9458 12.1277C23.4688 19.5211 17.2907 25.3125 9.87506 25.3125C8.63756 25.3125 7.76569 25.1484 7.15397 24.9515C8.50279 24.2191 10.3837 22.9594 11.593 21.1453C11.664 21.0386 11.7124 20.9185 11.7351 20.7925C11.7579 20.6664 11.7546 20.5369 11.7253 20.4122C11.6961 20.2874 11.6417 20.17 11.5653 20.0671C11.4889 19.9642 11.3923 19.8781 11.2813 19.814C11.2262 19.7824 6.13561 16.7273 6.12506 8.56405C8.00006 10.0875 11.4278 12.4512 15.3442 13.1098C15.4784 13.1324 15.616 13.1255 15.7473 13.0896C15.8786 13.0537 16.0005 12.9897 16.1045 12.9019C16.2086 12.8141 16.2923 12.7048 16.3498 12.5814C16.4073 12.458 16.4372 12.3236 16.4376 12.1875V10.3125C16.4365 9.81239 16.5355 9.31713 16.7287 8.85586C16.9219 8.39458 17.2054 7.97662 17.5626 7.62655C17.9049 7.28354 18.3126 7.01264 18.7614 6.82988C19.2103 6.64712 19.6912 6.55619 20.1758 6.56248C21.6594 6.58123 23.0458 7.48592 23.6258 8.81366C23.699 8.98059 23.8192 9.12258 23.9717 9.22228C24.1243 9.32197 24.3026 9.37504 24.4848 9.37499H26.3598L24.2176 11.5254Z"
                fill="#1F3456"
              />
            </svg>

            <svg
              width="31"
              height="30"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[30px] h-[30px]"
            >
              <path
                d="M15.5 9.375C14.3875 9.375 13.2999 9.7049 12.3749 10.323C11.4499 10.9411 10.7289 11.8196 10.3032 12.8474C9.87744 13.8752 9.76604 15.0062 9.98308 16.0974C10.2001 17.1885 10.7359 18.1908 11.5225 18.9775C12.3092 19.7641 13.3115 20.2999 14.4026 20.5169C15.4938 20.734 16.6248 20.6226 17.6526 20.1968C18.6804 19.7711 19.5589 19.0501 20.177 18.1251C20.7951 17.2001 21.125 16.1125 21.125 15C21.1234 13.5086 20.5303 12.0788 19.4758 11.0242C18.4212 9.96968 16.9914 9.37655 15.5 9.375ZM15.5 18.75C14.7583 18.75 14.0333 18.5301 13.4166 18.118C12.7999 17.706 12.3193 17.1203 12.0355 16.4351C11.7516 15.7498 11.6774 14.9958 11.8221 14.2684C11.9667 13.541 12.3239 12.8728 12.8483 12.3483C13.3728 11.8239 14.041 11.4667 14.7684 11.3221C15.4958 11.1774 16.2498 11.2516 16.9351 11.5355C17.6203 11.8193 18.206 12.2999 18.618 12.9166C19.0301 13.5333 19.25 14.2583 19.25 15C19.25 15.9946 18.8549 16.9484 18.1516 17.6516C17.4484 18.3549 16.4946 18.75 15.5 18.75ZM21.125 2.8125H9.875C8.13509 2.81436 6.46697 3.50636 5.23667 4.73667C4.00636 5.96697 3.31436 7.63509 3.3125 9.375V20.625C3.31436 22.3649 4.00636 24.033 5.23667 25.2633C6.46697 26.4936 8.13509 27.1856 9.875 27.1875H21.125C22.8649 27.1856 24.533 26.4936 25.7633 25.2633C26.9936 24.033 27.6856 22.3649 27.6875 20.625V9.375C27.6856 7.63509 26.9936 5.96697 25.7633 4.73667C24.533 3.50636 22.8649 2.81436 21.125 2.8125ZM25.8125 20.625C25.8125 21.8682 25.3186 23.0605 24.4396 23.9396C23.5605 24.8186 22.3682 25.3125 21.125 25.3125H9.875C8.6318 25.3125 7.43951 24.8186 6.56044 23.9396C5.68136 23.0605 5.1875 21.8682 5.1875 20.625V9.375C5.1875 8.1318 5.68136 6.93951 6.56044 6.06044C7.43951 5.18136 8.6318 4.6875 9.875 4.6875H21.125C22.3682 4.6875 23.5605 5.18136 24.4396 6.06044C25.3186 6.93951 25.8125 8.1318 25.8125 9.375V20.625ZM23 8.90625C23 9.18438 22.9175 9.45626 22.763 9.68752C22.6085 9.91878 22.3889 10.099 22.1319 10.2055C21.8749 10.3119 21.5922 10.3397 21.3194 10.2855C21.0466 10.2312 20.796 10.0973 20.5994 9.90062C20.4027 9.70395 20.2688 9.45338 20.2145 9.1806C20.1603 8.90781 20.1881 8.62506 20.2945 8.3681C20.401 8.11114 20.5812 7.89152 20.8125 7.737C21.0437 7.58247 21.3156 7.5 21.5938 7.5C21.9667 7.5 22.3244 7.64816 22.5881 7.91188C22.8518 8.1756 23 8.53329 23 8.90625Z"
                fill="#1F3456"
              />
            </svg>

            <svg
              width="31"
              height="30"
              className="w-[30px] h-[30px]"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.8125 2.8125H5.1875C4.69022 2.8125 4.21331 3.01004 3.86167 3.36167C3.51004 3.71331 3.3125 4.19022 3.3125 4.6875V25.3125C3.3125 25.8098 3.51004 26.2867 3.86167 26.6383C4.21331 26.99 4.69022 27.1875 5.1875 27.1875H25.8125C26.3098 27.1875 26.7867 26.99 27.1383 26.6383C27.49 26.2867 27.6875 25.8098 27.6875 25.3125V4.6875C27.6875 4.19022 27.49 3.71331 27.1383 3.36167C26.7867 3.01004 26.3098 2.8125 25.8125 2.8125ZM25.8125 25.3125H5.1875V4.6875H25.8125V25.3125ZM11.75 13.125V20.625C11.75 20.8736 11.6512 21.1121 11.4754 21.2879C11.2996 21.4637 11.0611 21.5625 10.8125 21.5625C10.5639 21.5625 10.3254 21.4637 10.1496 21.2879C9.97377 21.1121 9.875 20.8736 9.875 20.625V13.125C9.875 12.8764 9.97377 12.6379 10.1496 12.4621C10.3254 12.2863 10.5639 12.1875 10.8125 12.1875C11.0611 12.1875 11.2996 12.2863 11.4754 12.4621C11.6512 12.6379 11.75 12.8764 11.75 13.125ZM22.0625 16.4062V20.625C22.0625 20.8736 21.9637 21.1121 21.7879 21.2879C21.6121 21.4637 21.3736 21.5625 21.125 21.5625C20.8764 21.5625 20.6379 21.4637 20.4621 21.2879C20.2863 21.1121 20.1875 20.8736 20.1875 20.625V16.4062C20.1875 15.7846 19.9406 15.1885 19.501 14.749C19.0615 14.3094 18.4654 14.0625 17.8438 14.0625C17.2221 14.0625 16.626 14.3094 16.1865 14.749C15.7469 15.1885 15.5 15.7846 15.5 16.4062V20.625C15.5 20.8736 15.4012 21.1121 15.2254 21.2879C15.0496 21.4637 14.8111 21.5625 14.5625 21.5625C14.3139 21.5625 14.0754 21.4637 13.8996 21.2879C13.7238 21.1121 13.625 20.8736 13.625 20.625V13.125C13.6262 12.8954 13.7116 12.6741 13.865 12.5033C14.0185 12.3325 14.2293 12.2239 14.4575 12.1981C14.6857 12.1724 14.9154 12.2313 15.103 12.3637C15.2906 12.4961 15.4231 12.6928 15.4754 12.9164C16.1096 12.4862 16.849 12.2368 17.6142 12.1951C18.3795 12.1534 19.1416 12.321 19.8188 12.6798C20.496 13.0385 21.0626 13.575 21.4579 14.2315C21.8532 14.8881 22.0622 15.6399 22.0625 16.4062ZM12.2188 9.84375C12.2188 10.1219 12.1363 10.3938 11.9818 10.625C11.8272 10.8563 11.6076 11.0365 11.3506 11.143C11.0937 11.2494 10.8109 11.2772 10.5382 11.223C10.2654 11.1687 10.0148 11.0348 9.81813 10.8381C9.62146 10.6415 9.48753 10.3909 9.43327 10.1181C9.37901 9.84531 9.40686 9.56256 9.51329 9.3056C9.61973 9.04864 9.79997 8.82902 10.0312 8.6745C10.2625 8.51997 10.5344 8.4375 10.8125 8.4375C11.1855 8.4375 11.5431 8.58566 11.8069 8.84938C12.0706 9.1131 12.2188 9.47079 12.2188 9.84375Z"
                fill="#1F3456"
              />
            </svg>

            <svg
              width="31"
              height="30"
              className="w-[30px] h-[30px]"
              viewBox="0 0 31 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5 2.8125C13.0895 2.8125 10.7332 3.52728 8.72899 4.86646C6.72477 6.20564 5.16267 8.10907 4.24022 10.336C3.31778 12.563 3.07643 15.0135 3.54668 17.3777C4.01694 19.7418 5.17769 21.9134 6.88214 23.6179C8.58659 25.3223 10.7582 26.4831 13.1223 26.9533C15.4865 27.4236 17.937 27.1822 20.164 26.2598C22.3909 25.3373 24.2944 23.7752 25.6335 21.771C26.9727 19.7668 27.6875 17.4105 27.6875 15C27.6841 11.7687 26.399 8.67076 24.1141 6.3859C21.8292 4.10104 18.7313 2.81591 15.5 2.8125ZM16.4375 25.2691V17.8125H19.25C19.4986 17.8125 19.7371 17.7137 19.9129 17.5379C20.0887 17.3621 20.1875 17.1236 20.1875 16.875C20.1875 16.6264 20.0887 16.3879 19.9129 16.2121C19.7371 16.0363 19.4986 15.9375 19.25 15.9375H16.4375V13.125C16.4375 12.6277 16.635 12.1508 16.9867 11.7992C17.3383 11.4475 17.8152 11.25 18.3125 11.25H20.1875C20.4361 11.25 20.6746 11.1512 20.8504 10.9754C21.0262 10.7996 21.125 10.5611 21.125 10.3125C21.125 10.0639 21.0262 9.8254 20.8504 9.64959C20.6746 9.47377 20.4361 9.375 20.1875 9.375H18.3125C17.3179 9.375 16.3641 9.77009 15.6609 10.4733C14.9576 11.1766 14.5625 12.1304 14.5625 13.125V15.9375H11.75C11.5014 15.9375 11.2629 16.0363 11.0871 16.2121C10.9113 16.3879 10.8125 16.6264 10.8125 16.875C10.8125 17.1236 10.9113 17.3621 11.0871 17.5379C11.2629 17.7137 11.5014 17.8125 11.75 17.8125H14.5625V25.2691C11.9197 25.0279 9.4716 23.7771 7.72747 21.7769C5.98334 19.7767 5.07743 17.1812 5.19819 14.5301C5.31894 11.879 6.45706 9.37659 8.3758 7.54325C10.2945 5.70991 12.8462 4.68684 15.5 4.68684C18.1538 4.68684 20.7055 5.70991 22.6242 7.54325C24.543 9.37659 25.6811 11.879 25.8018 14.5301C25.9226 17.1812 25.0167 19.7767 23.2725 21.7769C21.5284 23.7771 19.0803 25.0279 16.4375 25.2691Z"
                fill="#1F3456"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-start justify-start">
        <div className="w-full  items-start justify-start">
          <h1 className="text-[#419A62] text-2xl font-medium  lg:text-left">
            Links
          </h1>
          <div className="grid text-xl  lg:text-left mt-2">
            <span className="text-base font-normal text-[#1f3456] mt-2 lg:mt-0">
              Blogs
            </span>
            <span className="text-base font-normal text-[#1f3456] mt-2 lg:mt-0">
              Documents
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-auto">
        <h1 className="text-[#419A62] text-2xl font-medium  lg:text-left">
          Contact Us
        </h1>
        <div className="grid text-xl  lg:text-left mt-2">
          <span className="text-base font-normal text-[#1f3456]">
            i-start incubation,
          </span>
          <span className="text-base font-normal text-[#1f3456]">
            Knowledge institute of technology,
          </span>
          <span className="text-base font-normal text-[#1f3456]">
            Salem, Tamilnadu.
          </span>
          <span className="text-base font-normal text-[#1f3456] mt-2">
            Support@mysahaya.com
          </span>
          <span className="text-base font-normal text-[#1f3456] mt-2">
            +91 6379470141
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;