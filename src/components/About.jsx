import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
            </div>
            <div>
              <p>With a solid foundation in computer science and a hands-on approach to data engineering, I bring a wealth of experience in crafting scalable and efficient solutions for diverse data challenges. Whether it's architecting data warehouses, implementing ETL processes, or harnessing the power of cloud platforms, I am driven by a relentless pursuit of delivering high-quality, actionable insights.

My proficiency extends across a spectrum of tools and technologies, including but not limited to Python, SQL, Apache Spark, and cloud services such as AWS and Azure. Throughout my career, I've had the privilege of contributing to impactful projects, where my role involved not only the technical intricacies of data engineering but also effective collaboration with cross-functional teams.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
