import React, { useState } from 'react';
import '../styles/FormularioInicioSesionContraseña.css';
import logoImage from '../assets/Imagenes/Logo FerreExpres Largo_Mesa de trabajo 1.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config'; // Asegúrate de importar auth

const FormularioInicioSesionContraseña = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  useEffect(() => {
    if (!email) {
      setError('Correo no válido. Intenta nuevamente.');
      return;  // No continuar si no hay correo
    }
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
  
    if (!email || !password) {
      setError('Por favor, ingresa ambos campos.');
      return;
    }
  
    try {
      await signInWithEmailAndPassword(auth, email, password);  // Usar auth para iniciar sesión
      navigate('/dashboard');
    } catch (err) {
      setError('Error al iniciar sesión. Verifica tu contraseña.');
    }
  };

  return (
    <div className="formulario-container">
      <img src={logoImage} alt="Logo de FerreExpress" className="logo" />
      <form onSubmit={handleSubmit}>
        <h2>Iniciar Sesión</h2>
        {/* Mostrar el correo ingresado en el formulario anterior */}
        <p><strong>Correo:</strong> {email}</p>

        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="**********"
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
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

export default FormularioInicioSesionContraseña;
