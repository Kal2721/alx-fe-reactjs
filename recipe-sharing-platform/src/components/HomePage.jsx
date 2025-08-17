import { useState, useEffect } from "react";
import Link from 'react-router-dom';

const HomePage = () => {
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		fetch("/data.json")
		.then((response) => response.json())
		.then((data) => setRecipe(data));
		.catch((error) => console.error("Error loading recipes", error));
		}, []);
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold text-center mb-8"> Recipe Lists</h1>

			<div classname="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
		{recipes.map((recipe) => (
			<div
			key= {recipe.id}
			className="bg-[#658D6D] text-white-600 rounded-2xl shadow-md overflow-hidden hover:shadow"
			>
				<img
				src={recipe.image}
				alt={recipe.title}
				className="w-full h-48 object-cover"
				/>
				<div className="p-4">
					<h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
					<p className="text-white-500 text-sm">{recipe.summary}</p>
				</div>
			</div>
		))}
		</div>
		</div>
	);
}

export default HomePage;
