import React from 'react'

export default function About() {
  return (
    <div id='about' className='min-h-screen flex flex-col mx-20 p-10 text-slate-300 -mt-32'> 
        <p className='font-bold text-2xl mb-5 line-left'> More about me</p>
        <div className='w-1/2 text-lg'>
          <p>Programming was kind of something that fell into my lap. I always knew I wanted to be an engineer even as a child, I just didn't know the type. After I graduated high school I started to work towards becoming a Mechanical Engineer, to prepare myself I started to practice programming with C.</p>
          <p>I fell in love with it and knew that I was something that I wanted to do as a career. Fast foward to now and I am working to break into tech and raise my skills to a professional level.</p>
        </div>
        <p className='font-semibold text-xl my-4'>Some technologies I have worked with:</p>
        <ul className=''>
            <li className='bg-cyan- border-2 border-cyan-300 rounded-md w-24 text-cyan-300 mr-1 px-1 inline '>Typescript</li>
            <li className='bg-cyan- border-2 border-cyan-300 rounded-md w-24 text-cyan-300 mr-1 px-1 inline '>MongoDB</li>
            <li className='bg-cyan- border-2 border-cyan-300 rounded-md w-24 text-cyan-300 mr-1 px-1 inline '>ExpressJS</li>
            <li className='bg-cyan- border-2 border-cyan-300 rounded-md w-24 text-cyan-300 mr-1 px-1 inline '>ReactJS</li>
            <li className='bg-cyan- border-2 border-cyan-300 rounded-md w-24 text-cyan-300 mr-1 px-1 inline '>NodeJS</li>
            <li className='bg-cyan- border-2 border-cyan-300 rounded-md w-24 text-cyan-300 mr-1 px-1 inline text-nowrap '>Tailwind CSS</li>
            <li className='bg-cyan- border-2 border-cyan-300 rounded-md w-24 text-cyan-300 mr-1 px-1 inline '>Git</li>
        </ul>
    </div>
  )
}

