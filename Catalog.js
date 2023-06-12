import React, { useEffect, useState } from 'react';

const Catalog = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:5000/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  return (
    <div>
      <h2>Tienda en línea</h2>
      <h3>Catálogo de Productos</h3>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>Precio: ${product.price}</p>
          <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
