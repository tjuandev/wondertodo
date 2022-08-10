import { Wrapper, StartBoxWrapper, EndBoxWrapper } from './Stylesheet'
import DragDots from 'assets/icons/DragDots'

import { Checkbox } from 'components/atoms'
import { useState } from 'react'
import { theme } from 'globalStyles/theme'

import { TodoProps } from './types'

export default function Todo({
  text,
  checked,
  color = theme.colors.dark,
  emoji = '🚀'
}: TodoProps) {
  const [isTodoDone, setIsTodoDone] = useState(checked)

  const toggleTodoDone = () => setIsTodoDone(!isTodoDone)

  return (
    <Wrapper color={color}>
      <StartBoxWrapper>
        <DragDots />
        <Checkbox checked={isTodoDone} color={color} onClick={toggleTodoDone} />
        <p>{text}</p>
      </StartBoxWrapper>
      <EndBoxWrapper>{emoji}</EndBoxWrapper>
    </Wrapper>
  )
}
