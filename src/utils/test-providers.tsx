import React from 'react'
import { createGlobalStyle, ThemeProvider } from 'utils/styled-components'
import { Provider } from 'react-redux'
import withReduxStore from 'lib/with-redux-store'
import globalStyle from 'themes/global'
import lightTheme from 'themes/light'
const GlobalStyle = createGlobalStyle`${globalStyle}`

const AllTheProviders = ({ children, store }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </Provider>
  )
}

export default withReduxStore(AllTheProviders)
