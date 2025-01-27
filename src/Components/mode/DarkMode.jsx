import React from 'react'
import './DarkMode.css'

function DarkMode() {
  return (
    
    <div className="dark__mode">
        <input type="checkbox"
         className="dark__mode-input"
         id='dark__mode-toggle' 
        />
        <label for="dark__mode-toggle" className="dark__mode-label">
        <i class="uis uis-sun"></i>
        <i class="uim uim-moon"></i>
        </label>
    </div>
  )
}

export default DarkMode