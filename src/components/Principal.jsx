import React, { useEffect, useState } from 'react';
import BarrasPrincipal from './BarrasPrincipal';
import CategoriasSeccion from './CategoriasSeccion';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig.js';

const Principal = () => {
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);

  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsArray1 = [];
    const productsArray2 = [];

    querySnapshot.forEach((doc) => {
      const product = { id: doc.id, ...doc.data() }; // Asigna el ID del documento
      if (product.section === 1) {
        productsArray1.push(product);
      } else if (product.section === 2) {
        productsArray2.push(product);
      }
    });

    setProducts1(productsArray1);
    setProducts2(productsArray2);
  };

  // Formatea los precios en el formato deseado
  const formatPrice = (price) => {
    return `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} COP`;
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
        <BarrasPrincipal title="Ofertas" products={products1} formatPrice={formatPrice} />
        <BarrasPrincipal title="Recien llegado" products={products2} formatPrice={formatPrice} />
        <CategoriasSeccion />
        <BarrasPrincipal title="Martillos" products={products1} formatPrice={formatPrice} />
        <BarrasPrincipal title="Electrico" products={products1} formatPrice={formatPrice} />
        <BarrasPrincipal title="Pisos" products={products1} formatPrice={formatPrice} />
      </div>
    </div>
  );
};

export default Principal;
