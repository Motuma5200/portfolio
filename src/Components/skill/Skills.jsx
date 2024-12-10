 import React from 'react'
 import './Skills.css'
 import Frontend from './Frontend'
 import Backend from './Backend'
 
 function Skills() {
   return (
     <section className="skills section" id="skills">
         <h1 className="section-tittle">Skills</h1>
         <span className="section-subtittle">My Technical Level</span>

         <div className="skills-container container grid">
            <Frontend/>
            <Backend/>

         </div>

     
     </section>
   )
 }
 
 export default Skills