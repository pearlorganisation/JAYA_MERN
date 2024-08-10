import React from 'react'
import { Link } from 'react-router-dom'

const ProfileSavedCard = () => {
  return (
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

                                <div className='flex  justify-between items-center'>
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
                                    <div className="flex justify-between items-center w-fit">
                                        <Link to='/schemeDetail'>
                                            <button className="text-green-600 hover:bg-green-500 hover:text-white font-semibold border border-green-500 px-6 py-2 rounded">
                                                Check Eligibility
                                            </button>
                                        </Link>

                                    </div>
                                </div>

                            </div>
  )
}

export default ProfileSavedCard