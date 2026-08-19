import { useState } from "react"

export default function TaskForm({ addTitle }) {
    const [title, setTitle] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        console.log(title)
        if (title === "" || title === " ") {
            addTitle("Learn React")
        } else {
            addTitle(title)
        }
        setTitle('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />

            <button type="submit">Add</button>
        </form>
    )
}