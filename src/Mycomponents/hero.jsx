import React from 'react'

import { FaRegBell } from 'react-icons/fa'


const Cart = "object";

function Hero() {
  return (
    <div className=''>
     
     <div className='flex flex-row'><h2 className='w-[215px] h-[49px] mt-[12px] font-[Montserrat] font-[700] text-[25px] leading-[48.76px]'>Hi, CapMav</h2> <FaRegBell size={30} className='mt-[12px] ml-[110px]' /></div>  
     <div className='w-[393px] h-[39px] mt-[10px] '><p className='font-[Montserrat] font-[400] leading-[29.26px] text-[20px]'> <span className='font-[Montserrat] text-[30px] font-[700] leading-[30.03px] '>{Cart}</span> new notifications, <span className='font-[Montserrat] text-[32px] font-[700] leading-[30.03px] '>3</span> reminders</p></div>
      
      
        
           
      
    </div>
  )
}

export default  Hero


