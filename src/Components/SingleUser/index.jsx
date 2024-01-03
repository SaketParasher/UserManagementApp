
import PropTypes from 'prop-types';
import ListGroup  from "react-bootstrap/ListGroup"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const SingleUser = ({user, handleUser}) => {


    return (
        <ListGroup.Item>
            <Row>
                <Col xs={6} className='d-flex justify-content-center align-items-center fw-bold'>{user.firstName +' '+ user.lastName}</Col>
                <Col xs={3}><Button variant='info' onClick={() => handleUser(user.id,'edit')}>EDIT</Button></Col>
                <Col xs={3}><Button variant='danger' onClick={() => handleUser(user.id,'delete')}>DELETE</Button></Col>
            </Row>
        </ListGroup.Item>
    )
}

SingleUser.propTypes = {
    user: PropTypes.shape({
        id:PropTypes.number,
        firstName:PropTypes.string,
        lastName:PropTypes.string
    }),
    handleUser:PropTypes.func
} 

export default SingleUser;