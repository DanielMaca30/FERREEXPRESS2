import React from 'react';
import { Link } from 'react-router-dom';

const BarrasPrincipal = ({ title, products }) => {
  // Formatea los precios en el formato deseado
  const formatPrice = (price) => {
    return `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} COP`;
  };

  return (
    <div className="product-container">
      <h2>{title}</h2>
      <div className="products">
        {products.map((product) => (
          <Link
            key={product.id} // Usa el ID del producto como clave única
            to={`/producto/${product.id}`} // Ruta al producto
            className="product-item-link"
          >
            <div className="product-item">
              <img src={product.image} alt={product.name} className="product-image" />
              <p>{product.name}</p>
              <p className="Precio">{formatPrice(product.price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BarrasPrincipal;
