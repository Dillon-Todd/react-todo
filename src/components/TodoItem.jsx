import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <div className="todo-item">
      <p>{todo.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
        <FontAwesomeIcon
          icon={faTrash}
          className="delete-icon"
          onClick={() => deleteTodo(todo.id)}
        />
      </div>
    </div>
  );
};

export default TodoItem;
