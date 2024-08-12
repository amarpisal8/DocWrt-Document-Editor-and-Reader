import React from 'react'
import logo from '../images/logo.png';
import { FaUser } from "react-icons/fa";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FaMobileAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";



const SingUp = () => {
  return (
    <>
      <div className=' flex items-center w-screen justify-center flex-col h-screen bg-[#F0F0F0]'>
        <div className="flex w-full items-center">
          <div className="left flex w-[35%] flex-col ml-[10px]">
            <img className='w-[210px]' src={logo} alt="Logo Icon" />
            <form className='pl-3 mt-5 ' action="">
               {/* username */}
              <div className="inputCon">
                <p className='text-[14px] text-[#808080]'>Username</p>
                <div className="inputBox w-[100%]">
                  <i><FaUser /></i>
                  <input type="text" name="username" id="username" placeholder='Enter Your Username' required />
                </div>
              </div>
             
              
              {/* name */}


              <div className="inputCon">
                <p className='text-[14px] text-[#808080]'>Name</p>
                <div className="inputBox w-[100%]">
                  <i><MdDriveFileRenameOutline /></i>
                  <input type="text" name="name" id="name" placeholder='Enter Your Name' required />
                </div>
              </div>

              {/* Email */}
              <div className="inputCon">
                <p className='text-[14px] text-[#808080]'>Email</p>
                <div className="inputBox w-[100%]">
                  <i><MdAlternateEmail /></i>
                  <input type="email" name="email" id="email" placeholder='Enter Your Email Id' required />
                </div>
              </div>


              {/* Contact Number */}
              <div className="inputCon">
                <p className='text-[14px] text-[#808080]'>Phone Number</p>
                <div className="inputBox w-[100%]">
                  <i><FaMobileAlt /></i>
                  <input type="phone" name="phone" id="phone" placeholder='Enter Your Contact Number' required />
                </div>
              </div>

              {/* Password */}
              <div className="inputCon">
                <p className='text-[14px] text-[#808080]'>Password</p>
                <div className="inputBox w-[100%]">
                  <i><RiLockPasswordFill /></i>
                  <input type="password" name="password" id="password" placeholder='Enter Your Password' required />
                  <i className=' cursor-pointer lmr-3 !text-[25px]'><IoMdEye/></i>
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
