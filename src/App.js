import React from 'react';
import Header from './Components/Top/Header'
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/skill/Skills';
import Service from './Components/service/Service';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';
import Testimonal from './Components/testimonals/Testimonal';
import Project from './Components/project/Project';

import './App.css';

function App() {
  return (
    <>
      <Header/>

      <main className='main'>
      <Home/>
      <About/>
      <Skills/>
      <Service/>
      <Project/>
      <Testimonal/>
      <Contact/>
      <Footer/>
      </main>
      
    </>
  );
} 

export default App;
