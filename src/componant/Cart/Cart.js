import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
             <h4>Order Samary in cart</h4>
            <p>selactad items:  {cart.length}</p>
        </div>
    );
};

export default Cart;