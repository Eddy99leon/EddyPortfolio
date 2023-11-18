import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import { IoMdArrowForward } from "react-icons/io"
import { BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedinSquare } from 'react-icons/bi';

const Sidebar = () => {
  
  const {isOpen, handleClose} = useContext(SidebarContext)

  return (
    <div 
      className={`
        ${isOpen ? "opacity-100" : "opacity-0"}
         fixed z-40 top-0 w-full h-full bg-black/50 transition-all pointer-events-none
      `}
    >

      <div 
        className={`
        ${isOpen ? "right-0" : "-right-full"}
         fixed top-0 h-full w-full sm:w-[50vw] lg:w-[30vw] px-4 bg-white dark:bg-gray-950 transition-all duration-400 pointer-events-auto
      `}
      >
        <div className='py-5'>
          <IoMdArrowForward onClick={handleClose} className="text-2xl cursor-pointer" />
        </div>

        <div className="flex text-4xl font-bold text-center justify-center mb-12 mt-6">
            <nav className=' text-ColorVert'>Ed</nav>dy.
        </div>

        <ul className="mx-auto text-center space-y-4 font-medium text-lg">
          <li onClick={handleClose}>
            <a className="transition-all hover:text-ColorVert" href="#skills">
              Skills
            </a>
          </li>
          <li onClick={handleClose}>
            <a className="transition-all hover:text-ColorVert" href="#projets">
              Projects
            </a>
          </li>
        </ul>

        <div className="flex items-center justify-center gap-4 mt-12 dark:text-gray-100 text-gray-900 transition-all duration-700">
          <a 
            className=" hover:transform hover:scale-95"  
            href="https://web.facebook.com/profile.php?id=100094137014767" 
            target='_blank'
          >
            <BiLogoFacebookCircle className='text-3xl' />
          </a>
          <a 
            className=" hover:transform hover:scale-95" 
            href="#lien"
            target='_blank'
          >
            <BiLogoLinkedinSquare className='text-3xl' />
          </a>
          <a 
            className=" hover:transform hover:scale-95" 
            href="https://github.com/Eddy99leon"
            target='_blank'
          >
            <BiLogoGithub className='text-3xl' />
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar