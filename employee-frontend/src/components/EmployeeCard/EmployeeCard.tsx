import { useNavigate } from "react-router";
import { EmployeeDTO } from "../../Types/Employee";
import { deleteEmployeeById } from "../../services/api-service";
import style from "./EmployeeCard.module.scss";

const EmployeeCard = ({
	id,
	firstName,
	lastName,
	contract,
	contractType,
	email,
}: EmployeeDTO) => {
	const nav = useNavigate();
	const deleteEmployee = () => {
		deleteEmployeeById(id);
	};
	return (
		<div className="p-4 border-t-2 w-70 flex justify-between">
			<div className="text-left flex flex-col gap-2">
				<p className="text-md font-bold text-gray-900">{`${firstName} ${lastName}`}</p>
				<p className="text-md font-medium text-gray-900">{`${contractType} - ${contract}`}</p>
				<p className="text-sm text-gray-500">{email}</p>
			</div>
			<div className={style.links}>
				<p className="text-lg">
					<span
						className=" text-blue-600 hover:text-blue-950 cursor-pointer"
						onClick={() => nav(`/${id}`)}
					>
						Edit
					</span>{" "}
					|<span> </span>
					<span
						className=" text-blue-600 hover:text-blue-950 cursor-pointer"
						onClick={() => deleteEmployee()}
					>
						Remove
					</span>
				</p>
			</div>
		</div>
	);
};

export default EmployeeCard;
