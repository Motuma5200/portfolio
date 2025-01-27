import React from 'react'

function ScrollHome() {
  return (
    <div className='home-scroll-button'>
      <a href="#about" className="home-scroll button-flex">
      <svg className='scroll__icon' height={50} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="direction"><path fill="#6563FF" d="M9.71,10.21,12,7.91l2.29,2.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-1.42,0l-3,3a1,1,0,0,0,1.42,1.42Zm4.58,4.58L12,17.09l-2.29-2.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,1.42,0l3-3a1,1,0,0,0-1.42-1.42Z"></path></svg>
      <span className="home-scroll-name"></span>
      <i class="uis uis-arrow-down home-scroll-arrow"></i>
      </a>
    </div>
  )
}

export default ScrollHome