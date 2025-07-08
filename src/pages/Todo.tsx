import TodoContainer from "../components/todo/todoContainer";
import Container from "../components/ui/Container";
const todo = () => {
  return (
    <Container>
      <h2 className="text-center text-3xl font-semibold my-4">My Todos</h2>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default todo;
