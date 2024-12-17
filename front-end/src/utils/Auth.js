import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const useLogout = () => {
	const navigate = useNavigate();
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleLogout = () => {
		setIsModalOpen(true);
	};

	const confirmLogout = () => {
		localStorage.removeItem('access_token');
		navigate('/login');
	};

	const cancelLogout = () => {
		setIsModalOpen(false);
	};

	return {
		handleLogout,
		isModalOpen,
		confirmLogout,
		cancelLogout,
	};
};
