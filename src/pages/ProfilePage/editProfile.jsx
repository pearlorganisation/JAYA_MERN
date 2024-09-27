import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const EditProfileModal = ({ isOpen, onClose ,data }) => {
  
  
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg p-6 z-10 w-96">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <form>
          {/* Circular Profile Picture Upload */}
          <div className="mb-4 flex flex-col items-center">
            <label className="block text-sm font-medium mb-2">Profile Picture</label>
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {data.image ? (
                  <img src={image} alt="Profile" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-gray-500">No Image</span>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleImageUpload}
              />
            </div>
          
          </div>

          {/* Other Profile Fields */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">User Name</label>
            <input type="text" className="border border-gray-300 rounded-lg w-full p-2"  defaultValue={data.username} placeholder="Enter your first name" />
          </div>
       
       
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input type="tel" className="border border-gray-300 rounded-lg w-full p-2" defaultValue={data.phoneNumber} placeholder="Enter your phone number" />
          </div>
 

          {/* Action Buttons */}
          <div className="flex justify-end mt-6">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 rounded-lg px-4 py-2 mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white rounded-lg px-4 py-2"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileModal;
