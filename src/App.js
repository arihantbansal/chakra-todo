import { Heading, VStack, IconButton, useColorMode } from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

const App = () => {
	// eslint-disable-next-line
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

	const [todos, setTodos] = useState(
		() => JSON.parse(localStorage.getItem("todos")) || []
	);

	const { colorMode, toggleColorMode } = useColorMode();

	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);

	const deleteTodo = id => {
		setTodos(todos.filter(todo => todo.id !== id));
	};

	const addTodo = todo => {
		setTodos([...todos, todo]);
	};

	return (
		<VStack p={4}>
			<IconButton
				icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
				isRound="true"
				size="lg"
				alignSelf="flex-end"
				onClick={toggleColorMode}
			/>
			<Heading
				mb="8"
				fontWeight="extrabold"
				size="2xl"
				bgGradient="linear(to-r, #007CF0, #00DFD8)"
				bgClip="text"
				style={{ marginBottom: "16px" }}>
				Todo Application
			</Heading>
			<TodoList todos={todos} deleteTodo={deleteTodo} />
			<AddTodo addTodo={addTodo} />
		</VStack>
	);
};

export default App;
