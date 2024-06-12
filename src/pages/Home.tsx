import React from 'react'

export function Home() {
  return (
    <div id='home' className='min-h-screen flex flex-col mx-20 p-10'> 
      <p className='text-cyan-300 mb-2 text-lg'>Hello, my name is</p>
      <p className='text-7xl font-semibold mb-3'>Jaylen Berrien.</p>
      <p className='text-7xl font-semibold text-slate-300 mb-8'>I'm an internet Architect,</p>
      <div className='w-1/2'>
        <p className='text-slate-300 text-lg'>but most people call it a <div className='text-cyan-300 inline'>Fullstack Software Engineer.</div> I enjoy creating software that <div className='inline text-cyan-300'>focuses on the user's experience</div> first. I'm constantly looking to grow and improve upon my skills. If you are interested in interviewing me please contact me, <div className='text-cyan-300 inline'>I am availible </div>and looking for opportunities. </p>
      </div>
     
    </div>
  )
}

