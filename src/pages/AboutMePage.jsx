import React from 'react'
import { Container,Row,Col, Card } from 'reactstrap'

const fevsubs = [
  {
    title:"Web Developing (CSC105)",
    desc:"I like CSC105 because this class is very practical and very fun !"
  },
  {
    title:"Data structure (CSC209)",
    desc:"I like CSC209 because this class run teach me to think in a smart way in order to work smarter !"
  },
  {
    title:"Programming Paradam",
    desc:"I like this class because this class show me the varity of programming languages !"
  },
]

const fevmovs = [
  {
    title:"The Shawshank Redemption",
    desc:"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency."
  },
  {
    title:"The Godfather",
    desc:"The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son."
  },
  {
    title:"The Dark Knight",
    desc:"When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
  },
]

export default function AboutMePage() {
  return (
    <Container>
      <Card>
      <div className='d-flex flex-column align-items-center mt-2 gap-3' >
      <h1 className='mt-3'>Hello, there.</h1>
      <img className='img-thumbnail' style={{borderRadius:"50%",height:"250px",width:"fit-content"}} src="/images/me.jpg" />
      <p>It's Tine, A student who is actually a student.</p>
      </div>
      </Card>


      <Row className='g-3 my-3'>
      <Col xs={12}   style={{borderRadius:"10px"}} >
        <Card className='shadow-sm p-3 '>
        <h2>Sittichok Ouamsiri</h2>
        <h3>Education:</h3>
        <Container>
        <h5>College: King Mongkut’s University of Technology Thonburi(KMUTT) </h5>
        <h5>High/mid School: Phanomsarakham, Phanom Adun Witthaya </h5>
        <h5>Elementry: Chutatip's school </h5>
        </Container>
        </Card>

      </Col>
      <Col xs={12} md={6} style={{borderRadius:"10px"}} >
        <Card className='shadow-sm p-3 ' >
        <h3>Favorite Subjects:</h3>
        <Container>
        {fevsubs.map(item=><div key={item.title}>
          <h5>{item.title} : </h5>
        <p>{item.desc}</p>
          </div>)}

        </Container>
        </Card>

      </Col>
      <Col  xs={12} md={6}   style={{borderRadius:"10px"}} >
        <Card className='shadow-sm p-3'>
        <h3>Favorite Movies:</h3>
        <Container>
        {fevmovs.map(item=><div key={item.title}>
          <h5>{item.title} : </h5>
        <p>{item.desc}</p>
          </div>)}
        </Container>
        </Card>

      </Col>
      </Row>

    </Container>
  )
}
