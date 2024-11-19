import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, collection, getDoc, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';
import BarrasPrincipal from './BarrasPrincipal';

const Producto = () => {
  const [products1, setProducts1] = useState([]);
  const [products2, setProducts2] = useState([]);
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad del producto
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate(); // Para redirigir a otra página

  // Función para formatear el precio con puntos cada 3 ceros
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  // Obtener los productos de Firestore
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsArray1 = [];
    const productsArray2 = [];

    querySnapshot.forEach((doc) => {
      const product = { id: doc.id, ...doc.data() };
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
    if (!productId) {
      console.error('El ID del producto no está definido.');
      return;
    }

    const getProduct = async () => {
      try {
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

  // Función para manejar el clic en "Comprar ahora"
  const handleBuyNow = () => {
    navigate('/carrito', { state: { productId: product.id, quantity } });
  };

  // Funciones para aumentar o disminuir la cantidad
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className='Centrador'>
      <div className="ProductoContainer">
        <div className="Encabezados">
          <div className="Encabezados-image">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="Encabezados-Caracteristicas">
            <p className='nameP'>{product.name.toUpperCase()}</p>
            <p className='priceP'>${formatPrice(product.price)} COP</p>
            <p className='shippingP'>Envío inmediato a Cali</p>
            <p className='stockP'>Stock disponible: {product.stock}</p>
          </div>
          <div className="Stock">
            <p>Cantidad</p>
            <div className="quantity-control">
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <button className="buy-now-button" onClick={handleBuyNow}>Comprar ahora</button>
            <button className="add-to-cart-button" onClick={() => navigate('/carrito', { state: { product, quantity } })}>
              Agregar al carrito
            </button>
            <img src='../src/assets/Images/MetodosPago.png' alt="Métodos de pago" />
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
      </div>
    </div>
  );
};

export default Producto;
