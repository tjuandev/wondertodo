import { fireEvent, render, screen } from '@testing-library/react'
import Checkbox from '..'

jest.mock('assets/icons/Checked', () => ({ color }: { color: string }) => {
  return (
    <svg style={{ fill: color }}>
      <title>Checked</title>
    </svg>
  )
})

describe('Component Checkbox', () => {
  it('Should fire onClick event when button is trigged', () => {
    const onClick = jest.fn()

    render(<Checkbox checked={false} color="red" onClick={onClick} />)

    const checkBoxButton = screen.getByRole('button')

    fireEvent.click(checkBoxButton)

    expect(onClick).toHaveBeenCalled()
  })

  it('Should change checked svg color based on props', () => {
    render(<Checkbox checked={false} color="red" onClick={jest.fn} />)

    const { parentElement: svgContainer } = screen.getByTitle('Checked')

    expect(svgContainer).toHaveStyle('fill: red')
  })
})
