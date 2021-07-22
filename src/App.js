import {
	Heading,
	VStack,
	IconButton,
	ButtonGroup,
	useColorMode,
	Box,
	Stack,
	Text,
	Link,
} from "@chakra-ui/react";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import { FaSun, FaMoon, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
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
			<Box
				as="footer"
				role="contentinfo"
				mx="auto"
				maxW="7xl"
				py="12"
				px={{ base: "4", md: "8" }}>
				<Stack>
					<Stack
						direction="row"
						spacing="4"
						align="center"
						justify="space-between">
						<ButtonGroup variant="ghost" color="gray.600">
							<IconButton
								as="a"
								href="https://www.linkedin.com/in/arihantbansal/"
								aria-label="LinkedIn"
								icon={<FaLinkedin fontSize="20px" />}
							/>
							<IconButton
								as="a"
								href="https://github.com/arihantbansal"
								aria-label="GitHub"
								icon={<FaGithub fontSize="20px" />}
							/>
							<IconButton
								as="a"
								href="https://twitter.com/_arihantbansal"
								aria-label="Twitter"
								icon={<FaTwitter fontSize="20px" />}
							/>
						</ButtonGroup>
					</Stack>
					<Text fontSize="md" alignSelf={{ base: "center", sm: "start" }}>
						&copy; {new Date().getFullYear()}{" "}
						<Link href="http://arihantbansal.github.io/">Arihant Bansal</Link>
					</Text>
				</Stack>
			</Box>
		</VStack>
	);
};

export default App;
