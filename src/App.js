import { Heading, VStack, IconButton } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";

const App = () => {
	const initialTodos = [
		{
			id: 1,
			body: "get bread",
		},
		{
			id: 2,
			body: "get butter",
		},
	];
	const [todos, setTodos] = useState(initialTodos);

	const deleteTodo = id => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	const addTodo = todo => {
		setTodos([...todos, todo]);
	};

	return (
		<VStack p={4}>
			<IconButton
				icon={<FaSun />}
				isRound="true"
				size="lg"
				alignSelf="flex-end"
			/>
			<Heading
				mb="8"
				fontWeight="extrabold"
				size="2xl"
				bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
				bgClip="text">
				Todo Application
			</Heading>
			<TodoList todos={todos} deleteTodo={deleteTodo} />
			<AddTodo />
		</VStack>
	);
};

export default App;
