import { useContext } from "react";
import style from "./HomePage.module.scss";
import { EmployeeContext } from "../../App";
import EmployeeList from "../../components/EmployeeList/EmployeeList";

const HomePage = () => {
	const employees = useContext(EmployeeContext);
	console.log(employees);

	return (
		<>
			<EmployeeList />
		</>
	);
};

export default HomePage;
