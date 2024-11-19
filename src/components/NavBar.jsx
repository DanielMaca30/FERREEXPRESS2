import React from 'react'


const NavBar = () => {
    return (
        <div>
            <div className='NavBar'>
                <div className='Buscador'>
                    <img src="src/assets/Images/Logo2.png" alt="" />
                    <input
                        type="text"
                        placeholder="Buscar productos,marcas y más..."
                        className="input-buscador"
                    />
                    <button className="btn-buscar">Buscar</button>
                </div>
                <div className='Links'>
                    <ul><div className='Part1'><li className='Categorias'>
                            <p> Categorias</p>
                        </li>
                        <li><p>Ofertas</p></li>
                        <li><p>Acerca de nosotros</p></li>
                        <li><p>Puntos Fisicos</p></li></div>
                        
                        <div className='Part2'><li><p>Mis pedidos</p></li>
                        <li><p>Crea tu cuenta</p></li>
                        <li><p>Ingresa</p></li>
                        <li className='Carrito-Logo'><p><img src="src/assets/Images/ShoppingCart.png" alt="" /> 1</p></li></div>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar