import React from 'react';
import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {
	const handleLogin = async (formData) => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_BASE_URL}/login`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: new URLSearchParams({
						username: formData.email,
						password: formData.password,
					}),
				}
			);
			if (!response.ok) {
				const errorData = await response.json();
				throw new Error(errorData.detail);
			}
			const data = await response.json();
			localStorage.setItem('access_token', data.access_token);
			window.location.href = '/dashboard';
		} catch (error) {
			console.error('Error al iniciar sesión:', error);
			toast.error(error.message);
		}
	};

	return (
		<div className='flex flex-col min-h-screen bg-gray-700'>
			<Navbar />
			<div className='flex flex-col justify-center items-center min-h-screen bg-indigo-900'>
				<div className='w-full max-w-screen-lg px-4 md:h-full'>
					<div className='flex justify-center'>
						<LoginForm onSubmit={handleLogin} />
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}

export default LoginPage;
