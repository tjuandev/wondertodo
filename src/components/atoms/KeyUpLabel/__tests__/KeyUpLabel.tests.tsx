import { render, screen } from '@testing-library/react'
import KeyUpLabel from '..'

describe('<KeyUpLabel />', () => {
  it('Should render the text prop as content of the label', () => {
    render(<KeyUpLabel text="test" />)

    const label = screen.getByText(/test/i)

    expect(label).toBeInTheDocument()
  })
})
