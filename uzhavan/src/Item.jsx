import React from 'react';
import {Card,Col,Button} from 'react-bootstrap/';
import {Link} from 'react-router-dom';
import { FaCircleMinus,FaCirclePlus,FaIndianRupeeSign,FaCartPlus,FaRegStar, FaStar, FaTag } from "react-icons/fa6";
import Product from './Product';



const Item = ({item,handleIncrementItemQuantity,handleDecrementItemQuantity}) => 
{
    
    return(
        <Col key={item.productID}>
            <Card className='card-items col-lg-10 col-xs-5 d-flex align-items-stretch mt-4 overflow-hidden'>
            <div><FaTag  style={{color:"rgba(245,71,72,255)"}}/> 30 % OFF</div>
                <Card.Img variant="top" src={require(`${item.productImage}`)}  height={150} className='rounded mx-auto d-block' alt='No image'/>
                <Card.Body>
                    <Card.Title>
                        <div className='title'>{item.productName}</div>
                        <div className='cart'>
                            <div className='remove' onClick={() => handleDecrementItemQuantity(item.productID)}><FaCircleMinus /></div>
                            <div className='Quantity'>{item.productQuantity}</div>
                            <div className='add' onClick={() => handleIncrementItemQuantity(item.productID)}><FaCirclePlus /></div>
                        </div>
                    </Card.Title>
                    <Card.Text className='description'><FaStar /><FaStar /><FaStar /><FaRegStar /><FaRegStar /></Card.Text>                        
                </Card.Body>        
                <div>
                    <Card.Text className='Price' ><FaIndianRupeeSign /><span style={{textDecoration: 'line-through',fontWeight:'600'}}>
                    {item.productPrice + 100}
        </span> <FaIndianRupeeSign />{item.productPrice}</Card.Text>
                    <Link to={`/Product/${item.productID}`} element={<Product handleIncrementItemQuantity={handleIncrementItemQuantity} handleDecrementItemQuantity={handleDecrementItemQuantity} />}><Button type='button' className='cart-icon' onClick={() => handleIncrementItemQuantity(item.productID)}><FaCartPlus /></Button></Link>
                </div>            
            </Card>
        </Col>
    );
}


// [{"productID":1,"productName":"Apple","productDescription":"Apple","productQuantity":0,"productPrice":120,"productImage":"/static/media/Apple.048c7768104446b41c64.jpg"},{"productID":2,"productName":"Banana","productDescription":"Banana","productQuantity":7,"productPrice":120,"productImage":"/static/media/banana.4d62e1d4c0b98b0928ee.jpg"},{"productID":3,"productName":"Blue Berry","productDescription":"BlueBerry","productQuantity":6,"productPrice":120,"productImage":"/static/media/blueBerry.e83ddbf6fc4c3c24b524.jpg"},{"productID":4,"productName":"Cherry","productDescription":"Cherry","productQuantity":10,"productPrice":120,"productImage":"/static/media/cherry.6ef8813b2661e7a441d6.jpg"},{"productID":5,"productName":"Grapes","productDescription":"Grapes","productQuantity":10,"productPrice":120,"productImage":"/static/media/grapes.7b859f4e0fcc7bd4a613.jpg"},{"productID":6,"productName":"Orange","productDescription":"Orange","productQuantity":10,"productPrice":120,"productImage":"/static/media/orange.7af0c2c4e9eb3a080547.jpg"},{"productID":7,"productName":"Pineapple","productDescription":"Pineapple","productQuantity":10,"productPrice":120,"productImage":"/static/media/pineapple.379dc56187fdc9fdc4bd.jpg"},{"productID":8,"productName":"Small Apple","productDescription":"Small Apple","productQuantity":10,"productPrice":120,"productImage":"/static/media/smallApple.f45b0d7f2416a469ae35.jpg"}]
export default Item;
