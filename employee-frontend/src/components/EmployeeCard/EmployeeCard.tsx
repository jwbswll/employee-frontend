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
	return (
		<div className={style.card}>
			<div className={style.details}>
				<p className={style.name}>{`${firstName} ${lastName}`}</p>
				<p>{`${contractType} - ${contract}`}</p>
				<p>{email}</p>
			</div>
			<div className={style.links}>
				<p>
					<span className={style.link} onClick={() => nav(`/${id}`)}>
						Edit
					</span>{" "}
					|<span> </span>
					<span className={style.link} onClick={() => deleteEmployeeById(id)}>
						Remove
					</span>
				</p>
			</div>
		</div>
	);
};

export default EmployeeCard;
