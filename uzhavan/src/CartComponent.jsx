import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';
import Cart from './Cart';
const CartComponent = ({userOrder, productList, handleIncrementItemQuantity, handleDecrementItemQuantity}) => 
{

  let listOfOrderItems = [];
  for(let i = 0; i < userOrder.length; i++)
  {
    listOfOrderItems.push(
      {
        ...(productList.find((items) => items.productID === userOrder[i].productID)),...userOrder[i]
      })
  }
  // productList.map((item, i) => Object.assign({}, item, userOrder[i]));    
  return (
    <Container>
        <Row>
          <h3>Cart</h3>
        </Row>
        <Row>
          <Col className='col-md-6'>
            <div>PRODUCT</div>
          </Col>
          <Col className='col-md-3'>
            <div>Quantity</div>
          </Col>
          <Col className='col-md-3'>
            <div>PRICE</div>
          </Col>
        </Row>
        <br/>
        <Cart 
        listOfOrderItems = {listOfOrderItems}
        />

    </Container>
  )
}

export default CartComponent