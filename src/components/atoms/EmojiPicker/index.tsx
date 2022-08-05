import Smiley from 'assets/icons/Smiley'

import dynamic from 'next/dynamic'
import { MouseEvent, useState } from 'react'
import { Container, EmojiButton, EmojiPickerWrapper } from './Stylesheet'
import { EmojiState, EmojiPickerProps } from './types'

import { useClickOutside } from 'hooks'

import { IEmojiData } from 'emoji-picker-react'
const EmojiPicker = dynamic(() => import('emoji-picker-react'), {
  ssr: false
})

export default function View({
  onEmojiClick: handleEmojiClick
}: EmojiPickerProps) {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false)
  const [emoji, setEmoji] = useState<EmojiState>(null)

  const ref = useClickOutside({
    onClick: () => setShowEmojiPicker(false)
  })

  const toggleEmojiPicker = () => setShowEmojiPicker(!showEmojiPicker)

  const onEmojiClick = (_: MouseEvent, data: IEmojiData) => {
    setEmoji(data.emoji)
    handleEmojiClick(data)
  }

  return (
    <Container ref={ref}>
      <EmojiButton type="button" onClick={toggleEmojiPicker}>
        {emoji ?? <Smiley />}
      </EmojiButton>

      {showEmojiPicker && (
        <EmojiPickerWrapper data-testid="emoji-wrapper">
          <EmojiPicker disableSkinTonePicker onEmojiClick={onEmojiClick} />
        </EmojiPickerWrapper>
      )}
    </Container>
  )
}
