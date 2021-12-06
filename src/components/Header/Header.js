import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header>
      <img
        src='https://uploads-ssl.webflow.com/58d3fe15690e6c3915136560/5b21e6863b657bdeea83db38_VHCG%20New%20Logo%20Black%20on%20White%20256x256.jpg'
        className='header-img'
        />
      <nav>
        <Link to='/'>
          <button className='nav-btn'>Home</button>
        </Link>
        <Link to='/find-vet'>
          <button className='nav-btn'>Find a Vet</button>
        </Link>
        <Link to='/suggestion'>
          <button className='nav-btn'>Make a Suggestion</button>
        </Link>
      </nav>
    </header>
  )
}

export default Header
