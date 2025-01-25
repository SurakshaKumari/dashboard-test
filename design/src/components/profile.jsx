import React from 'react';
import Banner from "./assets/banner.png";
import ProfileImg from "./assets/uploadProfile.png";

const Profile = () => {
  return (
    <div className=" bg-secondary flex flex-col items-center  ">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        <div className="relative">
          <img
            src={Banner}
            alt="Banner"
            className="w-full h-24 object-cover"
          />
          <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
            <img
              src={ProfileImg}
              alt="Profile"
              className="w-24 h-24 rounded-full border-1 border-white object-cover"
            />
          </div>
        </div>

        <div className="mt-12 text-center p-4">
          <h2 className="text-lg text-dark font-semibold">Albert Flores</h2>
          <p className="text-dark pl-4 pr-6 text-sm">
            Senior Product Designer | UI/UX Designer | Graphic Designer | Web...
          </p>
          <p className="text-light pl-4 pr-6 text-[12px]">Clinton, Maryland</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg w-full mt-4 max-w-md overflow-hidden">
        <div className="py-2 px-4">
          <div className="flex justify-between items-center py-2">
            <span className="text-dark text-[14px]">Profile Visitors</span>
            <span className="text-primary font-medium">140</span>
          </div>
          <hr />
          <div className="flex justify-between items-center py-2">
            <span className="text-dark text-[14px]">Resume Viewers</span>
            <span className="text-primary font-medium">20</span>
          </div>
          <hr />
          <div className="flex justify-between items-center py-2">
            <span className="text-dark text-[14px]">Jobs</span>
            <span className="text-primary font-medium">88</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg w-full mt-4 max-w-md overflow-hidden">
  <div className="flex justify-between items-center p-4">
    <div className="flex flex-col">
      <span className="text-dark text-sm font-bold text-[16px] ">My calendar</span>
      <span className="text-accent text-[14px]">Upcoming Interviews</span>
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
