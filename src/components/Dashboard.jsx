// En Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const Dashboard = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // Si no hay usuario, redirigir al inicio de sesión
        window.location.href = '/';
      }
    });
    return () => unsubscribe();
  }, []);

  if (!user) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      <p>¡Has iniciado sesión correctamente!</p>
    </div>
  );
};

export default Dashboard;
