import React from 'react'
import { Charts } from './charts'
import { FaRegBell } from "react-icons/fa6";




function Spending() {
  return (
    <div>
      <div className='flex flex-row'><h2 className='w-[215px] h-[49px] mt-[12px] font-[Montserrat] font-[700] text-[25px] leading-[48.76px]'>Hi, CapMavX</h2> <FaRegBell size={30} className='mt-[12px] ml-[110px]' /></div>  
      <div className='w-[393px] h-[39px] mt-[0px] '><p className='font-[Montserrat] font-[400] leading-[29.26px] text-[20px]'> <span className='font-[Montserrat] text-[30px] font-[700] leading-[30.03px] '>2</span> new notifications, <span className='font-[Montserrat] text-[32px] font-[700] leading-[30.03px] '>3</span> reminders</p></div>
      <div className='flex flex-row gap-[500px]'>
      <h4 className='w-[101px] h-[24px] mt-[10px] font-[Montserrat] font-[700] text-[20px] leading-[24.38px] '>Spending</h4>
      

      </div>
      <Charts/>
       
      
        
           
      
    </div>
  )
}

export default  Spending


