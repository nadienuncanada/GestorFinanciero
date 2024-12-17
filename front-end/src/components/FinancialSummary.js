import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export default function FinancialSummary() {
	// En una aplicación real, estos datos vendrían de una API o base de datos
	const financialData = {
		remainingMoney: 5000,
		spentMoney: 3000,
		spendingGoal: 4000,
		savingsGoal: 2000,
	};

	return (
		<div className='grid grid-cols-2 gap-4'>
			<Card>
				<CardHeader title='Dinero Restante' />
				<CardContent>
					<Typography
						variant='h5'
						component='div'>
						${financialData.remainingMoney}
					</Typography>
				</CardContent>
			</Card>
			<Card>
				<CardHeader title='Dinero Gastado' />
				<CardContent>
					<Typography
						variant='h5'
						component='div'>
						${financialData.spentMoney}
					</Typography>
				</CardContent>
			</Card>
			<Card>
				<CardHeader title='Meta de Gasto' />
				<CardContent>
					<Typography
						variant='h5'
						component='div'>
						${financialData.spendingGoal}
					</Typography>
				</CardContent>
			</Card>
			<Card>
				<CardHeader title='Meta de Ahorro' />
				<CardContent>
					<Typography
						variant='h5'
						component='div'>
						${financialData.savingsGoal}
					</Typography>
				</CardContent>
			</Card>
		</div>
	);
}
