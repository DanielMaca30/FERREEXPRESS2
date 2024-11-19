import React, { useLocation, useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

const Carrito = () => {
  const location = useLocation();
  const { productId, quantity } = location.state || {};  // Obtiene el ID del producto y la cantidad
  const [product, setProduct] = useState(null);

  // Obtener detalles del producto usando el ID
  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        try {
          const productRef = doc(db, 'products', productId);
          const productSnap = await getDoc(productRef);

          if (productSnap.exists()) {
            setProduct(productSnap.data());
          } else {
            console.log('Producto no encontrado');
          }
        } catch (error) {
          console.error('Error al obtener el producto:', error);
        }
      };

      fetchProduct();
    }
  }, [productId]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Carrito de compras</h1>
      <p>{product.name} - Cantidad: {quantity}</p>
      <p>Precio total: ${product.price * quantity}</p>
      {/* Aquí puedes mostrar más detalles del producto y el total */}
    </div>
  );
};

export default Carrito;
