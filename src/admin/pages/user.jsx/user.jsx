import React, { useState } from 'react';
import Modal from '../documents/modal'; 
const User = () => {

  

  return (
    <div>
      <div className="flex flex-row p-5 bg-[#48DE80] text-[#ffffff] justify-between font-bold">
        <h1 className="self-center">Manage Your Schemes</h1>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="pl-4"
          height="54"
          width="54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M346.5 240H272v-74.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-74.5c-8.8 0-16 6-16 16s7.5 16 16 16H240v74.5c0 9.5 7 16 16 16s16-7.2 16-16V272h74.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"></path>
          <path d="M256 76c48.1 0 93.3 18.7 127.3 52.7S436 207.9 436 256s-18.7 93.3-52.7 127.3S304.1 436 256 436c-48.1 0-93.3-18.7-127.3-52.7S76 304.1 76 256s18.7-93.3 52.7-127.3S207.9 76 256 76m0-28C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48z" ></path>
        </svg>
      </div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
             Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
    Phone    
            </th>
       
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          <tr className="bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow duration-300">
            <td className="px-6 py-4 text-sm font-medium max-w-xs">
              <p className="truncate text-gray-900">
              jack.
              </p>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            
         jack@gmail.com
            
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
             222-445-123
            </td>
           
          </tr>
       
        </tbody>
      </table>

  
    </div>
  );
};

export default User;
