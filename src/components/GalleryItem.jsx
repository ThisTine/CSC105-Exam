import React, { Component } from 'react'
import {Col} from 'reactstrap'

export default class GalleryItem extends Component {

    isopenhandler = ()=>{
        // this.setState({isOpen:!this.state.isOpen})
        if(this.props.isOpen){
            this.props.setselected(null)
        }else{
        this.props.setselected(this.props.item)

        }
    }
  render() {
      const {item} = this.props
    return (
        <Col xs={6} onClick={this.isopenhandler} > 
        <div className="position-relative" style={{cursor:"pointer",...(this.props.isOpen ? {border:"3px solid red"} : {})}}>
        {this.props.isOpen && <p className='position-absolute top-50 start-50 translate-middle text-white text-bold' style={{zIndex:1,fontSize:"20px"}} >{item.title}</p> }
        {this.props.isOpen && <div className='position-absolute' style={{background:"rgba(0, 0, 0, 0.307)",width:"100%",height:"100%",zIndex:0,backdropFilter:"blur(10px)"}} ></div> }
        <img className='img-fluid' alt={item.title} src={"/images/"+item.url}  />

        </div>
        </Col>
    )
  }
}
