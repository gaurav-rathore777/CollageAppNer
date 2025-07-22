import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const PagesTwo = () => {
  const newsBoxes = [
    {
      title: "CAT 2022 Slot 1 QA Question Paper (Available)",
      date: "Jul 22, 2025",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      category: "Exam Alerts",
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      title: "NEET UG Result Released",
      date: "Jul 20, 2025",
      desc: "Check your scores and qualifying status here.",
      category: "Results",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "JEE Advanced Registration Starts",
      date: "Jul 18, 2025",
      desc: "Register online before the deadline.",
      category: "Admissions",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Top Engineering Colleges List 2025",
      date: "Jul 15, 2025",
      desc: "Updated rankings and placement stats.",
      category: "Rankings",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Scholarships for MBA Students",
      date: "Jul 10, 2025",
      desc: "Apply now and reduce your tuition cost.",
      category: "Scholarships",
      color: "bg-amber-100 text-amber-800"
    },
    {
      title: "GATE 2026 Notification Released",
      date: "Jul 5, 2025",
      desc: "Check eligibility, syllabus, and dates.",
      category: "Notifications",
      color: "bg-rose-100 text-rose-800"
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="page-two bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">
            Welcome to <span className="text-blue-600">Page Two</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest education news, exam alerts, and important announcements.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Latest <span className="text-blue-600">News</span> & Stories
          </h2>
          
          <div className="flex justify-center gap-4 mb-10 flex-wrap">
            {['All News', 'Exam Alerts', 'Results', 'Admissions', 'Scholarships'].map((tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  tab === 'All News' 
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative">
            <Slider {...settings} className="px-2">
              {newsBoxes.map((item, index) => (
                <div key={index} className="px-3">
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                    <div className="p-6 flex-1">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${item.color} mb-3`}>
                        {item.category}
                      </span>
                      <h3 className="font-bold text-xl mb-3 text-gray-800 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {item.date}
                      </p>
                      <p className="text-gray-700 mb-5">{item.desc}</p>
                    </div>
                    <div className="px-6 pb-6">
                      <a 
                        href="#" 
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
                      >
                        Read more
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Stay Updated With Us</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest updates directly in your inbox.
          </p>
          <div className="flex justify-center">
            <div className="flex max-w-md w-full">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-medium transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PagesTwo;





// import React, { useState, useEffect } from 'react';

// const PageTwo = () => {
//   const [activeTab, setActiveTab] = useState('All News');
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [scrollY, setScrollY] = useState(0);

//   const newsBoxes = [
//     {
//       title: "CAT 2025 Slot 1 QA Question Paper Available",
//       date: "Jul 22, 2025",
//       desc: "Download the complete question paper with detailed solutions and expert analysis from top educators.",
//       category: "Exam Alerts",
//       categoryKey: "exam",
//       gradient: "from-cyan-400 via-blue-500 to-indigo-600",
//       shadowColor: "shadow-blue-500/30",
//       accentColor: "text-blue-600",
//       bgPattern: "bg-gradient-to-br from-blue-50 to-cyan-50",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//         </svg>
//       )
//     },
//     {
//       title: "NEET UG Result 2025 Released",
//       date: "Jul 20, 2025",
//       desc: "Check your scores, qualifying status and cutoff marks for medical colleges across India.",
//       category: "Results",
//       categoryKey: "result",
//       gradient: "from-emerald-400 via-green-500 to-teal-600",
//       shadowColor: "shadow-green-500/30",
//       accentColor: "text-green-600",
//       bgPattern: "bg-gradient-to-br from-green-50 to-emerald-50",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "JEE Advanced Registration Starts Today",
//       date: "Jul 18, 2025",
//       desc: "Register online before the deadline. Complete eligibility criteria and application process inside.",
//       category: "Admissions",
//       categoryKey: "admission",
//       gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
//       shadowColor: "shadow-purple-500/30",
//       accentColor: "text-purple-600",
//       bgPattern: "bg-gradient-to-br from-purple-50 to-violet-50",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "Top Engineering Colleges Rankings 2025",
//       date: "Jul 15, 2025",
//       desc: "Updated NIRF rankings with comprehensive placement statistics and admission criteria analysis.",
//       category: "Rankings",
//       categoryKey: "ranking",
//       gradient: "from-amber-400 via-orange-500 to-red-500",
//       shadowColor: "shadow-orange-500/30",
//       accentColor: "text-orange-600",
//       bgPattern: "bg-gradient-to-br from-orange-50 to-amber-50",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
//         </svg>
//       )
//     },
//     {
//       title: "Merit Scholarships for MBA Students",
//       date: "Jul 10, 2025",
//       desc: "Apply for prestigious scholarships worth up to ₹5 lakhs and reduce your tuition costs significantly.",
//       category: "Scholarships", 
//       categoryKey: "scholarship",
//       gradient: "from-rose-400 via-pink-500 to-fuchsia-600",
//       shadowColor: "shadow-pink-500/30",
//       accentColor: "text-pink-600",
//       bgPattern: "bg-gradient-to-br from-pink-50 to-rose-50",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//         </svg>
//       )
//     },
//     {
//       title: "GATE 2026 Official Notification Released",
//       date: "Jul 5, 2025",
//       desc: "Check complete eligibility, updated exam pattern, comprehensive syllabus and important dates.",
//       category: "Notifications",
//       categoryKey: "notification", 
//       gradient: "from-indigo-400 via-purple-500 to-violet-600",
//       shadowColor: "shadow-indigo-500/30",
//       accentColor: "text-indigo-600",
//       bgPattern: "bg-gradient-to-br from-indigo-50 to-purple-50",
//       icon: (
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//         </svg>
//       )
//     },
//   ];

//   const filteredNews = activeTab === 'All News' 
//     ? newsBoxes 
//     : newsBoxes.filter(item => item.category === activeTab);

//   const tabs = ['All News', 'Exam Alerts', 'Results', 'Admissions', 'Scholarships'];

//   // Custom carousel logic
//   const [slidesToShow, setSlidesToShow] = useState(3);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 640) {
//         setSlidesToShow(1);
//       } else if (window.innerWidth < 1024) {
//         setSlidesToShow(2);
//       } else {
//         setSlidesToShow(3);
//       }
//     };

//     const handleScroll = () => setScrollY(window.scrollY);

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     if (isAutoPlaying) {
//       const interval = setInterval(() => {
//         setCurrentSlide(prev => 
//           prev >= filteredNews.length - slidesToShow ? 0 : prev + 1
//         );
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [isAutoPlaying, filteredNews.length, slidesToShow]);

//   const nextSlide = () => {
//     setCurrentSlide(prev => 
//       prev >= filteredNews.length - slidesToShow ? 0 : prev + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentSlide(prev => 
//       prev <= 0 ? filteredNews.length - slidesToShow : prev - 1
//     );
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-4 -left-4 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
//         <div className="absolute -bottom-8 -right-4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
//       </div>

//       {/* Hero Section */}
//       <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 via-purple-700 to-pink-600 py-32 px-4 sm:px-6 lg:px-8">
//         {/* Parallax Background */}
//         <div 
//           className="absolute inset-0"
//           style={{ transform: `translateY(${scrollY * 0.5}px)` }}
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-600/95 via-purple-700/95 to-pink-600/95"></div>
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
//           {/* Floating geometric shapes */}
//           <div className="absolute top-20 left-10 w-20 h-20 border-2 border-white/20 rounded-xl rotate-45 animate-pulse"></div>
//           <div className="absolute top-40 right-20 w-16 h-16 border-2 border-white/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
//           <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/10 rounded-lg rotate-12 animate-pulse" style={{animationDelay: '2s'}}></div>
//           <div className="absolute bottom-20 right-40 w-8 h-8 bg-white/10 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
//         </div>
        
//         <div className="relative max-w-7xl mx-auto text-center">
//           <div className="mb-12">
//             <div className="inline-flex items-center justify-center w-32 h-32 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 mb-8 shadow-2xl">
//               <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
//               </svg>
//             </div>
//           </div>
          
//           <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
//             Education
//             <span className="block bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
//               Universe
//             </span>
//           </h1>
//           <p className="text-2xl md:text-3xl text-white/90 max-w-5xl mx-auto leading-relaxed mb-16 font-light">
//             Your ultimate destination for educational excellence, exam mastery, and career transformation
//           </p>
          
//           <div className="flex flex-col sm:flex-row justify-center gap-6">
//             <button className="group bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-110 shadow-2xl hover:shadow-white/25 relative overflow-hidden">
//               <span className="relative z-10">🚀 Explore Latest News</span>
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             </button>
//             <button className="group border-3 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-110 relative overflow-hidden">
//               <span className="relative z-10">📧 Get Updates</span>
//               <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 z-10">
//         {/* News Section */}
//         <div className="mb-24 bg-white/90 backdrop-blur-lg rounded-[3rem] shadow-2xl overflow-hidden border border-white/30">
//           <div className="p-8 md:p-20">
//             <div className="text-center mb-20">
//               <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 px-6 py-3 rounded-full mb-6">
//                 <span className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></span>
//                 <span className="text-gray-600 font-medium">Latest Updates</span>
//               </div>
//               <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-8 leading-tight">
//                 Breaking <span className="block">News & Stories</span>
//               </h2>
//               <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
//                 Discover groundbreaking educational insights, exam updates, and career opportunities that shape your future
//               </p>
//             </div>

//             {/* Enhanced Tab Navigation */}
//             <div className="flex justify-center gap-4 mb-20 flex-wrap">
//               {tabs.map((tab, index) => (
//                 <button
//                   key={tab}
//                   onClick={() => {
//                     setActiveTab(tab);
//                     setCurrentSlide(0);
//                   }}
//                   className={`group relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-500 animate-fade-in ${
//                     activeTab === tab 
//                       ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg shadow-blue-500/25 transform scale-110' 
//                       : 'bg-white/80 text-gray-700 hover:bg-white hover:shadow-lg hover:scale-105 border border-gray-200/50'
//                   }`}
//                   style={{
//                     animationDelay: `${index * 0.1}s`
//                   }}
//                 >
//                   <span className="relative z-10">{tab}</span>
//                   {activeTab === tab && (
//                     <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-lg opacity-50 scale-110"></div>
//                   )}
//                 </button>
//               ))}
//             </div>

//             {/* Custom Carousel */}
//             <div className="relative">
//               <div 
//                 className="overflow-hidden rounded-3xl"
//                 onMouseEnter={() => setIsAutoPlaying(false)}
//                 onMouseLeave={() => setIsAutoPlaying(true)}
//               >
//                 <div 
//                   className="flex transition-transform duration-700 ease-out"
//                   style={{ 
//                     transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
//                     width: `${(filteredNews.length / slidesToShow) * 100}%`
//                   }}
//                 >
//                   {filteredNews.map((item, index) => (
//                     <div 
//                       key={index} 
//                       className="px-6"
//                       style={{ width: `${100 / filteredNews.length}%` }}
//                     >
//                       <div 
//                         className={`group h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:scale-[1.03] hover:-translate-y-6 border border-gray-100 overflow-hidden relative ${item.shadowColor} hover:shadow-2xl`}
//                         onMouseEnter={() => setHoveredCard(index)}
//                         onMouseLeave={() => setHoveredCard(null)}
//                       >
//                         {/* Enhanced Category Header */}
//                         <div className={`p-8 bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
//                           <div className="absolute inset-0 bg-black/10"></div>
//                           <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
//                           <div className="absolute bottom-4 left-4 w-4 h-4 bg-white/20 rounded-full"></div>
                          
//                           <div className="relative flex items-center justify-between">
//                             <div className="flex items-center gap-4">
//                               <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30 shadow-lg">
//                                 {item.icon}
//                               </div>
//                               <div>
//                                 <span className="text-white font-black text-lg tracking-wide block">
//                                   {item.category}
//                                 </span>
//                                 <span className="text-white/80 text-sm">
//                                   Latest Update
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="p-8">
//                           <h3 className={`font-black text-2xl mb-6 text-gray-800 leading-tight transition-colors duration-300 ${hoveredCard === index ? item.accentColor : ''}`}>
//                             {item.title}
//                           </h3>
                          
//                           <div className="flex items-center gap-3 text-sm text-gray-500 mb-6">
//                             <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
//                               <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//                               </svg>
//                               <span className="font-semibold">{item.date}</span>
//                             </div>
//                           </div>

//                           <p className="text-gray-600 mb-8 leading-relaxed text-lg">
//                             {item.desc}
//                           </p>

//                           <button className={`group flex items-center font-bold ${item.accentColor} hover:scale-105 transition-all duration-300 ${item.bgPattern} px-6 py-4 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md w-full justify-center`}>
//                             <span>Read Full Story</span>
//                             <svg className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                             </svg>
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Navigation Arrows */}
//               {filteredNews.length > slidesToShow && (
//                 <>
//                   <button 
//                     onClick={prevSlide}
//                     className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-20 border border-gray-100"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
//                     </svg>
//                   </button>
                  
//                   <button 
//                     onClick={nextSlide}
//                     className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/95 hover:bg-white text-gray-800 p-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 z-20 border border-gray-100"
//                   >
//                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//                     </svg>
//                   </button>
//                 </>
//               )}

//               {/* Enhanced Dots Indicator */}
//               {filteredNews.length > slidesToShow && (
//                 <div className="flex justify-center gap-3 mt-12">
//                   {Array.from({ length: filteredNews.length - slidesToShow + 1 }).map((_, index) => (
//                     <button
//                       key={index}
//                       onClick={() => goToSlide(index)}
//                       className={`transition-all duration-500 rounded-full ${
//                         currentSlide === index 
//                           ? 'w-12 h-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg' 
//                           : 'w-4 h-4 bg-gray-300 hover:bg-gray-400'
//                       }`}
//                     />
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Enhanced Newsletter Section */}
//         <div className="mb-24 bg-gradient-to-br from-blue-600 via-purple-700 via-pink-600 to-orange-600 rounded-[3rem] shadow-2xl overflow-hidden relative">
//           <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Cpath d=\"M20 20c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20S20 31.046 20 20zm20 0c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10-10-4.477-10-10z\"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
          
//           {/* Floating elements */}
//           <div className="absolute top-10 right-10 w-20 h-20 border-2 border-white/20 rounded-full animate-pulse"></div>
//           <div className="absolute bottom-10 left-10 w-16 h-16 bg-white/10 rounded-xl rotate-45 animate-pulse" style={{animationDelay: '1s'}}></div>
          
//           <div className="relative p-12 md:p-20 text-center">
//             <div className="mb-12">
//               <div className="inline-flex items-center justify-center w-24 h-24 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20 mb-8 shadow-2xl">
//                 <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//                 </svg>
//               </div>
//             </div>
            
//             <h3 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
//               Never Miss a <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Beat</span>
//             </h3>
//             <p className="text-white/90 mb-12 max-w-3xl mx-auto text-xl leading-relaxed">
//               Join thousands of students who get the latest exam notifications, results, and admission updates delivered directly to their inbox
//             </p>
            
//             <div className="flex justify-center">
//               <div className="flex flex-col sm:flex-row max-w-xl w-full gap-4">
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email address" 
//                   className="flex-1 bg-white/20 border-2 border-white/30 text-white placeholder:text-white/70 rounded-2xl px-6 py-4 text-lg focus:bg-white/30 focus:outline-none focus:border-white/50 transition-all duration-300 backdrop-blur-sm"
//                 />
//                 <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl">
//                   🚀 Subscribe Now
//                 </button>
//               </div>
//             </div>
            
//             <p className="text-white/70 text-sm mt-6">
//               ✨ Join 50,000+ students • 📧 Weekly updates • 🎯 Personalized content
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageTwo;