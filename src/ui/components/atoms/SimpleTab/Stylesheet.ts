import styled from 'styled-components'
import { SimpleTabProps } from './types'

export const Container = styled.h2<Pick<SimpleTabProps, 'active'>>`
  position: relative;

  font-size: 1.857rem;
  font-weight: 600;

  color: ${({ active }) => (active ? '#f4f4f4' : 'gray')};
  padding: 1.5rem 1rem;

  cursor: pointer;
  transition: color 0.25s ease-in;

  ::after {
    content: '';
    width: 100%;
    height: 6px;
    border-radius: 5px;

    background: #f4f4f4;

    position: absolute;

    left: 0px;
    bottom: 0rem;

    opacity: ${({ active }) => (active ? '1' : '0')};

    transition: opacity 0.25s ease-in;
  }

  :hover {
    color: #f4f4f4;

    ::after {
      opacity: 1;
    }
  }
`
