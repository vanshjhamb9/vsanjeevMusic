import React from 'react'
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import {FaFacebook, FaGlobeAmericas, FaInstagram, FaYoutube} from "react-icons/fa";
import {IoIosCall} from "react-icons/io"

const ContactDetais = () => {
  return (
    <div className='w-[450px] h-[410px] gap-[24px] bg-brown-700 text-brown-5 flex flex-col p-[24px] rounded-[12px] '>
      <div className='text-brown-5 flex  gap-4 ml-5 text-[18px] p-3 '>
       <HiChatBubbleLeftRight 
        className='w-[3rem]'
       />
       <div className='flex flex-col font-edu-sa text-[18px]'>
        <h1>Email on us</h1>
        <p>Our team is here to help you</p>
        <p>sanvenk@gmail.com</p>
       </div>
      </div>
    

      <div className="text-brown-5 flex gap-4 ml-5 text-[18px] p-3 items-start">
  <FaGlobeAmericas className="w-[3rem] h-[3rem] text-brown-5" />
  
  <div className="flex flex-col font-edu-sa text-[18px]">
    <h1 className="font-semibold mb-1">Follow Us</h1>

    <div className="flex flex-col items-start gap-2">
      <a href="https://instagram.com/sanvenk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-400 transition">
        <FaInstagram className="w-5 h-5 text-pink-500" />
        <span>@sanvenk</span>
      </a>

      <a href="https://youtube.com/@sanvenk" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#FF0000] transition">
        <FaYoutube className="w-5 h-5 text-[#FF0000]" />
        <span>@sanvenk</span>
      </a>

      <a href="https://facebook.com/SanjeevVenkataramanan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-500 transition">
        <FaFacebook className="w-5 h-5 text-blue-700" />
        <span>Sanjeev Venkataramanan</span>
      </a>
    </div>
  </div>
</div>

    </div>
  )
}

export default ContactDetais
