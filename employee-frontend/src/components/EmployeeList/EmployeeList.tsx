import { useContext } from "react";
import style from "./EmployeeList.module.scss";
import { EmployeeContext } from "../../App";
import { EmployeeDTO } from "../../Types/Employee";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const EmployeeList = () => {
	const employees = useContext(EmployeeContext);
	return (
		<>
			{employees && (
				<div className={style.list}>
					{employees
						.sort((a, b) => {
							const nameA = a.lastName?.toLowerCase();
							const nameB = b.lastName?.toLowerCase();
							if (nameA && nameB) {
								if (nameA < nameB) {
									return -1;
								}
								if (nameA > nameB) {
									return 1;
								}
							}
							return 0;
						})
						.map((emp: EmployeeDTO, i: number) => {
							return <EmployeeCard {...emp} key={i} />;
						})}
				</div>
			)}
		</>
	);
};

export default EmployeeList;
