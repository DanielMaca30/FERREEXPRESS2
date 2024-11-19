import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // Para obtener el id del producto de la URL
import { db } from './firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const Producto = () => {
    const { productId } = useParams();
    console.log('Product ID:', productId); // Verifica que el productId esté llegando correctamente
  
    const [product, setProduct] = useState(null);
  
    useEffect(() => {
      if (!productId) {
        console.error('El ID del producto no está definido.');
        return;
      }
  
      const getProduct = async () => {
        try {
          console.log('Consultando Firestore con productId:', productId); // Verifica el productId aquí también
          const productRef = doc(db, 'products', productId);
          const productSnap = await getDoc(productRef);
  
          if (productSnap.exists()) {
            setProduct(productSnap.data());
          } else {
            console.log('No se encontró el producto');
          }
        } catch (error) {
          console.error('Error al obtener el producto:', error);
        }
      };
  
      getProduct();
    }, [productId]);
  
    if (!product) {
      return <div>Cargando...</div>;
    }
  
    return (
      <div className="ProductoContainer">
        <div className="Encabezados">
          <div className="Encabezados-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="Encabezados-Caracteristicas">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <p>{product.features}</p>
          </div>
        </div>
        <div className="DescripcionProducto">
          <p>{product.description}</p>
        </div>
      </div>
    );
  };

export default Producto