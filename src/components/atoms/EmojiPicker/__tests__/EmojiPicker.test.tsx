import userEvent from '@testing-library/user-event'
import { render, screen } from '@testing-library/react'

import EmojiPicker from '..'

jest.mock('emoji-picker-react', () => ({
  __esModule: true,
  default: ({ onEmojiClick }: any) => (
    <button onClick={e => onEmojiClick(e, { emoji: '🚀' })}>EmojiPicker</button>
  )
}))

describe('<EmojiPicker />', () => {
  const user = userEvent.setup({
    delay: null
  })

  it("Should open EmojiPicker and it's wrapper when clicked for the first time", async () => {
    const onClick = jest.fn()

    render(<EmojiPicker onEmojiClick={onClick} />)

    const emojiButton = screen.getByRole('button')

    await user.click(emojiButton)

    const emojiWrapper = screen.getByTestId('emoji-wrapper')

    const emojiPicker = await screen.findByRole('button', {
      name: 'EmojiPicker'
    })

    expect(emojiPicker).toBeInTheDocument()
    expect(emojiWrapper).toBeInTheDocument()
  })

  it('Should call onClick and update emoji button value state when an emoji is selected', async () => {
    const onClick = jest.fn()

    render(<EmojiPicker onEmojiClick={onClick} />)

    const emojiButton = screen.getByRole('button')

    await user.click(emojiButton)

    const emojiPicker = screen.getByRole('button', {
      name: 'EmojiPicker'
    })

    await user.click(emojiPicker)

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(emojiButton.textContent).toBe('🚀')
  })

  it('Should close EmojiPicker when clicked outside', async () => {
    const onClick = jest.fn()

    render(<EmojiPicker onEmojiClick={onClick} />)

    const emojiButton = screen.getByRole('button')

    await user.click(emojiButton)

    const emojiPicker = screen.getByRole('button', {
      name: 'EmojiPicker'
    })

    await user.click(document.querySelector('body')!)

    expect(emojiPicker).not.toBeInTheDocument()
  })
})
