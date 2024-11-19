import React from 'react';
import '../styles/AcercaDeNosotros.css';

const AcercaDeNosotros = () => {
  return (
    <div className="acerca-de-nosotros">
      <h2 className="titulo">Acerca de Nosotros</h2>
      <p>
        Bienvenido a <strong>FerreExpress</strong>, tu tienda de confianza para todas tus necesidades de herramientas y materiales de construcción. Somos una empresa apasionada por ofrecer productos de alta calidad y un servicio excepcional a nuestros clientes, ya sean profesionales de la construcción o entusiastas del bricolaje.
      </p>

      <div className="imagen-contenedor">
        <img src="src/assets/Images/Banner_Mesa de trabajo 1.png" alt="Banner de FerreExpress" />
      </div>

      <h2 className="titulo">Nuestra Misión</h2>
      <p>
        En <strong>FerreExpress</strong>, nuestra misión es proporcionar a nuestros clientes un acceso fácil y rápido a una amplia gama de herramientas y materiales de construcción, siempre garantizando los mejores precios y un servicio de primera.
      </p>

      <h2 className="titulo">Nuestra Historia</h2>
      <p>
        <strong>FerreExpress</strong> nació con el propósito de revolucionar la forma en que los clientes acceden a productos de ferretería. Lo que comenzó como un pequeño negocio local ha crecido para convertirse en una tienda virtual con un extenso catálogo de productos que satisface las demandas tanto de proyectos grandes como pequeños.
      </p>

      <h2 className="titulo">Nuestros Valores</h2>
      <ul className="valores-lista">
        <li><strong>Calidad:</strong> Solo trabajamos con marcas y proveedores de confianza para asegurar que cada artículo cumpla con los más altos estándares.</li>
        <li><strong>Compromiso:</strong> Estamos dedicados a mejorar continuamente y a satisfacer las necesidades de nuestros clientes.</li>
        <li><strong>Innovación:</strong> Aprovechamos la tecnología para ofrecerte una experiencia de compra rápida, fácil y segura.</li>
      </ul>

      <h2 className="titulo">¿Por Qué Elegirnos?</h2>
      <p>
        Elegir <strong>FerreExpress</strong> significa optar por un servicio personalizado, asesoramiento experto, y una experiencia de compra sin complicaciones. Nos esforzamos por ofrecer un proceso de compra simple, desde la selección de productos hasta la entrega en tu puerta.
      </p>
    </div>
  );
};

export default AcercaDeNosotros;
