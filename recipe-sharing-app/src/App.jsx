import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList.jsx';
import AddRecipeForm from './components/AddRecipeForm.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      	<div>
	  <Routes>
      		<Route path="/RecipeList" element={<RecipeList />} />
      		<Route path="/AddRecipeForm" element={<AddRecipeForm />} />
      		<Route path="/RecipeDetails" element={<RecipeDetails />} />
	  </Routes>
	  </div>
    </>
  );
}

export default App;
