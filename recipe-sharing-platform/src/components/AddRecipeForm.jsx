import { useState } from 'react';

function AddRecipeForm() {
	const [title, setTitle] = useState("");
	const [ingredients, setIngredients] = useState("");
	const [steps, setSteps] = useState("");
	const [errors, setErrors] = useState({});

	const validateForm = () => {
		let formErrors = {};

		if (!title.trim()) formErrors.title = "Recipe title required!";
		if (!ingredients.trim()) formErrors.ingredients = "Ingredients are required.";
		if (!steps.trim()) formErrors.steps = "Preparation steps are required.";

		setErrors(formErrors);
		return Object.keys(formErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!validateForm()) return;

		const newRecipe = {
			id: Data.now().
			title,
			ingredients: ingredients.split("/n"),
			steps,
		};

		console.log("Recipe submitted", newRecipe);

		setTitle("");
		setIngredients("");
		setSteps("");
		setErrors({});
	};

	return (
		<div className="container mx-auto px-4 py-8">
		<form 
		onSubmit={handleSubmit}
		className="max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md"
		>

			<h2 className="text-2xl font-bold mb-6 text-center">Add New Recipe</h2>
			
			<div className="mb-4">
				<label className="block text-gray-700 font-medium mb-2">Recipe Title</label>
				<input 
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Enter recipe title"
				className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring${errors.title ? "border-red-500" : "focus:ring-blue-300"}`}
				/>
				{errors.title && (
					<p className="text-red-500 text-sm mt-1">{errors.title}</p>
				)}
			</div>

			 <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Ingredients</label>
                                <textarea
                                type="text"
                                value={ingredients}
                                onChange={(e) => setIngredients(e.target.value)}
                                placeholder="Enter recipe ingredients"
				rows="5"
                                className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring${errors.ingredients ? "border-red-500" : "focus:ring-blue-300"}`}
                                />
                                {errors.ingredients && (
                                        <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
                                )}
                        </div>
			
			 <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Preparation Steps</label>
                                <textarea
                                type="text"
                                value={steps}
                                onChange={(e) => setSteps(e.target.value)}
                                placeholder="Describe the steps needed to prepare the dish"
				rows="6"
                                className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring${errors.steps ? "border-red-500" : "focus:ring-blue-300"}`}
                                />
                                {errors.steps && (
                                        <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
                                )}
                        </div>

			<button
			type="submit"
			className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
			>Add Recipe
			</button>
		</form>
		</div>
	);
}

export default AddRecipeForm;

