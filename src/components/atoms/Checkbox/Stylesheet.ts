import styled from 'styled-components'

type ButtonsProps = {
  checked: boolean
  color: string
}

export const Button = styled.button<ButtonsProps>`
  width: 28px;
  height: 28px;
  border: 2px solid #8e8e8e;
  border-radius: 50%;

  cursor: pointer;

  > svg {
    width: 100%;
    height: 100%;
    opacity: ${props => (props.checked ? '1' : '0')};
    transition: all 0.25s ease-in-out;
  }

  > svg:hover {
    opacity: 0.25;
    filter: contrast(0);
  }
`
