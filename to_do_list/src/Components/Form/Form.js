import { useState } from "react";
import "./Form.css";

const Form = ({ itemTask }) => {
  const [task, setTask] = useState("");

  const handle = (e) => {
    e.preventDefault();
    if (task !== "") {
      itemTask(task);
    }
    setTask("");
  };

  return (
    <form onSubmit={handle}>
      <input
        onChange={(e) => setTask(e.target.value)}
        value={task}
        placeholder="Introduce your task"
      ></input>
      <button>✏️</button>
    </form>
  );
};

export default Form;
