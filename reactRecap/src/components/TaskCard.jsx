export default function TaskCard({ task, deleteTask, markDone }) {
    return (
        <div>
            <p>Title: {task.title}</p>
            <p>Status: {task.status}</p>
            {
                task.status === 'todo' ? <p><i>Pending</i></p> :
                    task.status === 'in-progress' ? <p><i>Working</i></p> :
                        <p><i>Done</i></p>
            }
            <p>Priority: {task.priority}</p>
            {task.priority === 'high' && <p>⚠ Important task</p>}
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => markDone(task.id)}>Mark Done</button>
        </div>
    )
}
