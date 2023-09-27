import { useNavigate, useParams } from "react-router";
import { EmployeeDTO } from "../../Types/Employee";
import { useContext, useState } from "react";
import { EmployeeContext } from "../../App";
import { SubmitHandler, useForm } from "react-hook-form";
import { updateEmployeeById } from "../../services/api-service";

const EmployeePage = ({ setLoading }: any) => {
	const [success, setSuccess] = useState<boolean | undefined>();
	const employees = useContext(EmployeeContext);
	const nav = useNavigate();

	const { register, handleSubmit } = useForm<EmployeeDTO>();

	let { id } = useParams();

	const employee: EmployeeDTO | undefined = employees.find(
		(emp: EmployeeDTO) => emp.id + "" == id
	);

	const onSubmit: SubmitHandler<EmployeeDTO> = async (data) => {
		console.log(data);
		const updated = await updateEmployeeById(employee?.id, data);
		setSuccess(updated);
		nav("/");
		setLoading(true);
	};

	return (
		<>
			<header className="bg-gray-200 flex  flex-col justify-center">
				<p
					onClick={() => nav("/")}
					className="pt-2 pl-40  text-blue-600 hover:text-blue-950 cursor-pointer"
				>
					{"←"} Back
				</p>
				<h2 className="font-bold text-gray-900 pt-2 pl-40 pb-10 text-4xl">
					Edit employee
				</h2>
			</header>
			{employee && (
				<main>
					<form
						className="pl-40 pb-40 flex flex-col gap-4"
						onSubmit={handleSubmit(onSubmit)}
					>
						<h2 className="text-gray-700 font-bold text-2xl pt-10">
							Personal details
						</h2>
						<div className="flex flex-col gap-2">
							<label htmlFor="firstName" className="text-gray-700 font-bold">
								First name:{" "}
							</label>
							<input
								defaultValue={employee.firstName}
								type="text"
								placeholder="John"
								required
								className="w-80 border-slate-400 p-1 rounded-md border-2"
								{...register("firstName")}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="lastName" className="text-gray-700 font-bold">
								Last name:{" "}
							</label>
							<input
								defaultValue={employee.lastName}
								type="text"
								placeholder="Smith"
								required
								{...register("lastName")}
								className="w-80 border-slate-400 p-1 rounded-md border-2"
							/>
						</div>
						<h2 className="text-gray-700 font-bold text-2xl pt-10">
							Contact details
						</h2>
						<div className="flex flex-col gap-2">
							<label htmlFor="email" className="text-gray-700 font-bold">
								Email address:{" "}
							</label>
							<input
								type="email"
								placeholder="jsmith@gmail.com"
								required
								{...register("email")}
								className="w-80 border-slate-400 p-1 rounded-md border-2"
								defaultValue={employee.email}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="mobile" className="text-gray-700 font-bold">
								Mobile number:{" "}
							</label>
							<input
								type="phone"
								placeholder="+61234567890"
								{...register("mobile")}
								className="w-80 border-slate-400 p-1 rounded-md border-2"
								defaultValue={employee.mobile}
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="address" className="text-gray-700 font-bold">
								Address:{" "}
							</label>
							<input
								type="text"
								placeholder="1 Melbourne Way, Sydney, 4000"
								{...register("address")}
								className="w-80 border-slate-400 p-1 rounded-md border-2"
								defaultValue={employee.address}
							/>
						</div>
						<h2 className="text-gray-700 font-bold text-2xl pt-10">
							Employment status
						</h2>
						<fieldset
							{...register("contractType")}
							className="flex flex-col gap-2"
						>
							<legend className="text-gray-700 font-bold pb-2">
								Contract type:
							</legend>
							<div className="flex gap-2 items-center">
								<input
									type="radio"
									value="Permanent"
									id="permanent"
									{...register("contractType")}
									required
									className="h-5 w-5"
									defaultChecked={employee.contractType == "Permanent"}
								/>
								<label htmlFor="permanent">Permanent</label>
							</div>
							<div className="flex gap-2 items-center">
								<input
									type="radio"
									value="Contract"
									id="contract"
									{...register("contractType")}
									required
									className="h-5 w-5"
									defaultChecked={employee.contractType == "Contract"}
								/>
								<label htmlFor="contract">Contract</label>
							</div>
						</fieldset>
						<div className="flex flex-col gap-2">
							<label htmlFor="start" className="text-gray-700 font-bold">
								Start date:{" "}
							</label>
							<input
								type="date"
								id="start"
								min={Date.now()}
								{...register("startDate")}
								required
								defaultValue={employee.startDate}
								className="w-40 border-slate-400 p-1 rounded-md border-2"
							/>
						</div>
						<div className="flex flex-col gap-2">
							<label htmlFor="end" className="text-gray-700 font-bold">
								End date:{" "}
							</label>
							<input
								type="date"
								id="end"
								min={Date.now()}
								{...register("endDate")}
								className="w-40 border-slate-400 p-1 rounded-md border-2"
								defaultValue={employee.endDate}
							/>
						</div>
						<fieldset className="flex flex-col gap-2">
							<legend className="text-gray-700 font-bold pb-2">
								Full-time or part-time?
							</legend>
							<div className="flex gap-2 items-center">
								<input
									type="radio"
									value="Full-time"
									id="fullTime"
									{...register("contract")}
									required
									className="h-5 w-5"
									defaultChecked={employee.contract == "Full-time"}
								/>
								<label htmlFor="fullTime">Full-time</label>
							</div>
							<div className="flex gap-2 items-center">
								<input
									type="radio"
									value="Part-time"
									id="partTime"
									{...register("contract")}
									required
									className="h-5 w-5"
									defaultChecked={employee.contract == "Part-time"}
								/>
								<label htmlFor="partTime">Part-time</label>
							</div>
							<div className="flex gap-2 items-center">
								<input
									type="radio"
									value="Casual"
									id="casual"
									{...register("contract")}
									required
									className="h-5 w-5"
									defaultChecked={employee.contract == "Casual"}
								/>{" "}
								<label htmlFor="casual">Casual</label>
							</div>
						</fieldset>
						<div className="flex flex-col gap-2 pb-10">
							<label htmlFor="hours" className="text-gray-700 font-bold">
								Hours:{" "}
							</label>
							<input
								type="number"
								{...register("hours")}
								defaultValue={employee.hours}
								className="w-20 border-slate-400 p-1 rounded-md border-2"
							/>
						</div>
						<div className="flex gap-5">
							<input
								className="bg-blue-600 p-3 w-40 rounded-md text-white hover:bg-blue-950 cursor-pointer"
								type="submit"
								value="Save changes"
							/>
							<button
								onClick={() => nav("/")}
								className="bg-gray-400 p-3 w-40 rounded-md text-white hover:bg-blue-950 cursor-pointer"
							>
								Cancel
							</button>
						</div>
					</form>
				</main>
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
