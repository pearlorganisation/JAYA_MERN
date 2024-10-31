/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { removeDocumentInUserCollection } from "../../features/actions/uploadDocumentAction";

export default function DropdownBasic({ doc, documentId, collectionId }) {
  const dispatch = useDispatch();
  const documentState = useSelector((state) => state.document);

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

  // useEffect(() => {
  //   function handleClickOutside(event) {
  //     if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   }
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [wrapperRef]);

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
          ref={wrapperRef}
        >
          <HiOutlineDotsVertical />
        </button>
        {/*  <!--  End Dropdown trigger --> */}
        {/*  <!-- Start Menu list --> */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-full z-10 mt-1 flex w-72 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10 `}
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
                console.log(documentId, collectionId, "shubham bhai");
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
        {/*  <!-- End Menu list --> */}
      </div>
      {/* <!-- End Basic dropdown menu--> */}
    </>
  );
}
