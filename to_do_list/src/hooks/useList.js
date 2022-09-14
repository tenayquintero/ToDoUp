import { useState } from "react"

const useList = () => {
    const [itemTask, setItemTask] = useState([]);
    return {
        get: () => itemTask,
        add: (task) => setItemTask([...itemTask, task]),
        remove: (index) => setItemTask(itemTask.filter((_, i) => index !== i))
    }
}

export default useList;
