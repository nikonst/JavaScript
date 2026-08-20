import { useEffect, useState, useRef } from 'react'

export default function AutoFocusInput() {
  const [inputEnabled, setInputEnabled] = useState(false)

  const inputRef = useRef(null)

  useEffect(() => {
    if (inputEnabled) {
      inputRef.current.focus()
    }
  }, [inputEnabled])

  const handleCheck = (event) => {
    setInputEnabled(event.target.checked)
  }

  return (
    <div>
      <h3>AutoFocusInput</h3>

      <label htmlFor="enable-input">
        <input
          type="checkbox"
          id="enable-input"
          checked={inputEnabled}
          onChange={handleCheck}
        />
        Enable input
      </label>

      <br />

      <input
        ref={inputRef}
        disabled={!inputEnabled}
        type="text"
      />
    </div>
  )
}