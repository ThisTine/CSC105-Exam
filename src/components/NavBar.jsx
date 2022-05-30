import React, { useState } from 'react'
import {Navbar,Collapse,NavItem,NavLink,NavbarBrand,NavbarToggler,Nav} from 'reactstrap'

export default function NavBar({setpage}) {
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
              <NavLink onClick={()=>setpage("home")}>
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={()=>setpage("about")}>
                About Me
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={()=>setpage("gallery")}>
                Gallery
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
  )
}
