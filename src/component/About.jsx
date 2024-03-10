import React from 'react'
import hero3 from "../assets/hero3.jpeg"
import { IoMail } from "react-icons/io5";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { IoMdLocate } from "react-icons/io";
import { RiPlanetLine } from "react-icons/ri";

const About = () => {
  return (
    <div className='max-w-4xl w-full mx-auto pt-16 md:20 pb-10 px-3 sm:px-6' id='abouts'>
        <div className='relative text-center mt-10 font-bold dark:text-gray-300 text-gray-900 text-base md:text-lg lg:text-xl mb-8 md:mb-14 transition-all duration-700'>
            Qui suis-je ?
            <span className='absolute bg-ColorVert w-24 h-[6px] mx-auto top-7 inset-x-0'></span>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-4'>
            <div className='relative w-[250px] h-[300px] sm:w-[400px] sm:h-[300px] lg:w-[300px] lg:h-[350px] border-2 border-ColorVert rounded-lg'>
                <img className='absolute top-5 left-5 object-cover w-[250px] h-[300px] sm:w-[400px] sm:h-[300px] lg:w-[300px] lg:h-[350px] border-2 border-ColorVert rounded-lg' src={hero3} alt="hero" />
            </div>
            <div className='order-first lg:order-last max-w-xl pb-14 lg:pb-0'>
                <div className='mb-8'>
                    <h1 className='text-ColorVert font-semibold mb-1'>
                        Me connaître un peu plus:
                    </h1>
                    <p className='text-justify text-sm hyphens-auto text-gray-600 dark:text-gray-300'>
                        Hello world ! Je suis <span className='font-semibold text-gray-700 dark:text-gray-200'>Andriamisaina Eddy Léon</span>, 
                        un développeur front-end passionné qui a rejoint cette terre il y a <span className='font-semibold text-gray-700 dark:text-gray-200'>25 ans</span>.
                        Depuis, j’ai nourri une soif insatiable de <span className='font-semibold text-gray-700 dark:text-gray-200'>connaissances</span> et cultivé une <span className='font-semibold text-gray-700 dark:text-gray-200'>passion</span> pour le développement web.
                        Mon objectif ? Créer des expériences web qui marquent les esprits et simplifient la vie. 
                        Je vous invite à parcourir mon portfolio pour explorer mes projets et partager ma vision du développement web.
                    </p>
                </div>
                <div className='w-full'>
                    <h1 className='text-ColorVert font-semibold mb-4'>
                        Contacts:
                    </h1>
                    <div className='grid grid-cols-2 gap-y-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400'>
                        <div className='flex items-center'>
                            <FaSquarePhoneFlip className='text-xl text-gray-700 dark:text-gray-200 mr-1 sm:mr-2' />
                            <p>+261 34 50 117 05</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMail className='text-xl text-gray-700 dark:text-gray-200 mr-1 sm:mr-2' />
                            <p>leoneddy504@gmail.com</p>
                        </div>
                        <div className='flex items-center'>
                            <IoMdLocate className='text-xl text-gray-700 dark:text-gray-200 mr-1 sm:mr-2' />
                            <p>Antananarivo</p>
                        </div>
                        <div className='flex items-center'>
                            <RiPlanetLine className='text-xl text-gray-700 dark:text-gray-200 mr-1 sm:mr-2' />
                            <p>Terre, Sol-3</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About