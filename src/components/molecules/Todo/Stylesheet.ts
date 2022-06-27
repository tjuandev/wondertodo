import { theme } from 'globalStyles/theme'
import styled from 'styled-components'

export const Wrapper = styled.li`
  color: ${theme.colors.dark};
  font-size: 1.25rem;

  background: ${theme.colors.white};

  border-radius: ${theme.radii.base};
  border-bottom: 5px solid #0094ff;

  max-width: 900px;

  &,
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  justify-content: space-between;

  padding: 10px 0.5rem;
`

export const StartBoxWrapper = styled.div``
export const EndBoxWrapper = styled.div``
