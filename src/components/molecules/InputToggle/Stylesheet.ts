import { theme } from 'globalStyles/theme'
import styled from 'styled-components'
import { InputProps } from './types'

export const Wrapper = styled.div`
  > div,
  input {
    width: 100%;
    padding: 0 0.5rem;
  }
`

export const Input = styled.input<InputProps>`
  padding: 10px 0.5rem;
  font-size: 1.25rem;

  height: 50px;

  border: none;
  border-radius: ${theme.radii.base};
  border-bottom: 5px solid ${props => props?.color || theme.colors.yellow};

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
  }

  :focus {
    outline: ${theme.outline.base};
  }
`

export const CreateButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    cursor: pointer;

    font-size: 1.25rem;
    color: ${theme.colors.white};

    transition: color 0.25s ease-in-out;

    :hover {
      color: rgba(255, 255, 255, 0.25);
    }
  }

  p > span {
    font-weight: bolder;
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }
`
