import { render, screen } from "@testing-library/react"
import { Greed } from "./Greed"

describe('Greed', () => {
    test('Renders correctly', () => {
        render(<Greed/>)
        const textElement = screen.getByText("Hello")
        expect(textElement).toBeInTheDocument()
    })
    
    test('Renders with a name', () => {
        render(<Greed name = 'Aspa'/>)
        const textElement = screen.getByText("Hello Aspa")
        expect(textElement).toBeInTheDocument()
    })
})

