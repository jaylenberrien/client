import React from 'react'

export default function EmailBar () {
  return (
    <div className='flex w-20 fixed h-screen right-0 bottom-0 p-5 flex-col-reverse '>
        <a title='Email me' href="mailto:jaylenberrien.jb@gmail.com" className='text-slate-300 vertical-lr text-sm transition ease-in-out transform hover:-translate-y-1 hover:text-cyan-300 active:text-cyan-400'>Email me: jaylenberrien.jb@gmail.com</a>
    </div>
  )
}


