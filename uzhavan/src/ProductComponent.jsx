import './Items.css';
import React from 'react';
import {Row,Container} from 'react-bootstrap/';
import Menu from './Menu';
import './Product.css';
import {FaAppleWhole, FaCarrot} from 'react-icons/fa6';
import FruitsComponent from './FruitsComponent';
import {Link} from 'react-router-dom';
import FrontPage from './FrontPage';



let ProductComponent = ({productList,handleIncrementItemQuantity,handleDecrementItemQuantity}) =>
{
    let fruitsList = productList.filter((item) => item.productCategory === "Fruits");
    let VegitableList = productList.filter((item) => item.productCategory === "Vegitable");
    const params = {
        slidesPerView: 4,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        }

      }
    return(
        
        <main>
            <Menu />
            <Container >
                <div className='mt-4'>
                    <h3 className='header'>Fruits</h3>
                    <Link to={`/FruitsComponent`} element={<FruitsComponent handleIncrementItemQuantity={handleIncrementItemQuantity} handleDecrementItemQuantity={handleDecrementItemQuantity} />}><div className='seeAll'><FaAppleWhole /> See All</div></Link>
                </div>
                
                <FrontPage
                    list={fruitsList}
                    handleIncrementItemQuantity = {handleIncrementItemQuantity}
                    handleDecrementItemQuantity = {handleDecrementItemQuantity}
                />
                    
                
                <div className='mt-4'>
                    <h3 className='header mt-4'>Vegitables</h3>
                    <div className='seeAll'><FaCarrot /> See All</div>
                </div>

                <FrontPage
                    list={VegitableList}
                    handleIncrementItemQuantity = {handleIncrementItemQuantity}
                    handleDecrementItemQuantity = {handleDecrementItemQuantity}
                />

                <div className='mt-4'>
                    <h3 className='header mt-4'>Grocery</h3>
                    <div className='seeAll'><FaCarrot /> See All</div>
                </div>

                 <FrontPage
                    list={fruitsList}
                    handleIncrementItemQuantity = {handleIncrementItemQuantity}
                    handleDecrementItemQuantity = {handleDecrementItemQuantity}
                />
            </Container>    
        </main>
        
    );
}
export default ProductComponent;