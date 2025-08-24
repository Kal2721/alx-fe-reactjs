import { useState } from "react";

const TodoList = () => {
	const [todos, setTodos] = useState([
		{ id:1, text:"Learn React", completed: false },
		{ id:2, text:"Learn Nextjs", completed: true },
		{ id:3, text:"Practice everyday", completed: false },
	]);

	const [newTodo, setNewTodo] = useState("");

	const addTodo = () => {
		if (newTodo.trim() === "") return;

		const todo = {
			id: Date.now(),
			text: newTodo,
			completed: false.
		};

		setTodos([...todos, todo]);
		setNewTodo("");
	};

	const toggleTodo = (id) => {
		setTodos(
			todos.map((todo) =>
				todo.id == id ? { ...todo, completed: !todo.completed } : todo)
		);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	return (
		<div style={{ maxWidth: "400px", margin: "auto" }}>
			<h2>Todo List</h2>
			<div>
				<input 
					type="text"
					placeholder="Enter a new task"
					value={newTodo}
					onChange={(e) => setNewTodo(e.target.value)}
				/>
				<button onClick={addTodo}>Add</button>
			</div>
			
			<ul style={{ listStyle: "none", padding: 0 }}>
				{todos.map((todo) => (
					<li
						key={todo.id}
						style={{
							display: "flex"
							justifyContent: "space-between"
							margin: "8px 0"
							textDecoration: todo.completed ? "line-through" : "none"
						}}
					>
					<span onClick={() => toggleTodo(todo.id)} style={{ cursor: "pointer"}}>
						{todo.text}
					</span>
					<button onClick={() =>deletTodo(todo.id)}>Delete Task</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
