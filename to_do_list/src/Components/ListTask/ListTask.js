import "./ListTask.css";
const ListTask = ({ itemTask, deleteTask, upDate }) => {
  return (
    <ul>
      {itemTask().map((task, index) => (
        <li key={index} className={task.completed ? "completed" : null}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => upDate(task)}
          />
          {task.title}
          <button onClick={() => deleteTask(index)}>🗑️</button>
        </li>
      ))}
    </ul>
  );
};

export default ListTask;
