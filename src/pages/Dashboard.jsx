
import Hero from '@/Mycomponents/hero'

import Sidebar from '@/Mycomponents/sidebar'
import Spending from '@/Mycomponents/spending'
import Subscriptions from '@/Mycomponents/subscriptions'

import React from 'react'
import MonthlySpendings from '@/Mycomponents/charts'
import  UserExpenses  from '@/Mycomponents/charts2'


function Dashboard() {



  
  return (
    <div className='flex min-h-screen flex-row gap-10  ' >
      <div className=''><Sidebar/></div>
      <div className='flex flex-col'>
      <div>
      
      <Hero/>
      </div>
      <div><Spending/></div>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] w-full max-w-4xl">
      
        <MonthlySpendings />
        <UserExpenses />
      </div>

      
      
       
  
       
        
        <Subscriptions/>
      </div>
      
      
   
       
</div>


  )
}

export default Dashboard