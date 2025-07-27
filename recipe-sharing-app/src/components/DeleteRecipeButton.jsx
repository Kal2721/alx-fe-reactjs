import { useState, useNavigate } from 'react';
import { useRecipeStore } from './recipeStore';

const DeleteRecipeButton = () => {
	const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

	const handleDelete = () =>{
		if (window.confirm('Are you sure you want to delet the recipe')) {
			deleteRecipe(recipeId);
			onDelete?.();
		}
	};

	return (
		<button onClick={handleDelete}>Delete</button>
	);
};

export default DeleteRecipeButton;
