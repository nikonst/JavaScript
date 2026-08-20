import { useState } from 'react'

export default function SelectableTask() {

    const [selected, setSelected] = useState(false)

    const handleButton = (event) => {
        event.stopPropagation()
        console.log("Deleted")
    }

    const handleClick = () => {
        setSelected(prev => !prev)
    }

    return (
        <div>
            <div onClick={handleClick}>
                Review React hooks
                <button onClick={handleButton}>Delete</button>
            </div>

            {selected && <p>Selected</p>}
        </div>
    )
}