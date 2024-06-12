import React from 'react'

export default function SocialBar () {
  return (
    <div className=' w-20 fixed left-0 bottom-0 bg-blue-950 text-slate-300 p-5 flex flex-col-reverse '>
        <ul>
            <li className='m-4 transform hover:-translate-y-1 hover:text-cyan-300 active:text-cyan-400 transition ease-in-out'>
                <a href='https://github.com/jaylenberrien'>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" height='18' width='18' viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round" className="feather feather-github"><title>My GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>    
            </li>
            <li className='m-4 transform hover:-translate-y-1 hover:text-cyan-300 active:text-cyan-400 transition ease-in-out'>
                <a href='https://www.linkedin.com/in/jaylen-berrien/'>
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" height='18' width='18' viewBox="0 0 22 22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-linkedin"><title>My LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
            </li>
            <li className='m-4 transform hover:-translate-y-1 hover:text-cyan-300 active:text-cyan-400 transition ease-in-out'>
                <a href='https://www.youtube.com/channel/UCwV47gZWdJ7PZEwlWZePj2g'>
                    <svg fill="white" role='img' width="20px" height="20px" viewBox="13 80 230 110" id="Flat" stroke="currentColor" stroke-width="13" stroke-linecap="round" xmlns="http://www.w3.org/2000/svg"><title>My Youtube Channel</title><path d="M162.21875,124.67188l-48-32A3.99967,3.99967,0,0,0,108,96v64a3.99987,3.99987,0,0,0,6.21875,3.32812l48-32a3.99979,3.99979,0,0,0,0-6.65624ZM116,152.52588V103.47412L152.78906,128Zm114.46-81.7207a19.95588,19.95588,0,0,0-12.06934-13.62012C184.59766,44.19873,130.272,44.397,128.02539,44.40771c-2.29443-.01318-56.62207-.20947-90.416,12.77735A19.95556,19.95556,0,0,0,25.54053,70.80469C23.0127,80.50928,20,98.30957,20,128c0,29.69141,3.0127,47.49121,5.54,57.19482a19.95588,19.95588,0,0,0,12.06934,13.62012c33.793,12.98633,88.11865,12.791,90.36523,12.77735.11279.00048.35059.002.707.002,6.88379,0,57.57764-.43164,89.709-12.7793a19.95556,19.95556,0,0,0,12.06885-13.61963C232.9873,175.49072,236,157.69043,236,128,236,98.30859,232.9873,80.50879,230.46,70.80518Zm-7.74219,112.37353a11.9384,11.9384,0,0,1-7.19677,8.16846c-32.37452,12.44092-86.9458,12.25342-87.54639,12.24512-.54981-.00049-55.12207.19531-87.49609-12.24512a11.93961,11.93961,0,0,1-7.19629-8.16895C30.87207,173.92676,28,156.84424,28,128c0-28.84326,2.87256-45.92676,5.28223-55.17871A11.9384,11.9384,0,0,1,40.479,64.65283c32.37452-12.44092,86.94825-12.24267,87.54639-12.24512.5459-.00634,55.12158-.19628,87.49609,12.24512a11.93961,11.93961,0,0,1,7.19629,8.169C225.12793,82.07324,228,99.15576,228,128,228,156.84326,225.12744,173.92676,222.71777,183.17871Z" /></svg>
                </a>
            </li>
        </ul>
    </div>
  )
}

