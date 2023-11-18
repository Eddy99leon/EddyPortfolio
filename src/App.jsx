import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Techno from './component/Techno'
import Project from './component/Project'
import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import AllProject from './component/AllProject'
import Frontend from './component/Frontend'
import Fullstack from './component/Fullstack'
import Sidebar from './component/Sidebar'
import { IoIosArrowUp } from 'react-icons/io'

function App() {

  const BackToTop = () => {
    window.scrollTo(0,0)
  }

  return (
    <div className='font-Poppins bg-white text-gray-950 dark:text-gray-100 dark:bg-slate-950 transition-all duration-700'>
      <Sidebar />
      <Navbar />
      <Hero />
      <Techno />
      <Routes>
        <Route path="/EddyPortfolio/" element={<Project />}>
          <Route path="/EddyPortfolio/" element={<AllProject />} />
          <Route path="frontend" element={<Frontend />} />
          <Route path="fullstack" element={<Fullstack />} />
        </Route>
      </Routes>
      <Footer />
      <div 
        className='fixed right-5 md:right-10 bottom-8 cursor-pointer md:text-xl bg-ColorVert p-1 md:p-2 text-gray-950 shadow-sm shadow-ColorVert'
        onClick={BackToTop}
      >
        <IoIosArrowUp />
      </div>
    </div>
  )
}

export default App
