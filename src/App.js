import React from 'react';
import Header from './Components/Top/Header'
import Home from './Components/home/Home';
import About from './Components/about/About';

import './App.css';

function App() {
  return (
    <>
      <Header/>

      <main className='main'>
      <Home/>
      <About/>
      </main>
      
    </>
  );
} 

export default App;
