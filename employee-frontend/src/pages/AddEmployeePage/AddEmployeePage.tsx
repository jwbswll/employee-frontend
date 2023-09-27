import { EmployeeDTO } from "../../Types/Employee";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { addEmployee } from "../../services/api-service";

const AddEmployeePage = () => {
	const [success, setSuccess] = useState<boolean | undefined>();

	const { register, handleSubmit } = useForm<EmployeeDTO>();

	const onSubmit: SubmitHandler<EmployeeDTO> = async (data) => {
		console.log(data);
		const added = await addEmployee(data);
		console.log(added);
	};

	return (
		<>
			<header className="bg-gray-200 flex items-center">
				<h2 className="font-bold text-gray-900 pt-10 pl-40 pb-10 text-4xl">
					Add Employee
				</h2>
			</header>
			<form className="pl-40 pt-10" onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="firstName">First name: </label>
					<input
						type="text"
						placeholder="John"
						required
						{...register("firstName")}
					/>
				</div>
				<div>
					<label htmlFor="lastName">Last name: </label>
					<input
						type="text"
						placeholder="Smith"
						required
						{...register("lastName")}
					/>
				</div>
				<div>
					<label htmlFor="email">Email address: </label>
					<input
						type="email"
						placeholder="jsmith@gmail.com"
						required
						{...register("email")}
					/>
				</div>
				<div>
					<label htmlFor="mobile">Mobile number: </label>
					<input
						type="phone"
						placeholder="+61234567890"
						{...register("mobile")}
					/>
				</div>
				<div>
					<label htmlFor="address">Address: </label>
					<input
						type="text"
						placeholder="1 Melbourne Way, Sydney, 4000"
						{...register("address")}
					/>
				</div>
				<fieldset {...register("contractType")}>
					<legend>Contract type</legend>
					<div>
						<input
							type="radio"
							value="Permanent"
							id="permanent"
							{...register("contractType")}
							required
						/>
						<label htmlFor="permanent">Permanent</label>
					</div>
					<div>
						<input
							type="radio"
							value="Contract"
							id="contract"
							{...register("contractType")}
							required
						/>
						<label htmlFor="contract">Contract</label>
					</div>
				</fieldset>
				<div>
					<label htmlFor="start">Start date: </label>
					<input
						type="date"
						id="start"
						min={Date.now()}
						{...register("startDate")}
						required
					/>
				</div>
				<div>
					<label htmlFor="end">End date: </label>
					<input
						type="date"
						id="end"
						min={Date.now()}
						{...register("endDate")}
					/>
				</div>
				<fieldset>
					<legend>Full-time or part-time?</legend>
					<div>
						<input
							type="radio"
							value="Full-time"
							id="fullTime"
							{...register("contract")}
							required
						/>
						<label htmlFor="fullTime">Full-time</label>
					</div>
					<div>
						<input
							type="radio"
							value="Part-time"
							id="partTime"
							{...register("contract")}
							required
						/>
						<label htmlFor="partTime">Part-time</label>
					</div>
					<div>
						<input
							type="radio"
							value="Casual"
							id="casual"
							{...register("contract")}
							required
						/>{" "}
						<label htmlFor="casual">Casual</label>
					</div>
				</fieldset>
				<div>
					<label htmlFor="hours">Hours: </label>
					<input type="number" {...register("hours")} />
				</div>
				<input type="submit" value="Add Employee" />
			</form>
			{success && (
				<div>
					<p>Employee successfully added</p>
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

export default AddEmployeePage;
