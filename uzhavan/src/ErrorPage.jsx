import React from 'react'
import {Card,Col,Row,Container,Button, CardGroup} from 'react-bootstrap/';
import './ErrorPage.css'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (

    <Container fluid  className='error-fullBody'>
      <div className='error-body'>
        <div className='error-title'>404</div>
        <div className='error-para'>WE ARE SORRY, BUT THE PAGE YOU REQUEST WAS NOT FOUND</div>
        <Link to={`/`}><Button type='button' variant="outline-light me-2 mt-4">Home Page</Button></Link>
      </div>
    </Container>
    
    
  )
}

export default ErrorPage