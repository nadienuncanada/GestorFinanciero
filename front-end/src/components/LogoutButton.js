import React from 'react';
import { useLogout } from '../utils/Auth';
import CustomModal from './CustomModal';

const LogoutButton = () => {
	const { handleLogout, isModalOpen, confirmLogout, cancelLogout } =
		useLogout();

	return (
		<>
			<button onClick={handleLogout}>Cerrar sesión</button>
			{isModalOpen && (
				<CustomModal
					message='¿Estás seguro de que deseas cerrar sesión?'
					onConfirm={confirmLogout}
					onCancel={cancelLogout}
				/>
			)}
		</>
	);
};

export default LogoutButton;
