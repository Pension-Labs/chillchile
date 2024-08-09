'use client';

import Image from 'next/image';

import { useState } from 'react';

export default function Home() {
	const [email, setEmail] = useState('');

	const handleSend = () => {
		// Obtener la fecha y hora actuales en milisegundos desde el epoch
		const now = Date.now();

		// Crear un objeto Date a partir del timestamp actual
		const date = new Date(now);

		// Especificar la región y opciones de formato para Chile
		const options = {
			year: 'numeric' as 'numeric',
			month: '2-digit' as '2-digit',
			day: '2-digit' as '2-digit',
			hour: '2-digit' as '2-digit',
			minute: '2-digit' as '2-digit',
			second: '2-digit' as '2-digit',
			timeZone: 'America/Santiago',
			hour12: false,
		};

		// Crear el formateador de fecha y hora para la región especificada
		const dateTimeFormat = new Intl.DateTimeFormat('es-CL', options);

		// Formatear la fecha
		const formattedDate = dateTimeFormat.format(date);
		fetch('/api/NewsLetter', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ EMAIL: email, FECHA: formattedDate }),
		})
			.then(res => res.json())
			.then(r => {
				window.alert(r.message);
			});
	};
	return (
		<main className="flex min-h-full  flex-col items-center justify-center p-24">
			<div className="w-full flex flex-col gap-y-4 max-w-5xl items-center justify-center text-center font-mono">
				<Image
					src="/assets/image5.png"
					alt="ChillChile"
					width={593}
					height={360}
				/>
				<a
					href="mailto:nico@pensionfi.com"
					className="underline hover:text-blue-500"
				>
					Quiero publicitar acá
				</a>
				<a
					href="mailto:nico@pensionfi.com"
					className="underline hover:text-blue-500"
				>
					Quiero comprar este dominio
				</a>
			</div>
		</main>
	);
}
