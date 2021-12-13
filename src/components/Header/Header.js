import React from 'react'
import { Link } from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
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
    <Navbar collapseOnSelect expand='lg' className='navbar' bg='dark' variant='dark'>
      <Container fluid>
      <Navbar.Brand as={Col} md='8'><h1>Leave it, Chibi!</h1></Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav' className='nav-container'>
        <Nav variant='tabs' fill activeKey={activeKey} onSelect={handleChange} className='nav' bg='dark' variant='dark'>
          <Nav.Item>
            <Nav.Link eventKey='' variant='dark'>Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='find-vet'>Find a Vet</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey='suggestion'>Make a Suggestion</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
