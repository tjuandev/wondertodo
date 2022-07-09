import styled from 'styled-components'

import { theme } from 'globalStyles/theme'

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
