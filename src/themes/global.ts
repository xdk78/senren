const GlobalStyle = `
*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "Montserrat", sans-serif;
}

html, body {
  margin: 0px;
  padding: 0px;
  color: ${({ theme }) => theme.fontColor};
  background-color: ${({ theme }) => theme.background};
}
`

export default GlobalStyle
