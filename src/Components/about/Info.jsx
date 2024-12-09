import React from 'react'

function Info() {
  return (
    <div className="about-info grid">
        <div className="about-box ">
        <i class="uil uil-award  about-icon"></i>
        <h3 className="about-tittle">Experience</h3>
        <span className="about-subtittle">2 Years Working</span>
        </div>

        <div className="about-box">
        <i class="uil uil-briefcase-alt about-icon"></i>
        <h3 className="about-tittle">Completed</h3>
        <span className="about-subtittle">10+ Projects </span>
        </div>

        <div className="about-box">
        <i class="uil uil-cloud-question about-icon"></i>

        <h3 className="about-tittle">Support</h3>
        <span className="about-subtittle">Online 24/7</span>
        </div>
       

    </div>
  )
} 

export default Info