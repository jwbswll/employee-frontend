import { createContext, useEffect, useState } from "react";
import "./App.css";
import { getEmployees } from "./services/api-service";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import EmployeePage from "./pages/EmployeePage/EmployeePage";
import { EmployeeDTO } from "./Types/Employee";

const initialState = {
	employees: null,
	setEmployees: () => {},
};

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
				<EmployeeContext.Provider value={{ employees, setEmployees }}>
					<BrowserRouter>
						{/* @ts-expect-error Server Component */}
						<Routes>
							{/* @ts-expect-error Server Component */}
							<Route path="/" element={<HomePage />} />
							{/* @ts-expect-error Server Component */}
							<Route path="/:id" element={<EmployeePage />} />
						</Routes>
					</BrowserRouter>
				</EmployeeContext.Provider>
			)}
		</>
	);
}

export default App;
