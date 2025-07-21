import React from 'react';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/solid';

const PagesOne = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 w-full max-w-3xl mx-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Subscribe to our newsletter
          </h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Get College Notifications, Exam Notifications and News Updates
          </p>

          <form className="flex flex-wrap gap-4">
            {/* Email Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <EnvelopeIcon className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="Enter your email id"
                className="w-52 pl-10 p-2 text-sm border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Mobile Number Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <PhoneIcon className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="Enter your mobile number"
                className="w-52 pl-10 p-2 text-sm border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone Input */}
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
                <PhoneIcon className="w-5 h-5" />
              </span>
              <input
                type="text"
                placeholder="Phone"
                className="w-52 pl-10 p-2 text-sm border border-gray-300 rounded-md dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-orange-900 text-white p-3 rounded-lg hover:bg-orange-800 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PagesOne;