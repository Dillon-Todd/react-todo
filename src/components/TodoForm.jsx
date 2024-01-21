const TodoForm = () => {
  return (
    <form className="todo-form">
      <input type="text" className="todo-input" placeholder="add todo..." />
      <button className="todo-btn">Add task</button>
    </form>
  );
};

export default TodoForm;
