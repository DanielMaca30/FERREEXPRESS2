import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Carrito.css"; // Asegúrate de que el path sea correcto

const Carrito = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const initialProduct = location.state ? location.state.product : null;
  const initialQuantity = location.state ? location.state.quantity : 1;

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [showPopup, setShowPopup] = useState(false);  // Estado para controlar la visibilidad de la ventana emergente

  const formatPrice = (price) => {
    return `$${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} COP`;
  };

  const addToCart = (product, quantity) => {
    const updatedCart = [...cartItems];
    const existingProduct = updatedCart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += quantity;
    } else {
      updatedCart.push({ ...product, quantity });
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) return;

    const updatedCart = cartItems.map(item =>
      item.id === productId ? { ...item, quantity: newQuantity } : item
    );

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  useEffect(() => {
    if (initialProduct) {
      addToCart(initialProduct, initialQuantity);
    }
  }, [initialProduct, initialQuantity]);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleCheckout = () => {
    setShowPopup(true);  // Mostrar la ventana emergente cuando se hace clic en el botón
  };

  const handleClosePopup = () => {
    setShowPopup(false);  // Cerrar la ventana emergente

    // Eliminar todos los productos del carrito
    setCartItems([]);
    localStorage.removeItem("cart");

    // Redirigir a la página principal (Principal.jsx)
    navigate("/");  // Suponiendo que la ruta de Principal es '/'
  };

  return (
    <div className="carrito-container">
      <h1 className="carrito-title">Carrito de compras</h1>
      
      {cartItems.length === 0 ? (
        <p className="no-items">No hay productos en el carrito.</p>
      ) : (
        <div>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="carrito-item">
                <img src={item.image} alt={item.name} className="product-image" />
                <div className="product-details">
                  <h2 className="product-title">{item.name}</h2>
                  <p className="product-price">{formatPrice(item.price)}</p>
                  <div className="quantity-control">
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity - 1)} 
                      className="quantity-btn">-
                    </button>
                    <span className="quantity-display">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)} 
                      className="quantity-btn">+
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)} 
                    className="remove-item-button">Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <p className="total-text">Total: {formatPrice(calculateTotal())}</p>
            <button 
              onClick={handleCheckout} 
              className="checkout-button">Pagar
            </button>
          </div>
        </div>
      )}

      {/* Ventana emergente */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>¡Tu pago ha sido realizado!</h2>
            <button onClick={handleClosePopup} className="popup-close-btn">Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Carrito;
