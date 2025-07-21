import React from 'react';
import collageImage from '../assets/images/Collage2.jpg'

const Hero = () => {
  const universities = [
    {
      name: "University of Toronto",
      originalFee: 885,
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
    
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
      <div className="text-center">
        <button className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center">
          Explore More Universities
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </section>
    <section className='bg-green-400 h-[50vh] flex justify-center items-center'>
      <div>
        <h1>ahsdfiuha</h1>
      </div>
    </section>
    </>

    
  );
};

export default Hero;
