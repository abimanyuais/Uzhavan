import React from 'react';
import { ChangeEvent, useState } from "react";
import {Button,Nav,Navbar,Container,Row,Col,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { FaCartPlus,FaSignInAlt } from "react-icons/fa";
import './NavigationBar.css';
import CartComponent from './CartComponent';
import { Link } from 'react-router-dom';


const NavigationBar = ({totalOrder,handleSearch}) => {
    const [inputText, setInputText] = useState("");
    const handleChange = (e) => {
        // 👇 Store the input value to local state
        setInputText(e.target.value);
      };
      const [showCart, setShowCart] = useState(true);
      const toggleShowCart = () => setShowCart(!showCart);
      
  return (
    <div>
      <Navbar fixed="top" bg="light" data-bs-theme="light" className='navbar navbar-inverse navbar-fixed-top'>
            <Container fluid>
                <Link to={'/'} className='nav-link'><Navbar.Brand style={{color:"rgba(245,71,72,255)"}}>UZHAVAN</Navbar.Brand></Link>
                {/* <Nav.Item>
                    <div className='delivery-time'>Delivery in 16 minutes</div>
                    <p className='address mt-1'>HG, Sree laxmi mahal...</p>
                </Nav.Item> */}
                <Row className="justify-content-md-center">
                    <Nav className='me-auto nav-items'>
                        <Link to={'/FruitsComponent'}  className='nav-link' style={{color:"rgba(245,71,72,255)"}} id='fruits'>Fruits</Link>
                        <Link to={'/VegitableComponent'} className='nav-link' id='vegitables'>Vegitables</Link>
                        <Nav.Link  className='nav-link' href="#pricing" id='grocerys'>Grocerys</Nav.Link>
                    </Nav>
                </Row>

                <Form inline>
                    <Row>
                        <Col xs="auto">
                            <Form.Control type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} onKeyUp={() => handleSearch(inputText)}/>
                        </Col>
                        <Col xs="auto">
                            <Button variant="outline-success me-2" type="button"><FaSignInAlt /></Button>
                            <Link to={'/CartComponent'}><Button variant="btn btn-danger me-2" onClick={toggleShowCart}><FaCartPlus /><span className='badge badge-pill badge-danger'>{totalOrder}</span></Button></Link>
                        </Col>
                    </Row>
                </Form>
            </Container>
      </Navbar>
     
         {/* <CartComponent 
         showCart = {showCart}
         toggleShowCart = {toggleShowCart}
       /> */}
   
      
     
    </div>   
    
  )
}

export default NavigationBar