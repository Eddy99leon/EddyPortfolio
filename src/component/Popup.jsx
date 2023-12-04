import React from 'react'
import { useContext } from 'react'
import { PopupContext } from '../context/PopupContext'
import { IoIosAlert, IoIosCloseCircle } from "react-icons/io";

const Popup = () => {
    const {isPop, handleClosePop} = useContext(PopupContext);

    return (
        <div className={` 
            ${isPop? 'opacity-100 pointer-events-auto': 'opacity-0 pointer-events-none'}
            fixed flex justify-center items-center top-0 bg-black/80 z-30 w-full h-full transition-all duration-500 
        `}>
            <div className={` 
                ${isPop? 'opacity-100 scale-100': 'opacity-0 scale-50'}
                bg-white w-[320px] text-gray-950 p-3 pb-6 rounded-md transition-all duration-500 
            `}>
                <div 
                    className='flex justify-end text-2xl text-gray-800 mb-3 cursor-pointer'
                    onClick={handleClosePop}
                >
                    <IoIosCloseCircle />
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <IoIosAlert className='text-red-600 text-6xl mb-4' />
                    <p className='font-medium text-gray-700'>
                        Le code de cette projet est
                    </p>
                    <p className='text-2xl font-semibold'>
                        Confidentiels
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Popup