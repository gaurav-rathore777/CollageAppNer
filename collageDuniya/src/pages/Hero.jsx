import React from 'react';
import collageImage from '../assets/images/Collage2.jpg'

const Hero = () => {
  const videos = [
    {
      id: "dQw4w9WgXcQ", // YouTube video ID
      title: "XAT 2026 Registration: Step by Step Process",
      views: "22 Views",
      isNew: true,
    },
    {
      id: "vUa_gcxO2L8",
      title: "WEET UG 2025 AIR 3 - Krishang Joshi Shares His First-Attempt Success...",
      views: "349 Views | Jul 7, 2025",
      duration: "8 mins",
    },
    {
      id: "j38BmkjUWys",
      title: "WEET UG 2025 AIR 2 - Utkarsh Awadhiya Reveals His Success Formula",
      views: "230 Views | Jul 7, 2025",
      duration: "8 mins",
    },
    {
      id: "DI6h4k-e23Q",
      title: "UGC NET 2025 June 25 Exam Analysis & Students Reactions",
      views: "4.4K Views | Jun 26, 2025",
      duration: "16 mins",
    },
    {
      id: "NfeSoCLtxxc",
      title: "UPSC ESE/IES 2025 Prelims Exam Analysis (Shift 1)",
      views: "22 Views",
    },
  ];

  const universities = [
    {
      name: "University of Toronto",
      originalFee: 855,
      discountedFee: 708,
      discount: "20% OFF"
    },
    {
      name: "University College London",
      originalFee: 4125,
      discountedFee: 3300,
      discount: "20% OFF"
    },
    {
      name: "University of Edinburgh",
      originalFee: 755,
      discountedFee: 604,
      discount: "20% OFF"
    },
    {
      name: "King's College London",
      originalFee: 4565,
      discountedFee: 3652,
      discount: "20% OFF"
    },
    {
      name: "The University of British Columbia",
      originalFee: 1245,
      discountedFee: 996,
      discount: "20% OFF"
    }
  ];
  return (
    <>

    <div className="bg-gradient-to-r from-gray-800 to-gray-900 w-full h-[80vh] flex justify-center items-center text-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 ">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-6 ">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight  ">
            Welcome to <span className="text-amber-400">Collage Duniya </span>
          </h1>
          <p className="text-lg text-gray-300">
            Discover the elegance of beauty redefined. Explore our premium skincare and beauty collections curated just for you.
          </p>
          <div className='pt-5 '>
            <button className="bg-amber-400  text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-amber-300 transition duration-300">
              Explore Now
            </button>
            <button className="bg-amber-400 text-gray-900 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-amber-300 transition duration-300">
              Explore Now
            </button>
          </div>
          
          <div>
          <div
  className="relative  bg-center h-20"
 
>
  <div className="absolute inset-0  bg-opacity-50"></div>

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center pr-4">
   
    <div className="mt-4 w-full max-w-3xl flex rounded overflow-hidden shadow-md bg-white">
      <input
        type="text"
        placeholder="Search Colleges, Courses, Exams, Questions and Articles"
        className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
      />
      <button className="bg-orange-500 text-white px-6 py-2 font-semibold hover:bg-orange-600">
        Search
      </button>
    </div>
  </div>
</div>

          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={collageImage}
            alt="Beauty Hero"
            className="rounded-xl shadow-lg w-full h-auto object-cover max-h-[450px]"
          />
        </div>
      </div>

    </div>
    
    <section className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Apply to 500+ Universities
        </h2>
        <p className="text-lg text-gray-600">
          Get Exclusive Discounts on Application & VISA Fees
        </p>
      </div>

      {/* Universities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
        {universities.map((uni, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 min-h-[72px]">
                {uni.name}
              </h3>
              
              <div className="mb-5">
                <span className="text-gray-500 line-through text-sm">
                  ${uni.originalFee.toLocaleString()}
                </span>
                <span className="block text-green-600 font-bold text-lg">
                  ${uni.discountedFee.toLocaleString()} <span className="text-sm">({uni.discount})</span>
                </span>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300">
                Apply Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Explore More Button */}
      <div className="text-center pt-10 ">
        <button className="bg-red-600   hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center">
          Explore More Universities
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
   

    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
      Popular Study Destinations
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { name: "United States", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvsKB_noLMtUVl0wqBovYE_D15S0UOa9ouw&s" },
        { name: "Canada", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQshEI0_ueE-hYCygZWZaovX2W7l6TeRHBfqA&s" },
        { name: "United Kingdom ", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUWXYEDGez5ihc1njhp-XCfDcHecyu4MKiHA&s" },
        { name: "Australia", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUNsVrxJ-bKGs3rl1Rf2uvO2ykTbZZnpy1eQ&s" }
      ].map((country, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-xl h-56 shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={country.image}
            alt={country.name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/10 flex items-end p-4">
            <h3 className="text-white text-lg sm:text-xl font-semibold">
              {country.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

<div className="py-16 px-4 bg-gray-50">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Student Success Stories</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {[
        {name: "Priya K.", program: "MSc Computer Science, Canada", quote: "The guidance I received was invaluable in securing my admission."},
        {name: "Rahul M.", program: "MBA, USA", quote: "Studying abroad transformed both my career and personal growth."},
        {name: "Priya K.", program: "MSc Computer Science, Canada", quote: "The guidance I received was invaluable in securing my admission."},
        {name: "Rahul M.", program: "MBA, USA", quote: "Studying abroad transformed both my career and personal growth."},
        {name: "Priya K.", program: "MSc Computer Science, Canada", quote: "The guidance I received was invaluable in securing my admission."},
        {name: "Rahul M.", program: "MBA, USA", quote: "Studying abroad transformed both my career and personal growth."},
        {name: "Priya K.", program: "MSc Computer Science, Canada", quote: "The guidance I received was invaluable in securing my admission."},
        {name: "Rahul M.", program: "MBA, USA", quote: "Studying abroad transformed both my career and personal growth."}
      ].map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
          <p className="italic mb-4">"{testimonial.quote}"</p>
          <div className="font-semibold">{testimonial.name}</div>
          <div className="text-blue-600">{testimonial.program}</div>
        </div>
      ))}
    </div>
  </div>
</div>


<section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
      Learn More About Colleges & Exams with These Short Videos
    </h2>

    {/* Featured Video */}
    <div className="grid md:grid-cols-3 gap-8 mb-12">
      <div className="md:col-span-2">
        <div className="relative rounded-lg overflow-hidden shadow-md">
          <iframe
            className="w-full h-52 sm:h-64 md:h-[400px]"
            src={`https://www.youtube.com/embed/${videos[0].id}?rel=0`}
            title={videos[0].title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <div className="absolute top-2 right-2 bg-black/70 text-white px-3 py-1 rounded text-xs">
            Watch on YouTube
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">
          {videos[0].title}
        </h3>
        <p className="text-gray-600 text-sm mb-5">{videos[0].views}</p>
        <div className="flex flex-wrap gap-4">
          <button className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Watch Later
          </button>
          <button className="flex items-center gap-2 px-3 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share
          </button>
        </div>
      </div>
    </div>

    {/* Watch Next Videos */}
    <div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-6">Watch Next</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.slice(1).map((video, index) => (
          <div key={index} className="flex items-start gap-4 bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition">
            <div className="w-28 h-20 overflow-hidden rounded">
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-medium text-gray-800 mb-1 line-clamp-2">{video.title}</h4>
              <div className="text-xs text-gray-500 flex gap-2">
                <span>{video.views}</span>
                {video.duration && <><span>•</span><span>{video.duration}</span></>}
              </div>
              {video.isNew && (
                <span className="mt-2 inline-block bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full">
                  New
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


    <div className="bg-blue-900 text-white py-16 px-4">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-6">Ready to Begin Your Journey?</h2>
    <p className="text-xl mb-8">Schedule a free consultation with our education experts today</p>
    <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
        Book Consultation
      </button>
      <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300">
        Contact Us
      </button>
    </div>
  </div>
</div>
 
    
    <section className="bg-white py-16 px-4">
  <div className="   mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Our Simple 4-Step Process</h2>
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-blue-200 transform -translate-x-1/2 z-0"></div>

      {[
        { step: "1", title: "Consultation", desc: "Free initial assessment of your profile" },
        { step: "2", title: "University Selection", desc: "Shortlisting best-fit institutions" },
        { step: "3", title: "Application Support", desc: "Document preparation and submission" },
        { step: "4", title: "Visa Assistance", desc: "Guidance for visa interview and process" },
      ].map((item, index) => {
        const isRight = index % 2 !== 0; // steps 2, 4 on right

        return (
          <div
            key={index}
            className={`relative mb-12 md:flex md:items-center ${
              isRight ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Content */}
            <div
              className={`md:w-5/12 z-10 px-4 ${
                isRight ? "text-right" : "text-left"
              }`}
            >
              <h3
                className={`${
                  isRight ? "text-lg" : "text-xl"
                } font-semibold text-blue-700 mb-2`}
              >
                {item.title}
              </h3>
              <p className={`${isRight ? "text-sm" : "text-base"} text-gray-600`}>
                {item.desc}
              </p>
            </div>

            {/* Dot */}
            <div className="md:w-2/12 flex justify-center items-center z-10 relative my-4 md:my-0">
              <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center text-xl font-bold shadow-lg">
                {item.step}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

<div className="py-16 px-4 bg-gray-50">
  <div className=" mx-auto">
    <h2 className="text-3xl font-bold text-center mb-12">Why Study Abroad?</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {icon: "🌍", title: "Global Exposure", desc: "Experience diverse cultures and perspectives"},
        {icon: "🎓", title: "Quality Education", desc: "Access world-class institutions and programs"},
        {icon: "💼", title: "Career Advancement", desc: "Enhance your employability with international experience"}
      ].map((item, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
          <span className="text-4xl mb-4 block">{item.icon}</span>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</div>


    </>

    
  );
};

export default Hero;
