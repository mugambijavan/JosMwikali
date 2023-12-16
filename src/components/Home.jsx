import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Jos Mwikali
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Data Engineer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a passionate and results-driven data engineer with a keen interest in transforming raw data into valuable insights. My journey in the world of data engineering has been shaped by a commitment to excellence, a curiosity for problem-solving, and a love for leveraging cutting-edge technologies. As a dedicated professional, I thrive on the challenges of designing robust data architectures and optimizing data pipelines to unlock the full potential of information
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
