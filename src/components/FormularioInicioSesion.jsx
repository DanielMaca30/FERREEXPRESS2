import React, { useState } from 'react';
import '../styles/FormularioInicioSesion.css';
import logoImage from '../assets/Imagenes/Logo FerreExpres Largo_Mesa de trabajo 1.png';
import { Link, useNavigate } from 'react-router-dom';
import { fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth } from '../firebase-config'; // Asegúrate de usar esta instancia

const FormularioInicioSesion = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validación básica
    if (!email) {
      setError('Por favor ingresa un correo electrónico.');
      return;
    }

    try {
      // Verificar métodos de inicio de sesión para el correo
      const methods = await fetchSignInMethodsForEmail(auth, email);
      if (methods.length === 0) {
        setError('Este correo no está registrado. Por favor, regístrate.');
      } else {
        // Navegar a la página de contraseña si el correo está registrado
        navigate('/login-password', { state: { email } });
      }
    } catch (err) {
      console.error('Error al verificar el correo:', err);
      setError('Hubo un error al verificar el correo. Intenta nuevamente.');
    }
  };

  return (
    <div className="formulario-container">
      <img src={logoImage} alt="Logo de FerreExpress" className="logo" />
      <form onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Continuar</button>
        <p>
          ¿Eres nuevo en FerreExpress?{' '}
          <Link to="/register">Crea tu cuenta</Link>
        </p>
      </form>
      <footer className="footer">
        <div className="footer-links">
          <a href="#">Condiciones de uso</a>
          <a href="#">Avisos de privacidad</a>
        </div>
        <div className="footer-copyright">®2025 FerreExpress</div>
      </footer>
    </div>
  );
};

export default FormularioInicioSesion;
