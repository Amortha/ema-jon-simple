import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
        const [products,setproducts] = useState([])
       const [cart,setCart] = useState([]);

        useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setproducts(data) )
        },[]);
        const handleAddTocart = (product) =>{
           
            const newCart = [...cart,product]
            setCart(newCart)
        }

    return (
        <div className='shop-container'>
            <div className="products-container"> 
            {
              products.map(product =><Product
                 key={product.id}
                 product ={product}
                 handleAddTocart={handleAddTocart}
                 ></Product>)  
            }
  
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;