import { useEffect } from 'react';
import { Suspense } from 'react';
import FinancialSummary from '../components/FinancialSummary';
import SpendingChart from '../components/SpendingChart';
import SavingsGoalChart from '../components/SavingsGoalChart';
import MonthlyOverviewChart from '../components/MonthlyOverviewChart';
import { Card, CardContent, CardHeader } from '@mui/material';
import Navbar from '../components/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import withAuth from '../utils/withAuth';

function DashboardPage() {
	return (
		<div className='w-screen h-screen'>
			<Navbar />
			<div className='container mx-auto px-4 py-8'>
				<h1 className='text-3xl font-bold mb-6'>Panel Financiero</h1>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					<Suspense fallback={<div>Cargando resumen financiero...</div>}>
						<FinancialSummary />
					</Suspense>
					<Card>
						<CardHeader title='Gastos vs. Meta' />
						<CardContent>
							<Suspense fallback={<div>Cargando gráfico de gastos...</div>}>
								<SpendingChart />
							</Suspense>
						</CardContent>
					</Card>
					<Card>
						<CardHeader title='Progreso de Ahorro' />
						<CardContent>
							<Suspense fallback={<div>Cargando gráfico de ahorro...</div>}>
								<SavingsGoalChart />
							</Suspense>
						</CardContent>
					</Card>
					<Card>
						<CardHeader title='Resumen Mensual' />
						<CardContent>
							<Suspense fallback={<div>Cargando resumen mensual...</div>}>
								<MonthlyOverviewChart />
							</Suspense>
						</CardContent>
					</Card>
				</div>
			</div>
			<ToastContainer />
		</div>
	);
}
export default withAuth(DashboardPage);
