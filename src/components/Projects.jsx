import React from 'react'

const Projects = () => {

    const techs=[
        {
            id:1,
            src:'/images/project1.png',
            title:'Todo List',
            href:'https://github.com/7569954965/TodoListProject',
            style:'shadow-pink-400'
        },
        {
            id:2,
            src:'/images/project6.png',
            title:'My New Protfolio',
            href:'https://github.com/7569954965/Protfolio',
            style:'shadow-slate-950'
        },
        {
            id:3,
            src:'/images/project2.png',
            title:'Bakery Website',
            href:'https://github.com/7569954965/BakeryWeb',
            style:'shadow-white'
        },
        {
            id:4,
            src:'/images/project3.png',
            title:'Git Hub Profile',
            href:'https://github.com/7569954965/GItHubProfileSearching',
            style:'shadow-gray-500'
        },
        {
            id:5,
            src:'/images/project4.png',
            title:'My First Protfolio',
            href:'https://github.com/7569954965/My-Portfolio',
            style:'shadow-red-500'
        },
        {
            id:6,
            src:'/images/project5.png',
            title:'Gallery App',
            href:'https://github.com/7569954965/Gallery-Project',
            style:'shadow-cyan-400'
        },
        
        
        
    ]


  return (
        <div id='Projects' className='w-full h-full bg-gradient-to-b from-gray-800 to-slate-950 text-white font-bold '>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full'>
                <div >
                    <h1 className='text-2xl md:text-3xl'>Projects</h1>
                    <p className=' border-red-600  border-b-4 p-1'></p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-6 px-12 sm:px-0 my-5'>
                    {
                        techs.map(({id,src,title,style,href})=>(
                            <div 
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-4  rounded-lg ${style}`}>
                                <a href={href} target='_blank'> <img className='w-28 md:w-40 mx-auto' src={src} alt="" /></a>
                                <p className='mt-4 overflow-hidden'>{title}</p>
                            </div>
                    

                        ))
                    }


                
                
                </div>
            </div>
        
        </div>
  )
}

export default Projects
