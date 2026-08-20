import { useContext } from 'react'
import UserContext from '../UserContext'

export default function AppHeader({title, subtitle, numOfTasks}) {
    const user = useContext(UserContext)
    return (
        <div>
            <h1>{title}{numOfTasks}</h1>
            <p>{subtitle}</p>
            <hr></hr>
            <p>Logged in as: {user.name}</p> 
            <p>Role: {user.role}</p>
            <hr></hr>
        </div>
    )
}
