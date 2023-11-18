import React from 'react'
import hero1 from "../assets/hero1.jpg"
import EddyLéonCv from "../assets/EddyLéonCv.pdf"
import { BiDownArrowCircle, BiLogoFacebookCircle, BiLogoGithub, BiLogoLinkedinSquare } from 'react-icons/bi';

function Hero() {
  return (
    
    <section className='max-w-5xl w-full mx-auto pt-[85px] pb-2 px-3'>
      <div className="pt-10 pb-5 mx-auto md:pt-16 md:pb-20">
        <div className='mx-auto max-w-[150px]'>
          <img className='border-4 border-ColorVert rounded-full object-cover' src={hero1} alt="hero" />
        </div>

        <div className="justify-center w-full mt-10 text-center">
          <div className="justify-center w-full mx-auto">
            <p className="mt-4 text-5xl sm:text-6xl font-semibold font-HandWriter dark:text-gray-200 text-gray-950 transition-all duration-700">
              Eddy Léon
            </p>
            <p className="mx-auto text-xl font-bold dark:text-gray-200 text-gray-950 md:text-2xl transition-all duration-700 mb-1">
              Dévéloppeur créative 
              <span className='text-ColorVert ml-2'>
                Fullstack JS,
              </span>
            </p>
            <p className="mx-auto font-medium dark:text-gray-300 text-gray-800 text-md transition-all duration-700">
              *Et coéquipier de BATMAN la nuit 😜.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 mx-auto mt-5">
            <a href={EddyLéonCv} download className="flex items-center px-3 py-3 font-semibold text-black bg-ColorVert">
              <span className='text-sm'>
                Télécharge Cv
              </span>
              <BiDownArrowCircle className='text-xl ml-1' />
            </a>
            <a href="#about" className="font-semibold text-sm dark:text-gray-200 text-gray-950 hover:text-ColorVert transition-all duration-700">
              Savoir plus &nbsp; →
            </a>
          </div>
        </div>
    
        <div className="flex items-center justify-center gap-4 mt-6 dark:text-gray-100 text-gray-950 transition-all duration-700">
          <a 
            className=" hover:transform hover:scale-95"  
            href="https://web.facebook.com/profile.php?id=100094137014767" 
            target='_blank'
          >
            <BiLogoFacebookCircle className='text-3xl' />
          </a>
          <a 
            className=" hover:transform hover:scale-95" 
            href="https://www.linkedin.com/in/eddy-andriamisaina-863431299"
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
    </section>

  )
}

export default Hero