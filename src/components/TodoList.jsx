import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  return (
    <div className="todo-container">
      <h1>Get Things Done !</h1>
      <TodoForm />
      <TodoItem todo={"Todo Item 1"} />
      <TodoItem todo={"Todo Item 2"} />
    </div>
  );
};

export default TodoList;
