import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // El componente principal de tu aplicación
import './index.css';

// Monta la aplicación en el div con id="root" en index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
