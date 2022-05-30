import React, { useState } from 'react'
import { Form, ModalBody, ModalHeader, Modal, Button, ModalFooter,FormGroup,Input,Label, FormFeedback } from 'reactstrap'
const init = {username:"",comment:"",rating:null}
export default function CommentModal({ isopen, setisopen,id,addcomment }) {
    const [form,setform] = useState({...init})
    const onsubmit = (e)=>{
        e.preventDefault()
        if(form.comment.length>3 || form.username !== "" || form.rating !== null){
            addcomment(id,form)
            setform({...init})
            setisopen(false)
        }
    }
    return (
        <Modal isOpen={isopen}  toggle={()=>setisopen(false)} >
            <ModalHeader toggle={()=>setisopen(false)}>Add comment</ModalHeader>
            <Form inline onSubmit={onsubmit} >

            <ModalBody  >
                    <FormGroup floating>
                        <Input
                            id="username"
                            name="username"
                            placeholder="username"
                            type="text"
                            value={form.username}
                            invalid={form.username===""}
                            onChange={(e)=>setform(val=>({...val,username:e.target.value})) }
                        />
                        <Label for="username">
                            Username <label className='text-danger'>*</label>
                        </Label>
                        <FormFeedback>username is required.</FormFeedback>
                    </FormGroup>

                    <FormGroup floating>
                        <Input
                            id="comment"
                            name="comment"
                            placeholder="comment"
                            type="textarea" 
                            value={form.comment}
                            rows={10}
                            onChange={(e)=>setform(val=>({...val,comment:e.target.value})) }
                            style={{minHeight:"150px"}}
                            invalid={form.comment.length<3}
                            valid={form.comment.length >=3}
                        />
                        <Label for="comment">
                            Comment <label className='text-danger'>*</label>
                        </Label>
                        <FormFeedback>comment is required and must be at least 3 characters.</FormFeedback>

                    </FormGroup>

                    <FormGroup inline className='d-flex gap-4' >
                        <label>Rating <label className='text-danger'>*</label> </label>
                        {[0,1,2,3,4,5].map(item=><div className='d-flex' key={item}>
                            <Input name="fev" checked={item === form.rating} id={"select"+item} type='radio' onClick={()=>setform({...form,rating:item})} /> <label for={"select"+item} > {item}</label>  </div>)}
                    </FormGroup>
                    {form.rating === null && <p className='text-danger'>Rating is required.</p>}

            </ModalBody>
            <ModalFooter>
                <Button onClick={()=>setisopen(false)} type="button" 
                >Close</Button>
                <Button color='primary' 
                disabled={form.comment.length<3 || form.username === "" || form.rating === null}
                type="submit" 
                >Send</Button>
            </ModalFooter>
            </Form>

        </Modal>
    )
}
