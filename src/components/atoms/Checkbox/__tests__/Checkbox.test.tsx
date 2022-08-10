import { fireEvent, render, screen } from '@testing-library/react'
import Checkbox from '..'

jest.mock('assets/icons/Checked', () => ({ color }: { color: string }) => {
  return (
    <svg style={{ fill: color }}>
      <title>Checked</title>
    </svg>
  )
})

const checkboxProps = {
  checked: false,
  color: 'red',
  onClick: () => ({})
}

describe('<Checkbox />', () => {
  it('Should fire onClick event when button is trigged', () => {
    const onClick = jest.fn()

    render(<Checkbox {...checkboxProps} onClick={onClick} />)

    const checkBoxButton = screen.getByRole('button')

    fireEvent.click(checkBoxButton)

    expect(onClick).toHaveBeenCalled()
  })

  it('Should change checked svg color based on props', () => {
    render(<Checkbox {...checkboxProps} />)

    const { parentElement: svgContainer } = screen.getByTitle('Checked')

    expect(svgContainer).toHaveStyle('fill: red')
  })

  it('Should change svg opacity when checked', () => {
    render(<Checkbox {...checkboxProps} checked={true} />)

    const { parentElement: svgContainer } = screen.getByTitle('Checked')

    expect(svgContainer).toHaveStyle('opacity: 1')
  })
})
