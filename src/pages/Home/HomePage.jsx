import React from 'react'
import { LuSendHorizonal } from "react-icons/lu";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='h-screen  w-full grid place-items-center'>
            <div className="min-h-screen flex flex-col justify-center items-center  w-full">
                <div className="bg-white  rounded-lg  p-6">
                    {/* Chatbot Header */}
                    <div className="flex items-center justify-center mb-8">
                        <div className=" p-4">
                            {/* Chatbot Avatar */}
                            <img src="./Bot.svg" alt="" />
                        </div>
                        <div className="ml-4 text-left text-4xl font-semibold max-w-xl bg-[#668DCB] text-white p-6 rounded-md">
                            <p className=" ">Hi,</p>
                            <p className=" ">I am sahaya</p>
                            <p className=" ">I am here to help you with</p>
                            <p className=" ">Government Services & Schemes</p>

                        </div>
                    </div>

                    {/* Input Field */}
                    <div className="flex items-center border-2 border-green-500 rounded-lg p-2 mb-4">
                        <input
                            type="text"
                            placeholder="Ask citizen..."
                            className="flex-grow px-4 py-2 text-gray-700 bg-transparent focus:outline-none"
                        />
                        <Link to='/schemes' className="">
                            <LuSendHorizonal className='text-green-500' size={28} />
                        </Link>
                    </div>

                    {/* Quick Action Buttons */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button className="bg-green-100 text-gray-800 py-6 px-4 rounded-md hover:bg-green-200">
                            I am studying 12th. Show some schemes for me!
                        </button>
                        <button className="bg-green-100 text-gray-800 py-6 px-4 rounded-md hover:bg-green-200">
                            What are the government agriculture schemes?
                        </button>
                        <button className="bg-green-100 text-gray-800 py-6 px-4 rounded-md hover:bg-green-200">
                            Show some welfare schemes for women and child
                        </button>
                        <button className="bg-green-100 text-gray-800 py-6 px-4 rounded-md hover:bg-green-200">
                            Schemes for widow and women
                        </button>
                        <button className="bg-green-100 text-gray-800 py-6 px-4 rounded-md hover:bg-green-200">
                            Government schemes for single parent
                        </button>
                        <button className="bg-green-100 text-gray-800 py-6 px-4 rounded-md hover:bg-green-200">
                            Welfare schemes for under graduation students
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage