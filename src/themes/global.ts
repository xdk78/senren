import { createGlobalStyle } from '../styled-components'

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`

export default GlobalStyle
