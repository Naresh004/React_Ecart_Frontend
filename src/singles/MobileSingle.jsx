import React from 'react';
import { mobileData } from '../stores/data/mobiles';
import { useParams } from 'react-router-dom';
import Navbar from '../stores/components/Navbar';

import { useCart } from '../stores/context/cartContext';
const MobileSingle = () => {

    const {id} = useParams()
    const{addToCart,cartItems} = useCart();
    const product = mobileData.find((item)=>item.id===id)

  return (
    <>
    <Navbar/>
    <div className="ind-section">
        <div className="ind-image">
            <img src={product.image} alt=""/>
        </div>
        <div className="ind-details">
            <div className="ind-company">
                <h2>{product.company}</h2>
            </div>
            <div className="ind-model">
                <h3>{product.model}</h3>    
            </div>
            <div className="ind-price">
                <h3>{product.price}</h3>    
            </div>
            <div className="ind-desc">
                <h3>{product.description}</h3>    
            </div>
            <button onClick={()=>addToCart(product)}>add to cart</button>
        </div>
    </div>
    </>
  );
}

export default MobileSingle;
