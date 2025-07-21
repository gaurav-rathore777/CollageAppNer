import React, { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import '../assets/css/PageOne.css';

const PageOne = () => {
  // State for Newsletter Section
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [course, setCourse] = useState('');
  const [error, setError] = useState('');

  // State for Search Section
  const [searchText, setSearchText] = useState('');

  const countries = [
    {
      name: "Canada",
      collegeCount: 223,
      avgCost: "25.39 K",
      currency: "USD/Year",
      guides: [
        "Why Study in Canada",
        "Top Universities to study",
        "SOP for Canada",
        "Work Study in Canada"
      ]
    },
    {
      name: "Australia",
      collegeCount: 83,
      avgCost: "38.90 K",
      currency: "USD/Year",
      guides: [
        "Why Study in Australia?",
        "Australian Student VISA",
        "SOP for Australia",
        "Top Universities in Australia"
      ]
    },
    {
      name: "Germany",
      collegeCount: 135,
      avgCost: "5.33",
      currency: "Avg.",
      guides: [
        "Why Study in Germany?",
        "Top Universities in Germany",
        "SOP for Germany",
        "Scholarships in Germany"
      ]
    }
  ];

  const courses = [
    'BE/B.Tech',
    'BA',
    'B.Sc',
    'MBA/PGDM',
    'M.Sc',
    'ME/M.Tech',
    'MA',
    'Polytechnic',
    'BE/B.Tech Lateral',
    'M.Phil/Ph.D in Science',
    'B.Com',
    'MD',
    'BBA/BMS',
    'M.Phil/Ph.D in Arts',
    'M.Phil/Ph.D in Engineering'
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email || !mobile || !course) {
      setError('Please fill all fields');
    } else {
      setError('');
      alert(`Newsletter Submitted!\nEmail: ${email}\nPhone: ${mobile}\nCourse: ${course}`);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchText}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Study Abroad Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Study Abroad</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Study in {country.name}</h3>
                    <a href="#" className="text-blue-600 hover:underline text-sm">
                      Check {country.collegeCount} Colleges &gt;
                    </a>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-100 p-3 rounded">
                      <p className="text-gray-500 text-sm">No. Of Colleges</p>
                      <p className="text-xl font-bold">{country.collegeCount}</p>
                    </div>
                    <div className="bg-gray-100 p-3 rounded">
                      <p className="text-gray-500 text-sm">Avg. Study Cost</p>
                      <p className="text-xl font-bold">{country.avgCost} <span className="text-sm">{country.currency}</span></p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Guides</h4>
                    <ul className="space-y-2">
                      {country.guides.map((guide, i) => (
                        <li key={i}>
                          <a href="#" className="text-blue-600 hover:underline text-sm">
                            {guide}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Courses Section */}
      <section className="top-courses py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Top Courses</h2>
          <div className="course-wrapper grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {courses.map((course, index) => (
              <div className="course p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer" key={index}>
                {course} <span className="text-blue-500">→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              Subscribe To Our Newsletter
            </h2>
            <p className="text-gray-600 mt-2">
              Get College Notifications, Exam Notifications and News Updates
            </p>
          </div>

          <form
            onSubmit={handleNewsletterSubmit}
            className="flex flex-col lg:flex-row items-center justify-center gap-4 flex-wrap"
          >
            {/* Email Input */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 w-full lg:w-auto">
              <EnvelopeIcon className="h-5 w-5 text-gray-400 mr-3" />
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Mobile Input */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 w-full lg:w-auto">
              <PhoneIcon className="h-5 w-5 text-gray-400 mr-3" />
              <input
                type="tel"
                placeholder="Your mobile number"
                className="flex-1 outline-none"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>

            {/* Course Select */}
            <div className="flex items-center border border-gray-300 rounded-lg px-4 py-3 w-full lg:w-auto">
              <AcademicCapIcon className="h-5 w-5 text-gray-400 mr-3" />
              <select
                className="flex-1 outline-none bg-transparent"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                required
              >
                <option value="">Select course</option>
                <option value="btech">B.Tech</option>
                <option value="mba">MBA</option>
                <option value="medical">Medical</option>
              </select>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all w-full lg:w-auto"
            >
              Subscribe Now
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 text-center text-sm mt-3">{error}</p>
          )}
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Search Our Database</h2>
            <p className="text-gray-600 mt-2">
              Find colleges, courses, and admission information
            </p>
          </div>

          <form onSubmit={handleSearchSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
            <div className="flex-1 flex items-center border border-gray-300 rounded-lg px-4 py-3 bg-white">
              <input
                type="text"
                placeholder="Search for colleges, courses..."
                className="flex-1 outline-none"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg shadow-md transition-all"
            >
              Search
            </button>
          </form>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Popular Searches</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['Engineering Colleges', 'MBA Admissions', 'Medical Courses', 'Scholarships'].map((item) => (
                <button
                  key={item}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium transition-colors"
                  onClick={() => setSearchText(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageOne;