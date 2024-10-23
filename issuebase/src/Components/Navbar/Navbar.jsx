import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Navbar({ isLoggedIn, handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  // Function to scroll to specific sections
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Close sidebar when a link is clicked on mobile
  };

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-black-600">CityEngage</a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-10">
            <button
              onClick={() => handleScroll('about')}
              className="text-base font-medium text-gray-500 hover:text-black-600"
            >
              About
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className="text-base font-medium text-gray-500 hover:text-black-600"
            >
              Contact Us
            </button>
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="text-base font-medium text-gray-500 hover:text-black-600"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => handleScroll('login')}
                className="text-base font-medium text-gray-500 hover:text-black-600"
              >
                Login
              </button>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="bg-white p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-black-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500"
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Dialog
        as="div"
        className="md:hidden"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-40">
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          <div className="relative bg-white w-64 h-full shadow-xl z-50">
            <div className="px-4 py-5 flex justify-between items-center">
              <a href="/" className="text-2xl font-bold text-black-600">CityEngage</a>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-md inline-flex items-center justify-center text-gray-400 hover:text-black-600 hover:bg-gray-100 focus:outline-none"
              >
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <nav className="mt-5 px-2 space-y-4">
              <button
                onClick={() => handleScroll('about')}
                className="text-base font-medium text-gray-500 hover:text-black-600 block"
              >
                About
              </button>
              <button
                onClick={() => handleScroll('contact')}
                className="text-base font-medium text-gray-500 hover:text-black-600 block"
              >
                Contact Us
              </button>
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="text-base font-medium text-gray-500 hover:text-black-600 block"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => handleScroll('login')}
                  className="text-base font-medium text-gray-500 hover:text-black-600 block"
                >
                  Login
                </button>
              )}
            </nav>
          </div>
        </div>
      </Dialog>
    </header>
  );
}
