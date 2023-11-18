import React from 'react'
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedinSquare } from 'react-icons/bi'

const Footer = () => {
  return (
    <div>
      <div className='flex max-w-5xl w-full justify-between items-center mx-auto py-6 md:py-10 px-3 border-t border-gray-400 dark:border-gray-800'>
        <a className="flex text-2xl md:text-3xl font-bold">
          <nav className=' text-ColorVert'>Ed</nav>dy.
        </a>
        <div className="flex dark:text-gray-100 text-gray-950 transition-all duration-700 gap-x-4">
          <a 
            className=" hover:transform hover:scale-95"  
            href="https://web.facebook.com/profile.php?id=100094137014767" 
            target='_blank'
          >
            <BiLogoFacebookCircle className='text-2xl md:text-3xl' />
          </a>
          <a 
            className=" hover:transform hover:scale-95" 
            href="#lien"
          >
            <BiLogoLinkedinSquare className='text-2xl md:text-3xl' />
          </a>
          <a 
            className=" hover:transform hover:scale-95" 
            href="https://github.com/Eddy99leon"
            target='_blank'
          >
            <BiLogoGithub className='text-2xl md:text-3xl' />
          </a>
        </div>
      </div>
      <div className='text-center font-medium text-sm md:text-base text-gray-950 dark:text-gray-200 border-t border-gray-400 dark:border-gray-800 py-3 transition-all duration-700'>
        ©️ Coder avec le ❤️ par Eddy Leon.
      </div>
    </div>
  )
}

export default Footer