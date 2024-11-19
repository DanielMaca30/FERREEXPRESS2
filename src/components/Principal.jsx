import React, { useEffect, useState } from 'react';
import BarrasPrincipal from './BarrasPrincipal'
import CategoriasSeccion from './CategoriasSeccion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig.js';
import PieDePagina from './PieDePagina.jsx';

const Principal = () => {
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsArray1 = [];
    const productsArray2 = [];

    querySnapshot.forEach((doc) => {
      const product = { id: doc.id, ...doc.data() };  // Aquí asignamos el ID del documento de Firebase a cada producto
      if (product.section === 1) {
        productsArray1.push(product);
      } else if (product.section === 2) {
        productsArray2.push(product);
      }
    });

    setProducts1(productsArray1);
    setProducts2(productsArray2);
  };

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
      </div>
    </div>
  );
};


export default Principal;