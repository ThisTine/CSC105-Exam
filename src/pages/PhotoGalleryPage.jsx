import React, { useEffect, useRef, useState } from 'react'
import {  Col, Container,Row } from 'reactstrap'
import GalleryItem from '../components/GalleryItem'
import photos from '../data/photos'
export default function PhotoGalleryPage() {
  const [selected,setselected] = useState(null)
  const ref = useRef()
  useEffect(()=>{
    if(selected)
    window.scrollTo(0, ref.current.offsetTop)   
  },[selected])

    return (
    <Container>
        <div className='my-5' >
        <h1 ref={ref}>Gallery</h1>
        <hr/>
        </div>
        <div>
            {selected && <Row className='my-3' >
                <Col xs={12} lg={6}><img alt={selected.title} className='img-fluid  shadow' src={"/images/"+selected.url} /></Col>
                <Col xs={12} lg={6}><h1>{selected.title}</h1></Col>
            </Row>}
        </div>
        <Row className='g-3' >
            {photos.map(item=><GalleryItem key={item.id} item={item} selected={selected} isOpen={selected?.id === item.id} setselected={setselected} />)}
        </Row>
    </Container>
  )
}
