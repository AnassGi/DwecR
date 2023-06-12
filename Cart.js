import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h3>Carrito de Compras</h3>
      {cartItems.map((item, index) => (
        <div key={index}>
          <h4>{item.name}</h4>
          <p>{item.description}</p>
          <button onClick={() => removeFromCart(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
