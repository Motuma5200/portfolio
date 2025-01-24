import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer container">
         <h1 className="footer__tittle">Motuma</h1>
        <div className="content grid">

        <div className="footer__container container">
            
            
            <ul className="footer__list ">
                <li>
                    <a href="#home" className="footer__link"> Home</a>
                </li>

                <li>
                    <a href="#skills" className="footer__link">Skill</a>
                </li>

                <li>
                    <a href="#project" className="footer__link">Project</a>
                </li>

                <li>
                    <a href="#testimonal" className="footer__link">Testimonal</a>
                </li>
            </ul>
            
            </div>
 <div className="footer__social ">

    <a href="www.linkedin.com/in/motuma-rabuma-002364333"
     className="footer-social-icon" target='_black'>
    <i class="uil uil-linkedin"></i>
    </a>

    <a href="https://github.com/Motuma5200" 
    className="footer-social-icon" target='_black'>
    <i class="uil uil-github"></i>
    </a>

    <a href="https://www.youtube.com/@MoaJiruu" 
    className="footer-social-icon" target='_black'>
    <i class="uil uil-youtube"></i>
    </a>

    <a href="https://web.facebook.com/motuma.rebuma"
     className="footer-social-icon" target='_black'>
    <i class="uil uil-facebook"></i>
    </a>
   </div>

     <div className="footer__copy">
        &#169; 2024 Motuma.  All rights reserved
     </div>
       

        </div>
    

      
    </footer>
  )
}
