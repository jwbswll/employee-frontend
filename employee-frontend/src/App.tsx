import { createContext, useEffect, useState } from "react";
import "./App.css";
import { getEmployees } from "./services/api-service";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import EmployeePage from "./pages/EmployeePage/EmployeePage";
import { EmployeeDTO } from "./Types/Employee";
import AddEmployeePage from "./pages/AddEmployeePage/AddEmployeePage";

const initialState: EmployeeDTO[] = [];

export const EmployeeContext = createContext(initialState);
function App() {
	const [employees, setEmployees] = useState<EmployeeDTO[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (loading) {
			getEmployees(setEmployees);
			setLoading(false);
		}
	}, []);

	return (
		<>
			{!loading && (
				<EmployeeContext.Provider value={employees}>
					<BrowserRouter>
						{/* @ts-expect-error Server Component */}
						<Routes>
							{/* @ts-expect-error Server Component */}
							<Route path="/" element={<HomePage />} />
							{/* @ts-expect-error Server Component */}
							<Route path="/:id" element={<EmployeePage />} />
							{/* @ts-expect-error Server Component */}
							<Route path="/add" element={<AddEmployeePage />} />
						</Routes>
					</BrowserRouter>
				</EmployeeContext.Provider>
			)}
		</>
	);
}

export default App;
