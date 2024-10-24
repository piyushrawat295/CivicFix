import React, { useState } from 'react';
import { FaSignOutAlt, FaTasks, FaUserAlt } from 'react-icons/fa';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5'; // Icons for toggle button
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const UserDashboard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true); // State to toggle sidebar

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Fixed Navbar */}
      <div className="fixed w-full top-0 z-50">
        <Navbar />
      </div>

      {/* Sidebar with Toggle Button */}
      <aside
        className={`bg-white text-black fixed top-20 h-full transition-transform duration-300 ${
          isSidebarOpen ? 'w-64' : 'w-16'
        }`}
      >
        <nav className="mt-4 flex flex-col items-start">
          {/* Toggle Button */}
          <button
            className="mb-2 bg-gray-600 text-white p-1 rounded-full hover:bg-gray-700 md:hidden"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <IoChevronBackSharp /> : <IoChevronForwardSharp />}
          </button>

          {/* Sidebar Navigation */}
          <ul className="flex flex-col space-y-2">
            <li>
              <Link
                to="/userdashboard/submit-issues"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors"
              >
                <MdOutlineAddCircleOutline className="text-xl" />
                {isSidebarOpen && <span className="ml-2">Submit Issue</span>}
              </Link>
            </li>
            <li>
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors w-full"
              >
                <FaTasks className="text-xl" />
                {isSidebarOpen && <span className="ml-2">Active Issues</span>}
              </button>
              {isDropdownOpen && isSidebarOpen && (
                <ul className="ml-8 mt-2 space-y-2">
                  <li>
                    <Link
                      to="/userdashboard/pending-issues"
                      className="hover:text-gray-600"
                    >
                      Pending
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/userdashboard/progress-issues"
                      className="hover:text-gray-600"
                    >
                      In Progress
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/userdashboard/resolved-issues"
                      className="hover:text-gray-600"
                    >
                      Resolved
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link
                to="/userdashboard/userprofile"
                className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors"
              >
                <FaUserAlt className="text-xl" />
                {isSidebarOpen && <span className="ml-2">My Profile</span>}
              </Link>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 hover:bg-gray-200 rounded transition-colors">
                <FaSignOutAlt className="text-xl" />
                {isSidebarOpen && <span className="ml-2">Logout</span>}
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ml-64 mt-20 p-6 ${
          isSidebarOpen ? 'ml-64' : 'ml-16'
        }`}
      >
        <main>
          {/* Outlet will render the matching child route component here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
