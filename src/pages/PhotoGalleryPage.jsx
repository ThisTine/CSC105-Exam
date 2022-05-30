import React, { useEffect, useRef, useState } from 'react'
import { Col, Container, Row, Button, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap'
import GalleryItem from '../components/GalleryItem'
import photos from '../data/photos'
import commentdef from '../data/comments'
import CommentModal from '../modal/CommentModal'
export default function PhotoGalleryPage() {
    const [selected, setselected] = useState(null)
    const [comments, setcomments] = useState(commentdef.map(item => ({ ...item, self: false })))
    const [isopen, setisopen] = useState(false)
    const ref = useRef()
    const [rating, setrating] = useState(0)
    const [likes, setlikes] = useState([])
    useEffect(() => {
        if (selected) {
            window.scrollTo(0, ref.current.offsetTop)
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
    const addcomment = (id, { username, comment, rating }) => {
        setcomments(val => ([{ id: (new Date()).getTime(), pId: id, username, comment, scores: rating, self: true }, ...val]))
    }
    const deletecomment = (id) => {
        setcomments(val => (val.filter(item => item.id !== id)))
    }
    const addlike = (id) => {
        setlikes(val => [...val, id])
    }
    const unlike = (id) => {
        setlikes(val => val.filter(item => item !== id))
    }

    return (
        <Container>
            {selected && <CommentModal isopen={isopen} setisopen={setisopen} id={selected.id || null} addcomment={addcomment} />}
            <div className='my-5' >
                <h1 ref={ref}>Gallery</h1>
                <hr />
            </div>
            <div>
                {selected && <Row className='my-3' >
                    <Col xs={12} lg={6}><img alt={selected.title} className='img-fluid  shadow' src={"/images/" + selected.url} /></Col>
                    <Col xs={12} lg={6}>
                        <h1>{selected.title}</h1>
                        <p>Rating: {rating} </p>
                        <p>Likes: {comments.filter(item => (item.islike && item.pId === selected.id)).length + likes.filter(item => item === selected.id).length}</p>
                        <div className='d-flex gap-3'>
                            <Button onClick={() => setisopen(true)} className="mb-3" color='primary'>Add comment</Button>
                            <Button onClick={likes.filter(item => item === selected.id).length > 0 ? () => unlike(selected.id) : () => addlike(selected.id)} 
                            className="mb-3" color={likes.filter(item => item === selected.id).length > 0 ? "secondary" : 'primary'}>{likes.filter(item => item === selected.id).length > 0 ?"unlike": "Like"}</Button>
                        </div>
                        <div style={{ maxHeight: "500px", overflowY: "scroll" }}>
                            <ListGroup>
                                {comments.filter(item => (item.self && item.pId === selected.id)).map(item => <ListGroupItem key={item.id} >
                                    <ListGroupItemHeading>{item.username} (you)</ListGroupItemHeading>
                                    <ListGroupItemText style={{whiteSpace:"pre-line"}}>{item.comment+`\n`} - {item.scores} score(s)</ListGroupItemText>
                                    <Button color="danger" onClick={() => deletecomment(item.id)} >delete</Button>
                                </ListGroupItem>)}
                                {comments.filter(item => (!item.self && item.pId === selected.id)).map(item => <ListGroupItem key={item.id}>
                                    <ListGroupItemHeading>{item.username}</ListGroupItemHeading> <ListGroupItemText style={{whiteSpace:"pre-line"}}>{item.comment+`\n`} - {item.scores} score(s) </ListGroupItemText> </ListGroupItem>)}
                            </ListGroup>
                        </div>
                    </Col>
                </Row>}
            </div>
            <Row className='g-3' >
                {photos.map(item => <GalleryItem key={item.id} item={item} selected={selected} isOpen={selected?.id === item.id} setselected={setselected} />)}
            </Row>
        </Container>
    )
}
