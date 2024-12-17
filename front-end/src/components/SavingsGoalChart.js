'use client';

import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from 'recharts';

const data = [
	{ name: 'Actual', Ahorros: 1500 },
	{ name: 'Meta', Ahorros: 2000 },
];

export default function SavingsGoalChart() {
	return (
		<ResponsiveContainer
			width='100%'
			height={300}>
			<BarChart
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
				<Bar
					dataKey='Ahorros'
					fill='#8884d8'
				/>
			</BarChart>
		</ResponsiveContainer>
	);
}
