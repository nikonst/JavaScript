import { useState } from "react"

function fakeRequest() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data loaded!')
        }, 1500)
    })
}

export default function AsyncDemo() {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function loadData() {
        console.log("Load Data")

        setLoading(true)
        setError(null)

        try {
            const result = await fakeRequest()
            setData(result)
        } catch (error) {
           setError(error)
        } finally {
            setLoading(false)
        }

        // εδώ θα γράψεις εσύ τη λογική
    }

    return (
        <div>
            <button onClick={() => loadData()}>Load Data</button>
            {/* button + conditional rendering */}
        </div>
    )
}