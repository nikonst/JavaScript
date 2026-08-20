import { useState } from 'react'
import Player from './Player'


const initialPlayers = [
    { id: 1, name: 'Anna', score: 0 },
    { id: 2, name: 'Mark', score: 0 },
    { id: 3, name: 'John', score: 0 },
]

export default function ScoreBoard() {
    const [thePlayers, setThePlayers] = useState(initialPlayers)
    const updateScore = (id) => {
        setThePlayers(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, score: item.score + 1  }
                    : item
            )
        )
    }
    return (
        <div>
            {thePlayers.map((player) => (
                <Player player={player} updateScore={updateScore} key={player.id} />
            ))}
        </div>
    )
}