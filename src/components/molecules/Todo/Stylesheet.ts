import { theme } from 'globalStyles/theme'
import styled from 'styled-components'

export const Wrapper = styled.li`
  color: ${theme.colors.dark};
  font-size: 1.25rem;

  background: ${theme.colors.white};

  border-radius: ${theme.radii.base};
  border-bottom: 5px solid ${props => props.color};

  &,
  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  justify-content: space-between;

  padding: 10px 0.5rem;

  height: 64px;

  div > svg:first-child {
    cursor: grab;
  }
`

export const StartBoxWrapper = styled.div``
export const EndBoxWrapper = styled.div`
  font-size: 1.5rem;
`
