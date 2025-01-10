import Expenses from '@/Mycomponents/expenses'
import Hero from '@/Mycomponents/hero'
import Sidebar from '@/Mycomponents/sidebar'
import Spending from '@/Mycomponents/spending'
import React from 'react'


function Dashboard() {



  
  return (
    <div className='flex flex-row gap-5 ' >
      <div className=''><Sidebar/></div>
      
      
      <div className='flex flex-row gap-[60px]'>
       
    
        <Spending/>
        <Expenses/>
        
       
        </div>
      
      
   
    
</div>
  )
}

export default Dashboard