import React from 'react'
import Logo from "../images/memelogo.png"
import "./style.css"
const Header = () => {
  return (
      <div className='header'>
          <div className='logo'>
              <img src={Logo} />
              <h4>Meme Generator</h4>
          </div>
          <div className="text">
          <h5>Built in React</h5>
          </div>
          
    </div>
  )
}

export default Header