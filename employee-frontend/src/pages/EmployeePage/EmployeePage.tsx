import { useParams } from "react-router";
import style from "./EmployeePage.module.scss";
import { EmployeeDTO } from "../../Types/Employee";
import { useContext } from "react";
import { EmployeeContext } from "../../App";

const EmployeePage = () => {
	const employees = useContext(EmployeeContext);
	let { id } = useParams();
	const employee = id
		? employees.find((emp: EmployeeDTO) => emp.id + "" == id)
		: null;
	return <div>{employee?.firstName}</div>;
};

export default EmployeePage;
