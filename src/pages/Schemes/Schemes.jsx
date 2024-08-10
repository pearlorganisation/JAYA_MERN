import React from 'react'

const Schemes = () => {
    return (
        <div>
            <div className="p-4 md:p-8">
                <button className="flex items-center text-green-600 font-semibold mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                    Back
                </button>

                <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                        <img
                            src="./bot_face.svg" // Replace with the path to your icon image
                            alt="Icon"
                            className="w-full h-full rounded-full"
                        />
                    </div>
                    <p className="text-lg font-medium">
                        Great! You have eligibility for <span className="font-bold">158 schemes</span> provided by state and central government.
                    </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                    <p className="text-gray-500 text-sm font-semibold mb-2">
                        Ministry Of Women Welfare Department
                    </p>
                    <h2 className="text-green-700 text-xl font-bold mb-2">
                        Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme
                    </h2>
                    <p className="text-gray-600 text-sm mb-4">
                        The Scheme “Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme” Was Launched By The Department Of Social Welfare & Women...
                    </p>

                    <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                            1000/month
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                            70% Reservation
                        </span>
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-3 py-1 rounded-full">
                            Scholarship
                        </span>
                    </div>

                    <div className="flex justify-between items-center">
                        <button className="text-green-600 font-semibold hover:underline">
                            Check Eligibility
                        </button>
                        <button className="text-green-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Schemes