import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList.jsx';
import AddRecipeList from './components/AddRecipeList.jsx' 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      	<div>
        	<RecipeList />
		<AddRecipeList />
	  </div>
    </>
  );
}

export default App;
