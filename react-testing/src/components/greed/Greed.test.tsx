import { render, screen } from "@testing-library/react"
import { Greed } from "./Greed"

test('Greed Renders Correctly', () => {
    render(<Greed/>)
    const textElement = screen.getByText("Hello")
    expect(textElement).toBeInTheDocument()
})