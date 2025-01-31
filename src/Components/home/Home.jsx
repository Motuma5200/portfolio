import React from 'react'
import './home.css'
import Social from './Social'
import Data from './Data'
import ScrollHome from './ScrollHome'

function Home() {
  return (
    <section className="home section" id="home">
        <div className="home-container container grid">
            <div className="home-content grid">
                <Social/>

                <div className="home-img"></div>

                <Data/>
            </div>
            <div className="scroll">
               <ScrollHome/>
            </div>
            
        </div>
    </section>
  )
}

export default Home