
import { useState } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const UserForm = ({handleUserSubmit, editUser}) => {

    const initialState = {
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        address:''
    }

    const [validated,setValidated] = useState(false);
    const [currentUser, setCurrentUser] = useState(initialState);

    if(editUser && currentUser.id !== editUser.id){
        setCurrentUser(editUser);
    } 

    const resetUserForm = () => {
        setCurrentUser(initialState);
        setValidated(false);
    }

    const handleCurrentUserChange = (e) => {
        setCurrentUser(prev => ({...prev, [e.target.name]:e.target.value}))
    } 

    const handleCurrentUserSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        if(form.checkValidity() === false){
            e.stopPropagation();
            setValidated(true);
            return;
        }

        handleUserSubmit(currentUser);
        resetUserForm();
    }


    return (
        <Container>
            <Form noValidate validated={validated} onSubmit={handleCurrentUserSubmit}>
                <Row className='mb-3'>
                    <Form.Group as={Col} sm="12" md="6" controlId='firstName'>
                        <Form.Label className='fw-bold'>First Name</Form.Label>
                        <Form.Control type='text' name='firstName' placeholder='First Name' required value={currentUser.firstName} onChange={handleCurrentUserChange}/>
                        <Form.Control.Feedback type='invalid'>First Name is Required!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} sm="12" md="6" controlId='lastName'>
                        <Form.Label className='fw-bold'>Last Name</Form.Label>
                        <Form.Control type='text' name='lastName' placeholder='Last Name' required value={currentUser.lastName} onChange={handleCurrentUserChange}/>
                        <Form.Control.Feedback type='invalid'>Last Name is Required!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} sm="12" md="6" controlId='email'>
                        <Form.Label className='fw-bold'>Email</Form.Label>
                        <Form.Control type='email' name='email' placeholder='Email' required value={currentUser.email} onChange={handleCurrentUserChange}/>
                        <Form.Control.Feedback type='invalid'>Email is Required!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} sm="12" md="6" controlId='phone'>
                        <Form.Label className='fw-bold'>Phone</Form.Label>
                        <Form.Control type='number' name='phone' placeholder='Contact No' required value={currentUser.phone} onChange={handleCurrentUserChange}/>
                        <Form.Control.Feedback type='invalid'>Phone is Required!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Form.Group as={Col} sm="12" md="6" controlId='address'>
                        <Form.Label className='fw-bold'>Address</Form.Label>
                        <Form.Control as='textarea' name='address' placeholder='Address' required value={currentUser.address} onChange={handleCurrentUserChange}/>
                        <Form.Control.Feedback type='invalid'>Address is Required!</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Row className='mb-3'>
                    <Col xs='4' sm='2'>
                        <Button type='submit' variant='primary'>{editUser ? 'Edit' : 'Save'} User</Button>
                    </Col>
                    <Col xs='4' sm='2'>
                        <Button type='button' variant='danger' onClick={resetUserForm}>Reset</Button>
                    </Col>
                </Row>

            </Form>
        </Container>
    )
}

UserForm.propTypes = {
    handleUserSubmit: PropTypes.func,
    editUser: PropTypes.object
}

export default UserForm;