import React from 'react'
import {Row,Container} from 'react-bootstrap/';
import Item from './Item';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/free-mode';

const FrontPage = ({list,handleIncrementItemQuantity,handleDecrementItemQuantity}) => {

  const params = {
    slidesPerView: 3,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation:{
        prevEl: '.prev',
        nextEl: '.next',
    }

  }

  let windowWidth = useRef(window.innerWidth);
  let windowHeight = useRef(window.innerHeight);
  if(windowWidth.current > 720)
  {
    params.slidesPerView=5
  }

  return (
    
    <Swiper {...params}>
        <Row className="g-4 mt-2">
        {
            list.map((x) => 
            (
                <SwiperSlide>
                <Item 
                    item={{productID:x.productID,productName:x.productName,productDescription:x.productDescription,productQuantity:x.productQuantity,productPrice:x.productPrice,productImage:x.productImage}}
                    handleIncrementItemQuantity = {handleIncrementItemQuantity}
                    handleDecrementItemQuantity = {handleDecrementItemQuantity}
                    key={x.productID}
                />
                <div className="prev" />
                <div className="next" />
                </SwiperSlide>
            ))
        }
        </Row>
     </Swiper>
  )
}

export default FrontPage