import React from 'react'

const About = () => {
  return (
    <div id='About' className='w-full h-screen bg-gradient-to-b from-slate-800 to-slate-950 text-white font-bold'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full py-4'>
            <div className='mb-5 md:mt-0'>
                <h1 className='text-2xl md:text-3xl'>About Me</h1>
                <p className=' border-red-600  border-b-4 p-1'></p>
            </div>

              <div className='max-w-screen-md mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                                <div className='flex justify-center items-center mt-10 md:mt-0 md:pr-20'>
                                     <p className='font-light text-gray-300 '>
                                      I am Pavan Kumar Doddikindi, a Computer Science student eager to explore and enhance my skills and knowledge in the field of Information Technology. I am a quick learner with a strong self-learning. I enjoy exploring new technologies and am passionate about problem-solving.
                                      I have acquired proficiency in several programming languages and technologies, including Java, Object-Oriented Programming (OOP), JavaScript, HTML, CSS, React, Tailwind CSS, Spring Boot, and SQL databases.
                                      I am open to job opportunities that align with my skills and interests, and I am ready to contribute effectively to any role.
                                    </p>
                                   
                               
                                    
                                    
                                </div>
                                <div className='mb-10 md:mb-0'>
                                    <img className='mx-auto w-2/3  rounded-3xl md:w-full scale-75 md:scale-125 duration-1000 px-2  hover:shadow-slate-600 shadow-lg' src="/images/pavanpic2.jpg" alt="" />
                                </div>
              </div>
            
                     
           
        </div>
      
    </div>
  )
}

export default About
