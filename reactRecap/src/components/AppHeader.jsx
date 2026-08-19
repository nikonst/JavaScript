export default function AppHeader({title, subtitle, numOfTasks}) {
    return (
        <div>
            <h1>{title}{numOfTasks}</h1>
            <p>{subtitle}</p>
            <hr></hr>
        </div>
    )
}
