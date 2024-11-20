import React, { useState } from 'react';
import '../styles/FormularioRegistro.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const FormularioRegistro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar si las contraseñas coinciden
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Validación de formato de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(email)) {
      setError('Por favor ingresa un correo electrónico válido');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/login');  // Redirige inmediatamente al login después de crear la cuenta
    } catch (err) {
      // Manejo de errores de Firebase
      if (err.code === 'auth/email-already-in-use') {
        setError('Este correo electrónico ya está en uso');
      } else if (err.code === 'auth/weak-password') {
        setError('La contraseña debe tener al menos 6 caracteres');
      } else {
        setError('Error al crear la cuenta. Intenta nuevamente.');
      }
    }
  };

  return (
    <div className="formulario-container">
      <form onSubmit={handleSubmit}>
        <h2>Crear Cuenta</h2>
        {error && <p className="error">{error}</p>}
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" required value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar contraseña</label>
          <input type="password" id="confirmPassword" name="confirmPassword" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </div>
        
        <button type="submit">Registrar</button>
        <p>
          ¿Ya tienes una cuenta? <Link to="/ingresa">Inicia Sesión</Link>
        </p>
      </form>
    </div>
  );
};

export default FormularioRegistro;
