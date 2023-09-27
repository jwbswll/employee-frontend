import { createContext, useEffect, useState } from "react";
import "./App.css";
import { getEmployees } from "./services/api-service";
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
			getEmployees(setEmployees);
			setLoading(false);
			console.log("hello");
		}
	}, [loading]);
	return (
		<>
			{!loading && (
				<EmployeeContext.Provider value={employees}>
					<BrowserRouter>
						<ScrollToTop />
						{/* @ts-expect-error Server Component */}
						<Routes>
							{/* @ts-expect-error Server Component */}
							<Route path="/" element={<HomePage setLoading={setLoading} />} />
							{/* @ts-expect-error Server Component */}
							<Route
								path="/:id"
								element={<EmployeePage setLoading={setLoading} />}
							/>
							{/* @ts-expect-error Server Component */}
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
