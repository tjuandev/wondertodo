import styled from 'styled-components'

import { theme } from 'globalStyles/theme'

export const Container = styled.div`
  position: relative;
  display: inline-block;
`

export const EmojiButton = styled.button`
  display: flex;
  align-items: center;

  font-size: 1.5rem;

  cursor: pointer;

  svg {
    transition: ${theme.transitions.base};
  }

  :hover {
    svg {
      filter: brightness(0.2);
    }
  }
`

export const EmojiPickerWrapper = styled.div`
  > aside.emoji-picker-react {
    box-shadow: none;
    border: none;
    border-radius: 0;

    width: 400px;

    position: absolute;

    transform: translate(-95%, -115%);
  }
`
