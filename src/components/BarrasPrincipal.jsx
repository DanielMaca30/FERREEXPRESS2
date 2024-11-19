import React from 'react'
import { Link } from 'react-router-dom';

const BarrasPrincipal = ({ title, products }) => {
    return (
      <div className="product-container">
        <h2>{title}</h2>
        <div className="products">
          {products.map((product, index) => (
            <Link 
              key={index}
              to={`/producto/${product.id}`} // Asegúrate de que esto esté bien configurado
              className="product-item-link"
            >
              <div className="product-item">
                <img src={product.image} alt={product.name} className="product-image" />
                <p>{product.name}</p>
                <p className="Precio">{`${product.price}`}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

export default BarrasPrincipal