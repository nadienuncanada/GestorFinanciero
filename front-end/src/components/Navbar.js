import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../utils/Auth';
import CustomModal from './CustomModal';

function Navbar() {
	const token = localStorage.getItem('access_token');
	const { handleLogout, isModalOpen, confirmLogout, cancelLogout } =
		useLogout();

	return (
		<header className='bg-violet-950 text-white py-6 md:py-8 px-4 shadow-md'>
			<div className='max-w-8xl mx-auto flex justify-between items-center lg:px-10 xl:px-20'>
				<h1 className='text-3xl md:text-4xl font-bold '>
					<Link to='/'>Gestor Financiero</Link>
				</h1>
				<nav className='flex gap-4'>
					{!token ? (
						<>
							<Link
								to='/register'
								className='text-slate-950 sm:py-4 md:py-2 lg:py-4 px-4 font-bold'>
								Registrarse
							</Link>
							<Link
								to='/login'
								className='text-slate-950 sm:py-4 md:py-2 lg:py-4 px-4 font-bold'>
								Iniciar Sesión
							</Link>
						</>
					) : (
						<button
							onClick={handleLogout}
							className='text-slate-950 sm:py-4 md:py-2 lg:py-4 px-4 font-bold'>
							Cerrar Sesión
						</button>
					)}
				</nav>
			</div>
			{isModalOpen && (
				<CustomModal
					message='¿Estás seguro de que deseas cerrar sesión?'
					onConfirm={confirmLogout}
					onCancel={cancelLogout}
				/>
			)}
		</header>
	);
}

export default Navbar;
