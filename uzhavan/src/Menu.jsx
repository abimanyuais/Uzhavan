import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import './Menu.css'
import 'bootstrap/dist/css/bootstrap.css';


const Menu = () => {
  return (
    <Container fluid>
      <Row>   
        <div className='cover'>
          <div className='para'>More than Faster</div>
          <heading className='Header'>
            <div>Be The Fastest</div>
            <div>In Delivering</div>
            <div>Your <span className='Food'>Food</span></div>
          </heading>
          <p className='mt-3'>Delivery 100% Organic Fruits and Vegitables</p>
        </div>
          
      </Row>
    </Container>

  )
}

export default Menu