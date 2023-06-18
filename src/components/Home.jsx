import React from 'react'
import img from '../assets/img.jpg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';

const Home = () => {
  return (
   
    <div name="home" className=' h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black text-white'>
     

     <div className='max-w screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full '>
            <h2 className='text-3xl sm:text-7xl font-bold text-white mx-14'>I'm a Full Stack Developer</h2>
            <p className='text-gray-500 py-4  mx-11'>I have 8 years of experiance building and desgining software.
                Currently, I love to work on web application using technology like
                React, Tailwind, Next Js and Node Js.
            </p>
            <div>
                <button className=' group text-white w-fit px-6 py-3 my-2 mx-6 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>Portfolio
                    <span className='group-hover:rotate-90 duration-300'> <MdOutlineKeyboardArrowRight size={25} className='ml-1'/></span>
              
                    </button>
            </div>
        </div>
        <div>
            <img src={img} alt='my profile' className='rounded-2xl  justify-between mx-auto w-2/4 md:w-700px'></img>
        </div>

     </div>
    </div>
  );
};

export default Home
