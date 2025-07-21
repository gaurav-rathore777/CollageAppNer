import React from 'react';
import '../assets/css/Footer.css';
import logo from '../assets/images/1forfotter.jpg';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-8 lg:py-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Logo and About */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img src={logo} alt="CollegeDuniya Logo" className="h-10 mr-3" />
              <span className="self-center text-2xl font-bold whitespace-nowrap text-gray-800 dark:text-white">
                CollegeDuniya
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              India's largest college search platform. Helping students find the right colleges since 2014.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.collegedunia"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="https://image-static.collegedunia.com/public/asset/img/play-store.png"
                  alt="Play Store"
                  className="h-10"
                />
              </a>
              <a
                href="https://itunes.apple.com/us/app/collegedunia/id1366265528?ls=1&mt=8"
                target="_blank"
                rel="noreferrer"
                className="transition-transform hover:scale-105"
              >
                <img
                  src="https://image-static.collegedunia.com/public/asset/img/app-store.png"
                  alt="App Store"
                  className="h-10"
                />
              </a>
            </div>
          </div>

          {/* Top Colleges */}
          <div>
            <h2 className="mb-6 text-lg font-bold text-gray-800 dark:text-white uppercase tracking-wider">
              Top Colleges
            </h2>
            <ul className="space-y-3">
              {['M.B.A', 'B.Tech/B.E', 'MCA', 'BCA', 'M.Tech', 'MA', 'BA'].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Top Universities */}
          <div>
            <h2 className="mb-6 text-lg font-bold text-gray-800 dark:text-white uppercase tracking-wider">
              Top Universities
            </h2>
            <ul className="space-y-3">
              {['Engineering', 'Management', 'Medical', 'Law', 'Commerce', 'Science', 'Arts'].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Study Abroad */}
          <div>
            <h2 className="mb-6 text-lg font-bold text-gray-800 dark:text-white uppercase tracking-wider">
              Study Abroad
            </h2>
            <ul className="space-y-3">
              {['Canada', 'USA', 'UK', 'Australia', 'Germany', 'Ireland', 'New Zealand'].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-200 dark:border-gray-700" />

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} CollegeDuniya. All rights reserved.
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {[
              { href: '/about', label: 'About' },
              { href: '/contact-us', label: 'Contact' },
              { href: '/advertise-with-us', label: 'Advertising' },
              { href: '/career', label: 'Careers' },
              { href: '/privacy-policy', label: 'Privacy' },
              { href: '/terms', label: 'Terms' },
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0  gap-4">
            {[
              { href: 'https://www.facebook.com/collegedunia', icon: 'facebook' },
              { href: 'https://www.twitter.com/college_dunia', icon: 'twitter' },
              { href: 'https://www.instagram.com/collegedunia/', icon: 'instagram' },
              { href: 'https://www.linkedin.com/company/3860037', icon: 'linkedin' },
              { href: 'https://www.youtube.com/channel/UClPHFJPqR5mNDy_-pxDCVnA/videos', icon: 'youtube' },
            ].map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span className="sr-only">{social.icon}</span>
                <i className={`fab fa-${social.icon} text-xl`}></i>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;