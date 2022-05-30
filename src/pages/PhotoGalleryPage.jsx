import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row, Button, ListGroup, Input, ListGroupItem, ListGroupItemHeading, ListGroupItemText, ModalBody, Modal, ModalHeader, ModalFooter } from 'reactstrap'
import GalleryItem from '../components/GalleryItem'
import CommentModal from '../modal/CommentModal'
import { connect } from 'react-redux'
import { addcomment, deletecomment } from '../redux/commentStore'
import { addlike } from '../redux/likeStore'
function PhotoGalleryPage({ photos, comments, addcomment, deletecomment, likes, addlike, user }) {
    const [selected, setselected] = useState(null)
    const [isopen, setisopen] = useState(false)
    const ref = useRef()
    const [rating, setrating] = useState(0)
    // const [likes, setlikes] = useState([])
    useEffect(() => {
        if (selected) {
            let rat = 0
            let length = 0
            comments.forEach(item => {
                if (item.pId === selected.id) {
                    rat += item.scores
                    length += 1
                }
            });
            setrating(rat / length)
        }
    }, [selected, comments])
    // const addlike = (id) => {
    //     setlikes(val => [...val, id])
    // }
    // const unlike = (id) => {
    //     setlikes(val => val.filter(item => item !== id))
    // }
    const closemodal = () => {
        setselected(null)
    }

    return (
        <Container>
            {selected && <CommentModal isopen={isopen} setisopen={setisopen} id={selected.id || null} addcomment={addcomment} user={user} />}
            <div className='my-5' >
                <h1 ref={ref}>Gallery</h1>
                <hr />
            </div>
            <div>
                {selected && <Modal isOpen={selected} toggle={closemodal} size='lg' scrollable>
                    <ModalHeader toggle={closemodal} >{selected.title}</ModalHeader>
                    <ModalBody>
                        <Row className='my-3' >
                            <Col xs={12} ><img alt={selected.title} className='img-fluid  shadow' onClick={() => addlike({ id: selected.id })} src={"/images/" + selected.url} /></Col>
                            <Col xs={12} >
                                <h1>{selected.title}</h1>
                                <p>Rating: {rating} </p>
                                <p>Likes: {comments.filter(item => (item.islike && item.pId === selected.id)).length + likes.filter(item => item === selected.id).length}</p>
                                <div className='d-flex gap-3'>
                                    <Button onClick={() => setisopen(true)} className="mb-3" color='primary'>Add comment</Button>
                                    <Input type='button' value="Like" onClick={() => addlike({ id: selected.id })}
                                        className="mb-3 btn btn-primary" color='primary' />
                                </div>
                                <div>
                                    <ListGroup>
                                        {comments.filter(item => (item.self && item.pId === selected.id)).map(item => {
                                             return <ListGroupItem key={item.id} >
                                                <ListGroupItemHeading> {item.avatar && <img className='img-fluid' style={{ borderRadius: "50%" }} src={"https://www.gravatar.com/avatar/" + item.avatar} />} {item.username} (you)</ListGroupItemHeading>
                                                <ListGroupItemText style={{ whiteSpace: "pre-line" }}>{item.comment + `\n`} - {item.scores} score(s)</ListGroupItemText>
                                                <Button color="danger" onClick={() => deletecomment({ id: item.id })} >delete</Button>
                                            </ListGroupItem>
                                        })}
                                        {comments.filter(item => (!item.self && item.pId === selected.id)).map(item => <ListGroupItem key={item.id}>
                                            <ListGroupItemHeading>{item.username}</ListGroupItemHeading> <ListGroupItemText style={{ whiteSpace: "pre-line" }}>{item.comment + `\n`} - {item.scores} score(s) </ListGroupItemText> </ListGroupItem>)}
                                    </ListGroup>
                                </div>
                            </Col>
                        </Row>
                    </ModalBody>
                </Modal>}
            </div>
            <Row className='g-3' >
                {photos.map(item => <GalleryItem key={item.id} item={item} selected={selected} isOpen={selected?.id === item.id} setselected={setselected} />)}
            </Row>
        </Container>
    )
}

export default connect((state) => state, { addcomment, deletecomment, addlike })(PhotoGalleryPage)