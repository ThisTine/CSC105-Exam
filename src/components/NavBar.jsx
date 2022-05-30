import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar,Collapse,NavItem,NavbarBrand,NavbarToggler,Nav} from 'reactstrap'

export default function NavBar() {
    const [isOpen,setIsOpen] = useState(false)
  return (
    <Navbar
        color="light"
        expand="md"
        light
      >
        <NavbarBrand href='/'>
          Exam
        </NavbarBrand>

        <NavbarToggler onClick={()=>setIsOpen((val)=>!val)} />
        <Collapse navbar isOpen={isOpen}>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
            <NavLink to="/" className='nav-link' >Home</NavLink>
            </NavItem>
            <NavItem>
            <NavLink to="/about" className='nav-link' >About</NavLink>

            </NavItem>
            <NavItem>
            <NavLink to="/gallery" className='nav-link' >Gallery</NavLink>

            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  )
}
