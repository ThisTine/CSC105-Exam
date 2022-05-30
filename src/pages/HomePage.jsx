import { Carousel } from 'bootstrap'
import React from 'react'
import { Card, CardBody, CardTitle, Col, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Row, UncontrolledCarousel } from 'reactstrap'
import breakingNews from '../data/breakingNews'
import photos from '../data/photos'

export default function HomePage() {
  return (
    <Container>
        <div className='my-5' >
        <h1>Homepage</h1>
        <hr/>
        </div>

        <Row>
            <Col sx={12} lg={6}  >
            <Card>
                <CardBody>
                <CardTitle><h2>Featured Photo</h2> </CardTitle>
                <div style={{position:"relative",overflow:"hidden"}}>
                <UncontrolledCarousel items={photos.filter(i=>i.feature).map((item,key)=>({altText:"",caption:item.title,key,src:"/images/"+item.url}))} />

                </div>

                </CardBody>
            </Card>
            </Col>
            <Col sx={12} lg={6}>
            <Card>
                <CardBody>
                <CardTitle><h2>Breaking News !</h2> </CardTitle>
                <div style={{position:"relative",overflow:"hidden"}}>
                <ListGroup>
                    {breakingNews.filter(i=>i.feature).map(item=><ListGroupItem key={item.discription} > <ListGroupItemHeading>{item.title}</ListGroupItemHeading> <ListGroupItemText>{item.discription}</ListGroupItemText> </ListGroupItem>)}
                </ListGroup>
                </div>
                </CardBody>
            </Card>
            </Col>
        </Row>

    </Container>
  )
}
