import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import tailwind from "../assets/tailwind.png"

const Techno = () => {

  const {theme} = useContext(ThemeContext);

  return (
    <div className='max-w-5xl w-full mx-auto pt-12 pb-20 px-3' id='skills'>
      <div></div>
      <div className='relative text-center font-bold dark:text-gray-300 text-gray-900 text-base md:text-lg lg:text-xl mt-16 mb-24 transition-all duration-700'>
        Mes Compétences
        <span className='absolute bg-ColorVert w-24 h-[6px] mx-auto top-7 inset-x-0'></span>
      </div>
      <div className='grid grid-cols-4 justify-items-center gap-14 items-center'>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" 
            className='w-[70px]' 
          />
          <div className='text-center font-medium text-xs sm:text-sm text-orange-600 mt-1'>
            Figma
          </div>
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" 
            className='w-[70px]' 
          />
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" 
            className='w-[70px]' 
          />
        </div>
        <div>
          <img 
            src={tailwind}
            className='w-[70px]' 
          />
          <div className='text-center font-medium text-xs sm:text-sm text-teal-400'>
            Tailwind
          </div>
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg" 
            className='w-[70px]' 
          />
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" 
            className='w-[70px]' 
          />
        </div>
        <div className='transition-all duration-700'>
            { theme === "dark" ? 
              <i className="devicon-nextjs-original text-gray-300 text-4xl sm:text-7xl"></i>
              :
              <i className="devicon-nextjs-original text-gray-950 text-4xl sm:text-7xl"></i>
            }
            <div className='text-center font-medium text-xs sm:text-sm dark:text-gray-300 text-gray-900 sm:mt-1'>
              Next.JS
            </div>
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg" 
            className='w-[70px]' 
          />
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" 
            className='w-[70px]' 
          />
          <div className='text-center font-medium text-xs sm:text-sm text-green-500 mt-1'>
            NodeJS
          </div>
        </div>
        <div className='transition-all duration-700'>
            { theme === "dark" ? 
              <i className="devicon-express-original text-gray-300 text-5xl sm:text-8xl"></i>
              :
              <i className="devicon-express-original text-gray-950 text-5xl sm:text-8xl"></i>
            }
            <div className='text-center font-medium text-xs sm:text-sm dark:text-gray-300 text-gray-900 -mt-2 sm:-mt-4'>
              Express.JS
            </div>
        </div>
        <div>
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg" 
            className='w-[50px] sm:w-[70px]' 
          />
        </div>
        <div className='transition-all duration-700'>
            { theme === "dark" ? 
              <i className="devicon-github-original-wordmark text-gray-300 text-5xl sm:text-7xl"></i>
              :
              <i className="devicon-github-original-wordmark text-gray-950 text-5xl sm:text-7xl"></i>
            }
        </div>
      </div>
    </div>
  )
}

export default Techno