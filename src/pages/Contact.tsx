import React from 'react'
import { motion } from 'framer-motion'

const Contact: React.FC = () => {
  const copyEmail =  function(){
    const copiedEmail = navigator.clipboard.writeText('jaylenberrien.jb@gmail.com')
    alert('email copied')        
  }
  return (
    <motion.div
      id='contact'
      initial={{ opacity:0, scale:0.8, translateY:100}}
      whileInView={{ opacity:1, scale:1, translateY:0}}
      viewport={{ once: true, amount:0.4}}
      // translate={{ "yes"}}
      transition={{duration:0.8, ease:'easeInOut'}}
      className=' text-slate-300 h-90 mx-20 py-10 p-10 text-center -mt-32 -pb-36'

      
    >
      <p className='font-bold text-2xl mb-5'>Want to reach out?</p>
      <p className='mb-4 mx-auto w-1/3 text-lg'>My inbox is open to all work and opportunites. You can also just say hi or ask questions if you'd like. Regardless I'll get back to you as soon as I can!</p>
      <p className='inline text-lg'>Email me at </p><a title='Email me'href="mailto:jaylenberrien.jb@gmail.com" className='text-cyan-300'>jaylenberrien.jb@gmail.com </a>
      <button title='Copy to clipboard' className='bg-gray- border-2 px-1 active:bg-gray-200 rounded-sm border-cyan-300 text-cyan-300' onClick={copyEmail}>Copy</button>
      <p className='mt-20 text-lg'>Made by <a href='' title='See repo for portfolio' className='text-cyan-300'>Jaylen Berrien</a></p>
    </motion.div>
  )
}

export default Contact;