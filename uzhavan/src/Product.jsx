import './Product.css';
import React from 'react';
import { FaCircleMinus,FaCirclePlus,FaIndianRupeeSign,FaCartPlus,FaRegStar,FaMoneyCheckDollar, FaTruck, FaArrowRotateLeft } from "react-icons/fa6";
import {Card,Col,Row,Container,Button, CardGroup} from 'react-bootstrap/';
import { useParams } from 'react-router-dom';



const Product = ({userOrder,productList,handleIncrementItemQuantity,handleDecrementItemQuantity}) => {

    var {id}  = useParams();
    id = Number(id);
    let productSearch = productList.find((item) => item.productID === id)
    let priceListSearch = userOrder.find((item) => item.productID === id) 
    console.log(priceListSearch)

   
    
  return (
    <Container>
        <CardGroup className='product-card'>
            <Row>
                <Col className='col-md-6 col-sm-12 img-fluid rounded mx-auto d-block'>
                    <Card className='border-0'  style={{width:650}}>
                        <Card.Img src={require(`${productSearch.productImage}`)} />
                    </Card>
                </Col>
                <Col className='col-md-6 col-sm-12'>
                    <Card className='border-0'>
                        <Card.Body>
                            <Card.Title>
                                <div className='mt-4'>
                                    <div className='product-title'>{productSearch.productName}</div>
                                </div>
                            </Card.Title>  
                            <Card.Text>
                                <div className='Description'>{productSearch.productDescription}</div> 
                                <Row>
                                    <Col className='col-md-6 col-sm-12 btns'>
                                    <Button variant="outline-danger me-2">Add To Cart  <FaCartPlus /> </Button>
                                    <Button variant="outline-success me-2">Buy Now <FaMoneyCheckDollar /></Button>
                                    <div className='remaining-Product'>
                                        Only {} Items Left ! <span style={{color: "red"}}>Don't Miss it</span></div>
                                        <div style={{marginLeft:'45px'}}> <FaTruck /> &nbsp; Free Delivery</div>
                                        <div className='delivery'>Enter Postal Code for Delivery Availablity</div>
                                        <div style={{marginLeft:'45px'}} className='mt-4'> <FaArrowRotateLeft /> &nbsp; Return Delivery</div>
                                        <div className='delivery'>Free 5 days Delivery Return. <span className='returnRules'>view Details</span></div>
                                    </Col>

                                    <Col className='col-md-6 col-sm-12'>
                                        <div className='product-price'>
                                            <div>Price :&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  <FaIndianRupeeSign />  {productSearch.productPrice}</div>
                                                <div className='purchased-quantity mt-3'>Quantity : &nbsp;&nbsp;&nbsp;&nbsp;
                                                    <div className='product-cart'>
                                                        <div className='remove' onClick={() => handleDecrementItemQuantity(id)}><FaCircleMinus /></div>
                                                        <div className='Quantity'>{priceListSearch.productQuantity}</div>
                                                        <div className='add' onClick={() => handleIncrementItemQuantity(id)}><FaCirclePlus /></div>
                                                    </div>
                                                </div>
                                            <hr/>
                                            <div>Total Amount : &nbsp;&nbsp; {productSearch.productPrice * priceListSearch.productQuantity}</div>
                                            <hr/>
                                            <div className='Description'><FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> (123)</div>        
                                        </div> 
                                    </Col>
                                </Row>                   
                            </Card.Text>  
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </CardGroup>
    </Container>

  )
}

export default Product