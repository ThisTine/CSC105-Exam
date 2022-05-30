import React from 'react'
import { Container } from 'reactstrap'
import NavBar from './NavBar'

export default function Header({setpage}) {
    
  return (
    <header className='bg-primary' >
    <NavBar setpage={setpage} />
    <Container>
    <h2 className='py-5 text-white' >CSC 105: Introduction to web development's Exam !</h2>
    </Container>
    </header>
  )
}
