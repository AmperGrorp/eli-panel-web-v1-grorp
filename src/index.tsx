import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{ padding: '2rem', color: '#0ff', fontFamily: 'sans-serif' }}>
      <h1>🧠 Bienvenido a ELI Panel Web V1</h1>
      <p>Interfaz inicial funcionando correctamente.</p>
    </div>
  </React.StrictMode>
);
