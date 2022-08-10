import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'
import InputToggle from '..'

const inputToggleCommonProps = {
  text: 'inputMode',
  onSubmit: jest.fn(),
  inputProps: {
    placeholder: 'inputPlaceholder'
  }
}

describe('<InputToggle />', () => {
  const user = userEvent.setup()

  it('Should render a button with text prop as content', () => {
    render(<InputToggle {...inputToggleCommonProps} />)

    const button = screen.getByRole('button', {
      name: 'inputMode'
    })

    expect(button).toBeInTheDocument()
  })

  it('Should activate input mode when button is clicked', async () => {
    render(<InputToggle {...inputToggleCommonProps} />)

    const button = screen.getByRole('button', {
      name: 'inputMode'
    })

    await user.click(button)

    const input = screen.getByPlaceholderText('inputPlaceholder')

    expect(input).toBeInTheDocument()
  })

  it('Should call onSubmit when form is submitted', async () => {
    const onSubmit = jest.fn()

    render(<InputToggle {...inputToggleCommonProps} onSubmit={onSubmit} />)

    const button = screen.getByRole('button', {
      name: 'inputMode'
    })

    await user.click(button)

    const input = screen.getByPlaceholderText('inputPlaceholder')

    await user.type(input, '{Enter}')

    expect(onSubmit).toHaveBeenCalled()
  })
})
