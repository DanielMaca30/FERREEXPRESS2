import React, { useState, useEffect } from 'react';
import ProductoMediano from './ProductoMediano';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Asegúrate de que la ruta sea correcta

export const Ofertas = () => {
    const [products, setProducts] = useState([]);

    // Función para obtener productos desde Firestore
    const fetchProducts = async () => {
        const querySnapshot = await getDocs(collection(db, "products")); // Usamos "products" como nombre de la colección
        const productsArray = [];

        // Filtrar los productos que tienen la propiedad "oferta" en true
        querySnapshot.forEach((doc) => {
            const product = doc.data();
            if (product.oferta === true) {  // Solo agregar los productos con oferta: true
                productsArray.push({ id: doc.id, ...product });
            }
        });

        setProducts(productsArray); // Guardamos los productos filtrados en el estado
    };

    // Llamamos a la función cuando el componente se monta
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
            <div className='Ofertas'>
                <div className='Bar'>
                    <h2>Ofertas</h2>
                </div>
                <div className="product-grid-Ofertas">
                    {/* Pasamos los productos a ProductoMediano */}
                    <ProductoMediano products={products} />
                </div>
            </div>
    );
};
export default Ofertas;