import React, {  useState } from 'react'
import './Header.css'
import { Link, useLocation } from 'react-router-dom';


function Header() {
   const [toggle, showMenu] = useState(false);

   const location = useLocation();

   
  return (

    <header className='header'>
        <nav className="nav container">
            <a href='index.html' className='nav-logo'>Motuma</a>
            <div className= {toggle? "nav-menu show_menu" : "nav-menu"}>
                <ul className="nav-list ">

                    <li className={`nav-item ${location.pathname === '/' ? 'active-link' : ''}`}>

                        <Link to="/" className="nav-link">
                        <i className="uil uil-house-user nav__icon"></i> Home
                        </Link>
                       
                    </li>

                    <li className={`nav-item ${location.pathname === '/about' ? 'active-link' : ''}`}>
                       <Link to="/about" className="nav-link">
                       <i className="uil uil-user nav__icon"></i> About
                        </Link>
                       
                    </li>

                    <li className={`nav-item ${location.pathname === '/skills' ? 'active-link' : ''}`}>
                        <Link to="/skills" className="nav-link">
                        <i className="uil uil-file-alt nav__icon"></i>Skills
                        </Link>

                    </li>

                    <li className={`nav-item ${location.pathname === '/services' ? 'active-link' : ''}`}>
                      <Link to="/services" className="nav-link">
                      <i className="uil uil-briefcase-alt nav__icon"></i>
                      Services
                        </Link>
                    </li>

                    <li className={`nav-item ${location.pathname === '/project' ? 'active-link' : ''}`}>
                        <Link to="/project" className="nav-link">
                        <i className="uil uil-scenery nav__icon"></i>
                        Projects
                        </Link>
                       
                    </li>

                    <li className={`nav-item ${location.pathname === '/testimonal' ? 'active-link' : ''}`}>
                       <Link to="/testimonal" className="nav-link">
                          <i className="uil uil-scenery nav__icon"></i>
                             Testimonial
                        </Link>
                       
                    </li>

                    <li className={`nav-item ${location.pathname === '/contact' ? 'active-link' : ''}`}>
                         <Link to="/contact" className="nav-link">
                            <i className="uil uil-message nav__icon"></i>
                            Contact
                        </Link>
                       
                    </li>
                </ul>

               

                <i className="uil uil-apps nav_close" onClick={()=>showMenu(!toggle)}></i>
                
            </div>


                          
        </nav>
      </header>
  )
}

export default Header