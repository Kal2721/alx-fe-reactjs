import { useState, useEffect } from "react";

const HomePage = () => {
	const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = usestate(null);

	useEffect(() => {
		let cancelled = false;

		fetch("/data.json")
		.then((response) => {
			if(!response.ok) {
				throw new Error("Failed to load recipe data");
				return response.json();
			})
		.then((data) => {
			if (!cancelled) setRecipe(data || []);
		})
		.catch((error) => {
			if (!cancelled) setError(error.message || "Unkown error ocurred")
			})
		.finally(() => {
			if(!cancelled) setLoading(false);
		});

		return () => {
			cancelled = true;
		};
		}, []);
	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<header className="flex items-center justify-between mb-6">
				<h2 className="text-2xl font-semibold">Recipe list</h2>
			</header>
			<h1>Recipe List</h1>
			{recipe.length === 0 ? (<p>Loading...</p>) : (
				<
