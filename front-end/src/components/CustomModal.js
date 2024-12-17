import React from 'react';
import ReactDOM from 'react-dom';

const CustomModal = ({ message, onConfirm, onCancel }) => {
	return ReactDOM.createPortal(
		<div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
			<div className='bg-white p-6 rounded-lg text-center'>
				<p className='mb-4'>{message}</p>
				<button
					className='bg-green-500 text-white px-4 py-2 rounded mr-2'
					onClick={onConfirm}>
					Sí
				</button>
				<button
					className='bg-red-500 text-white px-4 py-2 rounded'
					onClick={onCancel}>
					No
				</button>
			</div>
		</div>,
		document.body
	);
};

export default CustomModal;
