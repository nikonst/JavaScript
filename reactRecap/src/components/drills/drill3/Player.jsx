export default function Player({player, updateScore}) {
  
    return (
        <div>
            <p>Hello</p>
            {player.name} / {player.score} / <button onClick={() => updateScore(player.id)}>+1</button>
        </div>
    )
}