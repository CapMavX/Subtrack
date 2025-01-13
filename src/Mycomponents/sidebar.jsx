import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrTransaction } from "react-icons/gr";
import { MdOutlineAccountCircle } from "react-icons/md"
import { CiLogin } from "react-icons/ci";
import capmavx from"../assets/capmavx.jpg"


export default function Sidebar() {
  return (
    <div className='w-[319px]  h-full shadow-2xl text-center  flex flex-col gap-[60px] bg-[white] items-center'>
        <h2 className='w-[210px] h-[49px] font-[Montserrat] font-[700]  text-[40px] leading-[48.76px]  mt-[40px]  '>Sub<span className='text-[Blue]'>Trackr</span></h2>
        <div className='w-[239px] h-fit flex flex-col  gap-[15px] content-center justify-center'>
                <div className='w-[239px] h-[60px]  rounded-[24px] p-[8px] gap-[8px] flex  hover:bg-[#0085FF] text-[black] hover:text-[white] text-center'><a href="/home"><div className='w-[190px] items-center h-[32px] flex flex-row gap-[24px] mt-[5px] '> <RxDashboard size={24}  className=' mt-[2px]' /> <p className='w-[120px] h-[29px] font-[400] text-[24px] font-[Montserrat] leading-[29.26px] '>Dashboard</p></div></a></div>
                <div className='w-[239px] h-[60px]  rounded-[24px] p-[8px] gap-[8px] flex  hover:bg-[#0085FF] text-[black] hover:text-[white]'><a href="/home"><div className='w-[190px] items-center h-[32px] flex flex-row gap-[24px] mt-[5px] '> <IoIosAddCircleOutline  size={24}  className=' mt-[2px]' /> <p className='w-[120px] h-[29px] font-[400] text-[24px] font-[Montserrat] leading-[29.26px] '>Add new</p></div></a></div>
                <div className='w-[239px] h-[60px]  rounded-[24px] p-[8px] gap-[8px] flex  hover:bg-[#0085FF] text-[black] hover:text-[white] '><a href="/home"><div className='w-[190px] items-center h-[32px] flex flex-row gap-[24px] mt-[5px] '> <GrTransaction  size={24}  className=' mt-[2px]' /> <p className='w-[120px] h-[29px] font-[400] text-[24px] font-[Montserrat] leading-[29.26px] ml-[18px] '>Transactions</p></div></a></div>
                <div className='w-[239px] h-[60px] rounded-[24px] p-[8px] gap-[8px] flex  hover:bg-[#0085FF] text-[black] hover:text-[white] '><a href="/home"><div className='w-[190px] items-center h-[32px] flex flex-row gap-[24px] mt-[5px] '> <MdOutlineAccountCircle  size={24}  className=' mt-[2px]' /> <p className='w-[120px] h-[29px] font-[400] text-[24px] font-[Montserrat] leading-[29.26px] '>Account</p></div></a></div>
        </div>
        <div className='w-[200px]   h-[136px] flex flex-col gap-[55px]   '>
            <div className='w-[300px] h-[32px] flex flex-row gap-[24px]'>
            <label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" class="sr-only peer" />
  <div class="w-10 h-4 bg-gray-200 rounded-full peer-checked:bg-blue-500 transition-colors"></div>
  <div class="absolute w-4 h-5 bg-white rounded-full left-1 top-1 peer-checked:translate-x-4 transition-transform"></div>
</label>
    <p className='w-[186px] h-[29px] font-[400] text-[24px] font-[Montserrat] leading-[29.26px] '>Switch Account</p>

            </div>
            <div className='w-[200px] text-center  h-[32px] flex flex-row  gap-[24px]'><CiLogin size={28} /><p className='w-[93px] h-[29px] font-[Montserrat] font-[400] text-[24px] leading-[29.26px] ml-[22px]'>Log out</p></div>
        </div>
      <img src={capmavx} alt="" className='w-[85px] h-[85px] rounded-[50px] mt-[-30px] '  />
        
    </div>
  )
}
