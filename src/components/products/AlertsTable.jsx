import { motion } from "framer-motion";
import { Edit, Search, Trash2 } from "lucide-react";
import { useState } from "react";

const ALERT_DATA = [
	{
		id: 1,
		name: "SNMP AgentX",
		classification: "Attempted Information Leak",
		priority: 2,
		src_ip: "192.168.2.45:34385",
		dest_ip: "172.28.83.69:161",
	},
	{
		id: 2,
		name: "ICMP Large ICMP Packet",
		classification: "Potentially Bad Traffic",
		priority: 2,
		src_ip: "192.168.2.45:541",
		dest_ip: "172.28.83.69:161",
	},
	{
		id: 3,
		name: "DDOS mstream",
		classification: "Attempted Denial of Service",
		priority: 1,
		src_ip: "192.168.2.45:36418",
		dest_ip: "172.28.83.69:161",
	},
];

const AlertsTable = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredAlerts, setFilteredAlerts] = useState(ALERT_DATA);

	const handleSearch = (e) => {
		const term = e.target.value.toLowerCase();
		setSearchTerm(term);
		const filtered = ALERT_DATA.filter(
			(product) => product.name.toLowerCase().includes(term) || product.category.toLowerCase().includes(term)
		);

		setFilteredAlerts(filtered);
	};

	return (
		<motion.div
			className='bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700 mb-8'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2 }}
		>
			<div className='flex justify-between items-center mb-6'>
				<h2 className='text-xl font-semibold text-gray-100'>Alert List</h2>
				<div className='relative'>
					<input
						type='text'
						placeholder='Search attacks...'
						className='bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
						onChange={handleSearch}
						value={searchTerm}
					/>
					<Search className='absolute left-3 top-2.5 text-gray-400' size={18} />
				</div>
			</div>

			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-700'>
					<thead>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Name
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Classification
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Priority
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Src IP
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Dest IP
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>

					<tbody className='divide-y divide-gray-700'>
						{filteredAlerts.map((product) => (
							<motion.tr
								key={product.id}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100 flex gap-2 items-center'>
									<img
										src='https://images.unsplash.com/photo-1627989580309-bfaf3e58af6f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2lyZWxlc3MlMjBlYXJidWRzfGVufDB8fDB8fHww'
										alt='Alert img'
										className='size-10 rounded-full'
									/>
									{product.name}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{product.classification}
								</td>

								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									{product.priority}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.src_ip}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>{product.dest_ip}</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-300'>
									<button className='text-indigo-400 hover:text-indigo-300 mr-2'>
										<Edit size={18} />
									</button>
									<button className='text-red-400 hover:text-red-300'>
										<Trash2 size={18} />
									</button>
								</td>
							</motion.tr>
						))}
					</tbody>
				</table>
			</div>
		</motion.div>
	);
};
export default AlertsTable;
