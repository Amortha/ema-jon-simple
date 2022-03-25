import React from 'react';
import './Product.css'

const Product = ({product,handleAddTocart}) => {

 const {name,img,seller,price,ratings} = product;
//   const{product,handleAddTocart} = props;
    return (
        <div className='product'>
            <img src={img} alt=""></img>
           <div className="product-info">
           <p className='product-name'>{name}</p>
           <p>price:${price}</p>
            <p><small>saller:{seller}</small></p>
            <p><small>Ratings:{ratings}stars</small></p>

           </div>
           <button onClick={() =>handleAddTocart(Product)} className='btn-cart'>
               <p>Add to cart</p>
           </button>
       </div>
    );
};

export default Product;