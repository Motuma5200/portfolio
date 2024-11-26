import React from 'react';
import Header from './Components/Top/Header'
import Home from './Components/home/Home';

import './App.css';

function App() {
  return (
    <>
      <Header/>

      <main className='main'>
      <Home/>
      </main>
      
    </>
  );
} 

export default App;
