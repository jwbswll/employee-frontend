import { useEffect } from "react";
import "./App.css";
import {
	addEmployee,
	// deleteEmployeeById,
	getEmployees,
	// updateEmployeeById,
} from "./services/api-service";

function App() {
	useEffect(() => {
		// deleteEmployeeById(253);
		getEmployees();
		// updateEmployeeById(555, {
		// 	firstName: "Jack",
		// 	lastName: "boswell",
		// 	email: "test12321@test1.com",
		// 	mobile: 612345678,
		// 	startDate: "2023-09-09",
		// 	contractType: "Permanent",
		// 	contract: "Full-time",
		// });
		addEmployee({
			firstName: "Jvack",
			lastName: "bloswell",
			email: "tesrt24331@test1.com",
			mobile: 61545536578,
			startDate: "2023-09-09",
			contractType: "Permanent",
			contract: "Full-time",
			hours: null,
		});
	}, []);
	return <></>;
}

export default App;
