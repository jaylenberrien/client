import React from 'react';
import { useEffect, useState } from 'react';





export default function Nav (){
  
  const[activeSec, setActiveSec] = useState("")
  const [showShadow, setShowShadow] = useState(false)

  useEffect(()=>{

    let preScroll:any = window.scrollY;
    window.onscroll = function(){
      const liveScroll:any = window.scrollY;
      if (preScroll < liveScroll){
        document.getElementById('nav')!.style.top = "-60px";
      } else {
        document.getElementById('nav')!.style.top = "0";
      }
      setShowShadow(window.scrollY> 0)

      preScroll = liveScroll;
    }
    
    const observer = new IntersectionObserver((entries) =>{
      entries.forEach((entry)=>{
        if (entry.isIntersecting){
          setActiveSec(entry.target.id)
        }
      })
    },{rootMargin: '-50% 0px -49% 0px'})
    
    document.querySelectorAll('div').forEach((div)=>{
      observer.observe(div)
    })
  
    return()=>{
      observer.disconnect()
    }
  
  },[])

  return (
    <div id='nav' className={`bg-blue-950 text-slate-300 top-0 sticky flex flex-row-reverse pr-20 text-md  font-semibold w-full bg-opacity-70 transition-top duration-300 ease-in-out ${showShadow ? 'shadow-xl backdrop-filter backdrop-blur-sm' : ''}`}>
      <a href='https://docs.google.com/document/d/1qVmlpp4qtzwBod0dT6Gcr_1BC89iZ137/edit?usp=sharing&ouid=103824238975409836013&rtpof=true&sd=true'><div className='p-4 text-cyan-300 active:text-cyan-400'><div className='rounded-sm'>Resume</div></div></a>
      <a href='#contact'><div className={`p-4 transition ease-in-out hover:text-cyan-300 active:text-cyan-400  ${activeSec === 'contact' ? 'text-cyan-300' : ''}`}>Contact me</div></a>
      <a href='#projects'><div className={`p-4 transition ease-in-out hover:text-cyan-300 active:text-cyan-400  ${activeSec === 'projects' ? 'text-cyan-300' : ''}`}>Projects</div></a>
      <a href='#about'><div className={`p-4 transition ease-in-out hover:text-cyan-300 active:text-cyan-400 ${activeSec === 'about' ? 'text-cyan-300' : ''}`}> About</div></a>
    </div>
  )
}



