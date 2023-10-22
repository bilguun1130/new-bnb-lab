import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#1B1B1E]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-white text-[#00FF87]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 text-white'>
            <div className='sm:text-right text-4xl font-bold'>

            {/* Brand identity colors:
Spring green HEX - #00FF87
Baby blue HEX - #60EFFF
Black russian HEX - #1B1B1E */}
              <p>Hi. We're bnb lab, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas justo ante, tristique vel tortor vel, suscipit dictum lectus. Vestibulum odio felis, varius et diam sodales, consequat dapibus 
              nisi. Etiam rhoncus ipsum non nulla rhoncus venenatis. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;