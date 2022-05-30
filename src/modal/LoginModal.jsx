import { useState } from "react"
import {Modal, Button, Form, FormGroup, Input, ModalBody, ModalFooter, ModalHeader,Label } from "reactstrap"

const LoginModal = ({isopen,onclose,login})=>{
    const [form,setform] = useState({email:"",username:""})
    const onsubmit = (e)=>{
        e.preventDefault()
        login({...form})
        onclose()
    }
    return(
        <Modal isOpen={isopen} toggle={onclose} >
            <ModalHeader toggle={onclose} >Login</ModalHeader>
            <Form onSubmit={onsubmit}>

            <ModalBody>
                    <FormGroup floating>
                    <Input
                        id="username"
                        name="username"
                        placeholder="username"
                        type="text"
                        required
                        onChange={e=>{setform({...form,username:e.target.value})}}
                    />
                    <Label for="username">
                        Username
                    </Label>
                    </FormGroup>
                    <FormGroup>
                    <FormGroup floating>
                    <Input
                        id="email"
                        name="email"
                        placeholder="email"
                        type="email"
                        required
                        onChange={e=>{setform({...form,email:e.target.value})}}
                        
                    />
                    <Label for="username">
                        Email
                    </Label>
                    </FormGroup>
                    </FormGroup>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" type="submit" >Login</Button>
            </ModalFooter>
            </Form>

        </Modal>
    )
}

export default LoginModal