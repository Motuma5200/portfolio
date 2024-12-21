import React, { useState } from 'react'
import './Header.css'

function Header() {
   const[toggle, showMenu] = useState(false);

  return (

      <header className="header">
        <nav className="nav container">
            <a href='index.html' className='nav-logo'>Motuma</a>
            <div className= {toggle? "nav-menu show_menu" : "nav-menu"}>
                <ul className="nav-list ">

                    <li className="nav-item active-link">
                        <a href="#home" className="nav-link">
                            <i className="uil uil-house-user nav__icon"></i> Home
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#about" className="nav-link ">
                            <i className="uil uil-user nav__icon"></i> About
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#skills" className="nav-link">
                            <i className="uil uil-file-alt nav__icon"></i>Skills
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#services" className="nav-link">
                            <i className="uil uil-briefcase-alt nav__icon"></i>
                            Services
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#Portfolio" className="nav-link">
                            <i className="uil uil-scenery nav__icon"></i>
                            Portfolio
                        </a>
                    </li>

                    <li className="nav-item">
                        <a href="#contact" className="nav-link">
                            <i className="uil uil-message nav__icon"></i>
                            Contact
                        </a>
                    </li>
                </ul>

                <i className="uil uil-times nav_close" onClick={()=>showMenu(!toggle)}></i>
                
            </div>

            <div className="nav__toggle" onClick={()=>showMenu(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
        </nav>
      </header>
  )
}

export default Header