import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
  };

  const updateTodo = (id, task) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, task: task } : todo))
    );
  };

  return (
    <div className="todo-container">
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
          updateTodo={updateTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
