import './App.css';
import NavigationBar from './NavigationBar';
import Menu  from './Menu';
import ProductComponent from './ProductComponent';
import Product from './Product';
import {Routes,Route} from "react-router-dom";
import { useState,useEffect } from 'react';
import Footer from './FooterComponent';
import ApiRequest from './ApiRequest';
import ErrorPage from './ErrorPage';
import FruitsComponent from './FruitsComponent';
import VegitableComponent from './VegitableComponent';
import CartComponent from './CartComponent';



// ! List 
let listOfProducts = JSON.parse(localStorage.getItem('ListOfProducts')) || [];
//let priceListOfProducts = JSON.parse(localStorage.getItem('PriceListOfProducts')) || [];

// let listOfProducts = [{"productID":1,"productName":"Apple","productDescription":"Apple","productQuantity":0,"productPrice":200,"productImage":require("./images/Apple.jpg")},
// {"productID":2,"productName":"Banana","productDescription":"Banana","productQuantity":0,"productPrice":50,"productImage":require("./images/banana.jpg")},
// {"productID":3,"productName":"Blue Berry","productDescription":"BlueBerry","productQuantity":0,"productPrice":200,"productImage":require("./images/blueBerry.jpg")},
// {"productID":4,"productName":"Cherry","productDescription":"Cherry","productQuantity":0,"productPrice":110,"productImage":require("./images/Apple.jpg")}]
// let priceListOfProducts = [{productID : 1,productQuantity : 10},{productID : 2,productQuantity : 10},{productID : 3,productQuantity : 10},{productID : 4,productQuantity : 10}]

// localStorage.setItem("PriceListOfProducts",JSON.stringify(priceListOfProducts));
// localStorage.setItem("ListOfProducts",JSON.stringify(listOfProducts));
// let userOrder = JSON.parse(localStorage.getItem('UserOrder'));
let totalOrder = 0;

