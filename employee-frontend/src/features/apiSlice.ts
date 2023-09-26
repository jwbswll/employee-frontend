import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApi = createApi({
	reducerPath: "employeeApi",
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
	endpoints: (builder) => ({
		getAllEmployees: builder.query({
			query: () => "employees",
		}),
		getEmployeeById: builder.query({
			query: (id) => `employees/${id}`,
		}),
	}),
});

export const { useGetAllEmployeesQuery, useGetEmployeeByIdQuery } = employeeApi;
