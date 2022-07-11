import { IEmojiData } from 'emoji-picker-react'

export type EmojiPickerProps = {
  onEmojiClick: (emojiOBJ: IEmojiData) => void
}

export type EmojiState = string | null
