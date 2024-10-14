import React from "react";
import { FaWhatsapp, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-[8rem] py-10 mx-auto w-[80%] border-t border-[#419A62] px-6">
      {/* Logo and Social Icons */}
      <div className="w-full lg:w-auto text-center lg:text-left">
        <img
          src="./logo.png"
          alt="Logo"
          className="mx-auto lg:mx-0 mb-4 lg:mb-0"
        />

        <div className="flex items-center justify-center">
          <div className="flex justify-center lg:justify-start gap-3 text-4xl mt-2 w-[80%] items-center">
            {/* WhatsApp Icon */}
            <a
              href="https://wa.me/your-number" // Replace with your WhatsApp link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-[#1F3456] hover:text-[#419A62]"
            >
              <FaWhatsapp />
            </a>

            {/* Twitter Icon */}
            <a
              href="https://twitter.com/yourprofile" // Replace with your Twitter link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-[#1F3456] hover:text-[#419A62]"
            >
              <FaTwitter />
            </a>

            {/* Instagram Icon */}
            <a
              href="https://instagram.com/yourprofile" // Replace with your Instagram link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-[#1F3456] hover:text-[#419A62]"
            >
              <FaInstagram />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://linkedin.com/in/yourprofile" // Replace with your LinkedIn link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-[#1F3456] hover:text-[#419A62]"
            >
              <PiLinkedinLogoBold />
            </a>

            {/* Facebook Icon */}
            <a
              href="https://www.facebook.com/yourpage" // Replace with your Facebook link
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-[#1F3456] hover:text-[#419A62]"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex items-start justify-start">
        <div className="w-full items-start justify-start">
          <h1 className="text-[#419A62] text-2xl font-medium lg:text-left">
            Links
          </h1>
          <div className="grid text-xl lg:text-left mt-2">
            <span className="text-base font-normal text-[#1f3456] mt-2 lg:mt-0">
              Blogs
            </span>
            <span className="text-base font-normal text-[#1f3456] mt-2 lg:mt-0">
              Documents
            </span>
          </div>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="w-full lg:w-auto">
        <h1 className="text-[#419A62] text-2xl font-medium lg:text-left">
          Contact Us
        </h1>
        <div className="grid text-xl lg:text-left mt-2">
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
