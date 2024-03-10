import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const Project = () => {
  return (
    <div className='max-w-5xl w-full mx-auto pt-16 pb-20 px-3' id='projets'>
      <div></div>
      <div className='relative text-center mt-10 font-bold dark:text-gray-300 text-gray-900 text-base md:text-lg lg:text-xl mb-14 transition-all duration-700'>
        Mes Derniers Projets
        <span className='absolute bg-ColorVert w-24 h-[6px] mx-auto top-7 inset-x-0'></span>
      </div>
      <ul className='text-center space-x-10 md:space-x-20 mb-10 font-medium'>
        <NavLink 
          to="/EddyPortfolio/"
          className='Nav-link hover:text-gray-950 hover:bg-ColorVert py-1 px-3 rounded-lg' 
        >
          Tous
        </NavLink>
        <NavLink 
          to="/EddyPortfolio/frontend" 
          className='Nav-link hover:text-gray-950 hover:bg-ColorVert py-1 px-3 rounded-lg'
        >
          Frontend
        </NavLink>
        <NavLink 
          to="/EddyPortfolio/fullstack"
          className='Nav-link hover:text-gray-950 hover:bg-ColorVert py-1 px-3 rounded-lg'
        >
          Fullstack
        </NavLink>
      </ul>
      <Outlet />
    </div>
  )
}

export default Project