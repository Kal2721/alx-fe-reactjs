import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function RecipeDetail() {
	const { id } = useParams();
	const [recipe, setRecipe] = useState(null);

	useEffect(() => {
		fetch("/data.json")
		.then((response) => response.json())
		.then((data => {
			const foundRecipe = data.find((item) => item.id === parseInt(id);
				setRecipe(foundRecipe);
		})
		.catch((error) => console.error("Error loading recipe", error));
	}, [id];
		if (!recipe) {
			return (
				<div className="flex items-center justify-center h-screen">
					<p className="text-gray-500">Loading recipe...</p>
				</div>
		}

		return (
			<div className="container mx-auto px-4 p-8">
				<div className="bg-white rounded-2xl shadow-md overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
					<img
					src={recipe.image}
					alt={recipe.title}
					className="w-full h-72 object-cover"
					/>
					<div className="p-6">
						<h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
						<p className="text-gray-700 mb-6">{recipe.summary}</p>

						 <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
          						<ul className="list-disc pl-6 mb-6 text-gray-700">
            							{recipe.ingredients.map((ingredient, index) => (
									<li key={index}>{ingredient}</li>
								))}
							</ul>

          						<h2 className="text-xl font-semibold mb-2">Instructions</h2>
          						<p className="text-gray-700">{recipe.instructions}</p>
        				</div>
      				</div>
    			</div>
  );
}

export default RecipeDetail;


