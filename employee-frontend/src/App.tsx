import { createContext, useEffect, useState } from "react";
import "./App.css";
import { getEmployeesAxios } from "./services/api-service";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import EmployeePage from "./pages/EmployeePage/EmployeePage";
import { EmployeeDTO } from "./Types/Employee";
import AddEmployeePage from "./pages/AddEmployeePage/AddEmployeePage";
import ScrollToTop from "./components/ScrollToTop";

const initialState: EmployeeDTO[] = [];

export const EmployeeContext = createContext(initialState);
function App() {
	const [employees, setEmployees] = useState<EmployeeDTO[]>([]);
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (loading) {
			getEmployeesAxios(setEmployees);
			setLoading(false);
		}
	}, [loading]);
	return (
		<>
			{!loading && (
				<EmployeeContext.Provider value={employees}>
					<BrowserRouter>
						<ScrollToTop />
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route
								path="/:id"
								element={<EmployeePage setLoading={setLoading} />}
							/>
							<Route
								path="/add"
								element={<AddEmployeePage setLoading={setLoading} />}
							/>
						</Routes>
						<footer className="bg-gray-200 h-20 flex flex-col justify-center">
							<p className="text-center">© Jack Boswell</p>
						</footer>
					</BrowserRouter>
				</EmployeeContext.Provider>
			)}
		</>
	);
}

export default App;
