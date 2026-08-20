import React, { useState } from 'react'

export default function CharacterStats() {

    const [strength, setStrength] = useState(5)
    const [agility, setAgility] = useState(5)

    const handleClickStrength = (op) => {
        op === "plus" ?
            setStrength(prev => prev + 1)
            :
            setStrength(prev => prev - 1)
    }
    const handleClickAgility = (op) => {
        op === "plus" ?
            setAgility(prev => prev + 1)
            :
            setAgility(prev => prev - 1)
    }

    return (
        <>
            <div>CharacterStats</div>
            <p>Strength: {strength} /
                <button disabled={15 - strength - agility == 0} onClick={() => handleClickStrength("plus")}>+</button>
                <button disabled={strength === 0} onClick={() => handleClickStrength("minus")}>-</button>
            </p>
            <p>Agility: {agility} /
                <button disabled={15 - strength - agility == 0} onClick={() => handleClickAgility("plus")}>+</button>
                <button disabled={agility === 0} onClick={() => handleClickAgility("minus")}>-</button>
            </p>
            <p>
                Points Left: {15 - strength - agility }
            </p>
        </>
    )
}
