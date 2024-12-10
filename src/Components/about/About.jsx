import React from 'react'
import './About.css'
import AboutIm from '../../assets/moti.jpg';
import myCv from '../../assets/myCV.pdf';

import Info from './Info';

function About() {
  return (
    <section className="about section" id="about">
        <h1 className="section-tittle">About Me</h1>
        <span className="section-subtittle">My Introduction</span>

        <div className="about-container container grid">
     
          <img src={AboutIm} alt="" className="about-img" />
          <div className="about-data">
            <Info/>

            <p className="about-description">
              Fronted developer, I create web pages with UI/UX 
              user interface,  I have years of experience and 
              my clients are happy with the projects carried out.
            </p>

            <a  download='' href={myCv} className="button button_flex">
              Download CV
            </a>

          </div>
           
        </div>


    </section>
  )
}

export default About