import React from 'react';
import '../assets/css/Footer.css';
import logo from '../assets/images/1forfotter.jpg'


const Footer = () => {

  return (
    <footer className="bg-white dark:bg-gray-900 border-t mt-8">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        {/* Main Grid */}
        <div className="md:flex md:justify-between" style={{ padding: '1rem' }}>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-6">
            {/* Top Colleges */}
            <div className="mb-6">
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Top Colleges</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {['M.B.A', 'B.Tech/B.E', 'MCA', 'BCA', 'M.Tech', 'MA', 'BA'].map((item, i) => (
                  <li className="mb-4" key={i}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Top Universities */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Top Universities</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {['Engineering', 'Management', 'Medical', 'Law', 'Commerce', 'Science', 'Arts'].map((item, i) => (
                  <li className="mb-4" key={i}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>


            {/* Top Exams */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Top Exams</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {['CAT', 'GATE', 'JEE Main', 'NEET', 'XAT', 'CLAT', 'MAT'].map((item, i) => (
                  <li className="mb-4" key={i}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Study Abroad */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Study Abroad</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                {[
                  'Canada', 'USA', 'UK', 'UAE', 'Australia', 'Germany', 'Sweden', 'Ireland',
                  'New Zealand', 'Hong Kong', 'Singapore', 'Malaysia', 'Netherlands', 'Italy'
                ].map((item, i) => (
                  <li className="mb-4" key={i}><a href="#">{item}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

<hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
        {/* Social Media Links */}
          <div className="row align-items-end ">
      {/* Left Column: Footer Links */}
      <div className="col">
        <h4 className="font-weight-bold text-capitalize footer-title">Other Links</h4>
        <div className="d-flex align-items-center mx-n3 flex gap-3 flex-wrap text-color ">
          {[
            { href: '/about', label: 'about collegedunia' },
            { href: '/contact-us', label: 'contact us' },
            { href: '/advertise-with-us', label: 'advertising' },
            { href: '/career', label: 'career' },
            { href: '/website-usage-policy', label: 'terms & conditions' }
          ].map((link, i) => (
            <div key={i} className="d-flex  align-items-center px-3">
              <a className="footer-link text-capitalize" href={link.href}>
                <span style={{ whiteSpace: 'nowrap' }}>{link.label}</span>
              </a>
            </div>
          ))}
        </div>

      {/* Right Column: Social Icons */}
      
      
        <div className="row social-icons mx-n2 justify-content-end flex">
          {[
            { href: 'https://www.facebook.com/collegedunia', title: 'Facebook' },
            { href: 'https://www.instagram.com/collegedunia/', title: 'Instagram' },
            { href: 'https://www.twitter.com/college_dunia', title: 'Twitter' },
            { href: 'https://www.youtube.com/channel/UClPHFJPqR5mNDy_-pxDCVnA/videos', title: 'YouTube' },
            { href: 'https://www.linkedin.com/company/3860037', title: 'LinkedIn' },
            { href: 'https://collegedunia.com/feed.xml', title: 'RSS Feed' }
          ].map((social, i) => (
            <a
            key={i}
            href={social.href}
            className="px-2"
            target="_blank"
            rel="noreferrer"
            title={social.title}
            >
              <img
                src={`/icons/${social.title.toLowerCase().replace(' ', '-')}.svg`}
                alt={social.title}
                style={{ width: '20px', height: '20px' }}
                />
            </a>
          ))}
                </div>
        </div>
      
      
    </div>



        {/* Divider */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />

        {/* Bottom section with logo and app links */}
        <div className="sm:flex sm:items-center sm:justify-between px-2">
          {/* Logo/Brand */}
          <a href="#" className="flex items-center mb-4 sm:mb-0">
         <img src={logo} alt="CollegeDuniya Logo" className="h-8 mr-3" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">CollegeDuniya</span>
          </a>

          {/* App Download Links */}
     <div className="flex space-x-4">
  {/* Play Store */}
  <a
    href="https://play.google.com/store/apps/details?id=com.collegedunia"
    target="_blank"
    rel="noreferrer"
    title="Download CollegeDunia App"
    className="inline-block"
  >
    <img
      src="https://image-static.collegedunia.com/public/asset/img/play-store.png"
      alt="Download on Play Store"
      height="40"
      className="object-contain"
    />
  </a>

  {/* App Store */}
  <a
    href="https://itunes.apple.com/us/app/collegedunia/id1366265528?ls=1&mt=8"
    target="_blank"
    rel="noreferrer noopener"
    title="Download CollegeDunia App"
    className="inline-block"
  >
    <img
      src="https://image-static.collegedunia.com/public/asset/img/app-store.png"
      alt="Download on App Store"
      height="40"
      className="object-contain"
    />
  </a>
</div>

        </div>
      </div>
    </footer>
    // jadoihfahfoasdofihads
  );
};

export default Footer;

 