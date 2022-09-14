const ListTask = ({ itemTask, deleteTask }) => {

    return (
        <ul>
            {itemTask().map((task, index) =>
                <li key={index}>
                    {task}
                    <button onClick={() => deleteTask(index)}>🗑️</button>
                    </li>
            )}
        </ul>
    )
}

export default ListTask;