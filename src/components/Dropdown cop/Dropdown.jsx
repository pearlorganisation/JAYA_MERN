/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { useDispatch } from "react-redux";
import { removeDocumentInUserCollection } from "../../features/actions/uploadDocumentAction";

export default function DropdownBasic({ doc, documentId, collectionId }) {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const wrapperRef = useRef(null);

  const navigationItems = [
    {
      linkName: "Remove",
      icon: <MdDeleteOutline />,
      onClick: () => {
        console.log(documentId, collectionId);
      },
    },
    {
      linkName: "Download",
      icon: <GoDownload />,
      onClick: () => {
        console.log(documentId, collectionId);
      },
    },
  ];

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  const handleKeyDown = (e) => {
    if (isOpen) {
      e.preventDefault();

      switch (e.keyCode) {
        // KeyDown
        case 40:
          if (currentItem === navigationItems.length - 1) {
            setCurrentItem(0);
          } else {
            setCurrentItem(currentItem + 1);
          }
          break;
        // KeyUp
        case 38:
          if (currentItem === 0) {
            setCurrentItem(navigationItems.length - 1);
          } else {
            setCurrentItem(currentItem - 1);
          }
          break;
        // Escape
        case 27:
          setCurrentItem(1);
          setIsOpen(false);
          break;
        default:
          break;
      }
    }
  };

  return (
    <>
      {/* <!-- Component: Basic dropdown menu--> */}
      <div className="relative inline-flex " id="dropdown">
        {/*  <!--  Start Dropdown trigger --> */}
        <button
          className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded   text-sm font-medium tracking-wide text-black transition duration-300  "
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? " true" : "false"}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 12.5V19.1667C20 19.3877 19.9122 19.5996 19.7559 19.7559C19.5996 19.9122 19.3877 20 19.1667 20H0.833333C0.61232 20 0.400358 19.9122 0.244078 19.7559C0.0877975 19.5996 0 19.3877 0 19.1667V12.5C0 12.279 0.0877975 12.067 0.244078 11.9107C0.400358 11.7545 0.61232 11.6667 0.833333 11.6667C1.05435 11.6667 1.26631 11.7545 1.42259 11.9107C1.57887 12.067 1.66667 12.279 1.66667 12.5V18.3333H18.3333V12.5C18.3333 12.279 18.4211 12.067 18.5774 11.9107C18.7337 11.7545 18.9457 11.6667 19.1667 11.6667C19.3877 11.6667 19.5996 11.7545 19.7559 11.9107C19.9122 12.067 20 12.279 20 12.5ZM9.41042 13.0896C9.48781 13.1671 9.57972 13.2285 9.68088 13.2705C9.78205 13.3124 9.89049 13.334 10 13.334C10.1095 13.334 10.218 13.3124 10.3191 13.2705C10.4203 13.2285 10.5122 13.1671 10.5896 13.0896L14.7563 8.92292C14.8337 8.84549 14.8951 8.75357 14.937 8.65241C14.9789 8.55125 15.0005 8.44283 15.0005 8.33333C15.0005 8.22384 14.9789 8.11541 14.937 8.01425C14.8951 7.91309 14.8337 7.82117 14.7563 7.74375C14.6788 7.66632 14.5869 7.60491 14.4857 7.563C14.3846 7.5211 14.2762 7.49954 14.1667 7.49954C14.0572 7.49954 13.9487 7.5211 13.8476 7.563C13.7464 7.60491 13.6545 7.66632 13.5771 7.74375L10.8333 10.4885V0.833333C10.8333 0.61232 10.7455 0.400358 10.5893 0.244078C10.433 0.0877973 10.221 0 10 0C9.77899 0 9.56702 0.0877973 9.41074 0.244078C9.25446 0.400358 9.16667 0.61232 9.16667 0.833333V10.4885L6.42292 7.74375C6.26655 7.58738 6.05447 7.49954 5.83333 7.49954C5.6122 7.49954 5.40012 7.58738 5.24375 7.74375C5.08738 7.90012 4.99954 8.1122 4.99954 8.33333C4.99954 8.55447 5.08738 8.76655 5.24375 8.92292L9.41042 13.0896Z"
              fill="#393939"
            />
          </svg>
        </button>
        {/*  <!--  End Dropdown trigger --> */}
        {/*  <!-- Start Menu list --> */}
        <ul
          ref={wrapperRef}
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute bottom-full right-0 z-10 mt-1 flex w-40 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10 `}
        >
          <li>
            <button
              onClick={() => {
                dispatch(
                  removeDocumentInUserCollection({
                    id: documentId,
                    collectionId,
                  })
                );
              }}
              className={` ${
                1 === currentItem
                  ? "bg-emerald-50 text-emerald-500"
                  : "bg-none text-slate-500"
              } flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none`}
              href="#"
              aria-current={1 + 1 === currentItem ? "page" : "false"}
            >
              <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                <span className="truncate leading-5 flex justify-start items-center gap-2">
                  {" "}
                  <MdDeleteOutline />
                  Remove
                </span>
              </span>
            </button>
          </li>
          <li>
            <a
              className={` ${
                2 === currentItem
                  ? "bg-emerald-50 text-emerald-500"
                  : "bg-none text-slate-500"
              } flex items-start justify-start gap-2 p-2 px-5 transition-colors duration-300 hover:bg-emerald-50 hover:text-emerald-500 focus:bg-emerald-50 focus:text-emerald-600 focus:outline-none focus-visible:outline-none`}
              href="#"
              aria-current={2 + 1 === currentItem ? "page" : "false"}
            >
              <span className="flex flex-col gap-1 overflow-hidden whitespace-nowrap">
                <a
                  href={doc?.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={doc?.title}
                >
                  <span className="truncate leading-5 flex justify-start items-center gap-2">
                    {" "}
                    <GoDownload />
                    Download
                  </span>
                </a>
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
