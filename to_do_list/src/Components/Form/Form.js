import { useState } from "react";

const Form = ({ itemTask }) => {
    const [task, setTask] = useState('')

    const handle = (e) => {
        e.preventDefault();
        itemTask(task)
    }

    return (
        <form onSubmit={handle}>
            <input
                onChange={(e) => setTask(e.target.value)}
                value={task}
                placeholder='Introduce your task'
            ></input>
            <button>add</button>
        </form>
    )
}

export default Form;