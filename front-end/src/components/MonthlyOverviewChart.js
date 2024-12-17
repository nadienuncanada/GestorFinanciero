import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{ name: 'Ene', Ingresos: 4000, Gastos: 2400 },
	{ name: 'Feb', Ingresos: 3000, Gastos: 1398 },
	{ name: 'Mar', Ingresos: 2000, Gastos: 9800 },
	{ name: 'Abr', Ingresos: 2780, Gastos: 3908 },
	{ name: 'May', Ingresos: 1890, Gastos: 4800 },
	{ name: 'Jun', Ingresos: 2390, Gastos: 3800 },
];

export default function MonthlyOverviewChart() {
	return (
		<ResponsiveContainer
			width='100%'
			height={300}>
			<LineChart
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}>
				<CartesianGrid strokeDasharray='3 3' />
				<XAxis dataKey='name' />
				<YAxis />
				<Tooltip />
				<Legend />
				<Line
					type='monotone'
					dataKey='Ingresos'
					stroke='#8884d8'
					activeDot={{ r: 8 }}
				/>
				<Line
					type='monotone'
					dataKey='Gastos'
					stroke='#82ca9d'
				/>
			</LineChart>
		</ResponsiveContainer>
	);
}
