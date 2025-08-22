import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
	username: Yup.string().required("Username is required"),
	email: Yup.string()
		.email("Invalid email format")
		.required("Email is required"),
	password: Yup.string()
		.min(8, "Password must be at least 8 characters")
		.required("Password is required"),
});

const FormikForm = () => {
	const initialValues = { username: "", email: "", password: ""};

	const handleSubmit = (values, { resetForm }) => {
		console.log("Form Submitted: ", values);

		resetForm();
	};

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow">
			<h2 className="text-xl font-semibold mb-4">Register</h2>
			<Formik 
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				<Form className="space-y-4">
					<div>
						<label className="block text-sm font-medium">Username</label>
						<Field
							type="text"
							name="username"
							className="w-full border rounded p-2 mt-1"
						/>
						<ErrorMessage
							name="username"
							component="div"
							className="text-red-500 text-sm mt-1"
						/>
					</div>

					<div>
                                                <label className="block text-sm font-medium">Email</label>
                                                <Field
                                                        type="email"
                                                        name="email"
                                                        className="w-full border rounded p-2 mt-1"
                                                />
                                                <ErrorMessage
                                                        name="email"
                                                        component="div"
                                                        className="text-red-500 text-sm mt-1"
                                                />
                                        </div>

					<div>
                                                <label className="block text-sm font-medium">Password</label>
                                                <Field
                                                        type="password"
                                                        name="password"
                                                        className="w-full border rounded p-2 mt-1"
                                                />
                                                <ErrorMessage
                                                        name="password"
                                                        component="div"
                                                        className="text-red-500 text-sm mt-1"
                                                />
                                        </div>

					<button 
						type="submit"
						className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
					>
					Register
					</button>
				</Form>
			</Formik>
		</div>
	);
};

export default FormikForm;
