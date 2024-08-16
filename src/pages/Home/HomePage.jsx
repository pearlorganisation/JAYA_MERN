import React from 'react'
import { LuSendHorizonal } from "react-icons/lu";
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className='min-h-screen  w-full grid place-items-center py-10'>
            <div className="min-h-screen flex flex-col justify-center items-center  w-full">
                <div className="bg-white  rounded-lg  p-6">
                    {/* Chatbot Header */}
                    <div className="flex items-center justify-center mb-8">
                        <div className=" p-4">
                            {/* Chatbot Avatar */}
                            <img src="./Bot.svg" alt="" />
                        </div>
                        <div className="ml-4 relative text-left text-4xl font-semibold max-w-lg -translate-x-[5rem] -translate-y-[5rem] bg-[#668DCB] text-white p-6 rounded-md">
                            <p className=" ">Hi,</p>
                            <p className=" ">I am sahaya</p>
                            <p className=" ">I am here to help you with</p>
                            <p className=" ">Government Services & Schemes</p>
                            <img className='-bottom-3 -left-2 absolute' src="./Polygon.svg" alt="" />
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
            <div class="bg-white p-6 rounded-lg  w-full max-w-6xl">
                <h1 class="text-3xl md:text-5xl lg:text-7xl font-bold text-[#668DCB] mb-4">You know !</h1>
                <div class="border-2 border-green-200 p-6 rounded-lg">
                    <h2 class="text-4xl md:text-6xl font-bold text-green-600 mb-4">2440+ Schemes</h2>
                    <p class="text-gray-700 mb-6 w-[70%]">
                        Indian government schemes include social welfare (pensions and subsidies), healthcare (affordable medical services), education (support for marginalized students), and agriculture (financial assistance to farmers).
                    </p>
                    <div class="flex items-center justify-end -translate-x-[6rem]">
                        <button class="bg-[#668DCB] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-blue-600 transition">
                            Explore now !
                        </button>
                        <div class="flex items-center space-x-2">


                            <div class="relative">
                                <div class="absolute -top-16 -right-28 bg-[#668DCB] text-white p-3 rounded-lg w-[12rem] h-20 text-left clip-polygon">

                                    Know what you are eligible for !
                                    <img className='-bottom-3 -left-2 absolute' src="./Polygon.svg" alt="" />
                                </div>
                                <img src="./LeftHBot.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog section */}
            <div class="bg-white p-6 rounded-lg  w-full max-w-6xl">
                <h1 class="text-3xl sm:text-5xl md:text-7xl font-bold text-[#668DCB] mb-4">Blogs</h1>
                <p class="text-gray-700 mb-8">
                    Indian government schemes include social welfare (pensions and subsidies), healthcare (affordable medical services), education (support for marginalized students), and agriculture (financial assistance to farmers).
                </p>
                <div className='space-y-5'>
                    {
                        Array.from({ length: 2 }).map(item => {
                            return <div class="flex space-x-6 items-center">

                                <div class="bg-gray-200 w-1/3 h-48 rounded-lg"></div>


                                <div class="flex flex-col justify-between w-2/3">
                                    <div>
                                        <h2 class="text-xl font-semibold text-gray-800 mb-2">Financial Assistance under Odisha Working Journalist Welfare Scheme</h2>
                                        <p class="text-gray-600 mb-4">
                                            "Dr. Ambedkar Centrally Sponsored Scheme of Post-Matric Scholarships for the Economically Backward Class (EBC) Students" is a Scholarship.
                                        </p>
                                        <div class="flex space-x-2">
                                            <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">1000/month</span>
                                            <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">70% Reservation</span>
                                            <span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Scholarship</span>
                                        </div>
                                    </div>
                                    <p class="text-gray-500 text-sm mt-4">28 June, 2024</p>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className='flex justify-end'><button className='text-lg bg-[#668DCB] px-4 py-2 rounded text-white font-medium' type="button">See More...</button></div>
            </div>
            <div className='max-w-6xl mx-auto grid place-items-center'>
                <img src="./OurMission.png" alt="" />
                <p className='text-center text-xl'> My sahaya was built with the aim of breaking inefficient service barriers with Indian citizens and the Indian government. As a first step, we step into schemes and forms provided by the central and state governments by engaging awareness and gaining knowledge of them in a better way.</p>
            </div>
        </div>
    )
}

export default HomePage