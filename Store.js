import React, { useState } from 'react';
import Catalog from './Catalog';
import Cart from './Cart';
import OrderForm from './OrderForm';

const Store = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  const submitOrder = (order) => {
    // Ici, vous pouvez implémenter la logique pour envoyer la commande au serveur
    console.log('Order submitted:', order);
  };

  return (
    <div>
      <h1>Online Store</h1>
      <Catalog addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <OrderForm submitOrder={submitOrder} />
    </div>
  );
};

export default Store;
