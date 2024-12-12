import React, { useState } from 'react'
import { FaBars,FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
const[nav,setNav]=useState(false);

  return (
    <div className='flex justify-between items-center w-full h-20 bg-black text-white p-4 px-4'>
        <div className='ml-2'>
            <h1 className='font-signature text-4xl'>Dpk</h1>
        </div>
        <div className='hidden md:block'>
            <ul className='flex gap-8 text-gray-400'>
               {data.map(({id,link})=>(
                    <li key={id} 
                    className='font-medium  cursor-pointer hover:scale-105 duration-200'
                    >
                        <Link to={link} smooth duration={500}>{link}</Link>
                    </li>
               ))}
            </ul>
        </div>
        <div onClick={()=>setNav(!nav)} className='cursor-pointer pr-4  text-gray-400 md:hidden'>

            {nav? <FaTimes size={30}/>:<FaBars size={30}/>}

        </div>

            {nav &&(
                <ul className='text-gray-400 flex flex-col justify-center items-center absolute top-0 right-0 mt-20 w-auto h-auto bg-gradient-to-b from-blue-900 to-gray-800 md:hidden rounded-md shadow-gray-800'>
                {data.map(({id,link})=>(
                   <li key={id} 
                   className='cursor-pointer px-4 py-2 text-xl'
                   >
                     <Link onClick={()=>setNav(!nav)}
                     to={link} smooth duration={500}>{link}</Link>

                   </li>
                 ))}

           </ul>

            )}
            
        
        
    </div>
  )
}

const data=[
    {
        id:1,
        link:"Home"
    },
    {
        id:2,
        link:"About"
    },
    {
        id:3,
        link:"Skills"
    },
    {
        id:4,
        link:"Projects"
    },
    {
        id:5,
        link:"Contact"
    }
]

export default Navbar
