import React, { useState } from 'react';
import '../styles/FormularioRegistro.css';
import logoImage from '../assets/Imagenes/Logo FerreExpres Largo_Mesa de trabajo 1.png';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase-config';
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
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }
  
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setTimeout(() => {
        navigate('/');  // Redirige al inicio de sesión después de crear la cuenta
      }, 2000); // Esperar 2 segundos antes de redirigir al login
    } catch (err) {
      setError(err.message);
    }
  };
  

  return (
    <div className="formulario-container">
      <img src={logoImage} alt="Logo de FerreExpress" className="logo" />
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
          ¿Ya tienes una cuenta? <Link to="/">Inicia Sesión</Link>
        </p>
      </form>
    </div>
  );
};

export default FormularioRegistro;
