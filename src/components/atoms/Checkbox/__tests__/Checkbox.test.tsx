import { render, screen } from '@testing-library/react'
import Checkbox from '..'

jest.mock('assets/icons/Checked', () => () => (
  <svg>
    <title>Checked</title>
  </svg>
))

const checkboxProps = {
  checked: false,
  color: 'red',
  onClick: () => ({})
}

describe('<Checkbox />', () => {
  it('Should show or not show checked icon based on truthy of checked button', () => {
    const { rerender } = render(<Checkbox {...checkboxProps} checked={true} />)

    const { parentElement: svgContainer } = screen.getByTitle('Checked')

    expect(svgContainer).toHaveStyle({
      opacity: 1
    })

    rerender(<Checkbox {...checkboxProps} checked={false} />)

    expect(svgContainer).toHaveStyle({
      opacity: 0
    })
  })
})
