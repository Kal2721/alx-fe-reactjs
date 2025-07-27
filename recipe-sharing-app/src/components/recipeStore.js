import create from 'zustand';

const useRecipeStore = create(set => ({
	recipe: [],
	addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
	setRecipes: (recipes) => set({ recipes }),
	updateRecipe: (updatedRecipe) => set(state) => ({ recipes: state.recipe.map(recipe) => recipe.id === updatedRecipe.id ? updatedRecipe : recipe }),
	deleteRecipe: (id) => set(state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id)});
}));

export default useRecipeStore;
