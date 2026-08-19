import { useState, useRef } from "react"

export default function TaskForm({ addTask }) {
    const [title, setTitle] = useState('')
    const [status, setStatus] = useState('todo')
    const [priority, setPriority] = useState('low')

    const titleInputRef = useRef(null)

    function handleSubmit(event) {
        event.preventDefault()

        console.log(title, status, priority)
        if (title === "" || title === " ") {
            let title = "Learn React"
            addTask({ title, status, priority })
        } else {
            addTask({ title, status, priority })
        }
        setTitle('')
    }

    return (
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={titleInputRef}
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <select name="status" id="status">
                    <option value="todo">todo</option>
                    <option value="in-progress">in-progress</option>
                    <option value="done">done</option>
                </select>
                <select name="priority" id="priority">
                    <option value="low">low</option>
                    <option value="medium">medium</option>
                    <option value="high">high</option>

                </select>
                <button type="submit">Add</button>
                <button
                    type="button"
                    onClick={() => titleInputRef.current.focus()}
                >
                    Focus
                </button>
            </form>
    )
}