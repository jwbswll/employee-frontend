import { EmployeeDTO } from "../Types/Employee";
import axios from "axios";

const EMPLOYEE_REST_URL = "http://localhost:8080/employees/";

export const getEmployees = async (setEmployees: Function) => {
	const response = await fetch(EMPLOYEE_REST_URL, {
		method: "get",
		headers: {
			Accept: "application/json, text/plain",
			"Content-type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	});
	const data: EmployeeDTO[] = await response.json();
	setEmployees(data);
};

export const getEmployeesAxios = async (setEmployees: Function) => {
	try {
		const employeeData = await axios.get(EMPLOYEE_REST_URL);
		setEmployees(employeeData.data);
	} catch (e) {
		console.log(e);
	}
};

export const getEmployeeById = async (id: number) => {
	try {
		const employeeData = await fetch(`${EMPLOYEE_REST_URL}${id}`, {
			method: "get",
			headers: {
				Accept: "application/json, text/plain",
				"Content-type": "application/json",
			},
			credentials: "same-origin",
		});
		return await employeeData.json();
	} catch (e) {
		console.log(e);
	}
};

export const getEmployeeByIdAxios = async (id: number) => {
	try {
		const employeeData = await axios.get(`${EMPLOYEE_REST_URL}${id}`);
		return employeeData.data;
	} catch (e) {
		console.log(e);
	}
};

export const addEmployee = async (data: any) => {
	try {
		const response = await fetch(EMPLOYEE_REST_URL, {
			method: "post",
			headers: {
				Accept: "application/json, text/plain",
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		});
		console.log(response);
		return response;
	} catch (e) {
		console.log(e);
	}
};

export const addEmployeeAxios = async (data: EmployeeDTO) => {
	try {
		const response = await axios.post(EMPLOYEE_REST_URL, data);
		console.log(response);
		return response;
	} catch (e) {
		console.log(e);
	}
};

export const updateEmployeeById = async (id: number | undefined, data: any) => {
	try {
		const response = await fetch(`${EMPLOYEE_REST_URL}${id}`, {
			method: "PATCH",
			headers: {
				Accept: "application/json, text/plain",
				"Content-type": "application/json",
			},
			body: JSON.stringify(data),
		}).then((res) => res.ok);
		console.log(response);
		return response;
	} catch (e) {
		console.log(e);
	}
};

export const deleteEmployeeById = async (id: number) => {
	try {
		const response = await fetch(`${EMPLOYEE_REST_URL}${id}`, {
			method: "delete",
			headers: {
				Accept: "application/json, text/plain",
				"Content-type": "application/json",
			},
		}).then((res) => res.text());
		console.log(response);
		return response;
	} catch (e) {
		console.log(e);
	}
};
