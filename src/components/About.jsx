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
              <p>With a solid foundation in data manipulation and analysis, I specialize in harnessing the power of Microsoft SQL for efficient database querying, data extraction, and transformation. Excel serves as my canvas for intricate data modeling, analysis, and visualization, enabling me to uncover patterns and trends that drive informed decision-making.
                Python, being a versatile programming language, is a key tool in my arsenal, allowing me to extend my analytical capabilities through scripting, statistical analysis, and data manipulation. Whether it's cleaning messy datasets or building predictive models, I leverage Python to navigate the complexities of data.
                Tableau is another integral part of my toolkit, empowering me to create visually compelling and interactive dashboards. This proficiency in data visualization ensures that the insights derived from data analysis are not only accurate but also easily understandable, facilitating effective communication with stakeholders.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
