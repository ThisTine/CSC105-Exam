import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'

export default function Footer() {
  return (
    <footer style={{background:"rgb(248,249,250)"}} className="p-3" >
        <Container>
        <p className='text-center m-0' >Copyright: Thistine.</p>
        <Row>
            <Col> <Link to="/" className='nav-link text-center' >Home</Link></Col>
            <Col> <Link to="/about" className='nav-link text-center' >About Me</Link></Col>
            <Col> <Link to="/gallery" className='nav-link text-center' >Gallery</Link></Col>
        </Row>
        </Container>
    </footer>
  )
}
