// import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

const useList = () => {
  const storedTask = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  const [itemTask, setItemTask] = useState(storedTask);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(itemTask));
  }, [itemTask]);

  console.log(itemTask);
  return {
    get: () => itemTask,
    add: (task) =>
      setItemTask([{ title: task, completed: false }, ...itemTask]),
    remove: (index) => setItemTask(itemTask.filter((_, i) => index !== i)),
    upDate: (task) =>
      setItemTask(
        itemTask.map((t) =>
          t.title === task.title ? { ...t, completed: !t.completed } : t
        )
      ),
  };
};

export default useList;
