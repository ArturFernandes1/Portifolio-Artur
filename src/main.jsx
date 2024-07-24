import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'; // Importando os estilos do Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importando os scripts do Bootstrap


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
