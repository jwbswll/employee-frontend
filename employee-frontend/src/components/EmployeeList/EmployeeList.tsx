import { useContext } from "react";
import style from "./EmployeeList.module.scss";
import { EmployeeContext } from "../../App";
import { EmployeeDTO } from "../../Types/Employee";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const EmployeeList = () => {
	const employees = useContext(EmployeeContext);
	console.log(employees);
	return (
		<>
			{employees && (
				<div className={style.list}>
					{employees.map((emp: EmployeeDTO, i: number) => {
						return <EmployeeCard {...emp} key={i} />;
					})}
				</div>
			)}
		</>
	);
};

export default EmployeeList;
