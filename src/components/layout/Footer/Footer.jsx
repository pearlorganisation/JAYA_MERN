import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { PiLinkedinLogoBold } from "react-icons/pi";
import { RiFacebookCircleLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div className='flex gap-[8rem]  py-10 mx-auto max-w-7xl border-t border-[#419A62]'>
            <div className='w-fit'>
                <img src="./logo.png" alt="" />
                <div className='flex gap-3 text-4xl justify-center items-center'><FaWhatsapp /><FaXTwitter /><FaInstagram /><PiLinkedinLogoBold /><RiFacebookCircleLine /></div>
            </div>
            <div>
                <h1 className='text-[#419A62] text-2xl font-medium'>Links</h1>
                <div className='grid text-xl'>
                    <span>Blogs</span>
                    <span>Documents</span>
                </div>
            </div>
            <div>
                <h1 className='text-[#419A62] text-2xl font-medium'>Contact Us</h1>
                <div className='grid text-xl w-[70%]'>
                    <span>i-start incubation, Knowledge institute of technology, Salem, Tamilnadu.</span>
                    <span>Support@mysahaya.com</span>
                    <span>+91 6379470141</span>
                </div>
            </div>
        </div>
    )
}

export default Footer