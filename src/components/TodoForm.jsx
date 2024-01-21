import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo({ id: crypto.randomUUID(), task: todo, completed: false });
    setTodo("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="add todo..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="todo-btn">Add task</button>
    </form>
  );
};

export default TodoForm;
