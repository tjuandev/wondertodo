import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${theme.colors.background};
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    background: transparent;
    border: none;

    :focus {
      outline: none;
    }
  }
`

export default GlobalStyle
