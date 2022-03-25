import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import './Shop.css'

const Shop = () => {
        const [products,setproducts] = useState([])


        useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data =>setproducts(data) )
        },[]);
        const handleAddTocart = (product) =>{
            console.log(product);
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
            <div className="cart-container">Order Samary</div>
        </div>
    );
};

export default Shop;