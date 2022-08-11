import { render, screen } from '@testing-library/react'
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
  it('Should show checked icon when checkbox is checked', () => {
    render(<Checkbox {...checkboxProps} checked={true} />)

    const { parentElement: svgContainer } = screen.getByTitle('Checked')

    expect(svgContainer).toHaveStyle('opacity: 1')
  })
})
