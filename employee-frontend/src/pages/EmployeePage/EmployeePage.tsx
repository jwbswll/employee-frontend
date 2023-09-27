import { useParams } from "react-router";
import style from "./EmployeePage.module.scss";
import { EmployeeDTO } from "../../Types/Employee";
import { useContext, useState } from "react";
import { EmployeeContext } from "../../App";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateEmployeeById } from "../../services/api-service";

const EmployeePage = () => {
	const [success, setSuccess] = useState<boolean | undefined>();
	const employees = useContext(EmployeeContext);

	const { register, handleSubmit } = useForm<EmployeeDTO>();

	let { id } = useParams();

	const employee: EmployeeDTO | undefined = employees.find(
		(emp: EmployeeDTO) => emp.id + "" == id
	);

	const onSubmit: SubmitHandler<EmployeeDTO> = async (data) => {
		console.log(data);
		const updated = await updateEmployeeById(employee?.id, data);
		setSuccess(updated);
	};

	return (
		<>
			{employee && (
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						defaultValue={employee.firstName}
						placeholder="John"
						required
						{...register("firstName")}
					/>
					<input
						type="text"
						defaultValue={employee.lastName}
						placeholder="Smith"
						required
						{...register("lastName")}
					/>
					<input
						type="email"
						defaultValue={employee.email}
						placeholder="jsmith@gmail.com"
						required
						{...register("email")}
					/>
					<input
						type="phone"
						defaultValue={employee.mobile}
						placeholder="+61234567890"
						{...register("mobile")}
					/>
					<input
						type="text"
						defaultValue={employee.address}
						placeholder="1 Melbourne Way, Sydney, 4000"
						{...register("address")}
					/>
					<fieldset {...register("contractType")}>
						<legend>Contract type</legend>
						<label htmlFor="permanent">Permanent</label>
						<input
							type="radio"
							value="Permanent"
							id="permanent"
							defaultChecked={employee.contractType == "Permanent"}
							{...register("contractType")}
						/>
						<label htmlFor="contract">Contract</label>
						<input
							type="radio"
							value="Contract"
							id="contract"
							defaultChecked={employee.contractType == "Contract"}
							{...register("contractType")}
						/>
					</fieldset>
					<div>
						<label htmlFor="start">Start date:</label>
						<input
							type="date"
							id="start"
							defaultValue={employee.startDate}
							min={Date.now()}
							{...register("startDate")}
							required
						/>
					</div>
					<div>
						<label htmlFor="end">End date:</label>
						<input
							type="date"
							id="end"
							defaultValue={employee.endDate}
							min={Date.now()}
							{...register("endDate")}
						/>
					</div>
					<fieldset></fieldset>
					<fieldset>
						<legend>Full-time or part-time?</legend>
						<label htmlFor="fullTime">Full-time</label>
						<input
							type="radio"
							value="Full-time"
							id="fullTime"
							defaultChecked={employee.contract == "Full-time"}
							{...register("contract")}
							required
						/>
						<label htmlFor="partTime">Part-time</label>
						<input
							type="radio"
							value="Part-time"
							id="partTime"
							defaultChecked={employee.contract == "Part-time"}
							{...register("contract")}
							required
						/>
						<label htmlFor="casual">Casual</label>
						<input
							type="radio"
							value="Casual"
							id="casual"
							defaultChecked={employee.contract == "Casual"}
							{...register("contract")}
							required
						/>
					</fieldset>
					<input defaultValue={employee.hours} {...register("hours")} />
					<input type="submit" value="Save" />
				</form>
			)}
			{success && (
				<div>
					<p>Record successfully updated</p>
				</div>
			)}
			{success == false && (
				<div>
					<p>Update unsuccessful</p>
				</div>
			)}
		</>
	);
};

export default EmployeePage;
