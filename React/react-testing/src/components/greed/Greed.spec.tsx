import { render, screen } from "@testing-library/react"
import { Greed } from "./Greed"

describe('Greed', () => {
    it('Renders correctly', () => {
        render(<Greed/>)
        const textElement = screen.getByText("Hello")
        expect(textElement).toBeInTheDocument()
    })
    
    it('Renders with a name', () => {
        render(<Greed name = 'Aspa'/>)
        const textElement = screen.getByText("Hello Aspa")
        expect(textElement).toBeInTheDocument()
    })
})

