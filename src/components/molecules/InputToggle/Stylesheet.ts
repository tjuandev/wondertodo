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

export const InputContainer = styled.div`
  display: flex;

  justify-content: space-between;
  padding: 10px 0.5rem;
  font-size: 1.25rem;

  background: ${theme.colors.white};

  height: 64px;

  border: none;
  border-radius: ${theme.radii.base};
  border-bottom: 5px solid ${props => props?.color || theme.colors.yellow};

  :focus-within {
    outline: ${theme.outline.base};
  }
`

export const Input = styled.input<InputProps>`
  background: transparent;
  border: none;

  height: 100%;

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-size: 20px;
  }

  :focus {
    outline: none;
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
