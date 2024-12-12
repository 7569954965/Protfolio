import React from 'react'

const Skills = () => {

    const techs=[
        {
            id:1,
            src:'/images/html.png',
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:'/images/css.png',
            title:'CSS',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:'/images/javascript.png',
            title:'JavaScript',
            style:'shadow-yellow-500'
        },
        {
            id:4,
            src:'/images/java.png',
            title:'Java',
            style:'shadow-sky-500'
        },
        {
            id:5,
            src:'/images/springboot.jpeg',
            title:'Spring-Boot',
            style:'shadow-green-500'
        },
        {
            id:6,
            src:'/images/react.png',
            title:'React',
            style:'shadow-cyan-500'
        },
        {
            id:7,
            src:'/images/git.png',
            title:'GIT',
            style:'shadow-red-500'
        },
        {
            id:8,
            src:'/images/tailwind.png',
            title:'Tailwind',
            style:'shadow-sky-800'
        },
        {
            id:7,
            src:'/images/github.png',
            title:'Github',
            style:'shadow-black'
        },
       
        {
            id:9,
            src:'/images/mysql.png',
            title:'MYSQL',
            style:'shadow-blue-700'
        },
      
        
    ]



  return (
    <div id='Skills' className='w-full h-full bg-gradient-to-b from-slate-950 to-gray-800 text-white font-bold '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full'>
            <div >
                <h1 className='text-2xl md:text-3xl'>Skills</h1>
                <p className=' border-red-600  border-b-4 p-1'></p>
            </div>
            <p className='w-full border-gray-600 border-b-2 p-1 mt-8'></p>

            <div className='flex space-x-16 w-full md:max-w-screen-lg overflow-hidden my-20 group'>
                <div className='flex space-x-16 animate-loop-scroll gap-5 text-center py-6 px-12 group-hover:paused'>
                {
                        techs.map(({id,src,title,style})=>(
                        <div 
                        key={id}
                        className={`py-5 px-12 sm:py-5 sm:px-20 shadow-md hover:scale-105 duration-500 rounded-lg ${style}`}>
                            <img loading='lazy' className='w-32 mx-auto' src={src} alt="" />
                            <p className='mt-4 overflow-hidden'>{title}</p>
                        </div>
                

                        ))
                    }

                </div>
                <div aria-hidden='true' className='flex space-x-16 animate-loop-scroll gap-8 text-center py-6 px-12 group-hover:paused'>
                {
                        techs.map(({id,src,title,style})=>(
                        <div 
                        key={id}
                        className={`py-3 px-10 sm:py-5 sm:px-16 shadow-md hover:scale-105 duration-500 rounded-lg ${style}`}>
                            <img loading='lazy' className='w-32 mx-auto' src={src} alt="" />
                            <p className='mt-4 overflow-hidden'>{title}</p>
                        </div>
                

                        ))
                    }

                </div>
                

            
            </div>
            <p className='w-full border-gray-600 border-b-2 p-1 mb-8'></p>

        </div>

    </div>
   
  )
}

export default Skills
