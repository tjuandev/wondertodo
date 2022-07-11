import Smiley from 'assets/icons/Smiley'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { Container, EmojiButton, EmojiPickerWrapper } from './Stylesheet'
import { EmojiState, EmojiPickerProps } from './types'

import { useClickOutside } from 'hooks'

const EmojiPicker = dynamic(() => import('emoji-picker-react'), {
  ssr: false
})

export default function View({ onEmojiClick }: EmojiPickerProps) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [emoji, setEmoji] = useState<EmojiState>(null)

  const ref = useClickOutside({
    onClick: () => setShowEmojiPicker(false)
  })

  return (
    <Container ref={ref}>
      <EmojiButton
        type="button"
        onClick={() => setShowEmojiPicker(!showEmojiPicker)}
      >
        {emoji ?? <Smiley />}
      </EmojiButton>

      {showEmojiPicker && (
        <EmojiPickerWrapper>
          <EmojiPicker
            disableSkinTonePicker
            onEmojiClick={(_, data) => {
              setEmoji(data.emoji)
              onEmojiClick(data)
            }}
          />
        </EmojiPickerWrapper>
      )}
    </Container>
  )
}
