import React, { useEffect, useState } from 'react';
import BarrasPrincipal from './BarrasPrincipal'
import CategoriasSeccion from './CategoriasSeccion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig.js';
import PieDePagina from './PieDePagina.jsx';

const Principal = () => {
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);

  // Función para obtener los productos desde Firebase
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products")); // "products" es el nombre de la colección en Firestore
    const productsArray1 = [];
    const productsArray2 = [];

    querySnapshot.forEach((doc) => {
      const product = doc.data();
      if (product.section === 1) {
        productsArray1.push(product);
      } else if (product.section === 2) {
        productsArray2.push(product);
      }
    });

    setProducts1(productsArray1);
    setProducts2(productsArray2);
  };

  // Llamar a la función al montar el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="page-container">
      <div className="background-container">
        <img src="src/assets/Images/FondoP.png" alt="Fondo" className="background-image" />
      </div>
      <div className="content-container">
        <BarrasPrincipal title="Ofertas" products={products1} />
        <BarrasPrincipal title="Recien llegado" products={products2} />
        <CategoriasSeccion />
        <BarrasPrincipal title="Martillos" products={products1} />
        <BarrasPrincipal title="Electrico" products={products1} />
        <BarrasPrincipal title="Pisos" products={products1} />
        <PieDePagina />
        
        
        {/* Puedes agregar más instancias de BarrasPrincipal si es necesario */}
      </div>
    </div>
  );
};


export default Principal