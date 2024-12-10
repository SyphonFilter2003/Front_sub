import React from 'react';
import ReactDOM from 'react-dom/client'; // Importando do 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Criando o root da aplicação com 'createRoot' (nova abordagem do React 18)
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderizando o componente 'App' dentro do root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Passando o log das métricas de desempenho
reportWebVitals(console.log);
