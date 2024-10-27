import React, { createContext, useState } from 'react';
import { useContext } from 'react';

const cartContext = createContext()

export const CartProvider = ({children}) => {
  const [cartItems,setCartItems] = useState([])

  const addToCart = (item) =>{
    setCartItems([...cartItems,item])
  }

  const removeFromcart=(item)=>{
    setCartItems(cartItems.filter((product) => product!==item))
  }

  return(
    <cartContext.Provider value={{cartItems,addToCart,removeFromcart}}>
      {children}
    </cartContext.Provider>
  )


}

export const useCart = ()=>{
  return useContext(cartContext)
} 
