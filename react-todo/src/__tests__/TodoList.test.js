import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../src/components/TodoList";

const getTodo = (text) => screen.getByText(text);

describe("TodoList Component", () => {
	test("renders initial todos", () => {
		render(<TodoList />);

		expect(getTodo("Learn React")).toBeInTheDocument();
		expect(getTodo("Learn Nextjs")).toBeInTheDocument();
		expect(getTodo("Practice everyday")).toBeInTheDocument();
	});

	test ("add a new todo", () => {
		render(<TodoList />);

		const input = screen.getByPlaceholderText("Enter a new task");
		const addButton = screen.getByText("Add");

		fireEvent.change(input, { target: { value: "Write Tests" } });
		fireEvent.click(addButton);

		expect(getTodo("Write Tests")).toBeInTheDocument();
	});

	test("toggles a todo", () => {
		render(<TodoList />);

		const todo = getTodo("Learn React");

		expect(todo).not.toHaveStyle("text-decoration: line-through");

		fireEvent.click(todo);

		expect(todo).toHaveStyle("text-decoration: line-through")
	});

	test("deletes a todo", () => {
		render(<TodoList />);

		const todo = getTodo("Practice everyday");

		const deleteButton = todo.parentElement.querySelector("button");

		fireEvent.click(deleteButton);

		expect(screen.queryByText("Practice everyday")).toBuNull();
	});
});
