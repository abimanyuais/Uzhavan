import React from 'react'
import {Row,Container} from 'react-bootstrap/';


import Item from './Item';

const FruitsComponent = ({productList,handleIncrementItemQuantity,handleDecrementItemQuantity}) => {
    let fruitsList = productList.filter((item) => item.productCategory === "Fruits")
  return (
    <Container style={{marginTop:70}}>
      <h3 className='header'>Fruits</h3>
        <Row md={4} className="g-4 mt-2">
                {
                    fruitsList.map((x) => 
                    (
                        <Item 
                            item={{productID:x.productID,productName:x.productName,productDescription:x.productDescription,productQuantity:x.productQuantity,productPrice:x.productPrice,productImage:x.productImage}}
                            handleIncrementItemQuantity = {handleIncrementItemQuantity}
                            handleDecrementItemQuantity = {handleDecrementItemQuantity}
                            key={x.productID}
                        />
                    ))
                }
                </Row>
    </Container>

  )
}

export default FruitsComponent;