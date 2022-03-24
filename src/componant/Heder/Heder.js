import React from 'react';
import logo from '../../images/Logo.svg'
import './Heder.css';
const Heder = () => {
    return (
        <div>
          <nav className='header'>
             <img src = {logo} alt="" />
             <div>
                 <a href="/shop">Shop</a>
                 <a href="/order">Order</a>
                 <a href="/inventory">Inventory</a>
                 <a href="/about">About</a>
                 
             </div>
          </nav>
        </div>
    );
};

export default Heder;