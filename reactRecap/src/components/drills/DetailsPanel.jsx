import { useState } from 'react'

export default function DetailsPanel() {
    const [text, setText] = useState("")

    const updateText = () => {
        if (text) {
            setText("")
        } else {
            setText("React assessment preparation")
        }
    }

    return (
        <div>
            <button onClick={() => updateText()}>{
                text === "" ? 'Show Details' : "Hide Details"
            }</button>
            <p>{text}</p>
        </div>
    )

//         < button onClick = {() => setShowDetails(prev => !prev)
// }>
//     { showDetails? 'Hide details': 'Show details' }
// </button >

//     { showDetails && (
//         <p>React assessment preparation</p>
//     )}
}