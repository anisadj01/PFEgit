import React from 'react';
import ReactDOM from 'react-dom/client';  // Importer depuis 'react-dom/client'
import './index.css';
import App from './App';

// Créer un "root" avec React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Rendre l'application avec root.render()
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
