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
  overflow-x: hidden;
}
@media (prefers-color-scheme: dark) {
  html, body { background-color: black }
}
`

export default GlobalStyle
