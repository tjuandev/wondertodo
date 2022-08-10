import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import Todo from '..'
import { CheckboxProps } from 'components/atoms/Checkbox/types'

jest.mock('components/atoms/Checkbox', () => (props: CheckboxProps) => {
  return <button {...props}>{props.checked ? 'checked' : 'not-checked'}</button>
})

const todoProps = {
  text: 'todo',
  checked: false
}

describe('<Todo />', () => {
  const user = userEvent.setup({
    delay: null
  })

  it('Should render a paragraph with text prop as content', () => {
    render(<Todo {...todoProps} />)

    const paragraph = screen.getByText(/todo/i)

    expect(paragraph).toBeInTheDocument()
  })

  it('Should toggle checkbox when clicked in button', async () => {
    render(<Todo {...todoProps} />)

    const checkbox = screen.getByRole('button')

    await user.click(checkbox)

    expect(checkbox).toHaveTextContent('checked')

    await user.click(checkbox)

    expect(checkbox).toHaveTextContent('not-checked')
  })
})
