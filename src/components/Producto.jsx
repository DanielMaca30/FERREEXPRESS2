import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // Para obtener el id del producto de la URL
import { doc, collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import BarrasPrincipal from './BarrasPrincipal';
import Principal from './Principal';
const Producto = () => {
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

  const { productId } = useParams();
  console.log('Product ID:', productId); // Verifica que el productId esté llegando correctamente

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
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
    <div className='Centrador'><div className="ProductoContainer">

      <div className="Encabezados">

        <div className="Encabezados-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="Encabezados-Caracteristicas">
          <p className='nameP'>{product.name}</p>
          <p className='priceP'>{product.price}</p>
          <p className='caraP'>{product.Caracteristica}</p>
        </div>
        <div className="Stock">
          <p>Cantidad</p>
          <p>Comprar ahora</p>
          <p>Agregar al carrito</p>
          <img src='./assets/Images/MetodosPago.png' alt="Métodos de pago" />
        </div>
      </div>
      <div className="MismaCategoria">
        <BarrasPrincipal title="Misma Categoria" products={products1} />
      </div>
      <div className="DescripcionProducto">
        <p>{product.Description}</p>
      </div>


      <div className="OtroProductos">
        <BarrasPrincipal title="Recien llegado" products={products2} />
      </div>

    </div></div>

  );
};
export default Producto