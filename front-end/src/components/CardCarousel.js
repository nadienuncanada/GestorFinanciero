import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import TarjetaReutilizable from './TarjetaReutilizable';

// Rutas de imágenes
import example1 from '../assets/images/example2.jpeg';

function CardCarousel() {
	const tarjetas = [
		{
			titulo: 'Gestiona tus ingresos',
			texto:
				'Controla tus ingresos y mantente al tanto de tus finanzas personales con facilidad.',
			imagen: example1,
		},
		{
			titulo: 'Planifica tus gastos',
			texto: 'Organiza tus gastos para alcanzar tus metas financieras.',
			imagen: example1,
		},
		{
			titulo: 'Reportes detallados',
			texto: 'Obtén reportes visuales para analizar tu situación financiera.',
			imagen: example1,
		},
		{
			titulo: 'Reportes detallados',
			texto: 'Obtén reportes visuales para analizar tu situación financiera.',
			imagen: example1,
		},
	];

	return (
		<div className='relative py-20 px-4 bg-cover bg-center'>
			<h2 className='text-center text-3xl font-bold mb-10 text-white'>
				Nuestros Servicios
			</h2>
			<Swiper
				slidesPerView={1.5}
				spaceBetween={10}
				breakpoints={{
					640: { slidesPerView: 2.5 },
					1024: { slidesPerView: 3.5 },
				}}
				navigation={true}
				pagination={{ clickable: true }}
				modules={[Pagination, Navigation]}
				className='mySwiper'>
				{tarjetas.map((tarjeta, index) => (
					<SwiperSlide key={index}>
						<TarjetaReutilizable
							titulo={tarjeta.titulo}
							texto={tarjeta.texto}
							imagen={tarjeta.imagen}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default CardCarousel;
