import React from 'react'
import { BiGlobe, BiLogoGithub } from 'react-icons/bi';
import hero1 from "../assets/hero1.jpg"

const CardProject = ({Project}) => {

  const { Pic, Nom, Description, TechnoFront, TechnoBack, LiveLink, CodeLink } = Project

  return (
    <div className='max-w-[360px] border border-gray-400 dark:border-gray-700 px-3 pt-3 rounded'>
        <div className='w-full h-[200px] overflow-hidden mb-3 rounded'>
          <img className='object-cover' src={hero1} alt="hero" />
        </div>
        <div className='px-4'>
          <h1 className='font-medium text-ColorVert text-lg mb-1'>
            {Nom}
          </h1>
          <p className=' min-h-[80px] text-sm text-gray-600 dark:text-gray-300 text-justify mb-2 transition-all duration-700'>
            {Description}
          </p>
          <div>
            <span className='mr-1 font-medium mb-3'>
              🌈Frontend:
            </span>
            <span className=' text-gray-900 dark:text-gray-300 transition-all duration-700'>
              {TechnoFront}
            </span>
          </div>
          {TechnoBack?
            <div>
              <span className='mr-1 font-medium mb-3'>
                🛠️Backend:
              </span>
              <span className=' text-gray-900 dark:text-gray-300 transition-all duration-700'>
                {TechnoBack}
              </span>
            </div>
            :
            <div></div>
          }
          
        </div>
        <div className='grid grid-cols-2 justify-items-center mt-4 border-t border-gray-300 dark:border-gray-900 py-2 gap-2 font-medium text-gray-900 dark:text-gray-200'>
          <div className='flex items-center gap-1 transition-all duration-700'>
            <BiGlobe className='text-3xl' />
            Live
          </div>
          <div className='flex items-center gap-1 transition-all duration-700'>
            <BiLogoGithub className='text-3xl' />
            Code
          </div>
        </div>
    </div>
  )
}

export default CardProject