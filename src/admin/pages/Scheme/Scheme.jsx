import React from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { Link } from 'react-router-dom'

const DummyData = [
    {
        title: "Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme Higher Education Assurance Scheme Higher Education Assurance Scheme",
        eligibility: ["1000/month", "70% Reservation", "Scholarship"],
        department: "Ministry of women welfare department"
    },
    {
        title: "Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme Higher Education Assurance Scheme Higher Education Assurance Scheme",
        eligibility: ["1000/month", "70% Reservation", "Scholarship"],
        department: "Ministry of women welfare department"
    },
    {
        title: "Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme Higher Education Assurance Scheme Higher Education Assurance Scheme",
        eligibility: ["1000/month", "70% Reservation", "Scholarship"],
        department: "Ministry of women welfare department"
    },

]


const Scheme = () => {
    return (
        <div className='container h-screen mx-auto   p-10 bg-slate-100'>

            <div className='text-center flex justify-between px-5 items-end py-4 text-white text-3xl bg-green-400 '><p>Manage Your Schemes</p> <Link to={"createScheme"}><IoIosAddCircleOutline size={54} className='pl-4' /></Link> </div>
            <div className="relative overflow-x-auto ">
                <table className="w-full text-sm text-left p-24 shadow-md   rtl:text-right text-gray-500 dark:text-gray-400 " style={{ boxShadow: " rgb(25 233 72 / 20%) 0px 7px 29px 0px" }}>
                    <thead className="text-xs text-gray-700 uppercase  bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Scheme
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Benefit
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Department
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Details
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            DummyData.map((el, index) => {
                                return (
                                    <tr key={index} className="bg-white dark:bg-gray-800 " style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px" }} >
                                        <th scope="row" className="px-6 w-1/3 py-4 text-wrap font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {el.title}
                                        </th>
                                        <td className="px-6 py-4">
                                            <div className='flex flex-col gap-1 items-start'>

                                                {el.eligibility.map((el, index) => {
                                                    return (
                                                        <span key={index} className='bg-green-400 text-center p-1 rounded-lg text-white'>{el}</span>

                                                    )
                                                })}
                                            </div>

                                        </td>
                                        <td className="px-6 py-4 text-wrap text-left">
                                            {el.department}
                                        </td>
                                        <td className="px-6">
                                            <div className='flex  gap-4 items-start  font-bold text-md  '>
                                                <Link to={"viewScheme"} className='text-blue-500 rounded-md bg-blue-600/30 px-3 py-2  hover:text-blue-600'>View</Link>
                                                <Link to={"editScheme"} className='text-green-500 rounded-md bg-green-600/30 px-3 py-2  hover:text-green-600'>Edit</Link>
                                                <Link to={"deleteScheme"} className='text-red-500 rounded-md bg-red-600/30 px-3 py-2  hover:text-red-600'>Delete</Link>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>

    )
}

export default Scheme