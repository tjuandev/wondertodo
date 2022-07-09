import Smiley from 'assets/icons/Smiley'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { EmojiButton } from './Stylesheet'
import { EmojiState, EmojiPickerProps } from './types'

const EmojiPicker = dynamic(() => import('emoji-picker-react'), {
  ssr: false
})

export default function View({ onEmojiClick }: EmojiPickerProps) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [emoji, setEmoji] = useState<EmojiState>(null)

  return (
    <>
      <EmojiButton onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
        {emoji ?? <Smiley />}
      </EmojiButton>

      {showEmojiPicker && (
        <EmojiPicker
          onEmojiClick={(_, data) => {
            setEmoji(data.emoji)
            onEmojiClick(data)
          }}
        />
      )}
    </>
  )
}
