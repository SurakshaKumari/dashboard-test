import React from 'react';
import SearchIcon from "./assets/searchwhite.png"
import Featured from './featured';
import Recommendation from './recommendation';

const Details = () => {
  return (
    <div className="min-h-screen bg-secondary ">
      <p className="font-semibold text-[22px] text-dark ">
        Find your Dream Job,{" "}
        <span className="text-[22px] font-semibold text-primary">Albert!</span>
      </p>
      <span className="text-[14px] font-medium text-light">
        Explore the latest job openings and apply for the best opportunities available today!
      </span>
      <div className="bg-white rounded-lg shadow-lg mt-6 p-4 flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
  <div className="flex-1 w-full md:w-auto border-r border-light flex items-center">
    <input
      type="text"
      placeholder="Job Title, Company, or Keywords"
      className="w-full bg-transparent border-b md:border-none focus:outline-none text-[14px] font-medium text-light"
    />
  </div>

  <div className="flex items-center w-full md:w-auto border-r border-light pr-9">
    <select className="w-full md:w-auto bg-transparent border-none focus:outline-none text-light text-[14px]">
      <option value="location">Share Location</option>
      <option value="remote">Remote</option>
      <option value="on-site">On-site</option>
      <option value="hybrid">Hybrid</option>
    </select>
  </div>

  <div className="flex items-center w-full md:w-auto pl-4">
    <select className="w-full md:w-auto bg-transparent border-none focus:outline-none text-light text-[14px]">
      <option value="full-time">Job Type</option>
      <option value="full-time">Full-Time</option>
      <option value="part-time">Part-Time</option>
      <option value="freelance">Freelance</option>
    </select>
  </div>

  <div className="w-full md:w-auto flex items-center">
    <button className="w-full md:w-auto bg-primary text-white py-2 px-6 rounded-lg hover:bg-primary-dark transition flex items-center justify-center space-x-2">
      <img
        src={SearchIcon}
        alt="Search Icon"
        className="w-5 h-5"
      />
      <span className="text-[14px] font-medium">Search</span>
    </button>
  </div>
</div>


<div className="mt-6 flex flex-col md:flex-row md:items-center md:space-x-4 space-y-4 md:space-y-0">
        <span className="text-accent text-[14px]">Similar:</span>
        <button className=" border border-accent  text-accent py-1 px-3  text-[12px] rounded-md hover:bg-gray-300 transition">
          Frontend
        </button>
        <button className="border border-accent  text-accent py-1 px-3 text-[12px] rounded-md hover:bg-gray-300 transition">
          Backend
        </button>
        <button className="border border-accent border-1  text-accent py-1 px-3 text-[12px] rounded-md hover:bg-gray-300 transition">
          Graphic Designer
        </button>
      </div>
      <Featured />
      <Recommendation />
    </div>
  );
};

export default Details;
