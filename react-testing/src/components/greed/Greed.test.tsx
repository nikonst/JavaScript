import { render, screen } from "@testing-library/react"
import { Greed } from "./Greed"

test('Greed Renders Correctly', () => {
    render(<Greed/>)
    const textElement = screen.getByText("Hello")
    expect(textElement).toBeInTheDocument()
})

test('Greed renders with a name', () => {
    render(<Greed name = 'Aspa'/>)
    const textElement = screen.getByText("Hello Aspa")
    expect(textElement).toBeInTheDocument()
})