import React, { useState } from 'react';

const OrderForm = ({ submitOrder }) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      name,
      address,
    };
    submitOrder(order);
  };

  return (
    <div>
      <h2>Order Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
