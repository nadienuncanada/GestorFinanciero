import React from 'react';
import RegisterForm from '../components/RegisterForm';
import Navbar from '../components/Navbar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterPage() {
	const handleRegister = async (formData) => {
		try {
			const response = await fetch(
				`${process.env.REACT_APP_API_BASE_URL}/register`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
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
			console.error('Error al registrar:', error);
			toast.error(error.message);
		}
	};

	return (
		<div className='flex flex-col min-h-screen bg-gray-700'>
			<Navbar />
			<div className='flex flex-col justify-center items-center min-h-screen bg-indigo-900 relative overflow-hidden'>
				<div className='absolute inset-0 bg-indigo-700 opacity-60 backdrop-blur-md'></div>
				<div className='w-full max-w-screen-lg px-4 md:h-full relative z-10'>
					<div className='flex justify-center'>
						<RegisterForm onSubmit={handleRegister} />
					</div>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}

export default RegisterPage;
