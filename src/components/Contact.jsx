import React from 'react'
import { GoChevronRight } from "react-icons/go";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";






const Contact = () => {

    const links=[
        {
          id:1,
          child:(<><FaLinkedin size={30} /></>),
          href:'https://linkedin.com/in/doddikindi-pavan-kumar-rao-560166278'
        },
        {
          id:2,
          child:(<><FaGithub size={30}/></>),
          href:'https://github.com/7569954965'
        },
        {
          id:3,
          child:(<><HiOutlineMail size={30}/></>),
          href:'mailto:pavankumard351@gmail.com'
        },
      ]
  return (
    <div id='Contact' className='w-full h-screen bg-gradient-to-b from-slate-950 to-gray-900 text-white'>
        <div className='max-w-screen-lg  p-4 mx-auto flex flex-col justify-center items-center h-full'>
                <div >
                    <h1 className='text-2xl md:text-3xl'>Contact Me</h1>
                    <p className=' border-red-600  border-b-4 p-1'></p>
                </div>
            
                <div className='max-w-screen-md mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                        <div className='flex justify-center items-center mt-3'>
                            <form action="https://getform.io/f/aejjzpnb" method='POST' className='flex flex-col w-full p-6 border-2 border-gray-600 shadow-md hover:shadow-pink-400 hover:scale-95 duration-100'>
                                
                                    <input  className='p-2 px-4 pr-20 bg-transparent border rounded-md text-white focus:outline-none' type="text"  placeholder='Enter your name:'/>
                                    <input  className='p-2 px-4 pr-20 bg-transparent border rounded-md text-white focus:outline-none my-6'   type="text"  placeholder='Enter your email:'/>
                                    <textarea  className='p-2 px-4 pr-20 bg-transparent border rounded-md text-white focus:outline-none'  name="msg"  rows="5" placeholder='enter your message' ></textarea>
                                
                                    <div className='flex justify-center items-center'>
                                        <button className='group text-white w-fit px-6 py-3 my-2 bg-gradient-to-l from-pink-500 to-red-300 rounded-md cursor-pointer flex items-center hover:scale-90 duration-300'>
                                            Send Message
                                            <span className='font-bold group-hover:-rotate-90 p-1'> <GoChevronRight /></span>
                                        </button>

                                    </div>
                                
                            </form> 
                        </div>
                        <div className='md:pl-20'>
                            <div className='flex flex-col justify-center items-start py-4'>
                                <div className='flex justify-center items-center gap-2 text-gray-400'>
                                    <span className='hover:scale-110 duration-500  hover:text-pink-400 '><MdOutlineAlternateEmail /></span>
                                    <p className='text-gray-400'> pavankumard351@gmail.com</p>
                                </div>
                                <div className='flex justify-center items-center gap-2 text-gray-400  my-2'>
                                    <span className='hover:scale-110 duration-500  hover:text-pink-400 '><IoIosCall /> </span>
                                    <p className='text-gray-400'> +91-7569954965</p>
                                </div>
                                <div className='flex justify-center items-center gap-2 text-gray-400 '>
                                    <span className='hover:scale-110 duration-500  hover:text-pink-400 '><CiLocationOn /></span>
                                    <p className='text-gray-400'>Hyderabad, Telangana </p>
                                </div>

                                    <div className='mx-auto w-2/3 md:w-full'>
                                        <ul className='flex items text-cyan-300 my-2'>
                                            {links.map(({id,child,href,download})=>(
                                            <li key={id} className='pr-3'>
                                                <a 
                                                href={href} 
                                                download={download}
                                                target='_blank'
                                                className='hover:text-pink-400'
                                                >{child}</a>
                                            </li>
                                            ))}
                                        </ul>
                            
                            
                                    </div>
                        

                              </div>
                        </div>
                        

                    </div>
                    <p className='w-full border-gray-600 border-b-2 p-1 mb-8'></p>
                   
           
        </div>
  
    </div>
  )
}

export default Contact
