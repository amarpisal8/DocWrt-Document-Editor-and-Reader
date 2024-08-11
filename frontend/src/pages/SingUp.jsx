import React from 'react'
import logo from '../images/logo.png';
import { FaUser } from "react-icons/fa";
const SingUp = () => {
  return (
    <>
      <div className=' flex items-center w-screen justify-center flex-col h-screen bg-[#F0F0F0]'>
        <div className="flex items-center">
                <div className="left flex flex-col ml-[50px]">
                    <img src={logo} alt="Logo Icon" />
                    <form className='pl-3 mt-5' action="">
                        <div className="inputCon">
                            <p className='text-[14px] text-[#808080]'>Username</p>
                            <div className="inputBox w-[100%]">
                                <i><FaUser/></i>
                                <input type="text" name="username" id="username" placeholder='Enter Your Username' required/>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="right">
                    
                </div>
        </div>
      </div>
    </>
  )
}

export default SingUp
