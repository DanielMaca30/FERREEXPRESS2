import React from 'react';


const ProductoMediano = ({ products }) => {
    return (
        <div className='MedianoContainer'>
            <div className='ProductoContainer'>
                <div className="product-grid">
                    {products.map((product, index) => (
                        <div key={index} className='product-card'>
                            <img src={product.image} alt={product.name} className='product-image' />
                            <p>{product.name}</p>
                            <p className='product-price'>{`$${product.price}`}</p>
                        </div>
                    ))}
                </div>

            </div>
            </div>



    );
};
export default ProductoMediano;