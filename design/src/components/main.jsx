import React from 'react';
import Profile from './profile';

const Main = () => {
  return (
    <div className="min-h-screen bg-secondary p-6 pl-10 pr-10">
      <div className="grid grid-cols-10 gap-4">
        <div className="col-span-3">
          <Profile />
        </div>
        <div className="col-span-7 bg-white p-6 rounded-lg shadow-lg">
          <h1 className="text-xl font-semibold">Main Content</h1>
          <p className="text-gray-600 mt-4">
            This section occupies 70% of the space and can be used for additional content or features.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
