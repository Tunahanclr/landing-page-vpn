import React from 'react'
import hero from "../assets/hero.png"
export default function Hero() {
  return (
    <div className='flex flex-col-reverse md:flex-row items-center justify-center mt-20 gap-20'>
            <div className=''>
                <h1 className='font-extrabold text-2xl ml-6 sm:text-5xl max-w-[650px] font-sans'>Want anything to be easy with LaslesVPN</h1>
                <p className=' mt-6 sm:mt-10 ml-6  w-[240px] sm:w-[340px] text-xs sm:text-sm font-light'>
                Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.
                </p>
                <button className='hover:bg-white hover:text-black transition-all border-2 border-[#F53838] w-[193px] ml-6 h-[54px] bg-[#F53838] rounded-[20px] text-white text-[18px] font-bold mt-6 sm:mt-14'>Get Started</button>
            </div>
            <div>   
                <img className='object-cover w-full ' src={hero} alt="" />
            </div>
    </div>
  )
}
