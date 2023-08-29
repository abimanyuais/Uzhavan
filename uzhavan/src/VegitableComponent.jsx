import React from 'react'
import {Row,Container} from 'react-bootstrap/';
import Item from './Item';

const VegitableComponent = ({productList,handleIncrementItemQuantity,handleDecrementItemQuantity}) => {
    let vegitableList = productList.filter((item) => item.productCategory === "Vegitable")
  return (
    <Container style={{marginTop:70}}>
      <h3 className='header mt-4'>Vegitables</h3>
        <Row md={4} className="g-4 mt-2">
                {
                    vegitableList.map((x) => 
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

export default VegitableComponent;