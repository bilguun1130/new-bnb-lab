import React from 'react';
import {useEffect, useRef} from 'react';
import Typed from 'typed.js';

function Hero() {
  const el = useRef();
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['zail', 'hay', 'psda'],
      startDelay: 300,
      typeSpeed: 150, 
      backDelay: 150,
      smartBackspace: true,
      showCursor: false,
      loop: true,

    })
  });


  return (
    
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#00FF87] font-bold p-2'>BRING YOUR CAREER TO THE NEXT LEVEL</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>PERSONAL BRANDING FOR YOU</h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-4xl sm:text-4xl text-xl font-bold py-4'>Let's take care of your</p>
                <span ref={el}></span>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500' >Boost your career and enhance your social media presence with the expertise of our talented designers and developers</p>
            <button className='bg-[#00FF87] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black hover:bg-[#00ff6e] hover:text-white'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
