import React, { useEffect, useState } from 'react';
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
            console.log(product);
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
                <h4>Order Samary</h4>
            <p>selactad items:  {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;