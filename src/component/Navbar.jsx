import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext';
import { ThemeContext } from '../context/ThemeContext';
import { BiMenu, BiMoon, BiSun } from 'react-icons/bi';


const Navbar = () => {

    const {isOpen, setIsOpen} = useContext(SidebarContext);
    const {theme, handleSwitchTheme} = useContext(ThemeContext);

    return ( 
        <div className='w-full fixed bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-800 z-10 transition-all duration-700'>
            <nav className="flex max-w-5xl w-full justify-between items-center mx-auto py-3 md:py-5 px-3"> 
                <a className="flex text-2xl md:text-3xl font-bold">
                    <nav className=' text-ColorVert'>Ed</nav>dy.
                </a>
                <div className='flex items-center space-x-6'>
                  <ul className="hidden mx-auto space-x-6 font-medium md:flex dark:text-gray-200 text-gray-950">
                      <li>
                        <a className="transition-all hover:text-ColorVert" href="#skills">
                            Skills
                        </a>
                      </li>
                      <li>
                        <a className="transition-all hover:text-ColorVert" href="#projets">
                            Projets
                        </a>
                      </li>
                  </ul>
                  <div className='flex items-center gap-2'>
                    <div 
                        onClick={handleSwitchTheme} 
                        className='cursor-pointer text-ColorVert'
                    >
                        { theme === "dark" ? 
                            <BiSun className='text-3xl' /> :
                            <BiMoon className='text-3xl' />
                        }
                    </div>
                    <div 
                        onClick={()=> setIsOpen(!isOpen)} 
                        className=" hover:text-ColorVert cursor-pointer md:hidden"
                    >
                        <BiMenu className='text-3xl' />
                    </div>
                  </div>
                </div>      
            </nav>
        </div>
    )
}

export default Navbar