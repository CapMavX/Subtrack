import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'
import { IoLogoFacebook } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import google from '../assets/google.png';
import micro from '../assets/micro.png';
import { useNavigate } from 'react-router-dom';



function Login() {

const [emailerror, setEmailerror] = useState('');
const [passworderror, setPassworderror] = useState('');
const navigate = useNavigate('');

const handleemail = (e) => {
  const email = e.target.value;
  const emailRegx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailRegx.test(email)) {
    setEmailerror("Invalid email address");
  }else{
    setEmailerror('')
  }
};

const handlepassword = (e) => {
  const password = e.target.value;
  if(password.length <6){
    setPassworderror('Password length must be atleast 6 characters')
  }else{
    setPassworderror('')
  }
};
  
  function handlesubmit(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    if(!email || !password || emailerror || passworderror){
      return;
    }
    alert("Form submitted sucessfully")
   navigate("/user")
  }
  return (
    <div className='max-w-full max-h-screen bg-white'>

        <div className='max-w-fit h-fit mt-[20px] flex flex-col  justify-self-center items-center'>
            <h1 className='font-[Montserrat] font-[700] text-[54px]  leading-[78.02px] text-[black] '>Welcome back 👋</h1>
            <h2 className='w-[49px] h-[49px] font-[Montserrat] font-[700]  text-[30px] leading-[48.76px] text-black'>To</h2>
            <h1 className='w-[336px] h-[78px] font-[Montserrat] font-[700] text-[54px] leading-[78.02px] ml-[80px]'>Sub<span className='font-[Montserrat] font-[700] text-[54px] leading-[78.02px] text-blue-600 ml-[-10px] '>Trackr</span></h1>
        </div>
        <form onSubmit={handlesubmit}>
        <div className='max-w-fit h-fit mt-[43px] justify-self-center  flex flex-col items-start gap-[22px] '>
            <p className='w-[75px] h-[29px] font-[Montserrat] font-[400] text-[24px] leading-[29.26px] text-[black] items-start'>Log in</p>
          <div>
          <Input type="email" onInput={handleemail} placeholder="Email" name='email' required />
          {emailerror && <span className='text-[11px] text-red-500' >{emailerror}</span>}
          </div>
        <div>
        <Input type="password" placeholder="Password" onInput={handlepassword}  name='password' required/>
        {passworderror && <span className='text-[11px] text-red-600'>{passworderror}</span>}
        </div>
          
         <Button variant="sadiq" type="submit">Log in <FaArrowRight /> </Button> 
        </div>
       
        </form>
      
        
        <div className='max-w-fit h-fit justify-self-center items-center mt-[52px] flex flex-col gap-[22px]'>
            <p className='w-[136px] h-[20px] font-[Montserrat] font-[400] text-[16px] leading-[19.5px] text-black'>Or continue with</p>
            <div className='max-w-fit h-fit flex flex-row gap-[32px]' >
            <IoLogoFacebook size={39} className='text-blue-700' />
            <img src={google} alt=""  className='w-[30px] h-[30px] mt-[5px]' />
            <img src={micro} alt=""  className='w-[30px] h-[30px] mt-[6px]' />
            </div>
        </div>

    </div>

  )
}

export default Login