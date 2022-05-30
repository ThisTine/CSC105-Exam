import React from 'react'
import { Col, Container, NavLink, Row } from 'reactstrap'

export default function Footer({setpage}) {
  return (
    <footer style={{background:"rgb(248,249,250)"}} className="p-3" >
        <Container>
        <p className='text-center m-0' >Copyright: Thistine.</p>
        <Row>
            <Col><NavLink className='text-center' onClick={()=>setpage("home")} >Home</NavLink></Col>
            <Col><NavLink className='text-center' onClick={()=>setpage("about")} >About Me</NavLink></Col>
            <Col><NavLink className='text-center' onClick={()=>setpage("gallery")} >Gallery</NavLink></Col>
        </Row>
        </Container>
    </footer>
  )
}
