import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage'; // Importa tu página de registro
import LoginPage from './pages/LoginPage'; // Importa tu página de login
import HomePage from './pages/HomePage'; // Importa tu página de inicio
import DashboardPage from './pages/DashboardPage';
function App() {
	return (
		<Router>
			{/* Definir las rutas */}
			<Routes>
				{/* Ruta para la página de registro */}
				<Route
					path='/register'
					element={<RegisterPage />}
				/>
				{/* Puedes agregar más rutas aquí */}
				<Route
					path='/login'
					element={<LoginPage />}
				/>
				<Route
					path='/'
					element={<HomePage />}
				/>
				<Route
					path='/dashboard'
					element={<DashboardPage />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
