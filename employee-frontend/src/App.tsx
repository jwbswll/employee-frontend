import { useEffect } from "react";
import "./App.css";
import { updateEmployeeById } from "./services/api-service";

function App() {
	useEffect(() => {
		// getEmployees();
		// getEmployeeById(1);
		// addEmployee();
		updateEmployeeById(2);
	}, []);

	return <></>;
}

export default App;
