import { Charts2 } from '@/Mycomponents/chart2'
import { Charts } from '@/Mycomponents/charts'
import Expenses from '@/Mycomponents/expenses'

import Sidebar from '@/Mycomponents/sidebar'
import Spending from '@/Mycomponents/spending'
import Subscriptions from '@/Mycomponents/subscriptions'
import React from 'react'


function Dashboard() {



  
  return (
    <div className='flex flex-row gap-10 ' >
      <div className=''><Sidebar/></div>
      
      
       
   <div className='flex flex-col'>
    <div className='flex flex-row'><Spending/>
    <Expenses/></div>
   
  
        <div className='flex flex-row gap-[50px] min-h-screen' >
       
       
       <div className=''><Charts/></div> 
       
       <div className='' ><Charts2/></div>
       
        </div>
        
        
       
        
        <Subscriptions/>
      
      
   
       
</div>
</div>

  )
}

export default Dashboard