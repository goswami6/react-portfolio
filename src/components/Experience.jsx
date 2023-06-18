import React from 'react'
import HTML from '../assets/HTML.png';
import css from '../assets/css.png';
import js from '../assets/js.jpg';
import R from '../assets/R.png';
import next from '../assets/next.png';
import GraphQL from '../assets/GraphQL.webp';

import github from '../assets/github.png';

import tailwind from '../assets/tailwind.jpg';

const Experience = () => {

  const techs = [
    {
      id:1,
      src:HTML,
      title: 'HTML',
      style: 'shadow-orange-500'
    },
    {
      id:2,
      src:css,
      title: 'CSS',
      style: 'shadow-blue-500'
    },
    {
      id:3,
      src:js,
      title: 'JavaScript',
      style: 'shadow-yellow-500'
    },
    {
      id:4,
      src:R,
      title: 'React',
      style: 'shadow-blue-600'
    },
    {
      id:5,
      src:GraphQL,
      title: 'GraphQL',
      style: 'shadow-pink-400'
    },
    {
      id:6,
      src:next,
      title: 'Next JS',
      style: 'shadow-white'
    },
    {
      id:7,
      src:github,
      title: 'GitHub',
      style: 'shadow-gray-400'
    },
    {
      id:8,
      src:tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400'
    },
  ]


  return (
    <div name='experince' className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6 '>These are the technology I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
          {
            techs.map(({id, src,title,style}) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-500 rounded-lg ${style}`}>
              <img src={src} alt='' className='w-20 mx-auto'/>
              <p className='mt-4'>{title}</p>
            </div>

            ))
          }
        
        </div>
      </div>
    </div>
  )
}

export default Experience
