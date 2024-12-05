import React, { useState } from 'react';

function LoginForm({ onSubmit }) {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	// Maneja los cambios en los campos del formulario
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	// Maneja el envío del formulario
	const handleSubmit = (e) => {
		e.preventDefault();

		// Verifica que las contraseñas coincidan antes de enviar
		onSubmit(formData); // Llama a la función onSubmit pasada como prop
	};

	return (
		<section className='bg-gray-50 dark:bg-gray-900 rounded-lg'>
			<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:min-h-1.5 lg:py-0 '>
				<a
					href='/'
					className='flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white'>
					Gestor Financiero
				</a>
				<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
					<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
						<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
							Inicia Sesión
						</h1>
						<form
							className='space-y-4 md:space-y-6'
							onSubmit={handleSubmit}>
							<div>
								<label
									htmlFor='email'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Correo Electrónico
								</label>
								<input
									type='email'
									name='email'
									id='email'
									value={formData.email}
									onChange={handleChange}
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									placeholder='nombre@mail.com'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='password'
									className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
									Contraseña
								</label>
								<input
									type='password'
									name='password'
									id='password'
									value={formData.password}
									onChange={handleChange}
									placeholder='••••••••'
									className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
									required
								/>
							</div>
							<button
								type='submit'
								className='w-full text-white bg-violet-600 hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'>
								Iniciar sesión
							</button>
							<p className='text-sm font-light text-gray-500 dark:text-gray-400'>
								¿No tienes una cuenta?{' '}
								<a
									href='/register'
									className='font-medium text-primary-600 hover:underline dark:text-primary-500'>
									Crea una cuenta aqui!
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default LoginForm;
