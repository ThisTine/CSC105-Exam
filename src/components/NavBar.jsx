import React, { useState } from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'
import {login,logout} from '../redux/userStore'
import {Navbar,Collapse,NavItem,NavbarBrand,NavbarToggler,Nav, NavbarText, Button, DropdownToggle,Dropdown, DropdownItem, DropdownMenu} from 'reactstrap'
import LoginModal from '../modal/LoginModal'
import md5 from 'md5'

 function NavBar({login,logout,user}) {
    const [isOpen,setIsOpen] = useState(false)
    const [isopenlogin,setisopenlogin] = useState(false)
    const [isdrop,setisdrop] = useState(false)
    const onclose = ()=>{
      setisopenlogin(false)
    }
    const onopen = ()=>{
      setisopenlogin(true)
    }
  return (
    <Navbar
        color="light"
        expand="md"
        light
      >
        <LoginModal isopen={isopenlogin} onclose={onclose} login={login} />
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
          {user.username ? 
            <Dropdown isOpen={isdrop} toggle={()=>setisdrop(val=>!val)} >
              <DropdownToggle caret>
              <img className='img-fluid' width={30} style={{borderRadius:"50%"}} 
               src={`https://www.gravatar.com/avatar/${md5(String(user.email).trim().toLowerCase())}`} />  {user.username} 
              </DropdownToggle>
              <DropdownMenu container={"body"}>
              <DropdownItem onClick={()=>logout()} >Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            :
             <Button onClick={onopen} >
              Login
          </Button>
          }
        </Collapse>
      </Navbar>
  )
}

export default connect(state=>state,{login,logout})(NavBar)