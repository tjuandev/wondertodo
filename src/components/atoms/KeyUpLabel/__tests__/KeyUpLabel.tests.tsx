import { render, screen } from '@testing-library/react'
import { KeyUpLabel } from 'components/atoms'

describe('<KeyUpLabel />', () => {
  it('Renders the text prop as content of the label', () => {
    render(<KeyUpLabel text="test" />)

    const label = screen.getByText(/test/i)

    expect(label).toBeInTheDocument()
  })
})
