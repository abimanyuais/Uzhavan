import React from 'react'
import {Row, Col, Card} from 'react-bootstrap';
import { FaCircleMinus,FaCirclePlus,FaIndianRupeeSign,FaCartPlus,FaRegStar, FaStar, FaTag } from "react-icons/fa6";

const Cart = ({listOfOrderItems,handleDecrementItemQuantity, handleIncrementItemQuantity}) => {
    console.log(listOfOrderItems)
  return (
    <Row className="g-4 mt-2">
          {
            listOfOrderItems.map((item) =>
            (
                <>
                    <Col className='col-md-2'>
                        <Card className='border-0' style={{ width: "100px" ,height: "100px"}}>
                            <Card.Img  src={require(`${item.productImage}`)}   className='rounded mx-auto d-block' alt='No image'/>
                        </Card>
                    </Col>
                    <Col className='col-md-3'>
                        <div>{item.productName}</div>
                        <p>{item.productDescription}</p>
                    </Col>
                    <Col className='col-md-2'>
                    <div className='cart'>
                            <div className='remove' onClick={() => handleDecrementItemQuantity(item.productID)}><FaCircleMinus /></div>
                            <div className='Quantity'>{item.productQuantity}</div>
                            <div className='add' onClick={() => handleIncrementItemQuantity(item.productID)}><FaCirclePlus /></div>
                        </div>
                    </Col>
                    <Col className='col-md-4'>
                        <div>{item.productQuantity * item.productPrice}</div>
                    </Col>
                </>
            ))
          }
        </Row>
  )
}

export default Cart