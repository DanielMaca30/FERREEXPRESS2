import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebaseConfig'; // Asegúrate de que este archivo esté configurado correctamente
import { useNavigate } from 'react-router-dom';

const FormularioInicioSesion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      // Intentar iniciar sesión con el correo y la contraseña proporcionados
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/'); // Redirigir a la página principal después de iniciar sesión correctamente
    } catch (err) {
      setError('Correo o contraseña incorrectos. Intenta nuevamente.');
      console.error('Error al iniciar sesión:', err);
    }
  };

  return (
    <div className="formulario-container">
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
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p>
        ¿No tienes una cuenta? <a href="/creaTuCuenta">Regístrate aquí</a>
      </p>
    </div>
  );
};

export default FormularioInicioSesion;
