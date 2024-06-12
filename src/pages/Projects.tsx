import React, {useState} from 'react'
import imgWW from '../imgs/img-ww.png';
import { Blurhash } from 'react-blurhash';
import { motion } from 'framer-motion'


export default function Projects () {

  const [isLoading, setIsLoading] = useState(false)
  const img = new Image()
  img.onload = () =>{
    setIsLoading(true)
  }

  // const imgFunc = function(){
  //   {!isLoading && (<Blurhash hash='L3P%O.?b~q%M00xu00s:00D%M{Ri' width='100' height="100" resolutionX={32} resolutionY={32} punch={1} />)} {isLoading && (<img src={imgWW}/>)}
  // }

  return (
    
    <div id='projects' className='min-h-screen flex flex-col mx-20 p-10 text-slate-300 -mt-32'> 
        <p className='font-bold text-2xl'>Some Things That I've Worked On</p>
        <motion.div
          initial={{ opacity:0, scale:0.8, translateY:100}}
          whileInView={{ opacity:1, scale:1, translateY:0}}
          viewport={{ once: true, amount:0.4}}
          transition={{duration:0.8, ease:'easeInOut'}}
          className='flex mt-8'
        >
          <div className='inline-block mr-5'>
            <h3 className='text-cyan-300 text-sm'>Top Project</h3>
            <p className='font-bold text-xl'>Wordle Game</p>
            <div>{!isLoading && (<Blurhash hash='L3P%O.?b~q%M00xu00s:00D%M{Ri' width='100' height="100" resolutionX={32} resolutionY={32} punch={1} />)} { true && (<img src={imgWW} className='preview-size'/>)}</div>
          </div>
          <div className='inline-block my-12 text-lg'>
            <p className='w-4/6'>This is my version of the game wordle. I made this a while ago when I was still in my SWE Program. It involved heavy use of the DOM. The main difficulty was the logic of win and lose conditions. </p>
              <ul className='mt-4'>
                <li className='bg-blue- border-2 border-cyan-300 text-cyan-300 border-1 rounded-md w-24 text-center mr-1 px-1 inline '>HTML</li>
                <li className='bg-blue- border-2 border-cyan-300 text-cyan-300 border-1 rounded-md w-24 text-center mr-1 px-1 inline '>CSS</li>
                <li className='bg-blue- border-2 border-cyan-300 text-cyan-300 border-1 rounded-md w-24 text-center mr-1 px-1 inline '>JavaScript</li>
              </ul>
              <ul className=''>
                <li className='inline-block transition ease-in-out mr-4 transform hover:-translate-y-1 hover:text-cyan-300 active:text-cyan-400'><a href='https://jaylenberrien.github.io/wordle-project/'><svg viewBox="0 0 21 19"  height='21' width='21' fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Interface / External_Link"> <path id="Vector" d="M10.0002 5H8.2002C7.08009 5 6.51962 5 6.0918 5.21799C5.71547 5.40973 5.40973 5.71547 5.21799 6.0918C5 6.51962 5 7.08009 5 8.2002V15.8002C5 16.9203 5 17.4801 5.21799 17.9079C5.40973 18.2842 5.71547 18.5905 6.0918 18.7822C6.5192 19 7.07899 19 8.19691 19H15.8031C16.921 19 17.48 19 17.9074 18.7822C18.2837 18.5905 18.5905 18.2839 18.7822 17.9076C19 17.4802 19 16.921 19 15.8031V14M20 9V4M20 4H15M20 4L13 11"stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g><title>Visit live site</title></svg></a></li>
                <li className='inline-block transition ease-in-out mr-4 transform hover:-translate-y-1 hover:text-cyan-300 active:text-cyan-400'><a href='https://github.com/jaylenberrien/wordle-project?tab=readme-ov-file'><svg xmlns="http://www.w3.org/2000/svg" role="img" height='18' width='18' viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><title>View code</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                <li className='inline-block transition ease-in-out transform hover:-translate-y-1 hover:text-cyan-300 active:text-cyan-400'><a href=''><svg fill="white" role='img' width="30px" height="30px" viewBox="0 0 300 130" id="Flat" stroke="currentColor" stroke-width="10" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"> <title>Watch video breakdown</title><path d="M162.21875,124.67188l-48-32A3.99967,3.99967,0,0,0,108,96v64a3.99987,3.99987,0,0,0,6.21875,3.32812l48-32a3.99979,3.99979,0,0,0,0-6.65624ZM116,152.52588V103.47412L152.78906,128Zm114.46-81.7207a19.95588,19.95588,0,0,0-12.06934-13.62012C184.59766,44.19873,130.272,44.397,128.02539,44.40771c-2.29443-.01318-56.62207-.20947-90.416,12.77735A19.95556,19.95556,0,0,0,25.54053,70.80469C23.0127,80.50928,20,98.30957,20,128c0,29.69141,3.0127,47.49121,5.54,57.19482a19.95588,19.95588,0,0,0,12.06934,13.62012c33.793,12.98633,88.11865,12.791,90.36523,12.77735.11279.00048.35059.002.707.002,6.88379,0,57.57764-.43164,89.709-12.7793a19.95556,19.95556,0,0,0,12.06885-13.61963C232.9873,175.49072,236,157.69043,236,128,236,98.30859,232.9873,80.50879,230.46,70.80518Zm-7.74219,112.37353a11.9384,11.9384,0,0,1-7.19677,8.16846c-32.37452,12.44092-86.9458,12.25342-87.54639,12.24512-.54981-.00049-55.12207.19531-87.49609-12.24512a11.93961,11.93961,0,0,1-7.19629-8.16895C30.87207,173.92676,28,156.84424,28,128c0-28.84326,2.87256-45.92676,5.28223-55.17871A11.9384,11.9384,0,0,1,40.479,64.65283c32.37452-12.44092,86.94825-12.24267,87.54639-12.24512.5459-.00634,55.12158-.19628,87.49609,12.24512a11.93961,11.93961,0,0,1,7.19629,8.169C225.12793,82.07324,228,99.15576,228,128,228,156.84326,225.12744,173.92676,222.71777,183.17871Z" /></svg></a></li>
              </ul>
          </div>     
        </motion.div>
    </div>
  )
}

