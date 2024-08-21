import React from 'react';
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { RiFacebookCircleLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-[8rem] py-10 mx-auto max-w-7xl border-t border-[#419A62] px-6'>
            <div className='w-full lg:w-auto text-center lg:text-left'>
                <img src="./logo.png" alt="Logo" className="mx-auto lg:mx-0 mb-4 lg:mb-0" />
                <div className='flex justify-center lg:justify-start gap-3 text-4xl'>
                    <FaWhatsapp />
                    <FaXTwitter />
                    <FaInstagram />
                    <PiLinkedinLogoBold />
                    <RiFacebookCircleLine />
                </div>
            </div>
            <div className='w-full lg:w-auto'>
                <h1 className='text-[#419A62] text-2xl font-medium text-center lg:text-left'>Links</h1>
                <div className='grid text-xl text-center lg:text-left'>
                    <span>Blogs</span>
                    <span>Documents</span>
                </div>
            </div>
            <div className='w-full lg:w-auto'>
                <h1 className='text-[#419A62] text-2xl font-medium text-center lg:text-left'>Contact Us</h1>
                <div className='grid text-xl text-center lg:text-left'>
                    <span>i-start incubation, Knowledge institute of technology, Salem, Tamilnadu.</span>
                    <span>Support@mysahaya.com</span>
                    <span>+91 6379470141</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
