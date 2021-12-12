import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import './Header.css'
import { updateActiveKey } from '../../packages/redux/header-slice'
import store from '../../packages/redux/store';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom"


const Header = props => {
  const activeKey = useSelector(state => state.header.activeKey)
  const navigate = useNavigate()

  const handleChange = key => {
    store.dispatch(updateActiveKey(key))
    navigate(`/${key}`)
  }

  return (
    <header>
      <div className='header-logo'>
        <img
          src='https://uploads-ssl.webflow.com/58d3fe15690e6c3915136560/5b21e6863b657bdeea83db38_VHCG%20New%20Logo%20Black%20on%20White%20256x256.jpg'
          className='header-img'
        />
        <h1>Leave it, Chibi</h1>
      </div>
      <Nav variant='pills' activeKey={activeKey} className='mb-2' onSelect={handleChange}>
        <Nav.Item>
          <Nav.Link eventKey='home'>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='find-vet'>Find a Vet</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='suggestion'>Make a Suggestion</Nav.Link>
        </Nav.Item>
      </Nav>
    </header>
  )
}

export default Header
