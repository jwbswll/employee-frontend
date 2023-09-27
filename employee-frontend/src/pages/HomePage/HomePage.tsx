import { useContext } from "react";
import { EmployeeContext } from "../../App";
import EmployeeList from "../../components/EmployeeList/EmployeeList";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
	const employees = useContext(EmployeeContext);
	console.log(employees);
	const nav = useNavigate();

	return (
		<>
			<header className="bg-gray-200 flex items-center">
				<h2 className="font-bold text-gray-900 pt-10 pl-40 pb-10 text-4xl">
					Employees
				</h2>
			</header>
			<main className="flex justify-center pl-40 pr-40 flex-col">
				<div className="pt-10 pb-5 flex justify-between items-center">
					<p>Click edit to view/change an employee's information</p>
					<button
						className="bg-blue-600 p-3 rounded-md text-white hover:bg-blue-950"
						onClick={() => nav("/add")}
					>
						Add Employee
					</button>
				</div>
				<EmployeeList />
			</main>
		</>
	);
};

export default HomePage;