function App() 
{
  const API_LISTOFPRODUCTS = 'http://localhost:3500/listOfProducts';
  const [fetchError,setFetchError] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  let [productList, setProductQuantity] = useState([]);
  const [priceListOfProducts, setProductPrice] = useState([]);
  const [userOrder,setUserOrder] = useState([]);
  const [search,setSearch] = useState([]);
  useEffect(() => 
  {
    const fetchItems = async () => 
    {
      try
      {
        const response = await fetch(API_LISTOFPRODUCTS);
        if(!response.ok) 
        {
          throw Error("Data Not Found");
        }
        const listItems = await response.json();
        setProductQuantity(listItems)
        setSearch(listItems)
        setFetchError(null);
      }
      catch (e)
      {
        setFetchError(e.message)
      }
      finally
      {
        setIsLoading(false);
      }
    }
      (async () => await fetchItems())()

},[]);
useEffect(() => 
  {
    const fetchItems = async () => 
    {
      try
      {
        const response = await fetch(`http://localhost:3500/PriceListOfProducts`);
        if(!response.ok) 
        {
          throw Error("Data Not Found");
        }
        const listItems = await response.json();
        setProductPrice(listItems)
        setFetchError(null);
      }
      catch (e)
      {
        setFetchError(e.message)
      }
      finally
      {
        setIsLoading(false);
      }
    }
    (async () => await fetchItems())()
},[productList]);
useEffect(() => 
  {
    const fetchItems = async () => 
    {
      try
      {
        const response = await fetch(`http://localhost:3500/UserOrderDetails`);
        if(!response.ok) 
        {
          throw Error("Data Not Found");
        }
        const listItems = await response.json();
        setUserOrder(listItems)
        setFetchError(null);
      }
      catch (e)
      {
        setFetchError(e.message)
      }
      finally
      {
        setIsLoading(false);
      }
    }
    (async () => await fetchItems())()
},[productList]);

  let handleIncrementItemQuantity = async (productID) =>
  {
    let productIndex = priceListOfProducts.findIndex((x) => (x.productID === productID))
    if(priceListOfProducts[productIndex].productQuantity > 0)
    {
       
        let productSearch = userOrder.find((x) => (x.id === productID));
        
        if(productSearch === undefined) 
        {
            const value = {productID : productID, productQuantity : 1, id : productID};

            const addOptions = 
            {
              method : 'POST',
              headers : {'Content-Type': 'application/json'},
              body : JSON.stringify(value)
            }

            const addUserOrder = await ApiRequest(`http://localhost:3500/UserOrderDetails`,addOptions)
           
            const priceOfProduct = priceListOfProducts.filter((item) => item.productID === productID)
            const updateOption = 
            {
              method : 'PATCH',
              headers : {'Content-Type': 'application/json'},
              body : JSON.stringify({productQuantity : priceOfProduct[0].productQuantity -= 1 })
            }
    
            const updateQuantity = await ApiRequest(`http://localhost:3500/PriceListOfProducts/${productID}`,updateOption);
            
           
        }
        else
        {
          
          // console.log(`Product Search ${productSearch.productQuantity+=1}`)
          const value = userOrder.filter((item) => item.productID === productID)
          const updateOption = 
          {
            method : 'PATCH',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify({productQuantity : value[0].productQuantity += 1 })
          }
          let id = value[0].id;
          const updateQuantity = await ApiRequest(`http://localhost:3500/UserOrderDetails/${id}`,updateOption);
          const priceOfProduct = priceListOfProducts.filter((item) => item.productID === productID)
          const update = 
          {
            method : 'PATCH',
            headers : {'Content-Type': 'application/json'},
            body : JSON.stringify({productQuantity : priceOfProduct[0].productQuantity -= 1 })
          }

          const updateQuantitys = await ApiRequest(`http://localhost:3500/PriceListOfProducts/${productID}`,update);

        }
          let displayProducts = productList.map((x) => x.productID === productID ?{...x ,productQuantity:x.productQuantity+1}:x)
          setProductQuantity(displayProducts);
          totalOrder +=1;
      }

  }

  let handleSearch = (product)=>
  {
    
    var array=search;
    let find = product.toLowerCase()
    
    productList = search;
    var searchItem = productList.filter((x) => x.productName.toLowerCase().includes(find))
    if(product === '')
    {
      setProductQuantity(array) 
      
    }
    else
      setProductQuantity(searchItem)
    
  }
  let handleDecrementItemQuantity = async (productID) => 
  {
      let productSearch = userOrder.find((x) => (x.id === productID));
      console.log(productSearch)
      if(productSearch === undefined)
        return
      if(productSearch.productQuantity > 0)
      {
          if(productSearch === undefined) 
          {}
          else
          {
            
            localStorage.setItem("UserOrder",JSON.stringify(userOrder));
            totalOrder -=1;

            const value = userOrder.filter((item) => item.productID === productID)
            const updateOption = 
            {
              method : 'PATCH',
              headers : {'Content-Type': 'application/json'},
              body : JSON.stringify({productQuantity : value[0].productQuantity -= 1 })
            }
            let id = value[0].id;
            const updateQuantity = await ApiRequest(`http://localhost:3500/UserOrderDetails/${id}`,updateOption);


            const priceOfProduct = priceListOfProducts.filter((item) => item.productID === productID)
            const update = 
            {
              method : 'PATCH',
              headers : {'Content-Type': 'application/json'},
              body : JSON.stringify({productQuantity : priceOfProduct[0].productQuantity += 1 })
            }
  
            const updateQuantitys = await ApiRequest(`http://localhost:3500/PriceListOfProducts/${productID}`,update);
            
           }
           let displayProducts = productList.map((x) => x.productID === productID ?{...x ,productQuantity:x.productQuantity-1}:x)
            setProductQuantity(displayProducts);
      }
  }

  return (
      <div>
        <NavigationBar totalOrder = {totalOrder} handleSearch={handleSearch}/>
        {/* <CheackOut /> */}
        
        <Routes>
          <Route path='/Menu' element={<Menu />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/Product/:id' element={<Product 
            userOrder = {userOrder}
            productList = {productList}
            handleIncrementItemQuantity = {handleIncrementItemQuantity}
            handleDecrementItemQuantity = {handleDecrementItemQuantity}
            {...fetchError && <p>{`Error : ${fetchError}`}</p> }
          />} />
          <Route path='/FruitsComponent' element={<FruitsComponent
            productList = {productList}
            handleIncrementItemQuantity = {handleIncrementItemQuantity}
            handleDecrementItemQuantity = {handleDecrementItemQuantity}
          />}/>
          <Route path='/VegitableComponent' element={<VegitableComponent
            productList = {productList}
            handleIncrementItemQuantity = {handleIncrementItemQuantity}
            handleDecrementItemQuantity = {handleDecrementItemQuantity}
          />}/>

          <Route path = '/CartComponent' element={<CartComponent
            userOrder = {userOrder} 
            productList = {productList}
            handleIncrementItemQuantity = {handleIncrementItemQuantity}
            handleDecrementItemQuantity = {handleDecrementItemQuantity}
          />}/>
          <Route path='/' element={
          <ProductComponent
            productList = {productList}
            handleIncrementItemQuantity = {handleIncrementItemQuantity}
            handleDecrementItemQuantity = {handleDecrementItemQuantity}
          />}{...fetchError && <>{`Error : ${fetchError}`}</> }/>
          
        </Routes>
        
        <Footer />
      </div>
  );
}

export default App;
// in 28 minutes
