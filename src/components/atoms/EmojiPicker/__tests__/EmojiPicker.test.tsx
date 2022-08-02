import { fireEvent, render, screen } from '@testing-library/react'

import EmojiPicker from '..'

jest.mock('emoji-picker-react', () => () => <div>EmojiPicker</div>)

describe('<EmojiPicker />', () => {
  it('Should open EmojiPicker when clicked for the first time', () => {
    const onClick = jest.fn()

    render(<EmojiPicker onEmojiClick={onClick} />)

    const emojiButton = screen.getByRole('button')

    fireEvent.click(emojiButton)

    const test = screen.getByText('EmojiPicker')

    expect(test).toBeInTheDocument()
  })
})
