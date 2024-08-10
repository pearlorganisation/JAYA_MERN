import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegBookmark } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import FeedbackForm from '../../components/FeedbackForm/FeedbackForm';

const SchemeDetail = () => {
    return (
        <div>
            <div className="p-4 md:p-8">
                <div className="bg-white rounded-lg space-y-3 shadow-md p-6 border border-gray-200">
                    <div className="flex justify-between items-start mb-4">
                        <p className="text-gray-500 text-sm font-semibold">
                            Ministry Of Women Welfare Department
                        </p>
                        <div className="flex space-x-4">
                            <button className="text-green-600 group">
                                <FaRegBookmark size={24} />
                            </button>
                            <button className="text-green-600">
                                <GoShareAndroid size={24} />
                            </button>
                        </div>
                    </div>
                    <h2 className="text-green-700 text-2xl font-bold mb-4">
                        Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme
                    </h2>

                    <div className='flex justify-between items-center '>
                        <div className="flex flex-wrap items-center gap-2 ">
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-6 py-2 rounded">
                                1000/month
                            </span>
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-6 py-2 rounded">
                                70% Reservation
                            </span>
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-6 py-2 rounded">
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



                    <div className="text-gray-700 space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-green-500">About</h3>
                            <p className="text-sm">
                                Dr. Ammaiyar Centrally Sponsored Scheme of Post-Metric Scholarships for the Economically Backward Class (EBC) Students is a scheme that aims to provide financial assistance to students from economically weaker sections. The scheme is designed to help students cover their expenses during higher education.
                            </p>
                        </div>

                        <div className='space-y-3'>
                            <h3 className="text-lg font-semibold  text-green-500">Benefits</h3>
                            <div>
                                <h3 className='text-base font-semibold  text-blue-500'> Group 01 </h3>
                                <ol className='text-sm list-decimal list-inside font-medium'>
                                    <li>Full Post Graduate level courses including M.Phil, PhD, and Post Doctoral research in Medicine (Allopathic, Indian, and other systems of medicine), Engineering, Technology, Planning, Architecture, Design, Fashion Technology, Agriculture, Veterinary and Allied Sciences, Management, Business Studies, and Computer Science/Applications.</li>
                                    <li>Post Graduate Diploma courses in various branches of management & medicine</li>
                                    <li>C.A./ I.C.W.A./ C.S./ I.C.F.A. etc</li>
                                    <li>M. Phil., Ph.D. and Post-Doctoral Programmes (D.Litt., D.Sc. etc.)</li>
                                    <li>L.L.M</li>
                                </ol>
                            </div>

                            <div>
                                <h3 className='text-base font-semibold  text-blue-500'> Group 02 </h3>
                                <ol className='text-sm list-decimal list-inside font-medium'>
                                    <li>All other courses leading to a graduate degree not covered under Group A & B e.g. BA/B.Sc./B.Com etc.</li>
                                    <li>Rate of Maintenance Allowance (₹ per month): Hostellers: 400; Day Scholars: 210.</li>
                                </ol>
                            </div>

                            <div>
                                <h3 className='text-base font-semibold text-blue-500'> Group 03 </h3>
                                <ol className='text-sm list-decimal list-inside font-medium'>
                                    <li>All post-matriculation level non-degree courses for which entrance qualification is High School (Class X), e.g. senior secondary certificate (class XI and XII); both general and vocational stream, ITI courses, 3-year diploma courses in Polytechnics, etc.</li>
                                    <li>Rate of Maintenance Allowance (₹ per month): Hostellers: 260; Day Scholars: 160.</li>
                                </ol>
                            </div>

                        </div>

                        <div className='space-y-3'>
                            <h3 className="text-lg font-semibold text-green-500">Eligibility</h3>
                            <div>
                                <h3 className='text-base font-semibold text-blue-500'> Group 01 </h3>
                                <ol className='text-sm list-decimal list-inside font-medium'>
                                    <li>The scholarships will be open to Indian nationals belonging to the General Category (Other than Schedule Caste, Schedule Tribe and Other Backward Classes).</li>

                                </ol>
                            </div>

                            <div>
                                <h3 className='text-base font-semibold text-blue-500'> Group 02 </h3>
                                <ol className='text-sm list-decimal list-inside font-medium'>
                                    <li>These scholarships will be given for the study of all recognized post-matriculation or post-secondary courses pursued in Government institutions.</li>

                                </ol>
                            </div>

                            <div>
                                <h3 className='text-base font-semibold  text-blue-500'> Group 03 </h3>
                                <ol className='text-sm list-decimal list-inside font-medium'>
                                    <li>Students pursuing Post-graduate courses in medicine will be eligible if they are not allowed to practice during the period of their course.</li>
                                </ol>
                            </div>

                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-green-500">Application Process (Online)</h3>
                            <ol className="list-decimal list-inside text-sm">
                                <li>The scholarships will be open to Indian nationals belonging to the General Category (Other than Scheduled Caste, Scheduled Tribe, and Other Backward Classes).</li>
                                <li>Scholarships will be given for the study of all recognized post-matriculation or post-secondary courses pursued in recognized institutions.</li>
                                <li>Students pursuing post-graduate courses in medicine will be eligible if they are not allowed to practice during the period of their course.</li>
                            </ol>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold mb-2 text-green-500">Documents Required</h3>
                            <ul className="list-disc list-inside text-sm">
                                <li>The scholarships will be open to Indian nationals belonging to the General Category (Other than Scheduled Caste, Scheduled Tribe, and Other Backward Classes).</li>
                                <li>Scholarships will be given for the study of all recognized post-matriculation or post-secondary courses pursued in recognized institutions.</li>
                                <li>Students pursuing post-graduate courses in medicine will be eligible if they are not allowed to practice during the period of their course.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex justify-between items-center mt-6">
                        <div className="flex items-center space-x-2">
                            <span className="text-green-700 font-semibold">Was it helpful?</span>
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-green-600"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8V7a1 1 0 112 0v3a1 1 0 01-2 0zm0 4a1 1 0 012 0v1a1 1 0 01-2 0v-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1-8V7a1 1 0 112 0v3a1 1 0 01-2 0zm0 4a1 1 0 012 0v1a1 1 0 01-2 0v-1z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <FeedbackForm />
                        </div>

                        <button className="bg-green-600 text-white font-semibold px-4 py-2 rounded-lg">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SchemeDetail