import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TodoItem = ({ todo }) => {
  return (
    <div className="todo-item">
      <p>{todo}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
        <FontAwesomeIcon icon={faTrash} className="delete-icon" />
      </div>
    </div>
  );
};

export default TodoItem;
