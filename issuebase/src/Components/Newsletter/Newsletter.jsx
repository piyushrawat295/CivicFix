import { CalendarDaysIcon, HandRaisedIcon } from '@heroicons/react/24/outline';
import React from 'react';

const Newsletter = () => {
  return (
    <>
      {/* Newsletter Section */}
      <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-semibold tracking-tight text-black">Subscribe to our newsletter</h2>
              <p className="mt-4 text-lg text-black-900">
                Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                dolore.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-blue-500 sm:text-sm sm:leading-6"
                />
                <button
                  type="submit"
                  className="flex-none rounded-md text-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-gray-800 p-2 ring-1 ring-gray-600">
                  <CalendarDaysIcon aria-hidden="true" className="h-6 w-6 text-white" />
                </div>
                <dt className="mt-4 font-semibold text-black">Weekly articles</dt>
                <dd className="mt-2 leading-7 text-gray-800">
                  Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-gray-800 p-2 ring-1 ring-gray-600">
                  <HandRaisedIcon aria-hidden="true" className="h-6 w-6 text-white" />
                </div>
                <dt className="mt-4 font-semibold text-black">No spam</dt>
                <dd className="mt-2 leading-7 text-gray-800">
                  Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      <footer className="bg-white py-12">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-black">
            {/* Company Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-black hover:text-blue-700">About</a>
                </li>
                <li>
                  <a href="#careers" className="text-black hover:text-blue-700">Careers</a>
                </li>
                <li>
                  <a href="#brand-center" className="text-black hover:text-blue-700">Brand Center</a>
                </li>
                <li>
                  <a href="#blog" className="text-black hover:text-blue-700">Blog</a>
                </li>
              </ul>
            </div>

            {/* Help Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Help</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#help-center" className="text-black hover:text-blue-700">Help Center</a>
                </li>
                <li>
                  <a href="#discord" className="text-black hover:text-blue-700">Discord Server</a>
                </li>
                <li>
                  <a href="#contact-us" className="text-black hover:text-blue-700">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Community Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-700">Twitter</a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-black hover:text-blue-700">Facebook</a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#privacy-policy" className="text-black hover:text-blue-700">Privacy Policy</a>
                </li>
                <li>
                  <a href="#licensing" className="text-black hover:text-blue-700">Licensing</a>
                </li>
                <li>
                  <a href="#terms-conditions" className="text-black hover:text-blue-700">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider Line */}
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-black">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Newsletter;

