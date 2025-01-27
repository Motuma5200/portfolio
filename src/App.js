import React, { createContext, useState } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Top/Header'
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/skill/Skills';
import Service from './Components/service/Service';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Testimonal from './Components/testimonals/Testimonal';
import Project from './Components/project/Project';
import GitHubRepos from './Components/API/GitHubRepo';

import './App.css';

export const ThemeContext = createContext();

function App() {

     const [theme, setTheme] = useState('light')
  
      const toggleTheme = ()=>{
        setTheme((curr) => (curr === 'light' ? "dark" : 'light'))
      }

  return (
    <div className='App' id = {theme} >

    <ThemeContext.Provider value= {{theme, toggleTheme}}>
             <Router>
           <Header/> 
           
           <main className='main'>

           <Routes>
              <Route path='/' element = { <><Home/> <About/> <Contact/> </>} />
              <Route path='/about' element = {<><About/> <Skills/> </>} />
              <Route path='/skills' element = {<><Skills/>  <Service/></>} />
              <Route path='/services' element = { <><Service/> <Project/> </>} />
              <Route path='/project' element = { <><Project/> <Testimonal/> <GitHubRepos/> </>} />
              <Route path='/testimonal' element = { <><Testimonal/> <Contact/> </>} />
              <Route path='/contact' element = {<><Contact/></>} />


            </Routes>

            <button className='themeButton' onClick={toggleTheme}> {theme ==='light'? <i class="uil uil-moon"></i> : <i class="uil uil-sun"></i> }  </button>

            <Footer/>
            
           </main>
           </Router>
    </ThemeContext.Provider>

      
    </div>
  );
} 

export default App;
