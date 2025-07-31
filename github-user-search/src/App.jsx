import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	  <header>
	  	<Routes>
	  		<Route path="/" element={<Home />} />
	  		<Route path="/about" element{</About />} />
	  		<Route path="/contact" element{</Contact />} />
	  	</Routes>
	  </header>
    </>
  )
}

export default App
