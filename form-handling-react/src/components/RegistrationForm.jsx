import React, { useState } from "react";

const RegistrationForm = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!username) {
			setError("This field is required.");
			return;
		}
		if (!email) {
                        setError("This field is required.");
                        return;
                }
		if (!password) {
                        setError("This field is required.");
                        return;
                }

		setError("");

		console.log("Form submitted: ", {username, email, password });

		setUsername("");
		setEmail("");
		setPassword("");
	};

	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow">
			<h2 className="text-xl font-semibold mb-4">Register</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				{error && <p className="text-red-500 text-sm">{error}</p>}
				
				<div>
					<label className="block text-sm font-medium">Username</label>
					<input
						type="text"
						className="w-full border rounded p-2 mt-1"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						placeholder="Enter your username"
					/>
				</div>

				<div>
                                        <label className="block text-sm font-medium">Email</label>
                                        <input
                                                type="email"
                                                className="w-full border rounded p-2 mt-1"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                placeholder="Enter your email"
                                        />
                                </div>

				<div>
                                        <label className="block text-sm font-medium">Usern
ame</label>
                                        <input
                                                type="password"
                                                className="w-full border rounded p-2 mt-1"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder="Enter your password"
                                        />
                                </div>

				<button 
					type="submit"
					className="w-full bg-blue-600 text-white p-2 rouded hover:bg-blue-700">Register</button>

			</form>
		</div>
	);
};

export default RegistrationForm;
