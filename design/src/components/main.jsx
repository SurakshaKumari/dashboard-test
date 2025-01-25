import React from 'react';
import Profile from './profile';
import Details from './details';

const Main = () => {
  return (
    <div className="min-h-screen bg-secondary px-9 py-6 ">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-1/4">
          <Profile />
        </div>
        <div className="w-full md:w-3/4">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default Main;
