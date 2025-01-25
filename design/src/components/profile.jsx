import React from 'react';
import Banner from "./assets/banner.png";
import ProfileImg from "./assets/uploadProfile.png";

const Profile = () => {
  return (
    <div className="min-h-screen bg-secondary flex flex-col items-center justify-center p-4">
      {/* Main Profile Card */}
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        {/* Banner and Profile Image */}
        <div className="relative">
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-32 object-cover"
          />
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <img
              src={ProfileImg}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>

        {/* Profile Info */}
        <div className="mt-14 text-center p-4">
          <h2 className="text-xl font-semibold">Albert Flores</h2>
          <p className="text-gray-600 pl-4 pr-6">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </p>
          <p className="text-gray-600 pl-4 pr-6">Clinton, Maryland</p>
        </div>
      </div>

      {/* Profile Stats Card */}
      <div className="bg-white rounded-lg shadow-lg w-full mt-4 max-w-md overflow-hidden">
        <div className="p-4">
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Profile Visitors</span>
            <span className="text-primary font-medium">140</span>
          </div>
          <hr />
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Resume Viewers</span>
            <span className="text-primary font-medium">20</span>
          </div>
          <hr />
          <div className="flex justify-between items-center py-2">
            <span className="text-gray-600">Jobs</span>
            <span className="text-primary font-medium">88</span>
          </div>
        </div>
      </div>

      {/* Additional Box with Text and Dropdown Icon */}
      <div className="bg-white rounded-lg shadow-lg w-full mt-4 max-w-md overflow-hidden">
        <div className="flex justify-between items-center p-4">
            <div className=''>
            <span className="text-gray-600">My calendar</span>
            <span className="text-gray-600">My calendar</span>
            </div>
         
          <span className="text-gray-500 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Profile;
