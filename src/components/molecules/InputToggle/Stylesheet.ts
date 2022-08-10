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

export const EndElementsContainer = styled.div`
  display: flex;
  gap: 8px;
`

export const InputForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px 0.5rem;

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

  font-size: 1.25rem;

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

    transition: ${theme.transitions.base};

    :hover {
      color: rgba(255, 255, 255, 0.25);
    }
  }

  > div {
    display: flex;
    gap: 0.5rem;
  }
`
