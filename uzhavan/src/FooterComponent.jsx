import React from 'react';
import {Row,Container, Col} from 'react-bootstrap/';
import './FooterComponent.css'

const FooterComponent = () =>
{
    return (
        <Container className='footer'>
            <Row>
                <Col className='col-md-3'>
                    <h4> Customer Care </h4>
                    <p>Contact Us</p>
                    <p>FAQs</p>
                    <p>Returns & Exchages</p>
                    <p>Shipping & Handing</p>
                    <p>Damaged or Defected Items </p>
                    <p>Cancelling or Changing an Order</p>
                    <p>Terms of Service</p>
                    <p>Privacy Policy</p>
                </Col>

                <Col className='col-md-3'>
                    <h4> Inside the Company</h4>
                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Wholesale</p>
                    <p>Careers</p>
                </Col>

                <Col className='col-md-3'>
                    <h4> My Account </h4>
                    <p>Sign In / Register</p> 
                    <p>My Wishlist</p>
                    <p>Cart</p>
                </Col>

                <Col className='col-md-3'>
                    <h2> Let Stay Connected </h2>
                    <p>Enter your Email to unlock 10% OFF.</p>
                </Col>

            </Row>
        </Container>
    );
}

export default FooterComponent;