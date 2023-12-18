import React from 'react'
import { BiGlobe, BiLogoGithub } from 'react-icons/bi';
import { PopupContext } from '../context/PopupContext';
import { useContext } from 'react';



const CardProject = ({Project}) => {

  const { setIsPop } = useContext(PopupContext);
  const { Pic, Nom, Description, TechnoFront, TechnoBack, LiveLink, CodeLink } = Project

  return (
    <div className='max-w-[360px] flex flex-col justify-between border border-gray-400 dark:border-gray-700 px-3 pt-3 rounded'>
        <div>
          <div className='w-full h-[200px] overflow-hidden mb-3 rounded'>
            {Pic && <img className='object-cover min-h-[200px]' src={Pic} alt="projet" />}
          </div>
          <div className='px-2'>
            <h1 className='font-medium text-ColorVert text-lg mb-1'>
              {Nom}
            </h1>
            <p className=' min-h-[80px] text-sm text-gray-600 dark:text-gray-300 text-justify mb-4 transition-all duration-700 hyphens-auto'>
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
        </div>
        <div className='grid grid-cols-2 justify-items-center text-sm md:text-base mt-4 border-t border-gray-300 dark:border-gray-700 py-2 gap-2 font-medium text-gray-900 dark:text-gray-200'>
          <a href={LiveLink} target='_blank'>
            <div className='flex items-center gap-1 transition-all duration-700'>
              <BiGlobe className='text-2xl md:text-3xl' />
              Live
            </div>
          </a>
          {CodeLink?
            <a href={CodeLink} target='_blank'>
              <div className='flex items-center gap-1 transition-all duration-700'>
                <BiLogoGithub className='text-2xl md:text-3xl' />
                Code
              </div>
            </a>
            :
            <div 
              className='flex items-center gap-1 transition-all duration-700 text-gray-700 dark:text-gray-400 cursor-pointer'
              onClick={() => {setIsPop(true), document.body.style.overflow = "hidden"}}
            >
              <BiLogoGithub className='text-2xl md:text-3xl' />
              Code
            </div>
          }
        </div>
    </div>
  )
}

export default CardProject