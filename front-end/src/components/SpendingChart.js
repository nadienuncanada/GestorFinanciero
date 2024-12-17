import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const data = [
	{ name: 'Gastado', value: 3000 },
	{ name: 'Restante', value: 1000 },
];

const COLORS = ['#0088FE', '#00C49F'];

export default function SpendingChart() {
	return (
		<ResponsiveContainer
			width='100%'
			height={300}>
			<PieChart>
				<Pie
					data={data}
					cx='50%'
					cy='50%'
					labelLine={false}
					outerRadius={80}
					fill='#8884d8'
					dataKey='value'>
					{data.map((entry, index) => (
						<Cell
							key={`cell-${index}`}
							fill={COLORS[index % COLORS.length]}
						/>
					))}
				</Pie>
				<Legend />
			</PieChart>
		</ResponsiveContainer>
	);
}
