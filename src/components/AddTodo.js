import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { nanoid } from "nanoid";

const AddTodo = ({ addTodo }) => {
	const [todoContent, setTodoContent] = useState("");
	const toast = useToast();

	const handleSubmit = e => {
		e.preventDefault();

		if (!todoContent) {
			toast({
				title: "No content",
				status: "error",
				duration: 2000,
				isClosable: true,
			});
			return;
		}

		const todo = {
			id: nanoid(),
			body: todoContent,
		};

		addTodo(todo);
		setTodoContent("");
	};
	return (
		<form onSubmit={handleSubmit}>
			<HStack mt="8">
				<Input
					variant="filled"
					placeholder="learn typescript"
					value={todoContent}
					onChange={e => setTodoContent(e.target.value)}
				/>
				<Button colorScheme="pink" px="8" type="submit">
					Add Todo
				</Button>
			</HStack>
		</form>
	);
};

export default AddTodo;
