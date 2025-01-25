import React, { useState } from 'react';
import {  FaBars } from 'react-icons/fa';
import Logo from "./assets/logo.png"; 
import Searchicon from "./assets/searchIcon.png"; 
import ProfileIcon from "./assets/profile.png"


const Header = () => {
  const [search, setSearch] = useState("");
  const [activeItem, setActiveItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = [
    { name: 'Find Jobs', path: '#findJobs' },
    { name: 'Top Companies', path: '#topCompanies' },
    { name: 'Job Tracker', path: '#jobTracker' },
    { name: 'My Calendar', path: '#myCalender' },
    { name: 'Documents', path: '#documents' },
    { name: 'Messages', path: '#messages' },
    { name: 'Notifications', path: '#notifications' },
  ];

  return (
    <header className="bg-white text-light shadow-md">
      <div className="max-w-screen-xl mx-auto p-4 pl-2 pr-2 flex justify-between items-center">
        <div className="">
          <img src={Logo} alt="Logo"  />
        </div>
        <nav className="hidden md:flex space-x-6">
        {menuItems.map((item) => (
            <a 
              key={item.name}
              href={item.path}
              onClick={() => setActiveItem(item.name)} 
              className={`transition-colors 
                ${activeItem === item.name ? 'font-semibold text-primary' : 'font-medium text-accent'} 
                hover:text-primary`}
            >
              {item.name}
            </a>
          ))}
        </nav>

       

        {/* Search Box */}
        <div className="relative hidden md:flex items-center ">
            <img 
                src={Searchicon}
                alt="Search Icon" 
                className="absolute left-5 text-gray-500" 
            />
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 px-4 py-2 rounded-md bg-box text-dark focus:outline-none" 
            />
            </div>


        {/* Resume Builder Button */}
        <div className="hidden md:block">
          <button className="bg-primary text-white px-3 py-2 rounded-md hover:bg-primary transition-colors">
            Resume Builder
          </button>
        </div>

        {/* Profile Image and User Icon (Right Side) */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <img 
              src={ProfileIcon}
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <button 
          className="text-black text-2xl md:hidden" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        >
          <FaBars />
        </button>
        </div>
      </div>

     
      {/* Mobile Menu (Conditional Rendering) */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white text-black py-4 space-y-4 px-6">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.path} 
              className="block hover:text-accent transition-colors"
            >
              {item.name}
            </a>
          ))}
          
        </nav>
      )}
      
    </header>
  );
};

export default Header;
