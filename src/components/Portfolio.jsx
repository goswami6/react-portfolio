import React from 'react'
import array from '../assets/array.png'
import node from '../assets/node.jpg'
import navbar from '../assets/navbar.jpg'
import react from '../assets/react.jpg'
import smooth from '../assets/smooth.jpg'
import weather from '../assets/weather.png'


function Portfolio() {

    const portfolios = [
        {
            id:1,
            src: array
        },
        {
            id:2,
            src: node
        },
        {
            id:3,
            src: navbar
        },
        {
            id:4,
            src: react
        },
        {
            id:5,
            src: smooth
        },
        {
            id:6,
            src: weather
        },
    ]
   

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full'>
     <div className='max-w-scrssn-lg p-4  mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8 '>
            <p className='text-4xl  font-bold inline border-b-4 border-gray-500'>Portfolio</p>
            <p className='py-6 '>Check out some of my work right here</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

            {portfolios.map(({id, src}) => (
                  
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} className='rounded-md duration-200 hover:scale-105'></img>
                        <div className='flex items-center justify-center'>
                            <button className='w1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button className='w1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                  
              


                ))
}


              </div>
               
              </div>

            
    </div>

  )
}

export default Portfolio
