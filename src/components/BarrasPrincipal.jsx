import React from 'react'

const BarrasPrincipal = ({ title, products }) => {
    return (
        <div className='product-container'>
            <h2>{title}</h2>
            <div className='products'>
                {products.map((product, index) => (
                    <div key={index} className='product-item'>
                        <img src={product.image} alt={product.name} className='product-image' />
                        <p>{product.name}</p>
                        <p className='Precio'>{`${product.price}`}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BarrasPrincipal