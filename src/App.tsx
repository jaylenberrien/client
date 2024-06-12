import React from 'react';

// import { Fade } from 'react-reveal';

import './index.css';
import { Home } from './pages/Home';
import Nav from './components/Nav';
// import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import EmailBar from './components/EmailBar';
import SocialBar from './components/SocialBar';

function App() {

  document.addEventListener('DOMContentLoaded', function(){
    const container:any = document.getElementById('C-background-effect');
    const cursorHighlight:any = container.querySelector('::before');
    document.addEventListener('mousemove', function(e){
      cursorHighlight.style.top = e.clientY + 'px';
      cursorHighlight.style.top = e.clientX + 'px';
    })
  })


  return (
    <div className='bg-blue-950 text-white scroll-smooth' >
      <Nav />
        <SocialBar />
        <EmailBar/>
        <div className='p-10'>
          <Home />
          <About />
          <Projects/>
          <Contact/>           
        </div>            
    </div>
  );
}

export default App;


