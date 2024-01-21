import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="todo-container">
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
