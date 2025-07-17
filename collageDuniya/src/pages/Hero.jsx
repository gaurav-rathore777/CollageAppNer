import React from 'react';
import collageImage from '../assets/images/Collage2.jpg'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 w-full h-[80vh] flex justify-center items-center text-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12">
        
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
  );
};

export default Hero;
