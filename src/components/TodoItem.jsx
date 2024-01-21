import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const TodoItem = ({ todo, deleteTodo, toggleComplete, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(todo.task);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(!isEditing);
    updateTodo(todo.id, taskToUpdate);
  };

  if (!isEditing) {
    return (
      <div className="todo-item">
        <p
          className={todo.completed ? "completed" : "incompleted"}
          onClick={() => toggleComplete(todo.id)}
        >
          {todo.task}
        </p>
        <div>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="edit-icon"
            onClick={() => setIsEditing(!isEditing)}
          />
          <FontAwesomeIcon
            icon={faTrash}
            className="delete-icon"
            onClick={() => deleteTodo(todo.id)}
          />
        </div>
      </div>
    );
  } else {
    return (
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          value={taskToUpdate}
          onChange={(e) => setTaskToUpdate(e.target.value)}
        />
        <button className="todo-btn" type="submit">
          Update
        </button>
      </form>
    );
  }
};

export default TodoItem;
