import React from 'react'
import './Header.css'

function Header() {
  return (
      <header className="header">
        <nav className="nav container">
            <a href='index.html' className='nav-logo'>Motuma</a>
            <div className="nav-menu">
                <ul className="nav-list grid">

                    <li className="nav-item">
                        <a href="#home" className="nav-link">
                            <i class="uil uil-house-user"></i> Home
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

                <i className="uil uil-times nav_close"></i>
                
            </div>

            <div className="nav__toggle">
                    <i className="uil uil-apps"></i>
                </div>
        </nav>
      </header>
  )
}

export default Header