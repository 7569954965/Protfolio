import React from 'react'
import { GoChevronRight } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-scroll';




const Hero1 = () => {

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
    {
      id:4,
      child:(<><BsFillPersonLinesFill size={30}/></>),
      href:'/Pavan2024OctResume.pdf',
      download:true,

    },
  ]
  return (
    <div id='Home' className='bg-gradient-to-b from-slate-950 to-gray-800 w-full h-screen text-white pt-4 md:pt-0 '>

        <div className='max-w-screen-md mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row'>
          <div className='flex flex-col justify-center h-full md:pr-12'>
            <h1 className='font-bold text-2xl md:text-4xl'>I'm <span className='text-blue-600 '>Doddikindi Pavan Kumar</span> a Full Stack Developer</h1>
            <p className='text-gray-400 text-sm font-light'>I'm a Computer science student I want explore my skills and knowledge in the field of Information Technology. I Love to work on web application using technologies like React. Tailwind CSS </p>
            <div>
                <Link to='Contact' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 bg-gradient-to-l from-pink-500 to-red-300 rounded-md cursor-pointer flex items-center'>
                  Contact Me 
                  <span className='font-bold group-hover:rotate-90 p-1'> <GoChevronRight /></span>
                </Link>
            </div>
            <div>
              <ul className='flex items text-cyan-300 my-1'>
                {links.map(({id,child,href,download})=>(
                  <li key={id} className='pr-3'>
                     <a 
                     href={href} 
                     download={download}
                     target='_blank'
                     >{child}</a>
                  </li>
                ))}
              </ul>
             
            
            </div>

          </div>

          <div>
          <img className='mx-auto w-2/3  rounded-3xl md:w-full scale-75 duration-1000 px-2 shadow-cyan-700 hover:shadow-white shadow-lg' src="/images/pavanpic.jpeg" alt="" />
         </div>
        

        </div>
       




    </div>

   
  )
}

export default Hero1

