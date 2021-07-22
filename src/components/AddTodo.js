import { Button, HStack, Input } from "@chakra-ui/react";

const AddTodo = () => {
	const handleSubmit = e => {};
	return (
		<form onSubmit={handleSubmit}>
			<HStack mt="8">
				<Input variant="filled" placeholder="learn typescript" />
				<Button colorScheme="pink" px="8" type="submit">
					Add Todo
				</Button>
			</HStack>
		</form>
	);
};

export default AddTodo;
