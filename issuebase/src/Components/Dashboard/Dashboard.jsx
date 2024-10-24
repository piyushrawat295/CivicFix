import React, { useState } from 'react';
import { FaSignOutAlt, FaTasks, FaUserAlt } from 'react-icons/fa';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const UserDashboard = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Fixed Navbar */}
      <div className="fixed w-full top-0 z-50">
        <Navbar />
      </div>

      {/* Fixed Sidebar */}
      <aside className="w-64 bg-white text-black fixed h-full top-20">
        <nav className="mt-10">
          <ul>
            <li className="mb-4">
              <Link
                to="/userdashboard/submit-issues"
                className="flex items-center p-3 hover:bg-gray-600"
              >
                <MdOutlineAddCircleOutline className="mr-2" />
                Submit Issue
              </Link>
            </li>
            <li className="mb-4">
              <button
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                className="flex items-center p-3 hover:bg-gray-600 w-full"
              >
                <FaTasks className="mr-2" />
                Active Issues
              </button>
              {isDropdownOpen && (
                <ul className="ml-8 mt-2">
                  <li className="mb-2">
                    <Link
                      to="/userdashboard/pending-issues"
                      className="hover:text-gray-300"
                    >
                      Pending
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/userdashboard/progress-issues"
                      className="hover:text-gray-300"
                    >
                      In Progress
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link
                      to="/userdashboard/resolved-issues"
                      className="hover:text-gray-300"
                    >
                      Resolved
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="mb-4">
              <Link
                to="/userdashboard/userprofile"
                className="flex items-center p-3 hover:bg-gray-600"
              >
                <FaUserAlt className="mr-2" />
                My Profile
              </Link>
            </li>
            <li className="mt-6">
              <a
                href="#"
                className="flex items-center p-3 "
              >
                <FaSignOutAlt className="mr-2" />
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 mt-20 p-6">
        <main>
          {/* Outlet will render the matching child route component here */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
